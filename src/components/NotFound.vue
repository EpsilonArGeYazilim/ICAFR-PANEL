<template>
 <div>

   <input type="file" id="file" ref="file" />

   <button type="button" @click='uploadFile()' >Upload file</button>
</div>
</template>

<script>
import axios from "axios";
  export default {
      
data: function() {
         return  {
           file: ""
         }
    },
  methods: {

     uploadFile: function(){

       this.file = this.$refs.file.files[0];

       let formData = new FormData();
       formData.append('file', this.file);

       axios.post('https://epsilonarge.com/EpsilonWebService/uploadimg.php', formData,
       {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
       })
       .then(function (response) {

          if(!response.data){
             alert('File not uploaded.');
          }else{
             alert('File uploaded successfully.');
          }

       })
       .catch(function (error) {
           //conso.log(error);
       });

     }
   }
  }

  //Php de unlink dosya silme işlemi */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/
</script>

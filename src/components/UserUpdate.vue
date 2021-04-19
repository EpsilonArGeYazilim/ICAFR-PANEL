<template>
<div>
    <Header/>

<main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-dashboard"></i>Kullanıcılar</h1>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item"><a href="#">Kullanıcılar</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="tile">
                    <h3 class="tile-title">Kullanıcılar</h3>
                    <div class="tile-body">
                        <form>
                            <div class="form-group">
                                <label class="control-label">Adı:</label>
                                <input v-model="result.firstname" class="form-control" type="text" placeholder="Kullanıcı Adını Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Soyadı:</label>
                                <input v-model="result.lastname" class="form-control" type="text" placeholder="Kullanıcı Adını Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Email:</label>
                                <input v-model="result.email" class="form-control" type="email" placeholder="Email Adresinizi Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Telefon Numarası:</label>
                                <input v-model="result.phone" class="form-control" type="email" placeholder="Telefon Numarasını Giriniz">
                            </div>

                            <div class="row">
                                <div class="col-md-12 offset-md-12">
                                    <form action="page2.php" id="myForm1" class="needs-validation" novalidate>
                                        <div class="form-group">
                                            Şifre:<input v-model="result.password" type="password" id="pwdId" class="form-control" pattern="^[a-z]{2,4}$" required placeholder="Şifrenizi Giriniz">
                                            <div class="valid-feedback">Şifreler Uyuşuyor</div>
                                            <div class="invalid-feedback">a to z only (2 to 4 long)</div>
                                        </div>
                                        <div class="form-group">
                                            Şifre:<input v-model="result.password" type="password" id="cPwdId" class="form-control" pattern="^[a-z]{2,4}$" required placeholder="Şifrenizi Tekrar Giriniz">
                                            <div id="cPwdValid" class="valid-feedback">Şifreler Uyuşuyor</div>
                                            <div id="cPwdInvalid" class="invalid-feedback">a to z only (2 to 4 long)
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </form>
                    </div>

                    <div class="tile-footer">
                <button
                    @click="sendData()"
                    class="btn btn-primary"
                    type="button"
                  >
                    <i class="fa fa-fw fa-lg fa-check-circle"></i>Güncelle
                  </button>

                  <button
                    @click="deleteData()"
                    class="btn btn-danger fileupload-exists"
                    ><i class="fa fa-trash-o"></i>Sil
                  </button>          
                  </div>


                </div>
            </div>
        </div>

               <div class="row">
            <div class="col-md-12">

                <div class="tile">
                    <div class="tile-body">

                        <table class="table table-hover table-bordered" id="sampleTable">
                            <thead>
                                <tr>
                    <th>Id</th>
                    <th>Adı</th>
                    <th>Soyadı</th>
                    <th>Email</th>
                    <th>Telefon</th>
                    <th>Password</th>
                    <th>Tarih</th>
                    <th>Token</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>

        <Sidebar/>
    </div>
</template>

<script>
import Header from "./default/Header";
import Sidebar from "./default/Sidebar";
import axios from "axios";
import store from '../store';
export default {
  data() {
    return {
      result: {
        id:"",
        firstname: "",
        lastname: "",
        email:"",
        phone:"",
        password:""
      }
    };
  },
  methods: {
    sendData: function () {
      var url = store.state.base_url+"User/updateByIdUser.php?key=123";

      var datas = {
        admin_id: localStorage.getItem("id"),
        admin_token: localStorage.getItem("token"),
        update_id: this.result.id,
        firstname: this.result.firstname,
        lastname: this.result.lastname,
        email:this.result.email,
        phone:this.result.phone,
        password:this.result.password
      };

      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {

          if(response.data.data==true)
          {
            location.reload();
          }

          ////conso.log(response);
        })
        .catch((error) => {
          //conso.log(error.response);
        });
    },
    deleteData: function () {
      var url = store.state.base_url+"User/deleteByIdUser.php?key=123";

      var datas = {
        admin_id: localStorage.getItem("id"),
        admin_token: localStorage.getItem("token"),
        delete_id: this.result.id,
      };

      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {
          if(response.data.data==true)
          {
            location.reload();
          }
          ////conso.log(response);
        })
        .catch((error) => {
          //conso.log(error.response);
        });
    },
  },

  mounted() {
   
    var results = this.result;
    var url = store.state.base_url+"User/getAllUser.php?key=123";

      var datas = {
        admin_id: localStorage.getItem("id"),
        admin_token: localStorage.getItem("token")
      };

      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {
        //conso.log(response);
        datas = response.data.data;

        var table = $("#sampleTable").DataTable();

        $.each(datas, function (index, value) {
          table.row
            .add([
              value["id"],
              value["firstname"],
              value["lastname"],
              value["email"],
              value["phone"],
              value["password"],
              value["reg_date"],
              value["token"]
            ])
            .draw(false);
        });

        $("#sampleTable tbody").on("click", "tr", function () {
          var data = table.row(this).data();


          results.id = data[0];
          results.firstname = data[1];
          results.lastname = data[2];
          results.email = data[3];
          results.phone = data[4];
          results.password = data[5];

        });
        
      })
      .catch((err) => {
        //conso.log(err.response);
      });
  },

  components: {
    Header,
    Sidebar,
  },
};
</script>
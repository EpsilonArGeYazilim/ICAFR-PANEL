<template>
<div>
    <Header/>

<main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-dashboard"></i>Kişisel Ayarlarım</h1>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item"><a href="#">Kişisel Ayarlarım</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="tile">
                    <h3 class="tile-title">Kişisel Ayarlarım</h3>
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
                                            Parola:<input v-model="result.password" type="password" id="pwdId" class="form-control" pattern="^[a-z]{2,4}$" required placeholder="Şifrenizi Giriniz">
                                            <p style="color:red;">{{warnPass}} </p>
                                            <div class="valid-feedback">Şifreler Uyuşuyor</div>
                                            <div class="invalid-feedback">a to z only (2 to 4 long)</div>
                                        </div>
                                        <div class="form-group">
                                            Parola:<input v-model="result.passValid" type="password" id="cPwdId" class="form-control" pattern="^[a-z]{2,4}$" required placeholder="Şifrenizi Tekrar Giriniz">
                                                   <p style="color:red;">{{warnPassValid}} </p>
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
                    type="button">
                    <i class="fa fa-fw fa-lg fa-check-circle"></i>Güncelle
                  </button>

                  <button
                    @click="reload()"
                    class="btn fileupload-exists"
                    data-dismiss="fileupload"
                    >İptal
                  </button>               
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
        firstname: "",
        lastname: "",
        email:"",
        phone:"",
        password:"",
        passValid:""
      },
      warnPass:"",
      warnPassValid:""
    };
  },
  methods: {
    reload: function() {
      location.reload();
    },
    sendData: function () {
      var url = store.state.base_url+"Admin/updateByMyIdAdmin.php?key=123";

      var datas = {
        admin_id: localStorage.getItem("id"),
        admin_token: localStorage.getItem("token"),
        firstname: this.result.firstname,
        lastname: this.result.lastname,
        email:this.result.email,
        phone:this.result.phone,
        password:this.result.password
      };

      if(this.result.passValid != this.result.password)
      {
        this.warnPassValid="parolalar eşleşmiyor";
        return false;
      }
      if((this.result.passValid == "") || (this.result.password==""))
      {
        this.warnPass="lütfen parolayı boş bırakmayınız";
        return false;
      }

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
    }
  },

  mounted() {
   
         var url = store.state.base_url+"Admin/getByMyIdAdmin.php?key=123";

      var datas = {
        admin_id: localStorage.getItem("id"),
        admin_token: localStorage.getItem("token"),
        id: this.result.id,
      };

      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {
        //conso.log(response);
        datas = response.data.data;

              this.result.firstname = datas.firstname;
              this.result.lastname = datas.lastname;
              this.result.email = datas.email;
              this.result.phone = datas.phone;
        
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
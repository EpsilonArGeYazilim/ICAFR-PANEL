<template>
<div>
    <Header/>

<main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-dashboard"></i> İletişim Ayarları</h1>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item"><a href="#">İletişim Ayarları</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="tile">
                    <h3 class="tile-title">İletişim Ayarları</h3>
                    <div class="tile-body">
                        <form>
                            <div class="form-group">
                                <label class="control-label">Site Email: <br> Not: Bu Adres formlardan gelen mesajlar için varsayılan mail adresinizdir!</label>
                                <input v-model="result.site_email" class="form-control" type="email" placeholder="Site Emailini Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Telefon Numarası:</label>
                                <input v-model="result.phone" class="form-control" type="text" placeholder="Telefon Numaranızı Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Fax:</label>
                                <input v-model="result.fax" class="form-control" type="email" placeholder="Fax Bilgilerini Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">2. Telefon Numarası:</label>
                                <input v-model="result.phone2" class="form-control" type="text" placeholder="2. Telefon Numaranızı Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">2. Fax:</label>
                                <input v-model="result.fax2" class="form-control" type="email" placeholder="2. Fax Bilgilerini Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">2. Site Email:</label>
                                <input v-model="result.site_email2" class="form-control" type="email" placeholder="2. Site Emailini Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Adres:</label>
                                <textarea v-model="result.address" class="form-control" rows="2" placeholder="Adres Bilgilerini Giriniz"></textarea>
                            </div>
                            <div class="form-group">
                                <label class="control-label"><i class="fa fa-instagram" aria-hidden="true"></i>
                                    İnstagram:</label>
                                <input v-model="result.instagram" class="form-control" type="text" placeholder="İnstagram Linki">
                            </div>
                            <div class="form-group">
                                <label class="control-label"><i class="fa fa-twitter" aria-hidden="true"></i>
                                    Twitter:</label>
                                <input v-model="result.twitter" class="form-control" type="text" placeholder="Twitter Linki">
                            </div>
                            <div class="form-group">
                                <label class="control-label"><i class="fa fa-facebook" aria-hidden="true"></i>
                                    Facebook:</label>
                                <input v-model="result.facebook" class="form-control" type="text" placeholder="Facebook Linki">
                            </div>
                            <div class="form-group">
                                <label class="control-label"><i class="fa fa-linkedin" aria-hidden="true"></i>
                                    Linkedn:</label>
                                <input v-model="result.linkedin" class="form-control" type="text" placeholder="Linkedn Linki">
                            </div>
                            <div class="form-group">
                                <label class="control-label"><i class="fa fa-youtube" aria-hidden="true"></i>
                                    Youtube:</label>
                                <input v-model="result.youtube" class="form-control" type="text" placeholder="Youtube Linki">
                            </div>
                            <div class="form-group">
                                <label class="control-label"><i aria-hidden="true"></i>
                                    iframe:</label>
                                <input v-model="result.google_map_location" class="form-control" type="text" placeholder="iframe Linki">

                            </div>


                        </form>
                    </div>
                    <div class="tile-footer">
                        <button @click="sendData()" class="btn btn-primary" type="button"><i
                                class="fa fa-fw fa-lg fa-check-circle"></i>Kaydet</button>&nbsp;&nbsp;&nbsp;<button class="btn btn-secondary"><i class="fa fa-fw fa-lg fa-times-circle"></i>İptal</button>
                    </div>
                </div>
                <div class="col-md-12">

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
        site_email: "",
        site_email2: "",
        phone: "",
        fax: "",
        phone2: "",
        fax2:"",
        address:"",
        google_map_location:"",
        facebook:"",
        instagram:"",
        twitter:"",
        youtube:"",
        linkedin:""

      }
    };
  },

  created() {
    let dataUrl = store.state.base_url+"Contact/getContactAllColumn.php?key=123";

    return axios
      .get(dataUrl)
      .then((response) => {
        //conso.log(response);

        this.result.site_email = response.data.data.site_email;
        this.result.site_email2 = response.data.data.site_email2;
        this.result.phone = response.data.data.phone;
        this.result.fax = response.data.data.fax;
        this.result.phone2 = response.data.data.phone2;
        this.result.fax2 = response.data.data.fax2;
        this.result.address = response.data.data.address;
        this.result.google_map_location = response.data.data.google_map_location;
        this.result.facebook = response.data.data.facebook;
        this.result.instagram = response.data.data.instagram;
        this.result.linkedin = response.data.data.linkedin;
        this.result.twitter = response.data.data.twitter;
        this.result.youtube = response.data.data.youtube;
      })
      .catch((err) => {
        //conso.log(err.response);
      });
  },

  methods: {
    reload: function() {
      location.reload();
    },

    sendData: function () {
      var url = store.state.base_url+"Contact/updateContact.php?key=123";

      var datas = {
        admin_id: localStorage.getItem("id"),
        admin_token: localStorage.getItem("token"),

        site_name: this.result.site_name,
        slogan: this.result.slogan,
        logo_url: this.result.imgUrl,

        site_email:this.result.site_email,
        site_email2:this.result.site_email2,
        phone:this.result.phone,
        fax:this.result.fax,
        phone2:this.result.phone2,
        fax2:this.result.fax2,
        address:this.result.address,
        google_map_location:this.result.google_map_location,
        facebook:this.result.facebook,
        linkedin:this.result.linkedin,
        instagram:this.result.instagram ,
        twitter:this.result.twitter ,
        youtube:this.result.youtube 
      };

      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {
          if(response.data.data==true)
          {
         location.reload();
          }
          //conso.log(response);
        })
        .catch((error) => {
          //conso.log(error.response);
        });
    },
  },

  components: {
    Header,
    Sidebar,
  },
};
</script>
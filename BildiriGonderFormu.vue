<template>
  <div>
    <main class="app-content">
      <div class="row">
        <div class="col-md-12">
          <form role="form" class="contactForm">
            <p>* 1. Bildiri Başlığı</p>
            <div class="form-group">
              <div class="validation"></div>
              <input
                v-model="mail.bildiri_basligi"
                type="text"
                name="bildiri_basligi"
                class="form-control"
                id="bildiri_basligi"
                placeholder="Bildiri Başlığı"
                data-rule="minlen:4"
                data-msg="*"
              />
              <p style="color: #903025">{{ warnBildiriBasligi }}</p>
            </div>
            <p>* 2. Yazar Unvanları, İsimleri ve İletişim Bilgileri</p>
            <div class="form-group">
              <div class="form-group">
                <input
                  v-model="mail.yazar1AdSoyad"
                  type="text"
                  class="form-control"
                  name="yazar1AdSoyad"
                  id="yazar1AdSoyad"
                  placeholder="Yazar 1 Unvanı Adı-Soyadı"
                  data-msg="*"
                />
                <p style="color: #903025">{{ warnYazar }}</p>
              </div>
              <div class="form-group">
                <input
                  v-model="mail.yazar1No"
                  type="text"
                  class="form-control"
                  name="yazar1No"
                  id="yazar1No"
                  placeholder="Yazar 1 ORCID Numarası"
                  data-msg="*"
                />
                <p style="color: #903025">{{ warnYazarOrcid }}</p>
              </div>
              <div class="form-group">
                <input
                  v-model="mail.yazar1Mail"
                  type="text"
                  class="form-control"
                  name="yazar1Mail"
                  id="yazar1Mail"
                  placeholder="Yazar 1 E-posta Adresi"
                  data-msg="*"
                />
                <p style="color: #903025">{{ warnEposta }}</p>
              </div>
            </div>
            <br /><br />
            <div class="form-group">
              <div class="form-group">
                <input
                  v-model="mail.yazar2AdSoyad"
                  type="text"
                  class="form-control"
                  name="yazar2AdSoyad"
                  id="yazar2AdSoyad"
                  placeholder="Yazar 2 Unvanı Adı-Soyadı"
                  data-msg="*"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="mail.yazar2No"
                  type="text"
                  class="form-control"
                  name="yazar2No"
                  id="yazar2No"
                  placeholder="Yazar 2 ORCID Numarası"
                  data-msg="*"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="mail.yazar2Mail"
                  type="text"
                  class="form-control"
                  name="yazar2Mail"
                  id="yazar2Mail"
                  placeholder="Yazar 2 E-posta Adresi"
                  data-msg="*"
                />
              </div>
            </div><br /><br />
            <div class="form-group">
              <div class="form-group">
                <input
                  v-model="mail.yazar3AdSoyad"
                  type="text"
                  class="form-control"
                  name="yazar3AdSoyad"
                  id="yazar3AdSoyad"
                  placeholder="Yazar 3 Unvanı Adı-Soyadı"
                  data-msg="*"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="mail.yazar3No"
                  type="text"
                  class="form-control"
                  name="yazar3No"
                  id="yazar3No"
                  placeholder="Yazar 3 ORCID Numarası"
                  data-msg="*"
                />
              </div>
              <div class="form-group">
                <input
                  v-model="mail.yazar3Mail"
                  type="text"
                  class="form-control"
                  name="yazar3Mail"
                  id="yazar3Mail"
                  placeholder="Yazar 3 E-posta Adresi"
                  data-msg="*"
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="control-label col-md-3">Dosya Seç</label>
              <div class="col-md-8">
                <div
                  class="fileupload fileupload-new"
                  data-provides="fileupload"
                >
                  <p style="color: red">{{ fileWarn }}</p>
                  <div class="row"></div>
                  <div>
                    <span class="btn btn-theme02 btn-file">
                      <input id="file" type="file" ref="file" class="default" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
                    <p style="color: red">{{ warnOther }}</p>
          </form>
          <div id="dogrulama"></div>
          <p style="color: red">{{ warnDogrulama }}</p>
          <div class="btn bnt-light">
            <button @click="sendMail()" class="btn btn-primary" type="submit">
              <i class="fa fa-fw fa-lg fa-check-circle"></i>Gönder
            </button>
       
          </div>
         
        </div>
        <div v-if="isWait">
              <div class="loader"></div>
              <h3>Lütfen Bekleyiniz Dosya Yükleniyor!!</h3>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
import axios from "axios";
import store from "../store";

export default {
  data() {
    return {
      isWait:false,
      warnBildiriBasligi: "",
      warnYazar: "",
      warnEposta:"",
      warnYazarOrcid:"",
      fileWarn: "",
      warnDogrulama: "",
      warnOther:"",
      mail: {
        bildiri_basligi: "",
        yazar1AdSoyad: "",
        yazar1No: "",
        yazar1Mail: "",
        yazar2AdSoyad: "",
        yazar2No: "",
        yazar2Mail: "",
        yazar3AdSoyad: "",
        yazar3No: "",
        yazar3Mail: "",
      },
      file: "",
      fileWarn: "",
    };
  },

  created() {
    
 let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit')
      document.head.appendChild(recaptchaScript);

      console.log(isSuccess);


  },

  methods: {
    reload: function () {
      //location.reload();
    },
    isWaitFonk(situation)
    {
      this.isWait=situation

    },
    sendMail: function () {
      this.warnBildiriBasligi = "";
      this.warnYazar = "";
      this.warnEposta="";
      this.warnOther="";
      this.warnYazarOrcid ="";
      this.warnDogrulama ="";

      var isWaitFonk = this.isWaitFonk;


      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var key = true;

      if (!(this.mail.bildiri_basligi.length>4 && this.mail.bildiri_basligi.length<250)) {
        this.warnBildiriBasligi =
          "* Lütfen bildiri başlığı alanını 4 ile 250 karakter arasında giriniz !";
        key = false;
      }

      if (!(re.test(this.mail.yazar1Mail) &&  this.mail.yazar1Mail.length<250)) {
        this.warnEposta = "* Lütfen eposta alanını uygun formatta giriniz !";
        key = false;
      }
      if (!(this.mail.yazar1AdSoyad.length>4 && this.mail.yazar1AdSoyad.length<250)) {
        this.warnYazar = "* Lütfen yazar1 ad soyad alanını 4 ile 250 karakter arasında giriniz !";
        key = false;
      }
      if (!(this.mail.yazar1No.length>4 && this.mail.yazar1No.length<250)) {
        this.warnYazarOrcid = "* Lütfen yazar1 orcid no alanını 4 ile 250 karakter arasında giriniz !";
        key = false;
      }



      if (!(this.mail.yazar2Mail.length<250)) {
        this.warnOther = "* Lütfen yazar2 eposta alanını uygun formatta giriniz !";
        key = false;
      }
      if (!(this.mail.yazar2AdSoyad.length<250)) {
        this.warnOther = "* Lütfen yazar2 ad soyad alanını 4 ile 250 karakter arasında giriniz !";
        key = false;
      }
      if (!(this.mail.yazar2No.length<250)) {
        this.warnOther = "* Lütfen yazar2 orcid no alanını 4 ile 250 karakter arasında giriniz !";
        key = false;
      }



      if (!(this.mail.yazar3Mail.length<250)) {
        this.warnOther = "* Lütfen yazar3 eposta alanını uygun formatta giriniz !";
        key = false;
      }
      if (!(this.mail.yazar3AdSoyad.length<250)) {
        this.warnOther = "* Lütfen yazar3 ad soyad alanını 4 ile 250 karakter arasında giriniz !";
        key = false;
      }
      if (!(this.mail.yazar3No.length<250)) {
        this.warnOther = "* Lütfen yazar3 orcid no alanını 4 ile 250 karakter arasında giriniz !";
        key = false;
      }



      if(isSuccess == false){
        this.warnDogrulama = "* Lütfen doğrulama işlemini gerçekleştiriniz!";
        key = false;

      }
      isSuccess = false;

      if (key == false) {
        return false;
      }


      isWaitFonk(true);

      this.file = this.$refs.file.files[0];

      let formData = new FormData();
      formData.append("file", this.file);
      var query =
        store.state.base_url +
        "CreateBildiriForm.php?bildiri_basligi=" +
        this.mail.bildiri_basligi +
        "&yazar1=" +
        this.mail.yazar1AdSoyad +
        "&yazar1_orcid_no=" +
        this.mail.yazar1No +
        "&yazar1_eposta=" +
        this.mail.yazar1Mail +
        "&yazar2=" +
        this.mail.yazar2AdSoyad +
        "&yazar2_orcid_no=" +
        this.mail.yazar2No +
        "&yazar2_eposta=" +
        this.mail.yazar2Mail +
        "&yazar3=" +
        this.mail.yazar3AdSoyad +
        "&yazar3_orcid_no=" +
        this.mail.yazar3No +
        "&yazar3_eposta=" +
        this.mail.yazar3Mail;


      axios
        .post(query, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          //console.log(response);
          isWaitFonk(false);

          if(response.data == 1)
          {
            location.reload();

          }
          else{
       
          }

        })
        .catch(function (error) {
          //conso.log(error);
        });
    },
  },
};
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
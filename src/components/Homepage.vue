<template>
  <div>
    <Header />

    <main class="app-content">
      <div class="app-name">
        <div>
          <h1><i class="fa fa-dashboard"></i> Anasayfa</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#"></a></li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <h3 class="tile-name"></h3>
            <div class="tile-body">
              <form class="form-horizontal">
                <div class="form-group row">
                  <label class="control-label col-md-3">Başlık</label>                  
                    <input type="text"
                      v-model="result.name"
                      class="form-control" >
                </div>
               
                <div class="form-group row">
                  <label class="control-label col-md-3">Açıklama</label> 
                  
                </div>
                    <ckeditor
                      style="border: solid 1px"
                      @ready="onReady"
                      :editor="editor"
                      v-model="result.content"
                      class="form-control"
                      rows="4"

                    ></ckeditor>
                

                <div class="form-group row">
                  <label class="control-label col-md-3">Resim Yükleme</label>
                  <div class="col-md-8">
                    <div
                      class="fileupload fileupload-new"
                      data-provides="fileupload"
                    >
                      <p style="color: red">{{ fileWarn }}</p>
                      <div class="row">
                        <div class="col-md-4">
                          <div
                            class="fileupload-preview fileupload-exists thumbnail"
                            style="
                              max-width: 200px;
                              max-height: 150px;
                              line-height: 20px;
                            "
                          ></div>
                        </div>
                        <div class="col-md-2"></div>

                        <div class="col-md-4">
                          <img
                            id="img"
                            :src="base_img_url+result.imgUrl"
                            style="max-height: 150px"
                          />
                        </div>
                      </div>
                      <div>
                        <span class="btn btn-theme02 btn-file">
                          <input
                            id="file"
                            type="file"
                            ref="file"
                            class="default"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="tile-footer">
              <div class="row">
                <div class="col-md-8 col-md-offset-3">
                  <button
                    @click="uploadFile()"
                    class="btn btn-primary"
                    type="button"
                  >
                    <i class="fa fa-fw fa-lg fa-check-circle"></i>Kaydet</button
                  >&nbsp;&nbsp;&nbsp;<button
                    @click="reload()"
                    class="btn btn-secondary"
                  >
                    <i class="fa fa-fw fa-lg fa-times-circle"></i>İptal
                  </button>
                  &nbsp;

                  <!--başlangıç-->
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Sidebar />
  </div>
</template>

<script>
import Header from "./default/Header";
import Sidebar from "./default/Sidebar";
import axios from "axios";
import Modal from "./default/Modal";
import store from "../store";
import DecoupledDocument from "@ckeditor/ckeditor5-build-decoupled-document";

export default {
  data() {
    return {
      web_url: this.$store.state.web_url,
      editor: DecoupledDocument,

      result: {
        name: "",
        content: "",
        imgUrl: "",

        imgSrc: store.state.img_base_url,
      },
      base_img_url:"",
      file: "",
      fileWarn: "",
    };
  },

  created() {
    let dataUrl =
      store.state.base_url + "Page/getPage.php?key=123&page_number=1";

    return axios
      .get(dataUrl)
      .then((response) => {
        //conso.log(response);

        this.result.name = response.data.result.name;
        this.result.content = response.data.result.content;
        this.result.imgUrl = response.data.result.img_url;
        this.base_img_url = store.state.img_base_url;
      })
      .catch((err) => {
        //conso.log(err.response);
      });
  },

  methods: {
    reload: function () {
      location.reload();
    },
    onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    },
    uploadFile: function () {
      this.file = this.$refs.file.files[0];

      if (!this.$refs.file.files[0]) {
        return this.sendData();
      }

      var result = this.result;
      var sendData = this.sendData;

      //conso.log(this.file);
      if (this.file.size > 1500000) {
        this.fileWarn =
          "Yükleyeceğiniz Dosya Boyutu 1.5 Mb'yi Aşamaz!  " +
          " Dosya Boyutunuz : " +
          this.file.size / 1000000 +
          "Mb";
        //conso.log("dosya boyutu büyük");
        return;
      }

      let formData = new FormData();
      formData.append("file", this.file);
      var admin_id = localStorage.getItem("id");
      var admin_token = localStorage.getItem("token");
      var query =
        store.state.img_upload_url +
        "?id=" +
        admin_id +
        '&token="' +
        admin_token +
        '"';

      axios
        .post(query, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          //conso.log(response);

          if (response.data.result) {
            //conso.log("işlem başarılı");

            result.imgUrl = response.data.data;

            sendData();
          } else {
            //conso.log("işlem başarısız");
          }
        })
        .catch(function (error) {
          //conso.log(error);
        });
    },

    sendData: function () {
      var url = store.state.base_url + "Page/updatePage.php?key=123";

      var datas = {
        admin_id: localStorage.getItem("id"),
        admin_token: localStorage.getItem("token"),
        name: this.result.name,
        content: this.result.content,
        img_url: this.result.imgUrl,
        page_number:1
      };

      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {
          if (response.data.data == true) {
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
    Modal,
  },
};
</script>
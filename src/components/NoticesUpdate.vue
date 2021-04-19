<template>
  <div>
    <Header />
    <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-dashboard"></i> Duyurular</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#">Duyurular</a></li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <h3 class="tile-title">Duyurular</h3>
            <div class="tile-body">
              <form class="form-horizontal">
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
                            :src="result.imgUrl"
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
                <div class="form-group row">
                  <p style="display: none" id="notice_id">{{ result.id }}</p>
                </div>
                <div class="form-group row">
                  <label class="control-label col-md-3">Başlık:</label>
                  <div class="col-md-8">
                    <ckeditor
                      style="border: solid 1px"
                      @ready="onReady"
                      :editor="editor"
                      v-model="result.header"
                    
                      class="form-control"
                      rows="4"
                    ></ckeditor>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="control-label col-md-3">İçerik:</label>
                  <div class="col-md-8">
                    <ckeditor
                      style="border: solid 1px"
                      @ready="onReady"
                      :editor="editor"
                      v-model="result.content"
                      class="form-control"
                      rows="4"
                    ></ckeditor>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="control-label col-md-3">Link:</label>
                  <div class="col-md-8">
                    <div class="form-group">
                      <input
                        v-model="result.link"
                        id="link"
                        class="form-control"
                        type="url"
                        placeholder="Proje Linkini Giriniz"
                      />
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
                    <i class="fa fa-fw fa-lg fa-check-circle"></i>Güncelle
                  </button>
                  &nbsp;
                  <button
                    @click="deleteData()"
                    class="btn btn-danger"
                    type="button"
                  >
                    <i class="fa fa-trash-o"></i>Sil
                  </button>
                  &nbsp;
                  <Modal>
                    <iframe
                      style="width: 100%; height: 100%"
                      :src="web_url + 'notices'"
                    ></iframe>
                  </Modal>
                </div>
              </div>
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
                    <th>Başlık</th>
                    <th>İçerik</th>
                    <th>Link</th>
                    <th>Resim</th>
                    <th>Resim Adı</th>
                    <th>Tarih</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
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
import Modal from "./default/Modal";
import axios from "axios";
import store from "../store";
import DecoupledDocument from "@ckeditor/ckeditor5-build-decoupled-document";
export default {
  data() {
    return {
      editor: DecoupledDocument,
      web_url: this.$store.state.web_url,
      result: {
        id: "",
        header: "",
        content: "",
        link: "",
        imgSrc: "",
        imgUrl: "",
      },
      file: "",
      fileWarn: "",
    };
  },
  methods: {
    uploadFile: function () {
      this.file = this.$refs.file.files[0];

      var result = this.result;

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
      var url =
        store.state.img_upload_url +
        "?id=" +
        admin_id +
        '&token="' +
        admin_token +
        '"';
      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          if (response.data.result) {
            //conso.log("işlem başarılı");

            result.imgSrc = response.data.data;

            sendData();
          } else {
            //conso.log("işlem başarısız");
          }
        })
        .catch(function (error) {
          //conso.log(error);
        });
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

    sendData: function () {
      var url = store.state.base_url + "Notice/updateNotice.php?key=123";

      var datas = {
        admin_id: localStorage.getItem("id"),
        admin_token: localStorage.getItem("token"),
        notice_id: this.result.id,
        header: this.result.header,
        link: this.result.link,
        content: this.result.content,
        img_url: this.result.imgSrc,
      };

      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {
          if (response.data.result == true) {
            location.reload();
          }

          ////conso.log(response);
        })
        .catch((error) => {
          //conso.log(error.response);
        });
    },
    deleteData: function () {
      var url = store.state.base_url + "Notice/deleteNotice.php?key=123";

      var datas = {
        admin_id: localStorage.getItem("id"),
        admin_token: localStorage.getItem("token"),
        id: this.result.id,
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

  mounted() {
    var results = this.result;
    let datas = [];
    let dataUrl = store.state.base_url + "Notice/getAllNotices.php?key=123";
    return axios
      .get(dataUrl)
      .then((response) => {
        //conso.log(response);
        datas = response.data.data;

        var table = $("#sampleTable").DataTable();

        $.each(datas, function (index, value) {
          table.row
            .add([
              value["id"],
              value["header"],
              value["content"],
              value["link"],
              '<img style="max-height: 60px" src="' +
                store.state.img_base_url +
                value["img_url"] +
                '">',
              value["img_url"],
              value["reg_date"],
            ])
            .draw(false);
        });

        $("#sampleTable tbody").on("click", "tr", function () {
          var data = table.row(this).data();

          results.id = data[0];
          results.header = data[1];
          results.content = data[2];
          results.link = data[3];
          results.imgSrc = data[5];
          results.imgUrl = store.state.img_base_url + data[5];
          //conso.log(results.imgUrl);
        });
      })
      .catch((err) => {
        //conso.log(err.response);
      });
  },

  components: {
    Header,
    Sidebar,
    Modal
  },
};
</script>
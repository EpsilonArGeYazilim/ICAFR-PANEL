<template>
  <div>
    <Header />

    <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-dashboard"></i> Kayıt Formu</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#"></a></li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <div class="tile-body">
              <table class="table table-hover table-bordered" id="sampleTable">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Unvan</th>
                    <th>Ad Soyad</th>
                    <th>Kurum/Kuruluş</th>
                    <th>Telefon Numarası</th>
                    <th>E-Posta Adresi</th>
                    <th>Dosya</th>

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
      base_img_url: "",
      file: "",
      fileWarn: "",
      language: [],
      language_id: 1,
    };
  },
   mounted() {
    var results = this.result;
    let datas = [];
    let dataUrl = store.state.base_url + "GetAllKayitForm.php?key=123";
    return axios
      .get(dataUrl)
      .then((response) => {
        //conso.log(response);
        datas = response.data;
        
        var table = $("#sampleTable").DataTable();

        $.each(datas, function (index, value) {
          var docUrl="http://kongre.epsilonarge.com/EpsilonApi/dekont/";
          table.row
            .add([
              value["id"],
              value["title"],
              value["name"],
              value["corporation"],
              value["telephone"],
              value["email"],
            '<a href="'+docUrl+value["file_name"]+'">'+value["file_name"]+'</a>',
            
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
    Modal,
  },
};
</script>
<template>
  <div>
    <Header />
    <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-dashboard"></i> Bildiri Gönder</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#">Bildiri Gönder</a></li>
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
                    <th>Bildiri Başlığı</th>
                    <th>Yazar 1 Ad Soyad</th>
                    <th>Yazar 1 ORCID No</th>
                    <th>Yazar 1 Mail</th>
                    <th>Yazar 2 Ad Soyad</th>
                    <th>Yazar 2 ORCID No</th>
                    <th>Yazar 2 Mail</th>
                    <th>Yazar 3 Ad Soyad</th>
                    <th>Yazar 3 ORCID No</th>
                    <th>Yazar 3 Mail</th>
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
import Modal from "./default/Modal";
import axios from "axios";
import store from "../store";
import DecoupledDocument from "@ckeditor/ckeditor5-build-decoupled-document";
export default {
  data() {
    return {
      result: {
        
      }
    };
  },


  mounted() {
    var results = this.result;
    let datas = [];
    let dataUrl = store.state.base_url + "GetAllBildiriForm.php?key=123";
    return axios
      .get(dataUrl)
      .then((response) => {
        //conso.log(response);
        datas = response.data;
        
        var table = $("#sampleTable").DataTable();

        $.each(datas, function (index, value) {
          var docUrl="http://api.icafr.org/EpsilonApi/doc/";
          table.row
            .add([
              value["id"],
              value["title"],
              value["name_one"],
              value["orcid_one"],
              value["email_one"],
              value["name_two"],
              value["orcid_two"],
              value["email_two"],
              value["name_three"],
              value["orcid_three"],
              value["email_three"],
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
    Modal
  },
};
</script>
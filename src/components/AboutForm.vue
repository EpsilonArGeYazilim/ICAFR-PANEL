<template>
<div>
    <Header/>

    <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-dashboard"></i> Hakkında</h1>
          <p>Start a beautiful journey here</p>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#">Hakkında</a></li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <div class="tile-body">Create a beautiful dashboard</div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="tile">
            <h3 class="tile-title">Register</h3>
            <div class="tile-body">
              <form class="form-horizontal">
                <div class="form-group row">
                  <label class="control-label col-md-3">Başlık</label>
                  <div class="col-md-8">
                    <textarea class="form-control" rows="2" ></textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="control-label col-md-3">Açıklama</label>
                  <div class="col-md-8">
                    <textarea class="form-control" rows="4" ></textarea>
                  </div>
                </div>
                <div class="form-group row">
                    <label class="control-label col-md-3">Resim Yükleme</label>
                    <div class="col-md-8">
                      <div class="fileupload fileupload-new" data-provides="fileupload">
                          
                        
                        <div class="fileupload-preview fileupload-exists thumbnail" style="max-width: 200px; max-height: 150px; line-height: 20px;"></div>
                        <div>
                          <span class="btn btn-theme02 btn-file">
                          <input type="file" class="default">
                          </span>
                          <a href="form-about.html" class="btn btn-theme04 fileupload-exists" data-dismiss="fileupload"><i class="fa fa-trash-o"></i> </a>
                        </div>
                      </div>
                    </div>
                  </div>                
                <div class="form-group row">
                  <div class="col-md-8 col-md-offset-3">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox">I accept the terms and conditions
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="tile-footer">
              <div class="row">
                <div class="col-md-8 col-md-offset-3">
                  <button class="btn btn-primary" type="button"><i class="fa fa-fw fa-lg fa-check-circle"></i>Kabul et</button>&nbsp;&nbsp;&nbsp;<a class="btn btn-secondary" href="#"><i class="fa fa-fw fa-lg fa-times-circle"></i>İptal</a>
                </div>
              </div>
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
       export default {
    components: {
            Header,
            Sidebar
        }
    }
</script>
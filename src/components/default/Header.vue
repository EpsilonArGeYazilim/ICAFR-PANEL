<template>
  <header class="app-header"><a class="app-header__logo" href="index.html">Admin Panel</a>
      <!-- Sidebar toggle button-->
      <a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
      <!-- Navbar Right Menu-->
      <ul class="app-nav">
         <!-- User Menu-->
    
         <li class="dropdown"><a class="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i class="fa fa-user fa-lg"></i></a>
         <ul class="dropdown-menu settings-menu dropdown-menu-right">
            <li>
             
     <router-link class="dropdown-item refresh" to="/general_settings"
                  tag="a">
        <i class="fa fa-cog fa-lg"></i>Site Genel Ayarları
          </router-link>
            </li>  
            <li>
             <router-link class="dropdown-item refresh" to="/user"
                  tag="a">
           <i class="fa fa-user fa-lg"></i> 
            <span class="app-menu__label">Profil Ayarları</span>
          </router-link>
          </li>
            <li><a @click.prevent="logout" class="dropdown-item" href="#"><i class="fa fa-sign-out fa-lg"></i> Çıkış</a></li>
         </ul>
         </li>
      </ul>
    </header>
</template>
<script>
import axios from "axios";

    export default {
        methods: {
            logout() {
                this.$store.dispatch("logout")
            }
        },
        mounted(){
          let dataUrl = this.$store.state.base_url+"Admin/checkToken.php?key=123"

            var datas =
                { 
                    admin_id: localStorage.getItem("id"),
                    admin_token: localStorage.getItem("token")
            
                };
            return axios.post(dataUrl,JSON.stringify(datas),
                
            ).then(response => {
                if(response.data.result)
                {
                  //console.log("başarılı");
                }
                else{
                  //console.log("token değişti!!!");
                   this.logout();
                }
              
            }).catch(err => {
                //conso.log(err.response);
              });
        }
        
    }
</script>

<style>

</style>
<template>
  <div>
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <div class="app-sidebar__user">
        <!--    <img
          class="app-sidebar__user-avatar"
          src=""
          alt="User Image"
        />   -->
        <div>
          <p class="app-sidebar__user-name">Epsilon</p>
          <p class="app-sidebar__user-designation">Yazılım Arge</p>
        </div>
      </div>
      <ul class="app-menu">
        <li class="treeview refresh">
          <router-link class="app-menu__item" to="/" tag="a">
            <span class="app-menu__label">Anasayfa</span>
          </router-link>
        </li>
        <li class="treeview refresh">
          <router-link class="app-menu__item" to="/kongre_hakkinda" tag="a">
            <span class="app-menu__label">Kongre Hakkında</span>
          </router-link>
        </li>
        <li class="treeview refresh">
          <router-link class="app-menu__item" to="/onemli_tarihler" tag="a">
            <span class="app-menu__label">Önemli Tarihler</span>
          </router-link>
        </li>
        <li class="treeview refresh">
          <router-link class="app-menu__item" to="/kurullar" tag="a">
            <span class="app-menu__label">Kurullar</span>
          </router-link>
        </li>
        
        <li class="treeview refresh">
          <router-link class="app-menu__item" to="/paydaslar" tag="a">
            <span class="app-menu__label">Paydaşlar</span>
          </router-link>
        </li>
        <li class="treeview refresh">
          <router-link class="app-menu__item" to="/kayit" tag="a">
            <span class="app-menu__label">Kayıt</span>
          </router-link>
        </li>
        <li class="treeview refresh">
          <router-link class="app-menu__item" to="/kitaplari" tag="a">
            <span class="app-menu__label">Kitapları</span>
          </router-link>
        </li>
        <li class="treeview">
          <a class="app-menu__item" href="#" data-toggle="treeview">
            <span class="app-menu__label">Duyuru</span>
            <i class="treeview-indicator fa fa-angle-right"></i>
          </a>
          <ul class="treeview-menu">
            <li class="treeview-item refresh">
              <router-link class="app-menu__item" to="/notices" tag="a">
                <span class="app-menu__label">Duyuru Ekle</span>
              </router-link>
            </li>
            <li class="treeview-item refresh">
              <router-link class="app-menu__item" to="/notices_update" tag="a">
                <span class="app-menu__label">Duyuru Güncelleme</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="treeview refresh">
          <router-link class="app-menu__item" to="/contact" tag="a">
            <span class="app-menu__label">İletişim</span>
          </router-link>
        </li>
       <!-- 
        <li class="treeview">
          <a class="app-menu__item" href="#" data-toggle="treeview">
            <span class="app-menu__label">Kullanıcı</span>
            <i class="treeview-indicator fa fa-angle-right"></i>
          </a>
          <ul class="treeview-menu">
            <li class="treeview-item refresh">
              <router-link class="app-menu__item" to="/new_user" tag="a">
                <span class="app-menu__label">Kullanıcı Ekle</span>
              </router-link>
            </li>
            <li class="treeview-item refresh">
              <router-link class="app-menu__item" to="/user_update" tag="a">
                <span class="app-menu__label">Kullanıcı Güncelle</span>
              </router-link>
            </li>
          </ul>
        </li>
        -->
        <li class="treeview refresh">
          <router-link class="app-menu__item" to="/user" tag="a">
            <span class="app-menu__label">Kişisel Ayarlar</span>
          </router-link>
        </li>
        <li class="treeview refresh">
          <router-link class="app-menu__item" to="/general_settings" tag="a">
            <span class="app-menu__label">Genel Ayarlar</span>
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
export default {};
</script>

<style>
</style>
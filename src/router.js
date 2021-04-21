import Vue from "vue";
import VueRouter from "vue-router";

import Homepage from "./components/Homepage.vue";
import OnemliTarihler from "./components/OnemliTarihler.vue";
import Kurullar from "./components/Kurullar.vue";
import Paydaslar from "./components/Paydaslar.vue";
import Contact from "./components/Contact.vue";
import Kitaplari from "./components/Kitaplari.vue";
import KongreHakkinda from "./components/KongreHakkinda.vue";
import GeneralSettings from "./components/GeneralSettings.vue";
import NewUser from "./components/NewUser.vue";
import UserUpdate from "./components/UserUpdate.vue";
import Notices from "./components/Notices.vue";
import NoticesUpdate from "./components/NoticesUpdate.vue";
import User from "./components/User.vue";
import Login from "./components/Login.vue";
import Kayit from "./components/Kayit.vue";
import NotFound from "./components/NotFound.vue";
import store from "./store";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: Homepage,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },

    {
        path: "/contact",
        name: "contact",
        component: Contact,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },
    {
        path: "/kurullar",
        name: "kurullar",
        component: Kurullar,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },
    {
        path: "/kayit",
        name: "kayit",
        component: Kayit,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },

    {
        path: "/onemli_tarihler",
        name: "onemli_tarihler",
        component: OnemliTarihler,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },
    {
        path: "/kitaplari",
        name: "kitaplari",
        component: Kitaplari,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },

    {
        path: "/general_settings",
        name: "general_settings",
        component: GeneralSettings,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },

    {
        path: "/kongre_hakkinda",
        name: "kongre_hakkinda",
        component: KongreHakkinda,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },

    {
        path: "/new_user",
        name: "new_user",
        component: NewUser,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },
    {
        path: "/user_update",
        name: "user_update",
        component: UserUpdate,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },
    {
        path: "/notices_update",
        name: "notices_update",
        component: NoticesUpdate,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },
    {
        path: "/notices",
        name: "notices",
        component: Notices,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },

    {
        path: "/paydaslar",
        name: "paydaslar",
        component: Paydaslar,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },


    {
        path: "/user",
        name: "user",
        component: User,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next();
            } else {
                next("/login");
            }
        },
    },

    {
        path: "/login",
        name: "login",
        component: Login,
        beforeEnter(to, from, next) {
            if (store.getters.isLogin) {
                next("/");
            } else {
                next();
            }
        },
    },
    { path: "/notfound", component: NotFound },
];
export const router = new VueRouter({
    mode: "hash",
    base: "/",
    routes,
});
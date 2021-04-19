<template>
  <div>
    <router-view> </router-view>

    <Footer />
  </div>
</template>
<script>
import Footer from "./components/default/Footer";
export default {
  components: {
    Footer,
  },
};
</script>
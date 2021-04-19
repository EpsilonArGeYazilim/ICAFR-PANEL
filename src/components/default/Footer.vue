<template>
  <div>
    <footer class="footer">
      <div class="d-flex justify-content-center">
        <div class="copyrights">
          <div class="container">
            <p>
              &copy; 2020 - {{year}} Epsilon Arge Yazılım Tüm Hakları Saklıdır
            </p>

            <div class="credits"></div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  data() {
    return {
      year : new Date().getFullYear(),
    };
  },
  created() {},
};
</script>

<style>
</style>
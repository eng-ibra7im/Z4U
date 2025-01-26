<template>
  <NConfigProvider :theme-overrides="customTheme">
    <main>
      <Navbar v-if="!hideNavbarFooter" />
      <div class="min-vh-80">
        <router-view @route-changed="handleRouteChange" />
      </div>
      <ProgressBar />
      <BtnTools />
      <Footer v-if="!hideNavbarFooter" />
    </main>
  </NConfigProvider>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { NConfigProvider } from "naive-ui";
import customTheme from "./theme";
import BtnTools from "./components/BtnTools.vue";
import ProgressBar from "./components/ProgressBar.vue";

export default {
  components: { Navbar, Footer, NConfigProvider, BtnTools, ProgressBar },
  name: "App",
  data() {
    return {
      customTheme,
      hideNavbarFooter: false, // افتراضيا تُعرض
    };
  },
  watch: {
    $route(to) {
      this.checkRoute(to);
    },
  },
  mounted() {
    this.checkRoute(this.$route);
  },
  methods: {
    checkRoute(route) {
      const hiddenRoutes = ["/Workperiods" , "/login" , "/register"]; // ضع هنا المسارات التي لا تريد فيها الـ Navbar والـ Footer
      this.hideNavbarFooter = hiddenRoutes.includes(route.path);
    },
  },
};
</script>

<style>
.min-vh-80 {
  min-height: 80vh;
}
</style>

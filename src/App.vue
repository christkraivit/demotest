<template>
  <div id="app">
    <app-banner></app-banner>
    <app-navbar></app-navbar>
    <app-slide></app-slide>
    <router-view />
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  components: {
    "app-banner": () => import("./components/Banner"),
    "app-register": () => import("./components/Register"),
    "app-navbar": () => import("./components/navbar"),
    "app-slide": () => import("./components/slide")
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  },
  created() {
    //  hook the progress bar to start before we move router-view
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach(() => {
      this.$Progress.finish();
    });
  }
};
</script>


<style lang="scss">
body {
background-color: #522314;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23562015'/%3E%3Cstop offset='1' stop-color='%23562015' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%237d2515'/%3E%3Cstop offset='1' stop-color='%237d2515' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23811e19'/%3E%3Cstop offset='1' stop-color='%23811e19' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23522314'/%3E%3Cstop offset='1' stop-color='%23522314' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23591c16'/%3E%3Cstop offset='1' stop-color='%23591c16' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ab1b1b'/%3E%3Cstop offset='1' stop-color='%23ab1b1b' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
#app {
  font-family: "Kanit", sans-serif;
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;

  // background-image: url("./assets/wallpaper.jpg");
  // background-size: inherit;
  // background-attachment: fixed;
  // background-position: center center;

  .text-title {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    background: -webkit-linear-gradient(#f9f6ef, #ebd070);
    border-style: solid;
    border-width: 1px;
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: #ffb10017;
    border-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0) 0,
        #fcca6a 50%,
        rgba(0, 0, 0, 0) 100%
      )
      100% 0 100% 0/0px 0 2px 0 stretch;
    border-image-source: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0px,
      rgb(252, 202, 106) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    border-image-slice: 100% 0;
    border-image-width: 0px 0 2px;
    border-image-outset: initial;
    border-image-repeat: stretch;
    color: #ebd070 !important;
  }
}

.btn-line {
  background-color: #00b529 !important;
  color: #fff !important;
  &:hover {
    background-color: #00a526 !important;
    color: #fff !important;
  }
}

.bg-theme {
  background: linear-gradient(to bottom right, #db0000 10%, #000000 100%);
}
.separator {
  height: 2px;
  background: linear-gradient(
    to right,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );
}
a {
  color: #0c0b0a;
}

a:hover {
  text-decoration: none;
  color: #fff;
}

.text-gold {
  color: #eec850;
}

/* entry-header */
.entry-header {
  border-bottom: 3px solid #b00020;
  margin-bottom: 15px;
  > .title {
    background-color: #b00020;
    margin: 0;
    color: #fff;
    display: inline-block;
    padding: 5px 15px 5px 5px;
  }
  > .link {
    float: right;
    padding-top: 10px;
    color: #b00020;
  }
}

.entry-header2 {
  margin-bottom: 15px;
  > .title {
    background-color: #b00020;
    margin: 0;
    color: #fff;
    display: inline-block;
    padding: 5px 15px 5px 5px;
  }
}
</style>

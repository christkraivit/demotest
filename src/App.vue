<template>
  <div id="app">
    <app-banner></app-banner>

    <router-view/>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  components: {
    "app-banner": () => import("./components/Banner")
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
  background-color: #000000;
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
  color: #fcf6ba;
}

a:hover {
  text-decoration: none;
  color: #b38728;
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

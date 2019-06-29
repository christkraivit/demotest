<template>
  <div class="footer container-fluid">
    <div class="container pt-3">
      <div class="row justify-content-center">
        <div class="row">
          <div class="col-md-6 text-center my-auto">
            <img
              @click="download()"
              style="max-height: 50px; cursor: pointer; margin: 0.2rem;"
              src="../assets/image/app-download/google_new.png"
              class="img-fluid app-download"
              alt="GCC789"
            />
            <img
              @click="download()"
              src="../assets/image/app-download/apple_new.png"
              class="img-fluid app-download"
              alt="GCC789"
              style="max-height: 50px; cursor: pointer; margin: 0.2rem;"
            />
          </div>
          <div class="col-md-6 my-auto text-center py-3">
            <img
              @click="linkLine()"
              src="../assets/logo.png"
              class="img-fluid logo"
              alt="GCC789"
              style=" max-height: 80px;"
            />
          </div>
        </div>
        <small style="font-weight: 200;" class="text-center mt-1 col-12">
          ยินดีต้อนรับทุกท่านเข้าสู่ gcc789
          ผู้ให้บริการความบันเทิงเต็มรูปแบบเกี่ยวกับเกมคาสิโนออนไลน์
          สล็อตออนไลน์ คุณจะได้รับความสนุกเพลิดเพลิน และตื่นเต้น
          จากเกมคาสิโนออนไลน์ของเราที่มีมากมาย และความประทับใจจากการบริการของเรา
          รวมถึงเงินรางวัลและโบนัสต่างๆ
          มากมายที่เราเตรียมไว้มอบให้กับคุณจากเกมที่คุณเล่น
          คุณจะไม่ผิดหวังเมื่อใช้บริการกับเรา
        </small>
      </div>
      <br />
      <div class="row justify-content-center footer-link">
        <router-link to="/">หน้าหลัก</router-link>
        <router-link to="/about">เกี่ยวกับเรา</router-link>
        <router-link to="/register">สมัครสมาชิก</router-link>
        <router-link to="/promotion">โปรโมชั่น</router-link>
        <a style="cursor: pointer;" @click="deposit()">แจ้งฝาก – ถอน</a>
        <a style="cursor: pointer;" @click="contactme()">ติดต่อเรา</a>
      </div>
      <hr style="background-color: #525252;" />
    </div>
    <div class="row justify-content-center">
      <small style="font-weight: 200;">
        © Copyright
        <a href="/">www.gcc789.com</a> 2019. All Rights Reserved
      </small>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: black;
  color: #fff;
  .footer-link {
    a {
      margin-left: 3px;
      margin-right: 3px;
    }
  }
  a {
    color: #fff !important;
    &:hover {
      color: #fcf6ba !important;
    }
  }
}
</style>
<script>
export default {
  methods: {}
};
</script>

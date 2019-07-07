<template>
  <div class="home">
    <!--Vue Img TexT-->
    <div>
      <div class="container bg">
        <!-- Text GCLUBMY WELCOME -->
        <br>
        <div class="linecolor d-sm-none"></div>
        <div class="row justify-content-center img-btn-block d-md-block">
          <h1 class="text-title">GCLUBMY ยินดีต้อนรับ</h1>
        </div>
        <div class="row container bgback mx-auto">
          <div class="col-md-4 col-sm-4 mgT15 hidden-xs hidden-sm">
            <picture>
              <img class="w-100" src="../assets/casino-girl-mobile.webp" />
            </picture>
          </div>
          <div class="col-md-8 col-sm-20 mgT11">
            <div class="mgT15">
              <p
                class="title-border"
              >ยินดีต้อนรับเข้าสู่ GCLUBMY.COM เว็บไซต์คาสิโนออนไลน์มาตราฐานระดับโลก</p>
              <p class="indenttext indenttextpc">
                เราพร้อมให้บริการนักพนันทุกท่านอย่างครบวงจรด้วยคาสิโนออนไลน์ที่เล่นง่าย
                ได้เงินจริง
                พบกับเกมเดิมพันมากมายไม่ว่าจะเป็นเกมยอดนิยมอย่าง บาคาร่า สล็อต แบล็คแจ็ค รูเล็ตต์ และเสือมังกร
                รับประสบการณ์การพนันที่สมจริงเสมือนกับไปเล่นที่คาสิโนระดับโลกผ่านระบบออนไลน์
                เว็บไซต์ของเราเปิดรับสมาชิกใหม่ตลอด 24 ช.ม. โดยท่านสามารถเข้าร่วมเล่นกับเราได้ง่ายๆ ภายใน 15
                นาที
                พร้อมรับโบนัสเครดิตและโปรโมชั่นส่วนลดมากมายที่หาไม่ได้จากที่อื่น อย่าให้ปัญหาการติดต่อ
                หรือฝาก-ถอน
                มาเป็นอุปสรรคในช่วงเวลาแห่งความสุขของคุณ เล่นคาสิโนที่ GCLUBMY เรายึดถือการบริการเป็นอันดับ
                1
                พร้อมยินดีให้ความช่วยเหลือ ตอบทุกคำถาม เอาใจใส่ลูกค้าทุกคน
                ด้วยประสบการณ์ดูแลลูกค้านักพนันกว่าหมื่นคนต่อวัน
              </p>
            </div>
          </div>
        </div>
        <!-- End row 1 -->
        <div class="linecolor d-sm-none"></div>
        <div>
          <app-casino></app-casino>
        </div>
        <!-- End row 2 -->
        <div class="linecolor"></div>
        <!-- Text GCLUBMY WELCOME -->
        <div class="row justify-content-center img-btn-block d-md-block">
          <h1 class="text-title">สมัครสมาชิก GCLUBMY.COM</h1>
        </div>
        <div class="row">
          <div class="col-md-6">
            <app-register></app-register>
            <!-- END register -->
            <div class="linecolor d-sm-none"></div>
          </div>
          <div class="col-md-6">
            <br />
            <div class="bs-example">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="../assets/gbc-main-banner.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="../assets/gbc-main-banner.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="../assets/gbc-main-banner.jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <br />
            <div class="Download">
              <div class="row">
                <div class="col-6 text-center">
                  <img
                    @click="download()"
                    class="img-fluid mt-3"
                    src="../assets/image/app-download/apple_new.png"
                    alt="Third slide"
                  />
                </div>
                <div class="col-6 text-center">
                  <img
                    @click="download()"
                    class="img-fluid mt-3"
                    src="../assets/image/app-download/google_new.png"
                    alt="Third slide"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <button
                    @click="entranceMobile()"
                    type="button"
                    class="mt-3 btn btn-success btn-lg btn-block"
                  >ทางเข้า Mobile</button>
                </div>
                <div class="col-md-6">
                  <button
                    @click="entrance()"
                    type="button"
                    class="mt-3 btn btn-success btn-lg btn-block"
                  >ทางเข้า PC</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END row 3 -->
        <div class="linecolor"></div>
        <app-footer></app-footer>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    "app-register": () => import("../components/Register"),
    "app-casino": () => import("../components/Casino"),
    "app-footer": () => import("../components/Footer")
  }
};
</script>
<style scoped lang="scss">
.carousel {
  background: #0a0a0a;
  margin-top: 10px;
}
.carousel-item {
  text-align: center;
  min-height: 60px; /* Prevent carousel from being distorted if for some reason image doesn't load */
}
.bs-example {
  margin: 10px;
}

.bg {
  background: black;
}
div.linecolor {
  height: 4px;
  background: linear-gradient(
    to right,
    #fcf6ba,
    #bf953f,
    #fcf6ba,
    #bf953f,
    #fcf6ba
  );
  margin: 10px 0px;
}
</style>


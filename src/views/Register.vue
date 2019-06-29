<template>
  <div class="register">
    <div class="container bg">
      <br />
      <div class="text-center">
        <img src="../assets/gtrbetclub.png" />
      </div>
      <br />
      <div class="linecolor"></div>
      <div class="row">
        <div class="col-md-6">
          <div class="row justify-content-center img-btn-block d-md-block">
            <h1 class="text-title">สมัครสมาชิกผ่าน Website</h1>
          </div>
          <app-register></app-register>
          <div class="linecolor d-sm-none"></div>
        </div>
        <div class="col-md-6">
          <div class="row justify-content-center img-btn-block d-md-block">
            <h1 class="text-title">สมัครสมาชิกผ่าน Line</h1>
          </div>
          <br />
          <h2>ขั้นตอนที่ 1 แอดไลน์</h2>
          <p>ส่งข้อความแจ้งเจ้าหน้าที่ "สมัครสมาชิก" จากนั้นเจ้าหน้าที่ทำการตอบกลับ แจ้งรายละเอียดขั้นตอนการสมัคร และกรอกข้อมูลส่วนตัวของคุณลูกค้า เพื่อทำการยืนยันตัวตน</p>
          <h2>ขั้นตอนที่ 2 การโอนเงินเพื่อเปิดบัญชี</h2>
          <p>เมื่อกรอกข้อมูลส่วนตัวเรียบร้อยแล้ว เจ้าหน้าที่จะทำการตรวจสอบข้อมูล เมื่อตรวจสอบเรียบร้อยแล้ว ทางเจ้าหน้าที่จะแจ้งเลขบัญชีของทางเรา คุณลูกค้าทำการโอนเงินเข้า เพื่อเปิดบัญชี (สมัครสมาชิกฝากขั้นต่ำครั้งแรก 300 บาท) หลังทำขั้นตอนการโอนเงินสำเร็จ ทำการส่งสลิปการโอนให้กับเจ้าหน้าที่ เพื่อรับ User และ Password ในการเข้าเล่นคาสิโนออนไลน์ GCLUBMY ของทางเราค่ะ</p>
          <h2>ขั้นตอนที่ 3 การแจ้งฝากเงินเข้าคาสิโน</h2>
          <p>เมื่อได้รับ User และ Password แล้ว เข้าสู่ระบบ ล็อคอินทางเข้าเล่นคาสิโน ทำการ แจ้งฝากเงินเข้าสิโน แจ้งรายละเอียดดังนี้ เมื่อทำรายการเรียบร้อยแล้ว ขอให้สนุกกับการเดิมพันค่ะ</p>
          <button
            @click="linkLine()"
            type="button"
            class="mt-3 btn btn-success btn-lg btn-block"
          >{{$line}}</button>
        </div>
      </div>
      <br />
      <div class="linecolor"></div>
      <app-footer></app-footer>
      <br />
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  components: {
    "app-footer": () => import("../components/Footer"),
    "app-register": () => import("../components/Register")
  }
};
</script>

<style scoped lang="scss">
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
}
</style>
<template>
  <div class="register">
    <div class="container bg">
      <br />
      <div class="row justify-content-center img-btn-block d-md-block">
        <h1 class="text-title">โปรโมชั่น</h1>
      </div>
      <div class="row">
        <div class="col-md-4">
          <img class="w-100" src="../assets/promotions/Promotion_1.jpg" />
        </div>
        <div class="col-md-8">
          <h4 class="title d-block">❤ โปรโมชั่น ต้อนรับสมาชิกใหม่ โบนัส 30%</h4>
          <br />
          <p>ฝากครั้งแรก รับโบนัส 30% สูงสุด 1,000 บาท</p>
          <P>ข้อกำหนดและเงื่อนไข :</P>
          <ul>
            <li>โปรโมชั่นนี้สำหรับสมาชิกใหม่ที่ไม่เคยมีประวัติของการฝาก</li>
            <li>ฝากครั้งแรกขั้นต่ำ 300 บาท</li>
            <li>ให้โบนัสสูงสุด ไม่เกิน 1,000 บาท ตามเงื่อนไข</li>
            <li>
              ต้องมียอด Turn Over ไม่ต่ำกว่า 20 เท่า ของยอดฝากเงินครั้งแรก
              ถึงจะสามารถถอนเงินโบนัสที่เติมให้กลับได้
            </li>
            <li>
              นับยอดเทิร์น เฉพาะ คาสิโน และ เกม เท่านั้น (ไม่สามารถทำยอดเทิร์น
              จาก กีฬา ต่างๆได้)
            </li>
          </ul>
          <p>ตัวอย่าง :</p>
          <ul>
            <li>
              ฝากครั้งงแรก 500 บาท รับโบนัส 30% = 150 บาท รวมทั้งหมดเป็น 650
              บาท ต้องทำยอดเทิร์น 13,000 บาท
            </li>
            <li >
              โบนัส 30% จะถูกดึงคืนทันที เมื่อลูกค้าทำเทิร์นครบ
              และมีการแจ้งถอนเงินครั้งแรก
            </li>
          </ul>
        </div>
      </div>
      <app-footer></app-footer><br>
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

.title {
  background-color: #b00020;
  margin: 0;
  color: #fff;
  display: inline-block;
  padding: 5px 15px 5px 5px;
}
</style>

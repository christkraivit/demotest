<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="row justify-content-center img-btn-block d-md-block">
          <h1 class="text-title">ตัวอย่างเกมส์ที่นิยมที่เราให้บริการ</h1>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-6" v-for="casino in casinos" :key="casino.key">
            <div
              class="my-2 casino-item "
              data-aos="fade-in"
              :style="'background-image:url(' + casino.url + ')'"
              @click="linkLine()"
            >
              <h5 class="title text-center text-warning">{{ casino.title }}</h5>
              <p>{{ casino.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      casinos: []
    };
  },
  methods: {
    loadCasinoImage() {
      this.casinos = [
        {
          title: "บาคาร่า (Baccarat)",
          message:
            "พนันบาคาร่าออนไลน์หลากหลายรูป เริ่มต้นเพียง 10 บาท อัตตราจ่ายดีที่สุด เพิ่มความสมจริงด้วย Live Baccarat ถ่ายทอดสด",
          url: require("@/assets/image/casino/baccarat-small-bg-min.jpg")
        },
        {
          title: "แบล็คแจ็ค (Blackjack)",
          message:
            'ท้าทายเกมรุ่นเก๋าอย่าง "แบล็คแจ็ค" เริ่มสร้างรายได้กับแบล็คแจ็คออนไลน์โดยเดิมพันสูงสุดถึง 5 มือพร้อมๆ กัน เริ่มต้นเพียง 50 บาท',
          url: require("@/assets/image/casino/blackjack-small-bg-min.jpg")
        },
        {
          title: "เกมยิงปลา (Fish Hunter)",
          message:
            "เกมคาสิโนใหม่ มาแรง สนุกไปกับเกมยิงปลา GTR พร้อมภาพกราฟฟิกสุดน่ารัก ยิงง่าย ตายไว ได้เงินจริง เริ่มต้นเพียงนัดละ 1 บาท",
          url: require("@/assets/image/casino/fishshooting-small-bg-min.jpg")
        },
        {
          title: "รูเล็ต (Roulette)",
          message:
            "สนุกกับวงล้อรูเล็ตต์ที่ให้ผลตอบแทนสุดคุ้มค่า จ่ายหนักจัดเต็มสูงสุด 36 เท่าไปเลย! พร้อมรูปแบบการแทงที่หลากหลาย",
          url: require("@/assets/image/casino/roulette-small-bg-min.jpg")
        },
        {
          title: "ไฮโล (Sicbo)",
          message:
            "จัดหนักกับไฮโลออนไลน์ เกมพนันคลาสสิคที่เข้าใจง่าย มีรูปแบบการแทงหลากหลาย พร้อมเทคนิคและสูตรไฮโลที่ทำให้คุณมีโอกาสชนะมากขึ้น",
          url: require("@/assets/image/casino/sicbo-small-bg-min.jpg")
        },
        {
          title: "สล็อต (Slot)",
          message:
            "ลุ้นแจ็คพ็อตแตก เกมสล็อต GTR แค่หมุนละ 3 บาท ก็ได้ลุ้นรางวัลใหญ่สูงถึง 1,380 เท่า มีให้เลือกเล่นทุกแบบสูงสุด 236 เพย์ไลน์",
          url: require("@/assets/image/casino/slot-small-bg-min.jpg")
        }
      ];
    }
  },
  created() {
    this.loadCasinoImage();
  }
};
</script>

<style lang="scss">
.casino-item {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  height: 185px;
  padding-left: 170px;
  padding-top: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    border: 2px solid #fff700;
    border-image-source: linear-gradient(#ffeb00, orange);
    border-image-slice: 20;
  }

  p {
    text-indent: 15px;
    font-weight: 400;
  }
}
</style>

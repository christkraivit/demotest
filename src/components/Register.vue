<template>
  <div class="register">
    <div class="row justify-content-center my-4">
      <div class="col-lg-10">
        <div class="main-div">
          <div class="text-center py-3">
            <img
              src="../assets/logo.png"
              class="img-fluid"
              style="max-height: 70px;"
            />
          </div>
          <form method="POST" id="reg-form" @submit.prevent="submit()">
            <div class="form-group form inline">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    v-model="first_name"
                    name="first_name"
                    class="form-control"
                    placeholder="๊ชื่อ"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    v-model="last_name"
                    name="last_name"
                    class="form-control"
                    placeholder="๊นามสกุล"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="txt_tel"
                name="txt_tel"
                class="form-control"
                placeholder="เบอร์โทรศัพท์"
                OnKeyPress="return chkNumber(this)"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="txt_line_id"
                name="txt_line_id"
                class="form-control"
                placeholder="Line ID"
                required
              />
            </div>
            <div class="form-group">
              <select class="form-control" name="suggest" v-model="suggest">
                <option disabled value>รู้จักเราผ่านช่องทางใหน</option>
                <option value="ค้นจาก Google">ค้นจาก Google</option>
                <option value="ผ่านทาง Line">ผ่านทาง Line</option>
                <option value="โฆษณา Facebook">โฆษณา Facebook</option>
                <option value="โฆษณา Google">โฆษณา Google</option>
                <option value="เพื่อนแนะนำ">เพื่อนแนะนำ</option>
              </select>
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="bank_acc_name"
                name="bank_acc_name"
                class="form-control"
                placeholder="ชื่อบัญชี"
                required
              />
            </div>
            <div class="form-group">
              <div class="input-group mb-3">
                <select
                  class="custom-select"
                  style="font-size: initial;"
                  v-model="bank_name"
                  name="bank_name"
                >
                  <option disabled value>เลือกธนาคาร</option>
                  <option value="ธนาคารกรุงเทพ">ธนาคารกรุงเทพ</option>
                  <option value="ธนาคารกสิกรไทย">ธนาคารกสิกรไทย</option>
                  <option value="ธนาคารกรุงไทย">ธนาคารกรุงไทย</option>
                  <option value="ธนาคารทหารไทย">ธนาคารทหารไทย</option>
                  <option value="ธนาคารไทยพาณิชย์">ธนาคารไทยพาณิชย์</option>
                  <option value="ธนาคารกรุงศรีอยุธยา"
                    >ธนาคารกรุงศรีอยุธยา</option
                  >
                  <option value="ธนาคารเกียรตินาคิน">ธนาคารเกียรตินาคิน</option>
                  <option value="ธนาคารซีไอเอ็มบีไทย"
                    >ธนาคารซีไอเอ็มบีไทย</option
                  >
                  <option value="ธนาคารทิสโก้">ธนาคารทิสโก้</option>
                  <option value="ธนาคารธนชาต">ธนาคารธนชาต</option>
                  <option value="ธนาคารยูโอบี">ธนาคารยูโอบี</option>
                  <option value="ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)"
                    >ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)</option
                  >
                  <option value="ธนาคารไทยเครดิตเพื่อรายย่อย"
                    >ธนาคารไทยเครดิตเพื่อรายย่อย</option
                  >
                  <option value="ธนาคารแลนด์ แอนด์ เฮาส์"
                    >ธนาคารแลนด์ แอนด์ เฮาส์</option
                  >
                  <option value="ธนาคารไอซีบีซี (ไทย)"
                    >ธนาคารไอซีบีซี (ไทย)</option
                  >
                  <option
                    value="ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย"
                    >ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย</option
                  >
                  <option value="ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร"
                    >ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร</option
                  >
                  <option value="ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย"
                    >ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย</option
                  >
                  <option value="ธนาคารออมสิน">ธนาคารออมสิน</option>
                  <option value="ธนาคารอาคารสงเคราะห์"
                    >ธนาคารอาคารสงเคราะห์</option
                  >
                  <option value="ธนาคารอิสลามแห่งประเทศไทย"
                    >ธนาคารอิสลามแห่งประเทศไทย</option
                  >
                </select>
                <input
                  type="text"
                  v-model="bank_number"
                  name="bank_number"
                  class="form-control"
                  placeholder="เลขบัญชี"
                  onkeypress="return chkNumber(this)"
                  required
                />
              </div>
            </div>
            <div class="form-group row justify-content-center">
              <VueRecaptcha
                ref="recaptcha"
                @verify="onCaptchaVerified"
                @expired="onCaptchaExpired"
                sitekey="6LefQqsUAAAAAAbN3S38rx_xzwCCt42J0VC6Akn8"
              ></VueRecaptcha>
            </div>
            <input
              type="submit"
              name="submit_register"
              class="btn btn-success btn-block"
              value="สมัครสมาชิก"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  components: {
    VueRecaptcha
  },
  data() {
    return {
      recaptchaToken: "",
      first_name: "",
      last_name: "",
      txt_tel: "",
      txt_line_id: "",
      suggest: "",
      bank_acc_name: "",
      bank_name: "",
      bank_number: "",
      formRegister: new FormData()
    };
  },
  methods: {
    submit() {
      if (this.recaptchaToken) {
        this.formRegister.append("recaptchaToken", this.recaptchaToken);
        if (this.first_name)
          this.formRegister.append("first_name", this.first_name);
        if (this.last_name)
          this.formRegister.append("last_name", this.last_name);
        if (this.txt_tel) this.formRegister.append("txt_tel", this.txt_tel);
        if (this.txt_line_id)
          this.formRegister.append("txt_line_id", this.txt_line_id);
        if (this.suggest) this.formRegister.append("suggest", this.suggest);
        if (this.bank_acc_name)
          this.formRegister.append("bank_acc_name", this.bank_acc_name);
        if (this.bank_name)
          this.formRegister.append("bank_name", this.bank_name);
        if (this.bank_number)
          this.formRegister.append("bank_number", this.bank_number);

        Swal.fire({
          title: "กำลังดำเนินการ!",
          html: "กรุณารอสักครู่...",
          allowOutsideClick: false,
          onBeforeOpen: () => {
            Swal.showLoading();
            axios
              .post(
                "https://member.getmymoney.net/line/api/gclubmy/register.php",
                this.formRegister
              )
              .then(response => {
                console.log(response.data);
                if (response.data.status == "success") {
                  const html =
                    ` 
                    <p>กรุณา คัดลอก ID แล้วแจ้งทาง LINE@ <br> เพื่อรับ User เพื่อใช้เข้าระบบ</p>
                    <div class="row justify-content-center">   
                        <div class="form-group">  
                            <div class="input-group">  
                                <div class="input-group-prepend">
                                    <span class="input-group-text">ID</span>
                                </div>
                                <input type="text" readonly class="form-control text-center" style="font-weight: 600;color:red;" id="token_id" value="` +
                    JSON.stringify(response.data.id_ref) +
                    `" autofocus> 
                            </div> 
                        </div> 
                    </div> 
                    <div class="container"> 
                        <div class="row justify-content-center">
                            <div class="form-inline">
                                <button id="btn_copy" class=" btn btn-secondary btn-lg mx-2">คัดลอก</button>
                            </div>            
                            <div class="form-inline">
                                <button id="btn_openline" class=" btn btn-line btn-lg mx-2">เปิด LINE@</button>
                            </div>            
                        </div>
                    </div> 
                    `;
                  Swal.fire({
                    title: "เรียบร้อย!",
                    type: "success",
                    html,
                    showCloseButton: true,
                    focusConfirm: false,
                    allowOutsideClick: false,
                    showConfirmButton: false,
                    onBeforeOpen: () => {
                      $("#btn_copy").on("click", () => {
                        $("#token_id").select();
                        document.execCommand("copy");
                      });
                      $("#btn_openline").on("click", () => {
                        window.location =
                          "https://line.me/R/ti/p/" + this.$line;
                      });
                    }
                  }).then(() => {
                    this.resetForm();
                  });
                } else {
                  Swal.fire(
                    "พบข้อผิดพลาด",
                    "" + response.data.message,
                    "" + response.data.status
                  );
                }
              })
              .catch(err => {
                console.log(err);
                Swal.fire("ERROR", "พบข้อผิดพลาด", "error");
              })
              .then(() => {
                // console.log("Finaly");
                this.$refs.recaptcha.reset();
                this.recaptchaToken = "";
              });
          },
          onClose: () => {}
        }).then(result => {
          console.log(result);
          if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.timer
          ) {
            console.log("I was closed by the timer");
          }
        });
      } else Swal.fire("ERROR", "กรุณายืนยันตัวตนว่าไม่ใช่ Robot!", "error");

      // this.$refs.recaptcha.execute();
    },
    onCaptchaVerified(recaptchaToken) {
      this.recaptchaToken = recaptchaToken;
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
      this.recaptchaToken = "";
    },
    resetForm() {
      this.$refs.recaptcha.reset();
      this.recaptchaToken = "";
      this.first_name = "";
      this.last_name = "";
      this.txt_tel = "";
      this.txt_line_id = "";
      this.suggest = "";
      this.bank_acc_name = "";
      this.bank_name = "";
      this.bank_number = "";
    }
  }
};
</script>

<style scoped lang="scss">
.register {
  color: #fff;
}
.main-div {
  background: #00000093 none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
}
</style>

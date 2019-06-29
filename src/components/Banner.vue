<template>
  <div class="banner py-2">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/logo.png" style="max-height:64px" alt class="img-fluid ">
        </div>
        <div class="col-md-6 text-right">
          <button @click="linkLine()" class="btn btn-register mr-2">สมัครสมาชิก</button>
          <button @click="login()" class="btn btn-login ml-2">เข้าสู่ระบบ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin btn-hover {
  &:hover {
    color: #fff;
    box-shadow: 0 0 6px 0 rgb(236, 0, 0);
    background: rgba(0, 0, 0, 0.1);
    transition: all 0.2s cubic-bezier(0, 0, 0.1, 1.97);
    &:before {
      animation: shine 0.5s 0s linear;
    }
  }
}

.banner {
    .col-md-6{
        @media (max-width: 768px){
            text-align: center !important;
        }
    }
  .btn-register {
    padding-left: 24px;
    padding-right: 24px; 
    border: 1px solid rgba(225, 0, 0, 0.94);
    background: linear-gradient(to bottom, #f30505 0%, #8a0101 100%);
    color: #ffffff;
    border-radius: 7px; 
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.44);
    @include btn-hover;
  }

  .btn-login {
    padding-left: 40px;
    padding-right: 40px; 
    border-radius: 7px; 
    background: linear-gradient(to bottom, #707070 0%, #111111 100%);
    color: #fff;
    border: 1px solid #b0b0b0;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.14);
    @include btn-hover;
  }
}
</style>
<style>
  .banner{
    background: black;
  }
</style>

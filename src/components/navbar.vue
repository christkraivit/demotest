<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-defult d-sm-flex d-none">
      <ul class="navbar-nav mx-auto navbar-sele">
        <li class="nav-item">
          <router-link  to="/#" class="topnav nav-link">หน้าแรก</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="topnav nav-link">เกี่ยวกับเรา</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="topnav nav-link">สมัครสมาชิก</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/promotion" class="topnav nav-link">โปรโมชั่น</router-link>
        </li>
        <li class="nav-item">
          <a @click="deposit()" href="#" class="topnav nav-link">ฝากถอน</a>
        </li>
        <li class="nav-item">
          <a @click="contactme()" href="#" class="topnav nav-link">ติดต่อเรา</a>
        </li>
      </ul>
    </nav>
    <!-- End meun top -->
    
  </div>
</template>
<style scoped lang="scss">
.navbar-defult {
  background: linear-gradient(
    to right,
    #fcf6ba,
    #bf953f,
    #ece7ad,
    #bf953f,
    #fcf6ba
  );
}
/* Change the color of links on hover */
// li {
//   display: inline-block;
// }
li a {
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  padding: 0 20px;
}
.topnav::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #ffffff;
  transition: width 0.3s;
}
.topnav:hover::after {
  width: 100%;
  transition: width 0.3s;
}
.router-link-active{
  color:#ffffff;
}

</style>

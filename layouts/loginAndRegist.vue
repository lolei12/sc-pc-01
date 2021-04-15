<template>
  <div>
    <Header></Header>
    <div style="clear: both"></div>

    <!-- 页面头部 start -->
    <div class="header w990 bc mt15">
      <div class="logo w990">
        <h2 class="fl">
          <a href="index.html"><img src="images/logo.png" alt="商城商城" /></a>
        </h2>
      </div>
    </div>
    <!-- 页面头部 end -->
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
//组件名的大小写要与.vue文件一致
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  head: {
   
    link: [
      { rel: "stylesheet", href: "/style/base.css" },
      { rel: "stylesheet", href: "/style/global.css" },
      { rel: "stylesheet", href: "/style/header.css" },
     { rel: "stylesheet", href: "/style/login.css" },
      { rel: "stylesheet", href: "/style/footer.css" },
      
    ],
    // script: [
    // { type: 'text/javascript', href: '/js/jquery-1.8.3.min.js' }
    // ]
  },
};
</script>

<style>
</style>
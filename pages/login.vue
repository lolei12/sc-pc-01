<template>
  <div>
      <!-- 登录主体部分start -->
	<div class="login w990 bc mt10">
		<div class="login_hd">
			<h2>用户登录</h2>
			<b></b>
		</div>
		<div class="login_bd">
			<div class="login_form fl">
				<form action="" method="post">
					<ul>
						<li>
							<label for="">手机号：</label>
							<input type="text" class="txt" name="mobile" v-model="loginForm.mobile" />
						</li>
						<li>
							<label for="">密码：</label>
							<input type="password" class="txt" name="password" v-model="loginForm.password" />
							<a href="">忘记密码?</a>
						</li>
						<li class="checkcode">
							<label for="">验证码：</label>
							<input type="text"  name="checkcode" />
							<img src="images/checkcode1.jpg" alt="" />
							<span>看不清？<a href="">换一张</a></span>
						</li>
						<li>
							<label for="">&nbsp;</label>
							<input type="checkbox" class="chb"  /> 保存登录信息
						</li>
						<li>
							<label for="">&nbsp;</label>
							<!-- <input type="submit" value="" class="login_btn" /> -->
                            <button class="login_btn" @click.prevent="submit"></button>
						</li>
					</ul>
				</form>

				<div class="coagent mt15">
					<dl>
						<dt>使用合作网站登录商城：</dt>
						<dd class="qq"><a href=""><span></span>QQ</a></dd>
						<dd class="weibo"><a href=""><span></span>新浪微博</a></dd>
						<dd class="yi"><a href=""><span></span>网易</a></dd>
						<dd class="renren"><a href=""><span></span>人人</a></dd>
						<dd class="qihu"><a href=""><span></span>奇虎360</a></dd>
						<dd class=""><a href=""><span></span>百度</a></dd>
						<dd class="douban"><a href=""><span></span>豆瓣</a></dd>
					</dl>
				</div>
			</div>
			
			<div class="guide fl">
				<h3>还不是商城用户</h3>
				<p>现在免费注册成为商城用户，便能立刻享受便宜又放心的购物乐趣，心动不如行动，赶紧加入吧!</p>

				<a href="regist.html" class="reg_btn">免费注册 >></a>
			</div>

		</div>
	</div>
	<!-- 登录主体部分end -->
  </div>
</template>

<script>
//import sysConfig from '@/plugins/sysConfig.js'
import {mapMutations} from 'vuex'
export default {
     layout:'loginAndRegist',//布局文件
     data(){
         return{
             loginForm:{
                 mobile:'',//可以省略
                 password:''//可以省略
             }
         }
     },
     methods: {
         //展开mutations中的方法
//...mapMutations(['setName','setToken','changeLoginState']),之前这种写法对应的是store中的index.js文件 现在不对应index.js这种写法不行
...mapMutations({
    setName:'LoginStore/setName',
    setToken:'LoginStore/setToken',
    changeLoginState:'LoginStore/changeLoginState'
}),
         async submit(){

			//登录的时候如果购物车中有数据，就得将这个数据同步到当前用户的购物车
             //取出cart，本地存储在localStorage中,存在localStorage中的cart类型是字符串类型

             let cart=localStorage.getItem('cart')
			 //如果localStorage不存在cart，那么cart为null，否则cart为一个字符串
			 //由于后台去接受一个数组难度比较大，这里直接传字符串
            
             //组装成接口所需要的数据格式
             let logindata={
                 mobile:this.loginForm.mobile,
                 password:this.loginForm.password,
                 cart:cart
             }
             let{data}=await this.$axios.$post("/auth-service/login",logindata)
             if(data.errno==0){
                 alert("登录成功")
                 //将数据存储到localstorage中
                 localStorage.setItem("name",data.name)
                 localStorage.setItem("token",data.token)

				 //在登录成功之后，移除购物车商品数据信息
                 //将登录信息保存到vuex中，在项目中如果许多组件都要使用登录信息则应该将登录信息保存在vuex中
                 this.setName(data.name)
                 //跳转到项目首页
                 this.$router.push("/")//"/"即代表首页
             }else{
                 alert(data.errmsg)
             }

         }
     },

}
</script>

<style>

</style>
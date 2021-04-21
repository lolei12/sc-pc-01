<template>
<div>
    <div style="clear:both;"></div>
	
	<!-- 页面头部 start -->
	<div class="header w990 bc mt15">
		<div class="logo w990">
			<h2 class="fl"><a href="index.html"><img src="images/logo.png" alt="商城"></a></h2>
			<div class="flow fr">
				<ul>
					<li class="cur">1.我的购物车</li>
					<li>2.填写核对订单信息</li>
					<li>3.成功提交订单</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- 页面头部 end -->
	
	<div style="clear:both;"></div>

	<!-- 主体部分 start -->
	<div class="mycart w990 mt10 bc">
		<h2><span>我的购物车</span></h2>
		<table>
			<thead>
				<tr>
                    <th></th>
					<th class="col1">商品名称</th>
					<th class="col2">商品信息</th>
					<th class="col3">单价</th>
					<th class="col4">数量</th>	
					<th class="col5">小计</th>
					<th class="col6">操作</th>
				</tr>
			</thead>
			<tbody>
              <tr v-if="carts==null||carts.length==0">
                  <td style="height:50px" colspan="7"> 购物车中没有商品 </td>
              </tr>
				<tr v-for="(v,k) in carts" :key="k">
                    <td><input type="checkbox" v-model="v.checked" @change="update_num(k)"></td>
					<td class="col1"><a href=""><img :src="v.midlogo" alt="" /></a>  <strong><a href="">{{v.goods_name}}</a></strong></td>
					<td class="col2">{{v.spec_info}} </td>
					<td class="col3">￥<span>{{v.price}}</span></td>
					<td class="col4"> 
						<a href="javascript:;" class="reduce_num" @click.prevent="reduce_num(k)"></a>
						<input type="text" v-model="v.count" class="amount" @change="update_num(k)"/>
						<a href="javascript:;" class="add_num" @click.prevent="add_num(k)" ></a>
					</td>
					<td class="col5">￥<span>{{(v.count*v.price).toFixed(2)}}</span></td>
					<td class="col6"><a href="" @click.prevent="del(k)">删除</a></td>
				</tr>
			
			</tbody>
			<tfoot>
				<tr>
					<td colspan="6">购物金额总计： <strong>￥ <span id="total">{{totalPrice}}</span></strong></td>
				</tr>
			</tfoot>
		</table>
		<div class="cart_btn w990 bc mt10">
			<a href="" class="continue">继续购物</a>
			<a href="" class="checkout">结 算</a>
		</div>
	</div>
	<!-- 主体部分 end -->
</div>
  
</template>

<script>
export default {
     layout:'front_common',
     head: {
   
    link: [
      { rel: "stylesheet", href: "/style/cart.css" },
    
      
    ],
     script:[
    {type:'text/javascript',src:'/js/jquery-1.8.3.min.js'},
    // {type:'text/javascript',src:'/js/cart1.js'},

  ],
  },
  data() {
      return {
          carts:[],//购物车数据
      }
  },
  mounted() {
      //获取购物车数据
      let cart=localStorage.getItem("cart")
      if(cart!=null){
          this.carts=JSON.parse(cart)//将JSON字符串转成数组对象
      }
  },
  //使用计算属性计算购物车总金额
  computed:{
      //计算属性：本质是一个方法，却想属性一样使用
      totalPrice(){
          let sum=0
          for(let i=0;i<this.carts.length;i++){
              if(this.carts[i].checked){
                  sum+=this.carts[i].price*this.carts[i].count
              }
          }
          return sum.toFixed(2)//保留两位小数
      }
  },
  methods: {
      reduce_num(k){//k表示第几个元素
          if(this.carts[k].count>1){
              this.carts[k].count--
          }
          //当数量发生改变时，值重新存入localstorage
          localStorage.setItem("cart",JSON.stringify(this.carts))
      },
      add_num(k){
      this.carts[k].count++
      //当数量发生改变时，值重新存入localstorage
          localStorage.setItem("cart",JSON.stringify(this.carts))
     },
     //更新内容的时候，默认更新的是页面的数据，也需要将数据更新到localstorage中去
     update_num(k){
         localStorage.setItem("cart",JSON.stringify(this.carts))
     },
     del(k){
         //删除数组中第k个元素
         this.carts.splice(k,1)
         //将内容存入localstorage中
         localStorage.setItem("cart",JSON.stringify(this.carts))
     }
        

  },
  

}
</script>

<style>

</style>
<template>
  <div>
      <div style="clear:both;"></div>

	<!-- 头部 start -->
	<div class="header w1210 bc mt15">
		<!-- 头部上半部分 start 包括 logo、搜索、用户中心和购物车结算 -->
		<div class="logo w1210">
			<h1 class="fl"><a href="index.html"><img src="images/logo.png" alt="商城商城"></a></h1>
			<!-- 头部搜索 start -->
			<div class="search fl">
				<div class="search_form">
					<div class="form_left fl"></div>
					<form action="" name="serarch" method="get" class="fl">
						<input type="text" class="txt" value="请输入商品关键字" /><input type="submit" class="btn" value="搜索" />
					</form>
					<div class="form_right fl"></div>
				</div>
				
				<div style="clear:both;"></div>

				<div class="hot_search">
					<strong>热门搜索:</strong>
					<a href="">D-Link无线路由</a>
					<a href="">休闲男鞋</a>
					<a href="">TCL空调</a>
					<a href="">耐克篮球鞋</a>
				</div>
			</div>
			<!-- 头部搜索 end -->

			<!-- 用户中心 start-->
			<div class="user fl">
				<dl>
					<dt>
						<em></em>
						<a href="">用户中心</a>
						<b></b>
					</dt>
					<dd>
						<div class="prompt">
							您好，请<a href="">登录</a>
						</div>
						<div class="uclist mt10">
							<ul class="list1 fl">
								<li><a href="">用户信息></a></li>
								<li><a href="">我的订单></a></li>
								<li><a href="">收货地址></a></li>
								<li><a href="">我的收藏></a></li>
							</ul>

							<ul class="fl">
								<li><a href="">我的留言></a></li>
								<li><a href="">我的红包></a></li>
								<li><a href="">我的评论></a></li>
								<li><a href="">资金管理></a></li>
							</ul>

						</div>
						<div style="clear:both;"></div>
						<div class="viewlist mt10">
							<h3>最近浏览的商品：</h3>
							<ul>
								<li><a href=""><img src="images/view_list1.jpg" alt="" /></a></li>
								<li><a href=""><img src="images/view_list2.jpg" alt="" /></a></li>
								<li><a href=""><img src="images/view_list3.jpg" alt="" /></a></li>
							</ul>
						</div>
					</dd>
				</dl>
			</div>
			<!-- 用户中心 end-->

			<!-- 购物车 start -->
			<div class="cart fl">
				<dl>
					<dt>
						<a href="">去购物车结算</a>
						<b></b>
					</dt>
					<dd>
						<div class="prompt">
							购物车中还没有商品，赶紧选购吧！
						</div>
					</dd>
				</dl>
			</div>
			<!-- 购物车 end -->
		</div>
		<!-- 头部上半部分 end -->
		
		<div style="clear:both;"></div>

		<!-- 导航条部分 start -->
		<div class="nav w1210 bc mt10">
			<!--  商品分类部分 start-->
			<div class="category fl cat1"> <!-- 非首页，需要添加cat1类 -->
				<div class="cat_hd off">  <!-- 注意，首页在此div上只需要添加cat_hd类，非首页，默认收缩分类时添加上off类，并将cat_bd设置为不显示，鼠标滑过时展开菜单则将off类换成on类 -->
					<h2>全部商品分类</h2>
					<em></em>
				</div>
				
				<div class="cat_bd none">
					
					<div class="cat item1">
						<h3><a href="">图像、音像、数字商品</a> <b></b></h3>
						<div class="cat_detail none">
							<dl class="dl_1st">
								<dt><a href="">电子书</a></dt>
								<dd>
									<a href="">免费</a>
									<a href="">小说</a>
									<a href="">励志与成功</a>
									<a href="">婚恋/两性</a>
									<a href="">文学</a>
									<a href="">经管</a>
									<a href="">畅读VIP</a>						
								</dd>
							</dl>

							<dl>
								<dt><a href="">数字音乐</a></dt>
								<dd>
									<a href="">通俗流行</a>
									<a href="">古典音乐</a>
									<a href="">摇滚说唱</a>
									<a href="">爵士蓝调</a>
									<a href="">乡村民谣</a>
									<a href="">有声读物</a>
								</dd>
							</dl>

							<dl>
								<dt><a href="">音像</a></dt>
								<dd>
									<a href="">音乐</a>
									<a href="">影视</a>
									<a href="">教育音像</a>
									<a href="">游戏</a>
								</dd>
							</dl>

							<dl>
								<dt><a href="">文艺</a></dt>
								<dd>
									<a href="">小说</a>
									<a href="">文学</a>
									<a href="">青春文学</a>
									<a href="">传纪</a>
									<a href="">艺术</a>
									<a href="">经管</a>
									<a href="">畅读VIP</a>						
								</dd>
							</dl>

							<dl>
								<dt><a href="">人文社科</a></dt>
								<dd>
									<a href="">历史</a>
									<a href="">心理学</a>
									<a href="">政治/军事</a>
									<a href="">国学/古籍</a>
									<a href="">哲学/宗教</a>
									<a href="">社会科学</a>
								</dd>
							</dl>

							<dl>
								<dt><a href="">经管励志</a></dt>
								<dd>
									<a href="">经济</a>
									<a href="">金融与投资</a>
									<a href="">管理</a>
									<a href="">励志与成功</a>
								</dd>
							</dl>

							<dl>
								<dt><a href="">人文社科</a></dt>
								<dd>
									<a href="">历史</a>
									<a href="">心理学</a>
									<a href="">政治/军事</a>
									<a href="">国学/古籍</a>
									<a href="">哲学/宗教</a>
									<a href="">社会科学</a>
								</dd>
							</dl>

							<dl>
								<dt><a href="">生活</a></dt>
								<dd>
									<a href="">烹饪/美食</a>
									<a href="">时尚/美妆</a>
									<a href="">家居</a>
									<a href="">娱乐/休闲</a>
									<a href="">动漫/幽默</a>
									<a href="">体育/运动</a>
								</dd>
							</dl>

							<dl>
								<dt><a href="">科技</a></dt>
								<dd>
									<a href="">科普</a>
									<a href="">建筑</a>
									<a href="">IT</a>
									<a href="">医学</a>
									<a href="">工业技术</a>
									<a href="">电子/通信</a>
									<a href="">农林</a>
									<a href="">科学与自然</a>
								</dd>
							</dl>

						</div>
					</div>

					<div class="cat">
						<h3><a href="">家用电器</a><b></b></h3>
						<div class="cat_detail">
							<dl class="dl_1st">
								<dt><a href="">大家电</a></dt>
								<dd>
									<a href="">平板电视</a>
									<a href="">空调</a>
									<a href="">冰箱</a>
									<a href="">洗衣机</a>
									<a href="">热水器</a>
									<a href="">DVD</a>
									<a href="">烟机/灶具</a>						
								</dd>
							</dl>

							<dl>
								<dt><a href="">生活电器</a></dt>
								<dd>
									<a href="">取暖器</a>
									<a href="">加湿器</a>
									<a href="">净化器</a>
									<a href="">饮水机</a>
									<a href="">净水设备</a>
									<a href="">吸尘器</a>
									<a href="">电风扇</a>						
								</dd>
							</dl>

							<dl>
								<dt><a href="">厨房电器</a></dt>
								<dd>
									<a href="">电饭煲</a>
									<a href="">豆浆机</a>
									<a href="">面包机</a>
									<a href="">咖啡机</a>
									<a href="">微波炉</a>
									<a href="">电磁炉</a>
									<a href="">电水壶</a>						
								</dd>
							</dl>

							<dl>
								<dt><a href="">个护健康</a></dt>
								<dd>
									<a href="">剃须刀</a>
									<a href="">电吹风</a>
									<a href="">按摩器</a>
									<a href="">足浴盆</a>
									<a href="">血压计</a>
									<a href="">体温计</a>
									<a href="">血糖仪</a>						
								</dd>
							</dl>

							<dl>
								<dt><a href="">五金家装</a></dt>
								<dd>
									<a href="">灯具</a>
									<a href="">LED灯</a>
									<a href="">水槽</a>
									<a href="">龙头</a>
									<a href="">门铃</a>
									<a href="">电器开关</a>
									<a href="">插座</a>						
								</dd>
							</dl>
						</div>
					</div>

					<div class="cat">
						<h3><a href="">手机、数码</a><b></b></h3>
						<div class="cat_detail none">
							
						</div>
					</div>

					<div class="cat">
						<h3><a href="">电脑、办公</a><b></b></h3>
						<div class="cat_detail none">
							
						</div>
					</div>
					
					<div class="cat">
						<h3><a href="">家局、家具、家装、厨具</a><b></b></h3>
						<div class="cat_detail none">
							
						</div>
					</div>
					
					<div class="cat">
						<h3><a href="">服饰鞋帽</a><b></b></h3>
						<div class="cat_detail none">
							
						</div>
					</div>
					
					<div class="cat">
						<h3><a href="">个护化妆</a><b></b></h3>
						<div class="cat_detail none">
							
						</div>
					</div>
					
					<div class="cat">
						<h3><a href="">礼品箱包、钟表、珠宝</a><b></b></h3>
						<div class="cat_detail none">
							
						</div>
					</div>

					<div class="cat">
						<h3><a href="">运动健康</a><b></b></h3>
						<div class="cat_detail none">
							
						</div>
					</div>

					<div class="cat">
						<h3><a href="">汽车用品</a><b></b></h3>
						<div class="cat_detail none">
							
						</div>
					</div>
					
					<div class="cat">
						<h3><a href="">母婴、玩具乐器</a><b></b></h3>
						<div class="cat_detail none">
							
						</div>
					</div>

					<div class="cat">
						<h3><a href="">食品饮料、保健食品</a><b></b></h3>
						<div class="cat_detail none">
							
						</div>
					</div>

					<div class="cat">
						<h3><a href="">彩票、旅行、充值、票务</a><b></b></h3>
						<div class="cat_detail none">
							
						</div>
					</div>

				</div>

			</div>
			<!--  商品分类部分 end--> 

			<div class="navitems fl">
				<ul class="fl">
					<li class="current"><a href="">首页</a></li>
					<li><a href="">电脑频道</a></li>
					<li><a href="">家用电器</a></li>
					<li><a href="">品牌大全</a></li>
					<li><a href="">团购</a></li>
					<li><a href="">积分商城</a></li>
					<li><a href="">夺宝奇兵</a></li>
				</ul>
				<div class="right_corner fl"></div>
			</div>
		</div>
		<!-- 导航条部分 end -->
	</div>
	<!-- 头部 end-->

	<div style="clear:both;"></div>

	<!-- 列表主体 start -->
	<div class="list w1210 bc mt10">
		<!-- 面包屑导航 start -->
		<div class="breadcrumb">
			<h2>当前位置：<a href="">首页</a> > <a href="">电脑、办公</a></h2>
		</div>
		<!-- 面包屑导航 end -->

		<!-- 左侧内容 start -->
		<div class="list_left fl mt10">
			<!-- 分类列表 start -->
			<div class="catlist">
				<h2>电脑、办公</h2>
				<div class="catlist_wrap">
					<div class="child">
						<h3 class="on"><b></b>电脑整机</h3>
						<ul>
							<li><a href="">笔记本</a></li>
							<li><a href="">超极本</a></li>
							<li><a href="">平板电脑</a></li>
						</ul>
					</div>

					<div class="child">
						<h3><b></b>电脑配件</h3>
						<ul class="none">
							<li><a href="">CPU</a></li>
							<li><a href="">主板</a></li>
							<li><a href="">显卡</a></li>
						</ul>
					</div>

					<div class="child">
						<h3><b></b>办公打印</h3>
						<ul class="none">
							<li><a href="">打印机</a></li>
							<li><a href="">一体机</a></li>
							<li><a href="">投影机</a></li>
							
						</ul>
					</div>

					<div class="child">
						<h3><b></b>网络产品</h3>
						<ul class="none">
							<li><a href="">路由器</a></li>
							<li><a href="">网卡</a></li>
							<li><a href="">交换机</a></li>
							
						</ul>
					</div>

					<div class="child">
						<h3><b></b>外设产品</h3>
						<ul class="none">
							<li><a href="">鼠标</a></li>
							<li><a href="">键盘</a></li>
							<li><a href="">U盘</a></li>
						</ul>
					</div>
				</div>
				
				<div style="clear:both; height:1px;"></div>
			</div>
			<!-- 分类列表 end -->
				
			<div style="clear:both;"></div>	

			<!-- 新品推荐 start -->
			<div class="newgoods leftbar mt10">
				<h2><strong>新品推荐</strong></h2>
				<div class="leftbar_wrap">
					<ul>
						<li>
							<dl>
								<dt><a href=""><img src="images/list_hot1.jpg" alt="" /></a></dt>
								<dd><a href="">美即流金丝语悦白美颜新年装4送3</a></dd>
								<dd><strong>￥777.50</strong></dd>
							</dl>
						</li>

						<li>
							<dl>
								<dt><a href=""><img src="images/list_hot2.jpg" alt="" /></a></dt>
								<dd><a href="">领券满399减50 金斯利安多维片</a></dd>
								<dd><strong>￥239.00</strong></dd>
							</dl>
						</li>

						<li class="last">
							<dl>
								<dt><a href=""><img src="images/list_hot3.jpg" alt="" /></a></dt>
								<dd><a href="">皮尔卡丹pierrecardin 男士长...</a></dd>
								<dd><strong>￥1240.50</strong></dd>
							</dl>
						</li>
					</ul>
				</div>
			</div>
			<!-- 新品推荐 end -->

			<!--热销排行 start -->
			<div class="hotgoods leftbar mt10">
				<h2><strong>热销排行榜</strong></h2>
				<div class="leftbar_wrap">
					<ul>
						<li></li>
					</ul>
				</div>
			</div>
			<!--热销排行 end -->

			<!-- 最近浏览 start -->
			<div class="viewd leftbar mt10">
				<h2><a href="">清空</a><strong>最近浏览过的商品</strong></h2>
				<div class="leftbar_wrap">
					<dl>
						<dt><a href=""><img src="images/hpG4.jpg" alt="" /></a></dt>
						<dd><a href="">惠普G4-1332TX 14英寸笔记...</a></dd>
					</dl>

					<dl class="last">
						<dt><a href=""><img src="images/crazy4.jpg" alt="" /></a></dt>
						<dd><a href="">直降200元！TCL正1.5匹空调</a></dd>
					</dl>
				</div>
			</div>
			<!-- 最近浏览 end -->
		</div>
		<!-- 左侧内容 end -->
	
		<!-- 列表内容 start -->
		<div class="list_bd fl ml10 mt10">
			<!-- 热卖、促销 start -->
			<div class="list_top">
				<!-- 热卖推荐 start -->
				<div class="hotsale fl">
					<h2><strong><span class="none">热卖推荐</span></strong></h2>
					<ul>
						<li>
							<dl>
								<dt><a href=""><img src="images/hpG4.jpg" alt="" /></a></dt>
								<dd class="name"><a href="">惠普G4-1332TX 14英寸笔记本电脑 （i5-2450M 2G 5</a></dd>
								<dd class="price">特价：<strong>￥2999.00</strong></dd>
								<dd class="buy"><span>立即抢购</span></dd>
							</dl>
						</li>

						<li>
							<dl>
								<dt><a href=""><img src="images/list_hot3.jpg" alt="" /></a></dt>
								<dd class="name"><a href="">ThinkPad E42014英寸笔记本电脑</a></dd>
								<dd class="price">特价：<strong>￥4199.00</strong></dd>
								<dd class="buy"><span>立即抢购</span></dd>
							</dl>
						</li>

						<li>
							<dl>
								<dt><a href=""><img src="images/acer4739.jpg" alt="" /></a></dt>
								<dd class="name"><a href="">宏碁AS4739-382G32Mnkk 14英寸笔记本电脑</a></dd>
								<dd class="price">特价：<strong>￥2799.00</strong></dd>
								<dd class="buy"><span>立即抢购</span></dd>
							</dl>
						</li>
					</ul>
				</div>
				<!-- 热卖推荐 end -->

				<!-- 促销活动 start -->
				<div class="promote fl">
					<h2><strong><span class="none">促销活动</span></strong></h2>
					<ul>
						<li><b>.</b><a href="">DIY装机之向雷锋同志学习！</a></li>
						<li><b>.</b><a href="">京东宏碁联合促销送好礼！</a></li>
						<li><b>.</b><a href="">台式机笔记本三月巨惠！</a></li>
						<li><b>.</b><a href="">富勒A53g智能人手识别鼠标</a></li>
						<li><b>.</b><a href="">希捷硬盘白色情人节专场</a></li>
					</ul>

				</div>
				<!-- 促销活动 end -->
			</div>
			<!-- 热卖、促销 end -->
			
			<div style="clear:both;"></div>
			
			<!-- 商品筛选 start -->
			<div class="filter mt10">
				<h2><a href="">重置筛选条件</a> <strong>商品筛选</strong></h2>
				<div class="filter_wrap">
					<dl>
						<dt>品牌：</dt>
						<dd :class="{cur:search.brand_id==''}"><a @click.prevent="setBrand('')" href="">不限</a></dd>
						<dd v-for="(v,k) in brands" :key="k"   :class="{cur:search.brand_id==v.id}" ><a @click.prevent="setBrand(v.id)" href="">{{v.brand_name}}</a></dd>
			
					</dl>

					<dl v-for="(v,k) in specs" :key="k">
						<dt>{{v.spec_name}}：</dt>
						<dd :class="{cur:v.selected==''}"><a @click.prevent="setSpec(k,'')" href="">不限</a></dd>
						<dd :class="{cur:v.selected==v1.option_name}" v-for="(v1,k1) in v.options" :key="k1"><a  @click.prevent="setSpec(k,v1.option_name)" href="">{{v1.option_name}}</a></dd>
					
					</dl>

					<!-- <dl>
						<dt>尺寸：</dt>
						<dd class="cur"><a href="">不限</a></dd>
						<dd><a href="">10.1英寸及以下</a></dd>
						<dd><a href="">11英寸</a></dd>
						<dd><a href="">12英寸</a></dd>
						<dd><a href="">13英寸</a></dd>
						<dd><a href="">14英寸</a></dd>
						<dd><a href="">15英寸</a></dd>
					</dl>

					<dl class="last">
						<dt>处理器：</dt>
						<dd class="cur"><a href="">不限</a></dd>
						<dd><a href="">intel i3</a></dd>
						<dd><a href="">intel i5</a></dd>
						<dd><a href="">intel i7</a></dd>
						<dd><a href="">AMD A6</a></dd>
						<dd><a href="">AMD A8</a></dd>
						<dd><a href="">AMD A10</a></dd>
						<dd><a href="">其它intel平台</a></dd>
					</dl> -->
				</div>
			</div>
			<!-- 商品筛选 end -->
			
			<div style="clear:both;"></div>

			<!-- 排序 start -->
			<div class="sort mt10">
				<dl>
					<dt>排序：</dt>
					<dd :class="{cur:search.sort_by=='xl'}"><a @click.prevent="setSort('xl')" href="">销量</a></dd>
					<dd :class="{cur:search.sort_by=='jg'}"><a @click.prevent="setSort('jg')" href="">
						价格
				<span v-if="search.sort_way=='asc'" >↑</span>
						<span v-if="search.sort_way=='desc'" >↓</span>
						</a></dd>
					<dd :class="{cur:search.sort_by=='pl'}"><a @click.prevent="setSort('pl')" href="">评论数</a></dd>
					<dd :class="{cur:search.sort_by=='sj'}"><a @click.prevent="setSort('sj')"  href="">上架时间</a></dd>
					
						价格:<input type="text" v-model="search.min_price" style="width:50px">——
						<input type="text" v-model="search.max_price" style="width:50px">
						<input type="button" value="搜索" @click="updateGoods()" >
					
				</dl>
			</div>
			<!-- 排序 end -->
			
			<div style="clear:both;"></div>

			<!-- 商品列表 start-->
			<div class="goodslist mt10">
				<ul>
					<li v-for="(v,k) in goods" :key="k">
						<dl>
							<dt><a :href="'/goods/'+v.id"><img :src="v.midlogo" alt="" /></a></dt>
							<dd><a :href="'/goods/'+v.id">{{v.goods_name}}</a></dd>
							<dd><strong>￥{{v.price}}</strong></dd>
							<dd><a :href="'/goods/'+v.id"><em>已有{{v.comment_count}}人评价</em></a></dd>
						</dl>
					</li>

				
				</ul>
			</div>
			<!-- 商品列表 end-->

			<!-- 分页信息 start -->
			<div class="page mt20">
				<!-- <a href="">首页</a>
				<a href="">上一页</a>
				<a href="">1</a>
				<a href="">2</a>
				<a href="" class="cur">3</a>
				<a href="">4</a>
				<a href="">5</a>
				<a href="">下一页</a>
				<a href="">尾页</a>&nbsp;&nbsp; 
				<span>
					<em>共8页&nbsp;&nbsp;到第 <input type="text" class="page_num" value="3"/> 页</em>
					<a  class="skipsearch" href="javascript:;">确定</a>
				</span> -->
            <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="search.page"
      :page-sizes="[2, 3, 5, 8]"
      :page-size="search.per_page"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount">
    </el-pagination>



			</div>
			<!-- 分页信息 end -->

		</div>
		<!-- 列表内容 end -->
	</div>
	<!-- 列表主体 end-->

	<div style="clear:both;"></div>
	<!-- 底部导航 start -->
	<div class="bottomnav w1210 bc mt20">
		<div class="bnav1">
			<h3><b></b> <em>购物指南</em></h3>
			<ul>
				<li><a href="">购物流程</a></li>
				<li><a href="">会员介绍</a></li>
				<li><a href="">团购/机票/充值/点卡</a></li>
				<li><a href="">常见问题</a></li>
				<li><a href="">大家电</a></li>
				<li><a href="">联系客服</a></li>
			</ul>
		</div>
		
		<div class="bnav2">
			<h3><b></b> <em>配送方式</em></h3>
			<ul>
				<li><a href="">上门自提</a></li>
				<li><a href="">快速运输</a></li>
				<li><a href="">特快专递（EMS）</a></li>
				<li><a href="">如何送礼</a></li>
				<li><a href="">海外购物</a></li>
			</ul>
		</div>

		
		<div class="bnav3">
			<h3><b></b> <em>支付方式</em></h3>
			<ul>
				<li><a href="">货到付款</a></li>
				<li><a href="">在线支付</a></li>
				<li><a href="">分期付款</a></li>
				<li><a href="">邮局汇款</a></li>
				<li><a href="">公司转账</a></li>
			</ul>
		</div>

		<div class="bnav4">
			<h3><b></b> <em>售后服务</em></h3>
			<ul>
				<li><a href="">退换货政策</a></li>
				<li><a href="">退换货流程</a></li>
				<li><a href="">价格保护</a></li>
				<li><a href="">退款说明</a></li>
				<li><a href="">返修/退换货</a></li>
				<li><a href="">退款申请</a></li>
			</ul>
		</div>

		<div class="bnav5">
			<h3><b></b> <em>特色服务</em></h3>
			<ul>
				<li><a href="">夺宝岛</a></li>
				<li><a href="">DIY装机</a></li>
				<li><a href="">延保服务</a></li>
				<li><a href="">家电下乡</a></li>
				<li><a href="">京东礼品卡</a></li>
				<li><a href="">能效补贴</a></li>
			</ul>
		</div>
	</div>
	<!-- 底部导航 end -->
  </div>
</template>

<script>
export default {
	 layout:'front_common',
    head: {
   
    link: [
      { rel: "stylesheet", href: "/style/list.css" },
      { rel: "stylesheet", href: "/style/common.css" },
      
    ],
     script:[
    {type:'text/javascript',src:'/js/jquery-1.8.3.min.js'},
     {type:'text/javascript',src:'/js/header.js'},
      {type:'text/javascript',src:'/js/list.js'},
  ],
  },
  data() {
      return {
          goods:[],//所有的商品
          search:{//搜索对象
          catid:this.$route.query.catid,//三级分类,动态获取地址栏？参数
          brand_id:'',//品牌
          spec_list:'',//规格和规格选项
          min_price:'',
          max_price:'',
          limit:2,//每页条数
          per_page:2,//每页条数
          page:1,//当前页
          sort_by:'xl',//排序字段销量
          sort_way:'desc',//asc desc
          },
		  totalCount:0,
		  totalPage:0,
		  brands:[],//品牌数据
          specs:[],//规格数据

	  }
  },
  async mounted() {
	  //1获取商品列表数据
     this.updateGoods()
	 //2获取品牌数据
	 let {data}=await this.$axios.$get("/web-service/brands/"+this.search.catid)
	 this.brands=data.data
     //3获取规格数据
	let {data:spec_data}=await this.$axios.$get("/web-service/specifications/"+this.search.catid)
	this.specs=spec_data.data


  },
  methods: {
	  //每页条数改变的时候，触发，重新查询数据
	   handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
		this.search.per_page=val
		//重新查数据
		this.updateGoods()
      },
	  //页码发生改变的时候
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
		this.search.page=val
		this.updateGoods()
      },
	 async updateGoods() {
		   let {data}=await this.$axios.$get("/search-service/goods",{params:this.search})
      console.log(data.data);
	  //1商品数据
      this.goods=data.data
	  //2 总条数
	  this.totalCount=data.count
	  //3.总页数 考虑到不能整除的情况，需要向上取整
	  this.totalPage=Math.ceil(this.totalCount/this.search.per_page)
      //4.三级分类
	  this.search.catid=data.catid
		  
	  },
	  setSort(sortBy){
		  this.search.sort_by=sortBy
		  //判断是否是价格，如果是是价格，考虑升序或者降序排序
		  if(sortBy=='jg'){
			  //修改方式
			  this.search.sort_way=this.search.sort_way=='desc'?'asc':'desc'		  
		  }else{
			  //如果不是价格则统一降序
			  this.search.sort_way='desc'
		  }
		  this.updateGoods()

	  },
	  setBrand(brandId){
		  this.search.brand_id=brandId
		  //重新搜索商品
		  this.updateGoods()
	  },
	  setSpec(k,value){
		  //将specs中的第k个元素的selected的值设置为value
		  this.specs[k].selected=value
		  //组装search的参数
		//   this.search.spec_list=[]
		//   组装
		//   遍历specs规格数组，当元素的selected不为空是，就将数据放入search对象中
		//   for(let i=0;i<this.specs.length;i++){
		// 	  判断selected是否有值
		// 	  if(this.specs[i].selected!=''){
		// 		  this.search.spec_list.push({
		// 			  spec_id:this.specs[i].id,
		// 			  value:this.specs[i].selected
		// 		  })
		// 	  }
		//   }
		//拼接成这种格式，后端好解析spec_list:"spec_name=option_name,spec_name=option_name"
		let choose=this.specs[k].spec_name+"="+value
		this.search.spec_list+=choose+","
		  //发起请求
		  this.updateGoods()
	  }
  },

}
</script>

<style>

</style>
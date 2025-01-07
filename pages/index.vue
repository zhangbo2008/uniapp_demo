<template>   
<!-- 这个页面是这个程序的第一个页面 -->
	
	

	<view class="start-index">
		<!-- <TnIcon name="logo-tuniao" type="primary" /> -->
		<!-- 如果你设置一个元素的display属性为空（display: ;），那么实际上它没有设置任何值，元素将使用默认的显示类型。 CSS的display属性是用来设置元素的显示类型的。如果你设置一个元素的display属性为none，那么这个元素会变得不可见，并且它也不会占据任何空间。 -->
		<!-- 一共有4个子页面. --> 
		<view v-if="tabberPageLoadFlag[0]" :style="{display: currentIndex === 0 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<home ref="home"></home>
				<!-- home就是下面component 引入的控件 -->
				<!-- ref :  是一个名字,可以快速找到这个.
				在这个例子中，我们创建了一个输入框和一个按钮。
当按钮被点击时，输入框会被聚焦。这里，(ref="mylnput")是
用来标识输入框的引用，而通过
this.$refs.myInput
可以方便地访问到这个输入框，达到我们想要的效果。 -->
			</scroll-view>
		</view>
		
		
		
		<view v-if="tabberPageLoadFlag[1]" :style="{display: currentIndex === 1 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<circle-page ref="circleRef"></circle-page>
			</scroll-view>
		</view>

		<view v-if="tabberPageLoadFlag[3]" :style="{display: currentIndex === 3 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<preferred ref="preferredRef"></preferred>
			</scroll-view>
		</view>
		<view v-if="tabberPageLoadFlag[4]" :style="{display: currentIndex === 4 ? '' : 'none'}">
			<scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
				<mine ref="mine"></mine>
			</scroll-view>
		</view>

		<tn-tabbar v-model="currentIndex" :list="tabbarList" activeColor="#838383" inactiveColor="#AAAAAA"
			activeIconColor="#FBBD12" :animation="true" :safeAreaInsetBottom="true" @change="switchTabbar">			
	</tn-tabbar>


	</view>
</template>

<script>
	import Home from './home/home.vue'
	import CirclePage from './circle/circle.vue'
	import Activity from './activity/activity.vue'
	import Preferred from './preferred/preferred.vue'
	import Mine from './mine/mine.vue'

	export default {
		components: { //首页能跳转到的界面都需要components里面写好.
			Home,
			CirclePage,
			Activity,
			Preferred,
			Mine
		},
		data() {
			return {
				loginBoxFlag: false, // 登录框显示隐藏状态
				// 底部tabbar菜单数据
				/* 压屏窗*/
				show2: false,
				maskCloseable: true,
				tabbarList: [{
						title: '首页',
						activeIcon: '/static/tabbar/home_tnnew.png',
						inactiveIcon: '/static/tabbar/home_tn.png'
					},
					{
						title: '广场',
						activeIcon: '/static/tabbar/circle_tnnew.png',
						inactiveIcon: '/static/tabbar/circle_tn.png'
					},
					{
						title: '发布',
						activeIcon: 'menu-circle',
						inactiveIcon: 'rocket',
						activeIconColor: '#FFFFFF',
						inactiveIconColor: '#FFFFFF',
						iconSize: 50,
						out: true
					},
					{
						title: '活动',
						activeIcon: '/static/tabbar/preferred_tnnew.png',
						inactiveIcon: '/static/tabbar/preferred_tn.png',
					},
					{
						title: '我的',
						activeIcon: '/static/tabbar/mine_tnnew.png',
						inactiveIcon: '/static/tabbar/mine_tn.png'
					}
				],
				// tabbar当前被选中的序号
				currentIndex: 0,
				// 自定义底栏对应页面的加载情况
				tabberPageLoadFlag: []
			}
		},
		onLoad(options) {
			let that = this;
			console.log('传过来的参数',options)
			console.log('传过来的参数',options.index)
			const index = Number(options.index || 0) //如果传过来的参数没有index那么就是0, 如果undefined 一样走0.
			// 根据底部tabbar菜单列表设置对应页面的加载情况
			console.log('传过来的参数',this.tabbarList)
			this.tabberPageLoadFlag = this.tabbarList.map((item, tabbar_index) => {
				console.log(tabbar_index,item)
				return index === tabbar_index
			})
			console.log(this.tabberPageLoadFlag)
			uni.$on('loginnew', data => {// 监听loginnew事件, 如果事件发生那么就出发跳转.
				that.navigateToFn({
					url: '/minePages/set'
				});	
				
			});
		
						
			this.switchTabbar(index)
			
			
		
		// 	uni.showModal({
		// 		title: '多客提示',
		// 		content: '请在前端tools/下siteinfo.js，配置你的后端域名。按教程搭建好你的后台即可！',
		// 		confirmText: '知道了',
		// 		success: function(res) {
		// 			if (res.confirm) {
						//当你点击了确定，confirm为true，cancel为false,当你点击了取消，confirm为false，cancel为true
		// 			} else if (res.cancel) {
		// 				console.log('用户点击取消');
		// 			}
		// 		}
		// 	});
			
			
			
			
			
			
			
			
		},
		methods: {

			guanbi() {
				this.loginBoxFlag = false;
			},
			// 切换导航
			switchTabbar(index) {// index表示传过来的页面索引表示想要去的页面号, this.currentIndex  表示当前页面的索引
				console.log('按了',index)
				console.log('按了',this.currentIndex )
				if (index !== 1) {
					// this.$refs?.circleRef?.stopAllVideo()
				}

				if (index == 2) {

					if (this.currentIndex == 0) {
						uni.$emit('indexhome', true)
					}
					if (this.currentIndex == 1) {
						uni.$emit('indexcircle', true)
					}
					if (this.currentIndex == 3) {
						uni.$emit('indexpreferred', true)
					}
					if (this.currentIndex == 4) {
						uni.$emit('indexmine', true)
					}


					return
				}

				if (index == 4) {
					uni.$emit('loginok', true)					
					}

				this._switchTabbarPage(index) 



			},


			// 导航页面滚动到底部
			tabbarPageScrollLower(e) {
				if (this.currentIndex === 4) {
					uni.$emit('mine', true)
				}
				if (this.currentIndex === 0) {
					uni.$emit('home', true)
				}

			},

			// 切换导航页面
			_switchTabbarPage(index) {
				const selectPageFlag = this.tabberPageLoadFlag[index]//获取现在tab的状态
				if (selectPageFlag === undefined) {
					return
				}
				if (selectPageFlag === false) {
					this.tabberPageLoadFlag[index] = true
				}
				this.currentIndex = index
			},
			// 关闭压屏窗
			closeLandscape() {
				this.show2 = false
			}




		}
	}
</script>


<style lang="scss" scoped>

</style>

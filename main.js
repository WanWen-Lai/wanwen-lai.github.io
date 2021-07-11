function initial() {
	Vue.component('main-menu', {
		template: `<div id="menu">
					<ul>
						<li :class="{ active: (type === '1' || IsActive) }" @mouseover="IsActive = (type === '1' ? false : true)"  @mouseout="IsActive = false"><a href="/">個人資料</a></li>
						<li :class="{ active: (type === '2' || IsActive) }" @mouseover="IsActive = (type === '2' ? false : true)"  @mouseout="IsActive = false"><a href="works.html">作品</a></li>
					</ul>
				</div>`,
		props: ['type'],
		data: function () {
			return {
				IsActive: false
			}
		}
	})
	new Vue({
		el: '#main',
		data: {
			Name: '賴婉雯',
			NameEn: 'Wan Wen,Lai',
			location: '新北 • 臺灣',
			job: '網頁工程師'
		}
	});

	new Vue({
		el: '.goTop',
		data: {
			scrollNum: 0, //滾動距離
			isTop: false, //是否顯示回到頂部按鈕
		},
		mounted: function () {
			window.addEventListener("scroll", () => {
				let top =
					document.documentElement.scrollTop ||
					document.body.scrollTop ||
					window.pageYOffset;
				this.scrollNum = top;
				if (top >= 100) {
					this.isTop = true;
				} else {
					this.isTop = false;
				}
			});
		},
		methods: {
			goTop: function () {
				document.documentElement.scrollTop = 0;
			}
		}
	});

}

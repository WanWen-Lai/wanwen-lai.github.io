function initial() {
	Vue.component('main-menu', {
		template: `<div>
					<ul>
						<li :class="{ active: type === '1' }">個人資料</li>
						<li :class="{ active: type === '2' }">作品</li>
					</ul>
				</div>`,
		props: ['type'],
	})
	new Vue({
		el: '#main',
		data: {
			message: '主要語言為C#、JQ',
			Name: '123',
			NameEn: 'Wan Wen,Lai'
		}
	});
}

var app = new Vue({

	el: '#search',

	data: {
		searchTerm: null
	},

	methods: {
		search: function () {
			let v = this;

			if (v.searchTerm) {
				window.location = '/TVB/Results?search=' + v.searchTerm;
			}
		}
	}

})
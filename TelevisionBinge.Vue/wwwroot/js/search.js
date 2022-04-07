var app = new Vue({

	el: '#search',

	data: {
		searchTerm: null
	},

	methods: {
		search: function () {
			let v = this;

			if (v.searchTerm) {
				window.location = '/tvb/Results?search=' + v.searchTerm;
			}
		}
	}

})
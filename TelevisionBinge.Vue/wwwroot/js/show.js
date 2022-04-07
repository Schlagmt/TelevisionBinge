var app = new Vue({

	el: '#show',

	data: {
		id: null,
        webAPIUrl: null,
	},

	mounted: function () {
		let v = this;
		v.id = id;
		v.webAPIUrl = webAPIUrl;
    },

	methods: {

	}

})
var app = new Vue({

	el: '#results',

	data: {
		searchTerm: null,
        webAPIUrl: null,
        showResults: [],
        loading: true,
	},

	mounted: function () {
		let v = this;
		v.searchTerm = searchTerm;
		v.webAPIUrl = webAPIUrl;

		v.search();
    },

	methods: {

		search: async function () {
            let v = this;

            v.loading = true;

            $.ajax({
                url: v.webAPIUrl + "/ShowData/SearchTelevisionShow/" + v.searchTerm,
                contentType: "application/json; charset=utf-8",
                type: "GET",
                success: function (data) {
                    v.showResults = data.results;
                },
                error: function (error) {
                    console.log(error);
                }
            });

            setTimeout(() => { v.loading = false; }, 2000);
            
        }

	}

})
var app = new Vue({

	el: '#results',

	data: {
		searchTerm: null,
        showResults: [],
        loading: true,
	},

	mounted: function () {
		let v = this;
		v.searchTerm = searchTerm;

		v.search();
    },

	methods: {

		search: async function () {
            let v = this;

            v.loading = true;

            $.ajax({
                url: document.location.origin + "/ShowData/SearchTelevisionShow?search=" + v.searchTerm,
                contentType: "application/json; charset=utf-8",
                type: "GET",
                success: function (data) {
                    v.showResults = data.results;
                },
                error: function (error) {
                    console.log(error);
                }
            }).done(() => {
                v.loading = false;
            });
        }

	}

})
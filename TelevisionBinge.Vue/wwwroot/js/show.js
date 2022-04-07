var app = new Vue({

	el: '#show',

	data: {
		id: null,
        webAPIUrl: null,
        loading: null,
        titleData: null,
        seasonData: null,
	},

	mounted: function () {
		let v = this;
		v.id = id;
		v.webAPIUrl = webAPIUrl;

		v.getShowData();
    },

	methods: {

        getShowData: async function () {
            let v = this;

            v.loading = true;

            $.ajax({
                url: v.webAPIUrl + "/ShowData/GetTelevisionShowData/" + v.id,
                contentType: "application/json; charset=utf-8",
                type: "GET",
                success: function (data) {
                    v.titleData = data.title;
                    v.seasonData = data.seasonEpisodeDataList;
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
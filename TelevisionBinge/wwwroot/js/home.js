var app = new Vue({

	el: '#home',

	data: {
        loading: null,
        top250: [],
        mostPopular: []
	},

	mounted: async function () {
        let v = this;

        v.getTop250();
        v.getMostPopular();
    },

	methods: {

        getTop250: async function () {
            let v = this;

            v.loading = true;

            $.ajax({
                url: document.location.origin + "/ShowData/GetTop250ShowsData",
                contentType: "application/json; charset=utf-8",
                type: "GET",
                success: function (data) {
                    v.top250 = data.items;
                },
                error: function (error) {
                    console.log(error);
                }
            }).done(() => {
                v.loading = false;
            });            
        },

        getMostPopular: async function () {
            let v = this;

            $.ajax({
                url: document.location.origin + "/ShowData/GetMostPopularShowsData",
                contentType: "application/json; charset=utf-8",
                type: "GET",
                success: function (data) {
                    v.mostPopular = data.items;
                },
                error: function (error) {
                    console.log(error);
                }
            });
        },

        rankingColors: function (value) {
            let v = this;

            if (value.includes("+")) {
                return "up";
            }
            else if (value.includes("-")) {
                return "down";
            }
            else {
                return "neither";
            }
        }

	}

})
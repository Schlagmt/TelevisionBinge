var app = new Vue({

	el: '#home',

	data: {
        loading: null,
        top250: [],
        mostPopular: [],
        searchTerm: null
	},

	mounted: async function () {
        let v = this;

        v.getTop250();
        v.getMostPopular();
    },

    methods: {

        search: function () {
            let v = this;

            if (v.searchTerm) {
                window.location = '/TVB/Results?search=' + v.searchTerm;
            }
        },

        getTop250: async function () {
            let v = this;

            v.loading = true;

            $.ajax({
                url: document.location.origin + "/ShowData/GetTop250ShowsData",
                contentType: "application/json; charset=utf-8",
                type: "GET",
                success: function (data) {
                    if (data.errorMessage) {
                        alert("This is a dev app (API is limited): " + data.errorMessage);
                        return;
                    }

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
                    if (data.errorMessage) {
                        alert("This is a dev app (API is limited): " + data.errorMessage);
                        return;
                    }

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
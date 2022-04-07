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

    computed: {

        episodeRatings: function () {
            let v = this;

            var ratings = [];
            _.forEach(v.seasonData, season => {
                _.forEach(season.episodes, episode => {
                    ratings.push({
                        "episode": episode.seasonNumber + "-" + episode.episodeNumber,
                        "rating": parseFloat(episode.ratingValue)
                    });
                });
            });

            return ratings;
        },

        d3: function () {
            let v = this;

            return LineChart(v.episodeRatings, {
                x: d => d.episode,
                y: d => d.rating,
                yLabel: "IMDB Rating",
                width,
                height: 500,
                color: "steelblue"
            })
        }

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
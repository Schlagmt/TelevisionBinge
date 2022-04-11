using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using TelevisionBinge.Models;

namespace TelevisionBinge.Controllers
{
    public class ShowDataController : Controller
    {
        private readonly ILogger<ShowDataController> _logger;
        private readonly HttpClient _httpClient = new HttpClient();
        private readonly string _baseURL = "https://imdb-api.com/en/API/";
        private readonly string _apiKey = "k_2vr16z7m";//"k_5nk9nf3m";

        public ShowDataController(ILogger<ShowDataController> logger)
        {
            _logger = logger;
        }

        public async Task<SearchData> SearchTelevisionShow(string search)
        {
            var response = await ExecuteWebAPICall(new Uri(_baseURL + "SearchSeries/" + _apiKey + "/" + search));
            var result = JsonConvert.DeserializeObject<SearchData>(await response.Content.ReadAsStringAsync());
            return result;
        }

        public async Task<TelevisionShowData> GetTelevisionShowData(string id)
        {
            var response = await ExecuteWebAPICall(new Uri(_baseURL + "Title/" + _apiKey + "/" + id + "/Posters,Ratings,"));
            var result = JsonConvert.DeserializeObject<TitleData>(await response.Content.ReadAsStringAsync());

            var episodeData = new List<SeasonEpisodeData>();
            var tasks = result.TvSeriesInfo.Seasons.Select(async season =>
            {
                var responseEpisodeData = await ExecuteWebAPICall(new Uri(_baseURL + "SeasonEpisodes/" + _apiKey + "/" + id + "/" + season));
                var resultEpisodeData = JsonConvert.DeserializeObject<SeasonEpisodeData>(await responseEpisodeData.Content.ReadAsStringAsync());

                resultEpisodeData.Season = Int32.Parse(season);
                episodeData.Add(resultEpisodeData);
            });
            await Task.WhenAll(tasks);

            return new TelevisionShowData
            {
                Title = result,
                SeasonEpisodeDataList = episodeData.OrderBy(e => e.Season).ToList()
            };
        }

        public async Task<Top250Data> GetTop250ShowsData()
        {
            var response = await ExecuteWebAPICall(new Uri(_baseURL + "Top250TVs/" + _apiKey));
            var result = JsonConvert.DeserializeObject<Top250Data>(await response.Content.ReadAsStringAsync());
            return result;
        }

        public async Task<MostPopularData> GetMostPopularShowsData()
        {
            var response = await ExecuteWebAPICall(new Uri(_baseURL + "MostPopularTVs/" + _apiKey));
            var result = JsonConvert.DeserializeObject<MostPopularData>(await response.Content.ReadAsStringAsync());
            return result;
        }

        private async Task<HttpResponseMessage> ExecuteWebAPICall(Uri url)
        {
            HttpRequestMessage requestMessage = new HttpRequestMessage();
            requestMessage.Method = HttpMethod.Get;
            requestMessage.RequestUri = url;

            var response = await _httpClient.SendAsync(requestMessage);
            return response;
        }
    }
}

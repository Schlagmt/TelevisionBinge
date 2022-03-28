using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using TelevisionBinge.Models;

namespace TelevisionBinge.Data
{
    public class DataRepository
    {
        private readonly HttpClient _httpClient;
        private readonly string _baseURL = "https://imdb-api.com/en/API/";
        private readonly string _apiKey = "k_5nk9nf3m";
        public async Task<SearchData> SearchTelevisionShow(string search)
        {
            HttpRequestMessage requestMessage = new HttpRequestMessage();
            requestMessage.Method = HttpMethod.Post;
            requestMessage.RequestUri = new Uri(_baseURL + "SearchSeries/" + _apiKey + "/" + search);

            var response = await _httpClient.SendAsync(requestMessage);
            var result = JsonConvert.DeserializeObject<SearchData>(await response.Content.ReadAsStringAsync());
            return result;
        }
    }
}

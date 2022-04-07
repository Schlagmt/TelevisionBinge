using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using TelevisionBinge.WebAPI.Models;

namespace TelevisionBinge.WebAPI.Controllers
{
    [EnableCors]
    [ApiController]
    [Route("[controller]")]
    public class ShowDataController : ControllerBase
    {
        private readonly ILogger<ShowDataController> _logger;
        private readonly HttpClient _httpClient = new HttpClient();
        private readonly string _baseURL = "https://imdb-api.com/en/API/";
        private readonly string _apiKey = "k_5nk9nf3m";

        public ShowDataController(ILogger<ShowDataController> logger)
        {
            _logger = logger;
        }

        [HttpGet("SearchTelevisionShow/{search}")]
        public async Task<SearchData> SearchTelevisionShow(string search)
        {
            var response = await ExecuteWebAPICall(new Uri(_baseURL + "SearchSeries/" + _apiKey + "/" + search));
            var result = JsonConvert.DeserializeObject<SearchData>(await response.Content.ReadAsStringAsync());
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

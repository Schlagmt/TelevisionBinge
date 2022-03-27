using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TelevisionBinge.Data;
using TelevisionBinge.Models;

namespace TelevisionBinge.Controllers
{
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly SearchRepository _searchRepository = new SearchRepository();
        public SearchController()
        {
        }

        [HttpGet]
        [Route("/search/SearchTelevisionShow")]
        [ProducesResponseType(typeof(SearchData), 200)]
        [Produces("application/json")]
        public async Task<IActionResult> SearchTelevisionShow(string search)
        {
            var results = await _searchRepository.SearchTelevisionShow(search);
            return Ok(results);
        }
    }
}

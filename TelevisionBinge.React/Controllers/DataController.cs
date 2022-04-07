using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TelevisionBinge.Data;
using TelevisionBinge.Models;

namespace TelevisionBinge.Controllers
{
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly DataRepository _dataRepository = new DataRepository();
        public DataController()
        {
        }

        [HttpPost]
        [Route("/data/SearchTelevisionShow")]
        [ProducesResponseType(typeof(SearchData), 200)]
        [Produces("application/json")]
        public async Task<IActionResult> SearchTelevisionShow([FromBody] string search)
        {
            var results = await _dataRepository.SearchTelevisionShow(search);
            return Ok(results);
        }
    }
}

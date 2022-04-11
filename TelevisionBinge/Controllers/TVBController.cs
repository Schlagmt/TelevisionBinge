using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace TelevisionBinge.Controllers
{
    public class TVBController : Controller
    {
        private readonly ILogger<TVBController> _logger;

        public TVBController(ILogger<TVBController> logger)
        {
            _logger = logger;
        }

        public IActionResult Home()
        {
            return View();
        }

        public IActionResult Results(string search)
        {
            ViewBag.Search = search;
            return View();
        }

        public IActionResult Show(string id)
        {
            ViewBag.Id = id;
            return View();
        }
    }
}

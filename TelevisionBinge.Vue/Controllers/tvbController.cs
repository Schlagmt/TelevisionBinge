using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace TelevisionBinge.Vue.Controllers
{
    public class tvbController : Controller
    {
        private readonly ILogger<tvbController> _logger;
        private readonly string _webAPIUrl = "https://localhost:44315";

        public tvbController(ILogger<tvbController> logger)
        {
            _logger = logger;
        }

        public IActionResult Home()
        {
            ViewBag.WebAPIUrl = _webAPIUrl;
            return View();
        }

        public IActionResult Results(string search)
        {
            ViewBag.WebAPIUrl = _webAPIUrl;
            ViewBag.Search = search;
            return View();
        }

        public IActionResult Show(string id)
        {
            ViewBag.WebAPIUrl = _webAPIUrl;
            ViewBag.Id = id;
            return View();
        }
    }
}

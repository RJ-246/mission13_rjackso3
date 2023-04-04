using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MovieAPI.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MovieAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        // GET: /<controller>/
        public IEnumerable<Movies> Get()
        {
            //Returns only records that have an edited title and orders them by title
            return context.Movies.Where(m => (m.Edited != "")).OrderBy(m => m.Title).ToArray();
        }
    }
}


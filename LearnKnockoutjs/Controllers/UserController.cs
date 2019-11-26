namespace LearnKnockoutjs.Controllers
{
    using System.Web.Mvc;
    using System.Linq;

    public class UserController : Controller
    {
        // GET: User
        public ActionResult UserForm()
        {
            return View();
        }
    }
}
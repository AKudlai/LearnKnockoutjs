namespace LearnKnockoutjs.Controllers
{
    #region Usings
    using System.Web.Mvc;
    #endregion

    public class UserController : Controller
    {
        // GET: User
        public ActionResult UserForm()
        {
            return View();
        }
    }
}
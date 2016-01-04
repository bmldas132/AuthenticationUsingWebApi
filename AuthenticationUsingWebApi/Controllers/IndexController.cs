using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using AuthenticationUsingWebApi.Models.Database;

namespace AuthenticationUsingWebApi.Controllers
{
    public class IndexController : ApiController
    {
        [Authorize]
        [HttpGet]
        // api/user/GetDetail
        [Route("api/user/GetDetail")]
        public AspNetUser GetProfileDetail()
        {
            string id = HttpContext.Current.User.Identity.GetUserId();
            AspNetUsersController user = new AspNetUsersController();
            return user.GetAspNetUser(id);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;

namespace AuthenticationUsingWebApi.Controllers
{
    public class NewController : ApiController
    {
        
        [Authorize]
        public string GetDetail()
        {
            //return HttpContext.Current.User.Identity.GetUserId();
            return HttpContext.Current.User.Identity.GetUserName();

        }

        public void Logout()
        {

        }

        [Route("api/Test/{olderthan}")]
        [HttpGet]
        public DateTime Test(string olderthan)
        {
            DateTime temp = Convert.ToDateTime(olderthan);
            return temp;

        }
    }
}

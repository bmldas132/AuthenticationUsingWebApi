using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using AuthenticationUsingWebApi.Models.Database;
using AuthenticationUsingWebApi.Models.CustomClass;

namespace AuthenticationUsingWebApi.Controllers
{
    [Authorize]
    public class IndexController : ApiController
    {
        [HttpGet]
        // api/user/GetDetail
        [Route("api/user/GetDetail")]
        public Users GetProfileDetail()
        {
            string id = HttpContext.Current.User.Identity.GetUserId();
            AspNetUsersController user = new AspNetUsersController();
            var aspUser = user.GetAspNetUser(id);
            List<string> userDetail = new List<string>();
            Users userProfileInfo = new Users()
            {
                Id = aspUser.Id,
                Email = aspUser.Email,
                EmailConfirmed = aspUser.EmailConfirmed,
                PhoneNumber = aspUser.PhoneNumber,
                PhoneNumberConfirmed = aspUser.PhoneNumberConfirmed,
                UserName = aspUser.UserName
            };
            return userProfileInfo;
        }
    }
}

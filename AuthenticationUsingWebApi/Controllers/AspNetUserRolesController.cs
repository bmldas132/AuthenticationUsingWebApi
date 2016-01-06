using AuthenticationUsingWebApi.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace AuthenticationUsingWebApi.Controllers
{
    public class AspNetUserRolesController : ApiController
    {
        [Route("api/UserRole/Create")]
        [HttpPost]
        public async Task<IHttpActionResult> Post([FromBody]UserRoles userRole)
        {
            using (ApplicationDbContext db = new ApplicationDbContext())
            {

                var userStore = new UserStore<ApplicationUser>(db);
                var userManager = new UserManager<ApplicationUser>(userStore);
                
                try
                {
                    await userManager.AddToRoleAsync(userRole.UserId, userRole.RoleId);
                }
                catch (Exception ex)
                {
                    string n = ex.Message;
                }

                return Ok();
            }

        }
    }
}

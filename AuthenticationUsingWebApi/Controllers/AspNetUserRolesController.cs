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
        private ApplicationDbContext db = new ApplicationDbContext();

        [Route("api/UserRole/Create")]
        [HttpPost]
        public async Task<IHttpActionResult> Post([FromBody]UserRoles userRole)
        {
            using (db)
            {

                var userStore = new UserStore<ApplicationUser>(db);
                var userManager = new UserManager<ApplicationUser>(userStore);
                
                foreach (string role in userRole.Roles)
                {
                    try
                    {
                        await userManager.AddToRoleAsync(userRole.UserId, role);
                    }
                    catch (Exception ex)
                    {
                        string n = ex.Message;
                        return InternalServerError(new Exception("Some error occured. Please try again."));
                    }
                    
                }
                return Ok();
            }

        }

        [HttpDelete]
        [Route("api/UserRole/Delete")]
        public async Task<IHttpActionResult> Delete(UserRoles userRole)
        {
            using (db)
            {

                var userStore = new UserStore<ApplicationUser>(db);
                var userManager = new UserManager<ApplicationUser>(userStore);

                foreach (string role in userRole.Roles)
                {
                    try
                    {
                        await userManager.RemoveFromRoleAsync(userRole.UserId, role);
                    }
                    catch (Exception ex)
                    {
                        string n = ex.Message;
                        return InternalServerError();
                    }
                }
                return Ok();
            }
        }
    }
}

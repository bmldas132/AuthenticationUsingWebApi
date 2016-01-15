using AuthenticationUsingWebApi.Models;
using AuthenticationUsingWebApi.Models.CustomClass;
using AuthenticationUsingWebApi.Models.Database;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Script;
using System.Web.Script.Serialization;

namespace AuthenticationUsingWebApi.Controllers
{
    //[Authorize]
    [Serializable]
    public class AspNetRolesController : ApiController
    {
        private AspIdentityAngularEntities db = new AspIdentityAngularEntities();


        [Route("api/Role/Create")]
        [HttpPost]
        public async Task<IHttpActionResult> Post([FromBody]string roleName)
        {
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                var roleStore = new RoleStore<IdentityRole>(db);
                var roleManager = new RoleManager<IdentityRole>(roleStore);

                try
                {
                    await roleManager.CreateAsync(new IdentityRole { Name = roleName });
                    return Ok();
                }
                catch (Exception ex)
                {
                    var message = ex.Message;
                    return InternalServerError();
                }

            }

        }

        [Route("api/Role/Get")]
        [HttpGet]
        
        public List<IdentityRole> Get()
        {
            using (db)
            {
                var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>());
                return roleManager.Roles.ToList();

                //var serializer = new JavaScriptSerializer();
                //var serializedResult = serializer.Serialize(db.AspNetRoles.ToList());
                //return serializedResult;
            }
        }

        [Route("api/Role/Get/{userId}")]
        [HttpGet]
        public async Task<IHttpActionResult> Get(string userId)
        {
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                var userStore = new UserStore<ApplicationUser>(db);
                var userManager = new UserManager<ApplicationUser>(userStore);

                try
                {
                    var retval = await userManager.GetRolesAsync(userId);
                    return Ok(retval);
                }
                catch
                {
                    return NotFound();
                }
            }
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}

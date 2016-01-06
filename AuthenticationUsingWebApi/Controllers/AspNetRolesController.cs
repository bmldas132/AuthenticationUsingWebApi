using AuthenticationUsingWebApi.Models;
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
    public class AspNetRolesController : ApiController
    {
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
                    await roleManager.CreateAsync(new IdentityRole { Name = "Administrator" });
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
        public string Get()
        {
            using (Identity2TestEntities db = new Identity2TestEntities())
            {
                
                var serializer = new JavaScriptSerializer();
                var serializedResult = serializer.Serialize(db.AspNetRoles.ToList());
                return serializedResult;
            }
        }
    }
}

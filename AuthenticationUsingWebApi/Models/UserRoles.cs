using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AuthenticationUsingWebApi.Models
{
    public class UserRoles
    {
        public string UserId { get; set; }
        public List<string> Roles { get; set; }
    }
}
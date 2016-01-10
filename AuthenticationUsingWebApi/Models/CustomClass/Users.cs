using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AuthenticationUsingWebApi.Models.CustomClass
{
    public class Users
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public string UserName { get; set; }
    }
}
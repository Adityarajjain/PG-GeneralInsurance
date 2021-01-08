using registration.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace registration.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();

        public UserDetailsTable GetUser(string Mobile_Number)
        {
            UserDetailsTable user = entities.UserDetailsTables.Find(Mobile_Number);
            return user;
        }
    }
}

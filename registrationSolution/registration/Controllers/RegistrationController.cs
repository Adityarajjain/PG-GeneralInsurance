using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using registration.Models;

namespace registration.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class RegistrationController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();

        public IEnumerable<UserDetailsTable> Get()
        {
            return entities.UserDetailsTables.ToList();
        }
        [HttpPost]
        public void Post(UserDetailsTable user)
        {
            entities.UserDetailsTables.Add(user);
            entities.SaveChanges();
        }

    }
}

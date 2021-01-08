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
    public class AdminController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        [HttpPost]
        public HttpResponseMessage UserLogin(AdminDetailsTable user)
        {
            string status = "";
            int userCount = entities.AdminDetailsTables.Where(u => u.Username == user.Username && u.Password == user.Password).Count();
            if (userCount == 0)
            {
                status = "Invalid Username or password";
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, status);
            }
            else
            {
                status = "Welcome";
                return Request.CreateErrorResponse(HttpStatusCode.Accepted, status);
            }
        }
    }
}

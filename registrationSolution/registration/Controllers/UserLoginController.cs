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
    public class UserLoginController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        //[HttpPost]
        //public HttpResponseMessage UserLogin(UserDetailsTable user)
        //{
        //    string status = "";
        //    int userCount = entities.UserDetailsTables.Where(u => u.Mobile_Number == user.Mobile_Number && u.Password == user.Password).Count();
        //    if (userCount == 0)
        //    {
        //        status = "Invalid Mobile number or password";
        //        return Request.CreateErrorResponse(HttpStatusCode.NotFound, status);
        //    }
        //    else
        //    {
        //        status = "Welcome";
        //        return Request.CreateErrorResponse(HttpStatusCode.Accepted, status);
        //    }
        //}
        public HttpResponseMessage Get(string mobile, string passw)
        {
            Proc_ValidateExistingAuthGuard3_Result result = null;
            result = entities.Proc_ValidateExistingAuthGuard3(mobile, passw).FirstOrDefault();
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid Username or password");
            else
                //return Request.CreateResponse<Proc_ValidateExistingAuthGuard3_Result>(result);
                return Request.CreateErrorResponse(HttpStatusCode.Accepted, "Welcome");
        }
    }
}

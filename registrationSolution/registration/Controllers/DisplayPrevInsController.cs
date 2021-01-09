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
    public class DisplayPrevInsController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        public HttpResponseMessage Get(long policyid)
        {
            Proj_Proc_UserPolicyDetailsDisplay2_Result result = null;
            result = entities.Proj_Proc_UserPolicyDetailsDisplay2(policyid).FirstOrDefault();
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid Policy Number");
            else
                return Request.CreateResponse<Proj_Proc_UserPolicyDetailsDisplay2_Result>(result);
        }
    }
}

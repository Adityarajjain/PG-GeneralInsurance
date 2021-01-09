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
    public class TravelPolicyController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        public proc_GetTravelPolicy_Result GetMotorPolicy(long Policy_Id)
        {
            proc_GetTravelPolicy_Result policy = new proc_GetTravelPolicy_Result();
            policy = entities.proc_GetTravelPolicy(Policy_Id).FirstOrDefault();
            return policy;
        }
    }
}

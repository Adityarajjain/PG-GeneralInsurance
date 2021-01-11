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
        public proc_Get_Policy_Travel_Approved_Result GetTravelPolicy(long Policy_Id)
        {
            proc_Get_Policy_Travel_Approved_Result policy = new proc_Get_Policy_Travel_Approved_Result();
            policy = entities.proc_Get_Policy_Travel_Approved(Policy_Id).FirstOrDefault();
            return policy;
        }
    }
}

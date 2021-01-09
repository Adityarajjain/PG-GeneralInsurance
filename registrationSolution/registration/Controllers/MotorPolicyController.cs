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
    public class MotorPolicyController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        public proc_GetMotorPolicy_Result GetMotorPolicy(long Policy_Id)
        {
            proc_GetMotorPolicy_Result policy = new proc_GetMotorPolicy_Result();
            policy = entities.proc_GetMotorPolicy(Policy_Id).FirstOrDefault();
            return policy;
        }
    }
}

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
    public class MotorInsuranceDashboardController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        public List<proc_GetAllPoliciesOfUser_Result> GetAllPoliciesOfUser(string Mobile_Number)
        {
            List<proc_GetAllPoliciesOfUser_Result> listPolicies = new List<proc_GetAllPoliciesOfUser_Result>();
            listPolicies = entities.proc_GetAllPoliciesOfUser(Mobile_Number).ToList();
            return listPolicies;
        }
    }
}

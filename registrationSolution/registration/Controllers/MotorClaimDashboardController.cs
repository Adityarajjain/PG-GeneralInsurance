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
    public class MotorClaimDashboardController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        [HttpGet]
        public List<proc_GetAllClaimsOfUser_Result> GetAllClaimsOfUser(string Mobile_Number)
        {
            List<proc_GetAllClaimsOfUser_Result> listClaims = new List<proc_GetAllClaimsOfUser_Result>();
            listClaims = entities.proc_GetAllClaimsOfUser(Mobile_Number).ToList();
            return listClaims;
        }
        [HttpPut]
        public string ApproveClaim(long Policy_no, int amt, string admin)
        {
            entities.proc_ApproveMotorClaim(Policy_no, amt, admin);
            entities.SaveChanges();
            return "Claim Approved";
        }
    }
}

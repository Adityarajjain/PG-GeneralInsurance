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
    public class MotorClaimAdminController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        [HttpGet]
        public List<proc_GetAllMotorClaim_Admin_Result> GetAllMotorClaim()
        {
            List<proc_GetAllMotorClaim_Admin_Result> listmotorclaims = new List<proc_GetAllMotorClaim_Admin_Result>();
            listmotorclaims = entities.proc_GetAllMotorClaim_Admin().ToList();
            foreach (var item in listmotorclaims)
            {
                item.Insurance_Copy = "Uploaded";
                item.RC_Copy = "Uploaded";
                item.License_Copy = "Uploaded";
                if (!item.Authenticated_Letter_from_RTO.Equals("Not required"))
                {
                    item.Authenticated_Letter_from_RTO = "Uploaded";
                    item.Bill_Copy = "Not Required";
                }
                else
                {
                    item.Bill_Copy = "Uploaded";
                }
            }
            return listmotorclaims;
        }
        [HttpPut]
        [Route("api/MotorClaimAdmin/RejectMotorClaim")]
        public string RejectMotorClaim(long Claim_id, int amt, string admin)
        {
            entities.proc_RejectMotorClaim_New(Claim_id, amt, admin);
            entities.SaveChanges();
            return "Claim Rejected";
        }
        [HttpPut]
        public string ApproveMotorClaim(long Claim_id, int amt, string admin)
        {
            entities.proc_ApproveMotorClaim_Admin_New(Claim_id, amt, admin);
            entities.SaveChanges();
            return "Claim Approved";
        }

       
    }
}














//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;

//namespace registration.Controllers
//{
//    public class MotorClaimAdminController : ApiController
//    {
//    }
//}

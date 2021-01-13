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
    public class TravelClaimAdminController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        [HttpGet]
        public List<proc_GetAllTravelClaim_Admin_Result> GetAllTravelClaim()
        {
            List<proc_GetAllTravelClaim_Admin_Result> listtravelclaims = new List<proc_GetAllTravelClaim_Admin_Result>();
            listtravelclaims = entities.proc_GetAllTravelClaim_Admin().ToList();
            foreach (var item in listtravelclaims)
            {
                item.Ticket_Copy = "Uploaded";
                if(!item.Complaint_Copy.Equals("Not Required"))
                {
                    item.Complaint_Copy = "Uploaded";
                }

            }
            return listtravelclaims;
        }
        [HttpPut]
        [Route("api/TravelClaimAdmin/RejectTravelClaim")]
        public string RejectTravelClaim(long Claim_id, int amt, string admin)
        {
            entities.proc_RejectTravelClaim_New(Claim_id, amt, admin);
            entities.SaveChanges();
            return "Claim Rejected";
        }
        [HttpPut]
        public string ApproveTravelClaim(long Claim_id, int amt, string admin)
        {
            entities.proc_ApproveTravelClaim_Admin_New(Claim_id, amt, admin);
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
//    public class TravelClaimAdminController : ApiController
//    {
//    }
//}

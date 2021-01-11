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
            return listtravelclaims;
        }
        [HttpPut]
        public string ApproveTravelClaim(long Policy_no, int amt, string admin)
        {
            entities.proc_ApproveTravelClaim_Admin(Policy_no, amt, admin);
            entities.SaveChanges();
            return "Claim Approved";
        }

        [HttpPut]
        [Route("RejectTravelClaim")]
        public string RejectTravelClaim(long Policy_no, int amt, string admin)
        {
            entities.proc_RejectTravelClaim(Policy_no, amt, admin);
            entities.SaveChanges();
            return "Claim Rejected";
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

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
    public class TravelInsuranceApprovalController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        [HttpGet]
        public List<proc_GetAllTravelInsurance_Admin_Result> GetAllTravelInsurance()
        {
            List<proc_GetAllTravelInsurance_Admin_Result> listtravel = new List<proc_GetAllTravelInsurance_Admin_Result>();
            listtravel = entities.proc_GetAllTravelInsurance_Admin().ToList();
            return listtravel;
        }

        [HttpPut]
        [Route("api/TravelInsuranceApproval/RejectTravelInsurance")]
        public string RejectTravelInsurance(long Policy_no, string admin)
        {
            entities.proc_RejectTravelInsurance(Policy_no, admin);
            entities.SaveChanges();
            return "Insurance Rejected";
        }
        [HttpPut]
        public string ApproveTravelInsurance(long Policy_no, string admin)
        {
            entities.proc_ApproveTravelInsurance(Policy_no, admin);
            entities.SaveChanges();
            return "Insurance Approved";
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
//    public class TravelInsuranceApprovalController : ApiController
//    {
//    }
//}

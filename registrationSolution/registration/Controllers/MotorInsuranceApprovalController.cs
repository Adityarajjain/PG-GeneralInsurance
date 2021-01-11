using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using registration.Models;

namespace registration.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class MotorInsuranceApprovalController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        [HttpGet]
        public List<proc_GetAllMotorInsurance_Admin_Result> GetAllMotorInsurance()
        {
            List<proc_GetAllMotorInsurance_Admin_Result> listmotor = new List<proc_GetAllMotorInsurance_Admin_Result>();
            listmotor = entities.proc_GetAllMotorInsurance_Admin().ToList();
            return listmotor;
        }
        [HttpPut]
        [Route("api/MotorInsuranceApproval/RejectMotorInsurance")]
        public string RejectMotorInsurance(long Policy_no, string admin)
        {
            entities.proc_RejectMotorInsurance(Policy_no, admin);
            entities.SaveChanges();
            return "Insurance Rejected";
        }

        [HttpPut]
        public string ApproveMotorInsurance(long Policy_no, string admin)
        {
            entities.proc_ApproveMotorInsurance(Policy_no, admin);
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
//    public class MotorInsuranceApprovalController : ApiController
//    {
//    }
//}

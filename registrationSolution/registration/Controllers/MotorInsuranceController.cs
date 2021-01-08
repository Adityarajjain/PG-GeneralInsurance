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
    public class MotorInsuranceController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();

        //public IEnumerable<MotorInsuranceTable> Get()
        //{
        //    return entities.MotorInsuranceTables.ToList();
        //}
        public long Get()
        {
            return entities.proc_GetLatestId().SingleOrDefault().Value;
        }

        [HttpPost]
        public void AddInsurance(MotorInsuranceTable motorInsuranceTable)
        {
            entities.MotorInsuranceTables.Add(motorInsuranceTable);
            entities.SaveChanges();
        }
    }
}

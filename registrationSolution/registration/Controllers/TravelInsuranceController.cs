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
    public class TravelInsuranceController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        //public IEnumerable<TravelInsuranceTable> Get()
        //{
        //    return entities.TravelInsuranceTables.ToList();
        //}
        public long Get()
        {
            return entities.proc_GetLatestTravelId().SingleOrDefault().Value;
        }
        [HttpPost]
        public void AddInsurance(TravelInsuranceTable travelInsuranceTable)
        {
            entities.TravelInsuranceTables.Add(travelInsuranceTable);
            entities.SaveChanges();
        }
    }
}

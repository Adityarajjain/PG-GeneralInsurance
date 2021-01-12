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
    public class AllTravelApprovedController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        public List<proc_GetAll_Policy_Travel_Approved_Result> Get()
        {
            return entities.proc_GetAll_Policy_Travel_Approved().ToList();
        }
    }
}

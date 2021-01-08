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
    public class VehiclesController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        [HttpGet]
        public List<string> GetManufacturers()
        {
            return entities.proc_GetManufacturers().ToList();
        }
        [HttpGet]
        public List<string> GetCarsOfManufacturer(string manu)
        {
            return entities.proc_GetCarsOfManufacturer(manu).ToList();
        }
    }
}

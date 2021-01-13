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
        [Route("api/Vehicles/GetManufacturers_4W")]
        public List<string> GetManufacturers_4W()
        {
            return entities.proc_GetManufacturers_4W().ToList();
        }
        [HttpGet]
        [Route("api/Vehicles/GetManufacturers_2W")]
        public List<string> GetManufacturers_2W()
        {
            return entities.proc_GetManufacturers_2W().ToList();
        }
        [HttpGet]
        public List<string> GetCarsOfManufacturer(string manu)
        {
            return entities.proc_GetCarsOfManufacturer(manu).ToList();
        }
    }
}

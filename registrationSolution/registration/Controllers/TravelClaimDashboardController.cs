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
    public class TravelClaimDashboardController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        public List<proc_GetAllTravelClaimsOfUser_Result> GetAllClaimsOfUser(string Mobile_Number)
        {
            List<proc_GetAllTravelClaimsOfUser_Result> listClaims = new List<proc_GetAllTravelClaimsOfUser_Result>();
            listClaims = entities.proc_GetAllTravelClaimsOfUser(Mobile_Number).ToList();
            return listClaims;
        }
    }
}

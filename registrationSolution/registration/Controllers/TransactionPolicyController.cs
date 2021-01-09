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
    public class TransactionPolicyController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        [HttpGet]
        public double GetTransaction(long Policy_Id)
        {
            double premium = entities.proc_GetTransactionDetails(Policy_Id).LastOrDefault().Value;
            return premium;
        }
    }
}

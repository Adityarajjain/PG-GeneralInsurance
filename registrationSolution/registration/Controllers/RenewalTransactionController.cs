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
    public class RenewalTransactionController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        public IEnumerable<Proc_MakeRenewalOfPolicy3_Result> Get(long policyid, float amount, int year)
        {
            return entities.Proc_MakeRenewalOfPolicy3(policyid, amount, year).ToList();
        }
    }
}

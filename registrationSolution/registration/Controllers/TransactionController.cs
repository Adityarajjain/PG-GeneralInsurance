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
    public class TransactionController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        [HttpGet]
        public double GetPremium(string manu, string model, string date)
        {
            double price = entities.proc_GetBrandNewPrice(manu, model).SingleOrDefault().Value;
            //double price = Convert.ToDouble(entities.proc_GetBrandNewPrice(manu, model).ToString(), System.Globalization.CultureInfo.InvariantCulture);
            DateTime purchase_date = DateTime.Parse(date);
            DateTime present_date = DateTime.Today;
            double idv_rate = 0.05;
            double daysDiff = (present_date - purchase_date).TotalDays;
            if (daysDiff > 365 && daysDiff < 365 * 2)
                idv_rate = 0.15;
            else if (daysDiff > 365 * 2 && daysDiff <= 365 * 3)
                idv_rate = 0.20;
            else if (daysDiff > 365 * 3 && daysDiff <= 365 * 4)
                idv_rate = 0.30;
            else if (daysDiff > 365 * 4 && daysDiff <= 365 * 5)
                idv_rate = 0.40;
            else if (daysDiff > 365 * 5)
                idv_rate = 0.50;
            double premium, idv;
            idv = price - idv_rate * price;
            premium = idv * 0.03;
            return premium;          
        }

        [HttpPost]
        public void addTransaction(TransactionTable transaction)
        {
            entities.TransactionTables.Add(transaction);
            entities.SaveChanges();
        }
    }
}

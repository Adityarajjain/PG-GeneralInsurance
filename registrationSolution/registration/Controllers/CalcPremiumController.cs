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
    public class CalcPremiumController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        public double GetPremium(long policyid, string manu, string model)
        {
            GetBrandNewPrice_Proc1_Result res = null;
            res = entities.GetBrandNewPrice_Proc1(policyid, manu, model).FirstOrDefault();
            DateTime purchase_date = (DateTime)res.Purchase_Date;
            DateTime present_date = DateTime.Today;
            double brand_new_price = (double)res.Brand_New_Price;
            double daysdifference = (present_date - purchase_date).TotalDays;
            double idv_rate = 0.05;
            //int no_of_years = res.Time_Period;
            if (daysdifference > 365 && daysdifference < 365 * 2)
                idv_rate = 0.15;
            else if (daysdifference > 365 * 2 && daysdifference < 365 * 3)
                idv_rate = 0.20;
            else if (daysdifference > 365 * 3 && daysdifference < 365 * 4)
                idv_rate = 0.30;
            else if (daysdifference > 365 * 4 && daysdifference < 365 * 5)
                idv_rate = 0.40;
            else if (daysdifference > 365 * 5)
                idv_rate = 0.50;
            double premium, idv;
            idv = brand_new_price - idv_rate * brand_new_price;
            premium = idv * 0.03;
            return premium;


        }
    }
}

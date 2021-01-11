using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using registration.Models;

namespace registration.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class TravelClaimController : ApiController
    {
        GeneralInsuranceFinalEntities_ objEntity = new GeneralInsuranceFinalEntities_();

        public IEnumerable<TravelClaimDetailsTable> GetTravelClaim()
        {

            return objEntity.TravelClaimDetailsTables.AsEnumerable();
        }
        [HttpPost]
        [Route("api/TravelClaim/TheftofBaggage")]
        public HttpResponseMessage PostClaimTheft()
        {
            string document = null;
            string document2 = null;
            var httpRequest = HttpContext.Current.Request;
            var postedFile = httpRequest.Files["Ticket_Copy"];
            var postedFile2 = httpRequest.Files["Complaint_Copy"];
            document = new string(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(15).ToArray()).Replace(" ", "-");
            document2 = new string(Path.GetFileNameWithoutExtension(postedFile2.FileName).Take(15).ToArray()).Replace(" ", "-");
            document = document + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
            document2 = document + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile2.FileName);
            var filepath = HttpContext.Current.Server.MapPath("~/Files/" + document);
            var filepath2 = HttpContext.Current.Server.MapPath("~/Files/" + document2);
            postedFile.SaveAs(filepath);
            postedFile2.SaveAs(filepath2);
            TravelClaimDetailsTable travelClaim = new TravelClaimDetailsTable();
            travelClaim.Ticket_Copy = filepath;
            travelClaim.Travel_Policy_Id = Convert.ToInt64(httpRequest["Travel_Policy_Id"]);
            travelClaim.Mobile_Number = httpRequest["Mobile_Number"];
            travelClaim.Reason_for_Claim = httpRequest["Reason_for_Claim"];
            travelClaim.Complaint_Copy = filepath2;
            travelClaim.Claim_Status = "pending";
            DbContextTransaction transaction = objEntity.Database.BeginTransaction();
            if (ModelState.IsValid)
            {
                try
                {
                    objEntity.sp_insertTravelClaim(
                        travelClaim.Travel_Policy_Id, travelClaim.Ticket_Copy, travelClaim.Reason_for_Claim, travelClaim.Mobile_Number,
                        travelClaim.Claim_Status, travelClaim.Complaint_Copy);
                    objEntity.SaveChanges();
                    transaction.Commit();
                }
                catch (Exception)
                {
                    transaction.Rollback();
                    return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Could not place request");
                }

            }
            return Request.CreateResponse(HttpStatusCode.Created, travelClaim);

        }
        [HttpPost]
        [Route("api/TravelClaim/Accident")]
        public HttpResponseMessage PostClaimAccident()
        {
            string document = null;
            var httpRequest = HttpContext.Current.Request;
            var postedFile = httpRequest.Files["Ticket_Copy"];
            document = new string(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(15).ToArray()).Replace(" ", "-");
            document = document + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
            var filepath = HttpContext.Current.Server.MapPath("~/Files/" + document);
            postedFile.SaveAs(filepath);
            TravelClaimDetailsTable travelClaim = new TravelClaimDetailsTable();
            travelClaim.Ticket_Copy = filepath;
            travelClaim.Travel_Policy_Id = Convert.ToInt64(httpRequest["Travel_Policy_Id"]);
            travelClaim.Mobile_Number = httpRequest["Mobile_Number"];
            travelClaim.Reason_for_Claim = httpRequest["Reason_for_Claim"];
            travelClaim.Complaint_Copy = "Not Required";
            travelClaim.Claim_Status = "pending";
            DbContextTransaction transaction = objEntity.Database.BeginTransaction();
            if (ModelState.IsValid)
            {
                try
                {
                    objEntity.sp_insertTravelClaim(
                        travelClaim.Travel_Policy_Id, travelClaim.Ticket_Copy, travelClaim.Reason_for_Claim, travelClaim.Mobile_Number,
                        travelClaim.Claim_Status, travelClaim.Complaint_Copy);
                    objEntity.SaveChanges();
                    transaction.Commit();
                }
                catch (Exception)
                {
                    transaction.Rollback();
                    return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, "Could not place request");
                }

            }
            return Request.CreateResponse(HttpStatusCode.Created, travelClaim);

        }


    }
}
















//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;

//namespace registration.Controllers
//{
//    public class TravelClaimController : ApiController
//    {
//    }
//}

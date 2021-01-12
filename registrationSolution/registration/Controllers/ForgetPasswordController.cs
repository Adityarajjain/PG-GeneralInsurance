using registration.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mail;


namespace AdminGeneralInsuranceWebApi.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ForgetPasswordController : ApiController
    {
        GeneralInsuranceFinalEntities_ entities = new GeneralInsuranceFinalEntities_();
        [HttpGet]
        public HttpResponseMessage forgetPassword_Send_Mail(string email)
        {
            UserDetailsTable student = entities.UserDetailsTables.Where(t => t.Email_Id == email).FirstOrDefault();
            if (student == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid ID");
            }
            else
            {
                var token = Guid.NewGuid().ToString();
                MailAddress to = new MailAddress(student.Email_Id);
                MailAddress from = new MailAddress("generalinsuranceteam05@gmail.com");

                System.Net.Mail.MailMessage message = new System.Net.Mail.MailMessage(from, to);
                message.Subject = "Testing Mail";
                message.IsBodyHtml = true;

                message.Body = "Reseting <a href='http:/localhost:4200/ResetPassword?id=" + student.Mobile_Number + "&token=" + token + "' >Click!</a>";
                //message.Body = "Reseting <a href='www.google.com' >Click!</a>";
                SmtpClient client = new SmtpClient("smtp.gmail.com", 587)
                 {
                     Credentials = new NetworkCredential("generalinsuranceteam05@gmail.com", "PGGITeam05"),
                     EnableSsl = true
                 };

                try
                {
                    client.Send(message);

                }
                catch (SmtpException ex)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex.Message);
                }
                List<string> list = new List<string>();
                list.Add(Convert.ToString(student.Mobile_Number));
                list.Add(token);

                return Request.CreateResponse<List<string>>(HttpStatusCode.OK, list);
            }
        }

        [HttpPut]
        public HttpResponseMessage savePassword(NewPassword n)
        {
            UserDetailsTable s = entities.UserDetailsTables.Where(t => t.Mobile_Number == n.id).FirstOrDefault();
            if (s == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Data cannot be found");
            }
            else
            {
                s.Password = n.newPassword;
                entities.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, "1");
            }

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
//    public class ForgetPasswordController : ApiController
//    {
//    }
//}

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace registration.Models
{
    using System;
    
    public partial class proc_GetAllTravelPoliciesOfUser_Result
    {
        public long Policy_id { get; set; }
        public string Type_Of_Travel { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }
        public string Mode_Of_Transport { get; set; }
        public Nullable<int> Age_Of_traveller { get; set; }
        public Nullable<System.DateTime> Travel_Start_Date { get; set; }
        public Nullable<System.DateTime> Travel_End_Date { get; set; }
        public string Any_Medical_Condition { get; set; }
        public string Mobile_Number { get; set; }
        public string Insurance_Plan { get; set; }
        public string Insurer_Username { get; set; }
        public string Status { get; set; }
    }
}

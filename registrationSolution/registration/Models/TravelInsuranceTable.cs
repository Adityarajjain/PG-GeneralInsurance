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
    using System.Collections.Generic;
    
    public partial class TravelInsuranceTable
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TravelInsuranceTable()
        {
            this.TransactionTables = new HashSet<TransactionTable>();
            this.TravelClaimDetailsTables = new HashSet<TravelClaimDetailsTable>();
        }
    
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
    
        public virtual AdminDetailsTable AdminDetailsTable { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TransactionTable> TransactionTables { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TravelClaimDetailsTable> TravelClaimDetailsTables { get; set; }
        public virtual UserDetailsTable UserDetailsTable { get; set; }
    }
}

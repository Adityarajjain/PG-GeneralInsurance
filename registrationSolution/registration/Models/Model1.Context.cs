﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class GeneralInsuranceFinalEntities : DbContext
    {
        public GeneralInsuranceFinalEntities()
            : base("name=GeneralInsuranceFinalEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AdminDetailsTable> AdminDetailsTables { get; set; }
        public virtual DbSet<MotorClaimDetailsTable> MotorClaimDetailsTables { get; set; }
        public virtual DbSet<MotorInsuranceTable> MotorInsuranceTables { get; set; }
        public virtual DbSet<TransactionTable> TransactionTables { get; set; }
        public virtual DbSet<TravelClaimDetailsTable> TravelClaimDetailsTables { get; set; }
        public virtual DbSet<TravelInsuranceTable> TravelInsuranceTables { get; set; }
        public virtual DbSet<UserDetailsTable> UserDetailsTables { get; set; }
        public virtual DbSet<VehicleListTable> VehicleListTables { get; set; }
    
        public virtual ObjectResult<string> proc_AdminLoginCheck(string uid, string pswd)
        {
            var uidParameter = uid != null ?
                new ObjectParameter("uid", uid) :
                new ObjectParameter("uid", typeof(string));
    
            var pswdParameter = pswd != null ?
                new ObjectParameter("pswd", pswd) :
                new ObjectParameter("pswd", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("proc_AdminLoginCheck", uidParameter, pswdParameter);
        }
    }
}
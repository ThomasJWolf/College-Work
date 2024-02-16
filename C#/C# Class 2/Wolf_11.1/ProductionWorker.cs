/* Thomas Wolf
 * 11/26/23
 * Employee Information
 * ProductionWorkers.cs */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wolf_11._1
{
    public class ProductionWorker : Employee
    {
        public string ShiftNumber { get; set; }
        public decimal HourlyPayRate { get; set; }

        //A constructor for the shift number and hourly pay rate
        public ProductionWorker(string name, int number, string shift, decimal payRate)
            : base(name, number)
        {
            ShiftNumber = shift;
            HourlyPayRate = payRate;
        }
    }
}

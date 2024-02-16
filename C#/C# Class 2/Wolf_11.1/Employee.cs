/* Thomas Wolf
 * 11/26/23
 * Employee Information
 * Employee.cs */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wolf_11._1
{
    public class Employee
    {
        public string EmployeeName { get; set; }
        public int EmployeeNumber { get; set; }

        //A constructor for Employee with the name and number
        public Employee(string name, int number)
        {
            EmployeeName = name;
            EmployeeNumber = number;
        }
    }
}

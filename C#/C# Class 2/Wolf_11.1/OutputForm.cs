/* Thomas Wolf
 * 11/26/23
 * Employee Information
 * OutputForm.cs */
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_11._1
{
    public partial class OutputForm : Form
    {
        public OutputForm()
        {
            InitializeComponent();
        }

        public void SetEmployeeData(ProductionWorker worker)
        {
            //Sets the variables to there corresponding outputs
            Namelbl.Text = "Employee Name: " + worker.EmployeeName;
            Numberlbl.Text = "Employee Number: " + worker.EmployeeNumber.ToString();
            ShiftNumlbl.Text = "Shift Number: " + worker.ShiftNumber.ToString();
            Paylbl.Text = "Hourly Pay Rate: " + worker.HourlyPayRate.ToString("C");
        }
    }
}

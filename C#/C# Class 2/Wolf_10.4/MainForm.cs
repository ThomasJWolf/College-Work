using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_10._4
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }

        private void Runbtn_Click(object sender, EventArgs e)
        {
            //Creates three Employee objects
            Employee employee1 = new Employee("Susan Meyers", 47899, "Accounting", "Vice President");
            Employee employee2 = new Employee("Mark Jones", 39119, "IT", "Programmer");
            Employee employee3 = new Employee("Joy Rogers", 81774, "Manufacturing", "Engineer");

            //Assigns employee data to labels
            Emp1Namelbl.Text = employee1.Name;
            Emp1IDNumlbl.Text = employee1.IdNumber.ToString();
            Emp1Deplbl.Text = employee1.Department;
            Emp1Positionlbl.Text = employee1.Position;

            Emp2Namelbl.Text = employee2.Name;
            Emp2IDNumlbl.Text = employee2.IdNumber.ToString();
            Emp2Deplbl.Text = employee2.Department;
            Emp2Positionlbl.Text = employee2.Position;

            Emp3Namelbl.Text = employee3.Name;
            Emp3IDNumlbl.Text = employee3.IdNumber.ToString();
            Emp3Deplbl.Text = employee3.Department;
            Emp3Positionlbl.Text = employee3.Position;
        }
    }
}

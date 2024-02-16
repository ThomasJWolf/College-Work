//Thomas Wolf//
//5/28/23//
//Automobile Cost//
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_3._11
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)

        {

        }

        private void Calculatebtn_Click(object sender, EventArgs e)
        {
            //Creates a try catch so no there are no errors for misinputs
            try
            {
                //Sets totalIntM to all of the text boxes converted to doubles and added together
                var totalIntM = double.Parse(LoanPaymenttxb.Text) + double.Parse(Insurancetxb.Text) + double.Parse(Gastxb.Text) + double.Parse(Oiltxb.Text) + double.Parse(Tirestxb.Text) + double.Parse(Maintenancetxb.Text);
                //Sets totalIntY to totalIntM multiplyed by 12 for the yearly cost
                var totalIntY = totalIntM * 12;
                //Converts totalIntM and totalIntY to a string with the money format
                var totalStrM = totalIntM.ToString("c");
                var totalStrY = totalIntY.ToString("c");
                //Sets MonthlyResultlbl to totalStrM and sets YearlyResultlbl to totalStrY
                MonthlyResultlbl.Text = totalStrM;
                YearlyResultlbl.Text = totalStrY;
            }
            catch
            {
                //Shows a message box telling the user they have inputed invalid data
                MessageBox.Show("ERROR: Invalid or missing data in text fields");
            }
        }
        private void Resetbtn_Click(object sender, EventArgs e)
        {
            //Sets all of the text inputs and lable outputs to an empty string
            LoanPaymenttxb.Text = string.Empty;
            Insurancetxb.Text = string.Empty;
            Gastxb.Text = string.Empty;
            Oiltxb.Text = string.Empty;
            Tirestxb.Text = string.Empty;
            Maintenancetxb.Text= string.Empty;
            MonthlyResultlbl.Text = string.Empty;
            YearlyResultlbl.Text= string.Empty;
        }

        private void Exitbtn_Click(object sender, EventArgs e)
        {
            //Exits the program
            this.Close();
        }

    }
}

//Thomas Wolf
//7/16/23
//Hospital Charges
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_6._6
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        //Creates variables for the error message boxes
        string title = "Error";
        MessageBoxButtons buttons = MessageBoxButtons.OK;
        MessageBoxIcon icon = MessageBoxIcon.Error;

        private void Calculatebtn_Click(object sender, EventArgs e)
        {
            //Sets days, misc, and total to there respective methods
            var days = CalcStayCharges();
            var misc = CalcMiscCharges();
            var total = CalcTotalCharges();

            StayChargesOutlbl.Text = days.ToString("C");
            MiscChargesOutlbl.Text = misc.ToString("C");
            TotalChargesOutlbl.Text = total.ToString("C");
        }

        private double CalcStayCharges()
        {
            int days = 0;
            //Checks to see if Daystxb is an int
            if (int.TryParse(Daystxb.Text, out int d))
            {
                //Checks to see if p is greater or equal to 0
                if (d >= 0)
                {
                    //Sets p to parts
                    days = d * 350;
                }
                else
                {
                    //Displays a window error that the value must be greater than 0 for days
                    string message = "Value must be a greater or equal 0 for days.";
                    MessageBox.Show(message, title, buttons, icon);
                }
            }
            else
            {
                //Displays a window error that the value must be a whole number for days
                string message = "Value must be a whole number for days.";
                MessageBox.Show(message, title, buttons, icon);
            }
            return days;
        }

        private double CalcMiscCharges()
        {
            double total = 0;
            double medication = 0;
            double surgical = 0;
            double lab = 0;
            double phys_rehab = 0;



            //Checks to see if Medicationtxb is a double
            if (double.TryParse(Medicationtxb.Text, out double m))
            {
                //Checks to see if m is greater or equal to 0
                if (m >= 0)
                {
                    //Sets m to medication
                    medication = m;
                }
                else
                {
                    //Displays a window error that the value must be greater than 0 for medication
                    string message = "Value must be a greater or equal 0 for medication.";
                    MessageBox.Show(message, title, buttons, icon);
                }
            }
            else
            {
                //Displays a window error that the value must be a number for medication
                string message = "Value must be a number for medication.";
                MessageBox.Show(message, title, buttons, icon);
            }

            //Checks to see if Surgicaltxb is a double
            if (double.TryParse(Surgicaltxb.Text, out double s))
            {
                //Checks to see if s is greater or equal to 0
                if (s >= 0)
                {
                    //Sets s to surgical
                    surgical = s;
                }
                else
                {
                    //Displays a window error that the value must be greater than 0 for surgical
                    string message = "Value must be a greater or equal 0 for surgical.";
                    MessageBox.Show(message, title, buttons, icon);
                }
            }
            else
            {
                //Displays a window error that the value must be a number for surgical
                string message = "Value must be a number for surgical.";
                MessageBox.Show(message, title, buttons, icon);
            }

            //Checks to see if Labtxb is a double
            if (double.TryParse(Labtxb.Text, out double l))
            {
                //Checks to see if l is greater or equal to 0
                if (l >= 0)
                {
                    //Sets l to lab
                    lab = l;
                }
                else
                {
                    //Displays a window error that the value must be greater than 0 for lab
                    string message = "Value must be a greater or equal 0 for lab.";
                    MessageBox.Show(message, title, buttons, icon);
                }
            }
            else
            {
                //Displays a window error that the value must be a number for lab
                string message = "Value must be a number for lab.";
                MessageBox.Show(message, title, buttons, icon);
            }

            //Checks to see if PhysRehabtxb is a double
            if (double.TryParse(PhysRehabtxb.Text, out double p))
            {
                //Checks to see if p is greater or equal to 0
                if (l >= 0)
                {
                    //Sets p to phys_rehab
                    phys_rehab = p;
                }
                else
                {
                    //Displays a window error that the value must be greater than 0 for phys_rehab
                    string message = "Value must be a greater or equal 0 for physical rehabilitation.";
                    MessageBox.Show(message, title, buttons, icon);
                }
            }
            else
            {
                //Displays a window error that the value must be a number for phys_rehab
                string message = "Value must be a number for physical rehabilitation.";
                MessageBox.Show(message, title, buttons, icon);
            }

            //Adds medication, surgical, lab, and phys_rehab then adds them to total
            total += medication + surgical + lab + phys_rehab;
            //Returns total
            return total;

        }

        private double CalcTotalCharges()
        {
            //Sets days to the CalcStayCharges method
            var days = CalcStayCharges();
            //Sets misc to the CalcMiscCharges method
            var misc = CalcMiscCharges();
            //Adds days and misc and sets that to total
            var total = days + misc;
            //Returns total
            return total;
        }

        private void Clearbtn_Click(object sender, EventArgs e)
        {
            //Clears all of the text boxes and output labels
            Daystxb.Text = string.Empty;
            Medicationtxb.Text = string.Empty;
            Surgicaltxb.Text = string.Empty;
            Labtxb.Text = string.Empty;
            PhysRehabtxb.Text = string.Empty;
            StayChargesOutlbl.Text = string.Empty;
            MiscChargesOutlbl.Text = string.Empty;
            TotalChargesOutlbl.Text = string.Empty;
        }

        private void Exitbtn_Click(object sender, EventArgs e)
        {
            //Closes the program
            this.Close();
        }
    }
}


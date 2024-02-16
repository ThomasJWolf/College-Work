//Thomas Wolf
//7/16/23
//Joe's Automotive
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Wolf_6._5
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
            //Creates local variables for labor and parts, then calls the method OtherCharges with the variables as out
            int labor;
            int parts;
            OtherCharges(out labor, out parts);
            //Sets tax to the result of the methodTaxCharges
            var tax = TaxCharges();
            //Sets total to the result of the method TotalCharges
            double total = TotalCharges();

            //Sets all of the variables to there respective labels
            ServiceLaborOutlbl.Text = labor.ToString();
            PartsOutlbl.Text = parts.ToString();
            TaxOutlbl.Text = tax.ToString();
            TotalFeesOutlbl.Text = total.ToString();
        }

        private void Clearbtn_Click(object sender, EventArgs e)
        {
            //Calls all of the clear methods
            ClearOilLube();
            ClearFlushes();
            ClearMisc();
            ClearOther();
            ClearFees();
        }

        private double OilLubeCharges()
        {
            //Create a variable named total set to 0
            double total = 0;
            //Checks if the check box OilChangecbx is checked
            if (OilChangecbx.Checked)
            {
                //Adds 26 to the total
                total += 26;
            }
            //Checks if the check box Lubejobcbx is checked
            if (Lubejobcbx.Checked)
            {
                //Adds 18 to the total
                total += 18;
            }
            //Returns the variable total 
            return total;
        }

        private double FlushCharges()
        {
            //Create a variable named total set to 0
            double total = 0;
            //Checks if the check box RadiatorFlushcbx is checked
            if (RadiatorFlushcbx.Checked)
            {
                //Adds 30 to the total
                total += 30;
            }
            //Checks if the check box TransmissionFlushcbx is checked
            if (TransmissionFlushcbx.Checked)
            {
                //Adds 80 to the total
                total += 80;
            }
            //Returns the variable total 
            return total;
        }

        private double MiscCharges()
        {
            //Create a variable named total set to 0
            double total = 0;
            //Checks if the check box Inspectioncbx is checked
            if (Inspectioncbx.Checked)
            {
                //Adds 15 to the total
                total += 15;
            }
            //Checks if the check box ReplaceMufflercbx is checked
            if (ReplaceMufflercbx.Checked)
            {
                //Adds 100 to the total
                total += 100;
            }
            //Checks if the check box TireRotationcbx is checked
            if (TireRotationcbx.Checked)
            {
                //Adds 20 to the total
                total += 20;
            }
            //Returns the variable total 
            return total;
        }

        private int OtherCharges(out int labor, out int parts)
        {
            //Sets labor and parts to 0
            labor = 0;
            parts = 0;
            //Checks to see if Partstxb is empty
            if (!string.IsNullOrEmpty(Partstxb.Text))
            {
                //Checks to see if Partstxb is an int
                if (int.TryParse(Partstxb.Text, out int p))
                {
                    //Checks to see if p is greater than 0
                    if (p > 0)
                    {
                        //Sets p to parts
                        parts = p;
                    }
                    else
                    {
                        //Displays a window error that the value must be greater than 0
                        string message = "Value must be a greater than 0.";
                        MessageBox.Show(message, title, buttons, icon);
                    }
                }
                else
                {
                    //Displays a window error that the value must be a whole number
                    string message = "Value must be a whole number.";
                    MessageBox.Show(message, title, buttons, icon);
                }
            }
            //Checks to see if Labortxb is empty
            if (!string.IsNullOrEmpty(Labortxb.Text))
            {
                //Checks to see if Labortxb is an int
                if (int.TryParse(Labortxb.Text, out int l))
                {
                    //Checks to see if l is greater than 0
                    if (l > 0)
                    {
                        //Sets l to labor
                        labor = l * 20;
                    }
                    else
                    {
                        //Displays a window error that the value must be greater than 0
                        string message = "Value must be a greater than 0.";
                        MessageBox.Show(message, title, buttons, icon);
                    }
                }
                else
                {
                    //Displays a window error that the value must be a whole number
                    string message = "Value must be a whole number.";
                    MessageBox.Show(message, title, buttons, icon);
                }
            }
            return labor;
        }

        private double TaxCharges()
        {
            //Create a variable names total set to 0
            double total = 0;
            //Create a variable names tax set to 0.06
            double tax = 0.06;
            //Creates local variables for labor and parts, then calls the method OtherCharges with the variables as out
            int labor;
            int parts;
            OtherCharges(out labor, out parts);
            //Adds labor and parts and adds that to total
            total += labor + parts;
            //Gets the tax by multiplying total by tax
            total *= tax;
            //Returns the variable total 
            return total;

        }

        private double TotalCharges()
        {
            //Create a variable names total set to 0
            double total = 0;
            //Creates local variables for labor and parts, then calls the method OtherCharges with the variables as out
            int labor;
            int parts;
            OtherCharges(out labor, out parts);
            //Adds labor and parts and adds that to total
            total += labor + parts;
            //Adds the methods OilLubeCharges, FlushCharges, MiscCharges, and TaxCharges to total
            total += OilLubeCharges();
            total += FlushCharges();
            total += MiscCharges();
            total += TaxCharges();
            //Returns the variable total 
            return total;
        }


        private void ClearOilLube()
        {
            //Unchecks OilChangecbx and Lubejobcbx
            OilChangecbx.Checked = false;
            Lubejobcbx.Checked = false;
        }

        private void ClearFlushes()
        {
            //Unchecks RadiatorFlushcbx and TransmissionFlushcbx
            RadiatorFlushcbx.Checked = false;
            TransmissionFlushcbx.Checked = false;
        }

        private void ClearMisc()
        {
            //Unchecks Inspectioncbx, ReplaceMufflercbx, and TireRotationcbx
            Inspectioncbx.Checked = false;
            ReplaceMufflercbx.Checked = false;
            TireRotationcbx.Checked = false;
        }

        private void ClearOther()
        {
            //Unchecks Partstxb and Labortxb
            Partstxb.Text = string.Empty;
            Labortxb.Text = string.Empty;
        }

        private void ClearFees()
        {
            //Unchecks ServiceLaborOutlbl, PartsOutlbl, TaxOutlbl, and TotalFeesOutlbl
            ServiceLaborOutlbl.Text = string.Empty;
            PartsOutlbl.Text = string.Empty;
            TaxOutlbl.Text = string.Empty;
            TotalFeesOutlbl.Text = string.Empty;
        }

        private void Exitbtn_Click(object sender, EventArgs e)
        {
            //Closes the program
            this.Close();
        }
    }
}

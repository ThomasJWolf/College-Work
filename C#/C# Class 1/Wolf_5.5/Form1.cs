//Thomas Wolf
//6/26/2023
//Pennies for Pay
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_5._5
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

        //Creates the money variable as 0.01
        double money = 0.01;

        private void Calculatebtn_Click(object sender, EventArgs e)
        {
            //Checks to see if Inputtxb is an int and if so output the data as the variable days
            if (int.TryParse(Inputtxb.Text, out int days)) 
            {
                //Checks to see if days is greater than 0
                if (days > 0)
                {
                    //Runs a loop until i is equal to days, with i increasing by 1 every iteration
                    for (int i = 1; i < days; i++)
                    {
                        //Multiples money by 2 every loop iteration
                        money *= 2;
                    }
                    //Sets the label Outputlbl to the money made and the days taken
                    Outputlbl.Text = "You made " + money.ToString("c") + " in " + days.ToString() + " days";
                    //Resets money to 0.01
                    money = 0.01;
                }
                else
                {
                    //Displays a window error that the value must be greater than 0
                    string message = "Value must be greater than 0.";
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

        private void Resetbtn_Click(object sender, EventArgs e)
        {
            //Resets all of the modifiable text box's and label's
            Inputtxb.Text = string.Empty;
            Outputlbl.Text = string.Empty;
        }

        private void Exitbtn_Click(object sender, EventArgs e)
        {
            //Closes the program
            this.Close();
        }
    }
}

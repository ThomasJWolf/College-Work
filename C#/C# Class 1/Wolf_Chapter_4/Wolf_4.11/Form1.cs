//Thomas Wolf
//6/11/23
//Time Calculator
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_4._11
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        //Sets the variables for the time calculation
        int days = 86400;
        int hours = 3600;
        int minutes = 60;

        private void Calculatebtn_Click(object sender, EventArgs e)
        {
            //Checks to see if Timetxb is an int and if so output the data as the variable time
            if (int.TryParse(Timetxb.Text, out int time))
            {
                //Checks to see if time is positive
                if (time > 0)
                {
                    //Checks to see if time is greater than days
                    if (time > days)
                    {
                        //Outputs the time divided by days and time to Resultlbl
                        Resultlbl.Text = "There are " + (time / days) + " days in " + time + " seconds";
                    }
                    //Checks to see if time is greater than hours
                    else if (time > hours)
                    {
                        //Outputs the time divided by hours and time to Resultlbl
                        Resultlbl.Text = "There are " + (time / hours) + " hours in " + time + " seconds";
                    }
                    //Checks to see if time is greater than minutes
                    else if (time > minutes)
                    {
                        //Outputs the time divided by minutes and time to Resultlbl
                        Resultlbl.Text = "There are " + (time / minutes) + " minutes in " + time + " seconds";
                    }
                    else
                    {
                        //Tells the user they have entered an invalid value for Dimes
                        Resultlbl.Text = "There are " + time + " seconds";
                    }
                }
                else
                {
                    //Tells the user to enter a positive number
                    MessageBox.Show("Enter a positive number");
                }
            }
            else
            {
                //Tells the user they have entered an invalid value for Time
                MessageBox.Show("Enter a whole number");
            }
        }

        private void Resetbtn_Click(object sender, EventArgs e)
        {
            //Resets all of the modifiable text box's and label's
            Timetxb.Text = string.Empty;
            Resultlbl.Text = string.Empty;
        }

        private void Exitbtn_Click(object sender, EventArgs e)
        {
            //Closes the program
            this.Close();
        }
    }
}

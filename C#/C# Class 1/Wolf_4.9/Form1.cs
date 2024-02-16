//Thomas Wolf
//6/11/23
//Dollar Game
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics.Eventing.Reader;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_4._9
{
    public partial class Dollar_Game : Form
    {
        public Dollar_Game()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void Calculatebtn_Click(object sender, EventArgs e)
        {
            //Checks to see if Penniestxb is an int and if so output the data as the variable pennies
            if (int.TryParse(Penniestxb.Text, out int pennies))
            {
                //Checks to see if Nicklestxb is an int and if so output the data as the variable nickels
                if (int.TryParse(Nicklestxb.Text, out int nickels))
                {
                    //Checks to see if Dimestxb is an int and if so output the data as the variable dimes
                    if (int.TryParse(Dimestxb.Text, out int dimes))
                    {
                        //Checks to see if Quarterstxb is an int and if so output the data as the variable quarters
                        if (int.TryParse(Quarterstxb.Text, out int quarters))
                        {
                            //Converts the values to how much they are worth and adds all of the variables together
                            double total = pennies + (nickels * 5) + (dimes * 10) + (quarters * 25);
                            //Divides total by 100 making it the correct dollar amount
                            total /= 100;
                            //Checks if total is less than one
                            if (total < 1)
                            {
                                //Outputs the total to Resultlbl and outputs the loosing text to Winnerlbl
                                Resultlbl.Text = "Your total is " + total.ToString("c");
                                Winnerlbl.Text = "You Lose! Your total is too low!";
                            }
                            //Checks if total is one
                            else if (total == 1) 
                            {
                                //Outputs the total to Resultlbl and outputs the winning text to Winnerlbl
                                Resultlbl.Text = "Your total is " + total.ToString("c");
                                Winnerlbl.Text = "You Win! Your total exact!";
                            }
                            //Checks if total is more than one
                            else if (total > 1)
                            {
                                //Outputs the total to Resultlbl and outputs the loosing text to Winnerlbl
                                Resultlbl.Text = "Your total is " + total.ToString("c");
                                Winnerlbl.Text = "You Lose! Your total is too high!";
                            }
                        }
                        else
                        {
                            //Tells the user they have entered an invalid value for Quarters
                            MessageBox.Show("Invalid value for Quarters");
                        }
                    }
                    else
                    {
                        //Tells the user they have entered an invalid value for Dimes
                        MessageBox.Show("Invalid value for Dimes");
                    }
                }
                else
                {
                    //Tells the user they have entered an invalid value for Nickels
                    MessageBox.Show("Invalid value for Nickels");
                }
            }
            else
            {
                //Tells the user they have entered an invalid value for Pennies
                MessageBox.Show("Invalid value for Pennies");
            }
        }

        private void Resetbtn_Click(object sender, EventArgs e)
        {
            //Resets all of the modifiable text box's and label's
            Penniestxb.Text = string.Empty;
            Nicklestxb.Text = string.Empty;
            Dimestxb.Text = string.Empty;
            Quarterstxb.Text = string.Empty;
            Resultlbl.Text = string.Empty;
            Winnerlbl.Text = string.Empty;
        }

        private void Exitbtn_Click(object sender, EventArgs e)
        {
            //Closes the program
            this.Close();
        }
    }
}

//Thomas Wolf
//7/9/23
//Addition Tutor
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace wolf_5._10
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        //Sets rand to a Random function
        Random rand = new Random();
        //Creates two int variables named num1 and num2 set to 0
        int num1 = 0;
        int num2 = 0;

        //Creates variables for the error message boxes
        string title = "Error";
        MessageBoxButtons buttons = MessageBoxButtons.OK;
        MessageBoxIcon icon = MessageBoxIcon.Error;

        private void Form1_Load(object sender, EventArgs e)
        {
            //Sets num 1 and num 2 to a random number between 100 and 500 and sets it to Addlbl before the GUI is displayed
            num1 = rand.Next(100, 501);
            num2 = rand.Next(100, 501);
            Addlbl.Text = num1 + " + " + num2 + " = ";
        }

        private void Calculatebtn_Click(object sender, EventArgs e)
        {
            //Checks to see if Inputtxb is an int and if so output the data as the variable add
            if (int.TryParse(Inputtxb.Text, out int add))
            {
                //Checks to see if add is greater than 0
                if (add > 0)
                {
                    //Checks to see if add is equal to num1 plus num 2
                    if (add == (num1 + num2))
                    {
                        //Displays a window that tells the user they are correct
                        MessageBox.Show("You are correct!", "Correct", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    }
                    else
                    {
                        //Displays a window that tells the user they are wrong
                        MessageBox.Show("You are Wrong", "Wrong", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                }
                else
                {
                    //Displays a window error that the value must be a positive number
                    string message = "Value must be a positive number.";
                    MessageBox.Show(message, title, buttons, icon);
                }
            }
            else
            {
                //Displays a window error that the value must be a whole number
                string message = "Value must be a whole number.";
                MessageBox.Show(message, title, buttons, icon);
            }
            //Sets num 1 and num 2 to a random number between 100 and 500, sets it to Addlbl, and clears Inputtxt
            num1 = rand.Next(100, 501);
            num2 = rand.Next(100, 501);
            Addlbl.Text = num1 + " + " + num2 + " = ";
            Inputtxb.Text = String.Empty;
        }

        private void Exitbtn_Click(object sender, EventArgs e)
        {
            //Closes the program
            this.Close();
        }
    }
}

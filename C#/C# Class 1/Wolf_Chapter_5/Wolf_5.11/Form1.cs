//Thomas Wolf
//7/9/23
//Random number guessing game
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_5._11
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

        //Sets rand to a Random function
        Random rand = new Random();
        //Creates one int variable named num1 set to 0
        int num1 = 0;
        
        //Sets a counter variable for the amount of tries it takes
        int counter = 1;

        private void Form1_Load(object sender, EventArgs e)
        {
            //Sets num 1 to a random number between 1 and 100
            num1 = rand.Next(1, 101);
        }

        private void Calculatebtn_Click(object sender, EventArgs e)
        {
            //Checks to see if Inputtxb is an int and if so output the data as the variable add
            if (int.TryParse(Inputtxb.Text, out int guess))
            {
                //Checks to see if add is equal to num1 plus num 2
                if (guess < num1)
                {
                    //Displays a label showing the user they are under
                    Outputlbl.Text = ("Too low, try again");
                    counter++;
                }
                else if (guess == num1)
                {
                    //Displays a label showing the user they are correct
                    Outputlbl.Text = ("Congratulations! You Win! It took " + counter + " tries");
                    counter = 0;
                    num1 = rand.Next(1, 101);
                }
                else if (guess > num1)
                {
                    //Displays a label showing the user they are over
                    Outputlbl.Text = ("Too high, try again");
                    counter++;
                }
            }
            else
            {
                //Displays a window error that the value must be a whole number
                string message = "Value must be a whole number.";
                MessageBox.Show(message, title, buttons, icon);
            }

        }

        private void Exitbtn_Click(object sender, EventArgs e)
        {
            //Closes the program
            this.Close();
        }
    }
}

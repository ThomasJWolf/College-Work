/* 
Thomas Wolf
9/3/23
Charge Account Validation
*/
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_7._3
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

        private void Searchntn_Click(object sender, EventArgs e)
        {
            // Create an list to hold items read from the file.
            List<int> accountNumbers = new List<int>();

            try{

                // Declare a StreamReader variable.
                StreamReader inputFile;
                
                // Open the file and get a StreamReader object.
                inputFile = File.OpenText("ChargeAccounts.txt");

                // Read the file's contents into the array.
                while (!inputFile.EndOfStream)
                {
                    int number = int.Parse(inputFile.ReadLine());
                    accountNumbers.Add(number);
                }

                    // Close the file.
                    inputFile.Close();

            }
            catch (Exception ex)
            {
                // Display an error message.
                MessageBox.Show(ex.Message);
            }


            if (accountNumbers.Count > 0)
            {

                //Checks to see if Inputtxb is a double
                if (int.TryParse(Inputtxb.Text, out int input))
                {
                    //Checks to see if input 7 digits
                    if (input > 999999 && input < 10000000){

                        //Sets bool to false and iterates over accountNumbers
                        bool found = false;
                        for (int i = 0; i < accountNumbers.Count; i++)
                        {
                            //Checks to see if input is equal to the index of accountNumbers
                            if (accountNumbers[i] == input)
                            {
                                //Displays a window stating that the user got it correct
                                string message = "Correct! The number " + input + " is in the system";
                                MessageBox.Show(message, "Success!", buttons, MessageBoxIcon.None);
                                found = true;
                                break;
                            }
                        }

                        if (!found)
                        {
                            //Displays a window error that the value is not in the system
                            string message = "The number is not in the system";
                            MessageBox.Show(message, title, buttons, icon);
                        }
                    }
                    else
                    {
                        //Displays a window error that the value is not within 7 digits
                        string message = "The number is not within 7 digits";
                        MessageBox.Show(message, title, buttons, icon);
                    }
                }
                else
                {
                    //Displays a window error that the value is not within 7 digits
                    string message = "There must be a whole number in the box";
                    MessageBox.Show(message, title, buttons, icon);
                }
            }
        }
    }
}

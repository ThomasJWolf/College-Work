/*
Thomas Wolf
9/10/23
Name Search
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

namespace Wolf_7._6
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

        List<string> boyNames = new List<string>();
        
        List<string> girlNames = new List<string>();

        private void Findbtn_Click(object sender, EventArgs e)
        {
            if (boyNames.Count == 0)
            {
                ImportFileBoy();
            }

            if (girlNames.Count == 0)
            {
                ImportFileGirl();
            }


            //Checks to see if BoyNametxb is empty
            if (BoyNametxb.Text != "")
            {
                //Sets names to BoyNametxb
                var names = BoyNametxb.Text;
                //Checks to see if names is only letters
                if (names.All(Char.IsLetter) == true)
                {
                    //Converts names to all lowercase
                    names = names.ToLower();
                    //Sets bool to false and iterates over boyNames
                    bool found = false;
                    for (int i = 0; i < boyNames.Count; i++)
                    {
                        //Checks to see if input is equal to the index of boyNames
                        if (boyNames[i] == names)
                        {
                            //Changes BoyNameOutlbl to show that the name is in the list
                            BoyNameOutlbl.Text = "That name is among the most popular!";
                            found = true;
                            break;
                        }
                    }

                    if (!found)
                    {
                        //Changes BoyNameOutlbl to show that the name is not in the list
                        BoyNameOutlbl.Text = "Sorry, that name is not among the most popular";
                    }
                }
                else
                {
                    //Changes BoyNameOutlbl to show an error that there needs to be only letters
                    BoyNameOutlbl.Text = "ERROR: The name must be only letters";
                }
            }
            else
            {
                //Changes BoyNameOutlbl to show nothing when the text box is empty, because you can do boys or girls or both
                BoyNameOutlbl.Text = "";
            }


            //Checks to see if GirlNametxb is empty
            if (GirlNametxb.Text != "")
            {
                //Sets names to GirlNametxb
                var names = GirlNametxb.Text;
                //Checks to see if names is only letters
                if (names.All(Char.IsLetter) == true)
                {
                    //Converts names to all lowercase
                    names = names.ToLower();
                    //Sets bool to false and iterates over girlNames
                    bool found = false;
                    for (int i = 0; i < girlNames.Count; i++)
                    {
                        //Checks to see if input is equal to the index of girlNames
                        if (girlNames[i] == names)
                        {
                            //Changes GirlNameOutlbl to show that the name is in the list
                            GirlNameOutlbl.Text = "That name is among the most popular!";
                            found = true;
                            break;
                        }
                    }

                    if (!found)
                    {
                        //Changes GirlNameOutlbl to show that the name is not in the list
                        GirlNameOutlbl.Text = "Sorry, that name is not among the most popular";
                    }
                }
                else
                {
                    //Changes GirlNameOutlbl to show an error that there needs to be only letters
                    GirlNameOutlbl.Text = "ERROR: The name must be only letters";
                }
            }
            else
            {
                //Changes GirlNameOutlbl to show nothing when the text box is empty, because you can do boys or girls or both
                GirlNameOutlbl.Text = "";
            }

        }
        private void ImportFileBoy()
        {
            // Create an list to hold items read from the file.
            try
            {

                // Declare a StreamReader variable.
                StreamReader inputFile;

                // Open the file and get a StreamReader object.
                inputFile = File.OpenText("BoyNamess.txt");

                // Read the file's contents into the array.
                while (!inputFile.EndOfStream)
                {
                    string name = inputFile.ReadLine();
                    name = name.ToLower();
                    boyNames.Add(name);
                }

                // Close the file.
                inputFile.Close();

            }
            catch (Exception ex)
            {
                // Display an error message.
                MessageBox.Show(ex.Message);
            }
        }

        private void ImportFileGirl()
        {
            // Create an list to hold items read from the file.
            try
            {

                // Declare a StreamReader variable.
                StreamReader inputFile;

                // Open the file and get a StreamReader object.
                inputFile = File.OpenText("GirlNames.txt");

                // Read the file's contents into the array.
                while (!inputFile.EndOfStream)
                {
                    string name = inputFile.ReadLine();
                    name = name.ToLower();
                    girlNames.Add(name);
                }

                // Close the file.
                inputFile.Close();

            }
            catch (Exception ex)
            {
                // Display an error message.
                MessageBox.Show(ex.Message);
            }
        }

        private void Resetbtn_Click(object sender, EventArgs e)
        {
            BoyNametxb.Text = string.Empty;
            GirlNametxb.Text = string.Empty;
            BoyNameOutlbl.Text = string.Empty;
            GirlNameOutlbl.Text = string.Empty;
        }
    }
}

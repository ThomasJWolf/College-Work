/* Thomas Wolf
 * 11/26/23
 * Employee Information
 * MainForm.cs */
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_11._1
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }

        //Creates variables for the error message boxes
        string title = "Error";
        MessageBoxButtons buttons = MessageBoxButtons.OK;
        MessageBoxIcon icon = MessageBoxIcon.Error;

        private void Submitbtn_Click(object sender, EventArgs e)
        {
            string name = "";
            //Checks if there is an string in Nametbx and if there is not error out
            if (string.IsNullOrWhiteSpace(Nametbx.Text))
            {
                //Displays a window error that the input is invalid
                string message = "Invalid name: input is invalid";
                MessageBox.Show(message, title, buttons, icon);
                return;
            }

            //And if so make it name
            else
            {
                name = Nametbx.Text;
            }
                

            //Checks if there is an int in Numbertxb and if there is make it number
            if (int.TryParse(Numbertxb.Text, out int number))
            { } 

            //And if not error out
            else
            {                
                //Displays a window error that the input is invalid
                string message = "Invalid number: input is invalid";
                MessageBox.Show(message, title, buttons, icon);
                return;
            }

            //Checks to see which selection ShiftNumcbx has
            string shift = "";
            if (ShiftNumcbx.SelectedIndex == 0)
            {
                shift = "1 (day)";
            }
            else if (ShiftNumcbx.SelectedIndex == 1)
            {
                shift = "2 (night)";
            }
            else
            {
                //Displays a window error that a option needs to be picked
                string message = "Invalid shift: please pick one";
                MessageBox.Show(message, title, buttons, icon);
                return;
            }

            //Checks if there is an decimal in Paytxb and if there is make it pay
            if (decimal.TryParse(Paytxb.Text, out decimal pay))
            { }

            //And if not error out
            else
            {
                //Displays a window error that the input is invalid
                string message = "Invalid pay rate: input is invalid";
                MessageBox.Show(message, title, buttons, icon);
                return;
            }

            //Creates the class worker with all of the variables
            ProductionWorker worker = new ProductionWorker(name, number, shift, pay);

            //Creates an instance of OutputForm and passes the worker data
            OutputForm outputForm = new OutputForm();
            outputForm.SetEmployeeData(worker);
            outputForm.Show();
        }
    }
}

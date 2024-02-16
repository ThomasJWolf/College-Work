//Thomas Wolf//
//5/28/23//
//Stadium Seating//
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_3._14
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void Calculatebtn_Click(object sender, EventArgs e)
        {
            //Defines the cost of each class
            var classA = 15;
            var classB = 12;
            var classC = 9;
            //Creates a try catch so no there are no errors for misinputs
            try
            {
                //Sets the 3 inputs to respective variables as double
                var classAStr = double.Parse(ClassAInputtxb.Text) * classA;
                var classBStr = double.Parse(ClassBInputtxb.Text) * classB;
                var classCStr = double.Parse(ClassCInputtxb.Text) * classC;
                //Creates a total of the 3 inputs
                var totalStr = classAStr + classBStr + classCStr;
                //Creates 4 new variables for the 3 inputs and total to be set to strings
                var classADub = classAStr.ToString("C");
                var classBDub = classBStr.ToString("C");
                var classCDub = classCStr.ToString("C");
                var totalDub = totalStr.ToString("C");
                //Displaus the 3 inputs and total to there respective labels
                ClassAResultlbl.Text = classADub;
                ClassBResultlbl.Text = classBDub;
                ClassCResultlbl.Text = classCDub;
                TotalResultlbl.Text = totalDub;

            }
            catch
            {
                //Shows a message box telling the user they have inputed invalid data
                MessageBox.Show("ERROR: Invalid or missing data in text fields");
            }

        }

        private void Clearbtn_Click(object sender, EventArgs e)
        {
            //Sets all of the text inputs and lable outputs to an empty string
            ClassAInputtxb.Text =  string.Empty;
            ClassBInputtxb.Text = string.Empty;
            ClassCInputtxb.Text = string.Empty;
            ClassAResultlbl.Text = string.Empty;
            ClassBResultlbl.Text = string.Empty;
            ClassCResultlbl.Text = string.Empty;
            TotalResultlbl.Text = string.Empty;
        }

        private void Exitbtn_Click(object sender, EventArgs e)
        {
            //Exits the program
            this.Close();
        }

    }
}

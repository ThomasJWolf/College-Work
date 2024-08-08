/* 
 * Thomas Wolf
 * 2/25/24
 * List Manipulator
*/
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;

namespace Wolf_13._1
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

        // Loads the text file when the program starts
        private void Form1_Load(object sender, EventArgs e)
        {
            string filePath = "random.txt";

            try
            {
                // Reads all lines from the file and convert them to ints
                List<int> numbers = File.ReadAllLines(filePath).Select(int.Parse).ToList();

                // Displays these values in the ListBox
                NumbersLbx.Items.Clear(); // Clears existing items
                foreach (var index in numbers)
                {
                    NumbersLbx.Items.Add(index);
                }

            }
            catch (Exception)
            {
                // Handles exceptions such as FileNotFound, FormatException, etc.
                string message = "ERROR: File Not Found";
                MessageBox.Show(message, title, buttons, icon);
            }
        }

        private void NoNegativebtn_Click(object sender, EventArgs e)
        {
            string filePath = "random.txt"; // Adjust the path as necessary

            try
            {
                // Reads all lines from the file and convert them to ints
                List<int> numbers = File.ReadAllLines(filePath).Select(int.Parse).ToList();

                // Removes all negative numbers
                numbers.RemoveAll(n => n < 0);

                // Displays these values in the ListBox
                NumbersLbx.Items.Clear(); // Clears existing items
                foreach (var index in numbers)
                {
                    NumbersLbx.Items.Add(index);
                }

            }
            catch (Exception)
            {
                // Handles exceptions such as FileNotFound, FormatException, etc.
                string message = "ERROR: File Not Found";
                MessageBox.Show(message, title, buttons, icon);
            }
        }

        private void OneToTenbtn_Click(object sender, EventArgs e)
        {
            string filePath = "random.txt"; // Adjust the path as necessary

            try
            {
                // Reads all lines from the file and convert them to ints
                List<int> numbers = File.ReadAllLines(filePath).Select(int.Parse).ToList();

                // Finds all values within the range of 1 through 10
                List<int> range1To10 = numbers.FindAll(n => n >= 1 && n <= 10);

                // Displays these values in the ListBox
                NumbersLbx.Items.Clear(); // Clears existing items
                foreach (var number in range1To10)
                {
                    NumbersLbx.Items.Add(number);
                }

            }
            catch (Exception)
            {
                // Handles exceptions such as FileNotFound, FormatException, etc.
                string message = "ERROR: File Not Found";
                MessageBox.Show(message, title, buttons, icon);
            }
        }
    }
}

//Thomas Wolf
//6/26/2023
//Calories Burned
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_5._6
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        //Sets ocean_level to 99, increase to 1.9, and year to 2024
        double ocean_level = 99; //as of 6/26/2023
        double increase = 1.5;
        int year = 2024;
        int years = 10;

        private void Form1_Load(object sender, EventArgs e)
        {
            //Clears the ListBox before the form loads
            Outputltb.Text = string.Empty;
        }

        private void Calculatebtn_Click(object sender, EventArgs e)
        {
            //Runs a loop until i, which is equal to year, is equal to year plus years, with i increasing by 1 every iteration
            for (int i = year; i < (year + years); i++)
            {
                //Adds increase to ocean level
                ocean_level += increase;
                //Sets Outputlbl to the year and the ocean level for that year
                Outputltb.Items.Add("The ocean level in " + i.ToString() + " will be " + ocean_level.ToString() + " mm");
            }
        }

        private void Exitbtn_Click(object sender, EventArgs e)
        {
            //Closes the program
            this.Close();
        }
    }
}

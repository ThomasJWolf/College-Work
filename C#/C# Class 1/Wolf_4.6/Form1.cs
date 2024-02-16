//Thomas Wolf
//6/4/23
//Book Club Points
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_4._6
{
    public partial class Form1 : Form
    {
        
        public Form1()
        {
            InitializeComponent();
        }
        string points = "";

        //Checks to see if Radio Button 0's status has changed
        private void Book0rdb_CheckedChanged(object sender, EventArgs e)
        {
            //Checks to see if Radio Button 0 has been selected 
            if (Book0rdb.Checked)
            {
                //Sets points to what the user earned and displays to the label
                points = "0";
                Displaylbl.Text = "You have earned " + points + " points";
            }
        }
        //Checks to see if Radio Button 1's status has changed
        private void Book1rdb_CheckedChanged(object sender, EventArgs e)
        {
            //Checks to see if Radio Button 1 has been selected 
            if (Book1rdb.Checked)
            {
                //Sets points to what the user earned and displays to the label
                points = "5";
                Displaylbl.Text = "You have earned " + points + " points";
            }
        }
        //Checks to see if Radio Button 2's status has changed 
        private void Book2rdb_CheckedChanged(object sender, EventArgs e)
        {
            //Checks to see if Radio Button 2 has been selected 
            if (Book2rdb.Checked)
            {
                //Sets points to what the user earned and displays to the label
                points = "15";
                Displaylbl.Text = "You have earned " + points + " points";
            }
        }
        //Checks to see if Radio Button 3's status has changed
        private void Book3rdb_CheckedChanged(object sender, EventArgs e)
        {
            //Checks to see if Radio Button 3 has been selected 
            if (Book3rdb.Checked)
            {
                //Sets points to what the user earned and displays to the label
                points = "30";
                Displaylbl.Text = "You have earned " + points + " points";
            }
        }
        //Checks to see if Radio Button 4's status has changed
        private void Book4rdb_CheckedChanged(object sender, EventArgs e)
        {
            //Checks to see if Radio Button 4 has been selected 
            if (Book4rdb.Checked)
            {
                //Sets points to what the user earned and displays to the label
                points = "60";
                Displaylbl.Text = "You have earned " + points + " points";
            }
        }
        //Exits the program when clicked
        private void Exitbtn_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}

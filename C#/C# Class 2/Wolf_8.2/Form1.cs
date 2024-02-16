/*
    Thomas Wolf
    9/17/23
    Word Counter
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

namespace Wolf_8._2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Inputtxb_TextChanged(object sender, EventArgs e)
        {
            //Gets the inputed text
            string text = Inputtxb.Text;
            //Creates word_count and letter_count set to 0
            var word_count = 0;
            var letter_count = 0;
            //Set last_digit to a space
            var last_digit = " ";
            //for the length of the string
            for (int i = 0; i < text.Length; i++) 
            {
                //Adds the current digit of the string to digit
                string digit = text[i].ToString();
                //if digit is a space
                if (digit == " ")
                {
                    //if the last digit was not a space, this is to make the count only go up when a new word is typed, not just a space
                    if (last_digit != " ")
                    {
                        //add 1 to word count
                        word_count++;
                        //Outputs the average number of letters
                        AvgOutputlbl.Text = "Average number of letters: " + ((letter_count/word_count).ToString());

                    }
                } else {
                    //Adds 1 to the letter count
                    letter_count++;
                }
                //Sets last_digit to the current digit
                last_digit = text[i].ToString();
            }
            //Outputs the number of words
            NumOutputlbl.Text = "Number of words: " + word_count.ToString();
        }
    }
}

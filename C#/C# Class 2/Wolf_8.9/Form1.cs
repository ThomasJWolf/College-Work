/*
    Thomas Wolf
    9/24/23
    Alphabetic Telephone Number Translator
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
using static System.Net.Mime.MediaTypeNames;

namespace Wolf_8._9
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            var broken = false;
            string new_phone = "";
            //for the length of the string
            string phone = Inputtxb.Text;
            //Lowers the phone variable
            phone = phone.ToLower();
            if (phone.Length == 12)
            {
                for (int i = 0; i < phone.Length; i++)
                {
                    //Adds the current digit of the string to digit
                    string digit = phone[i].ToString();
                    //Checks to see if the digit corresponds with the letter or number, and if so it adds it to the new number
                    if (digit == "-") 
                    {
                        new_phone += "-";
                    }
                    else if (digit == "1")
                    {
                        new_phone += "1";
                    }
                    else if (digit == "a" || digit == "b" || digit == "c" || digit == "2")
                    {
                        new_phone += "2";
                    }
                    else if (digit == "d" || digit == "e" || digit == "f" || digit == "3")
                    {
                        new_phone += "3";
                    }
                    else if (digit == "g" || digit == "h" || digit == "i" || digit == "4")
                    {
                        new_phone += "4";
                    }
                    else if (digit == "j" || digit == "k" || digit == "l" || digit == "5")
                    {
                        new_phone += "5";
                    }
                    else if (digit == "m" || digit == "n" || digit == "o" || digit == "6")
                    {
                        new_phone += "6";
                    }
                    else if (digit == "p" || digit == "q" || digit == "r" || digit == "s" || digit == "7")
                    {
                        new_phone += "7";
                    }
                    else if (digit == "t" || digit == "u" || digit == "v" || digit == "8")
                    {
                        new_phone += "8";
                    }
                    else if (digit == "w" || digit == "x" || digit == "y" || digit == "z" || digit == "9")
                    {
                        new_phone += "9";
                    }
                    else if (digit == "0")
                    {
                        new_phone += "0";
                    }
                    else
                    {
                        //Sets broken to true
                        broken = true;
                    }

                }
                if (broken == false)
                {
                    //Sets the output var to the translated number
                    NumOutputlbl.Text = "Result: " + new_phone;
                }
                else 
                {
                    //Changes NumOutputlbl to show an error that it needs to be only numbers, letters, or dashs
                    NumOutputlbl.Text = "ERROR: Must be a number, letter, or dash";
                }
                
            } 
            else
            {
                //Changes NumOutputlbl to show an error that there needs to be 12 characters in (xxx-xxx-xxxx)
                NumOutputlbl.Text = "ERROR: Must be (xxx-xxx-xxxx)";
            }
        }
    }
}

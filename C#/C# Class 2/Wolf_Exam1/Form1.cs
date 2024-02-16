/* Thomas Wolf
 * 10/1/23
 * Encryption */
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
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Wolf_Exam1
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
        // Create an list to hold items read from the file.
        List<string> lyrics = new List<string>();

        private void Form1_Load(object sender, EventArgs e)
        {
            try
            {

                // Declare a StreamReader variable.
                StreamReader inputFile;

                // Open the file and get a StreamReader object.
                inputFile = File.OpenText("hhlyrics.txt");

                // Read the file's contents into the array.
                while (!inputFile.EndOfStream)
                {
                    string letter = inputFile.ReadLine();
                    lyrics.Add(letter);
                }

                // Close the file.
                inputFile.Close();

            }
            catch (Exception ex)
            {
                // Display an error message.
                MessageBox.Show(ex.Message);
                Close();
            }
        }

        private void letterbtn_Click(object sender, EventArgs e)
        {
            if (inouttxb.Text.Length == 1)
            {
                //Makes a count var and a string var
                int count = 0;
                string letter = inouttxb.Text;
                //Iterates over the lines in lyrics
                for (int line = 0; line < lyrics.Count; line++)
                {
                    //Iterates over the letters in the lines in lyrics
                    for (int i = 0; i < lyrics[line].Length; i++)
                    {
                        //Checks to see if input is equal to the index of lyrics
                        if (letter == lyrics[line][i].ToString())
                        {
                            //Keeps a count of the amount of letters
                            count++;
                        }
                    }

                }
                if (count > 0)
                {
                    //Outputs the number of times the letter showed up
                    inouttxb.Text = "The letter '" + letter + "' showed up " + count + " times";
                }
                else
                {
                    //Outputs if there were no letters
                    inouttxb.Text = "The letter '" + letter + "' is not in the file";
                }
            }
            else
            {
                //Displays a window error there must only one letter in the box
                string message = "There must only one letter in the box";
                MessageBox.Show(message, title, buttons, icon);
                inouttxb.Text = "";
            }
        }

        private void encryptbtn_Click(object sender, EventArgs e)
        {
            //Creates a new_lyrics var
            string new_lyrics = "";
            //Iterates over the lines in lyrics
            for (int line = 0; line < lyrics.Count; line++)
            {
                //Iterates over the letters in the lines in lyrics
                for (int i = 0; i < lyrics[line].Length; i++)
                {
                    //Adds the current letter of the string to letter
                    string letter = lyrics[line][i].ToString();
                    //Checks to see if the letter corresponds with the letter, and if so it adds the new letter to new_lyrics
                    if (letter == "a")
                    {
                        new_lyrics += "z";
                    }
                    else if (letter == "A")
                    {
                        new_lyrics += "Z";
                    }
                    else if (letter == "d")
                    {
                        new_lyrics += "w";
                    }
                    else if (letter == "D")
                    {
                        new_lyrics += "W";
                    }
                    else if (letter == "h")
                    {
                        new_lyrics += "t";
                    }
                    else if (letter == "H")
                    {
                        new_lyrics += "T";
                    }
                    else if (letter == "k")
                    {
                        new_lyrics += "r";
                    }
                    else if (letter == "K")
                    {
                        new_lyrics += "R";
                    }
                    else if (letter == "m")
                    {
                        new_lyrics += "p";
                    }
                    else if (letter == "M")
                    {
                        new_lyrics += "P";
                    }
                    else if (letter == "o")
                    {
                        new_lyrics += "n";
                    }
                    else if (letter == "O")
                    {
                        new_lyrics += "N";
                    }
                    else if (letter == "s")
                    {
                        new_lyrics += "j";
                    }
                    else if (letter == "S")
                    {
                        new_lyrics += "J";
                    }
                    else if (letter == "x")
                    {
                        new_lyrics += "e";
                    }
                    else if (letter == "X")
                    {
                        new_lyrics += "E";
                    }
                    else
                    {
                        new_lyrics += letter;
                    }
                }
                //Adds a new line to new_lyrics
                new_lyrics += "\r\n";
            }

            //Sets the output var to the translated lyrics
            inouttxb.Text = new_lyrics;
        }
    }
}
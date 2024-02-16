/*
    Thomas Wolf
    10/22/23
    Name and Email Finder
*/
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_9._10
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        //A dictionary to store names as keys and their corresponding emails as values.
        Dictionary<string, string> names = new Dictionary<string, string>
        {
            {"John Doe", "john.doe@example.com"},
            {"Jane Smith", "jane.smith@example.com"},
            {"Alice Johnson", "alice.johnson@example.com"},
            {"Bob Brown", "bob.brown@example.com"}
        };

        //This method checks if the given string (usually a name) consists only of letters and spaces.
        //A method to check if a given string contains only letters and spaces.
        private bool IsAllLetters(string input)
        {
            return Regex.IsMatch(input, @"^[a-zA-Z\s]+$");
        }

        //A method to clear all the textboxes in the form.
        private void Clear()
        {
            Lookuptxb.Clear();
            Deletetxb.Clear();
            AddNametxb.Clear();
            AddEmailtxb.Clear();
            UpdateNametxb.Clear();
            UpdateEmailtxb.Clear();
        }

        //A Event handler for when the 'Lookup' button is clicked.
        private void Lookupbtn_Click(object sender, EventArgs e)
        {
            //Checks if the entered name contains only letters and spaces.
            if (IsAllLetters(Lookuptxb.Text))
            {
                //Try to get the email for the entered name. If found, display it.
                if (names.TryGetValue(Lookuptxb.Text, out string email))
                {
                    Outputlbl.Text = $"{Lookuptxb.Text}'s email is {email}";
                    Clear();
                }
                else
                {
                    //If the name isn't in the dictionary, inform the user.
                    Outputlbl.Text = $"{Lookuptxb.Text}'s email is not found in the dictionary.";
                    Clear();
                }
            }
            else
            {
                //If the entered name isn't valid, show an error message.
                Outputlbl.Text = "Please enter a valid name containing only letters.";
                Clear();
            }
        }

        //A Event handler for when the 'Delete' button is clicked.
        private void Deletebtn_Click(object sender, EventArgs e)
        {
            //Checks if the entered name is valid.
            if (IsAllLetters(Deletetxb.Text))
            {
                //If the name exists in the dictionary, remove it.
                if (names.ContainsKey(Deletetxb.Text))
                {
                    names.Remove(Deletetxb.Text);
                    Outputlbl.Text = $"{Deletetxb.Text} and their email has been removed from the dictionary.";
                    Clear();
                }
                else
                {
                    //If the name isn't in the dictionary, inform the user.
                    Outputlbl.Text = $"{Deletetxb.Text} was not found in the dictionary.";
                    Clear();
                }
            }
            else
            {
                //If the entered name isn't valid, show an error message.
                Outputlbl.Text = "Please enter a valid name containing only letters.";
                Clear();
            }
        }

        //A Event handler for when the 'Add' button is clicked.
        private void Addbtn_Click(object sender, EventArgs e)
        {
            //First, validate the name.
            if (IsAllLetters(AddNametxb.Text))
            {
                //If the name isn't already in the dictionary, add it.
                if (!names.ContainsKey(AddNametxb.Text))
                {
                    names.Add(AddNametxb.Text, AddEmailtxb.Text);
                    Outputlbl.Text = $"{AddNametxb.Text} has been added to the dictionary.";
                    Clear();
                }
                else
                {
                    //If the name already exists, inform the user.
                    Outputlbl.Text = $"{AddNametxb.Text} already exists in the dictionary.";
                    Clear();
                }
            }
            else
            {
                //If the entered name or email isn't valid, show an error message.
                Outputlbl.Text = "Please enter a valid name and email.";
                Clear();
            }
        }

        //A Event handler for when the 'Update' button is clicked.
        private void Updatebtn_Click(object sender, EventArgs e)
        {
            //First, validate the name.
            if (IsAllLetters(UpdateNametxb.Text))
            {
                //If the name exists in the dictionary, update its email.
                if (names.ContainsKey(UpdateNametxb.Text))
                {
                    names[UpdateNametxb.Text] = UpdateEmailtxb.Text;
                    Outputlbl.Text = $"{UpdateNametxb.Text}'s email has been updated.";
                    Clear();
                }
                else
                {
                    //If the name isn't in the dictionary, inform the user.
                    Outputlbl.Text = $"{UpdateNametxb.Text} was not found in the dictionary.";
                    Clear();
                }
            }
            else
            {
                //If the entered name or email isn't valid, show an error message.
                Outputlbl.Text = "Please enter a valid name and email.";
                Clear();
            }
        }

    }
}

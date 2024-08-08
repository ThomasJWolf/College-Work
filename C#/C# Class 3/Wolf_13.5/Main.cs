/* 
 * Thomas Wolf
 * 3/3/24
 * Dow Jones Industrial Average Highs
 * Main.cs
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

namespace Wolf_13._5
{
    public partial class Main : Form
    {
        public Main()
        {
            InitializeComponent();
        }

        //Creates variables for the error message boxes
        string title = "Error";
        MessageBoxButtons buttons = MessageBoxButtons.OK;
        MessageBoxIcon icon = MessageBoxIcon.Error;

        // Creates a list of DJIA objects
        List<DJIA> djiaList = new List<DJIA>();

        private void Form1_Load(object sender, EventArgs e)
        {
            // Imports the DJIA data from a csv file
            string[] lines = System.IO.File.ReadAllLines("DJIA.csv");
            // Calls the DJIA class with each line of the csv file
            foreach (string line in lines)
            {
                string[] data = line.Split(',');
                string[] date = data[0].Split('-');
                djiaList.Add(new DJIA(int.Parse(date[0]), date[1], int.Parse(date[2]), double.Parse(data[1]), double.Parse(data[2]), double.Parse(data[3]), double.Parse(data[4])));
            }
        }

        // This is to keep the month name in the file, as given, and still be able to sort by month
        public class MonthNameComparer : IComparer<string>
        {
            private static readonly Dictionary<string, int> MonthOrder = new Dictionary<string, int>
                {
                    {"Jan", 1}, {"Feb", 2}, {"Mar", 3}, {"Apr", 4}, {"May", 5}, {"Jun", 6},
                    {"Jul", 7}, {"Aug", 8}, {"Sep", 9}, {"Oct", 10}, {"Nov", 11}, {"Dec", 12}
                };

            public int Compare(string x, string y)
            {
                return MonthOrder[x].CompareTo(MonthOrder[y]);
            }
        }

        private void FirstClosingGreaterbtn_Click(object sender, EventArgs e)
        {
            if (double.TryParse(textBox1.Text, out double value))
            {
                try
                {
                    // Sorts and display The first date that the closing value was at a specified value, or greater.
                    var query = djiaList
                        .Where(x => Convert.ToDouble(x.ClosingValue) <= value)
                        .OrderBy(x => int.Parse(x.Year))
                        .ThenBy(x => x.Month, new MonthNameComparer())
                        .ThenBy(x => int.Parse(x.Day))
                        .First();

                    Outputlbx.Items.Clear();
                    Outputlbl.Text = ("The first date that the closing value was at or above " + value + ":");
                    Outputlbx.Items.Add(query.Month + " " + query.Day + ", 20" + query.Year);
                }
                catch
                {
                    // Tells the user that the value is too low
                    string message = "ERROR: Value too low";
                    MessageBox.Show(message, title, buttons, icon);
                }
            } 
            else
            {
                // Tells the user that the value was not a number
                string message = "ERROR: Please enter a number";
                MessageBox.Show(message, title, buttons, icon);
            }
        }

        private void AllClosingGreaterbtn_Click(object sender, EventArgs e)
        {
            if (double.TryParse(textBox1.Text, out double value))
            {
                try
                {
                    // Filters and sort all dates where the closing value was at or above the specified value.
                    var query = djiaList
                        .Where(x => Convert.ToDouble(x.ClosingValue) <= value)
                        .OrderBy(x => int.Parse(x.Year))
                        .ThenBy(x => x.Month, new MonthNameComparer())
                        .ThenBy(x => int.Parse(x.Day))
                        .ToList();
                    // Checks if there are any results
                    if (query.Any()) 
                    {
                        Outputlbl.Text = "All dates when the closing value was at or above " + value + ":";

                        // Clears existing items in the list box before adding new ones
                        Outputlbx.Items.Clear();

                        foreach (var item in query)
                        {
                            // Adds each date to the list box
                            Outputlbx.Items.Add(item.Month + " " + item.Day + ", 20" + item.Year);
                        }
                    }
                    else
                    {
                        // Tells the user that there are no results
                        string message = "ERROR: No values found";
                        MessageBox.Show(message, title, buttons, icon);
                    }
                }
                catch (Exception ex) // Catch more specific exceptions if possible
                {
                    // Tells the user that the value was not a number
                    MessageBox.Show(ex.Message, title, buttons, icon);
                }
            }
            else
            {
                // Tells the user that the value was not a number
                string message = "ERROR: Please enter a number";
                MessageBox.Show(message, title, buttons, icon);
            }
        }
    }
}

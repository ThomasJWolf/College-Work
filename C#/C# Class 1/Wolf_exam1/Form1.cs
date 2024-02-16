//Thomas Wolf
//6/18/23
//Checkout
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_exam1
{ 
        public partial class Checkout : Form
    {
        public Checkout()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void Calculatebtn_Click(object sender, EventArgs e)
        {
            //Checks to see if Quantitytxb is an int and if so output the data as the variable quantity
            if (int.TryParse(Quantitytxb.Text, out int quantity))
            {
                //Checks to see if quantity is between 1 and 11
                if ((quantity >= 0) && quantity <= 11)
                {
                    //Checks to see if Pricetxb is an int and if so output the data as the variable dimes
                    if (double.TryParse(Pricetxb.Text, out double price))
                    {
                        if (price > 0)
                        {
                            //Checks to see if Budgettxb is an int and if so output the data as the variable quarters
                            if (double.TryParse(Budgettxb.Text, out double budget))
                            {
                                if (budget > 0)
                                {
                                    //Rounds all of the numbers
                                    price = Math.Round(price, 2, MidpointRounding.AwayFromZero);
                                    budget = Math.Round(budget, 2, MidpointRounding.AwayFromZero);
                                    //Calculates the total by multiplying price and quantity
                                    double total = price * quantity;
                                    //Outputs name, quantity, price, and total to there respective labels
                                    NameOutlbl.Text = Nametxb.Text;
                                    QuantityOutlbl.Text = quantity.ToString();
                                    PriceOutlbl.Text = price.ToString("c");
                                    TotalOutlbl.Text = total.ToString("c");
                                    //Checks if total is less than budget
                                    if (total < budget)
                                    {
                                        //Outputs the budget and how under you are
                                        BudgetOutlbl.Text = "You were under your budget of " + budget.ToString("c") + " by $" + (budget - total);
                                    }
                                    //Checks if total is one
                                    else if (total == 1)
                                    {
                                        //Outputs the budget and that you are exactly on
                                        BudgetOutlbl.Text = "You were exactly on your budget of " + budget.ToString("c");
                                    }
                                    //Checks if total is more than one
                                    else if (total > budget)
                                    {
                                        //Outputs the budget and how over you are
                                        BudgetOutlbl.Text = "You were over your budget of " + budget.ToString("c") + " by $" + (total - budget);
                                    }
                                }
                                else
                                {
                                    //Tells the user they have entered a value below 0 for budget
                                    MessageBox.Show("Invalid value for budget, must be above 0");
                                }
                            }
                            else
                            {
                                //Tells the user they have entered an invalid value for budget
                                MessageBox.Show("Invalid value for budget, must be a number");
                            }
                        }
                        else
                        {
                            //Tells the user they have entered a value below 0 for price
                            MessageBox.Show("Invalid value for price, must be above 0");
                        }
                    }
                    else
                    {
                        //Tells the user they have entered an invalid value for price
                        MessageBox.Show("Invalid value for price, must be a number");
                    }
                }
                else
                {
                    //Tells the user they have entered a value below 0 or above 11 for quantity
                    MessageBox.Show("Invalid value for quantity, must be between 0 and 11");
                }
            }
            else
            {
                //Tells the user they have entered an invalid value for quantity
                MessageBox.Show("Invalid value for quantity, must be a whole number");
            }
        }

        private void Resetbtn_Click(object sender, EventArgs e)
        {
            //Resets all of the modifiable text box's and label's
            Nametxb.Text = string.Empty;
            Quantitytxb.Text = string.Empty;
            Pricetxb.Text = string.Empty;
            Budgettxb.Text = string.Empty;
            NameOutlbl.Text = string.Empty;
            QuantityOutlbl.Text = string.Empty;
            PriceOutlbl.Text = string.Empty;
            TotalOutlbl.Text = string.Empty;
            BudgetOutlbl.Text = string.Empty;
        }

        private void Exitbtn_Click(object sender, EventArgs e)
        {
            //Closes the program
            this.Close();
        }
    }
}

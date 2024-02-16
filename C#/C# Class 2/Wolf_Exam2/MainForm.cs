/* Thomas Wolf
 * 11/12/23
 * Exam 2: Shopping cart
 * MainForm */
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_Exam2
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }

        //Creates five Product objects in a list
        List<theProducts> products = new List<theProducts>
        {
            new theProducts("HD Monitor", "24-inch, eco-friendly monitor", 159.99, 5),
            new theProducts("Wireless Earbuds", "Compact, 15-hour battery life", 59.99, 10),
            new theProducts("Mini Coffee Maker", "Portable with quick brew", 49.99, 8),
            new theProducts("Mesh Desk Chair", "Breathable fabric, basic adjustments", 89.99, 12),
            new theProducts("Basic Fitness Tracker", "Steps and sleep monitoring", 39.99, 10)
        };

        //Creates variables for the error message boxes
        string title = "Error";
        MessageBoxButtons buttons = MessageBoxButtons.OK;
        MessageBoxIcon icon = MessageBoxIcon.Error;


        //Creates the sub_total and done vars globally
        double sub_total = 0;
        bool done = false;

        private void MainForm_Load(object sender, EventArgs e)
        {
            //Adds each class into name into the product combobox
            foreach (var product in products)
                Productcbx.Items.Add(product.Name);
        }

        private void Productcbx_SelectedIndexChanged(object sender, EventArgs e)
        {
            //Assigns the product information to Infolbl when the combobox is changed
            Infolbl.Text = products[Productcbx.SelectedIndex].ToString();
        }

        private void Addbtn_Click(object sender, EventArgs e)
        {
            //Checks to see if Donebtn has been clicked
            if (done == false)
            {
                //Sets curIndex to the current index of Productcbx
                var curIndex = Productcbx.SelectedIndex;
                //If the combobox has something selected
                if (curIndex >= 0)
                {
                    //if the quantity is not 0
                    if (products[curIndex].Quantity != 0)
                    {
                        //Adds the price to sub_total
                        sub_total += products[curIndex].Price;
                        //Updates SubTotallbl with sub_total
                        SubTotallbl.Text = "Sub Total: $" + sub_total;
                        //Subtracts one from the index's quantity
                        products[curIndex].Quantity -= 1;
                        //Updates Infolbl
                        Infolbl.Text = products[curIndex].ToString();
                    }
                    else
                    {
                        //Displays a window error that the product is out
                        string message = "We are out of product: " + products[curIndex].Name;
                        MessageBox.Show(message, title, buttons, icon);
                    }


                }
                else
                {
                    //Displays a window error that a product needs to be selected
                    string message = "A product has to be selected from the drop down menu";
                    MessageBox.Show(message, title, buttons, icon);
                }
            }
            else
            {
                //Displays a window error that the program has ended
                string message = "The total has been calculated, please restart the program to run again";
                MessageBox.Show(message, title, buttons, icon);
            }

        }

        private void Donebtn_Click(object sender, EventArgs e)
        {
            //Sets done to true to lock Addbtn
            done = true;
            //Calculates the tax and total then outputs the tax and total
            var tax = sub_total *.11;
            Taxlbl.Text = "Tax: $" + tax.ToString();
            Totallbl.Text = "Total: $" + (sub_total + tax);
        }

        private void Restartbtn_Click(object sender, EventArgs e)
        {
            //Resets the program
            Application.Restart();
        }

    }
}

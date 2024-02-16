//Thomas Wolf
//6/4/23
//Software Sales
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Drawing.Text;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_4._7
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        //Creates the packages and discount variables as ints
        int packages = 0;
        int discount = 0;
        //Creates the constant PRICE int variable as 99
        readonly int PRICE = 99;
        private void Calculatebtn_Click(object sender, EventArgs e)
        {
            if (int.TryParse(Packagestxb.Text, out packages))
            {
                if ((packages >= 1) && (packages < 10))
                {
                    //Sets discount to 0
                    discount = 0;
                    //Sets packages to packages multiplied by price
                    packages *= PRICE;
                    //Creates a variable called packagesstr for packages as a string
                    var packagesstr = packages.ToString("c");
                    //Creates a variable called discountstr for packages as a discount
                    var discountstr = discount.ToString();
                    //Sets the string variables to there respective labels
                    SubtotalResultlbl.Text = packagesstr;
                    DiscountResultlbl.Text = discountstr + "%";
                    TotalResultlbl.Text = packagesstr;
                }
                else if ((packages >= 10) && (packages < 20))
                {
                    //Sets discount to 20
                    discount = 20;
                    //Sets packages to packages multiplied by price
                    packages *= PRICE;
                    //Creates a variable called packagesstr for packages as a string
                    var packagesstr = packages.ToString("c");
                    //Creates a variable called discountstr for packages as a discount
                    var discountstr = discount.ToString();
                    //Creates a variable called total that is packages subtracted by packages divided by the sum of 100 divided by discount
                    var total = packages - packages / (100 / discount);
                    //Creates a variable called totalstr for packages as a total
                    var totalstr = total.ToString("c");
                    //Sets the string variables to there respective labels
                    SubtotalResultlbl.Text = packagesstr;
                    DiscountResultlbl.Text = discountstr + "%";
                    TotalResultlbl.Text = totalstr;
                }
                else if ((packages >= 20) && (packages < 50))
                {
                    discount = 30;
                    //Sets packages to packages multiplied by price
                    packages *= PRICE;
                    //Creates a variable called packagesstr for packages as a string
                    var packagesstr = packages.ToString("c");
                    //Creates a variable called discountstr for packages as a discount
                    var discountstr = discount.ToString();
                    //Creates a variable called total that is packages subtracted by packages divided by the sum of 100 divided by discount
                    var total = packages - packages / (100 / discount);
                    //Creates a variable called totalstr for packages as a total
                    var totalstr = total.ToString("c");
                    //Sets the string variables to there respective labels
                    SubtotalResultlbl.Text = packagesstr;
                    DiscountResultlbl.Text = discountstr + "%";
                    TotalResultlbl.Text = totalstr;
                }
                else if ((packages >= 50) && (packages < 100))
                {
                    discount = 40;
                    //Sets packages to packages multiplied by price
                    packages *= PRICE;
                    //Creates a variable called packagesstr for packages as a string
                    var packagesstr = packages.ToString("c");
                    //Creates a variable called discountstr for packages as a discount
                    var discountstr = discount.ToString();
                    //Creates a variable called total that is packages subtracted by packages divided by the sum of 100 divided by discount
                    var total = packages - packages / (100 / discount);
                    //Creates a variable called totalstr for packages as a total
                    var totalstr = total.ToString("c");
                    //Sets the string variables to there respective labels
                    SubtotalResultlbl.Text = packagesstr;
                    DiscountResultlbl.Text = discountstr + "%";
                    TotalResultlbl.Text = totalstr;
                }
                else if (packages >= 100)
                {
                    discount = 50;
                    //Sets packages to packages multiplied by price
                    packages *= PRICE;
                    //Creates a variable called packagesstr for packages as a string
                    var packagesstr = packages.ToString("c");
                    //Creates a variable called discountstr for packages as a discount
                    var discountstr = discount.ToString();
                    //Creates a variable called total that is packages subtracted by packages divided by the sum of 100 divided by discount
                    var total = packages - packages / (100 / discount);
                    //Creates a variable called totalstr for packages as a total
                    var totalstr = total.ToString("c");
                    //Sets the string variables to there respective labels
                    SubtotalResultlbl.Text = packagesstr;
                    DiscountResultlbl.Text = discountstr + "%";
                    TotalResultlbl.Text = totalstr;
                }
                else
                {
                    MessageBox.Show("Please enter a number greater then 0");
                }
            }
            else
            {
                MessageBox.Show("Please enter a whole number");
            }
        

        }

        private void Clearbtn_Click(object sender, EventArgs e)
        {
            //Clears all of the changing labels
            Packagestxb.Text = string.Empty;
            SubtotalResultlbl.Text = string.Empty;
            DiscountResultlbl.Text = string.Empty;
            TotalResultlbl.Text = string.Empty;
    
        }

        private void Exitbtn_Click(object sender, EventArgs e)
        {
            //Closes the program
            this.Close();
        }
    }
}

/* Thomas Wolf
 * 11/5/23
 * Dorm and Meal Calculator
 * TotalForm */
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_10._6
{
    public partial class Total : Form
    {
        public Total(decimal dorm_price, decimal meal_price)
        {
            InitializeComponent();
            //Sets the total object to the sum of dorm_price and meal_price with a money formating converted to a string
            Totallbl.Text = (dorm_price + meal_price).ToString("C");
        }

    }
}

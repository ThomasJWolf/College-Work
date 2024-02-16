/* Thomas Wolf
 * 11/5/23
 * Dorm and Meal Calculator
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

namespace Wolf_10._6
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }

        //A Event handler for the GetTotalbtn's Click event
        private void GetTotalbtn_Click(object sender, EventArgs e)
        {
            /* The dictionarys are left over from me trying another way of
             * doing the program, it didn't work and it is not very scalable
             * friendly with them but the dicts still work with the code so
             * i kept them in*/

            //Creates a new dictionary for dorm pricing
            var dorms = new Dictionary<string, decimal>() {
                { "Allen Hall", 1500m },
                { "Pike Hall", 1600m },
                { "Farthing Hall", 1800m },
                { "University Suites", 2500m }
            };

            //Creates a new dictionary for meal plans
            var meals = new Dictionary<string, decimal>() {
                { "7 meals per week", 600m },
                { "14 meals per week", 1200m },
                { "Unlimited meals", 1700m }
            };

            //Initializes dorm_price variable
            decimal dorm_price = 0m;

            //Checks the selected index of Dormcbx and sets the dorm price
            if (Dormcbx.SelectedIndex == 0) 
            {
                dorm_price = dorms["Allen Hall"];
            }
            else if (Dormcbx.SelectedIndex == 1)
            {
                dorm_price = dorms["Pike Hall"];
            }
            else if (Dormcbx.SelectedIndex == 2)
            {
                dorm_price = dorms["Farthing Hall"];
            }
            else if (Dormcbx.SelectedIndex == 3)
            {
                dorm_price = dorms["University Suites"];
            }

            //Initializes meal_price variable
            decimal meal_price = 0m;

            if (Mealcbx.SelectedIndex == 0)
            {
                meal_price = meals["7 meals per week"];
            }
            else if (Dormcbx.SelectedIndex == 1)
            {
                meal_price = meals["14 meals per week"];
            }
            else if (Dormcbx.SelectedIndex == 2)
            {
                meal_price = meals["Unlimited meals"];
            }

            //Creates a Total object with the selected dorm and meal prices
            Total totalForm = new Total(dorm_price, meal_price);

            //Shows the Total form
            totalForm.Show();

        }
    }
}

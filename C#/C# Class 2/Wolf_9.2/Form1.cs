/*
    Thomas Wolf
    9/24/23
    Drink Vending Machine Simulator
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

namespace Wolf_9._2
{
    public partial class Form1 : Form
    {

        //Creates variables for the error message boxes
        string title = "Error";
        MessageBoxButtons buttons = MessageBoxButtons.OK;
        MessageBoxIcon icon = MessageBoxIcon.Error;

        //An Array to store the drink objects
        private Drink[] drinks;

        //Total sales counter
        private decimal totalSales = 0m;

        //Drink structure with Name, Cost, and Quantity fields
        public struct Drink
        {
            public string Name;
            public decimal Cost;
            public int Quantity;

            //Constructor to initialize the Drink object
            public Drink(string name, decimal cost, int quantity)
            {
                Name = name;
                Cost = cost;
                Quantity = quantity;
            }
        }

        public Form1()
        {
            InitializeComponent();
            InitializeDrinks();
            UpdateUI();
        }

        //Creates the drinks array with default values
        private void InitializeDrinks()
        {
            drinks = new Drink[5];
            drinks[0] = new Drink("Cola", 1.00m, 20);
            drinks[1] = new Drink("Root Beer", 1.00m, 20);
            drinks[2] = new Drink("Lemon Lime Soda", 1.00m, 20);
            drinks[3] = new Drink("Grape Soda", 1.50m, 20);
            drinks[4] = new Drink("Cream Soda", 1.50m, 20);
        }

        //Updates the user interface elements with current data
        private void UpdateUI()
        {
            ColaDrinksAmountlbl.Text = drinks[0].Quantity.ToString();
            RootBeerDrinksAmountlbl.Text = drinks[1].Quantity.ToString();
            LemonLimeDrinksAmountlbl.Text = drinks[2].Quantity.ToString();
            GrapeSodaDrinksAmountlbl.Text = drinks[3].Quantity.ToString();
            CreamSodaDrinksAmountlbl.Text = drinks[4].Quantity.ToString();

            TotalSalesOutputlbl.Text = totalSales.ToString("C");
        }

        //Purchases a drink and update the total sales and drink's quantity
        private void BuyDrink(int index)
        {
            if (drinks[index].Quantity > 0)
            {
                totalSales += drinks[index].Cost;
                drinks[index].Quantity--;
                UpdateUI();
            }
            else
            {
                //Displays a window error that the soda is out
                string message = "The soda is out!";
                MessageBox.Show(message, title, buttons, icon);
            }
        }

        //An Event handler for each drink's PictureBox click
        private void Colapbx_Click(object sender, EventArgs e)
        {
            BuyDrink(0);
        }

        private void RootBeerpbx_Click(object sender, EventArgs e)
        {
            BuyDrink(1);
        }

        private void LemonLimepxb_Click(object sender, EventArgs e)
        {
            BuyDrink(2);
        }

        private void GrapeSodapxb_Click(object sender, EventArgs e)
        {
            BuyDrink(3);
        }

        private void CreamSodapxb_Click(object sender, EventArgs e)
        {
            BuyDrink(4);
        }

        //Closes the program
        private void Exitbtn_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}

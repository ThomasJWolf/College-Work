/* Thomas Wolf
 * 11/12/23
 * Exam 2: Shopping cart
 * theProduct Class */
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Linq;

namespace Wolf_Exam2
{
    internal class theProducts
    {
        //Privates fields to store Product details
        private string _name;
        private string _description;
        private double _price;
        private int _quantity;

        //Constructor that initializes all fields of the Product class
        public theProducts(string name, string description, double price, int quantity)
        {
            _name = name;
            _description = description;
            _price = price;
            _quantity = quantity;
        }

        //Default constructor that initializes fields with default values
        public theProducts() : this("", "", 0, 0)
        {
        }

        //Properties to get and set the name of the Product
        public string Name { get => _name; set => _name = value; }

        //Properties to get and set the Description of the Product
        public string Description { get => _description; set => _description = value; }

        //Properties to get and set the Price of the Product
        public double Price { get => _price; set => _price = value; }

        //Properties to get and set the Quantity of the Product
        public int Quantity { get => _quantity; set => _quantity = value; }

        //Overrides the ToString method to return a formatted string representing the Product's details
        public override string ToString()
        {
            return $"Name: {_name}\nDescription: {_description}\nPrice: {_price}\nQuantity: {_quantity}";
        }
    }
}

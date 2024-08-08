using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_Milestone3
{
    public partial class MenuInsertForm : Form
    {
        public MenuInsertForm()
        {
            InitializeComponent();

            PalmettoGolfCourseimg.Click += MenuActions.MenuItemClicked;
            UserInserttsm.Click += MenuActions.MenuItemClicked;
            UserSearchtsm.Click += MenuActions.MenuItemClicked;
            UserUpdatetsm.Click += MenuActions.MenuItemClicked;
            MenuViewtsm.Click += MenuActions.MenuItemClicked;
            MenuInserttsm.Click += MenuActions.MenuItemClicked;
            MenuSearchtsm.Click += MenuActions.MenuItemClicked;
            MenuUpdatetsm.Click += MenuActions.MenuItemClicked;
            OrdersInserttsm.Click += MenuActions.MenuItemClicked;
            OrdersSearchtsm.Click += MenuActions.MenuItemClicked;
            OrdersUpdatetsm.Click += MenuActions.MenuItemClicked;
            OrderReportstsm.Click += MenuActions.MenuItemClicked;
            InventoryInserttsm.Click += MenuActions.MenuItemClicked;
            InventorySearchtsm.Click += MenuActions.MenuItemClicked;
            InventoryUpdatetsm.Click += MenuActions.MenuItemClicked;
            InventoryReportstsm.Click += MenuActions.MenuItemClicked;
            TableInserttsm.Click += MenuActions.MenuItemClicked;
            TableSearchtsm.Click += MenuActions.MenuItemClicked;
            TableUpdatetsm.Click += MenuActions.MenuItemClicked;

            this.FormClosing += new FormClosingEventHandler(MainForm_FormClosing);
        }


        private void menuItemBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            this.Validate();
            this.menuItemBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.palmettoRestaurantDataSet);


        }

        private void MenuInsertForm_Load(object sender, EventArgs e)
        {
            this.palmettoRestaurantDataSet.EnforceConstraints = false;
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.Inventory' table. You can move, or remove it, as needed.
            this.inventoryTableAdapter.Fill(this.palmettoRestaurantDataSet.Inventory);
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.MenuItem' table. You can move, or remove it, as needed.
            this.menuItemTableAdapter.Fill(this.palmettoRestaurantDataSet.MenuItem);

            MenuItemNametxb.Text = "";
            MenuItemDescriptiontxb.Text = "";
            MenuItemPricetxb.Text = "";
            
            
        }

        private void Insertbtn_Click(object sender, EventArgs e)
        {
            var MenuName = MenuItemNametxb.Text;
            var MenuDescription = MenuItemDescriptiontxb.Text;
            var MenuPrice = MenuItemPricetxb.Text;
            decimal MenuPriceDec = 0;
            int MenuInventory = Convert.ToInt32(InventoryNamecbx.SelectedValue);

            if (MenuName != "" || MenuDescription != "" || MenuPrice != "")

            {
                if (!Validator.IsOnlyLetters(MenuName))
                {
                    MessageBox.Show("Please enter only letters and spaces for the name");
                    MenuName = "";
                    return;
                }

                if (!Validator.IsText(MenuDescription))
                {
                    MessageBox.Show("Please enter only letters, digits, spaces, and selected punctuation for the description");
                    MenuDescription = "";
                    return;
                }

                if (!Validator.IsValidPrice(MenuPrice))
                {
                    MessageBox.Show("Please enter a valid price");
                    MenuPrice = "";
                    return;
                }
                else
                {
                    MenuPriceDec = Convert.ToDecimal(MenuItemPricetxb.Text);

                }
            }
            else
            {
                MessageBox.Show("Please fill out all fields");
                return;
            }
            try
            {
                if (MenuName != "" || MenuDescription != "" || MenuPrice != "")
                {
                    this.menuItemTableAdapter.MenuInsertQuery(MenuName, MenuDescription, MenuPriceDec, MenuInventory, true);
                    MessageBox.Show("Inserted Successfully");

                }
                else
                {
                    MessageBox.Show("Incorrect data");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error: " + ex.Message);
            }
        }
        // Closing statement so both forms will close when the other does
        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            Application.Exit();
        }
    }
}

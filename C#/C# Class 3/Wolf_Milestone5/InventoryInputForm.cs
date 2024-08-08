using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_Milestone4
{
    public partial class InventoryInputForm : Form
    {
        public InventoryInputForm()
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

        }

        private void inventoryBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            this.Validate();
            this.inventoryBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.palmettoRestaurantDataSet);

        }

        private void InventoryInputForm_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.Inventory' table. You can move, or remove it, as needed.
            this.inventoryTableAdapter.Fill(this.palmettoRestaurantDataSet.Inventory);

            InventoryNametxb.Text = "";
            InventoryQuantitynud.Value = 0;

        }

        private void Insertbtn_Click(object sender, EventArgs e)
        {
            var InventoryName = InventoryNametxb.Text;
            int InventoryQuantity = Convert.ToInt32(InventoryQuantitynud.Value);

            if (InventoryName != "")
                
            {
                if (!Validator.IsOnlyLetters(InventoryName))
                {
                    MessageBox.Show("Please enter only letters and spaces for the name");
                    InventoryName = "";
                    return;
                }

            }
            else
            {
                MessageBox.Show("Please fill out all fields");
                return;
            }
            try
            {
                if (InventoryName != "")
                {
                    this.inventoryTableAdapter.InventoryInsertQuery(InventoryName, InventoryQuantity, true);
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
    }
}

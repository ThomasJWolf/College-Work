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
    public partial class MenuViewForm : Form
    {
        public MenuViewForm()
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



        private void menuItemBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            this.Validate();
            this.menuItemBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.palmettoRestaurantDataSet);

        }

        private void MenuViewForm_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.Inventory' table. You can move, or remove it, as needed.
            this.inventoryTableAdapter.Fill(this.palmettoRestaurantDataSet.Inventory);
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.MenuItem' table. You can move, or remove it, as needed.
            this.palmettoRestaurantDataSet.EnforceConstraints = false;
            this.menuItemTableAdapter.FullFill(this.palmettoRestaurantDataSet.MenuItem);
        }
    }
}

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
    public partial class MenuUpdateForm : Form
    {
        public MenuUpdateForm()
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
            try
            {
            this.tableAdapterManager.UpdateAll(this.palmettoRestaurantDataSet);

            }
            catch (Exception ex)
            {
                MessageBox.Show("Error: " + ex.Message);
            }

        }

        private void MenuUpdateForm_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.Inventory' table. You can move, or remove it, as needed.
            this.inventoryTableAdapter.Fill(this.palmettoRestaurantDataSet.Inventory);
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.MenuItem' table. You can move, or remove it, as needed.
            this.palmettoRestaurantDataSet.EnforceConstraints = false;
            this.menuItemTableAdapter.FullFill(this.palmettoRestaurantDataSet.MenuItem);
            MenuItemIDcbx.Text = "";
            MenuItemNametxb.Text = "";
            MenuItemDescriptiontxb.Text = "";
            MenuItemPricetxb.Text = "";
            InventoryNamecbx.Text = "";
            MenuItemActiveYesrbn.Checked = false;
            MenuItemActiveNorbn.Checked = false;
        }

        private void MenuItemIDcbx_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (MenuItemIDcbx.Text != "")
            {
                this.menuItemTableAdapter.MenuItemID(this.palmettoRestaurantDataSet.MenuItem, Convert.ToInt16(MenuItemIDcbx.Text));
                MenuItemNametxb.Text = "";
                MenuItemDescriptiontxb.Text = "";
                MenuItemPricetxb.Text = "";
                InventoryNamecbx.Text = "";
                MenuItemActiveYesrbn.Checked = false;
                MenuItemActiveNorbn.Checked = false;

            }
        }

        private void MenuItemNametxb_TextChanged(object sender, EventArgs e)
        {
            if (MenuItemNametxb.Text.Trim() != "")
            {
                this.menuItemTableAdapter.MenuItemName(this.palmettoRestaurantDataSet.MenuItem, "%" + MenuItemNametxb.Text.Trim() + "%");
                MenuItemIDcbx.Text = "";
                MenuItemDescriptiontxb.Text = "";
                MenuItemPricetxb.Text = "";
                InventoryNamecbx.Text = "";
                MenuItemActiveYesrbn.Checked = false;
                MenuItemActiveNorbn.Checked = false;

            }
        }

        private void MenuItemDescriptiontxb_TextChanged(object sender, EventArgs e)
        {
            if (MenuItemDescriptiontxb.Text.Trim() != "")
            {
                this.menuItemTableAdapter.MenuItemDescription(this.palmettoRestaurantDataSet.MenuItem, "%" + MenuItemDescriptiontxb.Text.Trim() + "%");
                MenuItemIDcbx.Text = "";
                MenuItemNametxb.Text = "";
                MenuItemPricetxb.Text = "";
                InventoryNamecbx.Text = "";
                MenuItemActiveYesrbn.Checked = false;
                MenuItemActiveNorbn.Checked = false;

            }
        }

        private void MenuItemPricetxb_TextChanged(object sender, EventArgs e)
        {
            if (Validator.IsValidPrice(MenuItemPricetxb.Text))
            {
                this.menuItemTableAdapter.MenuItemPrice(this.palmettoRestaurantDataSet.MenuItem, Convert.ToDecimal(MenuItemPricetxb.Text));
                MenuItemIDcbx.Text = "";
                MenuItemNametxb.Text = "";
                MenuItemDescriptiontxb.Text = "";
                InventoryNamecbx.Text = "";
                MenuItemActiveYesrbn.Checked = false;
                MenuItemActiveNorbn.Checked = false;

            }
        }

        private void InventoryNamecbx_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (InventoryNamecbx.Text != "")
            {
                this.menuItemTableAdapter.InventoryName(this.palmettoRestaurantDataSet.MenuItem, InventoryNamecbx.Text);
                MenuItemIDcbx.Text = "";
                MenuItemNametxb.Text = "";
                MenuItemDescriptiontxb.Text = "";
                MenuItemPricetxb.Text = "";
                MenuItemActiveYesrbn.Checked = false;
                MenuItemActiveNorbn.Checked = false;

            }
        }


        private void MenuItemActiveYesrbn_CheckedChanged(object sender, EventArgs e)
        {
            if (MenuItemActiveYesrbn.Checked == false)
            {
                if (MenuItemActiveNorbn.Checked == false)
                {
                    this.menuItemTableAdapter.FullFill(this.palmettoRestaurantDataSet.MenuItem);
                }
            }
            else
            {
                this.menuItemTableAdapter.MenuItemActive(this.palmettoRestaurantDataSet.MenuItem, true);
                MenuItemIDcbx.Text = "";
                MenuItemNametxb.Text = "";
                MenuItemDescriptiontxb.Text = "";
                MenuItemPricetxb.Text = "";


            }
        }

        private void MenuItemActiveNorbn_CheckedChanged(object sender, EventArgs e)
        {
            if (MenuItemActiveNorbn.Checked == false)
            {
                if (MenuItemActiveYesrbn.Checked == false)
                {
                    this.menuItemTableAdapter.FullFill(this.palmettoRestaurantDataSet.MenuItem);
                }
            }
            else
            {
                this.menuItemTableAdapter.MenuItemActive(this.palmettoRestaurantDataSet.MenuItem, false);
                MenuItemIDcbx.Text = "";
                MenuItemNametxb.Text = "";
                MenuItemDescriptiontxb.Text = "";
                MenuItemPricetxb.Text = "";
                InventoryNamecbx.Text = "";



            }
        }

        private void MenuItempnl_Paint(object sender, PaintEventArgs e)
        {

        }

        private void Updatebtn_Click(object sender, EventArgs e)
        {
            menuItemBindingNavigatorSaveItem_Click(sender, e);
        }
    }
}

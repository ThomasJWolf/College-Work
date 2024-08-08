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
    public partial class InventoryUpdateForm : Form
    {
        public InventoryUpdateForm()
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

        private void InventoryUpdateForm_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.Inventory' table. You can move, or remove it, as needed.

            this.inventoryTableAdapter.Fill(this.palmettoRestaurantDataSet.Inventory);
            InventoryIDcbx.Text = "";
            InventoryNametxb.Text = "";
            InventoryQuantitynud.Value = 0;
            InventoryActiveYesrbn.Checked = false;
            InventoryActiveNorbn.Checked = false;


        }


        private void InventoryIDcbx_ValueMemberChanged(object sender, EventArgs e)

        {
            if (InventoryIDcbx.Text != "")
            {
                this.inventoryTableAdapter.InventoryID(this.palmettoRestaurantDataSet.Inventory, Convert.ToInt16(InventoryIDcbx.Text));
                InventoryNametxb.Text = "";
                InventoryQuantitynud.Value = 0;
                InventoryActiveYesrbn.Checked = false;
                InventoryActiveNorbn.Checked = false;
            }
        }


        private void InventoryNametxb_TextChanged(object sender, EventArgs e)
        {
            if (InventoryNametxb.Text.Trim() != "")
            {
                this.inventoryTableAdapter.InventoryName(this.palmettoRestaurantDataSet.Inventory, "%" + InventoryNametxb.Text.Trim() + "%");
                InventoryIDcbx.Text = "";
                InventoryQuantitynud.Value = 0;
                InventoryActiveYesrbn.Checked = false;
                InventoryActiveNorbn.Checked = false;
            }
        }

        private void InventoryQuantitynud_ValueChanged(object sender, EventArgs e)
        {
            if (InventoryQuantitynud.Value != 0)
            {
                this.inventoryTableAdapter.InventoryQuantity(this.palmettoRestaurantDataSet.Inventory, Convert.ToInt16(InventoryQuantitynud.Value));
                InventoryIDcbx.Text = "";
                InventoryNametxb.Text = "";
                InventoryActiveYesrbn.Checked = false;
                InventoryActiveNorbn.Checked = false;
            }
            else if (InventoryQuantitynud.Value == 0)
            {
                this.inventoryTableAdapter.Fill(this.palmettoRestaurantDataSet.Inventory);

            }
        }

        private void InventoryActiveYesrbn_CheckedChanged(object sender, EventArgs e)
        {
            if (InventoryActiveYesrbn.Checked == false)
            {
                if (InventoryActiveNorbn.Checked == false)
                {
                    this.inventoryTableAdapter.Fill(this.palmettoRestaurantDataSet.Inventory);
                }
            }
            else
            {
                this.inventoryTableAdapter.InventoryActive(this.palmettoRestaurantDataSet.Inventory, true);
                InventoryIDcbx.Text = "";
                InventoryNametxb.Text = "";
                InventoryQuantitynud.Value = 0;

            }
        }


        private void InventoryActiveNorbn_CheckedChanged(object sender, EventArgs e)
        {
            if (InventoryActiveNorbn.Checked == false)
            {
                if (InventoryActiveYesrbn.Checked == false)
                {
                    this.inventoryTableAdapter.Fill(this.palmettoRestaurantDataSet.Inventory);
                }
            }
            else
            {
                this.inventoryTableAdapter.InventoryActive(this.palmettoRestaurantDataSet.Inventory, false);
                InventoryIDcbx.Text = "";
                InventoryNametxb.Text = "";
                InventoryQuantitynud.Value = 0;

            }
        }

        private void Updatebtn_Click(object sender, EventArgs e)
        {
            inventoryBindingNavigatorSaveItem_Click(sender, e);
        }
    }
}
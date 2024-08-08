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
    public partial class OrderSearchForm : Form
    {
        public OrderSearchForm()
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

        private void orderBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            this.Validate();
            this.orderBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.palmettoRestaurantDataSet);

        }

        public string dateStored = "";

        private void OrderSearchForm_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.OrderDetailLinking' table. You can move, or remove it, as needed.
            this.orderDetailLinkingTableAdapter.Fill(this.palmettoRestaurantDataSet.OrderDetailLinking);
            OrderIDcbx.Text = "";
            UserFullNamecbx.Text = "";
            dateStored = "";
            OrderDetailQuantitytxb.Text = "";
            MenuItemNamecbx.Text = "";
            MenuItemPricetxb.Text = "";
            TableNamecbx.Text = "";
            OrderActiveYesrbn.Checked = false;
            OrderActiveNorbn.Checked = false;

        }

        private void OrderIDcbx_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (OrderIDcbx.Text != "")
            {
                this.orderDetailLinkingTableAdapter.OrderID(this.palmettoRestaurantDataSet.OrderDetailLinking, Convert.ToInt32(OrderIDcbx.Text));
                UserFullNamecbx.Text = "";
                dateStored = "";
                OrderDetailQuantitytxb.Text = "";
                MenuItemNamecbx.Text = "";
                MenuItemPricetxb.Text = "";
                TableNamecbx.Text = "";
                OrderActiveYesrbn.Checked = false;
                OrderActiveNorbn.Checked = false;
            }
        }

        private void UserFullNamecbx_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (UserFullNamecbx.Text != "")
            {
                this.orderDetailLinkingTableAdapter.UserFullName(this.palmettoRestaurantDataSet.OrderDetailLinking, UserFullNamecbx.Text);
                OrderIDcbx.Text = "";
                dateStored = "";
                OrderDetailQuantitytxb.Text = "";
                MenuItemNamecbx.Text = "";
                MenuItemPricetxb.Text = "";
                TableNamecbx.Text = "";
                OrderActiveYesrbn.Checked = false;
                OrderActiveNorbn.Checked = false;
            }
        }

        private void OrderDatedtp_ValueChanged(object sender, EventArgs e)
        {
            if (OrderDatedtp.Text != "")
            {
                if (dateStored == "")
                {
                    dateStored = OrderDatedtp.Text;
                }
                else
                {
                    dateStored = OrderDatedtp.Text;
                    this.orderDetailLinkingTableAdapter.OrderDate(this.palmettoRestaurantDataSet.OrderDetailLinking, OrderDatedtp.Text);
                }
                OrderIDcbx.Text = "";
                UserFullNamecbx.Text = "";
                OrderDetailQuantitytxb.Text = "";
                MenuItemNamecbx.Text = "";
                MenuItemPricetxb.Text = "";
                TableNamecbx.Text = "";
                OrderActiveYesrbn.Checked = false;
                OrderActiveNorbn.Checked = false;
            }
        }

        private void OrderDetailQuantitytxb_TextChanged(object sender, EventArgs e)
        {
            if (OrderDetailQuantitytxb.Text.Trim() != "")
            {
                this.orderDetailLinkingTableAdapter.OrderDetailQuantity(this.palmettoRestaurantDataSet.OrderDetailLinking, Convert.ToInt16(OrderDetailQuantitytxb.Text));
                OrderIDcbx.Text = "";
                UserFullNamecbx.Text = "";
                dateStored = "";
                MenuItemNamecbx.Text = "";
                MenuItemPricetxb.Text = "";
                TableNamecbx.Text = "";
                OrderActiveYesrbn.Checked = false;
                OrderActiveNorbn.Checked = false;
            }
        }

        private void MenuItemNamecbx_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (MenuItemNamecbx.Text != "")
            {
                this.orderDetailLinkingTableAdapter.MenuItemName(this.palmettoRestaurantDataSet.OrderDetailLinking, MenuItemNamecbx.Text);
                OrderIDcbx.Text = "";
                UserFullNamecbx.Text = "";
                dateStored = "";
                OrderDetailQuantitytxb.Text = "";
                MenuItemPricetxb.Text = "";
                TableNamecbx.Text = "";
                OrderActiveYesrbn.Checked = false;
                OrderActiveNorbn.Checked = false;
            }
        }

        private void MenuItemPricetxb_TextChanged(object sender, EventArgs e)
        {
            if (MenuItemPricetxb.Text.Trim() != "")
            {
                this.orderDetailLinkingTableAdapter.MenuItemPrice(this.palmettoRestaurantDataSet.OrderDetailLinking, MenuItemPricetxb.Text);
                OrderIDcbx.Text = "";
                UserFullNamecbx.Text = "";
                dateStored = "";
                OrderDetailQuantitytxb.Text = "";
                MenuItemNamecbx.Text = "";
                TableNamecbx.Text = "";
                OrderActiveYesrbn.Checked = false;
                OrderActiveNorbn.Checked = false;
            }
        }

        private void TableNamecbx_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (TableNamecbx.Text != "")
            {
                this.orderDetailLinkingTableAdapter.TableName(this.palmettoRestaurantDataSet.OrderDetailLinking, TableNamecbx.Text);
                OrderIDcbx.Text = "";
                UserFullNamecbx.Text = "";
                dateStored = "";
                OrderDetailQuantitytxb.Text = "";
                MenuItemNamecbx.Text = "";
                MenuItemPricetxb.Text = "";
                OrderActiveYesrbn.Checked = false;
                OrderActiveNorbn.Checked = false;
            }
        }

        private void OrderActiveYesrbn_CheckedChanged(object sender, EventArgs e)
        {
            if (OrderActiveYesrbn.Checked == false)
            {
                if (OrderActiveNorbn.Checked == false)
                {
                    this.orderDetailLinkingTableAdapter.Fill(this.palmettoRestaurantDataSet.OrderDetailLinking);
                }
            }
            else
            {
                this.orderDetailLinkingTableAdapter.OrderActive(this.palmettoRestaurantDataSet.OrderDetailLinking, true);
                OrderIDcbx.Text = "";
                UserFullNamecbx.Text = "";
                dateStored = "";
                OrderDetailQuantitytxb.Text = "";
                MenuItemNamecbx.Text = "";
                MenuItemPricetxb.Text = "";
                TableNamecbx.Text = "";
            }
        }


        private void OrderActiveNorbn_CheckedChanged(object sender, EventArgs e)
        {
            if (OrderActiveNorbn.Checked == false)
            {
                if (OrderActiveYesrbn.Checked == false)
                {
                    this.orderDetailLinkingTableAdapter.Fill(this.palmettoRestaurantDataSet.OrderDetailLinking);
                }
            }
            else
            {
                this.orderDetailLinkingTableAdapter.OrderActive(this.palmettoRestaurantDataSet.OrderDetailLinking, false);
                OrderIDcbx.Text = "";
                UserFullNamecbx.Text = "";
                dateStored = "";
                OrderDetailQuantitytxb.Text = "";
                MenuItemNamecbx.Text = "";
                MenuItemPricetxb.Text = "";
                TableNamecbx.Text = "";
            }
        }
    }
}

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
    public partial class OrderUpdateForm : Form
    {
        public OrderUpdateForm()
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

        private void OrderUpdateForm_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet2.MenuItem' table. You can move, or remove it, as needed.
            this.userTableAdapter.Fill(this.palmettoRestaurantDataSet.User);
            this.tableTableAdapter.Fill(this.palmettoRestaurantDataSet.Table);
            this.orderTableAdapter.Fill(this.palmettoRestaurantDataSet.Order);
            OrderIDUpdate();
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet1.OrderDetailLinkingIDs' table. You can move, or remove it, as needed.
            this.orderDetailLinkingIDsTableAdapter.Fill(this.palmettoRestaurantDataSet1.OrderDetailLinkingIDs);

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

        private void OrderIDUpdate()
        {
            try
            {
                this.orderDetailTableAdapter.Fill(this.palmettoRestaurantDataSet.OrderDetail);
                this.orderTableAdapter.Fill(this.palmettoRestaurantDataSet.Order);
                this.orderDetailTableAdapter.OrderDetailID(this.palmettoRestaurantDataSet.OrderDetail, Convert.ToInt32(OrderIDcbx.Text));
                this.orderTableAdapter.OrderID(this.palmettoRestaurantDataSet.Order, Convert.ToInt32(OrderIDcbx.Text));
                Console.WriteLine("good");


            }
            catch (Exception ex)
            {
                this.orderDetailLinkingTableAdapter.Fill(this.palmettoRestaurantDataSet.OrderDetailLinking);
                this.orderTableAdapter.Fill(this.palmettoRestaurantDataSet.Order);

                this.orderDetailLinkingTableAdapter.OrderID(this.palmettoRestaurantDataSet.OrderDetailLinking, 0);
                this.orderTableAdapter.OrderID(this.palmettoRestaurantDataSet.Order, 0);
                Console.WriteLine("bad");


            }

        }

        private void OrderIDcbx_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (OrderIDcbx.Text != "")
            {
                this.orderDetailLinkingTableAdapter.OrderID(this.palmettoRestaurantDataSet.OrderDetailLinking, Convert.ToInt32(OrderIDcbx.Text));
                OrderIDUpdate();
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
                OrderIDUpdate();
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
                    OrderIDUpdate();
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
                OrderIDUpdate();
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
                OrderIDUpdate();
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
                OrderIDUpdate();
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
                OrderIDUpdate();
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
                    this.orderDetailLinkingIDsTableAdapter.Fill(this.palmettoRestaurantDataSet.OrderDetailLinkingIDs);
                }
            }
            else
            {
                this.orderDetailLinkingTableAdapter.OrderActive(this.palmettoRestaurantDataSet.OrderDetailLinking, true);
                OrderIDUpdate();
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
                    this.orderDetailLinkingIDsTableAdapter.Fill(this.palmettoRestaurantDataSet.OrderDetailLinkingIDs);
                }
            }
            else
            {
                this.orderDetailLinkingTableAdapter.OrderActive(this.palmettoRestaurantDataSet.OrderDetailLinking, false);
                OrderIDUpdate();
                OrderIDcbx.Text = "";
                UserFullNamecbx.Text = "";
                dateStored = "";
                OrderDetailQuantitytxb.Text = "";
                MenuItemNamecbx.Text = "";
                MenuItemPricetxb.Text = "";
                TableNamecbx.Text = "";
            }
        }

        private void Clearbtn_Click(object sender, EventArgs e)
        {
            this.orderDetailLinkingIDsTableAdapter.Fill(this.palmettoRestaurantDataSet1.OrderDetailLinkingIDs);
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

        private void Updatebtn_Click(object sender, EventArgs e)
        {
            orderBindingNavigatorSaveItem_Click( sender,  e);
        }
    }
}

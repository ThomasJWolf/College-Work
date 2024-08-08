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
    public partial class OrderInsertForm : Form
    {
        public OrderInsertForm()
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

        private void Titlelbl_Click(object sender, EventArgs e)
        {

        }

        private void OrderInsertForm_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.MenuItem' table. You can move, or remove it, as needed.
            this.palmettoRestaurantDataSet.EnforceConstraints = false;
            this.menuItemTableAdapter.Fill(this.palmettoRestaurantDataSet.MenuItem);
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.Table' table. You can move, or remove it, as needed.
            this.tableTableAdapter.Fill(this.palmettoRestaurantDataSet.Table);
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.User' table. You can move, or remove it, as needed.
            this.userTableAdapter.Fill(this.palmettoRestaurantDataSet.User);
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.OrderDetail' table. You can move, or remove it, as needed.
            this.orderDetailTableAdapter.Fill(this.palmettoRestaurantDataSet.OrderDetail);
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.Order' table. You can move, or remove it, as needed.
            this.orderTableAdapter.Fill(this.palmettoRestaurantDataSet.Order);

        }
        private void userFullNameComboBox_SelectedIndexChanged(object sender, EventArgs e)
        {

        }


        private void Insertbtn_Click(object sender, EventArgs e)
        {
            int UserFullName = Convert.ToInt32(UserFullNamecbx.SelectedValue);
            int TableName = Convert.ToInt32(TableNamecbx.SelectedValue);
            int MenuItemName = Convert.ToInt32(MenuItemNamecbx.SelectedValue);
            var OrderDate = OrderDatedtp.Value;
            var OrderQuantity = Convert.ToInt16(OrderDetailQuantitynud.Value);

            try
            {
                int OrderID = Convert.ToInt32(this.orderTableAdapter.OrderInsertQuery(UserFullName, OrderDate, true));

                this.orderDetailTableAdapter.OrderDetailInsertQuery(OrderID, TableName, MenuItemName, OrderQuantity);
                MessageBox.Show("Inserted Successfully");

            }
            catch (Exception ex)
            {
                MessageBox.Show("Error: " + ex.Message);
            }
        }

    }
}

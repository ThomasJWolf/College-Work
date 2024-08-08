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
    public partial class TableInsertForm : Form
    {
        public TableInsertForm()
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

        private void tableBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            this.Validate();
            this.tableBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.palmettoRestaurantDataSet);


        }

        private void TableInsertForm_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.Table' table. You can move, or remove it, as needed.
            this.tableTableAdapter.Fill(this.palmettoRestaurantDataSet.Table);
            TableNametxb.Text = "";
            TableSeatsnud.Value = 0;

        }

        private void Insertbtn_Click(object sender, EventArgs e)
        {
            var TableName = TableNametxb.Text;
            var TableSeats = Convert.ToInt16(TableSeatsnud.Value);

            if (TableName != "")

            {
                if (!Validator.IsOnlyLettersAndNumbers(TableName))
                {
                    MessageBox.Show("Please enter only letters and spaces for the name");
                    TableName = "";
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
                if (TableName != "")
                {
                    this.tableTableAdapter.TableInsertQuery(TableName, TableSeats, true);
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

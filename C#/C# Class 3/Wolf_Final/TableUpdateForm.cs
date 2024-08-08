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
    public partial class TableUpdateForm : Form
    {
        public TableUpdateForm()
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

        private void TableUpdateForm_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.Table' table. You can move, or remove it, as needed.

            this.tableTableAdapter.Fill(this.palmettoRestaurantDataSet.Table);
            TableIDcbx.Text = "";
            TableNametxb.Text = "";
            TableSeatsnud.Value = 0;
            TableActiveYesrbn.Checked = false;
            TableActiveNorbn.Checked = false;


        }

        private void TableIDcbx_ValueMemberChanged(object sender, EventArgs e)

        {
            if (TableIDcbx.Text != "")
            {
                this.tableTableAdapter.TableID(this.palmettoRestaurantDataSet.Table, Convert.ToInt16(TableIDcbx.Text));
                TableNametxb.Text = "";
                TableSeatsnud.Value = 0;
                TableActiveYesrbn.Checked = false;
                TableActiveNorbn.Checked = false;
            }
        }

        private void TableSeatsnud_ValueChanged(object sender, EventArgs e)
        {
            if (TableSeatsnud.Value != 0)
            {
                this.tableTableAdapter.TableSeats(this.palmettoRestaurantDataSet.Table, Convert.ToInt16(TableSeatsnud.Value));
                TableIDcbx.Text = "";
                TableNametxb.Text = "";
                TableActiveYesrbn.Checked = false;
                TableActiveNorbn.Checked = false;
            } else if (TableSeatsnud.Value == 0)
            {
                this.tableTableAdapter.Fill(this.palmettoRestaurantDataSet.Table);
            }
        }

        private void TableNametxb_TextChanged(object sender, EventArgs e)
        {
            if (TableNametxb.Text.Trim() != "")
            {
                this.tableTableAdapter.TableName(this.palmettoRestaurantDataSet.Table, "%" + TableNametxb.Text.Trim() + "%");
                TableIDcbx.Text = "";
                TableSeatsnud.Value = 0;
                TableActiveYesrbn.Checked = false;
                TableActiveNorbn.Checked = false;
            }
        }

        private void TableActiveYesrbn_CheckedChanged(object sender, EventArgs e)
        {
            if (TableActiveYesrbn.Checked == false)
            {
                if (TableActiveNorbn.Checked == false)
                {
                    this.tableTableAdapter.Fill(this.palmettoRestaurantDataSet.Table);
                }
            }
            else
            {
                this.tableTableAdapter.TableActive(this.palmettoRestaurantDataSet.Table, true);
                TableIDcbx.Text = "";
                TableNametxb.Text = "";
                TableSeatsnud.Value = 0;

            }
        }

        private void TableActiveNorbn_CheckedChanged(object sender, EventArgs e)
        {
            if (TableActiveNorbn.Checked == false)
            {
                if (TableActiveYesrbn.Checked == false)
                {
                    this.tableTableAdapter.Fill(this.palmettoRestaurantDataSet.Table);
                }
            }
            else
            {
                this.tableTableAdapter.TableActive(this.palmettoRestaurantDataSet.Table, false);
                TableIDcbx.Text = "";
                TableNametxb.Text = "";
                TableSeatsnud.Value = 0;

            }
        }

        private void Updatebtn_Click(object sender, EventArgs e)
        {
            tableBindingNavigatorSaveItem_Click(sender, e);
        }
    }
}

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
    public partial class UserSearchForm : Form
    {
        public UserSearchForm()
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

        private void userBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            this.Validate();
            this.userBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.palmettoRestaurantDataSet);

        }

        private void UserSearchForm_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.User' table. You can move, or remove it, as needed.
            this.userTableAdapter.Fill(this.palmettoRestaurantDataSet.User);
            UserIDcbx.Text = "";
            UserNametxb.Text = "";
            UserEmailtxb.Text = "";
            UserPhonetxb.Text = "";
            UserAddresstxb.Text = "";
            UserActiveYesrbn.Checked = false;
            UserActiveNorbn.Checked = false;

        }

        private void UserIDcbx_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (UserIDcbx.Text != "")
            {
                this.userTableAdapter.UserID(this.palmettoRestaurantDataSet.User, Convert.ToInt16(UserIDcbx.Text));
                UserNametxb.Text = "";
                UserEmailtxb.Text = "";
                UserPhonetxb.Text = "";
                UserAddresstxb.Text = "";
                UserActiveYesrbn.Checked = false;
                UserActiveNorbn.Checked = false;

            }
        }

        private void UserNametxb_TextChanged(object sender, EventArgs e)
        {
            if (UserNametxb.Text.Trim() != "")
            {
                this.userTableAdapter.UserFullName(this.palmettoRestaurantDataSet.User, "%" + UserNametxb.Text.Trim() + "%");
                UserIDcbx.Text = "";
                UserEmailtxb.Text = "";
                UserPhonetxb.Text = "";
                UserAddresstxb.Text = "";
                UserActiveYesrbn.Checked = false;
                UserActiveNorbn.Checked = false;

            }
        }

        private void UserEmailtxb_TextChanged(object sender, EventArgs e)
        {
            if (UserEmailtxb.Text.Trim() != "")
            {
                this.userTableAdapter.UserEmail(this.palmettoRestaurantDataSet.User, "%" + UserEmailtxb.Text.Trim() + "%");
                UserIDcbx.Text = "";
                UserNametxb.Text = "";
                UserPhonetxb.Text = "";
                UserAddresstxb.Text = "";
                UserActiveYesrbn.Checked = false;
                UserActiveNorbn.Checked = false;

            }
        }

        private void UserPhonetxb_TextChanged(object sender, EventArgs e)
        {
            if (UserPhonetxb.Text.Trim() != "")
            {
                this.userTableAdapter.UserPhone(this.palmettoRestaurantDataSet.User, "%" + UserPhonetxb.Text.Trim() + "%");
                UserIDcbx.Text = "";
                UserNametxb.Text = "";
                UserEmailtxb.Text = "";
                UserAddresstxb.Text = "";
                UserActiveYesrbn.Checked = false;
                UserActiveNorbn.Checked = false;

            }
        }

        private void UserAddresstxb_TextChanged(object sender, EventArgs e)
        {
            if (UserAddresstxb.Text.Trim() != "")
            {
                this.userTableAdapter.UserAddress(this.palmettoRestaurantDataSet.User, "%" + UserAddresstxb.Text.Trim() + "%");
                UserIDcbx.Text = "";
                UserNametxb.Text = "";
                UserEmailtxb.Text = "";
                UserPhonetxb.Text = "";
                UserActiveYesrbn.Checked = false;
                UserActiveNorbn.Checked = false;

            }
        }

        private void UserActiveYesrbn_CheckedChanged(object sender, EventArgs e)
        {
            if (UserActiveYesrbn.Checked == false)
            {
                if (UserActiveNorbn.Checked == false)
                {
                    this.userTableAdapter.Fill(this.palmettoRestaurantDataSet.User);
                }
            }
            else
            {
                this.userTableAdapter.UserActive(this.palmettoRestaurantDataSet.User, true);
                UserIDcbx.Text = "";
                UserNametxb.Text = "";
                UserEmailtxb.Text = "";
                UserPhonetxb.Text = "";
                UserAddresstxb.Text = "";



            }
        }

        private void UserActiveNorbn_CheckedChanged(object sender, EventArgs e)
        {
            if (UserActiveNorbn.Checked == false)
            {
                if (UserActiveYesrbn.Checked == false)
                {
                    this.userTableAdapter.Fill(this.palmettoRestaurantDataSet.User);
                }
            }
            else
            {
                this.userTableAdapter.UserActive(this.palmettoRestaurantDataSet.User, false);
                UserIDcbx.Text = "";
                UserNametxb.Text = "";
                UserEmailtxb.Text = "";
                UserPhonetxb.Text = "";
                UserAddresstxb.Text = "";




            }
        }
    }
}

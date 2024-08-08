using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_Milestone3
{
    public partial class UserInputForm : Form
    {
        public UserInputForm()
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

            this.FormClosing += new FormClosingEventHandler(MainForm_FormClosing);

        }

        private void userBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            try
            {
                this.Validate();
            this.userBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.palmettoRestaurantDataSet);
                MessageBox.Show("Save successful");
            }
            catch (Exception ex)
            {
                MessageBox.Show("An error occurred while saving: " + ex.Message);
            }
        }



        private void UserInputForm_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.User' table. You can move, or remove it, as needed.
            this.userTableAdapter.Fill(this.palmettoRestaurantDataSet.User);
            UserFullNametxb.Text = "";
            UserEmailtxb.Text = "";
            UserPhonetxb.Text = "";
            UserAddresstxb.Text = "";

        }
        private void Insertbtn_Click(object sender, EventArgs e)
        {

            var UserFullName = UserFullNametxb.Text.Trim();
            var UserEmail = UserEmailtxb.Text.Trim();
            var UserPhone = UserPhonetxb.Text.Trim();
            var UserAddress = UserAddresstxb.Text.Trim();

            if (UserFullName != "" || UserEmail != "" || UserPhone != "" || UserAddress != "")
            {
                if (!Validator.IsOnlyLetters(UserFullName))
                {
                    MessageBox.Show("Please enter only letters and spaces for your name");
                    UserFullName = "";
                    return;
                }

                if (!Validator.IsValidEmail(UserEmail))
                {
                    MessageBox.Show("Please enter a valid email address");
                    UserEmail = "";
                    return;
                }
                
                if (!Validator.IsValidPhone(UserPhone))
                {
                    MessageBox.Show("Please enter a valid phone number");
                    UserPhone = "";
                    return;
                }

                if (!Validator.IsValidAddress(UserAddress))
                {
                    MessageBox.Show("Please enter a valid address");
                    UserAddress = "";
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
                if (UserFullName != "" || UserEmail != "" || UserPhone != "" || UserAddress != "") { 
                    this.userTableAdapter.UserInsertQuery(UserFullNametxb.Text, UserEmailtxb.Text, UserPhonetxb.Text, UserAddresstxb.Text, true);
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

        // Closing statement so both forms will close when the other does
        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            Application.Exit();
        }
    }
}

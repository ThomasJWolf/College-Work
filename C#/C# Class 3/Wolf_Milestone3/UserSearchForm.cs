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
    public partial class UserSearchForm : Form
    {
        public UserSearchForm()
        {
            InitializeComponent();
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

        }
    }
}

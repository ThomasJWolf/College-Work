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
    public partial class OrderSearchForm : Form
    {
        public OrderSearchForm()
        {
            InitializeComponent();
        }

        private void orderBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            this.Validate();
            this.orderBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.palmettoRestaurantDataSet);

        }

        private void OrderSearchForm_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.OrderDetail' table. You can move, or remove it, as needed.
            this.palmettoRestaurantDataSet.EnforceConstraints = false;

            this.orderDetailTableAdapter.Fill(this.palmettoRestaurantDataSet.OrderDetail);
            // TODO: This line of code loads data into the 'palmettoRestaurantDataSet.Order' table. You can move, or remove it, as needed.
            this.orderTableAdapter.Fill(this.palmettoRestaurantDataSet.Order);

        }
    }
}

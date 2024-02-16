using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_2._1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btnSinister_Click(object sender, EventArgs e)
        {
            lblResult.Text = "Left";
        }

        private void btnMedium_Click(object sender, EventArgs e)
        {
            lblResult.Text = "Center";
        }

        private void btnDexter_Click(object sender, EventArgs e)
        {
            lblResult.Text = "Right";
        }
    }
}

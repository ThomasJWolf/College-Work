using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_2._3
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            lblResult.Text = "8 of Dimonds";
        }

        private void club_2_Click(object sender, EventArgs e)
        {
            lblResult.Text = "2 of Clubs";
        }

        private void spade_king_Click(object sender, EventArgs e)
        {
            lblResult.Text = "King of Spades";
        }

        private void spade_ace_Click(object sender, EventArgs e)
        {
            lblResult.Text = "Ace of Spades";
        }

        private void joker_black_Click(object sender, EventArgs e)
        {
            lblResult.Text = "Black Joker";
        }

        private void btnExit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void lblLable_Click(object sender, EventArgs e)
        {

        }
    }
}

/* Thomas Wolf
 * 1/28/24
 * Medical Information Database
 * MedGridView.cs */
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_cc3
{
    public partial class MedGridView : Form
    {
        public MedGridView()
        {
            InitializeComponent();
            // Adds closing statement
            this.FormClosing += new FormClosingEventHandler(MainForm_FormClosing);

        }

        private void medicationsBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            this.Validate();
            this.medicationsBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.wolfMedicalDataSet);

        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'wolfMedicalDataSet.medications' table. You can move, or remove it, as needed.
            this.medicationsTableAdapter.Fill(this.wolfMedicalDataSet.medications);
        }

        // Makes a new "MedDetailsView" form
        private void detailsbtn_Click(object sender, EventArgs e)
        {
            MedDetailsView meddetailsview = new MedDetailsView();
            meddetailsview.Show();
            this.Hide();
        }

        // Closing statement so both forms will close when the other does
        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            Application.Exit();
        }
    }
}

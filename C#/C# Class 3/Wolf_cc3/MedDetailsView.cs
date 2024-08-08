/* Thomas Wolf
 * 1/28/24
 * Medical Information Database
 * MedDetailsView.cs */
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
    public partial class MedDetailsView : Form
    {
        public MedDetailsView()
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

        private void MedDetailsView_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'wolfMedicalDataSet.medications' table. You can move, or remove it, as needed.
            this.medicationsTableAdapter.Fill(this.wolfMedicalDataSet.medications);
        }

        // Makes a new "MedGridView" form
        private void gridbtn_Click(object sender, EventArgs e)
        {
            MedGridView medgridview = new MedGridView();
            medgridview.Show();
            this.Hide();
        }

        // Closing statement so both forms will close when the other does
        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            Application.Exit();
        }
    }
}

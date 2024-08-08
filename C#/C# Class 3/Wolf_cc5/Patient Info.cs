/* Thomas Wolf
 * 2/11/24
 * Medical Information Database
 * Patient Info.cs */
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_cc5
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void patientInfoBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            this.Validate();
            this.patientInfoBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.wolfMedicalDataSet);

        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'wolfMedicalDataSet.patientInfo' table. You can move, or remove it, as needed.
            this.patientInfoTableAdapter.Fill(this.wolfMedicalDataSet.patientInfo);

        }

        private void HeightDescendingbtn_Click(object sender, EventArgs e)
        {
            //Calls sql query to sort by the height in descending order
            this.patientInfoTableAdapter.HeightDescending(this.wolfMedicalDataSet.patientInfo);
        }

        private void WeightLessThan200btn_Click(object sender, EventArgs e)
        {
            //Calls sql query to sort by the weight that is more than 200
            this.patientInfoTableAdapter.WeightLessThan200(this.wolfMedicalDataSet.patientInfo);
        }

        private void WeightGreaterThan100btn_Click(object sender, EventArgs e)
        {
            //Calls sql query to sort by the weight that is less than 100
            this.patientInfoTableAdapter.WeightGreaterThan100(this.wolfMedicalDataSet.patientInfo);
        }

        private void A1cGreaterThan5Point7btn_Click(object sender, EventArgs e)
        {
            //Calls sql query to sort by the A1c that is more than 5.7
            this.patientInfoTableAdapter.A1cGreaterThan5Point7(this.wolfMedicalDataSet.patientInfo);
        }

        private void AgeGreaterThan70btn_Click(object sender, EventArgs e)
        {
            //Calls sql query to sort by the age that is more than 70
            this.patientInfoTableAdapter.AgeGreaterThan70(this.wolfMedicalDataSet.patientInfo);
        }
    }
}

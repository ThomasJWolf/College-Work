/* Thomas Wolf
 * 2/18/24
 * Medical Information Database
 * Patient.cs */
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_cc6
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'wolfMedicalDataSet.patients' table. You can move, or remove it, as needed.
            this.patientsTableAdapter.Fill(this.wolfMedicalDataSet.patients);

        }

        private void Searchtxb_Enter(object sender, EventArgs e)
        {
            //Clears the text box when clicked
            Searchtxb.Text = "";
        }

        private void Namebtn_Click(object sender, EventArgs e)
        {
            //Calls sql query to only show name data matching Searchtxb.Text
            this.patientsTableAdapter.NameSearch(this.wolfMedicalDataSet.patients, Searchtxb.Text);
        }

        private void Addressbtn_Click(object sender, EventArgs e)
        {
            //Calls sql query to show address data matching Searchtxb.Text
            this.patientsTableAdapter.AddressSearch(this.wolfMedicalDataSet.patients, "%" + Searchtxb.Text.Trim() + "%");
        }

        private void Phonebtn_Click(object sender, EventArgs e)
        {
            //Calls sql query to show phone data matching Searchtxb.Text
            this.patientsTableAdapter.PhoneSearch(this.wolfMedicalDataSet.patients, "%" + Searchtxb.Text.Trim() + "%");

        }

        private void Emailbtn_Click(object sender, EventArgs e)
        {
            //Calls sql query to show email data matching Searchtxb.Text
            this.patientsTableAdapter.EmailSearch(this.wolfMedicalDataSet.patients, "%" + Searchtxb.Text.Trim() + "%");
        }

        private void DeductibleLimitbtn_Click(object sender, EventArgs e)
        {
            // Takes Searchtxb and makes it an Int
            if (int.TryParse(Searchtxb.Text, out int searchText))
            {
                //Calls sql query to show the Deductible Limit below Searchtxb.Text
                this.patientsTableAdapter.DeductibleLimitSearch(this.wolfMedicalDataSet.patients, searchText);
            }
        }
    }
}

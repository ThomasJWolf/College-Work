namespace Wolf_6._6
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.Exitbtn = new System.Windows.Forms.Button();
            this.Clearbtn = new System.Windows.Forms.Button();
            this.Calculatebtn = new System.Windows.Forms.Button();
            this.Summarygbx = new System.Windows.Forms.GroupBox();
            this.TotalChargesOutlbl = new System.Windows.Forms.Label();
            this.MiscChargesOutlbl = new System.Windows.Forms.Label();
            this.StayChargesOutlbl = new System.Windows.Forms.Label();
            this.TotalChargeslbl = new System.Windows.Forms.Label();
            this.MiscChargeslbl = new System.Windows.Forms.Label();
            this.StayChargeslbl = new System.Windows.Forms.Label();
            this.Chargesgbx = new System.Windows.Forms.GroupBox();
            this.PhysRehablbl = new System.Windows.Forms.Label();
            this.Lablbl = new System.Windows.Forms.Label();
            this.Surgicallbl = new System.Windows.Forms.Label();
            this.Medicationlbl = new System.Windows.Forms.Label();
            this.PhysRehabtxb = new System.Windows.Forms.TextBox();
            this.Labtxb = new System.Windows.Forms.TextBox();
            this.Surgicaltxb = new System.Windows.Forms.TextBox();
            this.Medicationtxb = new System.Windows.Forms.TextBox();
            this.Daystxb = new System.Windows.Forms.TextBox();
            this.Dayslbl = new System.Windows.Forms.Label();
            this.Summarygbx.SuspendLayout();
            this.Chargesgbx.SuspendLayout();
            this.SuspendLayout();
            // 
            // Exitbtn
            // 
            this.Exitbtn.Location = new System.Drawing.Point(167, 301);
            this.Exitbtn.Name = "Exitbtn";
            this.Exitbtn.Size = new System.Drawing.Size(75, 23);
            this.Exitbtn.TabIndex = 15;
            this.Exitbtn.Text = "Exit";
            this.Exitbtn.UseVisualStyleBackColor = true;
            this.Exitbtn.Click += new System.EventHandler(this.Exitbtn_Click);
            // 
            // Clearbtn
            // 
            this.Clearbtn.Location = new System.Drawing.Point(88, 301);
            this.Clearbtn.Name = "Clearbtn";
            this.Clearbtn.Size = new System.Drawing.Size(75, 23);
            this.Clearbtn.TabIndex = 14;
            this.Clearbtn.Text = "Clear";
            this.Clearbtn.UseVisualStyleBackColor = true;
            this.Clearbtn.Click += new System.EventHandler(this.Clearbtn_Click);
            // 
            // Calculatebtn
            // 
            this.Calculatebtn.Location = new System.Drawing.Point(7, 301);
            this.Calculatebtn.Name = "Calculatebtn";
            this.Calculatebtn.Size = new System.Drawing.Size(75, 23);
            this.Calculatebtn.TabIndex = 13;
            this.Calculatebtn.Text = "Calculate";
            this.Calculatebtn.UseVisualStyleBackColor = true;
            this.Calculatebtn.Click += new System.EventHandler(this.Calculatebtn_Click);
            // 
            // Summarygbx
            // 
            this.Summarygbx.Controls.Add(this.TotalChargesOutlbl);
            this.Summarygbx.Controls.Add(this.MiscChargesOutlbl);
            this.Summarygbx.Controls.Add(this.StayChargesOutlbl);
            this.Summarygbx.Controls.Add(this.TotalChargeslbl);
            this.Summarygbx.Controls.Add(this.MiscChargeslbl);
            this.Summarygbx.Controls.Add(this.StayChargeslbl);
            this.Summarygbx.Location = new System.Drawing.Point(12, 186);
            this.Summarygbx.Name = "Summarygbx";
            this.Summarygbx.Size = new System.Drawing.Size(222, 109);
            this.Summarygbx.TabIndex = 12;
            this.Summarygbx.TabStop = false;
            this.Summarygbx.Text = "Summary";
            // 
            // TotalChargesOutlbl
            // 
            this.TotalChargesOutlbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.TotalChargesOutlbl.Location = new System.Drawing.Point(104, 76);
            this.TotalChargesOutlbl.Name = "TotalChargesOutlbl";
            this.TotalChargesOutlbl.Size = new System.Drawing.Size(100, 23);
            this.TotalChargesOutlbl.TabIndex = 5;
            this.TotalChargesOutlbl.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // MiscChargesOutlbl
            // 
            this.MiscChargesOutlbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.MiscChargesOutlbl.Location = new System.Drawing.Point(104, 46);
            this.MiscChargesOutlbl.Name = "MiscChargesOutlbl";
            this.MiscChargesOutlbl.Size = new System.Drawing.Size(100, 23);
            this.MiscChargesOutlbl.TabIndex = 5;
            this.MiscChargesOutlbl.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // StayChargesOutlbl
            // 
            this.StayChargesOutlbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.StayChargesOutlbl.Location = new System.Drawing.Point(104, 16);
            this.StayChargesOutlbl.Name = "StayChargesOutlbl";
            this.StayChargesOutlbl.Size = new System.Drawing.Size(100, 23);
            this.StayChargesOutlbl.TabIndex = 4;
            this.StayChargesOutlbl.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // TotalChargeslbl
            // 
            this.TotalChargeslbl.Location = new System.Drawing.Point(21, 84);
            this.TotalChargeslbl.Name = "TotalChargeslbl";
            this.TotalChargeslbl.Size = new System.Drawing.Size(77, 13);
            this.TotalChargeslbl.TabIndex = 2;
            this.TotalChargeslbl.Text = "Total";
            this.TotalChargeslbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // MiscChargeslbl
            // 
            this.MiscChargeslbl.Location = new System.Drawing.Point(21, 52);
            this.MiscChargeslbl.Name = "MiscChargeslbl";
            this.MiscChargeslbl.Size = new System.Drawing.Size(77, 13);
            this.MiscChargeslbl.TabIndex = 1;
            this.MiscChargeslbl.Text = "Misc Charges";
            this.MiscChargeslbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // StayChargeslbl
            // 
            this.StayChargeslbl.Location = new System.Drawing.Point(3, 23);
            this.StayChargeslbl.Name = "StayChargeslbl";
            this.StayChargeslbl.Size = new System.Drawing.Size(95, 13);
            this.StayChargeslbl.TabIndex = 0;
            this.StayChargeslbl.Text = "Stay Charges";
            this.StayChargeslbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Chargesgbx
            // 
            this.Chargesgbx.Controls.Add(this.PhysRehablbl);
            this.Chargesgbx.Controls.Add(this.Lablbl);
            this.Chargesgbx.Controls.Add(this.Surgicallbl);
            this.Chargesgbx.Controls.Add(this.Medicationlbl);
            this.Chargesgbx.Controls.Add(this.PhysRehabtxb);
            this.Chargesgbx.Controls.Add(this.Labtxb);
            this.Chargesgbx.Controls.Add(this.Surgicaltxb);
            this.Chargesgbx.Controls.Add(this.Medicationtxb);
            this.Chargesgbx.Controls.Add(this.Daystxb);
            this.Chargesgbx.Controls.Add(this.Dayslbl);
            this.Chargesgbx.Location = new System.Drawing.Point(12, 12);
            this.Chargesgbx.Name = "Chargesgbx";
            this.Chargesgbx.Size = new System.Drawing.Size(222, 168);
            this.Chargesgbx.TabIndex = 11;
            this.Chargesgbx.TabStop = false;
            this.Chargesgbx.Text = "Charges";
            // 
            // PhysRehablbl
            // 
            this.PhysRehablbl.Location = new System.Drawing.Point(6, 131);
            this.PhysRehablbl.Name = "PhysRehablbl";
            this.PhysRehablbl.Size = new System.Drawing.Size(122, 17);
            this.PhysRehablbl.TabIndex = 13;
            this.PhysRehablbl.Text = "Physical Rehabilitation";
            this.PhysRehablbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Lablbl
            // 
            this.Lablbl.Location = new System.Drawing.Point(6, 105);
            this.Lablbl.Name = "Lablbl";
            this.Lablbl.Size = new System.Drawing.Size(122, 17);
            this.Lablbl.TabIndex = 12;
            this.Lablbl.Text = "Lab";
            this.Lablbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Surgicallbl
            // 
            this.Surgicallbl.Location = new System.Drawing.Point(6, 82);
            this.Surgicallbl.Name = "Surgicallbl";
            this.Surgicallbl.Size = new System.Drawing.Size(122, 17);
            this.Surgicallbl.TabIndex = 11;
            this.Surgicallbl.Text = "Surgical";
            this.Surgicallbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Medicationlbl
            // 
            this.Medicationlbl.Location = new System.Drawing.Point(6, 56);
            this.Medicationlbl.Name = "Medicationlbl";
            this.Medicationlbl.Size = new System.Drawing.Size(122, 17);
            this.Medicationlbl.TabIndex = 10;
            this.Medicationlbl.Text = "Medication";
            this.Medicationlbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // PhysRehabtxb
            // 
            this.PhysRehabtxb.Location = new System.Drawing.Point(134, 130);
            this.PhysRehabtxb.Name = "PhysRehabtxb";
            this.PhysRehabtxb.Size = new System.Drawing.Size(45, 20);
            this.PhysRehabtxb.TabIndex = 9;
            // 
            // Labtxb
            // 
            this.Labtxb.Location = new System.Drawing.Point(134, 104);
            this.Labtxb.Name = "Labtxb";
            this.Labtxb.Size = new System.Drawing.Size(45, 20);
            this.Labtxb.TabIndex = 7;
            // 
            // Surgicaltxb
            // 
            this.Surgicaltxb.Location = new System.Drawing.Point(134, 78);
            this.Surgicaltxb.Name = "Surgicaltxb";
            this.Surgicaltxb.Size = new System.Drawing.Size(45, 20);
            this.Surgicaltxb.TabIndex = 6;
            // 
            // Medicationtxb
            // 
            this.Medicationtxb.Location = new System.Drawing.Point(134, 52);
            this.Medicationtxb.Name = "Medicationtxb";
            this.Medicationtxb.Size = new System.Drawing.Size(45, 20);
            this.Medicationtxb.TabIndex = 3;
            // 
            // Daystxb
            // 
            this.Daystxb.Location = new System.Drawing.Point(134, 26);
            this.Daystxb.Name = "Daystxb";
            this.Daystxb.Size = new System.Drawing.Size(45, 20);
            this.Daystxb.TabIndex = 2;
            // 
            // Dayslbl
            // 
            this.Dayslbl.Location = new System.Drawing.Point(6, 30);
            this.Dayslbl.Name = "Dayslbl";
            this.Dayslbl.Size = new System.Drawing.Size(122, 17);
            this.Dayslbl.TabIndex = 0;
            this.Dayslbl.Text = "Days Stayed";
            this.Dayslbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(245, 329);
            this.Controls.Add(this.Exitbtn);
            this.Controls.Add(this.Clearbtn);
            this.Controls.Add(this.Calculatebtn);
            this.Controls.Add(this.Summarygbx);
            this.Controls.Add(this.Chargesgbx);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Summarygbx.ResumeLayout(false);
            this.Chargesgbx.ResumeLayout(false);
            this.Chargesgbx.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button Exitbtn;
        private System.Windows.Forms.Button Clearbtn;
        private System.Windows.Forms.Button Calculatebtn;
        private System.Windows.Forms.GroupBox Summarygbx;
        private System.Windows.Forms.Label MiscChargesOutlbl;
        private System.Windows.Forms.Label StayChargesOutlbl;
        private System.Windows.Forms.Label MiscChargeslbl;
        private System.Windows.Forms.Label StayChargeslbl;
        private System.Windows.Forms.GroupBox Chargesgbx;
        private System.Windows.Forms.TextBox Medicationtxb;
        private System.Windows.Forms.TextBox Daystxb;
        private System.Windows.Forms.Label Dayslbl;
        private System.Windows.Forms.Label TotalChargesOutlbl;
        private System.Windows.Forms.Label TotalChargeslbl;
        private System.Windows.Forms.Label PhysRehablbl;
        private System.Windows.Forms.Label Lablbl;
        private System.Windows.Forms.Label Surgicallbl;
        private System.Windows.Forms.Label Medicationlbl;
        private System.Windows.Forms.TextBox PhysRehabtxb;
        private System.Windows.Forms.TextBox Labtxb;
        private System.Windows.Forms.TextBox Surgicaltxb;
    }
}


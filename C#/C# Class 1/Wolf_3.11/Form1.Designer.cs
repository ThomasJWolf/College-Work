
namespace Wolf_3._11
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
            this.titlelbl = new System.Windows.Forms.Label();
            this.LoanPaymenttxb = new System.Windows.Forms.TextBox();
            this.LoanPaymentlbl = new System.Windows.Forms.Label();
            this.Insurancelbl = new System.Windows.Forms.Label();
            this.Gaslbl = new System.Windows.Forms.Label();
            this.Maintenancelbl = new System.Windows.Forms.Label();
            this.Tireslbl = new System.Windows.Forms.Label();
            this.Oillbl = new System.Windows.Forms.Label();
            this.Insurancetxb = new System.Windows.Forms.TextBox();
            this.Gastxb = new System.Windows.Forms.TextBox();
            this.Oiltxb = new System.Windows.Forms.TextBox();
            this.Tirestxb = new System.Windows.Forms.TextBox();
            this.Maintenancetxb = new System.Windows.Forms.TextBox();
            this.Resetbtn = new System.Windows.Forms.Button();
            this.Exitbtn = new System.Windows.Forms.Button();
            this.Calculatebtn = new System.Windows.Forms.Button();
            this.MonthlyResultlbl = new System.Windows.Forms.Label();
            this.Yearlylbl = new System.Windows.Forms.Label();
            this.Monthlylbl = new System.Windows.Forms.Label();
            this.YearlyResultlbl = new System.Windows.Forms.Label();
            this.Inputpn = new System.Windows.Forms.Panel();
            this.Outputpn = new System.Windows.Forms.Panel();
            this.Buttonpn = new System.Windows.Forms.Panel();
            this.SuspendLayout();
            // 
            // titlelbl
            // 
            this.titlelbl.AutoSize = true;
            this.titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 36F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.titlelbl.Location = new System.Drawing.Point(12, 9);
            this.titlelbl.Name = "titlelbl";
            this.titlelbl.Size = new System.Drawing.Size(557, 55);
            this.titlelbl.TabIndex = 0;
            this.titlelbl.Text = "Monthly Automobile Cost";
            // 
            // LoanPaymenttxb
            // 
            this.LoanPaymenttxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.LoanPaymenttxb.Location = new System.Drawing.Point(181, 90);
            this.LoanPaymenttxb.Name = "LoanPaymenttxb";
            this.LoanPaymenttxb.Size = new System.Drawing.Size(100, 31);
            this.LoanPaymenttxb.TabIndex = 1;
            // 
            // LoanPaymentlbl
            // 
            this.LoanPaymentlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.LoanPaymentlbl.Location = new System.Drawing.Point(17, 93);
            this.LoanPaymentlbl.Name = "LoanPaymentlbl";
            this.LoanPaymentlbl.Size = new System.Drawing.Size(158, 25);
            this.LoanPaymentlbl.TabIndex = 2;
            this.LoanPaymentlbl.Text = "Loan Payment:";
            this.LoanPaymentlbl.TextAlign = System.Drawing.ContentAlignment.TopRight;
            // 
            // Insurancelbl
            // 
            this.Insurancelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Insurancelbl.Location = new System.Drawing.Point(16, 130);
            this.Insurancelbl.Name = "Insurancelbl";
            this.Insurancelbl.Size = new System.Drawing.Size(159, 25);
            this.Insurancelbl.TabIndex = 3;
            this.Insurancelbl.Text = "Insurance:";
            this.Insurancelbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Gaslbl
            // 
            this.Gaslbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Gaslbl.Location = new System.Drawing.Point(16, 167);
            this.Gaslbl.Name = "Gaslbl";
            this.Gaslbl.Size = new System.Drawing.Size(159, 25);
            this.Gaslbl.TabIndex = 4;
            this.Gaslbl.Text = "Gas:";
            this.Gaslbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Maintenancelbl
            // 
            this.Maintenancelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Maintenancelbl.Location = new System.Drawing.Point(393, 170);
            this.Maintenancelbl.Name = "Maintenancelbl";
            this.Maintenancelbl.Size = new System.Drawing.Size(159, 25);
            this.Maintenancelbl.TabIndex = 7;
            this.Maintenancelbl.Text = ":Maintenance";
            this.Maintenancelbl.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // Tireslbl
            // 
            this.Tireslbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Tireslbl.Location = new System.Drawing.Point(393, 133);
            this.Tireslbl.Name = "Tireslbl";
            this.Tireslbl.Size = new System.Drawing.Size(142, 25);
            this.Tireslbl.TabIndex = 6;
            this.Tireslbl.Text = ":Tires";
            this.Tireslbl.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // Oillbl
            // 
            this.Oillbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Oillbl.Location = new System.Drawing.Point(393, 96);
            this.Oillbl.Name = "Oillbl";
            this.Oillbl.Size = new System.Drawing.Size(142, 25);
            this.Oillbl.TabIndex = 5;
            this.Oillbl.Text = ":Oil";
            this.Oillbl.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // Insurancetxb
            // 
            this.Insurancetxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Insurancetxb.Location = new System.Drawing.Point(181, 127);
            this.Insurancetxb.Name = "Insurancetxb";
            this.Insurancetxb.Size = new System.Drawing.Size(100, 31);
            this.Insurancetxb.TabIndex = 8;
            // 
            // Gastxb
            // 
            this.Gastxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Gastxb.Location = new System.Drawing.Point(181, 164);
            this.Gastxb.Name = "Gastxb";
            this.Gastxb.Size = new System.Drawing.Size(100, 31);
            this.Gastxb.TabIndex = 9;
            // 
            // Oiltxb
            // 
            this.Oiltxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Oiltxb.Location = new System.Drawing.Point(287, 90);
            this.Oiltxb.Name = "Oiltxb";
            this.Oiltxb.Size = new System.Drawing.Size(100, 31);
            this.Oiltxb.TabIndex = 10;
            // 
            // Tirestxb
            // 
            this.Tirestxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Tirestxb.Location = new System.Drawing.Point(287, 127);
            this.Tirestxb.Name = "Tirestxb";
            this.Tirestxb.Size = new System.Drawing.Size(100, 31);
            this.Tirestxb.TabIndex = 11;
            // 
            // Maintenancetxb
            // 
            this.Maintenancetxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Maintenancetxb.Location = new System.Drawing.Point(287, 164);
            this.Maintenancetxb.Name = "Maintenancetxb";
            this.Maintenancetxb.Size = new System.Drawing.Size(100, 31);
            this.Maintenancetxb.TabIndex = 12;
            // 
            // Resetbtn
            // 
            this.Resetbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Resetbtn.Location = new System.Drawing.Point(148, 366);
            this.Resetbtn.Name = "Resetbtn";
            this.Resetbtn.Size = new System.Drawing.Size(133, 49);
            this.Resetbtn.TabIndex = 13;
            this.Resetbtn.Text = "Reset";
            this.Resetbtn.UseVisualStyleBackColor = true;
            this.Resetbtn.Click += new System.EventHandler(this.Resetbtn_Click);
            // 
            // Exitbtn
            // 
            this.Exitbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Exitbtn.Location = new System.Drawing.Point(287, 366);
            this.Exitbtn.Name = "Exitbtn";
            this.Exitbtn.Size = new System.Drawing.Size(133, 49);
            this.Exitbtn.TabIndex = 14;
            this.Exitbtn.Text = "Exit";
            this.Exitbtn.UseVisualStyleBackColor = true;
            this.Exitbtn.Click += new System.EventHandler(this.Exitbtn_Click);
            // 
            // Calculatebtn
            // 
            this.Calculatebtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Calculatebtn.Location = new System.Drawing.Point(218, 210);
            this.Calculatebtn.Name = "Calculatebtn";
            this.Calculatebtn.Size = new System.Drawing.Size(133, 66);
            this.Calculatebtn.TabIndex = 15;
            this.Calculatebtn.Text = "Calculate";
            this.Calculatebtn.UseVisualStyleBackColor = true;
            this.Calculatebtn.Click += new System.EventHandler(this.Calculatebtn_Click);
            // 
            // MonthlyResultlbl
            // 
            this.MonthlyResultlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.MonthlyResultlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.MonthlyResultlbl.Location = new System.Drawing.Point(287, 280);
            this.MonthlyResultlbl.Name = "MonthlyResultlbl";
            this.MonthlyResultlbl.Size = new System.Drawing.Size(183, 35);
            this.MonthlyResultlbl.TabIndex = 16;
            this.MonthlyResultlbl.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // Yearlylbl
            // 
            this.Yearlylbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Yearlylbl.Location = new System.Drawing.Point(109, 324);
            this.Yearlylbl.Name = "Yearlylbl";
            this.Yearlylbl.Size = new System.Drawing.Size(172, 25);
            this.Yearlylbl.TabIndex = 17;
            this.Yearlylbl.Text = "Yearly Payment:";
            this.Yearlylbl.TextAlign = System.Drawing.ContentAlignment.TopRight;
            // 
            // Monthlylbl
            // 
            this.Monthlylbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Monthlylbl.Location = new System.Drawing.Point(92, 285);
            this.Monthlylbl.Name = "Monthlylbl";
            this.Monthlylbl.Size = new System.Drawing.Size(189, 30);
            this.Monthlylbl.TabIndex = 18;
            this.Monthlylbl.Text = "Monthly Payment:";
            this.Monthlylbl.TextAlign = System.Drawing.ContentAlignment.TopRight;
            // 
            // YearlyResultlbl
            // 
            this.YearlyResultlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.YearlyResultlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.YearlyResultlbl.Location = new System.Drawing.Point(287, 319);
            this.YearlyResultlbl.Name = "YearlyResultlbl";
            this.YearlyResultlbl.Size = new System.Drawing.Size(183, 35);
            this.YearlyResultlbl.TabIndex = 19;
            this.YearlyResultlbl.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // Inputpn
            // 
            this.Inputpn.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Inputpn.Location = new System.Drawing.Point(12, 79);
            this.Inputpn.Name = "Inputpn";
            this.Inputpn.Size = new System.Drawing.Size(544, 125);
            this.Inputpn.TabIndex = 20;
            // 
            // Outputpn
            // 
            this.Outputpn.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Outputpn.Location = new System.Drawing.Point(12, 201);
            this.Outputpn.Name = "Outputpn";
            this.Outputpn.Size = new System.Drawing.Size(544, 159);
            this.Outputpn.TabIndex = 21;
            // 
            // Buttonpn
            // 
            this.Buttonpn.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Buttonpn.Location = new System.Drawing.Point(137, 357);
            this.Buttonpn.Name = "Buttonpn";
            this.Buttonpn.Size = new System.Drawing.Size(292, 67);
            this.Buttonpn.TabIndex = 22;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(568, 427);
            this.Controls.Add(this.YearlyResultlbl);
            this.Controls.Add(this.Monthlylbl);
            this.Controls.Add(this.Yearlylbl);
            this.Controls.Add(this.MonthlyResultlbl);
            this.Controls.Add(this.Calculatebtn);
            this.Controls.Add(this.Exitbtn);
            this.Controls.Add(this.Resetbtn);
            this.Controls.Add(this.Maintenancetxb);
            this.Controls.Add(this.Tirestxb);
            this.Controls.Add(this.Oiltxb);
            this.Controls.Add(this.Gastxb);
            this.Controls.Add(this.Insurancetxb);
            this.Controls.Add(this.Maintenancelbl);
            this.Controls.Add(this.Tireslbl);
            this.Controls.Add(this.Oillbl);
            this.Controls.Add(this.Gaslbl);
            this.Controls.Add(this.Insurancelbl);
            this.Controls.Add(this.LoanPaymentlbl);
            this.Controls.Add(this.LoanPaymenttxb);
            this.Controls.Add(this.titlelbl);
            this.Controls.Add(this.Inputpn);
            this.Controls.Add(this.Outputpn);
            this.Controls.Add(this.Buttonpn);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label titlelbl;
        private System.Windows.Forms.TextBox LoanPaymenttxb;
        private System.Windows.Forms.Label LoanPaymentlbl;
        private System.Windows.Forms.Label Insurancelbl;
        private System.Windows.Forms.Label Gaslbl;
        private System.Windows.Forms.Label Maintenancelbl;
        private System.Windows.Forms.Label Tireslbl;
        private System.Windows.Forms.Label Oillbl;
        private System.Windows.Forms.TextBox Insurancetxb;
        private System.Windows.Forms.TextBox Gastxb;
        private System.Windows.Forms.TextBox Oiltxb;
        private System.Windows.Forms.TextBox Tirestxb;
        private System.Windows.Forms.TextBox Maintenancetxb;
        private System.Windows.Forms.Button Resetbtn;
        private System.Windows.Forms.Button Exitbtn;
        private System.Windows.Forms.Button Calculatebtn;
        private System.Windows.Forms.Label MonthlyResultlbl;
        private System.Windows.Forms.Label Yearlylbl;
        private System.Windows.Forms.Label Monthlylbl;
        private System.Windows.Forms.Label YearlyResultlbl;
        private System.Windows.Forms.Panel Inputpn;
        private System.Windows.Forms.Panel Outputpn;
        private System.Windows.Forms.Panel Buttonpn;
    }
}


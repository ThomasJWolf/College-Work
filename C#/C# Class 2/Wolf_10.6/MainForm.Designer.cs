namespace Wolf_10._6
{
    partial class MainForm
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
            this.Dormcbx = new System.Windows.Forms.ComboBox();
            this.Mealcbx = new System.Windows.Forms.ComboBox();
            this.Titlelbl = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.GetTotalbtn = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // Dormcbx
            // 
            this.Dormcbx.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Dormcbx.FormattingEnabled = true;
            this.Dormcbx.Items.AddRange(new object[] {
            "Allen Hall - $1,500 per semester",
            "Pike Hall - $1,600 per semester",
            "Farthing Hall - $1,800 per semester",
            "University Suites - $2,500 per semester"});
            this.Dormcbx.Location = new System.Drawing.Point(34, 87);
            this.Dormcbx.Name = "Dormcbx";
            this.Dormcbx.Size = new System.Drawing.Size(325, 28);
            this.Dormcbx.TabIndex = 0;
            // 
            // Mealcbx
            // 
            this.Mealcbx.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Mealcbx.FormattingEnabled = true;
            this.Mealcbx.Items.AddRange(new object[] {
            "7 meals per week - $ 600 per semester",
            "14 meals per week - $1,200 per semester",
            "Unlimited meals - $1,700 per semester"});
            this.Mealcbx.Location = new System.Drawing.Point(365, 87);
            this.Mealcbx.Name = "Mealcbx";
            this.Mealcbx.Size = new System.Drawing.Size(325, 28);
            this.Mealcbx.TabIndex = 1;
            // 
            // Titlelbl
            // 
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.ForeColor = System.Drawing.Color.DarkBlue;
            this.Titlelbl.Location = new System.Drawing.Point(221, 21);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(291, 29);
            this.Titlelbl.TabIndex = 2;
            this.Titlelbl.Text = "Dorm and Meal Calculator";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.Color.DarkBlue;
            this.label1.Location = new System.Drawing.Point(174, 60);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(61, 24);
            this.label1.TabIndex = 3;
            this.label1.Text = "Dorm:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.ForeColor = System.Drawing.Color.DarkBlue;
            this.label2.Location = new System.Drawing.Point(508, 60);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(56, 24);
            this.label2.TabIndex = 4;
            this.label2.Text = "Meal:";
            // 
            // GetTotalbtn
            // 
            this.GetTotalbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.GetTotalbtn.Location = new System.Drawing.Point(315, 135);
            this.GetTotalbtn.Name = "GetTotalbtn";
            this.GetTotalbtn.Size = new System.Drawing.Size(94, 37);
            this.GetTotalbtn.TabIndex = 5;
            this.GetTotalbtn.Text = "Get Total";
            this.GetTotalbtn.UseVisualStyleBackColor = true;
            this.GetTotalbtn.Click += new System.EventHandler(this.GetTotalbtn_Click);
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.LightBlue;
            this.ClientSize = new System.Drawing.Size(728, 181);
            this.Controls.Add(this.GetTotalbtn);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.Titlelbl);
            this.Controls.Add(this.Mealcbx);
            this.Controls.Add(this.Dormcbx);
            this.Name = "MainForm";
            this.Text = "MainForm";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.ComboBox Dormcbx;
        private System.Windows.Forms.ComboBox Mealcbx;
        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button GetTotalbtn;
    }
}


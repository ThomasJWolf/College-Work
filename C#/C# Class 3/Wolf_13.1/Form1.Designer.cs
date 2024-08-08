namespace Wolf_13._1
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
            this.NumbersLbx = new System.Windows.Forms.ListBox();
            this.OneToTenbtn = new System.Windows.Forms.Button();
            this.NoNegativebtn = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // NumbersLbx
            // 
            this.NumbersLbx.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            this.NumbersLbx.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.NumbersLbx.FormattingEnabled = true;
            this.NumbersLbx.ItemHeight = 18;
            this.NumbersLbx.Location = new System.Drawing.Point(55, 13);
            this.NumbersLbx.Margin = new System.Windows.Forms.Padding(4);
            this.NumbersLbx.Name = "NumbersLbx";
            this.NumbersLbx.Size = new System.Drawing.Size(76, 454);
            this.NumbersLbx.TabIndex = 0;
            // 
            // OneToTenbtn
            // 
            this.OneToTenbtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.OneToTenbtn.Location = new System.Drawing.Point(13, 536);
            this.OneToTenbtn.Margin = new System.Windows.Forms.Padding(4);
            this.OneToTenbtn.Name = "OneToTenbtn";
            this.OneToTenbtn.Size = new System.Drawing.Size(160, 54);
            this.OneToTenbtn.TabIndex = 2;
            this.OneToTenbtn.Text = "1 - 10 Sort";
            this.OneToTenbtn.UseVisualStyleBackColor = true;
            this.OneToTenbtn.Click += new System.EventHandler(this.OneToTenbtn_Click);
            // 
            // NoNegativebtn
            // 
            this.NoNegativebtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.NoNegativebtn.Location = new System.Drawing.Point(13, 474);
            this.NoNegativebtn.Margin = new System.Windows.Forms.Padding(4);
            this.NoNegativebtn.Name = "NoNegativebtn";
            this.NoNegativebtn.Size = new System.Drawing.Size(160, 54);
            this.NoNegativebtn.TabIndex = 3;
            this.NoNegativebtn.Text = "Remove Negative Numbers";
            this.NoNegativebtn.UseVisualStyleBackColor = true;
            this.NoNegativebtn.Click += new System.EventHandler(this.NoNegativebtn_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 18F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            this.ClientSize = new System.Drawing.Size(189, 623);
            this.Controls.Add(this.NoNegativebtn);
            this.Controls.Add(this.OneToTenbtn);
            this.Controls.Add(this.NumbersLbx);
            this.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.Margin = new System.Windows.Forms.Padding(4);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.ListBox NumbersLbx;
        private System.Windows.Forms.Button OneToTenbtn;
        private System.Windows.Forms.Button NoNegativebtn;
    }
}


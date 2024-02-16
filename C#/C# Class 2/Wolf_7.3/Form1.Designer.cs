namespace Wolf_7._3
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
            this.Titlelbl = new System.Windows.Forms.Label();
            this.Inputtxb = new System.Windows.Forms.TextBox();
            this.Searchntn = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // Titlelbl
            // 
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(12, 9);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(276, 24);
            this.Titlelbl.TabIndex = 0;
            this.Titlelbl.Text = "Search for the Account Number";
            // 
            // Inputtxb
            // 
            this.Inputtxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Inputtxb.Location = new System.Drawing.Point(83, 49);
            this.Inputtxb.Name = "Inputtxb";
            this.Inputtxb.Size = new System.Drawing.Size(128, 26);
            this.Inputtxb.TabIndex = 1;
            this.Inputtxb.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            // 
            // Searchntn
            // 
            this.Searchntn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Searchntn.Location = new System.Drawing.Point(83, 92);
            this.Searchntn.Name = "Searchntn";
            this.Searchntn.Size = new System.Drawing.Size(128, 35);
            this.Searchntn.TabIndex = 2;
            this.Searchntn.Text = "Search";
            this.Searchntn.UseVisualStyleBackColor = true;
            this.Searchntn.Click += new System.EventHandler(this.Searchntn_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(297, 148);
            this.Controls.Add(this.Searchntn);
            this.Controls.Add(this.Inputtxb);
            this.Controls.Add(this.Titlelbl);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.TextBox Inputtxb;
        private System.Windows.Forms.Button Searchntn;
    }
}


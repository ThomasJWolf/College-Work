namespace Wolf_10._6
{
    partial class Total
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
            this.TotalTitlelbl = new System.Windows.Forms.Label();
            this.Totallbl = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // TotalTitlelbl
            // 
            this.TotalTitlelbl.AutoSize = true;
            this.TotalTitlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TotalTitlelbl.ForeColor = System.Drawing.Color.DarkBlue;
            this.TotalTitlelbl.Location = new System.Drawing.Point(73, 9);
            this.TotalTitlelbl.Name = "TotalTitlelbl";
            this.TotalTitlelbl.Size = new System.Drawing.Size(68, 29);
            this.TotalTitlelbl.TabIndex = 0;
            this.TotalTitlelbl.Text = "Total";
            // 
            // Totallbl
            // 
            this.Totallbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Totallbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Totallbl.ForeColor = System.Drawing.Color.DarkBlue;
            this.Totallbl.Location = new System.Drawing.Point(8, 53);
            this.Totallbl.Name = "Totallbl";
            this.Totallbl.Size = new System.Drawing.Size(202, 40);
            this.Totallbl.TabIndex = 1;
            this.Totallbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Total
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.LightBlue;
            this.ClientSize = new System.Drawing.Size(220, 107);
            this.Controls.Add(this.Totallbl);
            this.Controls.Add(this.TotalTitlelbl);
            this.Name = "Total";
            this.Text = "Total";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label TotalTitlelbl;
        private System.Windows.Forms.Label Totallbl;
    }
}
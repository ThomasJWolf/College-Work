namespace Wolf_11._1
{
    partial class OutputForm
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
            this.Paylbl = new System.Windows.Forms.Label();
            this.ShiftNumlbl = new System.Windows.Forms.Label();
            this.Numberlbl = new System.Windows.Forms.Label();
            this.Namelbl = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // Paylbl
            // 
            this.Paylbl.AutoSize = true;
            this.Paylbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Paylbl.Font = new System.Drawing.Font("Arial", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Paylbl.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.Paylbl.Location = new System.Drawing.Point(12, 129);
            this.Paylbl.Name = "Paylbl";
            this.Paylbl.Size = new System.Drawing.Size(171, 26);
            this.Paylbl.TabIndex = 11;
            this.Paylbl.Text = "Hourly Pay Rate:";
            this.Paylbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // ShiftNumlbl
            // 
            this.ShiftNumlbl.AutoSize = true;
            this.ShiftNumlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.ShiftNumlbl.Font = new System.Drawing.Font("Arial", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ShiftNumlbl.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.ShiftNumlbl.Location = new System.Drawing.Point(12, 89);
            this.ShiftNumlbl.Name = "ShiftNumlbl";
            this.ShiftNumlbl.Size = new System.Drawing.Size(137, 26);
            this.ShiftNumlbl.TabIndex = 10;
            this.ShiftNumlbl.Text = "Shift Number:";
            this.ShiftNumlbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Numberlbl
            // 
            this.Numberlbl.AutoSize = true;
            this.Numberlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Numberlbl.Font = new System.Drawing.Font("Arial", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Numberlbl.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.Numberlbl.Location = new System.Drawing.Point(12, 49);
            this.Numberlbl.Name = "Numberlbl";
            this.Numberlbl.Size = new System.Drawing.Size(187, 26);
            this.Numberlbl.TabIndex = 9;
            this.Numberlbl.Text = "Employee Number:";
            this.Numberlbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Namelbl
            // 
            this.Namelbl.AutoSize = true;
            this.Namelbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Namelbl.Font = new System.Drawing.Font("Arial", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Namelbl.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.Namelbl.Location = new System.Drawing.Point(12, 9);
            this.Namelbl.Name = "Namelbl";
            this.Namelbl.Size = new System.Drawing.Size(170, 26);
            this.Namelbl.TabIndex = 8;
            this.Namelbl.Text = "Employee Name:";
            this.Namelbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // OutputForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            this.ClientSize = new System.Drawing.Size(208, 165);
            this.Controls.Add(this.Paylbl);
            this.Controls.Add(this.ShiftNumlbl);
            this.Controls.Add(this.Numberlbl);
            this.Controls.Add(this.Namelbl);
            this.Name = "OutputForm";
            this.Text = "OutputForm";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label Paylbl;
        private System.Windows.Forms.Label ShiftNumlbl;
        private System.Windows.Forms.Label Numberlbl;
        private System.Windows.Forms.Label Namelbl;
    }
}
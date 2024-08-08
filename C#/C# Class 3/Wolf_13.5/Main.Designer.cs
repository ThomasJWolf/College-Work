namespace Wolf_13._5
{
    partial class Main
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
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.Outputlbl = new System.Windows.Forms.Label();
            this.Titlelbl = new System.Windows.Forms.Label();
            this.Infolbl = new System.Windows.Forms.Label();
            this.AllClosingGreaterbtn = new System.Windows.Forms.Button();
            this.FirstClosingGreaterbtn = new System.Windows.Forms.Button();
            this.Outputlbx = new System.Windows.Forms.ListBox();
            this.SuspendLayout();
            // 
            // textBox1
            // 
            this.textBox1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            this.textBox1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.textBox1.Location = new System.Drawing.Point(165, 88);
            this.textBox1.Margin = new System.Windows.Forms.Padding(4);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(148, 26);
            this.textBox1.TabIndex = 3;
            // 
            // Outputlbl
            // 
            this.Outputlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Outputlbl.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Outputlbl.Location = new System.Drawing.Point(18, 124);
            this.Outputlbl.Name = "Outputlbl";
            this.Outputlbl.Size = new System.Drawing.Size(445, 58);
            this.Outputlbl.TabIndex = 4;
            this.Outputlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Titlelbl
            // 
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Arial", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(12, 9);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(451, 32);
            this.Titlelbl.TabIndex = 5;
            this.Titlelbl.Text = "Dow Jones Industrial Average Highs";
            // 
            // Infolbl
            // 
            this.Infolbl.Location = new System.Drawing.Point(15, 50);
            this.Infolbl.Name = "Infolbl";
            this.Infolbl.Size = new System.Drawing.Size(448, 25);
            this.Infolbl.TabIndex = 6;
            this.Infolbl.Text = "Enter a value in the text box below and hit the button";
            this.Infolbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // AllClosingGreaterbtn
            // 
            this.AllClosingGreaterbtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.AllClosingGreaterbtn.Location = new System.Drawing.Point(257, 482);
            this.AllClosingGreaterbtn.Margin = new System.Windows.Forms.Padding(4);
            this.AllClosingGreaterbtn.Name = "AllClosingGreaterbtn";
            this.AllClosingGreaterbtn.Size = new System.Drawing.Size(206, 43);
            this.AllClosingGreaterbtn.TabIndex = 7;
            this.AllClosingGreaterbtn.Text = "All Closing value >= input";
            this.AllClosingGreaterbtn.UseVisualStyleBackColor = true;
            this.AllClosingGreaterbtn.Click += new System.EventHandler(this.AllClosingGreaterbtn_Click);
            // 
            // FirstClosingGreaterbtn
            // 
            this.FirstClosingGreaterbtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.FirstClosingGreaterbtn.Location = new System.Drawing.Point(18, 482);
            this.FirstClosingGreaterbtn.Margin = new System.Windows.Forms.Padding(4);
            this.FirstClosingGreaterbtn.Name = "FirstClosingGreaterbtn";
            this.FirstClosingGreaterbtn.Size = new System.Drawing.Size(206, 43);
            this.FirstClosingGreaterbtn.TabIndex = 9;
            this.FirstClosingGreaterbtn.Text = "First Closing value >= input";
            this.FirstClosingGreaterbtn.UseVisualStyleBackColor = true;
            this.FirstClosingGreaterbtn.Click += new System.EventHandler(this.FirstClosingGreaterbtn_Click);
            // 
            // Outputlbx
            // 
            this.Outputlbx.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            this.Outputlbx.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Outputlbx.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.Outputlbx.FormattingEnabled = true;
            this.Outputlbx.ItemHeight = 18;
            this.Outputlbx.Location = new System.Drawing.Point(18, 191);
            this.Outputlbx.Name = "Outputlbx";
            this.Outputlbx.Size = new System.Drawing.Size(445, 272);
            this.Outputlbx.TabIndex = 10;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 18F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            this.ClientSize = new System.Drawing.Size(485, 538);
            this.Controls.Add(this.Outputlbx);
            this.Controls.Add(this.FirstClosingGreaterbtn);
            this.Controls.Add(this.AllClosingGreaterbtn);
            this.Controls.Add(this.Infolbl);
            this.Controls.Add(this.Titlelbl);
            this.Controls.Add(this.Outputlbl);
            this.Controls.Add(this.textBox1);
            this.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.Margin = new System.Windows.Forms.Padding(4);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.Label Outputlbl;
        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.Label Infolbl;
        private System.Windows.Forms.Button AllClosingGreaterbtn;
        private System.Windows.Forms.Button FirstClosingGreaterbtn;
        private System.Windows.Forms.ListBox Outputlbx;
    }
}


namespace Wolf_5._11
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
            this.Calculatebtn = new System.Windows.Forms.Button();
            this.Inputtxb = new System.Windows.Forms.TextBox();
            this.Descriptionlbl = new System.Windows.Forms.Label();
            this.Titlelbl = new System.Windows.Forms.Label();
            this.Outputlbl = new System.Windows.Forms.Label();
            this.Exitbtn = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // Calculatebtn
            // 
            this.Calculatebtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Calculatebtn.Location = new System.Drawing.Point(52, 132);
            this.Calculatebtn.Name = "Calculatebtn";
            this.Calculatebtn.Size = new System.Drawing.Size(106, 47);
            this.Calculatebtn.TabIndex = 10;
            this.Calculatebtn.Text = "Calculate";
            this.Calculatebtn.UseVisualStyleBackColor = true;
            this.Calculatebtn.Click += new System.EventHandler(this.Calculatebtn_Click);
            // 
            // Inputtxb
            // 
            this.Inputtxb.Location = new System.Drawing.Point(118, 67);
            this.Inputtxb.Name = "Inputtxb";
            this.Inputtxb.Size = new System.Drawing.Size(99, 20);
            this.Inputtxb.TabIndex = 9;
            // 
            // Descriptionlbl
            // 
            this.Descriptionlbl.AutoSize = true;
            this.Descriptionlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Descriptionlbl.Location = new System.Drawing.Point(32, 31);
            this.Descriptionlbl.Name = "Descriptionlbl";
            this.Descriptionlbl.Size = new System.Drawing.Size(263, 20);
            this.Descriptionlbl.TabIndex = 7;
            this.Descriptionlbl.Text = "Enter a number between 1 and 100!";
            // 
            // Titlelbl
            // 
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(82, 6);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(166, 25);
            this.Titlelbl.TabIndex = 6;
            this.Titlelbl.Text = "Guessing Game";
            // 
            // Outputlbl
            // 
            this.Outputlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Outputlbl.Location = new System.Drawing.Point(16, 101);
            this.Outputlbl.Name = "Outputlbl";
            this.Outputlbl.Size = new System.Drawing.Size(308, 23);
            this.Outputlbl.TabIndex = 12;
            this.Outputlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Exitbtn
            // 
            this.Exitbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Exitbtn.Location = new System.Drawing.Point(175, 132);
            this.Exitbtn.Name = "Exitbtn";
            this.Exitbtn.Size = new System.Drawing.Size(106, 47);
            this.Exitbtn.TabIndex = 11;
            this.Exitbtn.Text = "Exit";
            this.Exitbtn.UseVisualStyleBackColor = true;
            this.Exitbtn.Click += new System.EventHandler(this.Exitbtn_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(340, 192);
            this.Controls.Add(this.Outputlbl);
            this.Controls.Add(this.Exitbtn);
            this.Controls.Add(this.Calculatebtn);
            this.Controls.Add(this.Inputtxb);
            this.Controls.Add(this.Descriptionlbl);
            this.Controls.Add(this.Titlelbl);
            this.Name = "Guessing Game";
            this.Text = "Guessing Game";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Button Calculatebtn;
        private System.Windows.Forms.TextBox Inputtxb;
        private System.Windows.Forms.Label Descriptionlbl;
        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.Label Outputlbl;
        private System.Windows.Forms.Button Exitbtn;
    }
}


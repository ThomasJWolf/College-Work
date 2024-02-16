namespace Wolf_5._6
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
            this.Calculatebtn = new System.Windows.Forms.Button();
            this.Titlelbl = new System.Windows.Forms.Label();
            this.Outputltb = new System.Windows.Forms.ListBox();
            this.SuspendLayout();
            // 
            // Exitbtn
            // 
            this.Exitbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Exitbtn.Location = new System.Drawing.Point(165, 247);
            this.Exitbtn.Name = "Exitbtn";
            this.Exitbtn.Size = new System.Drawing.Size(145, 36);
            this.Exitbtn.TabIndex = 11;
            this.Exitbtn.Text = "Exit";
            this.Exitbtn.UseVisualStyleBackColor = true;
            this.Exitbtn.Click += new System.EventHandler(this.Exitbtn_Click);
            // 
            // Calculatebtn
            // 
            this.Calculatebtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Calculatebtn.Location = new System.Drawing.Point(14, 247);
            this.Calculatebtn.Name = "Calculatebtn";
            this.Calculatebtn.Size = new System.Drawing.Size(145, 36);
            this.Calculatebtn.TabIndex = 9;
            this.Calculatebtn.Text = "Calculate";
            this.Calculatebtn.UseVisualStyleBackColor = true;
            this.Calculatebtn.Click += new System.EventHandler(this.Calculatebtn_Click);
            // 
            // Titlelbl
            // 
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(79, 9);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(166, 25);
            this.Titlelbl.TabIndex = 6;
            this.Titlelbl.Text = "Calories Burned";
            // 
            // Outputltb
            // 
            this.Outputltb.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Outputltb.FormattingEnabled = true;
            this.Outputltb.ItemHeight = 20;
            this.Outputltb.Location = new System.Drawing.Point(14, 37);
            this.Outputltb.Name = "Outputltb";
            this.Outputltb.Size = new System.Drawing.Size(295, 204);
            this.Outputltb.TabIndex = 12;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(321, 288);
            this.Controls.Add(this.Outputltb);
            this.Controls.Add(this.Exitbtn);
            this.Controls.Add(this.Calculatebtn);
            this.Controls.Add(this.Titlelbl);
            this.Name = "Form1";
            this.Text = "Calories Burned";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button Exitbtn;
        private System.Windows.Forms.Button Calculatebtn;
        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.ListBox Outputltb;
    }
}


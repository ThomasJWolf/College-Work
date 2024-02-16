namespace Wolf_7._6
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
            this.label1 = new System.Windows.Forms.Label();
            this.BoyNamelbl = new System.Windows.Forms.Label();
            this.BoyNametxb = new System.Windows.Forms.TextBox();
            this.BoyNameOutlbl = new System.Windows.Forms.Label();
            this.GirlNametxb = new System.Windows.Forms.TextBox();
            this.GirlNamelbl = new System.Windows.Forms.Label();
            this.GirlNameOutlbl = new System.Windows.Forms.Label();
            this.Findbtn = new System.Windows.Forms.Button();
            this.Resetbtn = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ImageAlign = System.Drawing.ContentAlignment.TopRight;
            this.label1.Location = new System.Drawing.Point(85, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(247, 25);
            this.label1.TabIndex = 0;
            this.label1.Text = "Enter a boy or girl name!";
            // 
            // BoyNamelbl
            // 
            this.BoyNamelbl.AutoSize = true;
            this.BoyNamelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.BoyNamelbl.Location = new System.Drawing.Point(51, 59);
            this.BoyNamelbl.Name = "BoyNamelbl";
            this.BoyNamelbl.Size = new System.Drawing.Size(82, 20);
            this.BoyNamelbl.TabIndex = 1;
            this.BoyNamelbl.Text = "Boy Name";
            // 
            // BoyNametxb
            // 
            this.BoyNametxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.BoyNametxb.Location = new System.Drawing.Point(29, 91);
            this.BoyNametxb.Name = "BoyNametxb";
            this.BoyNametxb.Size = new System.Drawing.Size(132, 26);
            this.BoyNametxb.TabIndex = 2;
            // 
            // BoyNameOutlbl
            // 
            this.BoyNameOutlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.BoyNameOutlbl.Location = new System.Drawing.Point(29, 130);
            this.BoyNameOutlbl.Name = "BoyNameOutlbl";
            this.BoyNameOutlbl.Size = new System.Drawing.Size(132, 63);
            this.BoyNameOutlbl.TabIndex = 3;
            this.BoyNameOutlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // GirlNametxb
            // 
            this.GirlNametxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.GirlNametxb.Location = new System.Drawing.Point(261, 91);
            this.GirlNametxb.Name = "GirlNametxb";
            this.GirlNametxb.Size = new System.Drawing.Size(132, 26);
            this.GirlNametxb.TabIndex = 5;
            // 
            // GirlNamelbl
            // 
            this.GirlNamelbl.AutoSize = true;
            this.GirlNamelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.GirlNamelbl.Location = new System.Drawing.Point(283, 59);
            this.GirlNamelbl.Name = "GirlNamelbl";
            this.GirlNamelbl.Size = new System.Drawing.Size(79, 20);
            this.GirlNamelbl.TabIndex = 4;
            this.GirlNamelbl.Text = "Girl Name";
            // 
            // GirlNameOutlbl
            // 
            this.GirlNameOutlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.GirlNameOutlbl.Location = new System.Drawing.Point(261, 130);
            this.GirlNameOutlbl.Name = "GirlNameOutlbl";
            this.GirlNameOutlbl.Size = new System.Drawing.Size(132, 63);
            this.GirlNameOutlbl.TabIndex = 6;
            this.GirlNameOutlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Findbtn
            // 
            this.Findbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Findbtn.Location = new System.Drawing.Point(160, 91);
            this.Findbtn.Name = "Findbtn";
            this.Findbtn.Size = new System.Drawing.Size(102, 26);
            this.Findbtn.TabIndex = 8;
            this.Findbtn.Text = "Find";
            this.Findbtn.TextAlign = System.Drawing.ContentAlignment.TopCenter;
            this.Findbtn.UseVisualStyleBackColor = true;
            this.Findbtn.Click += new System.EventHandler(this.Findbtn_Click);
            // 
            // Resetbtn
            // 
            this.Resetbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Resetbtn.Location = new System.Drawing.Point(160, 148);
            this.Resetbtn.Name = "Resetbtn";
            this.Resetbtn.Size = new System.Drawing.Size(102, 26);
            this.Resetbtn.TabIndex = 9;
            this.Resetbtn.Text = "Reset";
            this.Resetbtn.UseVisualStyleBackColor = true;
            this.Resetbtn.Click += new System.EventHandler(this.Resetbtn_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(424, 206);
            this.Controls.Add(this.BoyNametxb);
            this.Controls.Add(this.GirlNametxb);
            this.Controls.Add(this.Resetbtn);
            this.Controls.Add(this.Findbtn);
            this.Controls.Add(this.GirlNameOutlbl);
            this.Controls.Add(this.GirlNamelbl);
            this.Controls.Add(this.BoyNameOutlbl);
            this.Controls.Add(this.BoyNamelbl);
            this.Controls.Add(this.label1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label BoyNamelbl;
        private System.Windows.Forms.TextBox BoyNametxb;
        private System.Windows.Forms.Label BoyNameOutlbl;
        private System.Windows.Forms.TextBox GirlNametxb;
        private System.Windows.Forms.Label GirlNamelbl;
        private System.Windows.Forms.Label GirlNameOutlbl;
        private System.Windows.Forms.Button Findbtn;
        private System.Windows.Forms.Button Resetbtn;
    }
}


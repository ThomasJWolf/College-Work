namespace Wolf_4._7
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
            this.Packagestxb = new System.Windows.Forms.TextBox();
            this.Discountlbl = new System.Windows.Forms.Label();
            this.Subtotallbl = new System.Windows.Forms.Label();
            this.Totallbl = new System.Windows.Forms.Label();
            this.Calculatebtn = new System.Windows.Forms.Button();
            this.SubtotalResultlbl = new System.Windows.Forms.Label();
            this.DiscountResultlbl = new System.Windows.Forms.Label();
            this.TotalResultlbl = new System.Windows.Forms.Label();
            this.Clearbtn = new System.Windows.Forms.Button();
            this.Exitbtn = new System.Windows.Forms.Button();
            this.Exitpnl = new System.Windows.Forms.Panel();
            this.Enterpnl = new System.Windows.Forms.Panel();
            this.Exitpnl.SuspendLayout();
            this.Enterpnl.SuspendLayout();
            this.SuspendLayout();
            // 
            // Titlelbl
            // 
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(12, 9);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(525, 42);
            this.Titlelbl.TabIndex = 0;
            this.Titlelbl.Text = "Enter the number of packages purchased";
            this.Titlelbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Packagestxb
            // 
            this.Packagestxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 27.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Packagestxb.Location = new System.Drawing.Point(18, 8);
            this.Packagestxb.Name = "Packagestxb";
            this.Packagestxb.Size = new System.Drawing.Size(218, 49);
            this.Packagestxb.TabIndex = 1;
            this.Packagestxb.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            // 
            // Discountlbl
            // 
            this.Discountlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Discountlbl.Location = new System.Drawing.Point(290, 117);
            this.Discountlbl.Name = "Discountlbl";
            this.Discountlbl.Size = new System.Drawing.Size(103, 35);
            this.Discountlbl.TabIndex = 2;
            this.Discountlbl.Text = "Discount:";
            this.Discountlbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Subtotallbl
            // 
            this.Subtotallbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Subtotallbl.Location = new System.Drawing.Point(290, 82);
            this.Subtotallbl.Name = "Subtotallbl";
            this.Subtotallbl.Size = new System.Drawing.Size(103, 35);
            this.Subtotallbl.TabIndex = 3;
            this.Subtotallbl.Text = "Subtotal:";
            this.Subtotallbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Totallbl
            // 
            this.Totallbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Totallbl.Location = new System.Drawing.Point(285, 152);
            this.Totallbl.Name = "Totallbl";
            this.Totallbl.Size = new System.Drawing.Size(108, 35);
            this.Totallbl.TabIndex = 4;
            this.Totallbl.Text = "Total:";
            this.Totallbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Calculatebtn
            // 
            this.Calculatebtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Calculatebtn.Location = new System.Drawing.Point(60, 63);
            this.Calculatebtn.Name = "Calculatebtn";
            this.Calculatebtn.Size = new System.Drawing.Size(137, 66);
            this.Calculatebtn.TabIndex = 5;
            this.Calculatebtn.Text = "Calculate";
            this.Calculatebtn.UseVisualStyleBackColor = true;
            this.Calculatebtn.Click += new System.EventHandler(this.Calculatebtn_Click);
            // 
            // SubtotalResultlbl
            // 
            this.SubtotalResultlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.SubtotalResultlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.SubtotalResultlbl.Location = new System.Drawing.Point(118, 21);
            this.SubtotalResultlbl.Name = "SubtotalResultlbl";
            this.SubtotalResultlbl.Size = new System.Drawing.Size(118, 35);
            this.SubtotalResultlbl.TabIndex = 6;
            this.SubtotalResultlbl.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // DiscountResultlbl
            // 
            this.DiscountResultlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.DiscountResultlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.DiscountResultlbl.Location = new System.Drawing.Point(118, 56);
            this.DiscountResultlbl.Name = "DiscountResultlbl";
            this.DiscountResultlbl.Size = new System.Drawing.Size(118, 35);
            this.DiscountResultlbl.TabIndex = 7;
            this.DiscountResultlbl.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // TotalResultlbl
            // 
            this.TotalResultlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.TotalResultlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TotalResultlbl.Location = new System.Drawing.Point(118, 91);
            this.TotalResultlbl.Name = "TotalResultlbl";
            this.TotalResultlbl.Size = new System.Drawing.Size(118, 35);
            this.TotalResultlbl.TabIndex = 8;
            this.TotalResultlbl.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // Clearbtn
            // 
            this.Clearbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Clearbtn.Location = new System.Drawing.Point(130, 226);
            this.Clearbtn.Name = "Clearbtn";
            this.Clearbtn.Size = new System.Drawing.Size(137, 66);
            this.Clearbtn.TabIndex = 9;
            this.Clearbtn.Text = "Clear";
            this.Clearbtn.UseVisualStyleBackColor = true;
            this.Clearbtn.Click += new System.EventHandler(this.Clearbtn_Click);
            // 
            // Exitbtn
            // 
            this.Exitbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Exitbtn.Location = new System.Drawing.Point(281, 226);
            this.Exitbtn.Name = "Exitbtn";
            this.Exitbtn.Size = new System.Drawing.Size(137, 66);
            this.Exitbtn.TabIndex = 10;
            this.Exitbtn.Text = "Exit";
            this.Exitbtn.UseVisualStyleBackColor = true;
            this.Exitbtn.Click += new System.EventHandler(this.Exitbtn_Click);
            // 
            // Exitpnl
            // 
            this.Exitpnl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Exitpnl.Controls.Add(this.TotalResultlbl);
            this.Exitpnl.Controls.Add(this.DiscountResultlbl);
            this.Exitpnl.Controls.Add(this.SubtotalResultlbl);
            this.Exitpnl.Location = new System.Drawing.Point(281, 61);
            this.Exitpnl.Name = "Exitpnl";
            this.Exitpnl.Size = new System.Drawing.Size(255, 151);
            this.Exitpnl.TabIndex = 11;
            // 
            // Enterpnl
            // 
            this.Enterpnl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Enterpnl.Controls.Add(this.Packagestxb);
            this.Enterpnl.Controls.Add(this.Calculatebtn);
            this.Enterpnl.Location = new System.Drawing.Point(12, 61);
            this.Enterpnl.Name = "Enterpnl";
            this.Enterpnl.Size = new System.Drawing.Size(255, 151);
            this.Enterpnl.TabIndex = 12;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(546, 304);
            this.Controls.Add(this.Exitbtn);
            this.Controls.Add(this.Clearbtn);
            this.Controls.Add(this.Totallbl);
            this.Controls.Add(this.Subtotallbl);
            this.Controls.Add(this.Discountlbl);
            this.Controls.Add(this.Titlelbl);
            this.Controls.Add(this.Exitpnl);
            this.Controls.Add(this.Enterpnl);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Exitpnl.ResumeLayout(false);
            this.Enterpnl.ResumeLayout(false);
            this.Enterpnl.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.TextBox Packagestxb;
        private System.Windows.Forms.Label Discountlbl;
        private System.Windows.Forms.Label Subtotallbl;
        private System.Windows.Forms.Label Totallbl;
        private System.Windows.Forms.Button Calculatebtn;
        private System.Windows.Forms.Label SubtotalResultlbl;
        private System.Windows.Forms.Label DiscountResultlbl;
        private System.Windows.Forms.Label TotalResultlbl;
        private System.Windows.Forms.Button Clearbtn;
        private System.Windows.Forms.Button Exitbtn;
        private System.Windows.Forms.Panel Exitpnl;
        private System.Windows.Forms.Panel Enterpnl;
    }
}


namespace Wolf_Exam2
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
            this.Productcbx = new System.Windows.Forms.ComboBox();
            this.Infolbl = new System.Windows.Forms.Label();
            this.Addbtn = new System.Windows.Forms.Button();
            this.SubTotallbl = new System.Windows.Forms.Label();
            this.Productpnl = new System.Windows.Forms.Panel();
            this.Totalpnl = new System.Windows.Forms.Panel();
            this.Totallbl = new System.Windows.Forms.Label();
            this.Taxlbl = new System.Windows.Forms.Label();
            this.Restartbtn = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.Donebtn = new System.Windows.Forms.Button();
            this.Productpnl.SuspendLayout();
            this.Totalpnl.SuspendLayout();
            this.SuspendLayout();
            // 
            // Productcbx
            // 
            this.Productcbx.Font = new System.Drawing.Font("Arial", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Productcbx.FormattingEnabled = true;
            this.Productcbx.Location = new System.Drawing.Point(276, 205);
            this.Productcbx.Name = "Productcbx";
            this.Productcbx.Size = new System.Drawing.Size(412, 32);
            this.Productcbx.TabIndex = 0;
            this.Productcbx.SelectedIndexChanged += new System.EventHandler(this.Productcbx_SelectedIndexChanged);
            // 
            // Infolbl
            // 
            this.Infolbl.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(52)))), ((int)(((byte)(52)))), ((int)(((byte)(52)))));
            this.Infolbl.Font = new System.Drawing.Font("Arial", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Infolbl.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.Infolbl.Location = new System.Drawing.Point(-1, 3);
            this.Infolbl.Name = "Infolbl";
            this.Infolbl.Size = new System.Drawing.Size(672, 117);
            this.Infolbl.TabIndex = 1;
            this.Infolbl.Text = "Name: \r\nDescription:\r\nPrice:\r\nQuantity:";
            // 
            // Addbtn
            // 
            this.Addbtn.Font = new System.Drawing.Font("Arial", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Addbtn.Location = new System.Drawing.Point(276, 242);
            this.Addbtn.Name = "Addbtn";
            this.Addbtn.Size = new System.Drawing.Size(188, 48);
            this.Addbtn.TabIndex = 2;
            this.Addbtn.Text = "Add Product";
            this.Addbtn.UseVisualStyleBackColor = true;
            this.Addbtn.Click += new System.EventHandler(this.Addbtn_Click);
            // 
            // SubTotallbl
            // 
            this.SubTotallbl.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(52)))), ((int)(((byte)(52)))), ((int)(((byte)(52)))));
            this.SubTotallbl.Font = new System.Drawing.Font("Arial", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.SubTotallbl.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.SubTotallbl.Location = new System.Drawing.Point(3, 20);
            this.SubTotallbl.Name = "SubTotallbl";
            this.SubTotallbl.Size = new System.Drawing.Size(236, 33);
            this.SubTotallbl.TabIndex = 3;
            this.SubTotallbl.Text = "Sub Total: $0";
            // 
            // Productpnl
            // 
            this.Productpnl.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(52)))), ((int)(((byte)(52)))), ((int)(((byte)(52)))));
            this.Productpnl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Productpnl.Controls.Add(this.Infolbl);
            this.Productpnl.Font = new System.Drawing.Font("Arial", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Productpnl.Location = new System.Drawing.Point(12, 76);
            this.Productpnl.Name = "Productpnl";
            this.Productpnl.Size = new System.Drawing.Size(676, 122);
            this.Productpnl.TabIndex = 4;
            // 
            // Totalpnl
            // 
            this.Totalpnl.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(52)))), ((int)(((byte)(52)))), ((int)(((byte)(52)))));
            this.Totalpnl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Totalpnl.Controls.Add(this.Totallbl);
            this.Totalpnl.Controls.Add(this.Taxlbl);
            this.Totalpnl.Controls.Add(this.SubTotallbl);
            this.Totalpnl.Font = new System.Drawing.Font("Arial", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Totalpnl.Location = new System.Drawing.Point(12, 205);
            this.Totalpnl.Name = "Totalpnl";
            this.Totalpnl.Size = new System.Drawing.Size(258, 136);
            this.Totalpnl.TabIndex = 5;
            // 
            // Totallbl
            // 
            this.Totallbl.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(52)))), ((int)(((byte)(52)))), ((int)(((byte)(52)))));
            this.Totallbl.Font = new System.Drawing.Font("Arial", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Totallbl.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.Totallbl.Location = new System.Drawing.Point(3, 87);
            this.Totallbl.Name = "Totallbl";
            this.Totallbl.Size = new System.Drawing.Size(236, 32);
            this.Totallbl.TabIndex = 5;
            this.Totallbl.Text = "Total: $0";
            // 
            // Taxlbl
            // 
            this.Taxlbl.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(52)))), ((int)(((byte)(52)))), ((int)(((byte)(52)))));
            this.Taxlbl.Font = new System.Drawing.Font("Arial", 18F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Taxlbl.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.Taxlbl.Location = new System.Drawing.Point(3, 53);
            this.Taxlbl.Name = "Taxlbl";
            this.Taxlbl.Size = new System.Drawing.Size(236, 33);
            this.Taxlbl.TabIndex = 4;
            this.Taxlbl.Text = "Tax: $0";
            // 
            // Restartbtn
            // 
            this.Restartbtn.Font = new System.Drawing.Font("Arial", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Restartbtn.Location = new System.Drawing.Point(392, 293);
            this.Restartbtn.Name = "Restartbtn";
            this.Restartbtn.Size = new System.Drawing.Size(188, 48);
            this.Restartbtn.TabIndex = 7;
            this.Restartbtn.Text = "Restart";
            this.Restartbtn.UseVisualStyleBackColor = true;
            this.Restartbtn.Click += new System.EventHandler(this.Restartbtn_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Arial", 36F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.label1.Location = new System.Drawing.Point(192, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(332, 55);
            this.label1.TabIndex = 8;
            this.label1.Text = "Shopping Cart";
            // 
            // Donebtn
            // 
            this.Donebtn.Font = new System.Drawing.Font("Arial", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Donebtn.Location = new System.Drawing.Point(500, 242);
            this.Donebtn.Name = "Donebtn";
            this.Donebtn.Size = new System.Drawing.Size(188, 48);
            this.Donebtn.TabIndex = 9;
            this.Donebtn.Text = "Complete Order";
            this.Donebtn.UseVisualStyleBackColor = true;
            this.Donebtn.Click += new System.EventHandler(this.Donebtn_Click);
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 14F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            this.ClientSize = new System.Drawing.Size(695, 353);
            this.Controls.Add(this.Donebtn);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.Restartbtn);
            this.Controls.Add(this.Productcbx);
            this.Controls.Add(this.Addbtn);
            this.Controls.Add(this.Productpnl);
            this.Controls.Add(this.Totalpnl);
            this.Font = new System.Drawing.Font("Arial", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Name = "MainForm";
            this.Text = "Shopping Cart";
            this.Load += new System.EventHandler(this.MainForm_Load);
            this.Productpnl.ResumeLayout(false);
            this.Totalpnl.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.ComboBox Productcbx;
        private System.Windows.Forms.Label Infolbl;
        private System.Windows.Forms.Button Addbtn;
        private System.Windows.Forms.Label SubTotallbl;
        private System.Windows.Forms.Panel Productpnl;
        private System.Windows.Forms.Panel Totalpnl;
        private System.Windows.Forms.Label Totallbl;
        private System.Windows.Forms.Label Taxlbl;
        private System.Windows.Forms.Button Restartbtn;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button Donebtn;
    }
}


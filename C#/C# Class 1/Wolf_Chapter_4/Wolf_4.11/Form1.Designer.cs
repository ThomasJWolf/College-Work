namespace Wolf_4._11
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
            this.Resetbtn = new System.Windows.Forms.Button();
            this.Exitpnl = new System.Windows.Forms.Panel();
            this.Resultlbl = new System.Windows.Forms.Label();
            this.Discriptionlbl = new System.Windows.Forms.Label();
            this.Titlelbl = new System.Windows.Forms.Label();
            this.Enterpnl = new System.Windows.Forms.Panel();
            this.Calculatebtn = new System.Windows.Forms.Button();
            this.Timetxb = new System.Windows.Forms.TextBox();
            this.Exitpnl.SuspendLayout();
            this.Enterpnl.SuspendLayout();
            this.SuspendLayout();
            // 
            // Exitbtn
            // 
            this.Exitbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Exitbtn.Location = new System.Drawing.Point(429, 191);
            this.Exitbtn.Name = "Exitbtn";
            this.Exitbtn.Size = new System.Drawing.Size(123, 46);
            this.Exitbtn.TabIndex = 23;
            this.Exitbtn.Text = "Exit";
            this.Exitbtn.UseVisualStyleBackColor = true;
            this.Exitbtn.Click += new System.EventHandler(this.Exitbtn_Click);
            // 
            // Resetbtn
            // 
            this.Resetbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Resetbtn.Location = new System.Drawing.Point(290, 191);
            this.Resetbtn.Name = "Resetbtn";
            this.Resetbtn.Size = new System.Drawing.Size(124, 46);
            this.Resetbtn.TabIndex = 25;
            this.Resetbtn.Text = "Reset";
            this.Resetbtn.UseVisualStyleBackColor = true;
            this.Resetbtn.Click += new System.EventHandler(this.Resetbtn_Click);
            // 
            // Exitpnl
            // 
            this.Exitpnl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Exitpnl.Controls.Add(this.Resultlbl);
            this.Exitpnl.Location = new System.Drawing.Point(290, 113);
            this.Exitpnl.Name = "Exitpnl";
            this.Exitpnl.Size = new System.Drawing.Size(262, 57);
            this.Exitpnl.TabIndex = 26;
            // 
            // Resultlbl
            // 
            this.Resultlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Resultlbl.Location = new System.Drawing.Point(-1, -1);
            this.Resultlbl.Name = "Resultlbl";
            this.Resultlbl.Size = new System.Drawing.Size(262, 54);
            this.Resultlbl.TabIndex = 24;
            this.Resultlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Discriptionlbl
            // 
            this.Discriptionlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Discriptionlbl.Location = new System.Drawing.Point(14, 51);
            this.Discriptionlbl.Name = "Discriptionlbl";
            this.Discriptionlbl.Size = new System.Drawing.Size(538, 59);
            this.Discriptionlbl.TabIndex = 27;
            this.Discriptionlbl.Text = "Enter the number of seconds";
            this.Discriptionlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Titlelbl
            // 
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 24F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(12, 9);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(540, 55);
            this.Titlelbl.TabIndex = 22;
            this.Titlelbl.Text = "Time Calculator";
            this.Titlelbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Enterpnl
            // 
            this.Enterpnl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Enterpnl.Controls.Add(this.Calculatebtn);
            this.Enterpnl.Controls.Add(this.Timetxb);
            this.Enterpnl.Location = new System.Drawing.Point(13, 113);
            this.Enterpnl.Name = "Enterpnl";
            this.Enterpnl.Size = new System.Drawing.Size(262, 124);
            this.Enterpnl.TabIndex = 24;
            // 
            // Calculatebtn
            // 
            this.Calculatebtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Calculatebtn.Location = new System.Drawing.Point(62, 65);
            this.Calculatebtn.Name = "Calculatebtn";
            this.Calculatebtn.Size = new System.Drawing.Size(132, 46);
            this.Calculatebtn.TabIndex = 19;
            this.Calculatebtn.Text = "Calculate";
            this.Calculatebtn.UseVisualStyleBackColor = true;
            this.Calculatebtn.Click += new System.EventHandler(this.Calculatebtn_Click);
            // 
            // Timetxb
            // 
            this.Timetxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Timetxb.Location = new System.Drawing.Point(31, 25);
            this.Timetxb.Name = "Timetxb";
            this.Timetxb.Size = new System.Drawing.Size(199, 31);
            this.Timetxb.TabIndex = 10;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(561, 251);
            this.Controls.Add(this.Exitbtn);
            this.Controls.Add(this.Resetbtn);
            this.Controls.Add(this.Exitpnl);
            this.Controls.Add(this.Discriptionlbl);
            this.Controls.Add(this.Titlelbl);
            this.Controls.Add(this.Enterpnl);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Exitpnl.ResumeLayout(false);
            this.Enterpnl.ResumeLayout(false);
            this.Enterpnl.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button Exitbtn;
        private System.Windows.Forms.Button Resetbtn;
        private System.Windows.Forms.Panel Exitpnl;
        private System.Windows.Forms.Label Resultlbl;
        private System.Windows.Forms.Label Discriptionlbl;
        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.Panel Enterpnl;
        private System.Windows.Forms.TextBox Timetxb;
        private System.Windows.Forms.Button Calculatebtn;
    }
}


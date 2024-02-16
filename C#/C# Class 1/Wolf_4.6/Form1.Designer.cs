namespace Wolf_4._6
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
            this.Book1rdb = new System.Windows.Forms.RadioButton();
            this.label1 = new System.Windows.Forms.Label();
            this.Radiopnl = new System.Windows.Forms.Panel();
            this.Book0rdb = new System.Windows.Forms.RadioButton();
            this.Book4rdb = new System.Windows.Forms.RadioButton();
            this.Book3rdb = new System.Windows.Forms.RadioButton();
            this.Book2rdb = new System.Windows.Forms.RadioButton();
            this.Displaylbl = new System.Windows.Forms.Label();
            this.Exitbtn = new System.Windows.Forms.Button();
            this.Radiopnl.SuspendLayout();
            this.SuspendLayout();
            // 
            // Book1rdb
            // 
            this.Book1rdb.AutoSize = true;
            this.Book1rdb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Book1rdb.Location = new System.Drawing.Point(34, 45);
            this.Book1rdb.Name = "Book1rdb";
            this.Book1rdb.Size = new System.Drawing.Size(97, 29);
            this.Book1rdb.TabIndex = 0;
            this.Book1rdb.Text = "1 Book";
            this.Book1rdb.UseVisualStyleBackColor = true;
            this.Book1rdb.CheckedChanged += new System.EventHandler(this.Book1rdb_CheckedChanged);
            // 
            // label1
            // 
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(12, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(511, 66);
            this.label1.TabIndex = 1;
            this.label1.Text = "Pick the number of books purchased \r\nthis month";
            this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Radiopnl
            // 
            this.Radiopnl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Radiopnl.Controls.Add(this.Book0rdb);
            this.Radiopnl.Controls.Add(this.Book4rdb);
            this.Radiopnl.Controls.Add(this.Book3rdb);
            this.Radiopnl.Controls.Add(this.Book2rdb);
            this.Radiopnl.Controls.Add(this.Book1rdb);
            this.Radiopnl.Location = new System.Drawing.Point(185, 78);
            this.Radiopnl.Name = "Radiopnl";
            this.Radiopnl.Size = new System.Drawing.Size(162, 191);
            this.Radiopnl.TabIndex = 2;
            // 
            // Book0rdb
            // 
            this.Book0rdb.AutoSize = true;
            this.Book0rdb.Checked = true;
            this.Book0rdb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Book0rdb.Location = new System.Drawing.Point(34, 10);
            this.Book0rdb.Name = "Book0rdb";
            this.Book0rdb.Size = new System.Drawing.Size(108, 29);
            this.Book0rdb.TabIndex = 4;
            this.Book0rdb.TabStop = true;
            this.Book0rdb.Text = "0 Books";
            this.Book0rdb.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.Book0rdb.UseVisualStyleBackColor = true;
            this.Book0rdb.CheckedChanged += new System.EventHandler(this.Book0rdb_CheckedChanged);
            // 
            // Book4rdb
            // 
            this.Book4rdb.AutoSize = true;
            this.Book4rdb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Book4rdb.Location = new System.Drawing.Point(34, 150);
            this.Book4rdb.Name = "Book4rdb";
            this.Book4rdb.Size = new System.Drawing.Size(120, 29);
            this.Book4rdb.TabIndex = 3;
            this.Book4rdb.Text = "4+ Books";
            this.Book4rdb.UseVisualStyleBackColor = true;
            this.Book4rdb.CheckedChanged += new System.EventHandler(this.Book4rdb_CheckedChanged);
            // 
            // Book3rdb
            // 
            this.Book3rdb.AutoSize = true;
            this.Book3rdb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Book3rdb.Location = new System.Drawing.Point(34, 115);
            this.Book3rdb.Name = "Book3rdb";
            this.Book3rdb.Size = new System.Drawing.Size(108, 29);
            this.Book3rdb.TabIndex = 2;
            this.Book3rdb.Text = "3 Books";
            this.Book3rdb.UseVisualStyleBackColor = true;
            this.Book3rdb.CheckedChanged += new System.EventHandler(this.Book3rdb_CheckedChanged);
            // 
            // Book2rdb
            // 
            this.Book2rdb.AutoSize = true;
            this.Book2rdb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Book2rdb.Location = new System.Drawing.Point(34, 80);
            this.Book2rdb.Name = "Book2rdb";
            this.Book2rdb.Size = new System.Drawing.Size(108, 29);
            this.Book2rdb.TabIndex = 1;
            this.Book2rdb.Text = "2 Books";
            this.Book2rdb.UseVisualStyleBackColor = true;
            this.Book2rdb.CheckedChanged += new System.EventHandler(this.Book2rdb_CheckedChanged);
            // 
            // Displaylbl
            // 
            this.Displaylbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Displaylbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Displaylbl.Location = new System.Drawing.Point(125, 272);
            this.Displaylbl.Name = "Displaylbl";
            this.Displaylbl.Size = new System.Drawing.Size(279, 53);
            this.Displaylbl.TabIndex = 3;
            this.Displaylbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Exitbtn
            // 
            this.Exitbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Exitbtn.Location = new System.Drawing.Point(185, 328);
            this.Exitbtn.Name = "Exitbtn";
            this.Exitbtn.Size = new System.Drawing.Size(162, 56);
            this.Exitbtn.TabIndex = 4;
            this.Exitbtn.Text = "Exit";
            this.Exitbtn.UseVisualStyleBackColor = true;
            this.Exitbtn.Click += new System.EventHandler(this.Exitbtn_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(533, 389);
            this.Controls.Add(this.Exitbtn);
            this.Controls.Add(this.Displaylbl);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.Radiopnl);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Radiopnl.ResumeLayout(false);
            this.Radiopnl.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.RadioButton Book1rdb;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Panel Radiopnl;
        private System.Windows.Forms.RadioButton Book4rdb;
        private System.Windows.Forms.RadioButton Book3rdb;
        private System.Windows.Forms.RadioButton Book2rdb;
        private System.Windows.Forms.Label Displaylbl;
        private System.Windows.Forms.RadioButton Book0rdb;
        private System.Windows.Forms.Button Exitbtn;
    }
}


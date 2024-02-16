namespace Wolf_exam1
{
    partial class Checkout
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
            this.Discriptionlbl = new System.Windows.Forms.Label();
            this.Titlelbl = new System.Windows.Forms.Label();
            this.NameInlbl = new System.Windows.Forms.Label();
            this.Nametxb = new System.Windows.Forms.TextBox();
            this.QuantityInlbl = new System.Windows.Forms.Label();
            this.Quantitytxb = new System.Windows.Forms.TextBox();
            this.PriceInlbl = new System.Windows.Forms.Label();
            this.Pricetxb = new System.Windows.Forms.TextBox();
            this.BudgetInlbl = new System.Windows.Forms.Label();
            this.Budgettxb = new System.Windows.Forms.TextBox();
            this.Calculatebtn = new System.Windows.Forms.Button();
            this.Inputgb = new System.Windows.Forms.GroupBox();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.Outputgb = new System.Windows.Forms.GroupBox();
            this.Budgetlbl = new System.Windows.Forms.Label();
            this.Namelbl = new System.Windows.Forms.Label();
            this.Quantitylbl = new System.Windows.Forms.Label();
            this.Pricelbl = new System.Windows.Forms.Label();
            this.Totallbl = new System.Windows.Forms.Label();
            this.BudgetOutlbl = new System.Windows.Forms.Label();
            this.NameOutlbl = new System.Windows.Forms.Label();
            this.QuantityOutlbl = new System.Windows.Forms.Label();
            this.groupBox4 = new System.Windows.Forms.GroupBox();
            this.PriceOutlbl = new System.Windows.Forms.Label();
            this.TotalOutlbl = new System.Windows.Forms.Label();
            this.Inputgb.SuspendLayout();
            this.Outputgb.SuspendLayout();
            this.SuspendLayout();
            // 
            // Exitbtn
            // 
            this.Exitbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Exitbtn.Location = new System.Drawing.Point(581, 366);
            this.Exitbtn.Name = "Exitbtn";
            this.Exitbtn.Size = new System.Drawing.Size(171, 46);
            this.Exitbtn.TabIndex = 23;
            this.Exitbtn.Text = "Exit";
            this.Exitbtn.UseVisualStyleBackColor = true;
            this.Exitbtn.Click += new System.EventHandler(this.Exitbtn_Click);
            // 
            // Resetbtn
            // 
            this.Resetbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Resetbtn.Location = new System.Drawing.Point(393, 366);
            this.Resetbtn.Name = "Resetbtn";
            this.Resetbtn.Size = new System.Drawing.Size(171, 46);
            this.Resetbtn.TabIndex = 25;
            this.Resetbtn.Text = "Reset";
            this.Resetbtn.UseVisualStyleBackColor = true;
            this.Resetbtn.Click += new System.EventHandler(this.Resetbtn_Click);
            // 
            // Discriptionlbl
            // 
            this.Discriptionlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Discriptionlbl.Location = new System.Drawing.Point(12, 64);
            this.Discriptionlbl.Name = "Discriptionlbl";
            this.Discriptionlbl.Size = new System.Drawing.Size(755, 33);
            this.Discriptionlbl.TabIndex = 27;
            this.Discriptionlbl.Text = "Enter the product name, quantity of product, cost of the product, and a budget";
            this.Discriptionlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Titlelbl
            // 
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 24F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(10, 9);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(742, 55);
            this.Titlelbl.TabIndex = 22;
            this.Titlelbl.Text = "Checkout";
            this.Titlelbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // NameInlbl
            // 
            this.NameInlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.NameInlbl.Location = new System.Drawing.Point(18, 37);
            this.NameInlbl.Name = "NameInlbl";
            this.NameInlbl.Size = new System.Drawing.Size(106, 25);
            this.NameInlbl.TabIndex = 11;
            this.NameInlbl.Text = "Name:";
            this.NameInlbl.TextAlign = System.Drawing.ContentAlignment.TopRight;
            // 
            // Nametxb
            // 
            this.Nametxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Nametxb.Location = new System.Drawing.Point(130, 34);
            this.Nametxb.Name = "Nametxb";
            this.Nametxb.Size = new System.Drawing.Size(214, 31);
            this.Nametxb.TabIndex = 10;
            this.Nametxb.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            // 
            // QuantityInlbl
            // 
            this.QuantityInlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.QuantityInlbl.Location = new System.Drawing.Point(23, 83);
            this.QuantityInlbl.Name = "QuantityInlbl";
            this.QuantityInlbl.Size = new System.Drawing.Size(101, 25);
            this.QuantityInlbl.TabIndex = 12;
            this.QuantityInlbl.Text = "Quantity:";
            this.QuantityInlbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Quantitytxb
            // 
            this.Quantitytxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Quantitytxb.Location = new System.Drawing.Point(130, 80);
            this.Quantitytxb.Name = "Quantitytxb";
            this.Quantitytxb.Size = new System.Drawing.Size(214, 31);
            this.Quantitytxb.TabIndex = 14;
            this.Quantitytxb.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            // 
            // PriceInlbl
            // 
            this.PriceInlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.PriceInlbl.Location = new System.Drawing.Point(23, 132);
            this.PriceInlbl.Name = "PriceInlbl";
            this.PriceInlbl.Size = new System.Drawing.Size(101, 25);
            this.PriceInlbl.TabIndex = 13;
            this.PriceInlbl.Text = "Price:";
            this.PriceInlbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Pricetxb
            // 
            this.Pricetxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Pricetxb.Location = new System.Drawing.Point(130, 129);
            this.Pricetxb.Name = "Pricetxb";
            this.Pricetxb.Size = new System.Drawing.Size(214, 31);
            this.Pricetxb.TabIndex = 15;
            this.Pricetxb.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            // 
            // BudgetInlbl
            // 
            this.BudgetInlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.BudgetInlbl.Location = new System.Drawing.Point(23, 181);
            this.BudgetInlbl.Name = "BudgetInlbl";
            this.BudgetInlbl.Size = new System.Drawing.Size(101, 25);
            this.BudgetInlbl.TabIndex = 16;
            this.BudgetInlbl.Text = "Budget:";
            this.BudgetInlbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Budgettxb
            // 
            this.Budgettxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Budgettxb.Location = new System.Drawing.Point(130, 178);
            this.Budgettxb.Name = "Budgettxb";
            this.Budgettxb.Size = new System.Drawing.Size(214, 31);
            this.Budgettxb.TabIndex = 18;
            this.Budgettxb.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            // 
            // Calculatebtn
            // 
            this.Calculatebtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Calculatebtn.Location = new System.Drawing.Point(6, 226);
            this.Calculatebtn.Name = "Calculatebtn";
            this.Calculatebtn.Size = new System.Drawing.Size(349, 80);
            this.Calculatebtn.TabIndex = 19;
            this.Calculatebtn.Text = "Calculate";
            this.Calculatebtn.UseVisualStyleBackColor = true;
            this.Calculatebtn.Click += new System.EventHandler(this.Calculatebtn_Click);
            // 
            // Inputgb
            // 
            this.Inputgb.Controls.Add(this.groupBox2);
            this.Inputgb.Controls.Add(this.Nametxb);
            this.Inputgb.Controls.Add(this.Calculatebtn);
            this.Inputgb.Controls.Add(this.NameInlbl);
            this.Inputgb.Controls.Add(this.QuantityInlbl);
            this.Inputgb.Controls.Add(this.Budgettxb);
            this.Inputgb.Controls.Add(this.Quantitytxb);
            this.Inputgb.Controls.Add(this.PriceInlbl);
            this.Inputgb.Controls.Add(this.BudgetInlbl);
            this.Inputgb.Controls.Add(this.Pricetxb);
            this.Inputgb.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Inputgb.Location = new System.Drawing.Point(17, 100);
            this.Inputgb.Name = "Inputgb";
            this.Inputgb.Size = new System.Drawing.Size(361, 312);
            this.Inputgb.TabIndex = 28;
            this.Inputgb.TabStop = false;
            this.Inputgb.Text = "Input";
            // 
            // groupBox2
            // 
            this.groupBox2.Location = new System.Drawing.Point(378, 0);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(359, 273);
            this.groupBox2.TabIndex = 29;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "groupBox2";
            // 
            // Outputgb
            // 
            this.Outputgb.Controls.Add(this.Budgetlbl);
            this.Outputgb.Controls.Add(this.Namelbl);
            this.Outputgb.Controls.Add(this.Quantitylbl);
            this.Outputgb.Controls.Add(this.Pricelbl);
            this.Outputgb.Controls.Add(this.Totallbl);
            this.Outputgb.Controls.Add(this.BudgetOutlbl);
            this.Outputgb.Controls.Add(this.NameOutlbl);
            this.Outputgb.Controls.Add(this.QuantityOutlbl);
            this.Outputgb.Controls.Add(this.groupBox4);
            this.Outputgb.Controls.Add(this.PriceOutlbl);
            this.Outputgb.Controls.Add(this.TotalOutlbl);
            this.Outputgb.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Outputgb.Location = new System.Drawing.Point(393, 100);
            this.Outputgb.Name = "Outputgb";
            this.Outputgb.Size = new System.Drawing.Size(361, 247);
            this.Outputgb.TabIndex = 30;
            this.Outputgb.TabStop = false;
            this.Outputgb.Text = "Output";
            // 
            // Budgetlbl
            // 
            this.Budgetlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Budgetlbl.Location = new System.Drawing.Point(6, 206);
            this.Budgetlbl.Name = "Budgetlbl";
            this.Budgetlbl.Size = new System.Drawing.Size(101, 25);
            this.Budgetlbl.TabIndex = 39;
            this.Budgetlbl.Text = "Budget:";
            this.Budgetlbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Namelbl
            // 
            this.Namelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Namelbl.Location = new System.Drawing.Point(17, 37);
            this.Namelbl.Name = "Namelbl";
            this.Namelbl.Size = new System.Drawing.Size(101, 25);
            this.Namelbl.TabIndex = 35;
            this.Namelbl.Text = "Name:";
            this.Namelbl.TextAlign = System.Drawing.ContentAlignment.TopRight;
            // 
            // Quantitylbl
            // 
            this.Quantitylbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Quantitylbl.Location = new System.Drawing.Point(17, 77);
            this.Quantitylbl.Name = "Quantitylbl";
            this.Quantitylbl.Size = new System.Drawing.Size(101, 25);
            this.Quantitylbl.TabIndex = 36;
            this.Quantitylbl.Text = "Quantity:";
            this.Quantitylbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Pricelbl
            // 
            this.Pricelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Pricelbl.Location = new System.Drawing.Point(17, 117);
            this.Pricelbl.Name = "Pricelbl";
            this.Pricelbl.Size = new System.Drawing.Size(101, 25);
            this.Pricelbl.TabIndex = 37;
            this.Pricelbl.Text = "Price:";
            this.Pricelbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Totallbl
            // 
            this.Totallbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Totallbl.Location = new System.Drawing.Point(17, 157);
            this.Totallbl.Name = "Totallbl";
            this.Totallbl.Size = new System.Drawing.Size(101, 25);
            this.Totallbl.TabIndex = 38;
            this.Totallbl.Text = "Total:";
            this.Totallbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // BudgetOutlbl
            // 
            this.BudgetOutlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.BudgetOutlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.BudgetOutlbl.Location = new System.Drawing.Point(113, 197);
            this.BudgetOutlbl.Name = "BudgetOutlbl";
            this.BudgetOutlbl.Size = new System.Drawing.Size(246, 47);
            this.BudgetOutlbl.TabIndex = 34;
            this.BudgetOutlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // NameOutlbl
            // 
            this.NameOutlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.NameOutlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.NameOutlbl.Location = new System.Drawing.Point(124, 34);
            this.NameOutlbl.Name = "NameOutlbl";
            this.NameOutlbl.Size = new System.Drawing.Size(231, 31);
            this.NameOutlbl.TabIndex = 30;
            this.NameOutlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // QuantityOutlbl
            // 
            this.QuantityOutlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.QuantityOutlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.QuantityOutlbl.Location = new System.Drawing.Point(124, 74);
            this.QuantityOutlbl.Name = "QuantityOutlbl";
            this.QuantityOutlbl.Size = new System.Drawing.Size(231, 31);
            this.QuantityOutlbl.TabIndex = 31;
            this.QuantityOutlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // groupBox4
            // 
            this.groupBox4.Location = new System.Drawing.Point(378, 0);
            this.groupBox4.Name = "groupBox4";
            this.groupBox4.Size = new System.Drawing.Size(359, 273);
            this.groupBox4.TabIndex = 29;
            this.groupBox4.TabStop = false;
            this.groupBox4.Text = "groupBox4";
            // 
            // PriceOutlbl
            // 
            this.PriceOutlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.PriceOutlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.PriceOutlbl.Location = new System.Drawing.Point(124, 114);
            this.PriceOutlbl.Name = "PriceOutlbl";
            this.PriceOutlbl.Size = new System.Drawing.Size(231, 31);
            this.PriceOutlbl.TabIndex = 32;
            this.PriceOutlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // TotalOutlbl
            // 
            this.TotalOutlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.TotalOutlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TotalOutlbl.Location = new System.Drawing.Point(124, 154);
            this.TotalOutlbl.Name = "TotalOutlbl";
            this.TotalOutlbl.Size = new System.Drawing.Size(231, 31);
            this.TotalOutlbl.TabIndex = 33;
            this.TotalOutlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Checkout
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(766, 423);
            this.Controls.Add(this.Outputgb);
            this.Controls.Add(this.Inputgb);
            this.Controls.Add(this.Exitbtn);
            this.Controls.Add(this.Resetbtn);
            this.Controls.Add(this.Discriptionlbl);
            this.Controls.Add(this.Titlelbl);
            this.Name = "Checkout";
            this.Text = "Checkout";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.Inputgb.ResumeLayout(false);
            this.Inputgb.PerformLayout();
            this.Outputgb.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button Exitbtn;
        private System.Windows.Forms.Button Resetbtn;
        private System.Windows.Forms.Label Discriptionlbl;
        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.Label NameInlbl;
        private System.Windows.Forms.TextBox Nametxb;
        private System.Windows.Forms.Label QuantityInlbl;
        private System.Windows.Forms.TextBox Quantitytxb;
        private System.Windows.Forms.Label PriceInlbl;
        private System.Windows.Forms.TextBox Pricetxb;
        private System.Windows.Forms.Label BudgetInlbl;
        private System.Windows.Forms.TextBox Budgettxb;
        private System.Windows.Forms.Button Calculatebtn;
        private System.Windows.Forms.GroupBox Inputgb;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.GroupBox Outputgb;
        private System.Windows.Forms.GroupBox groupBox4;
        private System.Windows.Forms.Label NameOutlbl;
        private System.Windows.Forms.Label QuantityOutlbl;
        private System.Windows.Forms.Label PriceOutlbl;
        private System.Windows.Forms.Label TotalOutlbl;
        private System.Windows.Forms.Label BudgetOutlbl;
        private System.Windows.Forms.Label Budgetlbl;
        private System.Windows.Forms.Label Namelbl;
        private System.Windows.Forms.Label Quantitylbl;
        private System.Windows.Forms.Label Pricelbl;
        private System.Windows.Forms.Label Totallbl;
    }
}


namespace Wolf_5._5
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
            this.Inputtxb = new System.Windows.Forms.TextBox();
            this.Outputlbl = new System.Windows.Forms.Label();
            this.Calculatebtn = new System.Windows.Forms.Button();
            this.Resetbtn = new System.Windows.Forms.Button();
            this.Exitbtn = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // Titlelbl
            // 
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(12, 9);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(388, 25);
            this.Titlelbl.TabIndex = 0;
            this.Titlelbl.Text = "How many days are you going to work?";
            // 
            // Inputtxb
            // 
            this.Inputtxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Inputtxb.Location = new System.Drawing.Point(17, 60);
            this.Inputtxb.Name = "Inputtxb";
            this.Inputtxb.Size = new System.Drawing.Size(115, 26);
            this.Inputtxb.TabIndex = 1;
            // 
            // Outputlbl
            // 
            this.Outputlbl.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.Outputlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Outputlbl.Location = new System.Drawing.Point(152, 60);
            this.Outputlbl.Name = "Outputlbl";
            this.Outputlbl.Size = new System.Drawing.Size(248, 26);
            this.Outputlbl.TabIndex = 2;
            this.Outputlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Calculatebtn
            // 
            this.Calculatebtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Calculatebtn.Location = new System.Drawing.Point(141, 101);
            this.Calculatebtn.Name = "Calculatebtn";
            this.Calculatebtn.Size = new System.Drawing.Size(131, 36);
            this.Calculatebtn.TabIndex = 3;
            this.Calculatebtn.Text = "Calculate";
            this.Calculatebtn.UseVisualStyleBackColor = true;
            this.Calculatebtn.Click += new System.EventHandler(this.Calculatebtn_Click);
            // 
            // Resetbtn
            // 
            this.Resetbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Resetbtn.Location = new System.Drawing.Point(67, 143);
            this.Resetbtn.Name = "Resetbtn";
            this.Resetbtn.Size = new System.Drawing.Size(131, 36);
            this.Resetbtn.TabIndex = 4;
            this.Resetbtn.Text = "Reset";
            this.Resetbtn.UseVisualStyleBackColor = true;
            this.Resetbtn.Click += new System.EventHandler(this.Resetbtn_Click);
            // 
            // Exitbtn
            // 
            this.Exitbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Exitbtn.Location = new System.Drawing.Point(218, 143);
            this.Exitbtn.Name = "Exitbtn";
            this.Exitbtn.Size = new System.Drawing.Size(131, 36);
            this.Exitbtn.TabIndex = 5;
            this.Exitbtn.Text = "Exit";
            this.Exitbtn.UseVisualStyleBackColor = true;
            this.Exitbtn.Click += new System.EventHandler(this.Exitbtn_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(410, 198);
            this.Controls.Add(this.Exitbtn);
            this.Controls.Add(this.Resetbtn);
            this.Controls.Add(this.Calculatebtn);
            this.Controls.Add(this.Outputlbl);
            this.Controls.Add(this.Inputtxb);
            this.Controls.Add(this.Titlelbl);
            this.Name = "Pennies for Pay";
            this.Text = "Pennies for Pay";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.TextBox Inputtxb;
        private System.Windows.Forms.Label Outputlbl;
        private System.Windows.Forms.Button Calculatebtn;
        private System.Windows.Forms.Button Resetbtn;
        private System.Windows.Forms.Button Exitbtn;
    }
}


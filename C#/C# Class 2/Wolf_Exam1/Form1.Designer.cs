namespace Wolf_Exam1
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
            this.letterbtn = new System.Windows.Forms.Button();
            this.Description1lbl = new System.Windows.Forms.Label();
            this.Titlelbl = new System.Windows.Forms.Label();
            this.Description2lbl = new System.Windows.Forms.Label();
            this.encryptbtn = new System.Windows.Forms.Button();
            this.inouttxb = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // letterbtn
            // 
            this.letterbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.letterbtn.Location = new System.Drawing.Point(61, 107);
            this.letterbtn.Name = "letterbtn";
            this.letterbtn.Size = new System.Drawing.Size(97, 39);
            this.letterbtn.TabIndex = 15;
            this.letterbtn.Text = "Letters";
            this.letterbtn.UseVisualStyleBackColor = true;
            this.letterbtn.Click += new System.EventHandler(this.letterbtn_Click);
            // 
            // Description1lbl
            // 
            this.Description1lbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Description1lbl.Location = new System.Drawing.Point(12, 53);
            this.Description1lbl.Name = "Description1lbl";
            this.Description1lbl.Size = new System.Drawing.Size(205, 42);
            this.Description1lbl.TabIndex = 12;
            this.Description1lbl.Text = "Enter a letter and click to see how many are in the file";
            this.Description1lbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Titlelbl
            // 
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(16, 9);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(452, 31);
            this.Titlelbl.TabIndex = 11;
            this.Titlelbl.Text = "Encryption";
            this.Titlelbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Description2lbl
            // 
            this.Description2lbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Description2lbl.Location = new System.Drawing.Point(263, 53);
            this.Description2lbl.Name = "Description2lbl";
            this.Description2lbl.Size = new System.Drawing.Size(205, 42);
            this.Description2lbl.TabIndex = 16;
            this.Description2lbl.Text = "Click this to encrypt the text in the file";
            this.Description2lbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // encryptbtn
            // 
            this.encryptbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.encryptbtn.Location = new System.Drawing.Point(317, 107);
            this.encryptbtn.Name = "encryptbtn";
            this.encryptbtn.Size = new System.Drawing.Size(97, 39);
            this.encryptbtn.TabIndex = 17;
            this.encryptbtn.Text = "Encryption";
            this.encryptbtn.UseVisualStyleBackColor = true;
            this.encryptbtn.Click += new System.EventHandler(this.encryptbtn_Click);
            // 
            // inouttxb
            // 
            this.inouttxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.inouttxb.Location = new System.Drawing.Point(16, 152);
            this.inouttxb.Multiline = true;
            this.inouttxb.Name = "inouttxb";
            this.inouttxb.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.inouttxb.Size = new System.Drawing.Size(452, 105);
            this.inouttxb.TabIndex = 18;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(480, 271);
            this.Controls.Add(this.inouttxb);
            this.Controls.Add(this.encryptbtn);
            this.Controls.Add(this.Description2lbl);
            this.Controls.Add(this.letterbtn);
            this.Controls.Add(this.Description1lbl);
            this.Controls.Add(this.Titlelbl);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Button letterbtn;
        private System.Windows.Forms.Label Description1lbl;
        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.Label Description2lbl;
        private System.Windows.Forms.Button encryptbtn;
        private System.Windows.Forms.TextBox inouttxb;
    }
}


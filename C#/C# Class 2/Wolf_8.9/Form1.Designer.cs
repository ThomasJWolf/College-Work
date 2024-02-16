namespace Wolf_8._9
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
            this.NumOutputlbl = new System.Windows.Forms.Label();
            this.Inputtxb = new System.Windows.Forms.TextBox();
            this.Descriptionlbl = new System.Windows.Forms.Label();
            this.Titlelbl = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // NumOutputlbl
            // 
            this.NumOutputlbl.AutoSize = true;
            this.NumOutputlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.NumOutputlbl.Location = new System.Drawing.Point(8, 136);
            this.NumOutputlbl.Name = "NumOutputlbl";
            this.NumOutputlbl.Size = new System.Drawing.Size(63, 20);
            this.NumOutputlbl.TabIndex = 9;
            this.NumOutputlbl.Text = "Result: ";
            // 
            // Inputtxb
            // 
            this.Inputtxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Inputtxb.Location = new System.Drawing.Point(12, 85);
            this.Inputtxb.Name = "Inputtxb";
            this.Inputtxb.Size = new System.Drawing.Size(452, 26);
            this.Inputtxb.TabIndex = 8;
            // 
            // Descriptionlbl
            // 
            this.Descriptionlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Descriptionlbl.Location = new System.Drawing.Point(8, 40);
            this.Descriptionlbl.Name = "Descriptionlbl";
            this.Descriptionlbl.Size = new System.Drawing.Size(456, 42);
            this.Descriptionlbl.TabIndex = 7;
            this.Descriptionlbl.Text = "Enter a phone number with letters and get the numarical result\r\nThis format: xxx-" +
    "xxx-xxxx";
            this.Descriptionlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Titlelbl
            // 
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(12, 9);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(452, 31);
            this.Titlelbl.TabIndex = 6;
            this.Titlelbl.Text = "Phone Number Translator";
            this.Titlelbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.Location = new System.Drawing.Point(367, 127);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(97, 39);
            this.button1.TabIndex = 10;
            this.button1.Text = "Submit";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(476, 170);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.NumOutputlbl);
            this.Controls.Add(this.Inputtxb);
            this.Controls.Add(this.Descriptionlbl);
            this.Controls.Add(this.Titlelbl);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label NumOutputlbl;
        private System.Windows.Forms.TextBox Inputtxb;
        private System.Windows.Forms.Label Descriptionlbl;
        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.Button button1;
    }
}


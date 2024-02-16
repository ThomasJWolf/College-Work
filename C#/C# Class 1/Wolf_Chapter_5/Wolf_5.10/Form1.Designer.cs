namespace wolf_5._10
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
            this.Descriptionlbl = new System.Windows.Forms.Label();
            this.Addlbl = new System.Windows.Forms.Label();
            this.Inputtxb = new System.Windows.Forms.TextBox();
            this.Calculatebtn = new System.Windows.Forms.Button();
            this.Exitbtn = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // Titlelbl
            // 
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(52, 9);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(146, 25);
            this.Titlelbl.TabIndex = 0;
            this.Titlelbl.Text = "Addition Tutor";
            // 
            // Descriptionlbl
            // 
            this.Descriptionlbl.AutoSize = true;
            this.Descriptionlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Descriptionlbl.Location = new System.Drawing.Point(12, 39);
            this.Descriptionlbl.Name = "Descriptionlbl";
            this.Descriptionlbl.Size = new System.Drawing.Size(224, 20);
            this.Descriptionlbl.TabIndex = 1;
            this.Descriptionlbl.Text = "Add the two numbers together";
            // 
            // Addlbl
            // 
            this.Addlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Addlbl.Location = new System.Drawing.Point(53, 68);
            this.Addlbl.Name = "Addlbl";
            this.Addlbl.Size = new System.Drawing.Size(97, 20);
            this.Addlbl.TabIndex = 2;
            this.Addlbl.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // Inputtxb
            // 
            this.Inputtxb.Location = new System.Drawing.Point(151, 68);
            this.Inputtxb.Name = "Inputtxb";
            this.Inputtxb.Size = new System.Drawing.Size(36, 20);
            this.Inputtxb.TabIndex = 3;
            // 
            // Calculatebtn
            // 
            this.Calculatebtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Calculatebtn.Location = new System.Drawing.Point(12, 106);
            this.Calculatebtn.Name = "Calculatebtn";
            this.Calculatebtn.Size = new System.Drawing.Size(106, 47);
            this.Calculatebtn.TabIndex = 4;
            this.Calculatebtn.Text = "Calculate";
            this.Calculatebtn.UseVisualStyleBackColor = true;
            this.Calculatebtn.Click += new System.EventHandler(this.Calculatebtn_Click);
            // 
            // Exitbtn
            // 
            this.Exitbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Exitbtn.Location = new System.Drawing.Point(135, 106);
            this.Exitbtn.Name = "Exitbtn";
            this.Exitbtn.Size = new System.Drawing.Size(106, 47);
            this.Exitbtn.TabIndex = 5;
            this.Exitbtn.Text = "Exit";
            this.Exitbtn.UseVisualStyleBackColor = true;
            this.Exitbtn.Click += new System.EventHandler(this.Exitbtn_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(253, 165);
            this.Controls.Add(this.Exitbtn);
            this.Controls.Add(this.Calculatebtn);
            this.Controls.Add(this.Inputtxb);
            this.Controls.Add(this.Addlbl);
            this.Controls.Add(this.Descriptionlbl);
            this.Controls.Add(this.Titlelbl);
            this.Name = "Addition Tutor";
            this.Text = "Addition Tutor";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.Label Descriptionlbl;
        private System.Windows.Forms.Label Addlbl;
        private System.Windows.Forms.TextBox Inputtxb;
        private System.Windows.Forms.Button Calculatebtn;
        private System.Windows.Forms.Button Exitbtn;
    }
}


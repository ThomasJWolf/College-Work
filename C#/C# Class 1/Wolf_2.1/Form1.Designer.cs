
namespace Wolf_2._1
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
            this.btnSinister = new System.Windows.Forms.Button();
            this.btnMedium = new System.Windows.Forms.Button();
            this.btnDexter = new System.Windows.Forms.Button();
            this.lblLable = new System.Windows.Forms.Label();
            this.lblResult = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // btnSinister
            // 
            this.btnSinister.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSinister.Location = new System.Drawing.Point(12, 158);
            this.btnSinister.Name = "btnSinister";
            this.btnSinister.Size = new System.Drawing.Size(128, 55);
            this.btnSinister.TabIndex = 0;
            this.btnSinister.Text = "Sinister";
            this.btnSinister.UseVisualStyleBackColor = true;
            this.btnSinister.Click += new System.EventHandler(this.btnSinister_Click);
            // 
            // btnMedium
            // 
            this.btnMedium.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnMedium.Location = new System.Drawing.Point(185, 158);
            this.btnMedium.Name = "btnMedium";
            this.btnMedium.Size = new System.Drawing.Size(128, 55);
            this.btnMedium.TabIndex = 1;
            this.btnMedium.Text = "Medium";
            this.btnMedium.UseVisualStyleBackColor = true;
            this.btnMedium.Click += new System.EventHandler(this.btnMedium_Click);
            // 
            // btnDexter
            // 
            this.btnDexter.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnDexter.Location = new System.Drawing.Point(357, 158);
            this.btnDexter.Name = "btnDexter";
            this.btnDexter.Size = new System.Drawing.Size(128, 55);
            this.btnDexter.TabIndex = 2;
            this.btnDexter.Text = "Dexter";
            this.btnDexter.UseVisualStyleBackColor = true;
            this.btnDexter.Click += new System.EventHandler(this.btnDexter_Click);
            // 
            // lblLable
            // 
            this.lblLable.AutoSize = true;
            this.lblLable.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblLable.Location = new System.Drawing.Point(152, 27);
            this.lblLable.Name = "lblLable";
            this.lblLable.Size = new System.Drawing.Size(196, 25);
            this.lblLable.TabIndex = 3;
            this.lblLable.Text = "English Translation";
            // 
            // lblResult
            // 
            this.lblResult.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.lblResult.AutoSize = true;
            this.lblResult.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblResult.Location = new System.Drawing.Point(239, 88);
            this.lblResult.Name = "lblResult";
            this.lblResult.Size = new System.Drawing.Size(0, 25);
            this.lblResult.TabIndex = 4;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(521, 251);
            this.Controls.Add(this.lblResult);
            this.Controls.Add(this.lblLable);
            this.Controls.Add(this.btnDexter);
            this.Controls.Add(this.btnMedium);
            this.Controls.Add(this.btnSinister);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnSinister;
        private System.Windows.Forms.Button btnMedium;
        private System.Windows.Forms.Button btnDexter;
        private System.Windows.Forms.Label lblLable;
        private System.Windows.Forms.Label lblResult;
    }
}


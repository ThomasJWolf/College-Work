namespace RemoveAllDemo1
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
            this.demoButton = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // demoButton
            // 
            this.demoButton.Location = new System.Drawing.Point(124, 58);
            this.demoButton.Name = "demoButton";
            this.demoButton.Size = new System.Drawing.Size(75, 23);
            this.demoButton.TabIndex = 0;
            this.demoButton.Text = "Demo";
            this.demoButton.UseVisualStyleBackColor = true;
            this.demoButton.Click += new System.EventHandler(this.demoButton_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(322, 138);
            this.Controls.Add(this.demoButton);
            this.Name = "Form1";
            this.Text = "RemoveAllDemo1";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button demoButton;
    }
}

namespace Wolf_8._2
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
            this.Inputtxb = new System.Windows.Forms.TextBox();
            this.NumOutputlbl = new System.Windows.Forms.Label();
            this.AvgOutputlbl = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // Titlelbl
            // 
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(138, 9);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(182, 31);
            this.Titlelbl.TabIndex = 0;
            this.Titlelbl.Text = "Word Counter";
            // 
            // Descriptionlbl
            // 
            this.Descriptionlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Descriptionlbl.Location = new System.Drawing.Point(12, 40);
            this.Descriptionlbl.Name = "Descriptionlbl";
            this.Descriptionlbl.Size = new System.Drawing.Size(421, 42);
            this.Descriptionlbl.TabIndex = 1;
            this.Descriptionlbl.Text = "Enter a sentance and see how many words are in it, as well as the average number " +
    "of letters per word";
            this.Descriptionlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Inputtxb
            // 
            this.Inputtxb.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Inputtxb.Location = new System.Drawing.Point(16, 98);
            this.Inputtxb.Name = "Inputtxb";
            this.Inputtxb.Size = new System.Drawing.Size(417, 26);
            this.Inputtxb.TabIndex = 2;
            this.Inputtxb.TextChanged += new System.EventHandler(this.Inputtxb_TextChanged);
            // 
            // NumOutputlbl
            // 
            this.NumOutputlbl.AutoSize = true;
            this.NumOutputlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.NumOutputlbl.Location = new System.Drawing.Point(12, 143);
            this.NumOutputlbl.Name = "NumOutputlbl";
            this.NumOutputlbl.Size = new System.Drawing.Size(146, 20);
            this.NumOutputlbl.TabIndex = 4;
            this.NumOutputlbl.Text = "Number of words: 0";
            // 
            // AvgOutputlbl
            // 
            this.AvgOutputlbl.AutoSize = true;
            this.AvgOutputlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.AvgOutputlbl.Location = new System.Drawing.Point(12, 177);
            this.AvgOutputlbl.Name = "AvgOutputlbl";
            this.AvgOutputlbl.Size = new System.Drawing.Size(209, 20);
            this.AvgOutputlbl.TabIndex = 5;
            this.AvgOutputlbl.Text = "Average number of letters: 0";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(452, 212);
            this.Controls.Add(this.AvgOutputlbl);
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

        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.Label Descriptionlbl;
        private System.Windows.Forms.TextBox Inputtxb;
        private System.Windows.Forms.Label NumOutputlbl;
        private System.Windows.Forms.Label AvgOutputlbl;
    }
}



namespace Wolf_2._3
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.dimond_8 = new System.Windows.Forms.PictureBox();
            this.club_2 = new System.Windows.Forms.PictureBox();
            this.spade_king = new System.Windows.Forms.PictureBox();
            this.spade_ace = new System.Windows.Forms.PictureBox();
            this.joker_black = new System.Windows.Forms.PictureBox();
            this.lblLable = new System.Windows.Forms.Label();
            this.lblResult = new System.Windows.Forms.Label();
            this.btnExit = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dimond_8)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.club_2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.spade_king)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.spade_ace)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.joker_black)).BeginInit();
            this.SuspendLayout();
            // 
            // dimond_8
            // 
            this.dimond_8.Image = ((System.Drawing.Image)(resources.GetObject("dimond_8.Image")));
            this.dimond_8.Location = new System.Drawing.Point(11, 234);
            this.dimond_8.Name = "dimond_8";
            this.dimond_8.Size = new System.Drawing.Size(167, 253);
            this.dimond_8.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.dimond_8.TabIndex = 0;
            this.dimond_8.TabStop = false;
            this.dimond_8.Click += new System.EventHandler(this.pictureBox1_Click);
            // 
            // club_2
            // 
            this.club_2.Image = ((System.Drawing.Image)(resources.GetObject("club_2.Image")));
            this.club_2.Location = new System.Drawing.Point(209, 234);
            this.club_2.Name = "club_2";
            this.club_2.Size = new System.Drawing.Size(167, 253);
            this.club_2.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.club_2.TabIndex = 1;
            this.club_2.TabStop = false;
            this.club_2.Click += new System.EventHandler(this.club_2_Click);
            // 
            // spade_king
            // 
            this.spade_king.Image = ((System.Drawing.Image)(resources.GetObject("spade_king.Image")));
            this.spade_king.Location = new System.Drawing.Point(415, 234);
            this.spade_king.Name = "spade_king";
            this.spade_king.Size = new System.Drawing.Size(167, 253);
            this.spade_king.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.spade_king.TabIndex = 2;
            this.spade_king.TabStop = false;
            this.spade_king.Click += new System.EventHandler(this.spade_king_Click);
            // 
            // spade_ace
            // 
            this.spade_ace.Image = ((System.Drawing.Image)(resources.GetObject("spade_ace.Image")));
            this.spade_ace.Location = new System.Drawing.Point(624, 234);
            this.spade_ace.Name = "spade_ace";
            this.spade_ace.Size = new System.Drawing.Size(167, 253);
            this.spade_ace.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.spade_ace.TabIndex = 3;
            this.spade_ace.TabStop = false;
            this.spade_ace.Click += new System.EventHandler(this.spade_ace_Click);
            // 
            // joker_black
            // 
            this.joker_black.Image = ((System.Drawing.Image)(resources.GetObject("joker_black.Image")));
            this.joker_black.Location = new System.Drawing.Point(819, 234);
            this.joker_black.Name = "joker_black";
            this.joker_black.Size = new System.Drawing.Size(167, 253);
            this.joker_black.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.joker_black.TabIndex = 4;
            this.joker_black.TabStop = false;
            this.joker_black.Click += new System.EventHandler(this.joker_black_Click);
            // 
            // lblLable
            // 
            this.lblLable.AutoSize = true;
            this.lblLable.Font = new System.Drawing.Font("Microsoft Sans Serif", 26.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblLable.Location = new System.Drawing.Point(267, 102);
            this.lblLable.Name = "lblLable";
            this.lblLable.Size = new System.Drawing.Size(490, 39);
            this.lblLable.TabIndex = 5;
            this.lblLable.Text = "Click a Card to See Its Name";
            this.lblLable.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.lblLable.Click += new System.EventHandler(this.lblLable_Click);
            // 
            // lblResult
            // 
            this.lblResult.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.lblResult.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblResult.Location = new System.Drawing.Point(336, 503);
            this.lblResult.Name = "lblResult";
            this.lblResult.Size = new System.Drawing.Size(327, 99);
            this.lblResult.TabIndex = 6;
            this.lblResult.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // btnExit
            // 
            this.btnExit.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnExit.Location = new System.Drawing.Point(460, 621);
            this.btnExit.Name = "btnExit";
            this.btnExit.Size = new System.Drawing.Size(73, 40);
            this.btnExit.TabIndex = 7;
            this.btnExit.Text = "Exit";
            this.btnExit.UseVisualStyleBackColor = true;
            this.btnExit.Click += new System.EventHandler(this.btnExit_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1000, 673);
            this.Controls.Add(this.btnExit);
            this.Controls.Add(this.lblResult);
            this.Controls.Add(this.lblLable);
            this.Controls.Add(this.joker_black);
            this.Controls.Add(this.spade_ace);
            this.Controls.Add(this.spade_king);
            this.Controls.Add(this.club_2);
            this.Controls.Add(this.dimond_8);
            this.Name = "Form1";
            this.Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)(this.dimond_8)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.club_2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.spade_king)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.spade_ace)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.joker_black)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.PictureBox dimond_8;
        private System.Windows.Forms.PictureBox club_2;
        private System.Windows.Forms.PictureBox spade_king;
        private System.Windows.Forms.PictureBox spade_ace;
        private System.Windows.Forms.PictureBox joker_black;
        private System.Windows.Forms.Label lblLable;
        private System.Windows.Forms.Label lblResult;
        private System.Windows.Forms.Button btnExit;
    }
}


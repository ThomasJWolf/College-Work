namespace Wolf_9._10
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
            this.Lookupgbx = new System.Windows.Forms.GroupBox();
            this.Lookupbtn = new System.Windows.Forms.Button();
            this.Lookuplbl = new System.Windows.Forms.Label();
            this.Lookuptxb = new System.Windows.Forms.TextBox();
            this.Deletegbx = new System.Windows.Forms.GroupBox();
            this.Deletebtn = new System.Windows.Forms.Button();
            this.Deletelbl = new System.Windows.Forms.Label();
            this.Deletetxb = new System.Windows.Forms.TextBox();
            this.Addgbx = new System.Windows.Forms.GroupBox();
            this.AddEmaillbl = new System.Windows.Forms.Label();
            this.AddEmailtxb = new System.Windows.Forms.TextBox();
            this.Addbtn = new System.Windows.Forms.Button();
            this.AddNamelbl = new System.Windows.Forms.Label();
            this.AddNametxb = new System.Windows.Forms.TextBox();
            this.Updategbx = new System.Windows.Forms.GroupBox();
            this.UpdateEmaillbl = new System.Windows.Forms.Label();
            this.UpdateEmailtxb = new System.Windows.Forms.TextBox();
            this.Updatebtn = new System.Windows.Forms.Button();
            this.UpdateNamelbl = new System.Windows.Forms.Label();
            this.UpdateNametxb = new System.Windows.Forms.TextBox();
            this.Outputgbx = new System.Windows.Forms.GroupBox();
            this.Outputlbl = new System.Windows.Forms.Label();
            this.Lookupgbx.SuspendLayout();
            this.Deletegbx.SuspendLayout();
            this.Addgbx.SuspendLayout();
            this.Updategbx.SuspendLayout();
            this.Outputgbx.SuspendLayout();
            this.SuspendLayout();
            // 
            // Titlelbl
            // 
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 24F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.Location = new System.Drawing.Point(165, 9);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(255, 37);
            this.Titlelbl.TabIndex = 0;
            this.Titlelbl.Text = "Name and Email";
            // 
            // Lookupgbx
            // 
            this.Lookupgbx.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.Lookupgbx.Controls.Add(this.Lookupbtn);
            this.Lookupgbx.Controls.Add(this.Lookuplbl);
            this.Lookupgbx.Controls.Add(this.Lookuptxb);
            this.Lookupgbx.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Lookupgbx.Location = new System.Drawing.Point(12, 58);
            this.Lookupgbx.Name = "Lookupgbx";
            this.Lookupgbx.Size = new System.Drawing.Size(276, 125);
            this.Lookupgbx.TabIndex = 2;
            this.Lookupgbx.TabStop = false;
            this.Lookupgbx.Text = "Look up an email";
            // 
            // Lookupbtn
            // 
            this.Lookupbtn.Location = new System.Drawing.Point(66, 81);
            this.Lookupbtn.Name = "Lookupbtn";
            this.Lookupbtn.Size = new System.Drawing.Size(138, 29);
            this.Lookupbtn.TabIndex = 2;
            this.Lookupbtn.Text = "Submit";
            this.Lookupbtn.UseVisualStyleBackColor = true;
            this.Lookupbtn.Click += new System.EventHandler(this.Lookupbtn_Click);
            // 
            // Lookuplbl
            // 
            this.Lookuplbl.AutoSize = true;
            this.Lookuplbl.Location = new System.Drawing.Point(13, 44);
            this.Lookuplbl.Name = "Lookuplbl";
            this.Lookuplbl.Size = new System.Drawing.Size(98, 20);
            this.Lookuplbl.TabIndex = 1;
            this.Lookuplbl.Text = "Enter Name:";
            // 
            // Lookuptxb
            // 
            this.Lookuptxb.Location = new System.Drawing.Point(117, 41);
            this.Lookuptxb.Name = "Lookuptxb";
            this.Lookuptxb.Size = new System.Drawing.Size(142, 26);
            this.Lookuptxb.TabIndex = 0;
            // 
            // Deletegbx
            // 
            this.Deletegbx.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.Deletegbx.Controls.Add(this.Deletebtn);
            this.Deletegbx.Controls.Add(this.Deletelbl);
            this.Deletegbx.Controls.Add(this.Deletetxb);
            this.Deletegbx.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Deletegbx.Location = new System.Drawing.Point(12, 189);
            this.Deletegbx.Name = "Deletegbx";
            this.Deletegbx.Size = new System.Drawing.Size(276, 125);
            this.Deletegbx.TabIndex = 3;
            this.Deletegbx.TabStop = false;
            this.Deletegbx.Text = "Delete a name and email";
            // 
            // Deletebtn
            // 
            this.Deletebtn.Location = new System.Drawing.Point(66, 81);
            this.Deletebtn.Name = "Deletebtn";
            this.Deletebtn.Size = new System.Drawing.Size(138, 29);
            this.Deletebtn.TabIndex = 2;
            this.Deletebtn.Text = "Submit";
            this.Deletebtn.UseVisualStyleBackColor = true;
            this.Deletebtn.Click += new System.EventHandler(this.Deletebtn_Click);
            // 
            // Deletelbl
            // 
            this.Deletelbl.AutoSize = true;
            this.Deletelbl.Location = new System.Drawing.Point(13, 44);
            this.Deletelbl.Name = "Deletelbl";
            this.Deletelbl.Size = new System.Drawing.Size(98, 20);
            this.Deletelbl.TabIndex = 1;
            this.Deletelbl.Text = "Enter Name:";
            // 
            // Deletetxb
            // 
            this.Deletetxb.Location = new System.Drawing.Point(117, 41);
            this.Deletetxb.Name = "Deletetxb";
            this.Deletetxb.Size = new System.Drawing.Size(142, 26);
            this.Deletetxb.TabIndex = 0;
            // 
            // Addgbx
            // 
            this.Addgbx.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.Addgbx.Controls.Add(this.AddEmaillbl);
            this.Addgbx.Controls.Add(this.AddEmailtxb);
            this.Addgbx.Controls.Add(this.Addbtn);
            this.Addgbx.Controls.Add(this.AddNamelbl);
            this.Addgbx.Controls.Add(this.AddNametxb);
            this.Addgbx.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Addgbx.Location = new System.Drawing.Point(294, 58);
            this.Addgbx.Name = "Addgbx";
            this.Addgbx.Size = new System.Drawing.Size(276, 161);
            this.Addgbx.TabIndex = 4;
            this.Addgbx.TabStop = false;
            this.Addgbx.Text = "Add a name and email";
            // 
            // AddEmaillbl
            // 
            this.AddEmaillbl.AutoSize = true;
            this.AddEmaillbl.Location = new System.Drawing.Point(13, 81);
            this.AddEmaillbl.Name = "AddEmaillbl";
            this.AddEmaillbl.Size = new System.Drawing.Size(95, 20);
            this.AddEmaillbl.TabIndex = 4;
            this.AddEmaillbl.Text = "Enter Email:";
            // 
            // AddEmailtxb
            // 
            this.AddEmailtxb.Location = new System.Drawing.Point(117, 78);
            this.AddEmailtxb.Name = "AddEmailtxb";
            this.AddEmailtxb.Size = new System.Drawing.Size(142, 26);
            this.AddEmailtxb.TabIndex = 3;
            // 
            // Addbtn
            // 
            this.Addbtn.Location = new System.Drawing.Point(73, 118);
            this.Addbtn.Name = "Addbtn";
            this.Addbtn.Size = new System.Drawing.Size(138, 29);
            this.Addbtn.TabIndex = 2;
            this.Addbtn.Text = "Submit";
            this.Addbtn.UseVisualStyleBackColor = true;
            this.Addbtn.Click += new System.EventHandler(this.Addbtn_Click);
            // 
            // AddNamelbl
            // 
            this.AddNamelbl.AutoSize = true;
            this.AddNamelbl.Location = new System.Drawing.Point(13, 44);
            this.AddNamelbl.Name = "AddNamelbl";
            this.AddNamelbl.Size = new System.Drawing.Size(98, 20);
            this.AddNamelbl.TabIndex = 1;
            this.AddNamelbl.Text = "Enter Name:";
            // 
            // AddNametxb
            // 
            this.AddNametxb.Location = new System.Drawing.Point(117, 41);
            this.AddNametxb.Name = "AddNametxb";
            this.AddNametxb.Size = new System.Drawing.Size(142, 26);
            this.AddNametxb.TabIndex = 0;
            // 
            // Updategbx
            // 
            this.Updategbx.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.Updategbx.Controls.Add(this.UpdateEmaillbl);
            this.Updategbx.Controls.Add(this.UpdateEmailtxb);
            this.Updategbx.Controls.Add(this.Updatebtn);
            this.Updategbx.Controls.Add(this.UpdateNamelbl);
            this.Updategbx.Controls.Add(this.UpdateNametxb);
            this.Updategbx.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Updategbx.Location = new System.Drawing.Point(294, 230);
            this.Updategbx.Name = "Updategbx";
            this.Updategbx.Size = new System.Drawing.Size(276, 161);
            this.Updategbx.TabIndex = 5;
            this.Updategbx.TabStop = false;
            this.Updategbx.Text = "Update an email";
            // 
            // UpdateEmaillbl
            // 
            this.UpdateEmaillbl.AutoSize = true;
            this.UpdateEmaillbl.Location = new System.Drawing.Point(13, 81);
            this.UpdateEmaillbl.Name = "UpdateEmaillbl";
            this.UpdateEmaillbl.Size = new System.Drawing.Size(95, 20);
            this.UpdateEmaillbl.TabIndex = 4;
            this.UpdateEmaillbl.Text = "Enter Email:";
            // 
            // UpdateEmailtxb
            // 
            this.UpdateEmailtxb.Location = new System.Drawing.Point(117, 78);
            this.UpdateEmailtxb.Name = "UpdateEmailtxb";
            this.UpdateEmailtxb.Size = new System.Drawing.Size(142, 26);
            this.UpdateEmailtxb.TabIndex = 3;
            // 
            // Updatebtn
            // 
            this.Updatebtn.Location = new System.Drawing.Point(73, 119);
            this.Updatebtn.Name = "Updatebtn";
            this.Updatebtn.Size = new System.Drawing.Size(138, 29);
            this.Updatebtn.TabIndex = 2;
            this.Updatebtn.Text = "Submit";
            this.Updatebtn.UseVisualStyleBackColor = true;
            this.Updatebtn.Click += new System.EventHandler(this.Updatebtn_Click);
            // 
            // UpdateNamelbl
            // 
            this.UpdateNamelbl.AutoSize = true;
            this.UpdateNamelbl.Location = new System.Drawing.Point(13, 44);
            this.UpdateNamelbl.Name = "UpdateNamelbl";
            this.UpdateNamelbl.Size = new System.Drawing.Size(98, 20);
            this.UpdateNamelbl.TabIndex = 1;
            this.UpdateNamelbl.Text = "Enter Name:";
            // 
            // UpdateNametxb
            // 
            this.UpdateNametxb.Location = new System.Drawing.Point(117, 41);
            this.UpdateNametxb.Name = "UpdateNametxb";
            this.UpdateNametxb.Size = new System.Drawing.Size(142, 26);
            this.UpdateNametxb.TabIndex = 0;
            // 
            // Outputgbx
            // 
            this.Outputgbx.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.Outputgbx.Controls.Add(this.Outputlbl);
            this.Outputgbx.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Outputgbx.Location = new System.Drawing.Point(12, 320);
            this.Outputgbx.Name = "Outputgbx";
            this.Outputgbx.Size = new System.Drawing.Size(276, 71);
            this.Outputgbx.TabIndex = 6;
            this.Outputgbx.TabStop = false;
            this.Outputgbx.Text = "Output";
            // 
            // Outputlbl
            // 
            this.Outputlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Outputlbl.Location = new System.Drawing.Point(6, 22);
            this.Outputlbl.Name = "Outputlbl";
            this.Outputlbl.Size = new System.Drawing.Size(264, 46);
            this.Outputlbl.TabIndex = 1;
            this.Outputlbl.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(585, 397);
            this.Controls.Add(this.Outputgbx);
            this.Controls.Add(this.Updategbx);
            this.Controls.Add(this.Addgbx);
            this.Controls.Add(this.Deletegbx);
            this.Controls.Add(this.Lookupgbx);
            this.Controls.Add(this.Titlelbl);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Lookupgbx.ResumeLayout(false);
            this.Lookupgbx.PerformLayout();
            this.Deletegbx.ResumeLayout(false);
            this.Deletegbx.PerformLayout();
            this.Addgbx.ResumeLayout(false);
            this.Addgbx.PerformLayout();
            this.Updategbx.ResumeLayout(false);
            this.Updategbx.PerformLayout();
            this.Outputgbx.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.GroupBox Lookupgbx;
        private System.Windows.Forms.Button Lookupbtn;
        private System.Windows.Forms.Label Lookuplbl;
        private System.Windows.Forms.TextBox Lookuptxb;
        private System.Windows.Forms.GroupBox Deletegbx;
        private System.Windows.Forms.Button Deletebtn;
        private System.Windows.Forms.Label Deletelbl;
        private System.Windows.Forms.TextBox Deletetxb;
        private System.Windows.Forms.GroupBox Addgbx;
        private System.Windows.Forms.Label AddEmaillbl;
        private System.Windows.Forms.TextBox AddEmailtxb;
        private System.Windows.Forms.Button Addbtn;
        private System.Windows.Forms.Label AddNamelbl;
        private System.Windows.Forms.TextBox AddNametxb;
        private System.Windows.Forms.GroupBox Updategbx;
        private System.Windows.Forms.Label UpdateEmaillbl;
        private System.Windows.Forms.TextBox UpdateEmailtxb;
        private System.Windows.Forms.Button Updatebtn;
        private System.Windows.Forms.Label UpdateNamelbl;
        private System.Windows.Forms.TextBox UpdateNametxb;
        private System.Windows.Forms.GroupBox Outputgbx;
        private System.Windows.Forms.Label Outputlbl;
    }
}


namespace Wolf_cc4
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
            this.components = new System.ComponentModel.Container();
            System.Windows.Forms.Label apptdoctornameLabel;
            System.Windows.Forms.Label appttimeLabel;
            System.Windows.Forms.Label apptdateLabel;
            System.Windows.Forms.Label apptpatientnameLabel;
            System.Windows.Forms.Label apptIDLabel;
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.wolfMedicalDataSet = new Wolf_cc4.WolfMedicalDataSet();
            this.appointmentsBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.appointmentsTableAdapter = new Wolf_cc4.WolfMedicalDataSetTableAdapters.appointmentsTableAdapter();
            this.tableAdapterManager = new Wolf_cc4.WolfMedicalDataSetTableAdapters.TableAdapterManager();
            this.appointmentsBindingNavigator = new System.Windows.Forms.BindingNavigator(this.components);
            this.bindingNavigatorAddNewItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorCountItem = new System.Windows.Forms.ToolStripLabel();
            this.bindingNavigatorDeleteItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorMoveFirstItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorMovePreviousItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorSeparator = new System.Windows.Forms.ToolStripSeparator();
            this.bindingNavigatorPositionItem = new System.Windows.Forms.ToolStripTextBox();
            this.bindingNavigatorSeparator1 = new System.Windows.Forms.ToolStripSeparator();
            this.bindingNavigatorMoveNextItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorMoveLastItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorSeparator2 = new System.Windows.Forms.ToolStripSeparator();
            this.appointmentsBindingNavigatorSaveItem = new System.Windows.Forms.ToolStripButton();
            this.apptIDListBox1 = new System.Windows.Forms.ListBox();
            this.apptpatientnameLabel1 = new System.Windows.Forms.Label();
            this.apptdateLabel1 = new System.Windows.Forms.Label();
            this.appttimeLabel1 = new System.Windows.Forms.Label();
            this.apptdoctornameLabel1 = new System.Windows.Forms.Label();
            this.Closebtn = new System.Windows.Forms.Button();
            apptdoctornameLabel = new System.Windows.Forms.Label();
            appttimeLabel = new System.Windows.Forms.Label();
            apptdateLabel = new System.Windows.Forms.Label();
            apptpatientnameLabel = new System.Windows.Forms.Label();
            apptIDLabel = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.wolfMedicalDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.appointmentsBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.appointmentsBindingNavigator)).BeginInit();
            this.appointmentsBindingNavigator.SuspendLayout();
            this.SuspendLayout();
            // 
            // apptdoctornameLabel
            // 
            apptdoctornameLabel.AutoSize = true;
            apptdoctornameLabel.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            apptdoctornameLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            apptdoctornameLabel.Location = new System.Drawing.Point(251, 106);
            apptdoctornameLabel.Name = "apptdoctornameLabel";
            apptdoctornameLabel.Size = new System.Drawing.Size(105, 18);
            apptdoctornameLabel.TabIndex = 19;
            apptdoctornameLabel.Text = "Doctor Name:";
            // 
            // appttimeLabel
            // 
            appttimeLabel.AutoSize = true;
            appttimeLabel.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            appttimeLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            appttimeLabel.Location = new System.Drawing.Point(310, 80);
            appttimeLabel.Name = "appttimeLabel";
            appttimeLabel.Size = new System.Drawing.Size(46, 18);
            appttimeLabel.TabIndex = 17;
            appttimeLabel.Text = "Time:";
            // 
            // apptdateLabel
            // 
            apptdateLabel.AutoSize = true;
            apptdateLabel.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            apptdateLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            apptdateLabel.Location = new System.Drawing.Point(310, 55);
            apptdateLabel.Name = "apptdateLabel";
            apptdateLabel.Size = new System.Drawing.Size(46, 18);
            apptdateLabel.TabIndex = 15;
            apptdateLabel.Text = "Date:";
            // 
            // apptpatientnameLabel
            // 
            apptpatientnameLabel.AutoSize = true;
            apptpatientnameLabel.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            apptpatientnameLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            apptpatientnameLabel.Location = new System.Drawing.Point(249, 28);
            apptpatientnameLabel.Name = "apptpatientnameLabel";
            apptpatientnameLabel.Size = new System.Drawing.Size(107, 18);
            apptpatientnameLabel.TabIndex = 13;
            apptpatientnameLabel.Text = "Patient Name:";
            // 
            // apptIDLabel
            // 
            apptIDLabel.AutoSize = true;
            apptIDLabel.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            apptIDLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            apptIDLabel.Location = new System.Drawing.Point(4, 55);
            apptIDLabel.Name = "apptIDLabel";
            apptIDLabel.Size = new System.Drawing.Size(119, 18);
            apptIDLabel.TabIndex = 11;
            apptIDLabel.Text = "Appointment ID:";
            // 
            // wolfMedicalDataSet
            // 
            this.wolfMedicalDataSet.DataSetName = "WolfMedicalDataSet";
            this.wolfMedicalDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // appointmentsBindingSource
            // 
            this.appointmentsBindingSource.DataMember = "appointments";
            this.appointmentsBindingSource.DataSource = this.wolfMedicalDataSet;
            // 
            // appointmentsTableAdapter
            // 
            this.appointmentsTableAdapter.ClearBeforeFill = true;
            // 
            // tableAdapterManager
            // 
            this.tableAdapterManager.appointmentsTableAdapter = this.appointmentsTableAdapter;
            this.tableAdapterManager.BackupDataSetBeforeUpdate = false;
            this.tableAdapterManager.doctorsTableAdapter = null;
            this.tableAdapterManager.medicationsTableAdapter = null;
            this.tableAdapterManager.patientsTableAdapter = null;
            this.tableAdapterManager.UpdateOrder = Wolf_cc4.WolfMedicalDataSetTableAdapters.TableAdapterManager.UpdateOrderOption.InsertUpdateDelete;
            // 
            // appointmentsBindingNavigator
            // 
            this.appointmentsBindingNavigator.AddNewItem = this.bindingNavigatorAddNewItem;
            this.appointmentsBindingNavigator.BindingSource = this.appointmentsBindingSource;
            this.appointmentsBindingNavigator.CountItem = this.bindingNavigatorCountItem;
            this.appointmentsBindingNavigator.DeleteItem = this.bindingNavigatorDeleteItem;
            this.appointmentsBindingNavigator.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.bindingNavigatorMoveFirstItem,
            this.bindingNavigatorMovePreviousItem,
            this.bindingNavigatorSeparator,
            this.bindingNavigatorPositionItem,
            this.bindingNavigatorCountItem,
            this.bindingNavigatorSeparator1,
            this.bindingNavigatorMoveNextItem,
            this.bindingNavigatorMoveLastItem,
            this.bindingNavigatorSeparator2,
            this.bindingNavigatorAddNewItem,
            this.bindingNavigatorDeleteItem,
            this.appointmentsBindingNavigatorSaveItem});
            this.appointmentsBindingNavigator.Location = new System.Drawing.Point(0, 0);
            this.appointmentsBindingNavigator.MoveFirstItem = this.bindingNavigatorMoveFirstItem;
            this.appointmentsBindingNavigator.MoveLastItem = this.bindingNavigatorMoveLastItem;
            this.appointmentsBindingNavigator.MoveNextItem = this.bindingNavigatorMoveNextItem;
            this.appointmentsBindingNavigator.MovePreviousItem = this.bindingNavigatorMovePreviousItem;
            this.appointmentsBindingNavigator.Name = "appointmentsBindingNavigator";
            this.appointmentsBindingNavigator.PositionItem = this.bindingNavigatorPositionItem;
            this.appointmentsBindingNavigator.Size = new System.Drawing.Size(506, 25);
            this.appointmentsBindingNavigator.TabIndex = 21;
            this.appointmentsBindingNavigator.Text = "bindingNavigator1";
            // 
            // bindingNavigatorAddNewItem
            // 
            this.bindingNavigatorAddNewItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorAddNewItem.Enabled = false;
            this.bindingNavigatorAddNewItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorAddNewItem.Image")));
            this.bindingNavigatorAddNewItem.Name = "bindingNavigatorAddNewItem";
            this.bindingNavigatorAddNewItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorAddNewItem.Size = new System.Drawing.Size(23, 22);
            this.bindingNavigatorAddNewItem.Text = "Add new";
            // 
            // bindingNavigatorCountItem
            // 
            this.bindingNavigatorCountItem.Name = "bindingNavigatorCountItem";
            this.bindingNavigatorCountItem.Size = new System.Drawing.Size(35, 22);
            this.bindingNavigatorCountItem.Text = "of {0}";
            this.bindingNavigatorCountItem.ToolTipText = "Total number of items";
            // 
            // bindingNavigatorDeleteItem
            // 
            this.bindingNavigatorDeleteItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorDeleteItem.Enabled = false;
            this.bindingNavigatorDeleteItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorDeleteItem.Image")));
            this.bindingNavigatorDeleteItem.Name = "bindingNavigatorDeleteItem";
            this.bindingNavigatorDeleteItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorDeleteItem.Size = new System.Drawing.Size(23, 22);
            this.bindingNavigatorDeleteItem.Text = "Delete";
            // 
            // bindingNavigatorMoveFirstItem
            // 
            this.bindingNavigatorMoveFirstItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMoveFirstItem.Enabled = false;
            this.bindingNavigatorMoveFirstItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMoveFirstItem.Image")));
            this.bindingNavigatorMoveFirstItem.Name = "bindingNavigatorMoveFirstItem";
            this.bindingNavigatorMoveFirstItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMoveFirstItem.Size = new System.Drawing.Size(23, 22);
            this.bindingNavigatorMoveFirstItem.Text = "Move first";
            // 
            // bindingNavigatorMovePreviousItem
            // 
            this.bindingNavigatorMovePreviousItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMovePreviousItem.Enabled = false;
            this.bindingNavigatorMovePreviousItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMovePreviousItem.Image")));
            this.bindingNavigatorMovePreviousItem.Name = "bindingNavigatorMovePreviousItem";
            this.bindingNavigatorMovePreviousItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMovePreviousItem.Size = new System.Drawing.Size(23, 22);
            this.bindingNavigatorMovePreviousItem.Text = "Move previous";
            // 
            // bindingNavigatorSeparator
            // 
            this.bindingNavigatorSeparator.Name = "bindingNavigatorSeparator";
            this.bindingNavigatorSeparator.Size = new System.Drawing.Size(6, 25);
            // 
            // bindingNavigatorPositionItem
            // 
            this.bindingNavigatorPositionItem.AccessibleName = "Position";
            this.bindingNavigatorPositionItem.AutoSize = false;
            this.bindingNavigatorPositionItem.Font = new System.Drawing.Font("Segoe UI", 9F);
            this.bindingNavigatorPositionItem.Name = "bindingNavigatorPositionItem";
            this.bindingNavigatorPositionItem.Size = new System.Drawing.Size(50, 23);
            this.bindingNavigatorPositionItem.Text = "0";
            this.bindingNavigatorPositionItem.ToolTipText = "Current position";
            // 
            // bindingNavigatorSeparator1
            // 
            this.bindingNavigatorSeparator1.Name = "bindingNavigatorSeparator1";
            this.bindingNavigatorSeparator1.Size = new System.Drawing.Size(6, 25);
            // 
            // bindingNavigatorMoveNextItem
            // 
            this.bindingNavigatorMoveNextItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMoveNextItem.Enabled = false;
            this.bindingNavigatorMoveNextItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMoveNextItem.Image")));
            this.bindingNavigatorMoveNextItem.Name = "bindingNavigatorMoveNextItem";
            this.bindingNavigatorMoveNextItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMoveNextItem.Size = new System.Drawing.Size(23, 22);
            this.bindingNavigatorMoveNextItem.Text = "Move next";
            // 
            // bindingNavigatorMoveLastItem
            // 
            this.bindingNavigatorMoveLastItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMoveLastItem.Enabled = false;
            this.bindingNavigatorMoveLastItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMoveLastItem.Image")));
            this.bindingNavigatorMoveLastItem.Name = "bindingNavigatorMoveLastItem";
            this.bindingNavigatorMoveLastItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMoveLastItem.Size = new System.Drawing.Size(23, 22);
            this.bindingNavigatorMoveLastItem.Text = "Move last";
            // 
            // bindingNavigatorSeparator2
            // 
            this.bindingNavigatorSeparator2.Name = "bindingNavigatorSeparator2";
            this.bindingNavigatorSeparator2.Size = new System.Drawing.Size(6, 25);
            // 
            // appointmentsBindingNavigatorSaveItem
            // 
            this.appointmentsBindingNavigatorSaveItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.appointmentsBindingNavigatorSaveItem.Enabled = false;
            this.appointmentsBindingNavigatorSaveItem.Image = ((System.Drawing.Image)(resources.GetObject("appointmentsBindingNavigatorSaveItem.Image")));
            this.appointmentsBindingNavigatorSaveItem.Name = "appointmentsBindingNavigatorSaveItem";
            this.appointmentsBindingNavigatorSaveItem.Size = new System.Drawing.Size(23, 22);
            this.appointmentsBindingNavigatorSaveItem.Text = "Save Data";
            this.appointmentsBindingNavigatorSaveItem.Click += new System.EventHandler(this.appointmentsBindingNavigatorSaveItem_Click);
            // 
            // apptIDListBox1
            // 
            this.apptIDListBox1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            this.apptIDListBox1.DataBindings.Add(new System.Windows.Forms.Binding("SelectedValue", this.appointmentsBindingSource, "apptID", true));
            this.apptIDListBox1.DataSource = this.appointmentsBindingSource;
            this.apptIDListBox1.DisplayMember = "apptID";
            this.apptIDListBox1.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.apptIDListBox1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.apptIDListBox1.FormattingEnabled = true;
            this.apptIDListBox1.ItemHeight = 18;
            this.apptIDListBox1.Location = new System.Drawing.Point(140, 27);
            this.apptIDListBox1.Name = "apptIDListBox1";
            this.apptIDListBox1.Size = new System.Drawing.Size(76, 76);
            this.apptIDListBox1.TabIndex = 22;
            this.apptIDListBox1.ValueMember = "apptID";
            // 
            // apptpatientnameLabel1
            // 
            this.apptpatientnameLabel1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.apptpatientnameLabel1.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.appointmentsBindingSource, "apptpatientname", true));
            this.apptpatientnameLabel1.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.apptpatientnameLabel1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.apptpatientnameLabel1.Location = new System.Drawing.Point(362, 28);
            this.apptpatientnameLabel1.Name = "apptpatientnameLabel1";
            this.apptpatientnameLabel1.Size = new System.Drawing.Size(132, 23);
            this.apptpatientnameLabel1.TabIndex = 23;
            // 
            // apptdateLabel1
            // 
            this.apptdateLabel1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.apptdateLabel1.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.appointmentsBindingSource, "apptdate", true));
            this.apptdateLabel1.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.apptdateLabel1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.apptdateLabel1.Location = new System.Drawing.Point(362, 55);
            this.apptdateLabel1.Name = "apptdateLabel1";
            this.apptdateLabel1.Size = new System.Drawing.Size(132, 23);
            this.apptdateLabel1.TabIndex = 24;
            // 
            // appttimeLabel1
            // 
            this.appttimeLabel1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.appttimeLabel1.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.appointmentsBindingSource, "appttime", true));
            this.appttimeLabel1.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.appttimeLabel1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.appttimeLabel1.Location = new System.Drawing.Point(362, 80);
            this.appttimeLabel1.Name = "appttimeLabel1";
            this.appttimeLabel1.Size = new System.Drawing.Size(132, 23);
            this.appttimeLabel1.TabIndex = 25;
            // 
            // apptdoctornameLabel1
            // 
            this.apptdoctornameLabel1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.apptdoctornameLabel1.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.appointmentsBindingSource, "apptdoctorname", true));
            this.apptdoctornameLabel1.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.apptdoctornameLabel1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.apptdoctornameLabel1.Location = new System.Drawing.Point(362, 106);
            this.apptdoctornameLabel1.Name = "apptdoctornameLabel1";
            this.apptdoctornameLabel1.Size = new System.Drawing.Size(132, 23);
            this.apptdoctornameLabel1.TabIndex = 26;
            // 
            // Closebtn
            // 
            this.Closebtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Closebtn.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Closebtn.Location = new System.Drawing.Point(24, 131);
            this.Closebtn.Name = "Closebtn";
            this.Closebtn.Size = new System.Drawing.Size(108, 43);
            this.Closebtn.TabIndex = 27;
            this.Closebtn.Text = "Close";
            this.Closebtn.UseVisualStyleBackColor = true;
            this.Closebtn.Click += new System.EventHandler(this.Closebtn_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            this.ClientSize = new System.Drawing.Size(506, 186);
            this.Controls.Add(this.Closebtn);
            this.Controls.Add(this.apptdoctornameLabel1);
            this.Controls.Add(this.appttimeLabel1);
            this.Controls.Add(this.apptdateLabel1);
            this.Controls.Add(this.apptpatientnameLabel1);
            this.Controls.Add(this.apptIDListBox1);
            this.Controls.Add(this.appointmentsBindingNavigator);
            this.Controls.Add(apptdoctornameLabel);
            this.Controls.Add(appttimeLabel);
            this.Controls.Add(apptdateLabel);
            this.Controls.Add(apptpatientnameLabel);
            this.Controls.Add(apptIDLabel);
            this.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.Name = "Form1";
            this.Text = "d";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.wolfMedicalDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.appointmentsBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.appointmentsBindingNavigator)).EndInit();
            this.appointmentsBindingNavigator.ResumeLayout(false);
            this.appointmentsBindingNavigator.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private WolfMedicalDataSet wolfMedicalDataSet;
        private System.Windows.Forms.BindingSource appointmentsBindingSource;
        private WolfMedicalDataSetTableAdapters.appointmentsTableAdapter appointmentsTableAdapter;
        private WolfMedicalDataSetTableAdapters.TableAdapterManager tableAdapterManager;
        private System.Windows.Forms.BindingNavigator appointmentsBindingNavigator;
        private System.Windows.Forms.ToolStripButton bindingNavigatorAddNewItem;
        private System.Windows.Forms.ToolStripLabel bindingNavigatorCountItem;
        private System.Windows.Forms.ToolStripButton bindingNavigatorDeleteItem;
        private System.Windows.Forms.ToolStripButton bindingNavigatorMoveFirstItem;
        private System.Windows.Forms.ToolStripButton bindingNavigatorMovePreviousItem;
        private System.Windows.Forms.ToolStripSeparator bindingNavigatorSeparator;
        private System.Windows.Forms.ToolStripTextBox bindingNavigatorPositionItem;
        private System.Windows.Forms.ToolStripSeparator bindingNavigatorSeparator1;
        private System.Windows.Forms.ToolStripButton bindingNavigatorMoveNextItem;
        private System.Windows.Forms.ToolStripButton bindingNavigatorMoveLastItem;
        private System.Windows.Forms.ToolStripSeparator bindingNavigatorSeparator2;
        private System.Windows.Forms.ToolStripButton appointmentsBindingNavigatorSaveItem;
        private System.Windows.Forms.ListBox apptIDListBox1;
        private System.Windows.Forms.Label apptpatientnameLabel1;
        private System.Windows.Forms.Label apptdateLabel1;
        private System.Windows.Forms.Label appttimeLabel1;
        private System.Windows.Forms.Label apptdoctornameLabel1;
        private System.Windows.Forms.Button Closebtn;
    }
}


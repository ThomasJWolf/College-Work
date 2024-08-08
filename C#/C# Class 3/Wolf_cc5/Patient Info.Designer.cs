namespace Wolf_cc5
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle1 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle2 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle3 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle4 = new System.Windows.Forms.DataGridViewCellStyle();
            this.patientInfoBindingNavigator = new System.Windows.Forms.BindingNavigator(this.components);
            this.bindingNavigatorAddNewItem = new System.Windows.Forms.ToolStripButton();
            this.patientInfoBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.wolfMedicalDataSet = new Wolf_cc5.WolfMedicalDataSet();
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
            this.patientInfoBindingNavigatorSaveItem = new System.Windows.Forms.ToolStripButton();
            this.patientInfoTableAdapter = new Wolf_cc5.WolfMedicalDataSetTableAdapters.patientInfoTableAdapter();
            this.tableAdapterManager = new Wolf_cc5.WolfMedicalDataSetTableAdapters.TableAdapterManager();
            this.Querieslbl = new System.Windows.Forms.Label();
            this.medicationsDataGridView = new System.Windows.Forms.DataGridView();
            this.patientIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.nameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.heightDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.weightDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.a1cvalueDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ageDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.HeightDescendingbtn = new System.Windows.Forms.Button();
            this.WeightLessThan200btn = new System.Windows.Forms.Button();
            this.WeightGreaterThan100btn = new System.Windows.Forms.Button();
            this.A1cGreaterThan5Point7btn = new System.Windows.Forms.Button();
            this.AgeGreaterThan70btn = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.patientInfoBindingNavigator)).BeginInit();
            this.patientInfoBindingNavigator.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.patientInfoBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.wolfMedicalDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.medicationsDataGridView)).BeginInit();
            this.SuspendLayout();
            // 
            // patientInfoBindingNavigator
            // 
            this.patientInfoBindingNavigator.AddNewItem = this.bindingNavigatorAddNewItem;
            this.patientInfoBindingNavigator.BindingSource = this.patientInfoBindingSource;
            this.patientInfoBindingNavigator.CountItem = this.bindingNavigatorCountItem;
            this.patientInfoBindingNavigator.DeleteItem = this.bindingNavigatorDeleteItem;
            this.patientInfoBindingNavigator.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
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
            this.patientInfoBindingNavigatorSaveItem});
            this.patientInfoBindingNavigator.Location = new System.Drawing.Point(0, 0);
            this.patientInfoBindingNavigator.MoveFirstItem = this.bindingNavigatorMoveFirstItem;
            this.patientInfoBindingNavigator.MoveLastItem = this.bindingNavigatorMoveLastItem;
            this.patientInfoBindingNavigator.MoveNextItem = this.bindingNavigatorMoveNextItem;
            this.patientInfoBindingNavigator.MovePreviousItem = this.bindingNavigatorMovePreviousItem;
            this.patientInfoBindingNavigator.Name = "patientInfoBindingNavigator";
            this.patientInfoBindingNavigator.PositionItem = this.bindingNavigatorPositionItem;
            this.patientInfoBindingNavigator.Size = new System.Drawing.Size(638, 25);
            this.patientInfoBindingNavigator.TabIndex = 0;
            this.patientInfoBindingNavigator.Text = "bindingNavigator1";
            // 
            // bindingNavigatorAddNewItem
            // 
            this.bindingNavigatorAddNewItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorAddNewItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorAddNewItem.Image")));
            this.bindingNavigatorAddNewItem.Name = "bindingNavigatorAddNewItem";
            this.bindingNavigatorAddNewItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorAddNewItem.Size = new System.Drawing.Size(23, 22);
            this.bindingNavigatorAddNewItem.Text = "Add new";
            // 
            // patientInfoBindingSource
            // 
            this.patientInfoBindingSource.DataMember = "patientInfo";
            this.patientInfoBindingSource.DataSource = this.wolfMedicalDataSet;
            // 
            // wolfMedicalDataSet
            // 
            this.wolfMedicalDataSet.DataSetName = "WolfMedicalDataSet";
            this.wolfMedicalDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
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
            this.bindingNavigatorDeleteItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorDeleteItem.Image")));
            this.bindingNavigatorDeleteItem.Name = "bindingNavigatorDeleteItem";
            this.bindingNavigatorDeleteItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorDeleteItem.Size = new System.Drawing.Size(23, 22);
            this.bindingNavigatorDeleteItem.Text = "Delete";
            // 
            // bindingNavigatorMoveFirstItem
            // 
            this.bindingNavigatorMoveFirstItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMoveFirstItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMoveFirstItem.Image")));
            this.bindingNavigatorMoveFirstItem.Name = "bindingNavigatorMoveFirstItem";
            this.bindingNavigatorMoveFirstItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMoveFirstItem.Size = new System.Drawing.Size(23, 22);
            this.bindingNavigatorMoveFirstItem.Text = "Move first";
            // 
            // bindingNavigatorMovePreviousItem
            // 
            this.bindingNavigatorMovePreviousItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
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
            this.bindingNavigatorMoveNextItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMoveNextItem.Image")));
            this.bindingNavigatorMoveNextItem.Name = "bindingNavigatorMoveNextItem";
            this.bindingNavigatorMoveNextItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMoveNextItem.Size = new System.Drawing.Size(23, 22);
            this.bindingNavigatorMoveNextItem.Text = "Move next";
            // 
            // bindingNavigatorMoveLastItem
            // 
            this.bindingNavigatorMoveLastItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
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
            // patientInfoBindingNavigatorSaveItem
            // 
            this.patientInfoBindingNavigatorSaveItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.patientInfoBindingNavigatorSaveItem.Image = ((System.Drawing.Image)(resources.GetObject("patientInfoBindingNavigatorSaveItem.Image")));
            this.patientInfoBindingNavigatorSaveItem.Name = "patientInfoBindingNavigatorSaveItem";
            this.patientInfoBindingNavigatorSaveItem.Size = new System.Drawing.Size(23, 22);
            this.patientInfoBindingNavigatorSaveItem.Text = "Save Data";
            this.patientInfoBindingNavigatorSaveItem.Click += new System.EventHandler(this.patientInfoBindingNavigatorSaveItem_Click);
            // 
            // patientInfoTableAdapter
            // 
            this.patientInfoTableAdapter.ClearBeforeFill = true;
            // 
            // tableAdapterManager
            // 
            this.tableAdapterManager.appointmentsTableAdapter = null;
            this.tableAdapterManager.BackupDataSetBeforeUpdate = false;
            this.tableAdapterManager.doctorsTableAdapter = null;
            this.tableAdapterManager.medicationsTableAdapter = null;
            this.tableAdapterManager.patientInfoTableAdapter = this.patientInfoTableAdapter;
            this.tableAdapterManager.patientsTableAdapter = null;
            this.tableAdapterManager.UpdateOrder = Wolf_cc5.WolfMedicalDataSetTableAdapters.TableAdapterManager.UpdateOrderOption.InsertUpdateDelete;
            // 
            // Querieslbl
            // 
            this.Querieslbl.AutoSize = true;
            this.Querieslbl.Font = new System.Drawing.Font("Arial", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Querieslbl.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.Querieslbl.Location = new System.Drawing.Point(12, 255);
            this.Querieslbl.Name = "Querieslbl";
            this.Querieslbl.Size = new System.Drawing.Size(90, 24);
            this.Querieslbl.TabIndex = 2;
            this.Querieslbl.Text = "Queries:";
            // 
            // medicationsDataGridView
            // 
            this.medicationsDataGridView.AutoGenerateColumns = false;
            this.medicationsDataGridView.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            this.medicationsDataGridView.BorderStyle = System.Windows.Forms.BorderStyle.None;
            dataGridViewCellStyle1.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            dataGridViewCellStyle1.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle1.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            dataGridViewCellStyle1.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle1.SelectionForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle1.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.medicationsDataGridView.ColumnHeadersDefaultCellStyle = dataGridViewCellStyle1;
            this.medicationsDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.medicationsDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.patientIDDataGridViewTextBoxColumn,
            this.nameDataGridViewTextBoxColumn,
            this.heightDataGridViewTextBoxColumn,
            this.weightDataGridViewTextBoxColumn,
            this.a1cvalueDataGridViewTextBoxColumn,
            this.ageDataGridViewTextBoxColumn});
            this.medicationsDataGridView.DataSource = this.patientInfoBindingSource;
            dataGridViewCellStyle2.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle2.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            dataGridViewCellStyle2.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle2.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            dataGridViewCellStyle2.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle2.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle2.WrapMode = System.Windows.Forms.DataGridViewTriState.False;
            this.medicationsDataGridView.DefaultCellStyle = dataGridViewCellStyle2;
            this.medicationsDataGridView.Location = new System.Drawing.Point(0, 28);
            this.medicationsDataGridView.Name = "medicationsDataGridView";
            dataGridViewCellStyle3.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle3.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            dataGridViewCellStyle3.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle3.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            dataGridViewCellStyle3.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle3.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle3.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.medicationsDataGridView.RowHeadersDefaultCellStyle = dataGridViewCellStyle3;
            dataGridViewCellStyle4.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            dataGridViewCellStyle4.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle4.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.medicationsDataGridView.RowsDefaultCellStyle = dataGridViewCellStyle4;
            this.medicationsDataGridView.Size = new System.Drawing.Size(638, 240);
            this.medicationsDataGridView.TabIndex = 3;
            // 
            // patientIDDataGridViewTextBoxColumn
            // 
            this.patientIDDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.DisplayedCells;
            this.patientIDDataGridViewTextBoxColumn.DataPropertyName = "patientID";
            this.patientIDDataGridViewTextBoxColumn.HeaderText = "Patient ID";
            this.patientIDDataGridViewTextBoxColumn.Name = "patientIDDataGridViewTextBoxColumn";
            this.patientIDDataGridViewTextBoxColumn.ReadOnly = true;
            this.patientIDDataGridViewTextBoxColumn.Width = 99;
            // 
            // nameDataGridViewTextBoxColumn
            // 
            this.nameDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.DisplayedCells;
            this.nameDataGridViewTextBoxColumn.DataPropertyName = "name";
            this.nameDataGridViewTextBoxColumn.HeaderText = "Name";
            this.nameDataGridViewTextBoxColumn.Name = "nameDataGridViewTextBoxColumn";
            this.nameDataGridViewTextBoxColumn.Width = 73;
            // 
            // heightDataGridViewTextBoxColumn
            // 
            this.heightDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.DisplayedCells;
            this.heightDataGridViewTextBoxColumn.DataPropertyName = "height";
            this.heightDataGridViewTextBoxColumn.HeaderText = "Height";
            this.heightDataGridViewTextBoxColumn.Name = "heightDataGridViewTextBoxColumn";
            this.heightDataGridViewTextBoxColumn.Width = 76;
            // 
            // weightDataGridViewTextBoxColumn
            // 
            this.weightDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.DisplayedCells;
            this.weightDataGridViewTextBoxColumn.DataPropertyName = "weight";
            this.weightDataGridViewTextBoxColumn.HeaderText = "Weight";
            this.weightDataGridViewTextBoxColumn.Name = "weightDataGridViewTextBoxColumn";
            this.weightDataGridViewTextBoxColumn.Width = 80;
            // 
            // a1cvalueDataGridViewTextBoxColumn
            // 
            this.a1cvalueDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.DisplayedCells;
            this.a1cvalueDataGridViewTextBoxColumn.DataPropertyName = "a1cvalue";
            this.a1cvalueDataGridViewTextBoxColumn.HeaderText = "A1c Value";
            this.a1cvalueDataGridViewTextBoxColumn.Name = "a1cvalueDataGridViewTextBoxColumn";
            this.a1cvalueDataGridViewTextBoxColumn.Width = 102;
            // 
            // ageDataGridViewTextBoxColumn
            // 
            this.ageDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.DisplayedCells;
            this.ageDataGridViewTextBoxColumn.DataPropertyName = "age";
            this.ageDataGridViewTextBoxColumn.HeaderText = "Age";
            this.ageDataGridViewTextBoxColumn.Name = "ageDataGridViewTextBoxColumn";
            this.ageDataGridViewTextBoxColumn.Width = 60;
            // 
            // HeightDescendingbtn
            // 
            this.HeightDescendingbtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.HeightDescendingbtn.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.HeightDescendingbtn.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.HeightDescendingbtn.Location = new System.Drawing.Point(65, 305);
            this.HeightDescendingbtn.Name = "HeightDescendingbtn";
            this.HeightDescendingbtn.Size = new System.Drawing.Size(165, 62);
            this.HeightDescendingbtn.TabIndex = 28;
            this.HeightDescendingbtn.Text = "Height Descending";
            this.HeightDescendingbtn.UseVisualStyleBackColor = true;
            this.HeightDescendingbtn.Click += new System.EventHandler(this.HeightDescendingbtn_Click);
            // 
            // WeightLessThan200btn
            // 
            this.WeightLessThan200btn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.WeightLessThan200btn.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.WeightLessThan200btn.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.WeightLessThan200btn.Location = new System.Drawing.Point(235, 305);
            this.WeightLessThan200btn.Name = "WeightLessThan200btn";
            this.WeightLessThan200btn.Size = new System.Drawing.Size(165, 62);
            this.WeightLessThan200btn.TabIndex = 29;
            this.WeightLessThan200btn.Text = "Weight > 200";
            this.WeightLessThan200btn.UseVisualStyleBackColor = true;
            this.WeightLessThan200btn.Click += new System.EventHandler(this.WeightLessThan200btn_Click);
            // 
            // WeightGreaterThan100btn
            // 
            this.WeightGreaterThan100btn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.WeightGreaterThan100btn.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.WeightGreaterThan100btn.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.WeightGreaterThan100btn.Location = new System.Drawing.Point(405, 305);
            this.WeightGreaterThan100btn.Name = "WeightGreaterThan100btn";
            this.WeightGreaterThan100btn.Size = new System.Drawing.Size(165, 62);
            this.WeightGreaterThan100btn.TabIndex = 30;
            this.WeightGreaterThan100btn.Text = "Weight < 100";
            this.WeightGreaterThan100btn.UseVisualStyleBackColor = true;
            this.WeightGreaterThan100btn.Click += new System.EventHandler(this.WeightGreaterThan100btn_Click);
            // 
            // A1cGreaterThan5Point7btn
            // 
            this.A1cGreaterThan5Point7btn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.A1cGreaterThan5Point7btn.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.A1cGreaterThan5Point7btn.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.A1cGreaterThan5Point7btn.Location = new System.Drawing.Point(151, 373);
            this.A1cGreaterThan5Point7btn.Name = "A1cGreaterThan5Point7btn";
            this.A1cGreaterThan5Point7btn.Size = new System.Drawing.Size(165, 62);
            this.A1cGreaterThan5Point7btn.TabIndex = 31;
            this.A1cGreaterThan5Point7btn.Text = "A1c > 5.7";
            this.A1cGreaterThan5Point7btn.UseVisualStyleBackColor = true;
            this.A1cGreaterThan5Point7btn.Click += new System.EventHandler(this.A1cGreaterThan5Point7btn_Click);
            // 
            // AgeGreaterThan70btn
            // 
            this.AgeGreaterThan70btn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.AgeGreaterThan70btn.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.AgeGreaterThan70btn.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.AgeGreaterThan70btn.Location = new System.Drawing.Point(321, 373);
            this.AgeGreaterThan70btn.Name = "AgeGreaterThan70btn";
            this.AgeGreaterThan70btn.Size = new System.Drawing.Size(165, 62);
            this.AgeGreaterThan70btn.TabIndex = 32;
            this.AgeGreaterThan70btn.Text = "Age > 70";
            this.AgeGreaterThan70btn.UseVisualStyleBackColor = true;
            this.AgeGreaterThan70btn.Click += new System.EventHandler(this.AgeGreaterThan70btn_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            this.ClientSize = new System.Drawing.Size(638, 450);
            this.Controls.Add(this.AgeGreaterThan70btn);
            this.Controls.Add(this.A1cGreaterThan5Point7btn);
            this.Controls.Add(this.WeightGreaterThan100btn);
            this.Controls.Add(this.WeightLessThan200btn);
            this.Controls.Add(this.HeightDescendingbtn);
            this.Controls.Add(this.Querieslbl);
            this.Controls.Add(this.medicationsDataGridView);
            this.Controls.Add(this.patientInfoBindingNavigator);
            this.Name = "Patient Info";
            this.Text = "Patient Info";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.patientInfoBindingNavigator)).EndInit();
            this.patientInfoBindingNavigator.ResumeLayout(false);
            this.patientInfoBindingNavigator.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.patientInfoBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.wolfMedicalDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.medicationsDataGridView)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private WolfMedicalDataSet wolfMedicalDataSet;
        private System.Windows.Forms.BindingSource patientInfoBindingSource;
        private WolfMedicalDataSetTableAdapters.patientInfoTableAdapter patientInfoTableAdapter;
        private WolfMedicalDataSetTableAdapters.TableAdapterManager tableAdapterManager;
        private System.Windows.Forms.BindingNavigator patientInfoBindingNavigator;
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
        private System.Windows.Forms.ToolStripButton patientInfoBindingNavigatorSaveItem;
        private System.Windows.Forms.Label Querieslbl;
        private System.Windows.Forms.DataGridView medicationsDataGridView;
        private System.Windows.Forms.DataGridViewTextBoxColumn patientIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn nameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn heightDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn weightDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn a1cvalueDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn ageDataGridViewTextBoxColumn;
        private System.Windows.Forms.Button HeightDescendingbtn;
        private System.Windows.Forms.Button WeightLessThan200btn;
        private System.Windows.Forms.Button WeightGreaterThan100btn;
        private System.Windows.Forms.Button A1cGreaterThan5Point7btn;
        private System.Windows.Forms.Button AgeGreaterThan70btn;
    }
}


namespace Wolf_cc3
{
    partial class MedDetailsView
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
            System.Windows.Forms.Label medIDLabel;
            System.Windows.Forms.Label mednameLabel;
            System.Windows.Forms.Label medsizeLabel;
            System.Windows.Forms.Label medqtyLabel;
            System.Windows.Forms.Label medeffectsLabel;
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MedDetailsView));
            this.wolfMedicalDataSet = new Wolf_cc3.WolfMedicalDataSet();
            this.medicationsBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.medicationsTableAdapter = new Wolf_cc3.WolfMedicalDataSetTableAdapters.medicationsTableAdapter();
            this.tableAdapterManager = new Wolf_cc3.WolfMedicalDataSetTableAdapters.TableAdapterManager();
            this.medicationsBindingNavigator = new System.Windows.Forms.BindingNavigator(this.components);
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
            this.medicationsBindingNavigatorSaveItem = new System.Windows.Forms.ToolStripButton();
            this.medIDTextBox = new System.Windows.Forms.TextBox();
            this.mednameTextBox = new System.Windows.Forms.TextBox();
            this.medsizeTextBox = new System.Windows.Forms.TextBox();
            this.medqtyTextBox = new System.Windows.Forms.TextBox();
            this.medeffectsTextBox = new System.Windows.Forms.TextBox();
            this.gridbtn = new System.Windows.Forms.Button();
            medIDLabel = new System.Windows.Forms.Label();
            mednameLabel = new System.Windows.Forms.Label();
            medsizeLabel = new System.Windows.Forms.Label();
            medqtyLabel = new System.Windows.Forms.Label();
            medeffectsLabel = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.wolfMedicalDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.medicationsBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.medicationsBindingNavigator)).BeginInit();
            this.medicationsBindingNavigator.SuspendLayout();
            this.SuspendLayout();
            // 
            // medIDLabel
            // 
            medIDLabel.AutoSize = true;
            medIDLabel.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            medIDLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            medIDLabel.Location = new System.Drawing.Point(12, 39);
            medIDLabel.Name = "medIDLabel";
            medIDLabel.Size = new System.Drawing.Size(95, 18);
            medIDLabel.TabIndex = 1;
            medIDLabel.Text = "Medicine ID:";
            // 
            // mednameLabel
            // 
            mednameLabel.AutoSize = true;
            mednameLabel.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            mednameLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            mednameLabel.Location = new System.Drawing.Point(12, 63);
            mednameLabel.Name = "mednameLabel";
            mednameLabel.Size = new System.Drawing.Size(54, 18);
            mednameLabel.TabIndex = 3;
            mednameLabel.Text = "Name:";
            // 
            // medsizeLabel
            // 
            medsizeLabel.AutoSize = true;
            medsizeLabel.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            medsizeLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            medsizeLabel.Location = new System.Drawing.Point(12, 86);
            medsizeLabel.Name = "medsizeLabel";
            medsizeLabel.Size = new System.Drawing.Size(43, 18);
            medsizeLabel.TabIndex = 5;
            medsizeLabel.Text = "Size:";
            // 
            // medqtyLabel
            // 
            medqtyLabel.AutoSize = true;
            medqtyLabel.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            medqtyLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            medqtyLabel.Location = new System.Drawing.Point(12, 112);
            medqtyLabel.Name = "medqtyLabel";
            medqtyLabel.Size = new System.Drawing.Size(68, 18);
            medqtyLabel.TabIndex = 7;
            medqtyLabel.Text = "Quantity:";
            // 
            // medeffectsLabel
            // 
            medeffectsLabel.AutoSize = true;
            medeffectsLabel.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            medeffectsLabel.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            medeffectsLabel.Location = new System.Drawing.Point(12, 138);
            medeffectsLabel.Name = "medeffectsLabel";
            medeffectsLabel.Size = new System.Drawing.Size(97, 18);
            medeffectsLabel.TabIndex = 9;
            medeffectsLabel.Text = "Side Effects:";
            // 
            // wolfMedicalDataSet
            // 
            this.wolfMedicalDataSet.DataSetName = "WolfMedicalDataSet";
            this.wolfMedicalDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // medicationsBindingSource
            // 
            this.medicationsBindingSource.DataMember = "medications";
            this.medicationsBindingSource.DataSource = this.wolfMedicalDataSet;
            // 
            // medicationsTableAdapter
            // 
            this.medicationsTableAdapter.ClearBeforeFill = true;
            // 
            // tableAdapterManager
            // 
            this.tableAdapterManager.BackupDataSetBeforeUpdate = false;
            this.tableAdapterManager.doctorsTableAdapter = null;
            this.tableAdapterManager.medicationsTableAdapter = this.medicationsTableAdapter;
            this.tableAdapterManager.patientsTableAdapter = null;
            this.tableAdapterManager.UpdateOrder = Wolf_cc3.WolfMedicalDataSetTableAdapters.TableAdapterManager.UpdateOrderOption.InsertUpdateDelete;
            // 
            // medicationsBindingNavigator
            // 
            this.medicationsBindingNavigator.AddNewItem = this.bindingNavigatorAddNewItem;
            this.medicationsBindingNavigator.BindingSource = this.medicationsBindingSource;
            this.medicationsBindingNavigator.CountItem = this.bindingNavigatorCountItem;
            this.medicationsBindingNavigator.DeleteItem = this.bindingNavigatorDeleteItem;
            this.medicationsBindingNavigator.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
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
            this.medicationsBindingNavigatorSaveItem});
            this.medicationsBindingNavigator.Location = new System.Drawing.Point(0, 0);
            this.medicationsBindingNavigator.MoveFirstItem = this.bindingNavigatorMoveFirstItem;
            this.medicationsBindingNavigator.MoveLastItem = this.bindingNavigatorMoveLastItem;
            this.medicationsBindingNavigator.MoveNextItem = this.bindingNavigatorMoveNextItem;
            this.medicationsBindingNavigator.MovePreviousItem = this.bindingNavigatorMovePreviousItem;
            this.medicationsBindingNavigator.Name = "medicationsBindingNavigator";
            this.medicationsBindingNavigator.PositionItem = this.bindingNavigatorPositionItem;
            this.medicationsBindingNavigator.Size = new System.Drawing.Size(800, 25);
            this.medicationsBindingNavigator.TabIndex = 0;
            this.medicationsBindingNavigator.Text = "bindingNavigator1";
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
            // medicationsBindingNavigatorSaveItem
            // 
            this.medicationsBindingNavigatorSaveItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.medicationsBindingNavigatorSaveItem.Image = ((System.Drawing.Image)(resources.GetObject("medicationsBindingNavigatorSaveItem.Image")));
            this.medicationsBindingNavigatorSaveItem.Name = "medicationsBindingNavigatorSaveItem";
            this.medicationsBindingNavigatorSaveItem.Size = new System.Drawing.Size(23, 22);
            this.medicationsBindingNavigatorSaveItem.Text = "Save Data";
            this.medicationsBindingNavigatorSaveItem.Click += new System.EventHandler(this.medicationsBindingNavigatorSaveItem_Click);
            // 
            // medIDTextBox
            // 
            this.medIDTextBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(50)))), ((int)(((byte)(50)))));
            this.medIDTextBox.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.medicationsBindingSource, "medID", true));
            this.medIDTextBox.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.medIDTextBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.medIDTextBox.Location = new System.Drawing.Point(113, 31);
            this.medIDTextBox.Name = "medIDTextBox";
            this.medIDTextBox.Size = new System.Drawing.Size(658, 26);
            this.medIDTextBox.TabIndex = 2;
            // 
            // mednameTextBox
            // 
            this.mednameTextBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(50)))), ((int)(((byte)(50)))));
            this.mednameTextBox.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.medicationsBindingSource, "medname", true));
            this.mednameTextBox.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.mednameTextBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.mednameTextBox.Location = new System.Drawing.Point(113, 57);
            this.mednameTextBox.Name = "mednameTextBox";
            this.mednameTextBox.Size = new System.Drawing.Size(658, 26);
            this.mednameTextBox.TabIndex = 4;
            // 
            // medsizeTextBox
            // 
            this.medsizeTextBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(50)))), ((int)(((byte)(50)))));
            this.medsizeTextBox.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.medicationsBindingSource, "medsize", true));
            this.medsizeTextBox.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.medsizeTextBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.medsizeTextBox.Location = new System.Drawing.Point(113, 83);
            this.medsizeTextBox.Name = "medsizeTextBox";
            this.medsizeTextBox.Size = new System.Drawing.Size(658, 26);
            this.medsizeTextBox.TabIndex = 6;
            // 
            // medqtyTextBox
            // 
            this.medqtyTextBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(50)))), ((int)(((byte)(50)))));
            this.medqtyTextBox.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.medicationsBindingSource, "medqty", true));
            this.medqtyTextBox.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.medqtyTextBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.medqtyTextBox.Location = new System.Drawing.Point(113, 109);
            this.medqtyTextBox.Name = "medqtyTextBox";
            this.medqtyTextBox.Size = new System.Drawing.Size(658, 26);
            this.medqtyTextBox.TabIndex = 8;
            // 
            // medeffectsTextBox
            // 
            this.medeffectsTextBox.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(50)))), ((int)(((byte)(50)))));
            this.medeffectsTextBox.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.medicationsBindingSource, "medeffects", true));
            this.medeffectsTextBox.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.medeffectsTextBox.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(137)))), ((int)(((byte)(0)))));
            this.medeffectsTextBox.Location = new System.Drawing.Point(113, 135);
            this.medeffectsTextBox.Name = "medeffectsTextBox";
            this.medeffectsTextBox.Size = new System.Drawing.Size(658, 26);
            this.medeffectsTextBox.TabIndex = 10;
            // 
            // gridbtn
            // 
            this.gridbtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.gridbtn.Location = new System.Drawing.Point(301, 376);
            this.gridbtn.Name = "gridbtn";
            this.gridbtn.Size = new System.Drawing.Size(211, 62);
            this.gridbtn.TabIndex = 13;
            this.gridbtn.Text = "Grid View";
            this.gridbtn.UseVisualStyleBackColor = true;
            this.gridbtn.Click += new System.EventHandler(this.gridbtn_Click);
            // 
            // MedDetailsView
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(42)))), ((int)(((byte)(42)))), ((int)(((byte)(42)))));
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.gridbtn);
            this.Controls.Add(medIDLabel);
            this.Controls.Add(this.medIDTextBox);
            this.Controls.Add(mednameLabel);
            this.Controls.Add(this.mednameTextBox);
            this.Controls.Add(medsizeLabel);
            this.Controls.Add(this.medsizeTextBox);
            this.Controls.Add(medqtyLabel);
            this.Controls.Add(this.medqtyTextBox);
            this.Controls.Add(medeffectsLabel);
            this.Controls.Add(this.medeffectsTextBox);
            this.Controls.Add(this.medicationsBindingNavigator);
            this.Name = "MedDetailsView";
            this.Text = "MedDetailsView";
            this.Load += new System.EventHandler(this.MedDetailsView_Load);
            ((System.ComponentModel.ISupportInitialize)(this.wolfMedicalDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.medicationsBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.medicationsBindingNavigator)).EndInit();
            this.medicationsBindingNavigator.ResumeLayout(false);
            this.medicationsBindingNavigator.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private WolfMedicalDataSet wolfMedicalDataSet;
        private System.Windows.Forms.BindingSource medicationsBindingSource;
        private WolfMedicalDataSetTableAdapters.medicationsTableAdapter medicationsTableAdapter;
        private WolfMedicalDataSetTableAdapters.TableAdapterManager tableAdapterManager;
        private System.Windows.Forms.BindingNavigator medicationsBindingNavigator;
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
        private System.Windows.Forms.ToolStripButton medicationsBindingNavigatorSaveItem;
        private System.Windows.Forms.TextBox medIDTextBox;
        private System.Windows.Forms.TextBox mednameTextBox;
        private System.Windows.Forms.TextBox medsizeTextBox;
        private System.Windows.Forms.TextBox medqtyTextBox;
        private System.Windows.Forms.TextBox medeffectsTextBox;
        private System.Windows.Forms.Button gridbtn;
    }
}
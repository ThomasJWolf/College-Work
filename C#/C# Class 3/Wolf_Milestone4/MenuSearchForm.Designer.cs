namespace Wolf_Milestone4
{
    partial class MenuSearchForm
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
            System.Windows.Forms.Label InventoryNamelbl;
            System.Windows.Forms.Label InventoryQuantitylbl;
            System.Windows.Forms.Label InventoryIDlbl;
            System.Windows.Forms.Label InventoryActivelbl;
            System.Windows.Forms.Label MenuItemPricelbl;
            System.Windows.Forms.Label label1;
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MenuSearchForm));
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle1 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle2 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle3 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle4 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle5 = new System.Windows.Forms.DataGridViewCellStyle();
            this.palmettoRestaurantDataSet = new Wolf_Milestone4.PalmettoRestaurantDataSet();
            this.menuItemBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.menuItemTableAdapter = new Wolf_Milestone4.PalmettoRestaurantDataSetTableAdapters.MenuItemTableAdapter();
            this.tableAdapterManager = new Wolf_Milestone4.PalmettoRestaurantDataSetTableAdapters.TableAdapterManager();
            this.menuItemBindingNavigator = new System.Windows.Forms.BindingNavigator(this.components);
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
            this.menuItemBindingNavigatorSaveItem = new System.Windows.Forms.ToolStripButton();
            this.MenuItempnl = new System.Windows.Forms.Panel();
            this.InventoryNamecbx = new System.Windows.Forms.ComboBox();
            this.inventoryBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.MenuItemPricetxb = new System.Windows.Forms.TextBox();
            this.MenuItemDescriptiontxb = new System.Windows.Forms.TextBox();
            this.MenuItemNametxb = new System.Windows.Forms.TextBox();
            this.MenuItemActiveNorbn = new System.Windows.Forms.RadioButton();
            this.MenuItemActiveYesrbn = new System.Windows.Forms.RadioButton();
            this.MenuItemIDcbx = new System.Windows.Forms.ComboBox();
            this.Titlelbl = new System.Windows.Forms.Label();
            this.PalmettoGolfCourseimg = new System.Windows.Forms.PictureBox();
            this.Navpnl = new System.Windows.Forms.Panel();
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.Userstsm = new System.Windows.Forms.ToolStripMenuItem();
            this.UserInserttsm = new System.Windows.Forms.ToolStripMenuItem();
            this.UserSearchtsm = new System.Windows.Forms.ToolStripMenuItem();
            this.UserUpdatetsm = new System.Windows.Forms.ToolStripMenuItem();
            this.Menutsm = new System.Windows.Forms.ToolStripMenuItem();
            this.MenuViewtsm = new System.Windows.Forms.ToolStripMenuItem();
            this.MenuInserttsm = new System.Windows.Forms.ToolStripMenuItem();
            this.MenuSearchtsm = new System.Windows.Forms.ToolStripMenuItem();
            this.MenuUpdatetsm = new System.Windows.Forms.ToolStripMenuItem();
            this.Orderstsm = new System.Windows.Forms.ToolStripMenuItem();
            this.OrdersInserttsm = new System.Windows.Forms.ToolStripMenuItem();
            this.OrdersSearchtsm = new System.Windows.Forms.ToolStripMenuItem();
            this.OrdersUpdatetsm = new System.Windows.Forms.ToolStripMenuItem();
            this.OrderReportstsm = new System.Windows.Forms.ToolStripMenuItem();
            this.Inventorytsm = new System.Windows.Forms.ToolStripMenuItem();
            this.InventoryInserttsm = new System.Windows.Forms.ToolStripMenuItem();
            this.InventorySearchtsm = new System.Windows.Forms.ToolStripMenuItem();
            this.InventoryUpdatetsm = new System.Windows.Forms.ToolStripMenuItem();
            this.InventoryReportstsm = new System.Windows.Forms.ToolStripMenuItem();
            this.Tabletsm = new System.Windows.Forms.ToolStripMenuItem();
            this.TableInserttsm = new System.Windows.Forms.ToolStripMenuItem();
            this.TableSearchtsm = new System.Windows.Forms.ToolStripMenuItem();
            this.TableUpdatetsm = new System.Windows.Forms.ToolStripMenuItem();
            this.MenuItemdgv = new System.Windows.Forms.DataGridView();
            this.menuItemIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.menuItemNameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.menuItemDescriptionDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.menuItemPriceDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.menuItemActiveDataGridViewCheckBoxColumn = new System.Windows.Forms.DataGridViewCheckBoxColumn();
            this.inventoryTableAdapter = new Wolf_Milestone4.PalmettoRestaurantDataSetTableAdapters.InventoryTableAdapter();
            InventoryNamelbl = new System.Windows.Forms.Label();
            InventoryQuantitylbl = new System.Windows.Forms.Label();
            InventoryIDlbl = new System.Windows.Forms.Label();
            InventoryActivelbl = new System.Windows.Forms.Label();
            MenuItemPricelbl = new System.Windows.Forms.Label();
            label1 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.palmettoRestaurantDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.menuItemBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.menuItemBindingNavigator)).BeginInit();
            this.menuItemBindingNavigator.SuspendLayout();
            this.MenuItempnl.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.inventoryBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.PalmettoGolfCourseimg)).BeginInit();
            this.Navpnl.SuspendLayout();
            this.menuStrip1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.MenuItemdgv)).BeginInit();
            this.SuspendLayout();
            // 
            // InventoryNamelbl
            // 
            InventoryNamelbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            InventoryNamelbl.AutoSize = true;
            InventoryNamelbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            InventoryNamelbl.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            InventoryNamelbl.ForeColor = System.Drawing.Color.White;
            InventoryNamelbl.Location = new System.Drawing.Point(462, 318);
            InventoryNamelbl.Name = "InventoryNamelbl";
            InventoryNamelbl.Size = new System.Drawing.Size(131, 20);
            InventoryNamelbl.TabIndex = 40;
            InventoryNamelbl.Text = "Menu Item Name:";
            // 
            // InventoryQuantitylbl
            // 
            InventoryQuantitylbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            InventoryQuantitylbl.AutoSize = true;
            InventoryQuantitylbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            InventoryQuantitylbl.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            InventoryQuantitylbl.ForeColor = System.Drawing.Color.White;
            InventoryQuantitylbl.Location = new System.Drawing.Point(424, 348);
            InventoryQuantitylbl.Name = "InventoryQuantitylbl";
            InventoryQuantitylbl.Size = new System.Drawing.Size(169, 20);
            InventoryQuantitylbl.TabIndex = 41;
            InventoryQuantitylbl.Text = "Menu Item Description:";
            // 
            // InventoryIDlbl
            // 
            InventoryIDlbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            InventoryIDlbl.AutoSize = true;
            InventoryIDlbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            InventoryIDlbl.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            InventoryIDlbl.ForeColor = System.Drawing.Color.White;
            InventoryIDlbl.Location = new System.Drawing.Point(489, 288);
            InventoryIDlbl.Name = "InventoryIDlbl";
            InventoryIDlbl.Size = new System.Drawing.Size(104, 20);
            InventoryIDlbl.TabIndex = 43;
            InventoryIDlbl.Text = "Menu Item ID:";
            // 
            // InventoryActivelbl
            // 
            InventoryActivelbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            InventoryActivelbl.AutoSize = true;
            InventoryActivelbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            InventoryActivelbl.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            InventoryActivelbl.ForeColor = System.Drawing.Color.White;
            InventoryActivelbl.Location = new System.Drawing.Point(462, 438);
            InventoryActivelbl.Name = "InventoryActivelbl";
            InventoryActivelbl.Size = new System.Drawing.Size(131, 20);
            InventoryActivelbl.TabIndex = 44;
            InventoryActivelbl.Text = "Menu Item Active:";
            // 
            // MenuItemPricelbl
            // 
            MenuItemPricelbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            MenuItemPricelbl.AutoSize = true;
            MenuItemPricelbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            MenuItemPricelbl.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            MenuItemPricelbl.ForeColor = System.Drawing.Color.White;
            MenuItemPricelbl.Location = new System.Drawing.Point(467, 378);
            MenuItemPricelbl.Name = "MenuItemPricelbl";
            MenuItemPricelbl.Size = new System.Drawing.Size(126, 20);
            MenuItemPricelbl.TabIndex = 51;
            MenuItemPricelbl.Text = "Menu Item Price:";
            // 
            // label1
            // 
            label1.Anchor = System.Windows.Forms.AnchorStyles.Top;
            label1.AutoSize = true;
            label1.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            label1.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            label1.ForeColor = System.Drawing.Color.White;
            label1.Location = new System.Drawing.Point(473, 408);
            label1.Name = "label1";
            label1.Size = new System.Drawing.Size(120, 20);
            label1.TabIndex = 53;
            label1.Text = "Inventory Name:";
            // 
            // palmettoRestaurantDataSet
            // 
            this.palmettoRestaurantDataSet.DataSetName = "PalmettoRestaurantDataSet";
            this.palmettoRestaurantDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // menuItemBindingSource
            // 
            this.menuItemBindingSource.DataMember = "MenuItem";
            this.menuItemBindingSource.DataSource = this.palmettoRestaurantDataSet;
            // 
            // menuItemTableAdapter
            // 
            this.menuItemTableAdapter.ClearBeforeFill = true;
            // 
            // tableAdapterManager
            // 
            this.tableAdapterManager.BackupDataSetBeforeUpdate = false;
            this.tableAdapterManager.InventoryTableAdapter = null;
            this.tableAdapterManager.MenuItemTableAdapter = this.menuItemTableAdapter;
            this.tableAdapterManager.OrderDetailTableAdapter = null;
            this.tableAdapterManager.OrderTableAdapter = null;
            this.tableAdapterManager.TableTableAdapter = null;
            this.tableAdapterManager.UpdateOrder = Wolf_Milestone4.PalmettoRestaurantDataSetTableAdapters.TableAdapterManager.UpdateOrderOption.InsertUpdateDelete;
            this.tableAdapterManager.UserTableAdapter = null;
            // 
            // menuItemBindingNavigator
            // 
            this.menuItemBindingNavigator.AddNewItem = this.bindingNavigatorAddNewItem;
            this.menuItemBindingNavigator.BindingSource = this.menuItemBindingSource;
            this.menuItemBindingNavigator.CountItem = this.bindingNavigatorCountItem;
            this.menuItemBindingNavigator.DeleteItem = this.bindingNavigatorDeleteItem;
            this.menuItemBindingNavigator.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
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
            this.menuItemBindingNavigatorSaveItem});
            this.menuItemBindingNavigator.Location = new System.Drawing.Point(0, 0);
            this.menuItemBindingNavigator.MoveFirstItem = this.bindingNavigatorMoveFirstItem;
            this.menuItemBindingNavigator.MoveLastItem = this.bindingNavigatorMoveLastItem;
            this.menuItemBindingNavigator.MoveNextItem = this.bindingNavigatorMoveNextItem;
            this.menuItemBindingNavigator.MovePreviousItem = this.bindingNavigatorMovePreviousItem;
            this.menuItemBindingNavigator.Name = "menuItemBindingNavigator";
            this.menuItemBindingNavigator.PositionItem = this.bindingNavigatorPositionItem;
            this.menuItemBindingNavigator.Size = new System.Drawing.Size(1210, 25);
            this.menuItemBindingNavigator.TabIndex = 0;
            this.menuItemBindingNavigator.Text = "bindingNavigator1";
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
            // menuItemBindingNavigatorSaveItem
            // 
            this.menuItemBindingNavigatorSaveItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.menuItemBindingNavigatorSaveItem.Image = ((System.Drawing.Image)(resources.GetObject("menuItemBindingNavigatorSaveItem.Image")));
            this.menuItemBindingNavigatorSaveItem.Name = "menuItemBindingNavigatorSaveItem";
            this.menuItemBindingNavigatorSaveItem.Size = new System.Drawing.Size(23, 22);
            this.menuItemBindingNavigatorSaveItem.Text = "Save Data";
            this.menuItemBindingNavigatorSaveItem.Click += new System.EventHandler(this.menuItemBindingNavigatorSaveItem_Click);
            // 
            // MenuItempnl
            // 
            this.MenuItempnl.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            this.MenuItempnl.Controls.Add(this.InventoryNamecbx);
            this.MenuItempnl.Controls.Add(label1);
            this.MenuItempnl.Controls.Add(this.MenuItemPricetxb);
            this.MenuItempnl.Controls.Add(MenuItemPricelbl);
            this.MenuItempnl.Controls.Add(this.MenuItemDescriptiontxb);
            this.MenuItempnl.Controls.Add(this.MenuItemNametxb);
            this.MenuItempnl.Controls.Add(this.MenuItemActiveNorbn);
            this.MenuItempnl.Controls.Add(this.MenuItemActiveYesrbn);
            this.MenuItempnl.Controls.Add(InventoryActivelbl);
            this.MenuItempnl.Controls.Add(InventoryIDlbl);
            this.MenuItempnl.Controls.Add(this.MenuItemIDcbx);
            this.MenuItempnl.Controls.Add(InventoryQuantitylbl);
            this.MenuItempnl.Controls.Add(InventoryNamelbl);
            this.MenuItempnl.Controls.Add(this.Titlelbl);
            this.MenuItempnl.Controls.Add(this.PalmettoGolfCourseimg);
            this.MenuItempnl.Controls.Add(this.Navpnl);
            this.MenuItempnl.Controls.Add(this.MenuItemdgv);
            this.MenuItempnl.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MenuItempnl.Location = new System.Drawing.Point(0, 25);
            this.MenuItempnl.Name = "MenuItempnl";
            this.MenuItempnl.Padding = new System.Windows.Forms.Padding(0, 500, 0, 0);
            this.MenuItempnl.Size = new System.Drawing.Size(1210, 722);
            this.MenuItempnl.TabIndex = 4;
            // 
            // InventoryNamecbx
            // 
            this.InventoryNamecbx.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.InventoryNamecbx.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            this.InventoryNamecbx.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.inventoryBindingSource, "InventoryName", true));
            this.InventoryNamecbx.DataSource = this.inventoryBindingSource;
            this.InventoryNamecbx.DisplayMember = "InventoryName";
            this.InventoryNamecbx.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.InventoryNamecbx.ForeColor = System.Drawing.Color.White;
            this.InventoryNamecbx.FormattingEnabled = true;
            this.InventoryNamecbx.Location = new System.Drawing.Point(613, 405);
            this.InventoryNamecbx.Name = "InventoryNamecbx";
            this.InventoryNamecbx.Size = new System.Drawing.Size(174, 26);
            this.InventoryNamecbx.TabIndex = 55;
            this.InventoryNamecbx.ValueMember = "InventoryName";
            this.InventoryNamecbx.SelectedIndexChanged += new System.EventHandler(this.InventoryNamecbx_SelectedIndexChanged);
            // 
            // inventoryBindingSource
            // 
            this.inventoryBindingSource.DataMember = "Inventory";
            this.inventoryBindingSource.DataSource = this.palmettoRestaurantDataSet;
            // 
            // MenuItemPricetxb
            // 
            this.MenuItemPricetxb.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.MenuItemPricetxb.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            this.MenuItemPricetxb.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.MenuItemPricetxb.ForeColor = System.Drawing.Color.White;
            this.MenuItemPricetxb.Location = new System.Drawing.Point(613, 375);
            this.MenuItemPricetxb.Name = "MenuItemPricetxb";
            this.MenuItemPricetxb.Size = new System.Drawing.Size(174, 26);
            this.MenuItemPricetxb.TabIndex = 52;
            this.MenuItemPricetxb.TextChanged += new System.EventHandler(this.MenuItemPricetxb_TextChanged);
            // 
            // MenuItemDescriptiontxb
            // 
            this.MenuItemDescriptiontxb.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.MenuItemDescriptiontxb.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            this.MenuItemDescriptiontxb.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.MenuItemDescriptiontxb.ForeColor = System.Drawing.Color.White;
            this.MenuItemDescriptiontxb.Location = new System.Drawing.Point(613, 345);
            this.MenuItemDescriptiontxb.Name = "MenuItemDescriptiontxb";
            this.MenuItemDescriptiontxb.Size = new System.Drawing.Size(174, 26);
            this.MenuItemDescriptiontxb.TabIndex = 50;
            this.MenuItemDescriptiontxb.TextChanged += new System.EventHandler(this.MenuItemDescriptiontxb_TextChanged);
            // 
            // MenuItemNametxb
            // 
            this.MenuItemNametxb.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.MenuItemNametxb.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            this.MenuItemNametxb.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.MenuItemNametxb.ForeColor = System.Drawing.Color.White;
            this.MenuItemNametxb.Location = new System.Drawing.Point(613, 315);
            this.MenuItemNametxb.Name = "MenuItemNametxb";
            this.MenuItemNametxb.Size = new System.Drawing.Size(174, 26);
            this.MenuItemNametxb.TabIndex = 49;
            this.MenuItemNametxb.TextChanged += new System.EventHandler(this.MenuItemNametxb_TextChanged);
            // 
            // MenuItemActiveNorbn
            // 
            this.MenuItemActiveNorbn.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.MenuItemActiveNorbn.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.MenuItemActiveNorbn.ForeColor = System.Drawing.Color.White;
            this.MenuItemActiveNorbn.Location = new System.Drawing.Point(711, 437);
            this.MenuItemActiveNorbn.Name = "MenuItemActiveNorbn";
            this.MenuItemActiveNorbn.Size = new System.Drawing.Size(76, 24);
            this.MenuItemActiveNorbn.TabIndex = 48;
            this.MenuItemActiveNorbn.TabStop = true;
            this.MenuItemActiveNorbn.Text = "No";
            this.MenuItemActiveNorbn.UseVisualStyleBackColor = true;
            this.MenuItemActiveNorbn.CheckedChanged += new System.EventHandler(this.MenuItemActiveNorbn_CheckedChanged);
            // 
            // MenuItemActiveYesrbn
            // 
            this.MenuItemActiveYesrbn.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.MenuItemActiveYesrbn.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.MenuItemActiveYesrbn.ForeColor = System.Drawing.Color.White;
            this.MenuItemActiveYesrbn.Location = new System.Drawing.Point(613, 437);
            this.MenuItemActiveYesrbn.Name = "MenuItemActiveYesrbn";
            this.MenuItemActiveYesrbn.Size = new System.Drawing.Size(64, 24);
            this.MenuItemActiveYesrbn.TabIndex = 47;
            this.MenuItemActiveYesrbn.TabStop = true;
            this.MenuItemActiveYesrbn.Text = "Yes";
            this.MenuItemActiveYesrbn.UseVisualStyleBackColor = true;
            this.MenuItemActiveYesrbn.CheckedChanged += new System.EventHandler(this.MenuItemActiveYesrbn_CheckedChanged);
            // 
            // MenuItemIDcbx
            // 
            this.MenuItemIDcbx.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.MenuItemIDcbx.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            this.MenuItemIDcbx.DataSource = this.menuItemBindingSource;
            this.MenuItemIDcbx.DisplayMember = "MenuItemID";
            this.MenuItemIDcbx.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.MenuItemIDcbx.ForeColor = System.Drawing.Color.White;
            this.MenuItemIDcbx.FormattingEnabled = true;
            this.MenuItemIDcbx.Location = new System.Drawing.Point(613, 285);
            this.MenuItemIDcbx.Name = "MenuItemIDcbx";
            this.MenuItemIDcbx.Size = new System.Drawing.Size(174, 26);
            this.MenuItemIDcbx.TabIndex = 44;
            this.MenuItemIDcbx.ValueMember = "MenuItemID";
            this.MenuItemIDcbx.SelectedIndexChanged += new System.EventHandler(this.MenuItemIDcbx_SelectedIndexChanged);
            // 
            // Titlelbl
            // 
            this.Titlelbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Arial", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.ForeColor = System.Drawing.Color.White;
            this.Titlelbl.Location = new System.Drawing.Point(519, 238);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(163, 29);
            this.Titlelbl.TabIndex = 39;
            this.Titlelbl.Text = "Menu Search";
            // 
            // PalmettoGolfCourseimg
            // 
            this.PalmettoGolfCourseimg.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.PalmettoGolfCourseimg.BackColor = System.Drawing.Color.Transparent;
            this.PalmettoGolfCourseimg.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("PalmettoGolfCourseimg.BackgroundImage")));
            this.PalmettoGolfCourseimg.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.PalmettoGolfCourseimg.Location = new System.Drawing.Point(521, 3);
            this.PalmettoGolfCourseimg.Name = "PalmettoGolfCourseimg";
            this.PalmettoGolfCourseimg.Size = new System.Drawing.Size(158, 157);
            this.PalmettoGolfCourseimg.TabIndex = 38;
            this.PalmettoGolfCourseimg.TabStop = false;
            // 
            // Navpnl
            // 
            this.Navpnl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.Navpnl.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.Navpnl.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            this.Navpnl.Controls.Add(this.menuStrip1);
            this.Navpnl.ForeColor = System.Drawing.Color.White;
            this.Navpnl.Location = new System.Drawing.Point(-838, 166);
            this.Navpnl.Name = "Navpnl";
            this.Navpnl.Size = new System.Drawing.Size(2871, 65);
            this.Navpnl.TabIndex = 37;
            // 
            // menuStrip1
            // 
            this.menuStrip1.Dock = System.Windows.Forms.DockStyle.None;
            this.menuStrip1.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.Userstsm,
            this.Menutsm,
            this.Orderstsm,
            this.Inventorytsm,
            this.Tabletsm});
            this.menuStrip1.Location = new System.Drawing.Point(1272, 17);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(340, 26);
            this.menuStrip1.TabIndex = 3;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // Userstsm
            // 
            this.Userstsm.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.UserInserttsm,
            this.UserSearchtsm,
            this.UserUpdatetsm});
            this.Userstsm.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Userstsm.Name = "Userstsm";
            this.Userstsm.Size = new System.Drawing.Size(61, 22);
            this.Userstsm.Text = "Users";
            // 
            // UserInserttsm
            // 
            this.UserInserttsm.BackColor = System.Drawing.Color.Transparent;
            this.UserInserttsm.ImageTransparentColor = System.Drawing.Color.Transparent;
            this.UserInserttsm.Name = "UserInserttsm";
            this.UserInserttsm.Size = new System.Drawing.Size(164, 22);
            this.UserInserttsm.Text = "User Insert";
            // 
            // UserSearchtsm
            // 
            this.UserSearchtsm.Name = "UserSearchtsm";
            this.UserSearchtsm.Size = new System.Drawing.Size(164, 22);
            this.UserSearchtsm.Text = "User Search";
            // 
            // UserUpdatetsm
            // 
            this.UserUpdatetsm.Name = "UserUpdatetsm";
            this.UserUpdatetsm.Size = new System.Drawing.Size(164, 22);
            this.UserUpdatetsm.Text = "User Update";
            // 
            // Menutsm
            // 
            this.Menutsm.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.MenuViewtsm,
            this.MenuInserttsm,
            this.MenuSearchtsm,
            this.MenuUpdatetsm});
            this.Menutsm.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Menutsm.Name = "Menutsm";
            this.Menutsm.Size = new System.Drawing.Size(58, 22);
            this.Menutsm.Text = "Menu";
            // 
            // MenuViewtsm
            // 
            this.MenuViewtsm.Name = "MenuViewtsm";
            this.MenuViewtsm.Size = new System.Drawing.Size(169, 22);
            this.MenuViewtsm.Text = "Menu View";
            // 
            // MenuInserttsm
            // 
            this.MenuInserttsm.Name = "MenuInserttsm";
            this.MenuInserttsm.Size = new System.Drawing.Size(169, 22);
            this.MenuInserttsm.Text = "Menu Insert";
            // 
            // MenuSearchtsm
            // 
            this.MenuSearchtsm.Name = "MenuSearchtsm";
            this.MenuSearchtsm.Size = new System.Drawing.Size(169, 22);
            this.MenuSearchtsm.Text = "Menu Search";
            // 
            // MenuUpdatetsm
            // 
            this.MenuUpdatetsm.Name = "MenuUpdatetsm";
            this.MenuUpdatetsm.Size = new System.Drawing.Size(169, 22);
            this.MenuUpdatetsm.Text = "Menu Update";
            // 
            // Orderstsm
            // 
            this.Orderstsm.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.OrdersInserttsm,
            this.OrdersSearchtsm,
            this.OrdersUpdatetsm,
            this.OrderReportstsm});
            this.Orderstsm.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Orderstsm.Name = "Orderstsm";
            this.Orderstsm.Size = new System.Drawing.Size(68, 22);
            this.Orderstsm.Text = "Orders";
            // 
            // OrdersInserttsm
            // 
            this.OrdersInserttsm.Name = "OrdersInserttsm";
            this.OrdersInserttsm.Size = new System.Drawing.Size(179, 22);
            this.OrdersInserttsm.Text = "Orders Insert";
            // 
            // OrdersSearchtsm
            // 
            this.OrdersSearchtsm.Name = "OrdersSearchtsm";
            this.OrdersSearchtsm.Size = new System.Drawing.Size(179, 22);
            this.OrdersSearchtsm.Text = "Orders Search";
            // 
            // OrdersUpdatetsm
            // 
            this.OrdersUpdatetsm.Name = "OrdersUpdatetsm";
            this.OrdersUpdatetsm.Size = new System.Drawing.Size(179, 22);
            this.OrdersUpdatetsm.Text = "Orders Update";
            // 
            // OrderReportstsm
            // 
            this.OrderReportstsm.Name = "OrderReportstsm";
            this.OrderReportstsm.Size = new System.Drawing.Size(179, 22);
            this.OrderReportstsm.Text = "Order Reports";
            // 
            // Inventorytsm
            // 
            this.Inventorytsm.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.InventoryInserttsm,
            this.InventorySearchtsm,
            this.InventoryUpdatetsm,
            this.InventoryReportstsm});
            this.Inventorytsm.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Inventorytsm.Name = "Inventorytsm";
            this.Inventorytsm.Size = new System.Drawing.Size(80, 22);
            this.Inventorytsm.Text = "Inventory";
            // 
            // InventoryInserttsm
            // 
            this.InventoryInserttsm.Name = "InventoryInserttsm";
            this.InventoryInserttsm.Size = new System.Drawing.Size(195, 22);
            this.InventoryInserttsm.Text = "Inventory Insert";
            // 
            // InventorySearchtsm
            // 
            this.InventorySearchtsm.Name = "InventorySearchtsm";
            this.InventorySearchtsm.Size = new System.Drawing.Size(195, 22);
            this.InventorySearchtsm.Text = "Inventory Search";
            // 
            // InventoryUpdatetsm
            // 
            this.InventoryUpdatetsm.Name = "InventoryUpdatetsm";
            this.InventoryUpdatetsm.Size = new System.Drawing.Size(195, 22);
            this.InventoryUpdatetsm.Text = "Inventory Update";
            // 
            // InventoryReportstsm
            // 
            this.InventoryReportstsm.Name = "InventoryReportstsm";
            this.InventoryReportstsm.Size = new System.Drawing.Size(195, 22);
            this.InventoryReportstsm.Text = "Inventory Reports";
            // 
            // Tabletsm
            // 
            this.Tabletsm.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.TableInserttsm,
            this.TableSearchtsm,
            this.TableUpdatetsm});
            this.Tabletsm.Name = "Tabletsm";
            this.Tabletsm.Size = new System.Drawing.Size(65, 22);
            this.Tabletsm.Text = "Tables";
            // 
            // TableInserttsm
            // 
            this.TableInserttsm.Name = "TableInserttsm";
            this.TableInserttsm.Size = new System.Drawing.Size(168, 22);
            this.TableInserttsm.Text = "Table Insert";
            // 
            // TableSearchtsm
            // 
            this.TableSearchtsm.Name = "TableSearchtsm";
            this.TableSearchtsm.Size = new System.Drawing.Size(168, 22);
            this.TableSearchtsm.Text = "Table Search";
            // 
            // TableUpdatetsm
            // 
            this.TableUpdatetsm.Name = "TableUpdatetsm";
            this.TableUpdatetsm.Size = new System.Drawing.Size(168, 22);
            this.TableUpdatetsm.Text = "Table Update";
            // 
            // MenuItemdgv
            // 
            this.MenuItemdgv.AllowUserToAddRows = false;
            this.MenuItemdgv.AllowUserToDeleteRows = false;
            dataGridViewCellStyle1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            dataGridViewCellStyle1.ForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle1.SelectionBackColor = System.Drawing.Color.Transparent;
            this.MenuItemdgv.AlternatingRowsDefaultCellStyle = dataGridViewCellStyle1;
            this.MenuItemdgv.AutoGenerateColumns = false;
            this.MenuItemdgv.AutoSizeColumnsMode = System.Windows.Forms.DataGridViewAutoSizeColumnsMode.AllCells;
            this.MenuItemdgv.AutoSizeRowsMode = System.Windows.Forms.DataGridViewAutoSizeRowsMode.AllCells;
            this.MenuItemdgv.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            this.MenuItemdgv.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            dataGridViewCellStyle2.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle2.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            dataGridViewCellStyle2.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle2.ForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle2.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle2.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle2.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.MenuItemdgv.ColumnHeadersDefaultCellStyle = dataGridViewCellStyle2;
            this.MenuItemdgv.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.MenuItemdgv.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.menuItemIDDataGridViewTextBoxColumn,
            this.menuItemNameDataGridViewTextBoxColumn,
            this.menuItemDescriptionDataGridViewTextBoxColumn,
            this.menuItemPriceDataGridViewTextBoxColumn,
            this.menuItemActiveDataGridViewCheckBoxColumn});
            this.MenuItemdgv.Cursor = System.Windows.Forms.Cursors.Default;
            this.MenuItemdgv.DataSource = this.menuItemBindingSource;
            dataGridViewCellStyle3.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle3.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            dataGridViewCellStyle3.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle3.ForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle3.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle3.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle3.WrapMode = System.Windows.Forms.DataGridViewTriState.False;
            this.MenuItemdgv.DefaultCellStyle = dataGridViewCellStyle3;
            this.MenuItemdgv.Dock = System.Windows.Forms.DockStyle.Fill;
            this.MenuItemdgv.EnableHeadersVisualStyles = false;
            this.MenuItemdgv.GridColor = System.Drawing.Color.White;
            this.MenuItemdgv.Location = new System.Drawing.Point(0, 500);
            this.MenuItemdgv.Name = "MenuItemdgv";
            this.MenuItemdgv.ReadOnly = true;
            this.MenuItemdgv.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            dataGridViewCellStyle4.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle4.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            dataGridViewCellStyle4.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle4.ForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle4.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle4.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle4.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.MenuItemdgv.RowHeadersDefaultCellStyle = dataGridViewCellStyle4;
            this.MenuItemdgv.RowHeadersVisible = false;
            dataGridViewCellStyle5.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            dataGridViewCellStyle5.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle5.ForeColor = System.Drawing.Color.White;
            this.MenuItemdgv.RowsDefaultCellStyle = dataGridViewCellStyle5;
            this.MenuItemdgv.Size = new System.Drawing.Size(1210, 222);
            this.MenuItemdgv.TabIndex = 1;
            // 
            // menuItemIDDataGridViewTextBoxColumn
            // 
            this.menuItemIDDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.menuItemIDDataGridViewTextBoxColumn.DataPropertyName = "MenuItemID";
            this.menuItemIDDataGridViewTextBoxColumn.FillWeight = 50F;
            this.menuItemIDDataGridViewTextBoxColumn.HeaderText = "ID";
            this.menuItemIDDataGridViewTextBoxColumn.Name = "menuItemIDDataGridViewTextBoxColumn";
            this.menuItemIDDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // menuItemNameDataGridViewTextBoxColumn
            // 
            this.menuItemNameDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.menuItemNameDataGridViewTextBoxColumn.DataPropertyName = "MenuItemName";
            this.menuItemNameDataGridViewTextBoxColumn.HeaderText = "Name";
            this.menuItemNameDataGridViewTextBoxColumn.Name = "menuItemNameDataGridViewTextBoxColumn";
            this.menuItemNameDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // menuItemDescriptionDataGridViewTextBoxColumn
            // 
            this.menuItemDescriptionDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.menuItemDescriptionDataGridViewTextBoxColumn.DataPropertyName = "MenuItemDescription";
            this.menuItemDescriptionDataGridViewTextBoxColumn.FillWeight = 150F;
            this.menuItemDescriptionDataGridViewTextBoxColumn.HeaderText = "Description";
            this.menuItemDescriptionDataGridViewTextBoxColumn.Name = "menuItemDescriptionDataGridViewTextBoxColumn";
            this.menuItemDescriptionDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // menuItemPriceDataGridViewTextBoxColumn
            // 
            this.menuItemPriceDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.menuItemPriceDataGridViewTextBoxColumn.DataPropertyName = "MenuItemPrice";
            this.menuItemPriceDataGridViewTextBoxColumn.FillWeight = 50F;
            this.menuItemPriceDataGridViewTextBoxColumn.HeaderText = "Price";
            this.menuItemPriceDataGridViewTextBoxColumn.Name = "menuItemPriceDataGridViewTextBoxColumn";
            this.menuItemPriceDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // menuItemActiveDataGridViewCheckBoxColumn
            // 
            this.menuItemActiveDataGridViewCheckBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.menuItemActiveDataGridViewCheckBoxColumn.DataPropertyName = "MenuItemActive";
            this.menuItemActiveDataGridViewCheckBoxColumn.FillWeight = 50F;
            this.menuItemActiveDataGridViewCheckBoxColumn.HeaderText = "Active";
            this.menuItemActiveDataGridViewCheckBoxColumn.Name = "menuItemActiveDataGridViewCheckBoxColumn";
            this.menuItemActiveDataGridViewCheckBoxColumn.ReadOnly = true;
            // 
            // inventoryTableAdapter
            // 
            this.inventoryTableAdapter.ClearBeforeFill = true;
            // 
            // MenuSearchForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1210, 747);
            this.Controls.Add(this.MenuItempnl);
            this.Controls.Add(this.menuItemBindingNavigator);
            this.Name = "MenuSearchForm";
            this.Text = "MenuSearchForm";
            this.Load += new System.EventHandler(this.MenuSearchForm_Load);
            ((System.ComponentModel.ISupportInitialize)(this.palmettoRestaurantDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.menuItemBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.menuItemBindingNavigator)).EndInit();
            this.menuItemBindingNavigator.ResumeLayout(false);
            this.menuItemBindingNavigator.PerformLayout();
            this.MenuItempnl.ResumeLayout(false);
            this.MenuItempnl.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.inventoryBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.PalmettoGolfCourseimg)).EndInit();
            this.Navpnl.ResumeLayout(false);
            this.Navpnl.PerformLayout();
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.MenuItemdgv)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private PalmettoRestaurantDataSet palmettoRestaurantDataSet;
        private System.Windows.Forms.BindingSource menuItemBindingSource;
        private PalmettoRestaurantDataSetTableAdapters.MenuItemTableAdapter menuItemTableAdapter;
        private PalmettoRestaurantDataSetTableAdapters.TableAdapterManager tableAdapterManager;
        private System.Windows.Forms.BindingNavigator menuItemBindingNavigator;
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
        private System.Windows.Forms.ToolStripButton menuItemBindingNavigatorSaveItem;
        private System.Windows.Forms.Panel MenuItempnl;
        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.PictureBox PalmettoGolfCourseimg;
        private System.Windows.Forms.Panel Navpnl;
        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem Userstsm;
        private System.Windows.Forms.ToolStripMenuItem UserInserttsm;
        private System.Windows.Forms.ToolStripMenuItem UserSearchtsm;
        private System.Windows.Forms.ToolStripMenuItem UserUpdatetsm;
        private System.Windows.Forms.ToolStripMenuItem Menutsm;
        private System.Windows.Forms.ToolStripMenuItem MenuViewtsm;
        private System.Windows.Forms.ToolStripMenuItem MenuInserttsm;
        private System.Windows.Forms.ToolStripMenuItem MenuSearchtsm;
        private System.Windows.Forms.ToolStripMenuItem MenuUpdatetsm;
        private System.Windows.Forms.ToolStripMenuItem Orderstsm;
        private System.Windows.Forms.ToolStripMenuItem OrdersInserttsm;
        private System.Windows.Forms.ToolStripMenuItem OrdersSearchtsm;
        private System.Windows.Forms.ToolStripMenuItem OrdersUpdatetsm;
        private System.Windows.Forms.ToolStripMenuItem OrderReportstsm;
        private System.Windows.Forms.ToolStripMenuItem Inventorytsm;
        private System.Windows.Forms.ToolStripMenuItem InventoryInserttsm;
        private System.Windows.Forms.ToolStripMenuItem InventorySearchtsm;
        private System.Windows.Forms.ToolStripMenuItem InventoryUpdatetsm;
        private System.Windows.Forms.ToolStripMenuItem InventoryReportstsm;
        private System.Windows.Forms.ToolStripMenuItem Tabletsm;
        private System.Windows.Forms.ToolStripMenuItem TableInserttsm;
        private System.Windows.Forms.ToolStripMenuItem TableSearchtsm;
        private System.Windows.Forms.ToolStripMenuItem TableUpdatetsm;
        private System.Windows.Forms.DataGridView MenuItemdgv;
        private System.Windows.Forms.DataGridViewTextBoxColumn menuItemIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn menuItemNameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn menuItemDescriptionDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn menuItemPriceDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn inventoryIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewCheckBoxColumn menuItemActiveDataGridViewCheckBoxColumn;
        private System.Windows.Forms.BindingSource inventoryBindingSource;
        private PalmettoRestaurantDataSetTableAdapters.InventoryTableAdapter inventoryTableAdapter;
        private System.Windows.Forms.TextBox MenuItemPricetxb;
        private System.Windows.Forms.TextBox MenuItemDescriptiontxb;
        private System.Windows.Forms.TextBox MenuItemNametxb;
        private System.Windows.Forms.RadioButton MenuItemActiveNorbn;
        private System.Windows.Forms.RadioButton MenuItemActiveYesrbn;
        private System.Windows.Forms.ComboBox MenuItemIDcbx;
        private System.Windows.Forms.ComboBox InventoryNamecbx;
    }
}
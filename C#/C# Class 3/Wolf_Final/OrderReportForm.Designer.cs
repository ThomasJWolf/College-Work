namespace Wolf_Milestone4
{
    partial class OrderReportForm
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(OrderReportForm));
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle1 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle2 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle3 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle4 = new System.Windows.Forms.DataGridViewCellStyle();
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle5 = new System.Windows.Forms.DataGridViewCellStyle();
            this.palmettoRestaurantDataSet = new Wolf_Milestone4.PalmettoRestaurantDataSet();
            this.orderBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.orderTableAdapter = new Wolf_Milestone4.PalmettoRestaurantDataSetTableAdapters.OrderTableAdapter();
            this.tableAdapterManager = new Wolf_Milestone4.PalmettoRestaurantDataSetTableAdapters.TableAdapterManager();
            this.orderDetailTableAdapter = new Wolf_Milestone4.PalmettoRestaurantDataSetTableAdapters.OrderDetailTableAdapter();
            this.orderBindingNavigator = new System.Windows.Forms.BindingNavigator(this.components);
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
            this.orderBindingNavigatorSaveItem = new System.Windows.Forms.ToolStripButton();
            this.orderDetailBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.Orderpnl = new System.Windows.Forms.Panel();
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
            this.Orderdgv = new System.Windows.Forms.DataGridView();
            this.orderIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.userFullNameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.orderDateDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.orderDetailQuantityDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.menuItemNameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.menuItemPriceDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.tableNameDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.isActiveDataGridViewCheckBoxColumn = new System.Windows.Forms.DataGridViewCheckBoxColumn();
            this.orderDetailLinkingBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.dataTable1BindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.palmettoRestaurantDataSetBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.fKOrderOrderDetailBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.orderBindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.orderDetailLinkingTableAdapter = new Wolf_Milestone4.PalmettoRestaurantDataSetTableAdapters.OrderDetailLinkingTableAdapter();
            this.Activebtn = new System.Windows.Forms.Button();
            this.Inactivebtn = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.palmettoRestaurantDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.orderBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.orderBindingNavigator)).BeginInit();
            this.orderBindingNavigator.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.orderDetailBindingSource)).BeginInit();
            this.Orderpnl.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.PalmettoGolfCourseimg)).BeginInit();
            this.Navpnl.SuspendLayout();
            this.menuStrip1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.Orderdgv)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.orderDetailLinkingBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataTable1BindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.palmettoRestaurantDataSetBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.fKOrderOrderDetailBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.orderBindingSource1)).BeginInit();
            this.SuspendLayout();
            // 
            // palmettoRestaurantDataSet
            // 
            this.palmettoRestaurantDataSet.DataSetName = "PalmettoRestaurantDataSet";
            this.palmettoRestaurantDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // orderBindingSource
            // 
            this.orderBindingSource.DataMember = "Order";
            this.orderBindingSource.DataSource = this.palmettoRestaurantDataSet;
            // 
            // orderTableAdapter
            // 
            this.orderTableAdapter.ClearBeforeFill = true;
            // 
            // tableAdapterManager
            // 
            this.tableAdapterManager.BackupDataSetBeforeUpdate = false;
            this.tableAdapterManager.InventoryTableAdapter = null;
            this.tableAdapterManager.MenuItemTableAdapter = null;
            this.tableAdapterManager.OrderDetailTableAdapter = this.orderDetailTableAdapter;
            this.tableAdapterManager.OrderTableAdapter = this.orderTableAdapter;
            this.tableAdapterManager.TableTableAdapter = null;
            this.tableAdapterManager.UpdateOrder = Wolf_Milestone4.PalmettoRestaurantDataSetTableAdapters.TableAdapterManager.UpdateOrderOption.InsertUpdateDelete;
            this.tableAdapterManager.UserTableAdapter = null;
            // 
            // orderDetailTableAdapter
            // 
            this.orderDetailTableAdapter.ClearBeforeFill = true;
            // 
            // orderBindingNavigator
            // 
            this.orderBindingNavigator.AddNewItem = this.bindingNavigatorAddNewItem;
            this.orderBindingNavigator.BindingSource = this.orderBindingSource;
            this.orderBindingNavigator.CountItem = this.bindingNavigatorCountItem;
            this.orderBindingNavigator.DeleteItem = this.bindingNavigatorDeleteItem;
            this.orderBindingNavigator.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
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
            this.orderBindingNavigatorSaveItem});
            this.orderBindingNavigator.Location = new System.Drawing.Point(0, 0);
            this.orderBindingNavigator.MoveFirstItem = this.bindingNavigatorMoveFirstItem;
            this.orderBindingNavigator.MoveLastItem = this.bindingNavigatorMoveLastItem;
            this.orderBindingNavigator.MoveNextItem = this.bindingNavigatorMoveNextItem;
            this.orderBindingNavigator.MovePreviousItem = this.bindingNavigatorMovePreviousItem;
            this.orderBindingNavigator.Name = "orderBindingNavigator";
            this.orderBindingNavigator.PositionItem = this.bindingNavigatorPositionItem;
            this.orderBindingNavigator.Size = new System.Drawing.Size(1435, 25);
            this.orderBindingNavigator.TabIndex = 0;
            this.orderBindingNavigator.Text = "bindingNavigator1";
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
            // orderBindingNavigatorSaveItem
            // 
            this.orderBindingNavigatorSaveItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.orderBindingNavigatorSaveItem.Image = ((System.Drawing.Image)(resources.GetObject("orderBindingNavigatorSaveItem.Image")));
            this.orderBindingNavigatorSaveItem.Name = "orderBindingNavigatorSaveItem";
            this.orderBindingNavigatorSaveItem.Size = new System.Drawing.Size(23, 22);
            this.orderBindingNavigatorSaveItem.Text = "Save Data";
            this.orderBindingNavigatorSaveItem.Click += new System.EventHandler(this.orderBindingNavigatorSaveItem_Click);
            // 
            // orderDetailBindingSource
            // 
            this.orderDetailBindingSource.DataMember = "OrderDetail";
            this.orderDetailBindingSource.DataSource = this.palmettoRestaurantDataSet;
            // 
            // Orderpnl
            // 
            this.Orderpnl.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            this.Orderpnl.Controls.Add(this.Inactivebtn);
            this.Orderpnl.Controls.Add(this.Activebtn);
            this.Orderpnl.Controls.Add(this.Titlelbl);
            this.Orderpnl.Controls.Add(this.PalmettoGolfCourseimg);
            this.Orderpnl.Controls.Add(this.Navpnl);
            this.Orderpnl.Controls.Add(this.Orderdgv);
            this.Orderpnl.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Orderpnl.Location = new System.Drawing.Point(0, 25);
            this.Orderpnl.Name = "Orderpnl";
            this.Orderpnl.Padding = new System.Windows.Forms.Padding(0, 350, 0, 0);
            this.Orderpnl.Size = new System.Drawing.Size(1435, 454);
            this.Orderpnl.TabIndex = 6;
            // 
            // Titlelbl
            // 
            this.Titlelbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Arial", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.ForeColor = System.Drawing.Color.White;
            this.Titlelbl.Location = new System.Drawing.Point(637, 243);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(161, 29);
            this.Titlelbl.TabIndex = 39;
            this.Titlelbl.Text = "Order Report";
            // 
            // PalmettoGolfCourseimg
            // 
            this.PalmettoGolfCourseimg.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.PalmettoGolfCourseimg.BackColor = System.Drawing.Color.Transparent;
            this.PalmettoGolfCourseimg.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("PalmettoGolfCourseimg.BackgroundImage")));
            this.PalmettoGolfCourseimg.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.PalmettoGolfCourseimg.Location = new System.Drawing.Point(631, 0);
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
            this.Navpnl.Location = new System.Drawing.Point(-728, 163);
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
            // Orderdgv
            // 
            this.Orderdgv.AllowUserToAddRows = false;
            this.Orderdgv.AllowUserToDeleteRows = false;
            dataGridViewCellStyle1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            dataGridViewCellStyle1.ForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle1.SelectionBackColor = System.Drawing.Color.Transparent;
            this.Orderdgv.AlternatingRowsDefaultCellStyle = dataGridViewCellStyle1;
            this.Orderdgv.AutoGenerateColumns = false;
            this.Orderdgv.AutoSizeColumnsMode = System.Windows.Forms.DataGridViewAutoSizeColumnsMode.AllCells;
            this.Orderdgv.AutoSizeRowsMode = System.Windows.Forms.DataGridViewAutoSizeRowsMode.AllCells;
            this.Orderdgv.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            this.Orderdgv.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            dataGridViewCellStyle2.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle2.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            dataGridViewCellStyle2.Font = new System.Drawing.Font("Arial", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle2.ForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle2.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle2.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle2.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.Orderdgv.ColumnHeadersDefaultCellStyle = dataGridViewCellStyle2;
            this.Orderdgv.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.Orderdgv.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.orderIDDataGridViewTextBoxColumn,
            this.userFullNameDataGridViewTextBoxColumn,
            this.orderDateDataGridViewTextBoxColumn,
            this.orderDetailQuantityDataGridViewTextBoxColumn,
            this.menuItemNameDataGridViewTextBoxColumn,
            this.menuItemPriceDataGridViewTextBoxColumn,
            this.tableNameDataGridViewTextBoxColumn,
            this.isActiveDataGridViewCheckBoxColumn});
            this.Orderdgv.Cursor = System.Windows.Forms.Cursors.Default;
            this.Orderdgv.DataSource = this.orderDetailLinkingBindingSource;
            dataGridViewCellStyle3.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle3.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            dataGridViewCellStyle3.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle3.ForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle3.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle3.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle3.WrapMode = System.Windows.Forms.DataGridViewTriState.False;
            this.Orderdgv.DefaultCellStyle = dataGridViewCellStyle3;
            this.Orderdgv.Dock = System.Windows.Forms.DockStyle.Fill;
            this.Orderdgv.EnableHeadersVisualStyles = false;
            this.Orderdgv.GridColor = System.Drawing.Color.White;
            this.Orderdgv.Location = new System.Drawing.Point(0, 350);
            this.Orderdgv.Name = "Orderdgv";
            this.Orderdgv.ReadOnly = true;
            this.Orderdgv.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            dataGridViewCellStyle4.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle4.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            dataGridViewCellStyle4.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle4.ForeColor = System.Drawing.Color.White;
            dataGridViewCellStyle4.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle4.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle4.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.Orderdgv.RowHeadersDefaultCellStyle = dataGridViewCellStyle4;
            this.Orderdgv.RowHeadersVisible = false;
            dataGridViewCellStyle5.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            dataGridViewCellStyle5.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dataGridViewCellStyle5.ForeColor = System.Drawing.Color.White;
            this.Orderdgv.RowsDefaultCellStyle = dataGridViewCellStyle5;
            this.Orderdgv.Size = new System.Drawing.Size(1435, 104);
            this.Orderdgv.TabIndex = 1;
            // 
            // orderIDDataGridViewTextBoxColumn
            // 
            this.orderIDDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.orderIDDataGridViewTextBoxColumn.DataPropertyName = "OrderID";
            this.orderIDDataGridViewTextBoxColumn.FillWeight = 50F;
            this.orderIDDataGridViewTextBoxColumn.HeaderText = "ID";
            this.orderIDDataGridViewTextBoxColumn.Name = "orderIDDataGridViewTextBoxColumn";
            this.orderIDDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // userFullNameDataGridViewTextBoxColumn
            // 
            this.userFullNameDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.userFullNameDataGridViewTextBoxColumn.DataPropertyName = "UserFullName";
            this.userFullNameDataGridViewTextBoxColumn.HeaderText = "User Name";
            this.userFullNameDataGridViewTextBoxColumn.Name = "userFullNameDataGridViewTextBoxColumn";
            this.userFullNameDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // orderDateDataGridViewTextBoxColumn
            // 
            this.orderDateDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.orderDateDataGridViewTextBoxColumn.DataPropertyName = "OrderDate";
            this.orderDateDataGridViewTextBoxColumn.HeaderText = "Date";
            this.orderDateDataGridViewTextBoxColumn.Name = "orderDateDataGridViewTextBoxColumn";
            this.orderDateDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // orderDetailQuantityDataGridViewTextBoxColumn
            // 
            this.orderDetailQuantityDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.orderDetailQuantityDataGridViewTextBoxColumn.DataPropertyName = "OrderDetailQuantity";
            this.orderDetailQuantityDataGridViewTextBoxColumn.FillWeight = 50F;
            this.orderDetailQuantityDataGridViewTextBoxColumn.HeaderText = "Quantity";
            this.orderDetailQuantityDataGridViewTextBoxColumn.Name = "orderDetailQuantityDataGridViewTextBoxColumn";
            this.orderDetailQuantityDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // menuItemNameDataGridViewTextBoxColumn
            // 
            this.menuItemNameDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.menuItemNameDataGridViewTextBoxColumn.DataPropertyName = "MenuItemName";
            this.menuItemNameDataGridViewTextBoxColumn.HeaderText = "Menu Item";
            this.menuItemNameDataGridViewTextBoxColumn.Name = "menuItemNameDataGridViewTextBoxColumn";
            this.menuItemNameDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // menuItemPriceDataGridViewTextBoxColumn
            // 
            this.menuItemPriceDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.menuItemPriceDataGridViewTextBoxColumn.DataPropertyName = "MenuItemPrice";
            this.menuItemPriceDataGridViewTextBoxColumn.HeaderText = "Item Price";
            this.menuItemPriceDataGridViewTextBoxColumn.Name = "menuItemPriceDataGridViewTextBoxColumn";
            this.menuItemPriceDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // tableNameDataGridViewTextBoxColumn
            // 
            this.tableNameDataGridViewTextBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.tableNameDataGridViewTextBoxColumn.DataPropertyName = "TableName";
            this.tableNameDataGridViewTextBoxColumn.FillWeight = 50F;
            this.tableNameDataGridViewTextBoxColumn.HeaderText = "Table";
            this.tableNameDataGridViewTextBoxColumn.Name = "tableNameDataGridViewTextBoxColumn";
            this.tableNameDataGridViewTextBoxColumn.ReadOnly = true;
            // 
            // isActiveDataGridViewCheckBoxColumn
            // 
            this.isActiveDataGridViewCheckBoxColumn.AutoSizeMode = System.Windows.Forms.DataGridViewAutoSizeColumnMode.Fill;
            this.isActiveDataGridViewCheckBoxColumn.DataPropertyName = "IsActive";
            this.isActiveDataGridViewCheckBoxColumn.FillWeight = 50F;
            this.isActiveDataGridViewCheckBoxColumn.HeaderText = "Active";
            this.isActiveDataGridViewCheckBoxColumn.Name = "isActiveDataGridViewCheckBoxColumn";
            this.isActiveDataGridViewCheckBoxColumn.ReadOnly = true;
            // 
            // orderDetailLinkingBindingSource
            // 
            this.orderDetailLinkingBindingSource.DataMember = "OrderDetailLinking";
            this.orderDetailLinkingBindingSource.DataSource = this.palmettoRestaurantDataSet;
            // 
            // dataTable1BindingSource
            // 
            this.dataTable1BindingSource.DataMember = "OrderDetailLinking";
            this.dataTable1BindingSource.DataSource = this.palmettoRestaurantDataSetBindingSource;
            // 
            // palmettoRestaurantDataSetBindingSource
            // 
            this.palmettoRestaurantDataSetBindingSource.DataSource = this.palmettoRestaurantDataSet;
            this.palmettoRestaurantDataSetBindingSource.Position = 0;
            // 
            // fKOrderOrderDetailBindingSource
            // 
            this.fKOrderOrderDetailBindingSource.DataMember = "FK_Order_OrderDetail";
            this.fKOrderOrderDetailBindingSource.DataSource = this.orderBindingSource;
            // 
            // orderBindingSource1
            // 
            this.orderBindingSource1.DataMember = "Order";
            this.orderBindingSource1.DataSource = this.palmettoRestaurantDataSet;
            // 
            // orderDetailLinkingTableAdapter
            // 
            this.orderDetailLinkingTableAdapter.ClearBeforeFill = true;
            // 
            // Activebtn
            // 
            this.Activebtn.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.Activebtn.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            this.Activebtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Activebtn.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Activebtn.ForeColor = System.Drawing.Color.White;
            this.Activebtn.Location = new System.Drawing.Point(718, 288);
            this.Activebtn.Name = "Activebtn";
            this.Activebtn.Size = new System.Drawing.Size(149, 37);
            this.Activebtn.TabIndex = 71;
            this.Activebtn.Text = "Active";
            this.Activebtn.UseVisualStyleBackColor = false;
            this.Activebtn.Click += new System.EventHandler(this.Activebtn_Click);
            // 
            // Inactivebtn
            // 
            this.Inactivebtn.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.Inactivebtn.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            this.Inactivebtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Inactivebtn.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Inactivebtn.ForeColor = System.Drawing.Color.White;
            this.Inactivebtn.Location = new System.Drawing.Point(563, 288);
            this.Inactivebtn.Name = "Inactivebtn";
            this.Inactivebtn.Size = new System.Drawing.Size(149, 37);
            this.Inactivebtn.TabIndex = 72;
            this.Inactivebtn.Text = "Inactive";
            this.Inactivebtn.UseVisualStyleBackColor = false;
            this.Inactivebtn.Click += new System.EventHandler(this.Inactivebtn_Click);
            // 
            // OrderReportForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1435, 479);
            this.Controls.Add(this.Orderpnl);
            this.Controls.Add(this.orderBindingNavigator);
            this.Name = "OrderReportForm";
            this.Text = "OrderReportForm";
            this.Load += new System.EventHandler(this.OrderReportForm_Load);
            ((System.ComponentModel.ISupportInitialize)(this.palmettoRestaurantDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.orderBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.orderBindingNavigator)).EndInit();
            this.orderBindingNavigator.ResumeLayout(false);
            this.orderBindingNavigator.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.orderDetailBindingSource)).EndInit();
            this.Orderpnl.ResumeLayout(false);
            this.Orderpnl.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.PalmettoGolfCourseimg)).EndInit();
            this.Navpnl.ResumeLayout(false);
            this.Navpnl.PerformLayout();
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.Orderdgv)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.orderDetailLinkingBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataTable1BindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.palmettoRestaurantDataSetBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.fKOrderOrderDetailBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.orderBindingSource1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private PalmettoRestaurantDataSet palmettoRestaurantDataSet;
        private System.Windows.Forms.BindingSource orderBindingSource;
        private PalmettoRestaurantDataSetTableAdapters.OrderTableAdapter orderTableAdapter;
        private PalmettoRestaurantDataSetTableAdapters.TableAdapterManager tableAdapterManager;
        private System.Windows.Forms.BindingNavigator orderBindingNavigator;
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
        private System.Windows.Forms.ToolStripButton orderBindingNavigatorSaveItem;
        private PalmettoRestaurantDataSetTableAdapters.OrderDetailTableAdapter orderDetailTableAdapter;
        private System.Windows.Forms.BindingSource orderDetailBindingSource;
        private System.Windows.Forms.Panel Orderpnl;
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
        private System.Windows.Forms.DataGridView Orderdgv;
        private System.Windows.Forms.BindingSource fKOrderOrderDetailBindingSource;
        private System.Windows.Forms.BindingSource orderBindingSource1;
        private System.Windows.Forms.BindingSource palmettoRestaurantDataSetBindingSource;
        private System.Windows.Forms.BindingSource dataTable1BindingSource;
        private System.Windows.Forms.BindingSource orderDetailLinkingBindingSource;
        private PalmettoRestaurantDataSetTableAdapters.OrderDetailLinkingTableAdapter orderDetailLinkingTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn orderIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn userFullNameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn orderDateDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn orderDetailQuantityDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn menuItemNameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn menuItemPriceDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn tableNameDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewCheckBoxColumn isActiveDataGridViewCheckBoxColumn;
        private System.Windows.Forms.Button Inactivebtn;
        private System.Windows.Forms.Button Activebtn;
    }
}
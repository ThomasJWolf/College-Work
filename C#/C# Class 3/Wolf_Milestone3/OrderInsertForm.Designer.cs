namespace Wolf_Milestone3
{
    partial class OrderInsertForm
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
            System.Windows.Forms.Label OrderDatelbl;
            System.Windows.Forms.Label UserFullNamelbl;
            System.Windows.Forms.Label TableNamelbl;
            System.Windows.Forms.Label MenuItemNamelbl;
            System.Windows.Forms.Label OrderDetailQuantitylbl;
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(OrderInsertForm));
            this.Titlelbl = new System.Windows.Forms.Label();
            this.PalmettoGolfCourseimg = new System.Windows.Forms.PictureBox();
            this.Navpnl = new System.Windows.Forms.Panel();
            this.Insertbtn = new System.Windows.Forms.Button();
            this.userBindingNavigator = new System.Windows.Forms.BindingNavigator(this.components);
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
            this.userBindingNavigatorSaveItem = new System.Windows.Forms.ToolStripButton();
            this.palmettoRestaurantDataSet = new Wolf_Milestone3.PalmettoRestaurantDataSet();
            this.orderBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.orderTableAdapter = new Wolf_Milestone3.PalmettoRestaurantDataSetTableAdapters.OrderTableAdapter();
            this.tableAdapterManager = new Wolf_Milestone3.PalmettoRestaurantDataSetTableAdapters.TableAdapterManager();
            this.orderDetailTableAdapter = new Wolf_Milestone3.PalmettoRestaurantDataSetTableAdapters.OrderDetailTableAdapter();
            this.OrderDatedtp = new System.Windows.Forms.DateTimePicker();
            this.orderDetailBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.fKOrderOrderDetailBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.userBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.userTableAdapter = new Wolf_Milestone3.PalmettoRestaurantDataSetTableAdapters.UserTableAdapter();
            this.fKUserOrderBindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.fKUserOrderBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.UserFullNamecbx = new System.Windows.Forms.ComboBox();
            this.userBindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.tableBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.tableTableAdapter = new Wolf_Milestone3.PalmettoRestaurantDataSetTableAdapters.TableTableAdapter();
            this.TableNamecbx = new System.Windows.Forms.ComboBox();
            this.tableBindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.menuItemBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.menuItemTableAdapter = new Wolf_Milestone3.PalmettoRestaurantDataSetTableAdapters.MenuItemTableAdapter();
            this.MenuItemNamecbx = new System.Windows.Forms.ComboBox();
            this.menuItemBindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.OrderDetailQuantitynud = new System.Windows.Forms.NumericUpDown();
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
            OrderDatelbl = new System.Windows.Forms.Label();
            UserFullNamelbl = new System.Windows.Forms.Label();
            TableNamelbl = new System.Windows.Forms.Label();
            MenuItemNamelbl = new System.Windows.Forms.Label();
            OrderDetailQuantitylbl = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.PalmettoGolfCourseimg)).BeginInit();
            this.Navpnl.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.userBindingNavigator)).BeginInit();
            this.userBindingNavigator.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.palmettoRestaurantDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.orderBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.orderDetailBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.fKOrderOrderDetailBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.userBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.fKUserOrderBindingSource1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.fKUserOrderBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.userBindingSource1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.tableBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.tableBindingSource1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.menuItemBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.menuItemBindingSource1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.OrderDetailQuantitynud)).BeginInit();
            this.menuStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // OrderDatelbl
            // 
            OrderDatelbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            OrderDatelbl.AutoSize = true;
            OrderDatelbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            OrderDatelbl.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            OrderDatelbl.ForeColor = System.Drawing.Color.White;
            OrderDatelbl.Location = new System.Drawing.Point(204, 398);
            OrderDatelbl.Name = "OrderDatelbl";
            OrderDatelbl.Size = new System.Drawing.Size(92, 20);
            OrderDatelbl.TabIndex = 22;
            OrderDatelbl.Text = "Order Date:";
            // 
            // UserFullNamelbl
            // 
            UserFullNamelbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            UserFullNamelbl.AutoSize = true;
            UserFullNamelbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            UserFullNamelbl.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            UserFullNamelbl.ForeColor = System.Drawing.Color.White;
            UserFullNamelbl.Location = new System.Drawing.Point(175, 308);
            UserFullNamelbl.Name = "UserFullNamelbl";
            UserFullNamelbl.Size = new System.Drawing.Size(121, 20);
            UserFullNamelbl.TabIndex = 27;
            UserFullNamelbl.Text = "User Full Name:";
            // 
            // TableNamelbl
            // 
            TableNamelbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            TableNamelbl.AutoSize = true;
            TableNamelbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            TableNamelbl.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            TableNamelbl.ForeColor = System.Drawing.Color.White;
            TableNamelbl.Location = new System.Drawing.Point(199, 338);
            TableNamelbl.Name = "TableNamelbl";
            TableNamelbl.Size = new System.Drawing.Size(97, 20);
            TableNamelbl.TabIndex = 28;
            TableNamelbl.Text = "Table Name:";
            // 
            // MenuItemNamelbl
            // 
            MenuItemNamelbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            MenuItemNamelbl.AutoSize = true;
            MenuItemNamelbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            MenuItemNamelbl.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            MenuItemNamelbl.ForeColor = System.Drawing.Color.White;
            MenuItemNamelbl.Location = new System.Drawing.Point(165, 368);
            MenuItemNamelbl.Name = "MenuItemNamelbl";
            MenuItemNamelbl.Size = new System.Drawing.Size(131, 20);
            MenuItemNamelbl.TabIndex = 29;
            MenuItemNamelbl.Text = "Menu Item Name:";
            // 
            // OrderDetailQuantitylbl
            // 
            OrderDetailQuantitylbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            OrderDetailQuantitylbl.AutoSize = true;
            OrderDetailQuantitylbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            OrderDetailQuantitylbl.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            OrderDetailQuantitylbl.ForeColor = System.Drawing.Color.White;
            OrderDetailQuantitylbl.Location = new System.Drawing.Point(137, 427);
            OrderDetailQuantitylbl.Name = "OrderDetailQuantitylbl";
            OrderDetailQuantitylbl.Size = new System.Drawing.Size(159, 20);
            OrderDetailQuantitylbl.TabIndex = 30;
            OrderDetailQuantitylbl.Text = "Order Detail Quantity:";
            // 
            // Titlelbl
            // 
            this.Titlelbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Arial", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.ForeColor = System.Drawing.Color.White;
            this.Titlelbl.Location = new System.Drawing.Point(235, 269);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(144, 29);
            this.Titlelbl.TabIndex = 21;
            this.Titlelbl.Text = "Order Input";
            // 
            // PalmettoGolfCourseimg
            // 
            this.PalmettoGolfCourseimg.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.PalmettoGolfCourseimg.BackColor = System.Drawing.Color.Transparent;
            this.PalmettoGolfCourseimg.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("PalmettoGolfCourseimg.BackgroundImage")));
            this.PalmettoGolfCourseimg.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.PalmettoGolfCourseimg.Location = new System.Drawing.Point(221, 28);
            this.PalmettoGolfCourseimg.Name = "PalmettoGolfCourseimg";
            this.PalmettoGolfCourseimg.Size = new System.Drawing.Size(158, 157);
            this.PalmettoGolfCourseimg.TabIndex = 20;
            this.PalmettoGolfCourseimg.TabStop = false;
            // 
            // Navpnl
            // 
            this.Navpnl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.Navpnl.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.Navpnl.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            this.Navpnl.Controls.Add(this.menuStrip1);
            this.Navpnl.Location = new System.Drawing.Point(-590, 191);
            this.Navpnl.Name = "Navpnl";
            this.Navpnl.Size = new System.Drawing.Size(1783, 65);
            this.Navpnl.TabIndex = 19;
            // 
            // Insertbtn
            // 
            this.Insertbtn.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.Insertbtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Insertbtn.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Insertbtn.ForeColor = System.Drawing.Color.White;
            this.Insertbtn.Location = new System.Drawing.Point(230, 457);
            this.Insertbtn.Name = "Insertbtn";
            this.Insertbtn.Size = new System.Drawing.Size(149, 37);
            this.Insertbtn.TabIndex = 18;
            this.Insertbtn.Text = "Insert";
            this.Insertbtn.UseVisualStyleBackColor = true;
            this.Insertbtn.Click += new System.EventHandler(this.Insertbtn_Click);
            // 
            // userBindingNavigator
            // 
            this.userBindingNavigator.AddNewItem = this.bindingNavigatorAddNewItem;
            this.userBindingNavigator.CountItem = this.bindingNavigatorCountItem;
            this.userBindingNavigator.DeleteItem = this.bindingNavigatorDeleteItem;
            this.userBindingNavigator.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
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
            this.userBindingNavigatorSaveItem});
            this.userBindingNavigator.Location = new System.Drawing.Point(0, 0);
            this.userBindingNavigator.MoveFirstItem = this.bindingNavigatorMoveFirstItem;
            this.userBindingNavigator.MoveLastItem = this.bindingNavigatorMoveLastItem;
            this.userBindingNavigator.MoveNextItem = this.bindingNavigatorMoveNextItem;
            this.userBindingNavigator.MovePreviousItem = this.bindingNavigatorMovePreviousItem;
            this.userBindingNavigator.Name = "userBindingNavigator";
            this.userBindingNavigator.PositionItem = this.bindingNavigatorPositionItem;
            this.userBindingNavigator.Size = new System.Drawing.Size(605, 25);
            this.userBindingNavigator.TabIndex = 17;
            this.userBindingNavigator.Text = "bindingNavigator1";
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
            // userBindingNavigatorSaveItem
            // 
            this.userBindingNavigatorSaveItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.userBindingNavigatorSaveItem.Image = ((System.Drawing.Image)(resources.GetObject("userBindingNavigatorSaveItem.Image")));
            this.userBindingNavigatorSaveItem.Name = "userBindingNavigatorSaveItem";
            this.userBindingNavigatorSaveItem.Size = new System.Drawing.Size(23, 22);
            this.userBindingNavigatorSaveItem.Text = "Save Data";
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
            this.tableAdapterManager.UpdateOrder = Wolf_Milestone3.PalmettoRestaurantDataSetTableAdapters.TableAdapterManager.UpdateOrderOption.InsertUpdateDelete;
            this.tableAdapterManager.UserTableAdapter = null;
            // 
            // orderDetailTableAdapter
            // 
            this.orderDetailTableAdapter.ClearBeforeFill = true;
            // 
            // OrderDatedtp
            // 
            this.OrderDatedtp.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.OrderDatedtp.DataBindings.Add(new System.Windows.Forms.Binding("Value", this.orderBindingSource, "OrderDate", true));
            this.OrderDatedtp.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.OrderDatedtp.Location = new System.Drawing.Point(315, 395);
            this.OrderDatedtp.Name = "OrderDatedtp";
            this.OrderDatedtp.Size = new System.Drawing.Size(286, 26);
            this.OrderDatedtp.TabIndex = 23;
            // 
            // orderDetailBindingSource
            // 
            this.orderDetailBindingSource.DataMember = "FK_Order_OrderDetail";
            this.orderDetailBindingSource.DataSource = this.orderBindingSource;
            // 
            // fKOrderOrderDetailBindingSource
            // 
            this.fKOrderOrderDetailBindingSource.DataMember = "FK_Order_OrderDetail";
            this.fKOrderOrderDetailBindingSource.DataSource = this.orderBindingSource;
            // 
            // userBindingSource
            // 
            this.userBindingSource.DataMember = "User";
            this.userBindingSource.DataSource = this.palmettoRestaurantDataSet;
            // 
            // userTableAdapter
            // 
            this.userTableAdapter.ClearBeforeFill = true;
            // 
            // fKUserOrderBindingSource1
            // 
            this.fKUserOrderBindingSource1.DataMember = "FK_User_Order";
            this.fKUserOrderBindingSource1.DataSource = this.userBindingSource;
            // 
            // fKUserOrderBindingSource
            // 
            this.fKUserOrderBindingSource.DataMember = "FK_User_Order";
            this.fKUserOrderBindingSource.DataSource = this.userBindingSource;
            // 
            // UserFullNamecbx
            // 
            this.UserFullNamecbx.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.UserFullNamecbx.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.userBindingSource, "UserFullName", true));
            this.UserFullNamecbx.DataSource = this.userBindingSource1;
            this.UserFullNamecbx.DisplayMember = "UserFullName";
            this.UserFullNamecbx.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.UserFullNamecbx.FormattingEnabled = true;
            this.UserFullNamecbx.Location = new System.Drawing.Point(315, 305);
            this.UserFullNamecbx.Name = "UserFullNamecbx";
            this.UserFullNamecbx.Size = new System.Drawing.Size(174, 26);
            this.UserFullNamecbx.TabIndex = 28;
            this.UserFullNamecbx.ValueMember = "UserID";
            // 
            // userBindingSource1
            // 
            this.userBindingSource1.DataMember = "User";
            this.userBindingSource1.DataSource = this.palmettoRestaurantDataSet;
            // 
            // tableBindingSource
            // 
            this.tableBindingSource.DataMember = "Table";
            this.tableBindingSource.DataSource = this.palmettoRestaurantDataSet;
            // 
            // tableTableAdapter
            // 
            this.tableTableAdapter.ClearBeforeFill = true;
            // 
            // TableNamecbx
            // 
            this.TableNamecbx.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.TableNamecbx.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.tableBindingSource, "TableName", true));
            this.TableNamecbx.DataSource = this.tableBindingSource1;
            this.TableNamecbx.DisplayMember = "TableName";
            this.TableNamecbx.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TableNamecbx.FormattingEnabled = true;
            this.TableNamecbx.Location = new System.Drawing.Point(315, 335);
            this.TableNamecbx.Name = "TableNamecbx";
            this.TableNamecbx.Size = new System.Drawing.Size(174, 26);
            this.TableNamecbx.TabIndex = 29;
            this.TableNamecbx.ValueMember = "TableID";
            // 
            // tableBindingSource1
            // 
            this.tableBindingSource1.DataMember = "Table";
            this.tableBindingSource1.DataSource = this.palmettoRestaurantDataSet;
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
            // MenuItemNamecbx
            // 
            this.MenuItemNamecbx.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.MenuItemNamecbx.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.menuItemBindingSource, "MenuItemName", true));
            this.MenuItemNamecbx.DataSource = this.menuItemBindingSource1;
            this.MenuItemNamecbx.DisplayMember = "MenuItemName";
            this.MenuItemNamecbx.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.MenuItemNamecbx.FormattingEnabled = true;
            this.MenuItemNamecbx.Location = new System.Drawing.Point(315, 365);
            this.MenuItemNamecbx.Name = "MenuItemNamecbx";
            this.MenuItemNamecbx.Size = new System.Drawing.Size(174, 26);
            this.MenuItemNamecbx.TabIndex = 30;
            this.MenuItemNamecbx.ValueMember = "MenuItemID";
            // 
            // menuItemBindingSource1
            // 
            this.menuItemBindingSource1.DataMember = "MenuItem";
            this.menuItemBindingSource1.DataSource = this.palmettoRestaurantDataSet;
            // 
            // OrderDetailQuantitynud
            // 
            this.OrderDetailQuantitynud.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.OrderDetailQuantitynud.DataBindings.Add(new System.Windows.Forms.Binding("Value", this.orderDetailBindingSource, "OrderDetailQuantity", true));
            this.OrderDetailQuantitynud.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.OrderDetailQuantitynud.Location = new System.Drawing.Point(315, 425);
            this.OrderDetailQuantitynud.Name = "OrderDetailQuantitynud";
            this.OrderDetailQuantitynud.Size = new System.Drawing.Size(174, 26);
            this.OrderDetailQuantitynud.TabIndex = 31;
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
            this.menuStrip1.Location = new System.Drawing.Point(721, 19);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(460, 26);
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
            // OrderInsertForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            this.ClientSize = new System.Drawing.Size(605, 504);
            this.Controls.Add(OrderDetailQuantitylbl);
            this.Controls.Add(this.OrderDetailQuantitynud);
            this.Controls.Add(MenuItemNamelbl);
            this.Controls.Add(this.MenuItemNamecbx);
            this.Controls.Add(TableNamelbl);
            this.Controls.Add(this.TableNamecbx);
            this.Controls.Add(UserFullNamelbl);
            this.Controls.Add(this.UserFullNamecbx);
            this.Controls.Add(OrderDatelbl);
            this.Controls.Add(this.OrderDatedtp);
            this.Controls.Add(this.Titlelbl);
            this.Controls.Add(this.PalmettoGolfCourseimg);
            this.Controls.Add(this.Navpnl);
            this.Controls.Add(this.Insertbtn);
            this.Controls.Add(this.userBindingNavigator);
            this.Name = "OrderInsertForm";
            this.Text = "OrderInsertForm";
            this.Load += new System.EventHandler(this.OrderInsertForm_Load);
            ((System.ComponentModel.ISupportInitialize)(this.PalmettoGolfCourseimg)).EndInit();
            this.Navpnl.ResumeLayout(false);
            this.Navpnl.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.userBindingNavigator)).EndInit();
            this.userBindingNavigator.ResumeLayout(false);
            this.userBindingNavigator.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.palmettoRestaurantDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.orderBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.orderDetailBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.fKOrderOrderDetailBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.userBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.fKUserOrderBindingSource1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.fKUserOrderBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.userBindingSource1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.tableBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.tableBindingSource1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.menuItemBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.menuItemBindingSource1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.OrderDetailQuantitynud)).EndInit();
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label Titlelbl;
        private System.Windows.Forms.PictureBox PalmettoGolfCourseimg;
        private System.Windows.Forms.Panel Navpnl;
        private System.Windows.Forms.Button Insertbtn;
        private System.Windows.Forms.BindingNavigator userBindingNavigator;
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
        private System.Windows.Forms.ToolStripButton userBindingNavigatorSaveItem;
        private PalmettoRestaurantDataSet palmettoRestaurantDataSet;
        private System.Windows.Forms.BindingSource orderBindingSource;
        private PalmettoRestaurantDataSetTableAdapters.OrderTableAdapter orderTableAdapter;
        private PalmettoRestaurantDataSetTableAdapters.TableAdapterManager tableAdapterManager;
        private PalmettoRestaurantDataSetTableAdapters.OrderDetailTableAdapter orderDetailTableAdapter;
        private System.Windows.Forms.DateTimePicker OrderDatedtp;
        private System.Windows.Forms.BindingSource orderDetailBindingSource;
        private System.Windows.Forms.BindingSource fKOrderOrderDetailBindingSource;
        private System.Windows.Forms.BindingSource userBindingSource;
        private PalmettoRestaurantDataSetTableAdapters.UserTableAdapter userTableAdapter;
        private System.Windows.Forms.BindingSource fKUserOrderBindingSource;
        private System.Windows.Forms.BindingSource fKUserOrderBindingSource1;
        private System.Windows.Forms.ComboBox UserFullNamecbx;
        private System.Windows.Forms.BindingSource userBindingSource1;
        private System.Windows.Forms.BindingSource tableBindingSource;
        private PalmettoRestaurantDataSetTableAdapters.TableTableAdapter tableTableAdapter;
        private System.Windows.Forms.ComboBox TableNamecbx;
        private System.Windows.Forms.BindingSource menuItemBindingSource;
        private PalmettoRestaurantDataSetTableAdapters.MenuItemTableAdapter menuItemTableAdapter;
        private System.Windows.Forms.BindingSource tableBindingSource1;
        private System.Windows.Forms.ComboBox MenuItemNamecbx;
        private System.Windows.Forms.BindingSource menuItemBindingSource1;
        private System.Windows.Forms.NumericUpDown OrderDetailQuantitynud;
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
    }
}
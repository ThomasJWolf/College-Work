namespace Wolf_Milestone3
{
    partial class TableInsertForm
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
            System.Windows.Forms.Label TableNamelbl;
            System.Windows.Forms.Label tableSeatslbl;
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(TableInsertForm));
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
            this.Insertbtn = new System.Windows.Forms.Button();
            this.palmettoRestaurantDataSet = new Wolf_Milestone3.PalmettoRestaurantDataSet();
            this.tableBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.tableTableAdapter = new Wolf_Milestone3.PalmettoRestaurantDataSetTableAdapters.TableTableAdapter();
            this.tableAdapterManager = new Wolf_Milestone3.PalmettoRestaurantDataSetTableAdapters.TableAdapterManager();
            this.tableBindingNavigator = new System.Windows.Forms.BindingNavigator(this.components);
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
            this.tableBindingNavigatorSaveItem = new System.Windows.Forms.ToolStripButton();
            this.TableNametxb = new System.Windows.Forms.TextBox();
            this.TableSeatsnud = new System.Windows.Forms.NumericUpDown();
            TableNamelbl = new System.Windows.Forms.Label();
            tableSeatslbl = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.PalmettoGolfCourseimg)).BeginInit();
            this.Navpnl.SuspendLayout();
            this.menuStrip1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.palmettoRestaurantDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.tableBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.tableBindingNavigator)).BeginInit();
            this.tableBindingNavigator.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.TableSeatsnud)).BeginInit();
            this.SuspendLayout();
            // 
            // TableNamelbl
            // 
            TableNamelbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            TableNamelbl.AutoSize = true;
            TableNamelbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            TableNamelbl.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            TableNamelbl.ForeColor = System.Drawing.Color.White;
            TableNamelbl.Location = new System.Drawing.Point(93, 308);
            TableNamelbl.Name = "TableNamelbl";
            TableNamelbl.Size = new System.Drawing.Size(97, 20);
            TableNamelbl.TabIndex = 33;
            TableNamelbl.Text = "Table Name:";
            // 
            // tableSeatslbl
            // 
            tableSeatslbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            tableSeatslbl.AutoSize = true;
            tableSeatslbl.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            tableSeatslbl.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            tableSeatslbl.ForeColor = System.Drawing.Color.White;
            tableSeatslbl.Location = new System.Drawing.Point(93, 337);
            tableSeatslbl.Name = "tableSeatslbl";
            tableSeatslbl.Size = new System.Drawing.Size(96, 20);
            tableSeatslbl.TabIndex = 34;
            tableSeatslbl.Text = "Table Seats:";
            // 
            // Titlelbl
            // 
            this.Titlelbl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.Titlelbl.AutoSize = true;
            this.Titlelbl.Font = new System.Drawing.Font("Arial", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Titlelbl.ForeColor = System.Drawing.Color.White;
            this.Titlelbl.Location = new System.Drawing.Point(131, 269);
            this.Titlelbl.Name = "Titlelbl";
            this.Titlelbl.Size = new System.Drawing.Size(141, 29);
            this.Titlelbl.TabIndex = 29;
            this.Titlelbl.Text = "Table Input";
            // 
            // PalmettoGolfCourseimg
            // 
            this.PalmettoGolfCourseimg.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.PalmettoGolfCourseimg.BackColor = System.Drawing.Color.Transparent;
            this.PalmettoGolfCourseimg.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("PalmettoGolfCourseimg.BackgroundImage")));
            this.PalmettoGolfCourseimg.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.PalmettoGolfCourseimg.Location = new System.Drawing.Point(117, 28);
            this.PalmettoGolfCourseimg.Name = "PalmettoGolfCourseimg";
            this.PalmettoGolfCourseimg.Size = new System.Drawing.Size(158, 157);
            this.PalmettoGolfCourseimg.TabIndex = 28;
            this.PalmettoGolfCourseimg.TabStop = false;
            // 
            // Navpnl
            // 
            this.Navpnl.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.Navpnl.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.Navpnl.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            this.Navpnl.Controls.Add(this.menuStrip1);
            this.Navpnl.Location = new System.Drawing.Point(-694, 191);
            this.Navpnl.Name = "Navpnl";
            this.Navpnl.Size = new System.Drawing.Size(1783, 65);
            this.Navpnl.TabIndex = 27;
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
            // Insertbtn
            // 
            this.Insertbtn.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.Insertbtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.Insertbtn.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Insertbtn.ForeColor = System.Drawing.Color.White;
            this.Insertbtn.Location = new System.Drawing.Point(126, 367);
            this.Insertbtn.Name = "Insertbtn";
            this.Insertbtn.Size = new System.Drawing.Size(149, 37);
            this.Insertbtn.TabIndex = 26;
            this.Insertbtn.Text = "Insert";
            this.Insertbtn.UseVisualStyleBackColor = true;
            this.Insertbtn.Click += new System.EventHandler(this.Insertbtn_Click);
            // 
            // palmettoRestaurantDataSet
            // 
            this.palmettoRestaurantDataSet.DataSetName = "PalmettoRestaurantDataSet";
            this.palmettoRestaurantDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
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
            // tableAdapterManager
            // 
            this.tableAdapterManager.BackupDataSetBeforeUpdate = false;
            this.tableAdapterManager.InventoryTableAdapter = null;
            this.tableAdapterManager.MenuItemTableAdapter = null;
            this.tableAdapterManager.OrderDetailTableAdapter = null;
            this.tableAdapterManager.OrderTableAdapter = null;
            this.tableAdapterManager.TableTableAdapter = this.tableTableAdapter;
            this.tableAdapterManager.UpdateOrder = Wolf_Milestone3.PalmettoRestaurantDataSetTableAdapters.TableAdapterManager.UpdateOrderOption.InsertUpdateDelete;
            this.tableAdapterManager.UserTableAdapter = null;
            // 
            // tableBindingNavigator
            // 
            this.tableBindingNavigator.AddNewItem = this.bindingNavigatorAddNewItem;
            this.tableBindingNavigator.BindingSource = this.tableBindingSource;
            this.tableBindingNavigator.CountItem = this.bindingNavigatorCountItem;
            this.tableBindingNavigator.DeleteItem = this.bindingNavigatorDeleteItem;
            this.tableBindingNavigator.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
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
            this.tableBindingNavigatorSaveItem});
            this.tableBindingNavigator.Location = new System.Drawing.Point(0, 0);
            this.tableBindingNavigator.MoveFirstItem = this.bindingNavigatorMoveFirstItem;
            this.tableBindingNavigator.MoveLastItem = this.bindingNavigatorMoveLastItem;
            this.tableBindingNavigator.MoveNextItem = this.bindingNavigatorMoveNextItem;
            this.tableBindingNavigator.MovePreviousItem = this.bindingNavigatorMovePreviousItem;
            this.tableBindingNavigator.Name = "tableBindingNavigator";
            this.tableBindingNavigator.PositionItem = this.bindingNavigatorPositionItem;
            this.tableBindingNavigator.Size = new System.Drawing.Size(393, 25);
            this.tableBindingNavigator.TabIndex = 33;
            this.tableBindingNavigator.Text = "bindingNavigator1";
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
            // tableBindingNavigatorSaveItem
            // 
            this.tableBindingNavigatorSaveItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.tableBindingNavigatorSaveItem.Image = ((System.Drawing.Image)(resources.GetObject("tableBindingNavigatorSaveItem.Image")));
            this.tableBindingNavigatorSaveItem.Name = "tableBindingNavigatorSaveItem";
            this.tableBindingNavigatorSaveItem.Size = new System.Drawing.Size(23, 22);
            this.tableBindingNavigatorSaveItem.Text = "Save Data";
            this.tableBindingNavigatorSaveItem.Click += new System.EventHandler(this.tableBindingNavigatorSaveItem_Click);
            // 
            // TableNametxb
            // 
            this.TableNametxb.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.TableNametxb.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.tableBindingSource, "TableName", true));
            this.TableNametxb.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TableNametxb.Location = new System.Drawing.Point(210, 305);
            this.TableNametxb.Name = "TableNametxb";
            this.TableNametxb.Size = new System.Drawing.Size(174, 26);
            this.TableNametxb.TabIndex = 34;
            // 
            // TableSeatsnud
            // 
            this.TableSeatsnud.Anchor = System.Windows.Forms.AnchorStyles.Top;
            this.TableSeatsnud.DataBindings.Add(new System.Windows.Forms.Binding("Value", this.tableBindingSource, "TableSeats", true));
            this.TableSeatsnud.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.TableSeatsnud.Location = new System.Drawing.Point(210, 335);
            this.TableSeatsnud.Name = "TableSeatsnud";
            this.TableSeatsnud.Size = new System.Drawing.Size(174, 26);
            this.TableSeatsnud.TabIndex = 35;
            // 
            // TableInsertForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            this.ClientSize = new System.Drawing.Size(393, 416);
            this.Controls.Add(tableSeatslbl);
            this.Controls.Add(this.TableSeatsnud);
            this.Controls.Add(TableNamelbl);
            this.Controls.Add(this.TableNametxb);
            this.Controls.Add(this.tableBindingNavigator);
            this.Controls.Add(this.Titlelbl);
            this.Controls.Add(this.PalmettoGolfCourseimg);
            this.Controls.Add(this.Navpnl);
            this.Controls.Add(this.Insertbtn);
            this.Name = "TableInsertForm";
            this.Text = "TableInsertForm";
            this.Load += new System.EventHandler(this.TableInsertForm_Load);
            ((System.ComponentModel.ISupportInitialize)(this.PalmettoGolfCourseimg)).EndInit();
            this.Navpnl.ResumeLayout(false);
            this.Navpnl.PerformLayout();
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.palmettoRestaurantDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.tableBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.tableBindingNavigator)).EndInit();
            this.tableBindingNavigator.ResumeLayout(false);
            this.tableBindingNavigator.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.TableSeatsnud)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
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
        private System.Windows.Forms.Button Insertbtn;
        private PalmettoRestaurantDataSet palmettoRestaurantDataSet;
        private System.Windows.Forms.BindingSource tableBindingSource;
        private PalmettoRestaurantDataSetTableAdapters.TableTableAdapter tableTableAdapter;
        private PalmettoRestaurantDataSetTableAdapters.TableAdapterManager tableAdapterManager;
        private System.Windows.Forms.BindingNavigator tableBindingNavigator;
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
        private System.Windows.Forms.ToolStripButton tableBindingNavigatorSaveItem;
        private System.Windows.Forms.TextBox TableNametxb;
        private System.Windows.Forms.NumericUpDown TableSeatsnud;
    }
}
namespace Wolf_Milestone2
{
    partial class MainForm
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainForm));
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.panel1 = new System.Windows.Forms.Panel();
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.usersToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.userInsertToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.userSearchToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.userUpdateToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.menuToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.menuInsertToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.menuSearchToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.menuUpdateToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.menuUpdateToolStripMenuItem1 = new System.Windows.Forms.ToolStripMenuItem();
            this.ordersToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.ordersInsertToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.ordersSearchToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.ordersUpdateToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.orderReportsToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.inventoryToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.inventoryInsertToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.inventorySearchToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.inventoryUpdateToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.inventoryReportsToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.panel1.SuspendLayout();
            this.menuStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // pictureBox1
            // 
            this.pictureBox1.BackColor = System.Drawing.Color.Transparent;
            this.pictureBox1.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("pictureBox1.BackgroundImage")));
            this.pictureBox1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.pictureBox1.Location = new System.Drawing.Point(125, 4);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(158, 157);
            this.pictureBox1.TabIndex = 3;
            this.pictureBox1.TabStop = false;
            // 
            // panel1
            // 
            this.panel1.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowAndShrink;
            this.panel1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(46)))), ((int)(((byte)(65)))), ((int)(((byte)(70)))));
            this.panel1.Controls.Add(this.menuStrip1);
            this.panel1.Location = new System.Drawing.Point(0, 162);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(779, 65);
            this.panel1.TabIndex = 2;
            // 
            // menuStrip1
            // 
            this.menuStrip1.Dock = System.Windows.Forms.DockStyle.None;
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.usersToolStripMenuItem,
            this.menuToolStripMenuItem,
            this.ordersToolStripMenuItem,
            this.inventoryToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(57, 17);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(275, 26);
            this.menuStrip1.TabIndex = 2;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // usersToolStripMenuItem
            // 
            this.usersToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.userInsertToolStripMenuItem,
            this.userSearchToolStripMenuItem,
            this.userUpdateToolStripMenuItem});
            this.usersToolStripMenuItem.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.usersToolStripMenuItem.Name = "usersToolStripMenuItem";
            this.usersToolStripMenuItem.Size = new System.Drawing.Size(61, 22);
            this.usersToolStripMenuItem.Text = "Users";
            // 
            // userInsertToolStripMenuItem
            // 
            this.userInsertToolStripMenuItem.BackColor = System.Drawing.Color.Transparent;
            this.userInsertToolStripMenuItem.ImageTransparentColor = System.Drawing.Color.Transparent;
            this.userInsertToolStripMenuItem.Name = "userInsertToolStripMenuItem";
            this.userInsertToolStripMenuItem.Size = new System.Drawing.Size(164, 22);
            this.userInsertToolStripMenuItem.Text = "User Insert";
            // 
            // userSearchToolStripMenuItem
            // 
            this.userSearchToolStripMenuItem.Name = "userSearchToolStripMenuItem";
            this.userSearchToolStripMenuItem.Size = new System.Drawing.Size(164, 22);
            this.userSearchToolStripMenuItem.Text = "User Search";
            // 
            // userUpdateToolStripMenuItem
            // 
            this.userUpdateToolStripMenuItem.Name = "userUpdateToolStripMenuItem";
            this.userUpdateToolStripMenuItem.Size = new System.Drawing.Size(164, 22);
            this.userUpdateToolStripMenuItem.Text = "User Update";
            // 
            // menuToolStripMenuItem
            // 
            this.menuToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.menuInsertToolStripMenuItem,
            this.menuSearchToolStripMenuItem,
            this.menuUpdateToolStripMenuItem,
            this.menuUpdateToolStripMenuItem1});
            this.menuToolStripMenuItem.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.menuToolStripMenuItem.Name = "menuToolStripMenuItem";
            this.menuToolStripMenuItem.Size = new System.Drawing.Size(58, 22);
            this.menuToolStripMenuItem.Text = "Menu";
            // 
            // menuInsertToolStripMenuItem
            // 
            this.menuInsertToolStripMenuItem.Name = "menuInsertToolStripMenuItem";
            this.menuInsertToolStripMenuItem.Size = new System.Drawing.Size(169, 22);
            this.menuInsertToolStripMenuItem.Text = "Menu View";
            // 
            // menuSearchToolStripMenuItem
            // 
            this.menuSearchToolStripMenuItem.Name = "menuSearchToolStripMenuItem";
            this.menuSearchToolStripMenuItem.Size = new System.Drawing.Size(169, 22);
            this.menuSearchToolStripMenuItem.Text = "Menu Insert";
            // 
            // menuUpdateToolStripMenuItem
            // 
            this.menuUpdateToolStripMenuItem.Name = "menuUpdateToolStripMenuItem";
            this.menuUpdateToolStripMenuItem.Size = new System.Drawing.Size(169, 22);
            this.menuUpdateToolStripMenuItem.Text = "Menu Search";
            // 
            // menuUpdateToolStripMenuItem1
            // 
            this.menuUpdateToolStripMenuItem1.Name = "menuUpdateToolStripMenuItem1";
            this.menuUpdateToolStripMenuItem1.Size = new System.Drawing.Size(169, 22);
            this.menuUpdateToolStripMenuItem1.Text = "Menu Update";
            // 
            // ordersToolStripMenuItem
            // 
            this.ordersToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.ordersInsertToolStripMenuItem,
            this.ordersSearchToolStripMenuItem,
            this.ordersUpdateToolStripMenuItem,
            this.orderReportsToolStripMenuItem});
            this.ordersToolStripMenuItem.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ordersToolStripMenuItem.Name = "ordersToolStripMenuItem";
            this.ordersToolStripMenuItem.Size = new System.Drawing.Size(68, 22);
            this.ordersToolStripMenuItem.Text = "Orders";
            // 
            // ordersInsertToolStripMenuItem
            // 
            this.ordersInsertToolStripMenuItem.Name = "ordersInsertToolStripMenuItem";
            this.ordersInsertToolStripMenuItem.Size = new System.Drawing.Size(179, 22);
            this.ordersInsertToolStripMenuItem.Text = "Orders Insert";
            // 
            // ordersSearchToolStripMenuItem
            // 
            this.ordersSearchToolStripMenuItem.Name = "ordersSearchToolStripMenuItem";
            this.ordersSearchToolStripMenuItem.Size = new System.Drawing.Size(179, 22);
            this.ordersSearchToolStripMenuItem.Text = "Orders Search";
            // 
            // ordersUpdateToolStripMenuItem
            // 
            this.ordersUpdateToolStripMenuItem.Name = "ordersUpdateToolStripMenuItem";
            this.ordersUpdateToolStripMenuItem.Size = new System.Drawing.Size(179, 22);
            this.ordersUpdateToolStripMenuItem.Text = "Orders Update";
            // 
            // orderReportsToolStripMenuItem
            // 
            this.orderReportsToolStripMenuItem.Name = "orderReportsToolStripMenuItem";
            this.orderReportsToolStripMenuItem.Size = new System.Drawing.Size(179, 22);
            this.orderReportsToolStripMenuItem.Text = "Order Reports";
            // 
            // inventoryToolStripMenuItem
            // 
            this.inventoryToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.inventoryInsertToolStripMenuItem,
            this.inventorySearchToolStripMenuItem,
            this.inventoryUpdateToolStripMenuItem,
            this.inventoryReportsToolStripMenuItem});
            this.inventoryToolStripMenuItem.Font = new System.Drawing.Font("Arial", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.inventoryToolStripMenuItem.Name = "inventoryToolStripMenuItem";
            this.inventoryToolStripMenuItem.Size = new System.Drawing.Size(80, 22);
            this.inventoryToolStripMenuItem.Text = "Inventory";
            // 
            // inventoryInsertToolStripMenuItem
            // 
            this.inventoryInsertToolStripMenuItem.Name = "inventoryInsertToolStripMenuItem";
            this.inventoryInsertToolStripMenuItem.Size = new System.Drawing.Size(195, 22);
            this.inventoryInsertToolStripMenuItem.Text = "Inventory Insert";
            // 
            // inventorySearchToolStripMenuItem
            // 
            this.inventorySearchToolStripMenuItem.Name = "inventorySearchToolStripMenuItem";
            this.inventorySearchToolStripMenuItem.Size = new System.Drawing.Size(195, 22);
            this.inventorySearchToolStripMenuItem.Text = "Inventory Search";
            // 
            // inventoryUpdateToolStripMenuItem
            // 
            this.inventoryUpdateToolStripMenuItem.Name = "inventoryUpdateToolStripMenuItem";
            this.inventoryUpdateToolStripMenuItem.Size = new System.Drawing.Size(195, 22);
            this.inventoryUpdateToolStripMenuItem.Text = "Inventory Update";
            // 
            // inventoryReportsToolStripMenuItem
            // 
            this.inventoryReportsToolStripMenuItem.Name = "inventoryReportsToolStripMenuItem";
            this.inventoryReportsToolStripMenuItem.Size = new System.Drawing.Size(195, 22);
            this.inventoryReportsToolStripMenuItem.Text = "Inventory Reports";
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(89)))), ((int)(((byte)(110)))), ((int)(((byte)(115)))));
            this.ClientSize = new System.Drawing.Size(398, 311);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.panel1);
            this.Name = "MainForm";
            this.Text = "MainForm";
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem usersToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem userInsertToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem userSearchToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem userUpdateToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem menuToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem menuInsertToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem menuSearchToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem menuUpdateToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem menuUpdateToolStripMenuItem1;
        private System.Windows.Forms.ToolStripMenuItem ordersToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem ordersInsertToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem ordersSearchToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem ordersUpdateToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem orderReportsToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem inventoryToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem inventoryInsertToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem inventorySearchToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem inventoryUpdateToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem inventoryReportsToolStripMenuItem;
    }
}


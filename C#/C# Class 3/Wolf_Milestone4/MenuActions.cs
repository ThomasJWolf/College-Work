using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Wolf_Milestone4
{
public static class MenuActions
{
    public static void MenuItemClicked(object sender, EventArgs e)
    {
        ToolStripMenuItem menuItem = sender as ToolStripMenuItem;
        if (menuItem != null)
        {
            switch (menuItem.Name)
            {
                case "PalmettoGolfCourseimg":
                    MainForm mainForm = new MainForm();
                    mainForm.Show();
                    break;

                case "UserInserttsm":
                    UserInputForm userInputForm = new UserInputForm();
                    userInputForm.Show();
                    break;
                case "UserSearchtsm":
                    UserSearchForm userSearchForm = new UserSearchForm();
                    userSearchForm.Show();
                    break;
                case "UserUpdatetsm":
                    MessageBox.Show("UserUpdate clicked");
                    break;

                case "MenuViewtsm":
                        MessageBox.Show("MenuView clicked");
                    break;
                case "MenuInserttsm":
                    MenuInsertForm menuInsertForm = new MenuInsertForm();
                    menuInsertForm.Show();
                    break;
                case "MenuSearchtsm":
                    MenuSearchForm menuSearchForm = new MenuSearchForm();
                    menuSearchForm.Show();
                    break;
                case "MenuUpdatetsm":
                    MessageBox.Show("MenuUpdate clicked");
                    break;

                case "OrdersInserttsm":
                    OrderInsertForm orderInsertForm = new OrderInsertForm();
                        orderInsertForm.Show();

                    break;
                case "OrdersSearchtsm":
                    OrderSearchForm orderSearchForm = new OrderSearchForm();
                    orderSearchForm.Show();
                    break;
                case "OrdersUpdatetsm":
                    MessageBox.Show("OrdersUpdate clicked");
                    break;
                case "OrderReportstsm":
                    MessageBox.Show("OrderReports clicked");
                    break;

                case "InventoryInserttsm":
                    InventoryInputForm inventoryInputForm = new InventoryInputForm();
                    inventoryInputForm.Show();
                    break;
                case "InventorySearchtsm":
                    InventorySearchForm inventorySearchForm = new InventorySearchForm();
                    inventorySearchForm.Show();
                    break;
                case "InventoryUpdatetsm":
                    MessageBox.Show("InventoryUpdate clicked");
                    break;
                case "InventoryReportstsm":
                    MessageBox.Show("InventoryReports clicked");
                    break;

                case "TableInserttsm":
                    TableInsertForm tableInsertForm = new TableInsertForm();
                    tableInsertForm.Show();
                    break;
                case "TableSearchtsm":
                    TableSearchForm tableSearchForm = new TableSearchForm();
                    tableSearchForm.Show();
                    break;
                case "TableUpdatetsm":
                    MessageBox.Show("TableUpdate clicked");
                    break;

                

            }
        }
    }
}

}

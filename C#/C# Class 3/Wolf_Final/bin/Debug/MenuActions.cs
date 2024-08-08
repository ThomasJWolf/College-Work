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
                    UserUpdateForm userUpdateForm = new UserUpdateForm();
                    userUpdateForm.Show();
                    break;

                case "MenuViewtsm":
                    MenuViewForm menuViewForm = new MenuViewForm();
                    menuViewForm.Show();
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
                    MenuUpdateForm menuUpdateForm = new MenuUpdateForm();
                    menuUpdateForm.Show();
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
                    OrderUpdateForm orderUpdateForm = new OrderUpdateForm();
                    orderUpdateForm.Show();
                    break;
                case "OrderReportstsm":
                    OrderReportForm orderReportForm = new OrderReportForm();
                    orderReportForm.Show();
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
                    InventoryUpdateForm inventoryUpdateForm = new InventoryUpdateForm();
                    inventoryUpdateForm.Show();
                    break;
                case "InventoryReportstsm":
                    InventoryReportForm inventoryReportForm = new InventoryReportForm();
                    inventoryReportForm.Show();
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
                    TableUpdateForm tableUpdateForm = new TableUpdateForm();
                    tableUpdateForm.Show();

                    break;

                

            }
        }
    }
}

}

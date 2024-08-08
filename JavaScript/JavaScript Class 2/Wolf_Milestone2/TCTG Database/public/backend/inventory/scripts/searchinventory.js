var InventoryBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadInventorysFromServer: function () {
    console.log(emailervalue);
    $.ajax({
      url: "/inventorys/getInvt",
      data: {
        inventoryid: inventoryid.value,
        inventoryproduct: Invtproduct.value,
        inventoryinstock: inventoryinstock.value,
        inventorylastupdated: inventorylastupdated.value,
      },

      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadInventorysFromServer();
    // setInterval(this.loadInventorysFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Search Inventorys</h1>
        <Inventoryform2 onInventorySubmit={this.loadInventorysFromServer} />
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>In Stock</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <InventoryList data={this.state.data} />
        </table>
      </div>
    );
  },
});

var Inventoryform2 = React.createClass({
  getInitialState: function () {
    return {
      inventoryid: "",
      data: [],
      inventoryinstock: "",
      inventorylastupdated: "",
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  loadInvtProducts: function () {
    $.ajax({
      url: "/inventorys/getInvtproducts",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadInvtProducts();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var inventoryid = this.state.inventoryid.trim();
    var inventoryproduct = Invtproduct.value;
    var inventoryinstock = this.state.inventoryinstock.trim();
    var inventorylastupdated = this.state.inventorylastupdated.trim();

    this.props.onInventorySubmit({
      inventoryid: inventoryid,
      inventoryproduct: inventoryproduct,
      inventoryinstock: inventoryinstock,
      inventorylastupdated: inventorylastupdated,
    });
  },
  handleChange: function (event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Inventorys</h2>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>
                <input
                  type="text"
                  name="inventoryid"
                  id="inventoryid"
                  value={this.state.inventoryid}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Product</th>
              <td>
                <SelectList data={this.state.data} />
              </td>
            </tr>
            <tr>
              <th>In Stock</th>
              <td>
                <input
                  type="text"
                  name="inventoryinstock"
                  id="inventoryinstock"
                  value={this.state.inventoryinstock}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Last Updated</th>
              <td>
                <input
                  type="date"
                  name="inventorylastupdated"
                  id="inventorylastupdated"
                  value={this.state.inventorylastupdated}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Search Inventory" />
      </form>
    );
  },
});

var InventoryList = React.createClass({
  render: function () {
    var inventoryNodes = this.props.data.map(function (inventory) {
      //map the data to individual donations
      return (
        <Inventory
          key={inventory.InventoryID}
          Invtid={inventory.InventoryID}
          Invtproduct={inventory.ProductName}
          Invtinstock={inventory.InventoryInStock}
          Invtlastupdated={inventory.InventoryLastUpdated}
        ></Inventory>
      );
    });

    //print all the nodes in the list
    return <tbody>{inventoryNodes}</tbody>;
  },
});

var Inventory = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.Invtid}</td>
        <td>{this.props.Invtproduct}</td>
        <td>{this.props.Invtinstock}</td>
        <td>{this.props.Invtlastupdated}</td>
      </tr>
    );
  },
});

var SelectList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (InvtProducts) {
      return (
        <option key={InvtProducts.ProductID} value={InvtProducts.ProductID}>
          {InvtProducts.ProductName}
        </option>
      );
    });
    return (
      <select name="Invtproduct" id="Invtproduct">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

ReactDOM.render(<InventoryBox />, document.getElementById("content"));

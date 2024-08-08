var InventoryBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadInventorysFromServer: function () {
    $.ajax({
      url: "/inventorys/getinvt",
      data: {
        inventoryid: inventoryid.value,
        inventoryproduct: invtproduct.value,
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
  updateSingleInvtFromServer: function (inventory) {
    $.ajax({
      url: "/inventorys/updatesingleinvt",
      dataType: "json",
      data: inventory,
      type: "POST",
      cache: false,
      success: function (upsingledata) {
        this.setState({ upsingledata: upsingledata });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
    window.location.reload(true);
  },
  componentDidMount: function () {
    this.loadInventorysFromServer();
    // setInterval(this.loadInventorysFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Update Inventorys</h1>
        <Inventoryform2 onInventorySubmit={this.loadInventorysFromServer} />
        <br />
        <div id="theresults">
          <div id="theleft">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>In Stock</th>
                </tr>
              </thead>
              <InventoryList data={this.state.data} />
            </table>
          </div>
          <div id="theright">
            <InventoryUpdateform
              onUpdateSubmit={this.updateSingleInvtFromServer}
            />
          </div>
        </div>
      </div>
    );
  },
});

var Inventoryform2 = React.createClass({
  getInitialState: function () {
    return {
      inventoryid: "",
      inventoryinstock: "",
      inventorylastupdated: "",
      data: [],
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  loadInvtProducts: function () {
    $.ajax({
      url: "/inventorys/getinvtproducts",
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
    var inventoryinstock = this.state.inventoryinstock.trim();
    var inventorylastupdated = this.state.inventorylastupdated.trim();
    var inventoryproduct = invtproduct.value;

    this.props.onInventorySubmit({
      inventoryid: inventoryid,
      inventoryinstock: inventoryinstock,
      inventorylastupdated: inventorylastupdated,
      inventoryproduct: inventoryproduct,
    });
  },
  handleChange: function (event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  },
  render: function () {
    return (
      <div>
        <div id="theform">
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
                  <th>In Stock</th>
                  <td>
                    <input
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
                <tr>
                  <th>Product</th>
                  <td>
                    <SelectList data={this.state.data} />
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" value="Search Inventory" />
          </form>
        </div>
        <div>
          <br />
          <form onSubmit={this.getInitialState}>
            <input type="submit" value="Clear Form" />
          </form>
        </div>
      </div>
    );
  },
});

var InventoryUpdateform = React.createClass({
  getInitialState: function () {
    return {
      upinventorykey: "",
      upinventoryid: "",
      upinventoryinstock: "",
      upinventorylastupdated: "",
      updata: [],
    };
  },
  handleUpOptionChange: function (e) {
    this.setState({
      upselectedOption: e.target.value,
    });
  },
  loadInvtProducts: function () {
    $.ajax({
      url: "/inventorys/getinvtproducts",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ updata: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadInvtProducts();
  },
  handleUpSubmit: function (e) {
    e.preventDefault();

    var upinventoryid = upinvtid.value;
    var upinventoryinstock = upinvtinstock.value;
    var upinventorylastupdated = upinvtlastupdated.value;
    var upinventoryproduct = upinvtproduct.value;

    this.props.onUpdateSubmit({
      upinventoryid: upinventoryid,
      upinventoryinstock: upinventoryinstock,
      upinventorylastupdated: upinventorylastupdated,
      upinventoryproduct: upinventoryproduct,
    });
  },
  handleUpChange: function (event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  },
  render: function () {
    return (
      <div>
        <div id="theform">
          <form onSubmit={this.handleUpSubmit}>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="upinvtid"
                      id="upinvtid"
                      value={this.state.upinvtid}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>In Stock</th>
                  <td>
                    <input
                      name="upinvtinstock"
                      id="upinvtinstock"
                      value={this.state.upinvtinstock}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Last Updated</th>
                  <td>
                    <input
                      type="date"
                      name="upinvtlastupdated"
                      id="upinvtlastupdated"
                      value={this.state.upinvtlastupdated}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Inventory Product</th>
                  <td>
                    <SelectUpdateList data={this.state.updata} />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="upinvtkey"
              id="upinvtkey"
              onChange={this.handleUpChange}
            />
            <input type="submit" value="Update Inventory" />
          </form>
          <form onSubmit={this.handleUpDelete}>
            <input type="submit" value="Delete Inventory" />
          </form>
        </div>
      </div>
    );
  },
});

var InventoryList = React.createClass({
  render: function () {
    var inventoryNodes = this.props.data.map(function (inventory) {
      return (
        <Inventory
          key={inventory.InventoryID}
          invtinstock={inventory.InventoryInStock}
          invtlastupdated={inventory.InventoryLastUpdated}
        ></Inventory>
      );
    });

    //print all the nodes in the list
    return <tbody>{inventoryNodes}</tbody>;
  },
});

var Inventory = React.createClass({
  getInitialState: function () {
    return {
      upinvtkey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var theupinvtkey = this.props.invtkey;

    this.loadSingleInvt(theupinvtkey);
  },
  loadSingleInvt: function (theupinvtkey) {
    $.ajax({
      url: "/inventorys/getsingleinvt",
      data: {
        upinvtkey: theupinvtkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populateInvt = this.state.singledata.map(function (inventory) {
          upinvtkey.value = theupinvtkey;
          upinvtid.value = inventory.InventoryID;
          upinvtinstock.value = inventory.InventoryInStock;
          upinvtlastupdated.value = inventory.InventoryLastUpdated;
          upinvtproduct.value = inventory.ProductID;
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  render: function () {
    return (
      <tr>
        <td>{this.props.invtid}</td>
        <td>{this.props.invtinstock}</td>
        <td>
          <form onSubmit={this.updateRecord}>
            <input type="submit" value="Update Record" />
          </form>
        </td>
      </tr>
    );
  },
});

var SelectList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (invtProducts) {
      return (
        <option key={invtProducts.ProductID} value={invtProducts.ProductID}>
          {invtProducts.ProductName}
        </option>
      );
    });
    return (
      <select name="invtproduct" id="invtproduct">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (invtProducts) {
      return (
        <option key={invtProducts.ProductID} value={invtProducts.ProductID}>
          {invtProducts.ProductName}
        </option>
      );
    });
    return (
      <select name="upinvtproduct" id="upinvtproduct">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

ReactDOM.render(<InventoryBox />, document.getElementById("content"));

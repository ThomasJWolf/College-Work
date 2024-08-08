var InventoryBox = React.createClass({
  getInitialState: function () {
    return { data: [], viewthepage: 0 };
  },
  loadAllowLogin: function () {
    $.ajax({
      url: "/users/getloggedin",
      dataType: "json",
      cache: false,
      success: function (datalog) {
        if (datalog && datalog.length > 0) {
          this.setState(
            {
              data: datalog,
              viewthepage: datalog[0].RoleID,
            },
            function () {
              console.log("Logged in:", this.state.viewthepage);
              if ([1, 2, 3, 6].includes(this.state.viewthepage)) {
                this.loadInventorysFromServer(); // Now only loads if the role is appropriate
              }
            }
          );
        }
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        console.log("Not Logged in:", this.state.viewthepage);
      }.bind(this),
    });
  },
  loadInventorysFromServer: function () {
    $.ajax({
      url: "/inventorys/getInvt",
      data: {
        twinventoryid: twinventoryid.value,
        twinventoryproduct: twInvtproduct.value,
        twinventoryinstock: twinventoryinstock.value,
        twinventorylastupdated: twinventorylastupdated.value,
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
    this.loadAllowLogin();
  },
  render: function () {
    console.log("View the page:", this.state.viewthepage);
    if (
      [1, 2, 3, 6].includes(this.state.viewthepage) &&
      this.state.viewthepage != 0
    ) {
      return (
        <div>
          <Inventoryform2 onInventorySubmit={this.loadInventorysFromServer} />
          <br />
            <InventoryList data={this.state.data} />
        </div>
      );
    } else if (this.state.viewthepage === 0) {
      return (
        <div>
          <p>Please Log In!</p>
          <a href="/backend">Go to Login</a>
        </div>
      );
    } else {
      return (
        <div>
          <p>You do not have permission to view this page.</p>
          <a href="/backend">Return to the Dashboard</a>
        </div>
      );
    }
  },
});

var Inventoryform2 = React.createClass({
  getInitialState: function () {
    return {
      twinventoryid: "",
      twdata: [],
      twinventoryinstock: "",
      twinventorylastupdated: "",
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
        this.setState({ twdata: data });
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

    var twinventoryid = this.state.twinventoryid.trim();
    var twinventoryproduct = twInvtproduct.value;
    var twinventoryinstock = this.state.twinventoryinstock.trim();
    var twinventorylastupdated = this.state.twinventorylastupdated.trim();

    this.props.onInventorySubmit({
      twinventoryid: twinventoryid,
      twinventoryproduct: twinventoryproduct,
      twinventoryinstock: twinventoryinstock,
      twinventorylastupdated: twinventorylastupdated,
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
        <h2>Search Inventorys</h2>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>
                <input
                  type="text"
                  name="twinventoryid"
                  id="twinventoryid"
                  value={this.state.twinventoryid}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Product</th>
              <td>
                <SelectList data={this.state.twdata} />
              </td>
            </tr>
            <tr>
              <th>In Stock</th>
              <td>
                <input
                  type="text"
                  name="twinventoryinstock"
                  id="twinventoryinstock"
                  value={this.state.twinventoryinstock}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Last Updated</th>
              <td>
                <input
                  type="date"
                  name="twinventorylastupdated"
                  id="twinventorylastupdated"
                  value={this.state.twinventorylastupdated}
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
    var inventoryNodes = this.props.data.map(function (twinventory) {
      //map the data to individual donations
      return (
        <Inventory
          key={twinventory.InventoryID}
          twInvtid={twinventory.InventoryID}
          twInvtproduct={twinventory.ProductName}
          twInvtinstock={twinventory.InventoryInStock}
          twInvtlastupdated={twinventory.InventoryLastUpdated}
        ></Inventory>
      );
    });

    //print all the nodes in the list
    return (
      <table className="listing-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>In Stock</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>{inventoryNodes}</tbody>
      </table>
    );
  },
});

var Inventory = React.createClass({
  render: function () {
    var dateOnly = this.props.twInvtlastupdated
      ? this.props.twInvtlastupdated.substring(0, 10)
      : "";
    var timeOnly = this.props.twInvtlastupdated
      ? this.props.twInvtlastupdated.substring(11, 19)
      : "";
    return (
      <tr>
        <td>{this.props.twInvtid}</td>
        <td>{this.props.twInvtproduct}</td>
        <td>{this.props.twInvtinstock}</td>
        <td>
          {dateOnly} at {timeOnly}
        </td>
      </tr>
    );
  },
});

var SelectList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twInvtProducts) {
      return (
        <option key={twInvtProducts.ProductID} value={twInvtProducts.ProductID}>
          {twInvtProducts.ProductName}
        </option>
      );
    });
    return (
      <select name="twInvtproduct" id="twInvtproduct">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

const App = () => (
  <div id="content">
    <InventoryBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

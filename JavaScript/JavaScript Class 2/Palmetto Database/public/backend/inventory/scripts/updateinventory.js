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
              if ([1, 2, 3].includes(this.state.viewthepage)) {
                this.loadInventoriesFromServer(); // Now only loads if the role is appropriate
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
  loadInventoriesFromServer: function () {
    $.ajax({
      url: "/inventorys/getinvt",
      data: {
        twinventoryid: twinventoryid.value,
        twinventoryproduct: twinvtproduct.value,
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
    this.loadAllowLogin();
  },
  render: function () {
    console.log("View the page:", this.state.viewthepage);
    if (
      [1, 2, 3].includes(this.state.viewthepage) &&
      this.state.viewthepage != 0
    ) {
      return (
        <div>
          <Inventoryform2 onInventorySubmit={this.loadInventoriesFromServer} />
          <br />
          <div id="theresults">
            <div id="theleft">
              <table className="listing-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>In Stock</th>
                    <th>Last Updated</th>
                    <th></th>
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
      twinventoryinstock: "",
      twinventorylastupdated: "",
      twdata: [],
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
    var twinventoryinstock = this.state.twinventoryinstock.trim();
    var twinventorylastupdated = this.state.twinventorylastupdated.trim();
    var twinventoryproduct = twinvtproduct.value;

    this.props.onInventorySubmit({
      twinventoryid: twinventoryid,
      twinventoryinstock: twinventoryinstock,
      twinventorylastupdated: twinventorylastupdated,
      twinventoryproduct: twinventoryproduct,
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
            <h2> Update Inventories</h2>
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
                  <th>In Stock</th>
                  <td>
                    <input
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
                <tr>
                  <th>Product</th>
                  <td>
                    <SelectList data={this.state.twdata} />
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" value="Search Inventory" />
          </form>
        </div>
        <div>
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
      twupinventoryid: "",
      twupinventoryinstock: "",
      twupdata: [],
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
        this.setState({ twupdata: data });
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

    var twupinventoryid = twupinvtid.value;
    var twupinventoryinstock = twupinvtinstock.value;
    var twupinventoryproduct = twupinvtproduct.value;

    this.props.onUpdateSubmit({
      twupinventoryid: twupinventoryid,
      twupinventoryinstock: twupinventoryinstock,
      twupinventoryproduct: twupinventoryproduct,
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
                  <th>In Stock</th>
                  <td>
                    <input
                      name="twupinvtinstock"
                      id="twupinvtinstock"
                      value={this.state.twupinvtinstock}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Inventory Product</th>
                  <td>
                    <SelectUpdateList data={this.state.twupdata} />
                  </td>
                </tr>
              </tbody>
            </table>
            <input
              type="hidden"
              name="twupinvtid"
              id="twupinvtid"
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
      if (!Array.isArray(this.props.data)) {
        // Handle the case where data is not an array
        console.log("Data is not an array");
        return null;
        
      }
    var inventoryNodes = this.props.data.map(function (twinventory) {
      return (
        <Inventory
          key={twinventory.InventoryID}
          twinvtid={twinventory.InventoryID}
          twinvtinstock={twinventory.InventoryInStock}
          twinvtlastupdated={twinventory.InventoryLastUpdated}
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
      twupinvtid: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var thetwupinvtid = this.props.twinvtid;

    this.loadSingleInvt(thetwupinvtid);
  },
  loadSingleInvt: function (thetwupinvtid) {
    $.ajax({
      url: "/inventorys/getsingleinvt",
      data: {
        twupinvtid: thetwupinvtid,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populateInvt = this.state.singledata.map(function (twinventory) {
          twupinvtid.value = thetwupinvtid;
          twupinvtinstock.value = twinventory.InventoryInStock;
          twupinvtproduct.value = twinventory.ProductID;
        });

        console.log(twupinvtproduct.value, twupinvtinstock.value, twupinvtid.value);
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  render: function () {

    var dateOnly = this.props.twinvtlastupdated
      ? this.props.twinvtlastupdated.substring(0, 10)
      : "";

    var timeOnly = this.props.twinvtlastupdated
      ? this.props.twinvtlastupdated.substring(11, 19)
      : "";
    

    var formattedDateTime = dateOnly + " " + timeOnly;
    return (
      <tr>
        <td>{this.props.twinvtid}</td>
        <td>{this.props.twinvtinstock}</td>
        <td>{formattedDateTime}</td>
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
      if (!Array.isArray(this.props.data)) {
        // Handle the case where data is not an array
        return null;
      }
    var optionNodes = this.props.data.map(function (twinvtProducts) {
      return (
        <option key={twinvtProducts.ProductID} value={twinvtProducts.ProductID}>
          {twinvtProducts.ProductName}
        </option>
      );
    });
    return (
      <select name="twinvtproduct" id="twinvtproduct">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateList = React.createClass({
  render: function () {
      if (!Array.isArray(this.props.data)) {
        // Handle the case where data is not an array
        return null;
      }
    var optionNodes = this.props.data.map(function (twinvtProducts) {
      return (
        <option key={twinvtProducts.ProductID} value={twinvtProducts.ProductID}>
          {twinvtProducts.ProductName}
        </option>
      );
    });
    return (
      <select name="utwpinvtproduct" id="twupinvtproduct">
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

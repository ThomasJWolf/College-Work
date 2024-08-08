var InventoryBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadInventorysFromServer: function () {
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
  updateSingleInvtFromServer: function (twinventory) {
    $.ajax({
      url: "/inventorys/updatesingleinvt",
      dataType: "json",
      data: twinventory,
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
          {/* <div id="theleft">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>In Stock</th>
                </tr>
              </thead>
              <InventoryList data={this.state.twdata} />
            </table>
          </div> */}
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
            <h2>Inventorys</h2>
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
      twupinventorykey: "",
      twupinventoryid: "",
      twupinventoryinstock: "",
      twupinventorylastupdated: "",
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
    var twupinventorylastupdated = twupinvtlastupdated.value;
    var twupinventoryproduct = twupinvtproduct.value;

    this.props.onUpdateSubmit({
      twupinventoryid: twupinventoryid,
      twupinventoryinstock: twupinventoryinstock,
      twupinventorylastupdated: twupinventorylastupdated,
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
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="twupinvtid"
                      id="twupinvtid"
                      value={this.state.twupinvtid}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
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
                  <th>Last Updated</th>
                  <td>
                    <input
                      type="date"
                      name="twupinvtlastupdated"
                      id="twupinvtlastupdated"
                      value={this.state.twupinvtlastupdated}
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
            <br />
            <input
              type="hidden"
              name="twupinvtkey"
              id="twupinvtkey"
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

// var InventoryList = React.createClass({
//   render: function () {
//     var inventoryNodes = this.props.data.map(function (twinventory) {
//       return (
//         <Inventory
//           key={twinventory.InventoryID}
//           twinvtinstock={twinventory.InventoryInStock}
//           twinvtlastupdated={twinventory.InventoryLastUpdated}
//         ></Inventory>
//       );
//     });

//     //print all the nodes in the list
//     return <tbody>{inventoryNodes}</tbody>;
//   },
// });

var Inventory = React.createClass({
  getInitialState: function () {
    return {
      twupinvtkey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var thetwupinvtkey = this.props.twinvtkey;

    this.loadSingleInvt(thetwupinvtkey);
  },
  loadSingleInvt: function (thetwupinvtkey) {
    $.ajax({
      url: "/inventorys/getsingleinvt",
      data: {
        twupinvtkey: thetwupinvtkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populateInvt = this.state.singledata.map(function (twinventory) {
          twupinvtkey.value = thetwupinvtkey;
          twupinvtid.value = twinventory.InventoryID;
          twupinvtinstock.value = twinventory.InventoryInStock;
          twupinvtlastupdated.value = twinventory.InventoryLastUpdated;
          twupinvtproduct.value = twinventory.ProductID;
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
        <td>{this.props.twinvtid}</td>
        <td>{this.props.twinvtinstock}</td>
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
    var optionNodes = this.props.data.map(function (twinvtProducts) {
      return (
        <option key={twinvtProducts.ProductID} value={twinvtProducts.ProductID}>
          {twinvtProducts.ProductName}
        </option>
      );
    });
    return (
      <select name="uptwinvtproduct" id="uptwinvtproduct">
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

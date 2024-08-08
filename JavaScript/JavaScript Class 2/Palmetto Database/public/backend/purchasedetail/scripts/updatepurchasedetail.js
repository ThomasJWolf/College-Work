var PurchaseDetailBox = React.createClass({
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
                this.loadPurchaseDetailsFromServer(); // Now only loads if the role is appropriate
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
  loadPurchaseDetailsFromServer: function () {
    $.ajax({
      url: "/purchasedetails/getprchdtl",
      data: {
        twpurchasedetailid: twpurchasedetailid.value,
        twpurchasedetailproduct: twprchdtlproduct.value,
        twpurchasedetailpurchase: twprchdtlpurchase.value,
        twpurchasedetailquantity: twprchdtlquantity.value,
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
  updateSinglePrchdtlFromServer: function (twpurchasedetail) {
    $.ajax({
      url: "/purchasedetails/updatesingleprchdtl",
      dataType: "json",
      data: twpurchasedetail,
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
          <PurchaseDetailform2
            onPurchaseDetailSubmit={this.loadPurchaseDetailsFromServer}/>
          <br />
          <div id="theresults">
            <div id="theleft">
              <table className="listing-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Quantity</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <PurchaseDetailList data={this.state.data} />
              </table>
            </div>
            <div id="theright">
              <PurchaseDetailUpdateform
                onUpdateSubmit={this.updateSinglePrchdtlFromServer}
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

var PurchaseDetailform2 = React.createClass({
  getInitialState: function () {
    return {
      twpurchasedetailid: "",
      twdataproduct: [],
      twdatapurchase: [],
      twpurchasedetailquantity: "",
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  loadPrchdtlProducts: function () {
    $.ajax({
      url: "/purchasedetails/getprchdtlproducts",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ twdataproduct: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  loadPrchdtlPurchases: function () {
    $.ajax({
      url: "/purchasedetails/getprchdtlpurchases",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ twdatapurchase: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadPrchdtlProducts();
    this.loadPrchdtlPurchases();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var twpurchasedetailid = this.state.twpurchasedetailid.trim();
    var twpurchasedetailproduct = twprchdtlproduct.value;
    var twpurchasedetailpurchase = twprchdtlpurchase.value;
    var twpurchasedetailquantity = twprchdtlquantity.value;

    this.props.onPurchaseDetailSubmit({
      twpurchasedetailid: twpurchasedetailid,
      twpurchasedetailproduct: twpurchasedetailproduct,
      twpurchasedetailpurchase: twpurchasedetailpurchase,
      twpurchasedetailquantity: twpurchasedetailquantity,
    });
  },
  handleChange: function (event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
        console.log(this.state);
  },
  render: function () {
    return (
      <div>
        <div id="theform">
          <form onSubmit={this.handleSubmit}>
            <h2>Update Purchase Details</h2>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="twpurchasedetailid"
                      id="twpurchasedetailid"
                      value={this.state.purchasedetailid}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Product</th>
                  <td>
                    <SelectListProduct data={this.state.twdataproduct} />
                  </td>
                </tr>
                <tr>
                  <th>Purchase</th>
                  <td>
                    <SelectListPurchase data={this.state.twdatapurchase} />
                  </td>
                </tr>
                <tr>
                  <th>Quantity</th>
                  <td>
                    <input
                      type="text"
                      name="twprchdtlquantity"
                      id="twprchdtlquantity"
                      value={this.state.twprchdtlquantity}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" value="Search PurchaseDetail" />
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

var PurchaseDetailUpdateform = React.createClass({
  getInitialState: function () {
    return {
      twuppurchasedetailid: "",
      twupdataproduct: [],
      twupdatapurchase: [],
      twuppurchasedetailquantity: "",
    };
  },
  handleUpOptionChange: function (e) {
    this.setState({
      upselectedOption: e.target.value,
    });
  },
  loadPrchdtlProducts: function () {
    $.ajax({
      url: "/purchasedetails/getprchdtlproducts",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ twupdataproduct: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  loadPrchdtlPurchases: function () {
    $.ajax({
      url: "/purchasedetails/getprchdtlpurchases",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ twupdatapurchase: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadPrchdtlProducts();
    this.loadPrchdtlPurchases();
  },
  handleUpSubmit: function (e) {
    e.preventDefault();

    var twuppurchasedetailid = twupprchdtlid.value;
    var twuppurchasedetailproduct = twupprchdtlproduct.value;
    var twuppurchasedetailpurchase = twupprchdtlpurchase.value;
    var twuppurchasedetailquantity = twupprchdtlquantity.value;

    this.props.onUpdateSubmit({
      twuppurchasedetailid: twuppurchasedetailid,
      twuppurchasedetailproduct: twuppurchasedetailproduct,
      twuppurchasedetailpurchase: twuppurchasedetailpurchase,
      twuppurchasedetailquantity: twuppurchasedetailquantity,
    });
  },
  handleUpChange: function (event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
        console.log(this.state);

  },
  render: function () {
    return (
      <div>
        <div id="theform">
          <form onSubmit={this.handleUpSubmit}>
            <table>
              <tbody>
                <tr>
                  <input
                    type="hidden"
                    name="twupprchdtlid"
                    id="twupprchdtlid"
                    onChange={this.handleUpChange}
                  />
                </tr>
                <tr>
                  <th>Product</th>
                  <td>
                    <SelectUpdateListProduct data={this.state.twupdataproduct} />
                  </td>
                </tr>
                <tr>
                  <th>Purchase</th>
                  <td>
                    <SelectUpdateListPurchase data={this.state.twupdatapurchase} />
                  </td>
                </tr>
                <tr>
                  <th>Quantity</th>
                  <td>
                    <input
                      type="text"
                      name="twupprchdtlquantity"
                      id="twupprchdtlquantity"
                      value={this.state.twupprchdtlquantity}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="twupprchdtlkey"
              id="twupprchdtlkey"
              onChange={this.handleUpChange}
            />
            <input type="submit" value="Update PurchaseDetail" />
          </form>
          <form onSubmit={this.handleUpDelete}>
            <input type="submit" value="Delete PurchaseDetail" />
          </form>
        </div>
      </div>
    );
  },
});

var PurchaseDetailList = React.createClass({
  render: function () {
    var purchasedetailNodes = this.props.data.map(function (twpurchasedetail) {
      return (
        <PurchaseDetail
          key={twpurchasedetail.PurchaseDetailID}
          twprchdtlid={twpurchasedetail.PurchaseDetailID}
          twprchdtlname={twpurchasedetail.ProductName}
          twprchdtlprice={twpurchasedetail.PurchaseName}
          twprchdtlquantity={twpurchasedetail.PurchaseQuantity}
        ></PurchaseDetail>
      );
    });

    //print all the nodes in the list
    return <tbody>{purchasedetailNodes}</tbody>;
  },
});

var PurchaseDetail = React.createClass({
  getInitialState: function () {
    return {
      twupprchdtlkey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var thetwupprchdtlkey = this.props.twprchdtlid;

    this.loadSinglePrchdtl(thetwupprchdtlkey);
  },
  loadSinglePrchdtl: function (thetwupprchdtlkey) {
    $.ajax({
      url: "/purchasedetails/getsingleprchdtl",
      data: {
        twupprchdtlkey: thetwupprchdtlkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populatePrchdtl = this.state.singledata.map(function (twpurchasedetail) {
          twupprchdtlkey.value = thetwupprchdtlkey;
          twupprchdtlid.value = twpurchasedetail.PurchaseDetailID;
          twupprchdtlproduct.value = twpurchasedetail.ProductID;
          twupprchdtlpurchase.value = twpurchasedetail.PurchaseID;
          twupprchdtlquantity.value = twpurchasedetail.PurchaseQuantity;
        });

        console.log(
          twupprchdtlid.value,
          twupprchdtlproduct.value,
          twupprchdtlpurchase.value,
          twupprchdtlquantity.value
        );
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        console.log("TEST");
      }.bind(this),
    });
  },

  render: function () {
    return (
      <tr>
        <td>{this.props.twprchdtlid}</td>
        <td>{this.props.twprchdtlquantity}</td>
        <td>
          <form onSubmit={this.updateRecord}>
            <input type="submit" value="Update Record" />
          </form>
        </td>
      </tr>
    );
  },
});

var SelectListPurchase = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twprchdtlPurchases) {
      return (
        <option key={twprchdtlPurchases.PurchaseID} value={twprchdtlPurchases.PurchaseID}>
          {twprchdtlPurchases.PurchaseID}
        </option>
      );
    });
    return (
      <select name="twprchdtlpurchase" id="twprchdtlpurchase">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectListProduct = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twprchdtlProducts) {
      return (
        <option key={twprchdtlProducts.ProductID} value={twprchdtlProducts.ProductID}>
          {twprchdtlProducts.ProductName}
        </option>
      );
    });
    return (
      <select name="twprchdtlproduct" id="twprchdtlproduct">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListPurchase = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twprchdtlPurchases) {
      return (
        <option key={twprchdtlPurchases.PurchaseID} value={twprchdtlPurchases.PurchaseID}>
          {twprchdtlPurchases.PurchaseID}
        </option>
      );
    });
    return (
      <select name="twupprchdtlpurchase" id="twupprchdtlpurchase">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListProduct = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twprchdtlProducts) {
      return (
        <option key={twprchdtlProducts.ProductID} value={twprchdtlProducts.ProductID}>
          {twprchdtlProducts.ProductName}
        </option>
      );
    });
    return (
      <select name="twupprchdtlproduct" id="twupprchdtlproduct">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

const App = () => (
  <div id="content">
    <PurchaseDetailBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

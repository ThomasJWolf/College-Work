var PurchaseDetailBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadPurchaseDetailsFromServer: function () {
    $.ajax({
      url: "/purchasedetails/getprchdtl",
      data: {
        twpurchasedetailid: twpurchasedetailid.value,
        twpurchasedetailproduct: prchdtlproduct.value,
        twpurchasedetailpurchace: prchdtlpurchace.value,
        twpurchasedetailquantity: prchdtlquantity.value,
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
    this.loadPurchaseDetailsFromServer();
    // setInterval(this.loadPurchaseDetailsFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Update Purchase Details</h1>
        <PurchaseDetailform2
          onPurchaseDetailSubmit={this.loadPurchaseDetailsFromServer}
        />
        <br />
        <div id="theresults">
          <div id="theleft">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Quantity</th>
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
  },
});

var PurchaseDetailform2 = React.createClass({
  getInitialState: function () {
    return {
      twpurchasedetailid: "",
      twdataproduct: [],
      twdatapurchace: [],
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
  loadPrchdtlPurchaces: function () {
    $.ajax({
      url: "/purchasedetails/getprchdtlpurchaces",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ twdatapurchace: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadPrchdtlProducts();
    this.loadPrchdtlPurchaces();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var twpurchasedetailid = this.state.twpurchasedetailid.trim();
    var twpurchasedetailproduct = prchdtlproduct.value;
    var twpurchasedetailpurchace = prchdtlpurchace.value;
    var twpurchasedetailquantity = prchdtlquantity.value;

    this.props.onPurchaseDetailSubmit({
      twpurchasedetailid: twpurchasedetailid,
      twpurchasedetailproduct: twpurchasedetailproduct,
      twpurchasedetailpurchace: twpurchasedetailpurchace,
      twpurchasedetailquantity: twpurchasedetailquantity,
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
            <h2>Purchase Details</h2>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="twpurchasedetailid"
                      id="twpurchasedetailid"
                      value={this.state.twpurchasedetailid}
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
                  <th>Purchace</th>
                  <td>
                    <SelectListPurchace data={this.state.twdatapurchace} />
                  </td>
                </tr>
                <tr>
                  <th>Quantity</th>
                  <td>
                    <input
                      type="text"
                      name="prchdtlquantity"
                      id="prchdtlquantity"
                      value={this.state.prchdtlquantity}
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
      twupdatapurchace: [],
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
  loadPrchdtlPurchaces: function () {
    $.ajax({
      url: "/purchasedetails/getprchdtlpurchaces",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ twupdatapurchace: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadPrchdtlProducts();
    this.loadPrchdtlPurchaces();
  },
  handleUpSubmit: function (e) {
    e.preventDefault();

    var twuppurchasedetailid = upprchdtlid.value;
    var twuppurchasedetailproduct = upprchdtlproduct.value;
    var twuppurchasedetailpurchace = upprchdtlpurchace.value;
    var twuppurchasedetailquantity = upprchdtlquantity.value;

    this.props.onUpdateSubmit({
      twuppurchasedetailid: twuppurchasedetailid,
      twuppurchasedetailproduct: twuppurchasedetailproduct,
      twuppurchasedetailpurchace: twuppurchasedetailpurchace,
      twuppurchasedetailquantity: twuppurchasedetailquantity,
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
                      name="upprchdtlid"
                      id="upprchdtlid"
                      value={this.state.upprchdtlid}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Product</th>
                  <td>
                    <SelectUpdateListProduct
                      data={this.state.twupdataproduct}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Purchace</th>
                  <td>
                    <SelectUpdateListPurchace
                      data={this.state.twupdatapurchace}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Quantity</th>
                  <td>
                    <input
                      type="text"
                      name="upprchdtlquantity"
                      id="upprchdtlquantity"
                      value={this.state.upprchdtlquantity}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="upprchdtlkey"
              id="upprchdtlkey"
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
          prchdtlid={twpurchasedetail.PurchaseDetailID}
          prchdtlname={twpurchasedetail.ProductName}
          prchdtlprice={twpurchasedetail.PurchaceName}
          prchdtlquantity={twpurchasedetail.PurchaseDetailQuantity}
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
      upprchdtlkey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var theupprchdtlkey = this.props.prchdtlkey;

    this.loadSinglePrchdtl(theupprchdtlkey);
  },
  loadSinglePrchdtl: function (theupprchdtlkey) {
    $.ajax({
      url: "/purchasedetails/getsingleprchdtl",
      data: {
        upprchdtlkey: theupprchdtlkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populatePrchdtl = this.state.singledata.map(function (
          twpurchasedetail
        ) {
          upprchdtlkey.value = theupprchdtlkey;
          upprchdtlid.value = twpurchasedetail.PurchaseDetailID;
          upprchdtlproduct.value = twpurchasedetail.ProductID;
          upprchdtlpurchace.value = twpurchasedetail.PurchaceID;
          upprchdtlquantity.value = twpurchasedetail.PurchaseDetailQuantity;
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
        <td>{this.props.prchdtlid}</td>
        <td>{this.props.prchdtlproduct}</td>
        <td>{this.props.prchdtlpurchace}</td>
        <td>{this.props.prchdtlquantity}</td>
        <td>
          <form onSubmit={this.updateRecord}>
            <input type="submit" value="Update Record" />
          </form>
        </td>
      </tr>
    );
  },
});

var SelectListPurchace = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (prchdtlPurchaces) {
      return (
        <option
          key={prchdtlPurchaces.PurchaceID}
          value={prchdtlPurchaces.PurchaceID}
        >
          {prchdtlPurchaces.PurchaceName}
        </option>
      );
    });
    return (
      <select name="prchdtlpurchace" id="prchdtlpurchace">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectListProduct = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (prchdtlProducts) {
      return (
        <option
          key={prchdtlProducts.ProductID}
          value={prchdtlProducts.ProductID}
        >
          {prchdtlProducts.ProductName}
        </option>
      );
    });
    return (
      <select name="prchdtlproduct" id="prchdtlproduct">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListPurchace = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (prchdtlPurchaces) {
      return (
        <option
          key={prchdtlPurchaces.PurchaceID}
          value={prchdtlPurchaces.PurchaceID}
        >
          {prchdtlPurchaces.PurchaceName}
        </option>
      );
    });
    return (
      <select name="upprchdtlpurchace" id="upprchdtlpurchace">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListProduct = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (prchdtlProducts) {
      return (
        <option
          key={prchdtlProducts.ProductID}
          value={prchdtlProducts.ProductID}
        >
          {prchdtlProducts.ProductName}
        </option>
      );
    });
    return (
      <select name="upprchdtlproduct" id="upprchdtlproduct">
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

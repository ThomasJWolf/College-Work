var PurchaseDetailBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadPurchaseDetailsFromServer: function () {
    $.ajax({
      url: "/purchasedetails/getprchdtl",
      data: {
        twpurchasedetailid: twpurchasedetailid.value,
        twpurchasedetailquantity: twpurchasedetailquantity.value,
        twpurchasedetailproduct: twprchdtlproduct.value,
        twpurchasedetailpurchase: twprchdtlpurchase.value,
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
    this.loadPurchaseDetailsFromServer();
    // setInterval(this.loatwprchdtlquantitydPurchaseDetailsFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <PurchaseDetailform2
          onPurchaseDetailSubmit={this.loadPurchaseDetailsFromServer}
        />
        <br />
        <table>
          <PurchaseDetailList data={this.state.data} />
        </table>
      </div>
    );
  },
});

var PurchaseDetailform2 = React.createClass({
  getInitialState: function () {
    return {
      twpurchasedetailid: "",
      twpurchasedetailquantity: "",
      twdataproduct: [],
      twdatapurchase: [],
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
    var twpurchasedetailquantity = this.state.twpurchasedetailquantity.trim();
    var twpurchasedetailproduct = twprchdtlproduct.value;
    var twpurchasedetailpurchase = twprchdtlpurchase.value;

    this.props.onPurchaseDetailSubmit({
      twpurchasedetailid: twpurchasedetailid,
      twpurchasedetailquantity: twpurchasedetailquantity,
      twpurchasedetailproduct: twpurchasedetailproduct,
      twpurchasedetailpurchase: twpurchasedetailpurchase,
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
        <h2>Search Purchase Details</h2>
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
              <th>Quantity</th>
              <td>
                <input
                  type="text"
                  name="twpurchasedetailquantity"
                  id="twpurchasedetailquantity"
                  value={this.state.twpurchasedetailquantity}
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
          </tbody>
        </table>
        <input type="submit" value="Search Purchase Detail" />
      </form>
    );
  },
});

var PurchaseDetailList = React.createClass({
  render: function () {
    var purchasedetailNodes = this.props.data.map(function (twpurchasedetail) {
      //map the data to individual donations
      return (
        <PurchaseDetail
          key={twpurchasedetail.PurchaseDetailID}
          twprchdtlid={twpurchasedetail.PurchaseDetailID}
          twprchdtlquantity={twpurchasedetail.PurchaseQuantity}
          twprchdtlproduct={twpurchasedetail.ProductName}
          twprchdtlpurchase={twpurchasedetail.PurchaseID}
        ></PurchaseDetail>
      );
    });

    //print all the nodes in the list
    return (
      <table className="listing-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Quantity</th>
            <th>Product</th>
            <th>Purchase ID</th>
          </tr>
        </thead>
        <tbody>{purchasedetailNodes}</tbody>
      </table>
    );
  },
});

var PurchaseDetail = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.twprchdtlid}</td>
        <td>{this.props.twprchdtlquantity}</td>
        <td>{this.props.twprchdtlproduct}</td>
        <td>{this.props.twprchdtlpurchase}</td>
      </tr>
    );
  },
});

var SelectListProduct = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twprchdtlProducts) {
      return (
        <option
          key={twprchdtlProducts.ProductID}
          value={twprchdtlProducts.ProductID}
        >
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

var SelectListPurchase = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twprchdtlPurchases) {
      return (
        <option
          key={twprchdtlPurchases.PurchaseID}
          value={twprchdtlPurchases.PurchaseID}
        >
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

const App = () => (
  <div id="content">
    <PurchaseDetailBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

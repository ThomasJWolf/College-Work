var PurchaseDetailBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadPurchaseDetailsFromServer: function () {
    $.ajax({
      url: "/purchasedetails/getprchdtl",
      data: {
        purchasedetailid: purchasedetailid.value,
        purchasedetailquantity: prchdtlquantity.value,
        purchasedetailproduct: prchdtlproduct.value,
        purchasedetailpurchase: prchdtlpurchase.value,
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
    // setInterval(this.loadPurchaseDetailsFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Search PurchaseDetails</h1>
        <PurchaseDetailform2
          onPurchaseDetailSubmit={this.loadPurchaseDetailsFromServer}
        />
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Quantity</th>
              <th>Product</th>
              <th>Purchase</th>
            </tr>
          </thead>
          <PurchaseDetailList data={this.state.data} />
        </table>
      </div>
    );
  },
});

var PurchaseDetailform2 = React.createClass({
  getInitialState: function () {
    return {
      purchasedetailid: "",
      purchasedetailquantity: "",
      dataproduct: [],
      datapurchase: [],
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
        this.setState({ dataproduct: data });
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
        this.setState({ datapurchase: data });
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

    var purchasedetailid = this.state.purchasedetailid.trim();
    var purchasedetailquantity = this.state.purchasedetailquantity.trim();
    var purchasedetailproduct = prchdtlproduct.value;
    var purchasedetailpurchase = prchdtlpurchase.value;

    this.props.onPurchaseDetailSubmit({
      purchasedetailid: purchasedetailid,
      purchasedetailquantity: purchasedetailquantity,
      purchasedetailproduct: purchasedetailproduct,
      purchasedetailpurchase: purchasedetailpurchase,
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
        <h2>PurchaseDetails</h2>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>
                <input
                  type="text"
                  name="purchasedetailid"
                  id="purchasedetailid"
                  value={this.state.purchasedetailid}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>
                <input
                  type="text"
                  name="purchasedetailquantity"
                  id="purchasedetailquantity"
                  value={this.state.purchasedetailquantity}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Product</th>
              <td>
                <SelectListProduct data={this.state.dataproduct} />
              </td>
            </tr>
            <tr>
              <th>Purchase</th>
              <td>
                <SelectListPurchase data={this.state.datapurchase} />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Search PurchaseDetail" />
      </form>
    );
  },
});

var PurchaseDetailList = React.createClass({
  render: function () {
    var purchasedetailNodes = this.props.data.map(function (purchasedetail) {
      //map the data to individual donations
      return (
        <PurchaseDetail
          key={purchasedetail.PurchaseDetailID}
          prchdtlid={purchasedetail.PurchaseDetailID}
          prchdtlquantity={purchasedetail.Quantity}
          prchdtlproduct={purchasedetail.ProductName}
          prchdtlpurchase={purchasedetail.PurchaseName}
        ></PurchaseDetail>
      );
    });

    //print all the nodes in the list
    return <tbody>{purchasedetailNodes}</tbody>;
  },
});

var PurchaseDetail = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.prchdtlid}</td>
        <td>{this.props.prchdtlquantity}</td>
        <td>{this.props.prchdtlproduct}</td>
        <td>{this.props.prchdtlpurchase}</td>
      </tr>
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

var SelectListPurchase = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (prchdtlPurchases) {
      return (
        <option
          key={prchdtlPurchases.PurchaseID}
          value={prchdtlPurchases.PurchaseID}
        >
          {prchdtlPurchases.PurchaseName}
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

ReactDOM.render(<PurchaseDetailBox />, document.getElementById("content"));

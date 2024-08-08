var ProductBox = React.createClass({
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
                this.loadProductsFromServer(); // Now only loads if the role is appropriate
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
  loadProductsFromServer: function () {
    $.ajax({
      url: "/products/getprod",
      data: {
        twproductid: twproductid.value,
        twproductname: twproductname.value,
        twproductprice: twproductprice.value,
        twproductcategory: twprodcategory.value,
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
  updateSingleProdFromServer: function (product) {
    $.ajax({
      url: "/products/updatesingleprod",
      dataType: "json",
      data: product,
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
          <Productform2 onProductSubmit={this.loadProductsFromServer} />
          <br />
          <div id="theresults">
            <div id="theleft">
              <table className="listing-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <ProductList data={this.state.data} />
              </table>
            </div>
            <div id="theright">
              <ProductUpdateform
                onUpdateSubmit={this.updateSingleProdFromServer}
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

var Productform2 = React.createClass({
  getInitialState: function () {
    return {
      twproductid: "",
      twproductname: "",
      twproductprice: "",
      twdata: [],
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  loadProdCategorys: function () {
    $.ajax({
      url: "/products/getprodcategorys",
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
    this.loadProdCategorys();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var twproductid = this.state.twproductid.trim();
    var twproductname = this.state.twproductname.trim();
    var twproductprice = this.state.twproductprice.trim();
    var twproductcategory = twprodcategory.value;

    this.props.onProductSubmit({
      twproductid: twproductid,
      twproductname: twproductname,
      twproductprice: twproductprice,
      twproductcategory: twproductcategory,
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
            <h2>Update Products</h2>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="twproductid"
                      id="twproductid"
                      value={this.state.twproductid}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>
                    <input
                      name="twproductname"
                      id="twproductname"
                      value={this.state.twproductname}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>
                    <input
                      name="twproductprice"
                      id="twproductprice"
                      value={this.state.twproductprice}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>
                    <SelectList data={this.state.twdata} />
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" value="Search Product" />
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

var ProductUpdateform = React.createClass({
  getInitialState: function () {
    return {
      twupproductid: "",
      twupproductname: "",
      twupproductprice: "",
      twupdata: [],
    };
  },
  handleUpOptionChange: function (e) {
    this.setState({
      upselectedOption: e.target.value,
    });
  },
  loadProdCategorys: function () {
    $.ajax({
      url: "/products/getprodcategorys",
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
    this.loadProdCategorys();
  },
  handleUpSubmit: function (e) {
    e.preventDefault();

    var twupproductid = twupprodid.value;
    var twupproductname = twupprodname.value;
    var twupproductprice = twupprodprice.value;
    var twupproductcategory = twupprodcategory.value;

    this.props.onUpdateSubmit({
      twupproductid: twupproductid,
      twupproductname: twupproductname,
      twupproductprice: twupproductprice,
      twupproductcategory: twupproductcategory,
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
                    name="twupprodid"
                    id="twupprodid"
                    onChange={this.handleUpChange}
                  />
                </tr>
                <tr>
                  <th>Name</th>
                  <td>
                    <input
                      name="twupprodname"
                      id="twupprodname"
                      value={this.state.twupprodname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>
                    <input
                      name="twupprodprice"
                      id="twupprodprice"
                      value={this.state.twupprodprice}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Product Category</th>
                  <td>
                    <SelectUpdateList data={this.state.twupdata} />
                  </td>
                </tr>
              </tbody>
            </table>
            <input
              type="hidden"
              name="twupprodkey"
              id="twupprodkey"
              onChange={this.handleUpChange}
            />
            <input type="submit" value="Update Product" />
          </form>
          <form onSubmit={this.handleUpDelete}>
            <input type="submit" value="Delete Product" />
          </form>
        </div>
      </div>
    );
  },
});

var ProductList = React.createClass({
  render: function () {
    var productNodes = this.props.data.map(function (twproduct) {
      return (
        <Product
          key={twproduct.ProductID}
          twprodid={twproduct.ProductID}
          twprodname={twproduct.ProductName}
          twprodprice={twproduct.ProductPrice}
          twprodcategory={twproduct.CategoryID}
        ></Product>
      );
    });

    //print all the nodes in the list
    return <tbody>{productNodes}</tbody>;
  },
});

var Product = React.createClass({
  getInitialState: function () {
    return {
      twupprodkey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var thetwupprodkey = this.props.twprodid;

    this.loadSingleProd(thetwupprodkey);
  },
  loadSingleProd: function (thetwupprodkey) {
    $.ajax({
      url: "/products/getsingleprod",
      data: {
        twupprodkey: thetwupprodkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populateProd = this.state.singledata.map(function (twproduct) {
          twupprodkey.value = thetwupprodkey;
          twupprodid.value = twproduct.ProductID;
          twupprodname.value = twproduct.ProductName;
          twupprodprice.value = twproduct.ProductPrice;
          twupprodcategory.value = twproduct.CategoryID;
        });

        console.log(
          twupprodid.value,
          twupprodname.value,
          twupprodprice.value,
          twupprodcategory.value
        );
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  render: function () {
    return (
      <tr>
        <td>{this.props.twprodid}</td>
        <td>{this.props.twprodname}</td>
        <td>{this.props.twprodprice}</td>
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
    var optionNodes = this.props.data.map(function (twprodCategorys) {
      return (
        <option
          key={twprodCategorys.CategoryID}
          value={twprodCategorys.CategoryID}
        >
          {twprodCategorys.CategoryName}
        </option>
      );
    });
    return (
      <select name="twprodcategory" id="twprodcategory">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twprodCategorys) {
      return (
        <option
          key={twprodCategorys.CategoryID}
          value={twprodCategorys.CategoryID}
        >
          {twprodCategorys.CategoryName}
        </option>
      );
    });
    return (
      <select name="twupprodcategory" id="twupprodcategory">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

const App = () => (
  <div id="content">
    <ProductBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

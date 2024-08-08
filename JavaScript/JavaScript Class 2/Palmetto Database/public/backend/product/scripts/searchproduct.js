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
              if ([1, 2, 3, 6].includes(this.state.viewthepage)) {
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
          <Productform2 onProductSubmit={this.loadProductsFromServer} />
          <br />
            <ProductList data={this.state.data} />
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
      <form onSubmit={this.handleSubmit}>
        <h2>Search Products</h2>
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
    );
  },
});

var ProductList = React.createClass({
  render: function () {
    var productNodes = this.props.data.map(function (twproduct) {
      //map the data to individual donations
      return (
        <Product
          key={twproduct.ProductID}
          twprodid={twproduct.ProductID}
          twprodname={twproduct.ProductName}
          twprodprice={twproduct.ProductPrice}
          twprodcategory={twproduct.CategoryName}
        ></Product>
      );
    });

    //print all the nodes in the list
    return (
      <table className="listing-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{productNodes}</tbody>
      </table>
    );
  },
});


var Product = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.twprodid}</td>
        <td>{this.props.twprodname}</td>
        <td>{this.props.twprodprice}</td>
        <td>{this.props.twprodcategory}</td>
      </tr>
    );
  },
});

var SelectList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twprodCategorys) {
      return (
        <option key={twprodCategorys.CategoryID} value={twprodCategorys.CategoryID}>
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


const App = () => (
  <div id="content">
    <ProductBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

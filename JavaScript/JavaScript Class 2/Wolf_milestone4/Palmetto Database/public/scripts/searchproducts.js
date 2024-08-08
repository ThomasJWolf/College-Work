var ProductBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
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
    this.loadProductsFromServer();
    // setInterval(this.loadProductsFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <Productform2 onProductSubmit={this.loadProductsFromServer} />
        <br />
        <table>
          <ProductList data={this.state.data} />
        </table>
      </div>
    );
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
const Navigation = () => (
  <nav
    id="mainNav"
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
    }}
  >
    <div className="nav-links left">
      <a href="index.html">Home</a>
      <a href="aboutus.html">About Us</a>
    </div>
    <div className="logo">
      <img src="../images/PalmettoLogoNav.png" alt="Logo" />
    </div>
    <div className="nav-links right">
      <a href="merchandise.html">Merchandise</a>
      <a href="bookteetimes.html">Book Tee Times</a>
    </div>
  </nav>
);

const Footer = () => (
  <footer
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      background: "rgb(49, 80, 88)",
      color: "#ffffff",
      padding: "20px 0",
    }}
  >
    <div className="footer-section">
      <h2>Sign up to become a Palmetto Golf player today!</h2>
      <div style={{ display: "flex" }}>
        <div
          className="footer-contact"
          style={{
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
          }}
        >
          <p className="footer-contact-title">Address:</p>
          <p>
            1500 48th Avenue North,
            <br />
            Myrtle Beach, SC 29577
          </p>
          <p className="footer-contact-title">Phone:</p>
          <p>843-742-GOLF</p>
        </div>
        <div
          className="footer-logo"
          style={{ border: "1px solid white", paddingTop: "30px" }}
        >
          <img
            src="../images/PalmettoLogo.png"
            alt="Palmetto Logo"
            style={{ maxWidth: "100px" }}
          />
          <p>For beginners and professionals alike...</p>
        </div>
        <div
          className="footer-debug"
          style={{
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
          }}
        >
          <h3>This site is unfinished!</h3>
          <p>
            For debugging purposes
            <br />
            click{" "}
            <a
              href="backend/home.html"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              here
            </a>{" "}
            to access the backend.{" "}
          </p>
        </div>
      </div>
    </div>
  </footer>
);
const App = () => (
  <div id="app">
    <Navigation />
    <ProductBox />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

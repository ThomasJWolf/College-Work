var ProductBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadProductsFromServer: function () {
    console.log(emailervalue);
    $.ajax({
      url: "/products/getprod",
      data: {
        productid: productid.value,
        productname: productname.value,
        productprice: productprice.value,
        productcategory: prodcategory.value,
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
        <h1>Search Products</h1>
        <Productform2 onProductSubmit={this.loadProductsFromServer} />
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <ProductList data={this.state.data} />
        </table>
      </div>
    );
  },
});

var Productform2 = React.createClass({
  getInitialState: function () {
    return {
      productid: "",
      productname: "",
      productprice: "",
      data: [],
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
        this.setState({ data: data });
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

    var productid = this.state.productid.trim();
    var productname = this.state.productname.trim();
    var productprice = this.state.productprice.trim();
    var productcategory = prodcategory.value;

    this.props.onProductSubmit({
      productid: productid,
      productname: productname,
      productprice: productprice,
      productcategory: productcategory,
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
        <h2>Products</h2>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>
                <input
                  type="text"
                  name="productid"
                  id="productid"
                  value={this.state.productid}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Name</th>
              <td>
                <input
                  name="productname"
                  id="productname"
                  value={this.state.productname}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Price</th>
              <td>
                <input
                  name="productprice"
                  id="productprice"
                  value={this.state.productprice}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Category</th>
              <td>
                <SelectList data={this.state.data} />
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
    var productNodes = this.props.data.map(function (product) {
      //map the data to individual donations
      return (
        <Product
          key={product.ProductID}
          prodid={product.ProductID}
          prodname={product.ProductName}
          prodprice={product.ProductPrice}
          prodcategory={product.CategoryName}
        ></Product>
      );
    });

    //print all the nodes in the list
    return <tbody>{productNodes}</tbody>;
  },
});

var Product = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.prodid}</td>
        <td>{this.props.prodname}</td>
        <td>{this.props.prodprice}</td>
        <td>{this.props.prodcategory}</td>
      </tr>
    );
  },
});

var SelectList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (prodCategorys) {
      return (
        <option key={prodCategorys.CategoryID} value={prodCategorys.CategoryID}>
          {prodCategorys.CategoryName}
        </option>
      );
    });
    return (
      <select name="prodcategory" id="prodcategory">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

ReactDOM.render(<ProductBox />, document.getElementById("content"));

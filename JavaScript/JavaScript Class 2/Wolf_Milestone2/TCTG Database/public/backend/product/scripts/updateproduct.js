var ProductBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadProductsFromServer: function () {
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
    this.loadProductsFromServer();
    // setInterval(this.loadProductsFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Update Products</h1>
        <Productform2 onProductSubmit={this.loadProductsFromServer} />
        <br />
        <div id="theresults">
          <div id="theleft">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
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
      <div>
        <div id="theform">
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

var ProductUpdateform = React.createClass({
  getInitialState: function () {
    return {
      upprodid: "",
      upprodname: "",
      upprodprice: "",
      updata: [],
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
        this.setState({ updata: data });
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

    var upproductid = upprodid.value;
    var upproductname = upprodname.value;
    var upproductprice = upprodprice.value;
    var upproductcategory = upprodcategory.value;

    this.props.onUpdateSubmit({
      upproductid: upproductid,
      upproductname: upproductname,
      upproductprice: upproductprice,
      upproductcategory: upproductcategory,
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
                      name="upprodid"
                      id="upprodid"
                      value={this.state.upprodid}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>
                    <input
                      name="upprodname"
                      id="upprodname"
                      value={this.state.upprodname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>
                    <input
                      name="upprodprice"
                      id="upprodprice"
                      value={this.state.upprodprice}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Product Category</th>
                  <td>
                    <SelectUpdateList data={this.state.updata} />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="upprodkey"
              id="upprodkey"
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
    var productNodes = this.props.data.map(function (product) {
      return (
        <Product
          key={product.ProductID}
          prodid={product.ProductID}
          prodname={product.ProductName}
          prodprice={product.ProductPrice}
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
      upprodkey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var theupprodkey = this.props.prodkey;

    this.loadSingleProd(theupprodkey);
  },
  loadSingleProd: function (theupprodkey) {
    $.ajax({
      url: "/products/getsingleprod",
      data: {
        upprodkey: theupprodkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populateProd = this.state.singledata.map(function (product) {
          upprodkey.value = theupprodkey;
          upprodid.value = product.ProductID;
          upprodname.value = product.ProductName;
          upprodprice.value = product.ProductPrice;
          upprodcategory.value = product.CategoryID;
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
        <td>{this.props.prodid}</td>
        <td>{this.props.prodname}</td>
        <td>{this.props.prodprice}</td>
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

var SelectUpdateList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (prodCategorys) {
      return (
        <option key={prodCategorys.CategoryID} value={prodCategorys.CategoryID}>
          {prodCategorys.CategoryName}
        </option>
      );
    });
    return (
      <select name="upprodcategory" id="upprodcategory">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

ReactDOM.render(<ProductBox />, document.getElementById("content"));

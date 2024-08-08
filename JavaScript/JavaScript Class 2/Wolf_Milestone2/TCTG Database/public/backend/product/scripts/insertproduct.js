var ProductBox = React.createClass({
  handleProductSubmit: function (product) {
    $.ajax({
      url: "/products/product",
      dataType: "json",
      type: "POST",
      data: product,
      success: function (data) {
        //We set the state again after submission, to update with the submitted data
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  render: function () {
    return (
      <div className="ProductBox">
        <h1>Insert Products</h1>
        <Productform2 onProductSubmit={this.handleProductSubmit} />
      </div>
    );
  },
});

var Productform2 = React.createClass({
  getInitialState: function () {
    return {
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
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    var productname = this.state.productname.trim();
    var productprice = this.state.productprice.trim();
    var productcategory = prodcategory.value;


    if (!productname || !productprice || !productcategory) {
      console.log("Missed somthin");
      return;
    }

    this.props.onProductSubmit({
      productname: productname,
      productprice: productprice,
      productcategory: productcategory,
    });
  },

  validateDollars: function (value) {
    var regex = /^\$?[0-9]+(\.[0-9][0-9])?$/;
    return regex.test(value);
  },
  commonValidate: function () {
    return true;
  },
  setValue: function (field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Products</h2>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                <TextInput
                  value={this.state.productname}
                  uniqueName="productname"
                  textArea={false}
                  required={false}
                  minCharacters={6}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "productname")}
                  errorMessage="Product Name is invalid"
                />
              </td>
            </tr>
            <tr>
              <th>Price</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.productprice}
                  uniqueName="productemail"
                  textArea={false}
                  required={true}
                  validate={this.validateDollars}
                  onChange={this.setValue.bind(this, "productprice")}
                  errorMessage="Invalid Price"
                  emptyMessage="Price is Required"
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
        <input type="submit" value="Insert Product" />
      </form>
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
        {optionNodes}
      </select>
    );
  },
});

var InputError = React.createClass({
  getInitialState: function () {
    return {
      message: "Input is invalid",
    };
  },
  render: function () {
    var errorClass = classNames(this.props.className, {
      error_container: true,
      visible: this.props.visible,
      invisible: !this.props.visible,
    });

    return <td> {this.props.errorMessage} </td>;
  },
});

var TextInput = React.createClass({
  getInitialState: function () {
    return {
      isEmpty: true,
      value: null,
      valid: false,
      errorMessage: "",
      errorVisible: false,
    };
  },

  handleChange: function (event) {
    this.validation(event.target.value);

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  },

  validation: function (value, valid) {
    if (typeof valid === "undefined") {
      valid = true;
    }

    var message = "";
    var errorVisible = false;

    if (!valid) {
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    } else if (this.props.required && jQuery.isEmptyObject(value)) {
      message = this.props.emptyMessage;
      valid = false;
      errorVisible = true;
    } else if (value.length < this.props.minCharacters) {
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }

    this.setState({
      value: value,
      isEmpty: jQuery.isEmptyObject(value),
      valid: valid,
      errorMessage: message,
      errorVisible: errorVisible,
    });
  },

  handleBlur: function (event) {
    var valid = this.props.validate(event.target.value);
    this.validation(event.target.value, valid);
  },
  render: function () {
    if (this.props.textArea) {
      return (
        <div className={this.props.uniqueName}>
          <textarea
            placeholder={this.props.text}
            className={"input input-" + this.props.uniqueName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
          />

          <InputError
            visible={this.state.errorVisible}
            errorMessage={this.state.errorMessage}
          />
        </div>
      );
    } else {
      return (
        <div className={this.props.uniqueName}>
          <input
            type={this.props.inputType}
            name={this.props.uniqueName}
            id={this.props.uniqueName}
            placeholder={this.props.text}
            className={"input input-" + this.props.uniqueName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
          />

          <InputError
            visible={this.state.errorVisible}
            errorMessage={this.state.errorMessage}
          />
        </div>
      );
    }
  },
});

ReactDOM.render(<ProductBox />, document.getElementById("content"));

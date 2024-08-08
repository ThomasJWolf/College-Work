var ProductBox = React.createClass({
  handleProductSubmit: function (twproduct) {
    $.ajax({
      url: "/products/product",
      dataType: "json",
      type: "POST",
      data: twproduct,
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
        <Productform2 onProductSubmit={this.handleProductSubmit} />
      </div>
    );
  },
});

var Productform2 = React.createClass({
  getInitialState: function () {
    return {
      twproductname: "",
      twproductprice: "",
      twdata: [],
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      twselectedOption: e.target.value,
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
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    var twproductname = this.state.twproductname.trim();
    var twproductprice = this.state.twproductprice.trim();
    var twproductcategory = twprodcategory.value;

    if (!twproductname || !twproductprice || !twproductcategory) {
      console.log("Missed somthin");
      return;
    }

    this.props.onProductSubmit({
      twproductname: twproductname,
      twproductprice: twproductprice,
      twproductcategory: twproductcategory,
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
        <h2>Insert Products</h2>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                <TextInput
                  value={this.state.twproductname}
                  uniqueName="twproductname"
                  textArea={false}
                  required={false}
                  minCharacters={6}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twproductname")}
                  errorMessage="Product Name is invalid"
                />
              </td>
            </tr>
            <tr>
              <th>Price</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.twproductprice}
                  uniqueName="twproductemail"
                  textArea={false}
                  required={true}
                  validate={this.validateDollars}
                  onChange={this.setValue.bind(this, "twproductprice")}
                  errorMessage="Invalid Price"
                  emptyMessage="Price is Required"
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
        <input type="submit" value="Insert Product" />
      </form>
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


const App = () => (
  <div id="content">
    <ProductBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

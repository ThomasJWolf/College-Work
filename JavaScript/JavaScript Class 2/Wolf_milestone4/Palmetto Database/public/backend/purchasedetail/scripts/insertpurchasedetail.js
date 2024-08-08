var PurchaseDetailBox = React.createClass({
  handlePurchaseDetailSubmit: function (twpurchasedetail) {
    $.ajax({
      url: "/purchasedetails/purchasedetail",
      dataType: "json",
      type: "POST",
      data: twpurchasedetail,
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
      <div className="PurchaseDetailBox">
        <PurchaseDetailform2
          onPurchaseDetailSubmit={this.handlePurchaseDetailSubmit}
        />
      </div>
    );
  },
});

var PurchaseDetailform2 = React.createClass({
  getInitialState: function () {
    return {
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
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    var twpurchasedetailquantity = this.state.twpurchasedetailquantity.trim();
    var twpurchasedetailproduct = twprchdtlproduct.value;
    var twpurchasedetailpurchase = twprchdtlpurchase.value;

    this.props.onPurchaseDetailSubmit({
      twpurchasedetailquantity: twpurchasedetailquantity,
      twpurchasedetailproduct: twpurchasedetailproduct,
      twpurchasedetailpurchase: twpurchasedetailpurchase,
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
        <h2>Insert Purchase Details</h2>
        <table>
          <tbody>
            <tr>
              <th>Quantity</th>
              <td>
                <TextInput
                  value={this.state.twpurchasedetailquantity}
                  uniqueName="twpurchasedetailquantity"
                  textArea={false}
                  required={true}
                  minCharacters={1}
                  validate={this.validateDollars}
                  onChange={this.setValue.bind(
                    this,
                    "twpurchasedetailquantity"
                  )}
                  errorMessage="PurchaseDetail Quantity is invalid"
                  emptyMessage="PurchaseDetail Quantity is Required"
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
        <input type="submit" value="Insert PurchaseDetail" />
      </form>
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
    <PurchaseDetailBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

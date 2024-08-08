var CartBox = React.createClass({
  handleCartSubmit: function (cart) {
    $.ajax({
      url: "/carts/cart",
      dataType: "json",
      type: "POST",
      data: cart,
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
      <div className="CartBox">
        <h1>Insert Carts</h1>
        <Cartform2 onCartSubmit={this.handleCartSubmit} />
      </div>
    );
  },
});

var Cartform2 = React.createClass({
  getInitialState: function () {
    return {
      datauser: [],
      dataplayer: [],
      cartpickup: "",
      cartmade: "",
      cartdate: "",
    };
  },
  handleOptionChangePickup: function (e) {
    this.setState({
      selectedOptionPickup: e.target.value,
    });
  },
  handleOptionChangeMade: function (e) {
    this.setState({
      selectedOptionMade: e.target.value,
    });
  },
  loadCartUsers: function () {
    $.ajax({
      url: "/carts/getcartusers",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ datauser: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  loadCartPlayers: function () {
    $.ajax({
      url: "/carts/getcartplayers",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ dataplayer: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadCartUsers();
    this.loadCartPlayers();
  },

  handleSubmit: function (e) {
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    var cartuser = cartuser.value;
    var cartplayer = cartplayer.value;
    var cartpickup = this.state.selectedOptionPickup;
    var cartmade = this.state.selectedOptionMade;
    var cartdate = this.state.cartdate.trim();

    if (
      !cartuser ||
      !cartplayer ||
      !cartpickup ||
      !cartmade ||
      !cartdate
    ) {
      console.log("Missed somthin");
      return;
    }

    this.props.onCartSubmit({
      cartuser: cartuser,
      cartplayer: cartplayer,
      cartpickup: cartpickup,
      cartmade: cartmade,
      cartdate: cartdate,
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
        <h2>Carts</h2>
        <table>
          <tbody>
            <tr>
              <th>User</th>
              <td>
                <SelectListUser data={this.state.datauser} />
              </td>
            </tr>
            <tr>
              <th>Player</th>
              <td>
                <SelectListPlayer data={this.state.dataplayer} />
              </td>
            </tr>
            <tr>
              <th>Pickup</th>
              <td>
                <label>
                  <input
                    type="radio"
                    name="cartpickup"
                    id="cartpickup"
                    value="1"
                    checked={this.state.selectedOptionPickup === "1"}
                    onChange={this.handleOptionChangePickup}
                    className="form-check-input"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="cartpickup"
                    id="cartpickup"
                    value="0"
                    checked={this.state.selectedOptionPickup === "0"}
                    onChange={this.handleOptionChangePickup}
                    className="form-check-input"
                  />
                  No
                </label>
              </td>
            </tr>
            <tr>
              <th>Made</th>
              <td>
                <label>
                  <input
                    type="radio"
                    name="cartmade"
                    id="cartmade"
                    value="1"
                    checked={this.state.selectedOptionMade === "1"}
                    onChange={this.handleOptionChangeMade}
                    className="form-check-input"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="cartmade"
                    id="cartmade"
                    value="0"
                    checked={this.state.selectedOptionMade === "0"}
                    onChange={this.handleOptionChangeMade}
                    className="form-check-input"
                  />
                  No
                </label>
              </td>
            </tr>
            <tr>
              <th>Date</th>
              <td>
                <TextInput
                  inputType="date"
                  value={this.state.cartdate}
                  uniqueName="cartdate"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "cartdate")}
                  errorMessage="Cart Date is invalid"
                  emptyMessage="Cart Date is Required"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Insert Cart" />
      </form>
    );
  },
});

var SelectListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (cartUsers) {
      return (
        <option key={cartUsers.UserID} value={cartUsers.UserID}>
          {cartUsers.UserName}
        </option>
      );
    });
    return (
      <select name="cartuser" id="cartuser">
        {optionNodes}
      </select>
    );
  },
});

var SelectListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (cartPlayers) {
      return (
        <option key={cartPlayers.PlayerID} value={cartPlayers.PlayerID}>
          {cartPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="cartplayer" id="cartplayer">
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

ReactDOM.render(<CartBox />, document.getElementById("content"));

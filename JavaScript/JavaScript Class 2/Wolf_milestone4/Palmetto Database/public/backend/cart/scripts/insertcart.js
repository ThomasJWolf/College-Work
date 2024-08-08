var CartBox = React.createClass({
  handleCartSubmit: function (twcart) {
    $.ajax({
      url: "/carts/cart",
      dataType: "json",
      type: "POST",
      data: twcart,
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
        <Cartform2 onCartSubmit={this.handleCartSubmit} />
      </div>
    );
  },
});

var Cartform2 = React.createClass({
  getInitialState: function () {
    return {
      twdatauser: [],
      twdataplayer: [],
    };
  },
  loadCrtUsers: function () {
    $.ajax({
      url: "/carts/getcrtusers",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ twdatauser: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  loadCrtPlayers: function () {
    $.ajax({
      url: "/carts/getcrtplayers",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ twdataplayer: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadCrtUsers();
    this.loadCrtPlayers();
  },

  handleSubmit: function (e) {
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    var twcartuser = twcrtuser.value;
    var twcartplayer = twcrtplayer.value;

    if (
      !twcartuser ||
      !twcartplayer
    ) {
      console.log("Missed somthin");
      return;
    }

    this.props.onCartSubmit({
      twcartuser: twcartuser,
      twcartplayer: twcartplayer,
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
        <h2>Insert Carts</h2>
        <table>
          <tbody>
            <tr>
              <th>User</th>
              <td>
                <SelectListUser data={this.state.twdatauser} />
              </td>
            </tr>
            <tr>
              <th>Player</th>
              <td>
                <SelectListPlayer data={this.state.twdataplayer} />
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
    var optionNodes = this.props.data.map(function (twcrtUsers) {
      return (
        <option key={twcrtUsers.UserID} value={twcrtUsers.UserID}>
          {twcrtUsers.UserName}
        </option>
      );
    });
    return (
      <select name="twcrtuser" id="twcrtuser">
        {optionNodes}
      </select>
    );
  },
});

var SelectListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twcrtPlayers) {
      return (
        <option key={twcrtPlayers.PlayerID} value={twcrtPlayers.PlayerID}>
          {twcrtPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="twcrtplayer" id="twcrtplayer">
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
    <CartBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));
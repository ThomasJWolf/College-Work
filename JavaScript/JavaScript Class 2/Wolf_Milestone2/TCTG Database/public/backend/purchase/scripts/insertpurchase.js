var PurchaseBox = React.createClass({
  handlePurchaseSubmit: function (purchase) {
    $.ajax({
      url: "/purchases/purchase",
      dataType: "json",
      type: "POST",
      data: purchase,
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
      <div className="PurchaseBox">
        <h1>Insert Purchases</h1>
        <Purchaseform2 onPurchaseSubmit={this.handlePurchaseSubmit} />
      </div>
    );
  },
});

var Purchaseform2 = React.createClass({
  getInitialState: function () {
    return {
      purchaseammount: "",
      purchasedate: "",
      datauser: [],
      dataplayer: [],
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  loadPrchUsers: function () {
    $.ajax({
      url: "/purchases/getprchusers",
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
  loadPrchPlayers: function () {
    $.ajax({
      url: "/purchases/getprchplayers",
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
    this.loadPrchUsers();
    this.loadPrchPlayers();
  },

  handleSubmit: function (e) {
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    var purchaseammount = this.state.purchaseammount.trim();
    var purchasedate = this.state.purchasedate.trim();
    var purchaseuser = prchuser.value;
    var purchaseplayer = prchplayer.value;

    if (!purchasename || !purchaseprice || !purchaseuser || !purchaseplayer) {
      console.log("Missed somthin");
      return;
    }

    this.props.onPurchaseSubmit({
      purchaseammount: purchaseammount,
      purchasedate: purchasedate,
      purchaseuser: purchaseuser,
      purchaseplayer: purchaseplayer,
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
        <h2>Purchases</h2>
        <table>
          <tbody>
            <tr>
              <th>Ammount</th>
              <td>
                <TextInput
                  value={this.state.purchaseammount}
                  uniqueName="purchaseammount"
                  textArea={false}
                  required={true}
                  minCharacters={1}
                  validate={this.validateDollars}
                  onChange={this.setValue.bind(this, "purchaseammount")}
                  errorMessage="Purchase Ammount is invalid"
                  emptyMessage="Purchase Ammount is Required"
                />
              </td>
            </tr>
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
          </tbody>
        </table>
        <input type="submit" value="Insert Purchase" />
      </form>
    );
  },
});

var SelectListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (prchUsers) {
      return (
        <option key={prchUsers.UserID} value={prchUsers.UserID}>
          {prchUsers.UserName}
        </option>
      );
    });
    return (
      <select name="prchuser" id="prchuser">
        {optionNodes}
      </select>
    );
  },
});

var SelectListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (prchPlayers) {
      return (
        <option key={prchPlayers.PlayerID} value={prchPlayers.PlayerID}>
          {prchPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="prchplayer" id="prchplayer">
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

ReactDOM.render(<PurchaseBox />, document.getElementById("content"));

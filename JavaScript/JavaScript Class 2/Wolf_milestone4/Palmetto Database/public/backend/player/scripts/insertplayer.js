var PlayerBox = React.createClass({
  handlePlayerSubmit: function (twplayer) {
    $.ajax({
      url: "/players/player",
      dataType: "json",
      type: "POST",
      data: twplayer,
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
      <div className="PlayerBox">
        <Playerform2 onPlayerSubmit={this.handlePlayerSubmit} />
      </div>
    );
  },
});

var Playerform2 = React.createClass({
  getInitialState: function () {
    return {
      twplayername: "",
      twplayeremail: "",
      twplayerfirstname: "",
      twplayerlastname: "",
      twplayerphone: "",
      twplayeraddress: "",
      twdata: [],
      twplayerhandicap: "",
      twplayerpw: "",
      twplayerpw2: "",
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  loadPlayRewards: function () {
    $.ajax({
      url: "/players/getplayrewards",
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
    this.loadPlayRewards();
  },

  handleSubmit: function (e) {
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    var twplayername = this.state.twplayername.trim();
    var twplayeremail = this.state.twplayeremail.trim();
    var twplayerfirstname = this.state.twplayerfirstname.trim();
    var twplayerlastname = this.state.twplayerlastname.trim();
    var twplayerphone = this.state.twplayerphone.trim();
    var twplayeraddress = this.state.twplayeraddress.trim();
    var twplayerhandicap = this.state.twplayerhandicap.trim();
    var twplayerpw = this.state.twplayerpw.trim();
    var twplayerpw2 = this.state.twplayerpw2.trim();
    var twplayerreward = twplayreward.value;

    if (twplayerpw != twplayerpw2) {
      console.log("Passwords do not match!!");
      alert("Passwords do not match!!");
      return;
    }
    this.props.onPlayerSubmit({
      twplayername: twplayername,
      twplayeremail: twplayeremail,
      twplayerfirstname: twplayerfirstname,
      twplayerlastname: twplayerlastname,
      twplayerphone: twplayerphone,
      twplayeraddress: twplayeraddress,
      twplayerhandicap: twplayerhandicap,
      twplayerreward: twplayerreward,
      twplayerpw: twplayerpw,
    });
  },

  validateEmail: function (value) {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
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
        <h2>Insert Players</h2>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                <TextInput
                  value={this.state.twplayername}
                  uniqueName="twplayername"
                  id="twplayername"
                  textArea={false}
                  required={true}
                  minCharacters={4}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twplayername")}
                  errorMessage="Player Name is invalid"
                />
              </td>
            </tr>
            <tr>
              <th>E-Mail</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.twplayeremail}
                  uniqueName="twplayeremail"
                  textArea={false}
                  required={true}
                  validate={this.validateEmail}
                  onChange={this.setValue.bind(this, "twplayeremail")}
                  errorMessage="Invalid E-Mail Address"
                  emptyMessage="E-Mail Address is Required"
                />
              </td>
            </tr>
            <tr>
              <th>First Name</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.twplayerfirstname}
                  uniqueName="twplayerfirstname"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twplayerfirstname")}
                  errorMessage="Invalid First Name"
                  emptyMessage="First Name is Required"
                />
              </td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.twplayerlastname}
                  uniqueName="twplayerlastname"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twplayerlastname")}
                  errorMessage="Invalid Last Name"
                  emptyMessage="Last Name is Required"
                />
              </td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.twplayerphone}
                  uniqueName="twplayerphone"
                  textArea={false}
                  required={false}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twplayerphone")}
                  errorMessage="Invalid Phone Number"
                />
              </td>
            </tr>
            <tr>
              <th>Address</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.twplayeraddress}
                  uniqueName="twplayeraddress"
                  textArea={false}
                  required={false}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twplayeraddress")}
                  errorMessage="Invalid Address"
                  emptyMessage="Address is Required"
                />
              </td>
            </tr>

            <tr>
              <th>Handicap</th>
              <td>
                <TextInput
                  inputType="number"
                  value={this.state.twplayerhandicap}
                  uniqueName="twplayerhandicap"
                  textArea={false}
                  required={false}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twplayerhandicap")}
                  errorMessage="Invalid Handicap"
                />
              </td>
            </tr>
            <tr>
              <th>Reward</th>
              <td>
                <SelectList data={this.state.twdata} />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <TextInput
                  inputType="password"
                  value={this.state.twplayerpw}
                  uniqueName="twplayerpw"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twplayerpw")}
                  errorMessage="Invalid Password"
                  emptyMessage="Password is Required"
                />
              </td>
            </tr>
            <tr>
              <th>Password Confirm</th>
              <td>
                <TextInput
                  inputType="password"
                  value={this.state.twplayerpw2}
                  uniqueName="twplayerpw2"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twplayerpw2")}
                  errorMessage="Invalid Password"
                  emptyMessage="Password is Required"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Insert Player" />
      </form>
    );
  },
});

var SelectList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twplayRewards) {
      return (
        <option key={twplayRewards.RewardId} value={twplayRewards.RewardId}>
          {twplayRewards.RewardName}
        </option>
      );
    });
    return (
      <select name="twplayreward" id="twplayreward">
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

    <PlayerBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

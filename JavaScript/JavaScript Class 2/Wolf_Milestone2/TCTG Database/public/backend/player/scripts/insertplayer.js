var PlayerBox = React.createClass({
  handlePlayerSubmit: function (player) {
    $.ajax({
      url: "/players/player",
      dataType: "json",
      type: "POST",
      data: player,
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
        <h1>Insert Players</h1>
        <Playerform2 onPlayerSubmit={this.handlePlayerSubmit} />
      </div>
    );
  },
});

var Playerform2 = React.createClass({
  getInitialState: function () {
    return {
      playername: "",
      playeremail: "",
      playerfirstname: "",
      playerlastname: "",
      playerphone: "",
      playeraddress: "",
      playerpw: "",
      playerpw2: "",
      data: [],
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
        this.setState({ data: data });
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

    var playername = this.state.playername.trim();
    var playeremail = this.state.playeremail.trim();
    var playerfirstname = this.state.playerfirstname.trim();
    var playerlastname = this.state.playerlastname.trim();
    var playerphone = this.state.playerphone.trim();
    var playeraddress = this.state.playeraddress.trim();
    var playerpw = this.state.playerpw.trim();
    var playerpw2 = this.state.playerpw2.trim();
    var playerreward = playreward.value;
    console.log("PW: " + playerpw);

    if (playerpw != playerpw2) {
      console.log("Passwords do not match!!");
      alert("Passwords do not match!!");
      return;
    }

    if (!playername || !playeremail || !playerpw || !playerreward) {
      console.log("Missed somthin");
      return;
    }

    this.props.onPlayerSubmit({
      playername: playername,
      playeremail: playeremail,
      playerfirstname: playerfirstname,
      playerlastname: playerlastname,
      playerphone: playerphone,
      playeraddress: playeraddress,
      playerpw: playerpw,
      playerreward: playerreward,
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
        <h2>Players</h2>
        <table>
          <tbody>
            <tr>
              <th>Username</th>
              <td>
                <TextInput
                  value={this.state.playername}
                  uniqueName="playername"
                  textArea={false}
                  required={false}
                  minCharacters={6}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "playername")}
                  errorMessage="Player Name is invalid"
                />
              </td>
            </tr>
            <tr>
              <th>E-Mail</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.playeremail}
                  uniqueName="playeremail"
                  textArea={false}
                  required={true}
                  validate={this.validateEmail}
                  onChange={this.setValue.bind(this, "playeremail")}
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
                  value={this.state.playerfirstname}
                  uniqueName="playerfirstname"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "playerfirstname")}
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
                  value={this.state.playerlastname}
                  uniqueName="playerlastname"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "playerlastname")}
                  errorMessage="Invalid Last Name"
                  emptyMessage="Last Name is Required"
                />
              </td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>
                <TextInput
                  value={this.state.playerphone}
                  uniqueName="playerphone"
                  textArea={false}
                  required={false}
                  minCharacters={10}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "playerphone")}
                  errorMessage="Phone is invalid"
                />
              </td>
            </tr>
            <tr>
              <th>Address</th>
              <td>
                <TextInput
                  value={this.state.playeraddress}
                  uniqueName="playeraddress"
                  textArea={false}
                  required={false}
                  minCharacters={6}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "playeraddress")}
                  errorMessage="Address is invalid"
                />
              </td>
            </tr>
            <tr>
              <th>Handicap</th>
              <td>
                <TextInput
                  value={this.state.playerhandicap}
                  uniqueName="playerhandicap"
                  textArea={false}
                  required={false}
                  minCharacters={6}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "playerhandicap")}
                  errorMessage="Player Handicap is invalid"
                />
              </td>
            </tr>
            <tr>
              <th>Reward</th>
              <td>
                <SelectList data={this.state.data} />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <TextInput
                  inputType="password"
                  value={this.state.playerpw}
                  uniqueName="playerpw"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "playerpw")}
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
                  value={this.state.playerpw2}
                  uniqueName="playerpw2"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "playerpw2")}
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
    var optionNodes = this.props.data.map(function (playRewards) {
      return (
        <option key={playRewards.RewardID} value={playRewards.RewardID}>
          {playRewards.RewardName}
        </option>
      );
    });
    return (
      <select name="playreward" id="playreward">
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

ReactDOM.render(<PlayerBox />, document.getElementById("content"));

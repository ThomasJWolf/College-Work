var ReservationBox = React.createClass({
  handleReservationSubmit: function (twreservation) {
    $.ajax({
      url: "/reservations/reservation",
      dataType: "json",
      type: "POST",
      data: twreservation,
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
      <div className="ReservationBox">
        <Reservationform2 onReservationSubmit={this.handleReservationSubmit} />
      </div>
    );
  },
});

var Reservationform2 = React.createClass({
  getInitialState: function () {
    return {
      twdatauser: [],
      twdataplayer: [],
      twreservationdate: "",
      twreservationtime: "",
      twdatastatus: [],
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  loadResUsers: function () {
    $.ajax({
      url: "/reservations/getresusers",
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
  loadResPlayers: function () {
    $.ajax({
      url: "/reservations/getresplayers",
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
  loadResStatuss: function () {
    $.ajax({
      url: "/reservations/getresstatuss",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ twdatastatus: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadResStatuss();
    this.loadResUsers();
    this.loadResPlayers();
  },

  handleSubmit: function (e) {
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    var twreservationuser = twresuser.value;
    var twreservationplayer = twresplayer.value;
    var twreservationdate = this.state.twreservationdate.trim();
    var twreservationtime = this.state.twreservationtime.trim();
    var twreservationstatus = twresstatus.value;

    if (
      !twreservationuser ||
      !twreservationplayer ||
      !twreservationdate ||
      !twreservationtime ||
      !twreservationstatus
    ) {
      console.log("Missed somthin");
      return;
    }

    this.props.onReservationSubmit({
      twreservationuser: twreservationuser,
      twreservationplayer: twreservationplayer,
      twreservationdate: twreservationdate,
      twreservationtime: twreservationtime,
      twreservationstatus: twreservationstatus,
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
        <h2>Insert Reservations</h2>
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
            <tr>
              <th>Date</th>
              <td>
                <TextInput
                  inputType="date"
                  value={this.state.twreservationdate}
                  uniqueName="twreservationdate"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twreservationdate")}
                  errorMessage="Reservation Date is invalid"
                />
              </td>
            </tr>
            <tr>
              <th>Time</th>
              <td>
                <TextInput
                  inputType="time"
                  value={this.state.twreservationtime}
                  uniqueName="twreservationtime"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twreservationtime")}
                  errorMessage="Invalid Time"
                  emptyMessage="Time is Required"
                />
              </td>
            </tr>
            <tr>
              <th>Status</th>
              <td>
                <SelectListStatus data={this.state.twdatastatus} />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Insert Reservation" />
      </form>
    );
  },
});

var SelectListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twresUsers) {
      return (
        <option key={twresUsers.UserID} value={twresUsers.UserID}>
          {twresUsers.UserName}
        </option>
      );
    });
    return (
      <select name="twresuser" id="twresuser">
        {optionNodes}
      </select>
    );
  },
});
var SelectListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twresPlayers) {
      return (
        <option key={twresPlayers.PlayerID} value={twresPlayers.PlayerID}>
          {twresPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="twresplayer" id="twresplayer">
        {optionNodes}
      </select>
    );
  },
});
var SelectListStatus = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twresStatuss) {
      return (
        <option key={twresStatuss.StatusID} value={twresStatuss.StatusID}>
          {twresStatuss.StatusName}
        </option>
      );
    });
    return (
      <select name="twresstatus" id="twresstatus">
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
    <ReservationBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

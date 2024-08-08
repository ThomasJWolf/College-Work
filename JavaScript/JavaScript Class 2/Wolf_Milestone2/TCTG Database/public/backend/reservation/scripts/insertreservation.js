var ReservationBox = React.createClass({
  handleReservationSubmit: function (reservation) {
    $.ajax({
      url: "/reservations/reservation",
      dataType: "json",
      type: "POST",
      data: reservation,
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
        <h1>Insert Reservations</h1>
        <Reservationform2 onReservationSubmit={this.handleReservationSubmit} />
      </div>
    );
  },
});

var Reservationform2 = React.createClass({
  getInitialState: function () {
    return {
      datauser: [],
      dataplayer: [],
      reservationdate: "",
      reservationtime: "",
      datastatus: [],
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
        this.setState({ datauser: data });
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
        this.setState({ dataplayer: data });
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
        this.setState({ datastatus: data });
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

    var reservationuser = resuser.value;
    var reservationplayer = resplayer.value;
    var reservationdate = this.state.reservationdate.trim();
    var reservationtime = this.state.reservationtime.trim();
    var reservationstatus = resstatus.value;

    if (!reservationuser || !reservationplayer || !reservationdate || !reservationtime || !reservationstatus) {
      console.log("Missed somthin");
      return;
    }

    this.props.onReservationSubmit({
      reservationuser: reservationuser,
      reservationplayer: reservationplayer,
      reservationdate: reservationdate,
      reservationtime: reservationtime,
      reservationstatus: reservationstatus,
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
        <h2>Reservations</h2>
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
              <th>Date</th>
              <td>
                <TextInput
                  inputType="date"
                  value={this.state.reservationdate}
                  uniqueName="reservationdate"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "reservationdate")}
                  errorMessage="Reservation Date is invalid"
                />
              </td>
            </tr>
            <tr>
              <th>Time</th>
              <td>
                <TextInput
                  inputType="time"
                  value={this.state.reservationtime}
                  uniqueName="reservationtime"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "reservationtime")}
                  errorMessage="Invalid Time"
                  emptyMessage="Time is Required"
                />
              </td>
            </tr>
            <tr>
              <th>Status</th>
              <td>
                <SelectListStatus data={this.state.datastatus} />
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
    var optionNodes = this.props.data.map(function (resUsers) {
      return (
        <option key={resUsers.UserID} value={resUsers.UserID}>
          {resUsers.UserName}
        </option>
      );
    });
    return (
      <select name="resuser" id="resuser">
        {optionNodes}
      </select>
    );
  },
});
var SelectListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (resPlayers) {
      return (
        <option key={resPlayers.PlayerID} value={resPlayers.PlayerID}>
          {resPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="resplayer" id="resplayer">
        {optionNodes}
      </select>
    );
  },
});
var SelectListStatus = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (resStatuss) {
      return (
        <option key={resStatuss.StatusID} value={resStatuss.StatusID}>
          {resStatuss.StatusName}
        </option>
      );
    });
    return (
      <select name="resstatus" id="resstatus">
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

ReactDOM.render(<ReservationBox />, document.getElementById("content"));

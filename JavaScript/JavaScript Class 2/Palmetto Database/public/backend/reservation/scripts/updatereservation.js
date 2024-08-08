var ReservationBox = React.createClass({
  getInitialState: function () {
    return { data: [], viewthepage: 0 };
  },
  loadAllowLogin: function () {
    $.ajax({
      url: "/users/getloggedin",
      dataType: "json",
      cache: false,
      success: function (datalog) {
        if (datalog && datalog.length > 0) {
          this.setState(
            {
              data: datalog,
              viewthepage: datalog[0].RoleID,
            },
            function () {
              console.log("Logged in:", this.state.viewthepage);
              if ([1, 2, 3, 5].includes(this.state.viewthepage)) {
                this.loadReservationsFromServer(); // Now only loads if the role is appropriate
              }
            }
          );
        }
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        console.log("Not Logged in:", this.state.viewthepage);
      }.bind(this),
    });
  },
  loadReservationsFromServer: function () {
    $.ajax({
      url: "/reservations/getres",
      data: {
        twreservationid: twreservationid.value,
        twreservationuser: twresuser.value,
        twreservationplayer: twresplayer.value,
        twreservationdate: twreservationdate.value,
        twreservationtime: twreservationtime.value,
        twreservationstatus: twresstatus.value,
      },

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
  updateSingleResFromServer: function (twreservation) {
    $.ajax({
      url: "/reservations/updatesingleres",
      dataType: "json",
      data: twreservation,
      type: "POST",
      cache: false,
      success: function (upsingledata) {
        this.setState({ upsingledata: upsingledata });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
    window.location.reload(true);
  },
  componentDidMount: function () {
    this.loadAllowLogin();
  },
  render: function () {
    console.log("View the page:", this.state.viewthepage);
    if (
      [1, 2, 3, 5].includes(this.state.viewthepage) &&
      this.state.viewthepage != 0
    ) {
      return (
        <div>
          <Reservationform2
            onReservationSubmit={this.loadReservationsFromServer}
          />
          <br />
          <div id="theresults">
            <div id="theleft">
              <table className="listing-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th></th>
                  </tr>
                </thead>
                <ReservationList data={this.state.data} />
              </table>
            </div>
            <div id="theright">
              <ReservationUpdateform
                onUpdateSubmit={this.updateSingleResFromServer}
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.viewthepage === 0) {
      return (
        <div id="login">
          <p>Please Log In!</p>
          <a href="/backend">Go to Login</a>
        </div>
      );
    } else {
      return (
        <div>
          <p>You do not have permission to view this page.</p>
          <a href="/backend">Return to the Dashboard</a>
        </div>
      );
    }
  },
});

var Reservationform2 = React.createClass({
  getInitialState: function () {
    return {
      twreservationid: "",
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
    this.loadResUsers();
    this.loadResPlayers();
    this.loadResStatuss();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var twreservationid = this.state.twreservationid.trim();
    var twreservationuser = twresuser.value;
    var twreservationplayer = twresplayer.value;
    var twreservationdate = this.state.twreservationdate.trim();
    var twreservationtime = this.state.twreservationtime.trim();
    var twreservationstatus = twresstatus.value;

    this.props.onReservationSubmit({
      twreservationid: twreservationid,
      twreservationuser: twreservationuser,
      twreservationplayer: twreservationplayer,
      twreservationdate: twreservationdate,
      twreservationtime: twreservationtime,
      twreservationstatus: twreservationstatus,
    });
  },
  handleChange: function (event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  },
  render: function () {
    return (
      <div>
        <div id="theform">
          <form onSubmit={this.handleSubmit}>
            <h2>Update Reservations</h2>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="twreservationid"
                      id="twreservationid"
                      value={this.state.twreservationid}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
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
                    <input
                      type="date"
                      name="twreservationdate"
                      id="twreservationdate"
                      value={this.state.twreservationdate}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Time</th>
                  <td>
                    <input
                      type="time"
                      name="twreservationtime"
                      id="twreservationtime"
                      value={this.state.twreservationtime}
                      onChange={this.handleChange}
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
            <input type="submit" value="Search Reservation" />
          </form>
        </div>
        <div>
          <br />
          <form onSubmit={this.getInitialState}>
            <input type="submit" value="Clear Form" />
          </form>
        </div>
      </div>
    );
  },
});

var ReservationUpdateform = React.createClass({
  getInitialState: function () {
    return {
      twupreservationid: "",
      twupdatauser: [],
      twupdataplayer: [],
      twupreservationdate: "",
      twupreservationtime: "",
      twupdatastatus: [],
    };
  },
  handleUpOptionChange: function (e) {
    this.setState({
      upselectedOption: e.target.value,
    });
  },
  loadResUsers: function () {
    $.ajax({
      url: "/reservations/getresusers",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ twupdatauser: data });
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
        this.setState({ twupdataplayer: data });
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
        this.setState({ twupdatastatus: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadResUsers();
    this.loadResPlayers();
    this.loadResStatuss();
  },
  handleUpSubmit: function (e) {
    e.preventDefault();

    var twupreservationid = twupresid.value;
    console.log("ID: " + twupreservationid);
    var twupreservationuser = twupresuser.value;
    console.log("User: " + twupreservationuser);
    var twupreservationplayer = twupresplayer.value;
    console.log("Player: " + twupreservationplayer);
    var twupreservationdate = twupresdate.value;
    console.log("Date: " + twupreservationdate);
    var twupreservationtime = twuprestime.value;
    console.log("Time: " + twupreservationtime);
    var twupreservationstatus = twupresstatus.value;
    console.log("Status: " + twupreservationstatus);

    this.props.onUpdateSubmit({
      twupreservationid: twupreservationid,
      twupreservationuser: twupreservationuser,
      twupreservationplayer: twupreservationplayer,
      twupreservationdate: twupreservationdate,
      twupreservationtime: twupreservationtime,
      twupreservationstatus: twupreservationstatus,
    });
  },
  handleUpChange: function (event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  },
  render: function () {
    return (
      <div>
        <div id="theform">
          <form onSubmit={this.handleUpSubmit}>
            <table>
              <tbody>
                <tr>
                  <input
                    type="hidden"
                    name="twupresid"
                    id="twupresid"
                    onChange={this.handleUpChange}
                  />
                </tr>
                <tr>
                  <th>User</th>
                  <td>
                    <SelectUpdateListUser data={this.state.twupdatauser} />
                  </td>
                </tr>
                <tr>
                  <th>Player</th>
                  <td>
                    <SelectUpdateListPlayer data={this.state.twupdataplayer} />
                  </td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>
                    <input
                      type="date"
                      name="twupresdate"
                      id="twupresdate"
                      value={this.state.twupresdate}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Time</th>
                  <td>
                    <input
                      type="time"
                      min="08:00"
                      max="16:00"
                      step="480"
                      name="twuprestime"
                      id="twuprestime"
                      value={this.state.twuprestime}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Reservation Status</th>
                  <td>
                    <SelectUpdateListStatus data={this.state.twupdatastatus} />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="twupreskey"
              id="twupreskey"
              onChange={this.handleUpChange}
            />
            <input type="submit" value="Update Reservation" />
          </form>
          <form onSubmit={this.handleUpDelete}>
            <input type="submit" value="Delete Reservation" />
          </form>
        </div>
      </div>
    );
  },
});

//Small list
var ReservationList = React.createClass({
  render: function () {
    var reservationNodes = this.props.data.map(function (twreservation) {
      return (
        <Reservation
          key={twreservation.ReservationID}
          twresid={twreservation.ReservationID}
          twresuser={twreservation.UserName}
          twresplayer={twreservation.PlayerName}
          twresdate={twreservation.ReservationDate}
          twrestime={twreservation.ReservationTime}
          twresstatus={twreservation.StatusName}
        ></Reservation>
      );
    });

    //print all the nodes in the list
    return <tbody>{reservationNodes}</tbody>;
  },
});

var Reservation = React.createClass({
  getInitialState: function () {
    return {
      twupreskey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var thetwupreskey = this.props.twresid;

    this.loadSingleRes(thetwupreskey);
  },
  loadSingleRes: function (thetwupreskey) {
    $.ajax({
      url: "/reservations/getsingleres",
      data: {
        twupreskey: thetwupreskey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populateRes = this.state.singledata.map(function (twreservation) {
          twupreskey.value = thetwupreskey;
          twupresid.value = twreservation.ReservationID;
          twupresuser.value = twreservation.UserID;
          twupresplayer.value = twreservation.PlayerID;
          twupresdate.value = twreservation.ReservationDate.slice(0, 10);
          twuprestime.value = twreservation.ReservationTime;
          twupresstatus.value = twreservation.StatusID;
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  render: function () {
    var dateOnly = this.props.twresdate
      ? this.props.twresdate.substring(0, 10)
      : "";

    return (
      <tr>
        <td>{this.props.twresid}</td>
        <td>{dateOnly}</td>
        <td>{this.props.twrestime}</td>
        <td>
          <form onSubmit={this.updateRecord}>
            <input type="submit" value="Update Record" />
          </form>
        </td>
      </tr>
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
        <option value="0"></option>
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
        <option value="0"></option>
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
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListStatus = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twresStatuss) {
      return (
        <option key={twresStatuss.StatusID} value={twresStatuss.StatusID}>
          {twresStatuss.StatusName}
        </option>
      );
    });
    return (
      <select name="twupresstatus" id="twupresstatus">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twresUsers) {
      return (
        <option key={twresUsers.UserID} value={twresUsers.UserID}>
          {twresUsers.UserName}
        </option>
      );
    });
    return (
      <select name="twupresuser" id="twupresuser">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twresPlayers) {
      return (
        <option key={twresPlayers.PlayerID} value={twresPlayers.PlayerID}>
          {twresPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="twupresplayer" id="twupresplayer">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

const App = () => (
  <div id="content">
    <ReservationBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

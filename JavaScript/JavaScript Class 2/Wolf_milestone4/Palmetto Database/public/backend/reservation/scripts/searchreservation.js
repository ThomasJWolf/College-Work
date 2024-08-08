var ReservationBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
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
  componentDidMount: function () {
    this.loadReservationsFromServer();
    // setInterval(this.loadReservationsFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <Reservationform2
          onReservationSubmit={this.loadReservationsFromServer}
        />
        <br />
        <table>
          <ReservationList data={this.state.data} />
        </table>
      </div>
    );
  },
});

var Reservationform2 = React.createClass({
  getInitialState: function () {
    return {
      twdatauser: [],
      twdataplayer: [],
      twreservationid: "",
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
      <form onSubmit={this.handleSubmit}>
        <h2>Search Reservations</h2>
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
    );
  },
});

var ReservationList = React.createClass({
  render: function () {
    var reservationNodes = this.props.data.map(function (twreservation) {
      //map the data to individual donations
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
    return (
      <table className="listing-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Player</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{reservationNodes}</tbody>
      </table>
    );
  },
});

var Reservation = React.createClass({
  render: function () {
    var dateOnly = this.props.twresdate.substring(0, 10);
    return (
      <tr>
        <td>{this.props.twresid}</td>
        <td>{this.props.twresuser}</td>
        <td>{this.props.twresplayer}</td>
        <td>{dateOnly}</td>
        <td>{this.props.twrestime}</td>
        <td>{this.props.twresstatus}</td>
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
    var optionNodes = this.props.data.map(function (twresStatus) {
      return (
        <option key={twresStatus.StatusID} value={twresStatus.StatusID}>
          {twresStatus.StatusName}
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

const App = () => (
  <div id="content">
    <ReservationBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

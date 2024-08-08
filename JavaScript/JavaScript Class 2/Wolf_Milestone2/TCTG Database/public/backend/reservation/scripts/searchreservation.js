var ReservationBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadReservationsFromServer: function () {
    console.log(emailervalue);
    $.ajax({
      url: "/reservations/getres",
      data: {
        reservationid: reservationid.value,
        reservationusername: reservationusername.value,
        reservationplayername: reservationplayername.value,
        reservationdate: reservationdate.value,
        reservationtime: reservationtime.value,
        reservationstatus: resstatus.value,
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
        <h1>Search Reservations</h1>
        <Reservationform2
          onReservationSubmit={this.loadReservationsFromServer}
        />
        <br />
        <table>
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
          <ReservationList data={this.state.data} />
        </table>
      </div>
    );
  },
});

var Reservationform2 = React.createClass({
  getInitialState: function () {
    return {
      datauser: [],
      dataplayer: [],
      reservationid: "",
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
    this.loadResUsers();
    this.loadResPlayers();
    this.loadResStatuss();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var reservationid = this.state.reservationid.trim();
    var reservationuser = resuser.value;
    var reservationplayer = resplayer.value;
    var reservationdate = this.state.reservationdate.trim();
    var reservationtime = this.state.reservationtime.trim();
    var reservationstatus = resstatus.value;

    this.props.onReservationSubmit({
      reservationid: reservationid,
      reservationuser: reservationuser,
      reservationplayer: reservationplayer,
      reservationdate: reservationdate,
      reservationtime: reservationtime,
      reservationstatus: reservationstatus,
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
        <h2>Reservations</h2>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>
                <input
                  type="text"
                  name="reservationid"
                  id="reservationid"
                  value={this.state.reservationid}
                  onChange={this.handleChange}
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
            <tr>
              <th>Date</th>
              <td>
                <input
                  type="date"
                  name="reservationdate"
                  id="reservationdate"
                  value={this.state.reservationdate}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Time</th>
              <td>
                <input
                  type="time"
                  name="reservationtime"
                  id="reservationtime"
                  value={this.state.reservationtime}
                  onChange={this.handleChange}
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
        <input type="submit" value="Search Reservation" />
      </form>
    );
  },
});

var ReservationList = React.createClass({
  render: function () {
    var reservationNodes = this.props.data.map(function (reservation) {
      //map the data to individual donations
      return (
        <Reservation
          key={reservation.ReservationID}
          resid={reservation.ReservationID}
          resuser={reservation.UserName}
          resplayer={reservation.PlayerName}
          resdate={reservation.ReservationDate}
          restime={reservation.ReservationTime}
          resstatus={reservation.StatusName}
        ></Reservation>
      );
    });

    //print all the nodes in the list
    return <tbody>{reservationNodes}</tbody>;
  },
});

var Reservation = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.resid}</td>
        <td>{this.props.resuser}</td>
        <td>{this.props.resplayer}</td>
        <td>{this.props.resdate}</td>
        <td>{this.props.restime}</td>
        <td>{this.props.resstatus}</td>
      </tr>
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
        <option value="0"></option>
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
        <option value="0"></option>
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
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

ReactDOM.render(<ReservationBox />, document.getElementById("content"));

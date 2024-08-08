var ReservationBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadReservationsFromServer: function () {
    $.ajax({
      url: "/reservations/getres",
      data: {
        reservationid: reservationid.value,
        reservationuser: reservationuser.value,
        reservationplayer: reservationplayer.value,
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
  updateSingleResFromServer: function (reservation) {
    $.ajax({
      url: "/reservations/updatesingleres",
      dataType: "json",
      data: reservation,
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
    this.loadReservationsFromServer();
    // setInterval(this.loadReservationsFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Update Reservations</h1>
        <Reservationform2
          onReservationSubmit={this.loadReservationsFromServer}
        />
        <br />
        <div id="theresults">
          <div id="theleft">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Time</th>
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
  },
});

var Reservationform2 = React.createClass({
  getInitialState: function () {
    return {
      reservationid: "",
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
      <div>
        <div id="theform">
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
      upresid: "",
      updatauser: [],
      updataplayer: [],
      upreservationdate: "",
      upreservationtime: "",
      updatastatus: [],
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
        this.setState({ updatauser: data });
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
        this.setState({ updataplayer: data });
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
        this.setState({ updatastatus: data });
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

    var upreservationid = upresid.value;
    var upreservationuser = upresuser.value;
    var upreservationplayer = upresplayer.value;
    var upreservationdate = upreservationdate.value;
    var upreservationtime = upreservationtime.value;
    var upreservationstatus = upresstatus.value;

    this.props.onUpdateSubmit({
      upreservationid: upreservationid,
      upreservationuser: upreservationuser,
      upreservationplayer: upreservationplayer,
      upreservationdate: upreservationdate,
      upreservationtime: upreservationtime,
      upreservationstatus: upreservationstatus,
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
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="upresid"
                      id="upresid"
                      value={this.state.upresid}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>User</th>
                  <td>
                    <SelectUpdateListUser data={this.state.updatauser} />
                  </td>
                </tr>
                <tr>
                  <th>Player</th>
                  <td>
                    <SelectUpdateListPlayer data={this.state.updataplayer} />
                  </td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>
                    <input
                      type="date"
                      name="upreservationdate"
                      id="upreservationdate"
                      value={this.state.upreservationdate}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Time</th>
                  <td>
                    <input
                      type="time"
                      name="upreservationtime"
                      id="upreservationtime"
                      value={this.state.upreservationtime}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Reservation Status</th>
                  <td>
                    <SelectUpdateListStatus data={this.state.updatastatus} />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="upreskey"
              id="upreskey"
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
    var reservationNodes = this.props.data.map(function (reservation) {
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
  getInitialState: function () {
    return {
      upreskey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var theupreskey = this.props.reskey;

    this.loadSingleRes(theupreskey);
  },
  loadSingleRes: function (theupreskey) {
    $.ajax({
      url: "/reservations/getsingleres",
      data: {
        upreskey: theupreskey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populateRes = this.state.singledata.map(function (reservation) {
          upreskey.value = theupreskey;
          upresid.value = reservation.ReservationID;
          upresuser.value = reservation.UserID;
          upresplayer.value = reservation.PlayerID;
          upreservationdate.value = reservation.ReservationDate;
          upreservationtime.value = reservation.ReservationTime;
          upresstatus.value = reservation.StatusID;
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  render: function () {
    return (
      <tr>
        <td>{this.props.resid}</td>
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

var SelectUpdateListStatus = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (resStatuss) {
      return (
        <option key={resStatuss.StatusID} value={resStatuss.StatusID}>
          {resStatuss.StatusName}
        </option>
      );
    });
    return (
      <select name="upresstatus" id="upresstatus">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListUser = React.createClass({
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

var SelectUpdateListPlayer = React.createClass({
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

ReactDOM.render(<ReservationBox />, document.getElementById("content"));

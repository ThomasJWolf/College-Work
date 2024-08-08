var PlayerBox = React.createClass({
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
              if ([1, 2, 3, 6].includes(this.state.viewthepage)) {
                this.loadPlayersFromServer(); // Now only loads if the role is appropriate
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
  loadPlayersFromServer: function () {
    $.ajax({
      url: "/players/getplay",
      data: {
        twplayerid: twplayerid.value,
        twplayername: twplayername.value,
        twplayeremail: twplayeremail.value,
        twplayerfirstname: twplayerfirstname.value,
        twplayerlastname: twplayerlastname.value,
        twplayerphone: twplayerphone.value,
        twplayeraddress: twplayeraddress.value,
        twplayerhandicap: twplayerhandicap.value,
        twplayerreward: twplayreward.value,
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
    this.loadAllowLogin();
  },
  render: function () {
    console.log("View the page:", this.state.viewthepage);
    if (
      [1, 2, 3, 6].includes(this.state.viewthepage) &&
      this.state.viewthepage != 0
    ) {
      return (
        <div>
          <Playerform2 onPlayerSubmit={this.loadPlayersFromServer} />
          <br />
            <table className="listing-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Handicap</th>
                  <th>Role</th>
                </tr>
              </thead>
              <PlayerList data={this.state.data} />
            </table>
        </div>
      );
    } else if (this.state.viewthepage === 0) {
      return (
        <div>
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

var Playerform2 = React.createClass({
  getInitialState: function () {
    return {
      twplayerid: "",
      twplayername: "",
      twplayeremail: "",
      twplayerfirstname: "",
      twplayerlastname: "",
      twplayerphone: "",
      twplayeraddress: "",
      twplayerhandicap: "",
      twdata: [],
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
    e.preventDefault();

    var twplayerid = this.state.twplayerid.trim();
    var twplayername = this.state.twplayername.trim();
    var twplayeremail = this.state.twplayeremail.trim();
    var twplayerfirstname = this.state.twplayerfirstname.trim();
    var twplayerlastname = this.state.twplayerlastname.trim();
    var twplayerphone = this.state.twplayerphone.trim();
    var twplayeraddress = this.state.twplayeraddress.trim();
    var twplayerhandicap = this.state.twplayerhandicap.trim();
    var twplayerreward = twplayreward.value;

    this.props.onPlayerSubmit({
      twplayerid: twplayerid,
      twplayername: twplayername,
      twplayeremail: twplayeremail,
      twplayerfirstname: twplayerfirstname,
      twplayerlastname: twplayerlastname,
      twplayerphone: twplayerphone,
      twplayeraddress: twplayeraddress,
      twplayerhandicap: twplayerhandicap,
      twplayerreward: twplayerreward,
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
        <h2>Search Players</h2>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>
                <input
                  type="text"
                  name="twplayerid"
                  id="twplayerid"
                  value={this.state.twplayerid}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Username</th>
              <td>
                <input
                  name="twplayername"
                  id="twplayername"
                  value={this.state.twplayername}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <input
                  name="twplayeremail"
                  id="twplayeremail"
                  value={this.state.twplayeremail}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>First Name</th>
              <td>
                <input
                  name="twplayerfirstname"
                  id="twplayerfirstname"
                  value={this.state.twplayerfirstname}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>
                <input
                  name="twplayerlastname"
                  id="twplayerlastname"
                  value={this.state.twplayerlastname}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>
                <input
                  name="twplayerphone"
                  id="twplayerphone"
                  value={this.state.twplayerphone}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Address</th>
              <td>
                <input
                  name="twplayeraddress"
                  id="twplayeraddress"
                  value={this.state.twplayeraddress}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Handicap</th>
              <td>
                <input
                  name="twplayerhandicap"
                  id="twplayerhandicap"
                  value={this.state.twplayerhandicap}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Reward</th>
              <td>
                <SelectList data={this.state.twdata} />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Search Player" />
      </form>
    );
  },
});

var PlayerList = React.createClass({
  render: function () {
    var playerNodes = this.props.data.map(function (twplayer) {
      //map the data to individual donations
      return (
        <Player
          key={twplayer.PlayerID}
          twplayid={twplayer.PlayerID}
          twplayname={twplayer.PlayerName}
          twplayemail={twplayer.PlayerEmail}
          twplayfirstname={twplayer.PlayerFirstName}
          twplaylastname={twplayer.PlayerLastName}
          twplayphone={twplayer.PlayerPhone}
          twplayaddress={twplayer.PlayerAddress}
          twplayhandicap={twplayer.PlayerHandicap}
          twplayreward={twplayer.RewardName}
        ></Player>
      );
    });

    //print all the nodes in the list
    return <tbody>{playerNodes}</tbody>;
  },
});

var Player = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.twplayid}</td>
        <td>{this.props.twplayname}</td>
        <td>{this.props.twplayemail}</td>
        <td>{this.props.twplayfirstname}</td>
        <td>{this.props.twplaylastname}</td>
        <td>{this.props.twplayphone}</td>
        <td>{this.props.twplayaddress}</td>
        <td>{this.props.twplayhandicap}</td>
        <td>{this.props.twplayreward}</td>
      </tr>
    );
  },
});

var SelectList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twplayRewards) {
      return (
        <option key={twplayRewards.RewardID} value={twplayRewards.RewardID}>
          {twplayRewards.RewardName}
        </option>
      );
    });
    return (
      <select name="twplayreward" id="twplayreward">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

const App = () => (
  <div id="content">
    <PlayerBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

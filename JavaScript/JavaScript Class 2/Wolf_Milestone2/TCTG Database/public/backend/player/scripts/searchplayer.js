var PlayerBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadPlayersFromServer: function () {
    console.log(emailervalue);
    $.ajax({
      url: "/players/getplay",
      data: {
        playerid: playerid.value,
        playername: playername.value,
        playeremail: playeremail.value,
        playerfirstname: playerfirstname.value,
        playerlastname: playerlastname.value,
        playerphone: playerphone.value,
        playeraddress: playeraddress.value,
        playerhandicap: playerhandicap.value,
        playerreward: playreward.value,
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
    this.loadPlayersFromServer();
    // setInterval(this.loadPlayersFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Search Players</h1>
        <Playerform2 onPlayerSubmit={this.loadPlayersFromServer} />
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Handicap</th>
              <th>Reward</th>
            </tr>
          </thead>
          <PlayerList data={this.state.data} />
        </table>
      </div>
    );
  },
});

var Playerform2 = React.createClass({
  getInitialState: function () {
    return {
      playerid: "",
      playername: "",
      playeremail: "",
      playerfirstname: "",
      playerlastname: "",
      playerphone: "",
      playeraddress: "",
      playerhandicap: "",
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
    e.preventDefault();

    var playerid = this.state.playerid.trim();
    var playername = this.state.playername.trim();
    var playeremail = this.state.playeremail.trim();
    var playerfirstname = this.state.playerfirstname.trim();
    var playerlastname = this.state.playerlastname.trim();
    var playerphone = this.state.playerphone.trim();
    var playeraddress = this.state.playeraddress.trim();
    var playerhandicap = this.state.playerhandicap.trim();
    var playerreward = playreward.value;

    this.props.onPlayerSubmit({
      playerid: playerid,
      playername: playername,
      playeremail: playeremail,
      playerfirstname: playerfirstname,
      playerlastname: playerlastname,
      playerphone: playerphone,
      playeraddress: playeraddress,
      playerhandicap: playerhandicap,
      playerreward: playerreward,
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
        <h2>Players</h2>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>
                <input
                  type="text"
                  name="playerid"
                  id="playerid"
                  value={this.state.playerid}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Username</th>
              <td>
                <input
                  name="playername"
                  id="playername"
                  value={this.state.playername}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <input
                  name="playeremail"
                  id="playeremail"
                  value={this.state.playeremail}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>First Name</th>
              <td>
                <input
                  name="playerfirstname"
                  id="playerfirstname"
                  value={this.state.playerfirstname}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>
                <input
                  name="playerlastname"
                  id="playerlastname"
                  value={this.state.playerlastname}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>
                <input
                  name="playerphone"
                  id="playerphone"
                  value={this.state.playerphone}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Address</th>
              <td>
                <input
                  name="playeraddress"
                  id="playeraddress"
                  value={this.state.playeraddress}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Handicap</th>
              <td>
                <input
                  name="playerhandicap"
                  id="playerhandicap"
                  value={this.state.playerhandicap}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Reward</th>
              <td>
                <SelectList data={this.state.data} />
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
    var playerNodes = this.props.data.map(function (player) {
      //map the data to individual donations
      return (
        <Player
          key={player.PlayerID}
          playid={player.PlayerID}
          playname={player.PlayerName}
          playemail={player.PlayerEmail}
          playfirstname={player.PlayerFirstName}
          playlastname={player.PlayerLastName}
          playphone={player.PlayerPhone}
          playaddress={player.PlayerAddress}
          playhandicap={player.PlayerHandicap}
          playreward={player.RewardName}
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
        <td>{this.props.playid}</td>
        <td>{this.props.playname}</td>
        <td>{this.props.playemail}</td>
        <td>{this.props.playfirstname}</td>
        <td>{this.props.playlastname}</td>
        <td>{this.props.playphone}</td>
        <td>{this.props.playaddress}</td>
        <td>{this.props.playhandicap}</td>
        <td>{this.props.playreward}</td>
      </tr>
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
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

ReactDOM.render(<PlayerBox />, document.getElementById("content"));

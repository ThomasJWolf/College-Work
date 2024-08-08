var PlayerBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadPlayersFromServer: function () {
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
  updateSinglePlayFromServer: function (player) {
    $.ajax({
      url: "/players/updatesingleplay",
      dataType: "json",
      data: player,
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
    this.loadPlayersFromServer();
    // setInterval(this.loadPlayersFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Update Players</h1>
        <Playerform2 onPlayerSubmit={this.loadPlayersFromServer} />
        <br />
        <div id="theresults">
          <div id="theleft">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <PlayerList data={this.state.data} />
            </table>
          </div>
          <div id="theright">
            <PlayerUpdateform
              onUpdateSubmit={this.updateSinglePlayFromServer}
            />
          </div>
        </div>
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
    var playeremail = this.state.playeremail.trim();
    var playername = this.state.playername.trim();
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
      <div>
        <div id="theform">
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

var PlayerUpdateform = React.createClass({
  getInitialState: function () {
    return {
      upplayerkey: "",
      upplayerid: "",
      upplayername: "",
      upplayeremail: "",
      upplayerfirstname: "",
      upplayerlastname: "",
      upplayerphone: "",
      upplayeraddress: "",
      upplayerhandicap: "",
      updata: [],
    };
  },
  handleUpOptionChange: function (e) {
    this.setState({
      upselectedOption: e.target.value,
    });
  },
  loadPlayRewards: function () {
    $.ajax({
      url: "/players/getplayrewards",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ updata: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadPlayRewards();
  },
  handleUpSubmit: function (e) {
    e.preventDefault();

    var upplayerid = upplayid.value;
    var upplayeremail = upplayemail.value;
    var upplayername = upplayname.value;
    var upplayerfirstname = upplayfirstname.value;
    var upplayerlastname = upplaylastname.value;
    var upplayerphone = upplayphone.value;
    var upplayeraddress = upplayaddress.value;

    var upplayerhandicap = upplayhandicap.value;
    var upplayerreward = upplayreward.value;

    this.props.onUpdateSubmit({
      upplayerid: upplayerid,
      upplayername: upplayername,
      upplayeremail: upplayeremail,
      upplayerfirstname: upplayerfirstname,
      upplayerlastname: upplayerlastname,
      upplayerphone: upplayerphone,
      upplayeraddress: upplayeraddress,
      upplayerhandicap: upplayerhandicap,
      upplayerreward: upplayerreward,
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
                      name="upplayid"
                      id="upplayid"
                      value={this.state.upplayid}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Username</th>
                  <td>
                    <input
                      name="upplayname"
                      id="upplayname"
                      value={this.state.upplayname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>
                    <input
                      name="upplayemail"
                      id="upplayemail"
                      value={this.state.upplayemail}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <td>
                    <input
                      name="upplayfirstname"
                      id="upplayfirstname"
                      value={this.state.upplayfirstname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>
                    <input
                      name="upplaylastname"
                      id="upplaylastname"
                      value={this.state.upplaylastname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>
                    <input
                      name="upplayphone"
                      id="upplayphone"
                      value={this.state.upplayphone}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    <input
                      name="upplayaddress"
                      id="upplayaddress"
                      value={this.state.upplayaddress}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Handicap</th>
                  <td>
                    <input
                      name="upplayhandicap"
                      id="upplayhandicap"
                      value={this.state.upplayhandicap}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Player Reward</th>
                  <td>
                    <SelectUpdateList data={this.state.updata} />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="upplaykey"
              id="upplaykey"
              onChange={this.handleUpChange}
            />
            <input type="submit" value="Update Player" />
          </form>
          <form onSubmit={this.handleUpDelete}>
            <input type="submit" value="Delete Player" />
          </form>
        </div>
      </div>
    );
  },
});

var PlayerList = React.createClass({
  render: function () {
    var playerNodes = this.props.data.map(function (player) {
      return (
        <Player
          key={player.PlayerID}
          playid={player.PlayerID}
          playname={player.PlayerName}
          playemail={player.PlayerEmail}
        ></Player>
      );
    });

    //print all the nodes in the list
    return <tbody>{playerNodes}</tbody>;
  },
});

var Player = React.createClass({
  getInitialState: function () {
    return {
      upplaykey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var theupplaykey = this.props.playkey;

    this.loadSinglePlay(theupplaykey);
  },
  loadSinglePlay: function (theupplaykey) {
    $.ajax({
      url: "/players/getsingleplay",
      data: {
        upplaykey: theupplaykey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populatePlay = this.state.singledata.map(function (player) {
          upplaykey.value = theupplaykey;
          upplayid.value = player.PlayerID;
          upplayname.value = player.PlayerName;
          upplayemail.value = player.PlayerEmail;
          upplayfirstname.value = player.PlayerFirstName;
          upplaylastname.value = player.PlayerLastName;
          upplayphone.value = player.PlayerPhone;
          upplayaddress.value = player.PlayerAddress;
          upplayhandicap.value = player.PlayerHandicap;
          upplayreward.value = player.RewardID;
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
        <td>{this.props.playid}</td>
        <td>{this.props.playname}</td>
        <td>{this.props.playemail}</td>
        <td>
          <form onSubmit={this.updateRecord}>
            <input type="submit" value="Update Record" />
          </form>
        </td>
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

var SelectUpdateList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (playRewards) {
      return (
        <option key={playRewards.RewardID} value={playRewards.RewardID}>
          {playRewards.RewardName}
        </option>
      );
    });
    return (
      <select name="upplayreward" id="upplayreward">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

ReactDOM.render(<PlayerBox />, document.getElementById("content"));

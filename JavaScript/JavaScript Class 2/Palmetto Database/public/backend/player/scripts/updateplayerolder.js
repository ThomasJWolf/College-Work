var PlayerBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadPlayersFromServer: function () {
    $.ajax({
      url: "/players/getplay",
      data: {
        twplayerid: twplayerid.value,
        twplayername: twplayname.value,
        twplayeremail: twplayemail.value,
        twplayerfirstname: twplayfirstname.value,
        twplayerlastname: twplaylastname.value,
        twplayerphone: twplayphone.value,
        twplayeraddress: twplayaddress.value,
        twplayerhandicap: twplayhandicap.value,
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
  updateSinglePlayFromServer: function (twplayer) {
    $.ajax({
      url: "/players/updatesingleplay",
      dataType: "json",
      data: twplayer,
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
            <table className="listing-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th></th>
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
      twplayerid: "",
      twplayername: "",
      twplayeremail: "",
      twplayerfirstname: "",
      twplayerlastname: "",
      twplayerphone: "",
      twplayeraddress: "",
      twplayerhandicap: "",
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

    var twplayerid = this.state.twplayerid.trim();
    var twplayeremail = twplayemail.value;
    var twplayername = twplayname.value;
    var twplayerfirstname = twplayfirstname.value;
    var twplayerlastname = twplaylastname.value;
    var twplayerphone = twplayphone.value;
    var twplayeraddress = twplayaddress.value;
    var twplayerhandicap = twplayhandicap.value;
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
                      name="twplayname"
                      id="twplayname"
                      value={this.state.twplayname}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>
                    <input
                      name="twplayemail"
                      id="twplayemail"
                      value={this.state.twplayemail}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <td>
                    <input
                      name="twplayfirstname"
                      id="twplayfirstname"
                      value={this.state.twplayfirstname}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>
                    <input
                      name="twplaylastname"
                      id="twplaylastname"
                      value={this.state.twplaylastname}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>
                    <input
                      name="twplayphone"
                      id="twplayphone"
                      value={this.state.twplayphone}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    <input
                      name="twplayaddress"
                      id="twplayaddress"
                      value={this.state.twplayaddress}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Handicap</th>
                  <td>
                    <input
                      name="twplayhandicap"
                      id="twplayhandicap"
                      value={this.state.twplayhandicap}
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
      twupplaykey: "",
      twupplayid: "",
      twupplayname: "",
      twupplayemail: "",
      twupplayfirstname: "",
      twupplaylastname: "",
      twupplayphone: "",
      twupplayaddress: "",
      twupplayhandicap: "",
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

    var twupplayerid = this.state.twupplayid.trim();
    var twupplayeremail = twupplayemail.value;
    var twupplayername = twupplayname.value;
    var twupplayerfirstname = twupplayfirstname.value;
    var twupplayerlastname = twupplaylastname.value;
    var twupplayerphone = twupplayphone.value;
    var twupplayeraddress = twupplayaddress.value;
    var twupplayerhandicap = twupplayhandicap.value;
    var twupplayerreward = twupplayreward.value;

    this.props.onUpdateSubmit({
      twupplayerid: twupplayerid,
      twupplayername: twupplayername,
      twupplayeremail: twupplayeremail,
      twupplayerfirstname: twupplayerfirstname,
      twupplayerlastname: twupplayerlastname,
      twupplayerphone: twupplayerphone,
      twupplayeraddress: twupplayeraddress,
      twupplayerhandicap: twupplayerhandicap,
      twupplayerreward: twupplayerreward,
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
                      name="twupplayerid"
                      id="twupplayid"
                      onChange={this.handleUpChange}
                    />
                </tr>
                <tr>
                  <th>Username</th>
                  <td>
                    <input
                      name="twupplayname"
                      id="twupplayname"
                      value={this.state.twupplayname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>
                    <input
                      name="twupplayemail"
                      id="twupplayemail"
                      value={this.state.twupplayemail}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <td>
                    <input
                      name="twupplayfirstname"
                      id="twupplayfirstname"
                      value={this.state.twupplayfirstname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>
                    <input
                      name="twupplaylastname"
                      id="twupplaylastname"
                      value={this.state.twupplaylastname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>
                    <input
                      name="twupplayphone"
                      id="twupplayphone"
                      value={this.state.twupplayphone}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    <input
                      name="twupplayaddress"
                      id="twupplayaddress"
                      value={this.state.twupplayaddress}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Handicap</th>
                  <td>
                    <input
                      name="twupplayhandicap"
                      id="twupplayhandicap"
                      value={this.state.twupplayhandicap}
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
              name="twupplaykey"
              id="twupplaykey"
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
    var playerNodes = this.props.data.map(function (twplayer) {
      return (
        <Player
          key={twplayer.PlayerID}
          twplayid={twplayer.PlayerID}
          twplayname={twplayer.PlayerName}
          twplayemail={twplayer.PlayerEmail}
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
      twupplaykey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var thetwupplaykey = this.props.twplayid;

    this.loadSinglePlay(thetwupplaykey);
  },
  loadSinglePlay: function (thetwupplaykey) {
    $.ajax({
      url: "/players/getsingleplay",
      data: {
        twupplaykey: thetwupplaykey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populatePlay = this.state.singledata.map(function (twplayer) {
          twupplaykey.value = thetwupplaykey;
          twupplayid.value = twplayer.PlayerID;
          twupplayname.value = twplayer.PlayerName;
          twupplayemail.value = twplayer.PlayerEmail;
          twupplayfirstname.value = twplayer.PlayerFirstName;
          twupplaylastname.value = twplayer.PlayerLastName;
          twupplayphone.value = twplayer.PlayerPhone;
          twupplayaddress.value = twplayer.PlayerAddress;
          twupplayhandicap.value = twplayer.PlayerHandicap;
          twupplayreward.value = twplayer.RewardID;
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
        <td>{this.props.twplayid}</td>
        <td>{this.props.twplayname}</td>
        <td>{this.props.twplayemail}</td>
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

var SelectUpdateList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twplayRewards) {
      return (
        <option key={twplayRewards.RewardID} value={twplayRewards.RewardID}>
          {twplayRewards.RewardName}
        </option>
      );
    });
    return (
      <select name="twupplayreward" id="twupplayreward">
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

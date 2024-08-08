var PurchaseBox = React.createClass({
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
                this.loadPurchasesFromServer(); // Now only loads if the role is appropriate
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
  loadPurchasesFromServer: function () {
    $.ajax({
      url: "/purchases/getprch",
      data: {
        twpurchaseid: twpurchaseid.value,
        twpurchaseuser: twprchuser.value,
        twpurchaseplayer: twprchplayer.value,
        twpurchaseammount: twpurchaseammount.value,
        twpurchasedate: twpurchasedate.value,
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
          <Purchaseform2 onPurchaseSubmit={this.loadPurchasesFromServer} />
          <br />
            <PurchaseList data={this.state.data} />
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

var Purchaseform2 = React.createClass({
  getInitialState: function () {
    return {
      twpurchaseid: "",
      twdatauser: [],
      twdataplayer: [],
      twpurchaseammount: "",
      twpurchasedate: "",
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  loadPrchUsers: function () {
    $.ajax({
      url: "/purchases/getprchusers",
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

  loadPrchPlayers: function () {
    $.ajax({
      url: "/purchases/getprchplayers",
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
  componentDidMount: function () {
    this.loadPrchUsers();
    this.loadPrchPlayers();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var twpurchaseid = this.state.twpurchaseid.trim();
    var twpurchaseuser = twprchuser.value;
    var twpurchaseplayer = twprchplayer.value;
    var twpurchaseammount = this.state.twpurchaseammount.trim();
    var twpurchasedate = this.state.twpurchasedate.trim();

    this.props.onPurchaseSubmit({
      twpurchaseid: twpurchaseid,
      twpurchaseuser: twpurchaseuser,
      twpurchaseplayer: twpurchaseplayer,
      twpurchaseammount: twpurchaseammount,
      twpurchasedate: twpurchasedate,
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
        <h2>Search Purchases</h2>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>
                <input
                  type="text"
                  name="twpurchaseid"
                  id="twpurchaseid"
                  value={this.state.twpurchaseid}
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
              <th>Ammount</th>
              <td>
                <input
                  type="text"
                  name="twpurchaseammount"
                  id="twpurchaseammount"
                  value={this.state.twpurchaseammount}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Date</th>
              <td>
                <input
                  type="text"
                  name="twpurchasedate"
                  id="twpurchasedate"
                  value={this.state.twpurchasedate}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Search Purchase" />
      </form>
    );
  },
});

var PurchaseList = React.createClass({
  render: function () {
    var purchaseNodes = this.props.data.map(function (twpurchase) {
      //map the data to individual donations
      return (
        <Purchase
          key={twpurchase.PurchaseID}
          twprchid={twpurchase.PurchaseID}
          twprchuser={twpurchase.UserName}
          twprchplayer={twpurchase.PlayerName}
          twprchammount={twpurchase.PurchaseAmmount}
          twprchdate={twpurchase.PurchaseDate}
        ></Purchase>
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
            <th>Ammount</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{purchaseNodes}</tbody>
      </table>
    );
  },
});

var Purchase = React.createClass({
  render: function () {
    var dateOnly = this.props.twprchdate
      ? this.props.twprchdate.substring(0, 10)
      : "";
    var timeOnly = this.props.twprchdate
      ? this.props.twprchdate.substring(11, 19)
      : "";
    return (
      <tr>
        <td>{this.props.twprchid}</td>
        <td>{this.props.twprchuser}</td>
        <td>{this.props.twprchplayer}</td>
        <td>{this.props.twprchammount}</td>
        <td>{dateOnly}</td>
        <td>{timeOnly}</td>
      </tr>
    );
  },
});

var SelectListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twprchUsers) {
      return (
        <option key={twprchUsers.UserID} value={twprchUsers.UserID}>
          {twprchUsers.UserName}
        </option>
      );
    });
    return (
      <select name="twprchuser" id="twprchuser">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twprchPlayers) {
      return (
        <option key={twprchPlayers.PlayerID} value={twprchPlayers.PlayerID}>
          {twprchPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="twprchplayer" id="twprchplayer">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

const App = () => (
  <div id="content">
    <PurchaseBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

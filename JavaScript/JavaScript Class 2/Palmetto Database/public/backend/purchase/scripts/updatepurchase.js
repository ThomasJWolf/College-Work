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
              if ([1, 2, 3].includes(this.state.viewthepage)) {
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
        twpurchaseammount: twprchammount.value,
        twpurchasedate: twprchdate.value,
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
  updateSinglePrchFromServer: function (twpurchase) {
    $.ajax({
      url: "/purchases/updatesingleprch",
      dataType: "json",
      data: twpurchase,
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
      [1, 2, 3].includes(this.state.viewthepage) &&
      this.state.viewthepage != 0
    ) {
      return (
        <div>
          <Purchaseform2 onPurchaseSubmit={this.loadPurchasesFromServer} />
          <br />
          <div id="theresults">
            <div id="theleft">
              <table className="listing-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Ammount</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <PurchaseList data={this.state.data} />
              </table>
            </div>
            <div id="theright">
              <PurchaseUpdateform
                onUpdateSubmit={this.updateSinglePrchFromServer}
              />
            </div>
          </div>
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
    var twpurchaseammount = twprchammount.value;
    var twpurchasedate = twprchdate.value;

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
    console.log(this.state);
  },
  render: function () {
    return (
      <div>
        <div id="theform">
          <form onSubmit={this.handleSubmit}>
            <h2>Update Purchases</h2>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="twpurchaseid"
                      id="twpurchaseid"
                      value={this.state.purchaseid}
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
                      name="twprchammount"
                      id="twprchammount"
                      value={this.state.twprchammount}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>
                    <input
                      type="date"
                      name="twprchdate"
                      id="twprchdate"
                      value={this.state.twprchdate}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" value="Search Purchase" />
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

var PurchaseUpdateform = React.createClass({
  getInitialState: function () {
    return {
      twuppurchaseid: "",
      twupdatauser: [],
      twupdataplayer: [],
      twuppurchaseammount: "",
      twuppurchasedate: "",
    };
  },
  handleUpOptionChange: function (e) {
    this.setState({
      upselectedOption: e.target.value,
    });
  },
  loadPrchUsers: function () {
    $.ajax({
      url: "/purchases/getprchusers",
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
  loadPrchPlayers: function () {
    $.ajax({
      url: "/purchases/getprchplayers",
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
  componentDidMount: function () {
    this.loadPrchUsers();
    this.loadPrchPlayers();
  },
  handleUpSubmit: function (e) {
    e.preventDefault();

    var twuppurchaseid = twupprchid.value;
    var twuppurchaseuser = twupprchuser.value;
    var twuppurchaseplayer = twupprchplayer.value;
    var twuppurchaseammount = twupprchammount.value;
    var twuppurchasedate = twupprchdate.value;

    this.props.onUpdateSubmit({
      twuppurchaseid: twuppurchaseid,
      twuppurchaseuser: twuppurchaseuser,
      twuppurchaseplayer: twuppurchaseplayer,
      twuppurchaseammount: twuppurchaseammount,
      twuppurchasedate: twuppurchasedate,
    });
  },
  handleUpChange: function (event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
    console.log(this.state);
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
                    name="twupprchid"
                    id="twupprchid"
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
                  <th>Ammount</th>
                  <td>
                    <input
                      type="text"
                      name="twupprchammount"
                      id="twupprchammount"
                      value={this.state.twupprchammount}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>
                    <input
                      type="datetime-local"
                      name="twupprchdate"
                      id="twupprchdate"
                      value={this.state.twupprchdate}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="twupprchkey"
              id="twupprchkey"
              onChange={this.handleUpChange}
            />
            <input type="submit" value="Update Purchase" />
          </form>
          <form onSubmit={this.handleUpDelete}>
            <input type="submit" value="Delete Purchase" />
          </form>
        </div>
      </div>
    );
  },
});

var PurchaseList = React.createClass({
  render: function () {
    var purchaseNodes = this.props.data.map(function (twpurchase) {
      return (
        <Purchase
          key={twpurchase.PurchaseID}
          twprchid={twpurchase.PurchaseID}
          twprchname={twpurchase.UserName}
          twprchprice={twpurchase.PlayerName}
          twprchammount={twpurchase.PurchaseAmmount}
          twprchdate={twpurchase.PurchaseDate}
        ></Purchase>
      );
    });

    //print all the nodes in the list
    return <tbody>{purchaseNodes}</tbody>;
  },
});

var Purchase = React.createClass({
  getInitialState: function () {
    return {
      twupprchkey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var thetwupprchkey = this.props.twprchid;

    this.loadSinglePrch(thetwupprchkey);
  },
  loadSinglePrch: function (thetwupprchkey) {
    $.ajax({
      url: "/purchases/getsingleprch",
      data: {
        twupprchkey: thetwupprchkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populatePrch = this.state.singledata.map(function (twpurchase) {
          twupprchkey.value = thetwupprchkey;
          twupprchid.value = twpurchase.PurchaseID;
          twupprchuser.value = twpurchase.UserID;
          twupprchplayer.value = twpurchase.PlayerID;
          twupprchammount.value = twpurchase.PurchaseAmmount;
          twupprchdate.value = twpurchase.PurchaseDate.slice(0, 16);
        });

        console.log(
          twupprchid.value,
          twupprchuser.value,
          twupprchplayer.value,
          twupprchammount.value
        );
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        console.log("TEST");
      }.bind(this),
    });
  },

  render: function () {

        var dateOnly = this.props.twprchdate
          ? this.props.twprchdate.substring(0, 10)
          : "";

        var timeOnly = this.props.twprchdate
          ? this.props.twprchdate.substring(11, 19)
          : "";

        var formattedDateTime = dateOnly + " " + timeOnly;

    return (
      <tr>
        <td>{this.props.twprchid}</td>
        <td>{this.props.twprchammount}</td>
        <td>{formattedDateTime}</td>
        <td>
          <form onSubmit={this.updateRecord}>
            <input type="submit" value="Update Record" />
          </form>
        </td>
      </tr>
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

var SelectUpdateListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twprchPlayers) {
      return (
        <option key={twprchPlayers.PlayerID} value={twprchPlayers.PlayerID}>
          {twprchPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="twupprchplayer" id="twupprchplayer">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twprchUsers) {
      return (
        <option key={twprchUsers.UserID} value={twprchUsers.UserID}>
          {twprchUsers.UserName}
        </option>
      );
    });
    return (
      <select name="twupprchuser" id="twupprchuser">
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

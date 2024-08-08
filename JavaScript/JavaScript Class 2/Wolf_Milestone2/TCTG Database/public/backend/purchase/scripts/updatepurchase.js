var PurchaseBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadPurchasesFromServer: function () {
    $.ajax({
      url: "/purchases/getprch",
      data: {
        purchaseid: purchaseid.value,
        purchaseuser: prchuser.value,
        purchaseplayer: prchplayer.value,
        purchaseammount: prchammount.value,
        purchasedate: prchdate.value,
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
  updateSinglePrchFromServer: function (purchase) {
    $.ajax({
      url: "/purchases/updatesingleprch",
      dataType: "json",
      data: purchase,
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
    this.loadPurchasesFromServer();
    // setInterval(this.loadPurchasesFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Update Purchases</h1>
        <Purchaseform2 onPurchaseSubmit={this.loadPurchasesFromServer} />
        <br />
        <div id="theresults">
          <div id="theleft">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ammount</th>
                  <th>Date</th>
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
  },
});

var Purchaseform2 = React.createClass({
  getInitialState: function () {
    return {
      purchaseid: "",
      datauser: [],
      dataplayer: [],
      purchaseammount: "",
      purchasedate: "",
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
        this.setState({ datauser: data });
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
        this.setState({ dataplayer: data });
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

    var purchaseid = this.state.purchaseid.trim();
    var purchaseuser = prchuser.value;
    var purchaseplayer = prchplayer.value;
    var purchaseammount = prchammount.value;
    var purchasedate = prchdate.value;

    this.props.onPurchaseSubmit({
      purchaseid: purchaseid,
      purchaseuser: purchaseuser,
      purchaseplayer: purchaseplayer,
      purchaseammount: purchaseammount,
      purchasedate: purchasedate,
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
            <h2>Purchases</h2>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="purchaseid"
                      id="purchaseid"
                      value={this.state.purchaseid}
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
                  <th>Ammount</th>
                  <td>
                    <input
                      type="text"
                      name="prchammount"
                      id="prchammount"
                      value={this.state.prchammount}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>
                    <input
                      type="date"
                      name="prchdate"
                      id="prchdate"
                      value={this.state.prchdate}
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
      uppurchaseid: "",
      updatauser: [],
      updataplayer: [],
      uppurchaseammount: "",
      uppurchasedate: "",
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
        this.setState({ updatauser: data });
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
        this.setState({ updataplayer: data });
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

    var uppurchaseid = upprchid.value;
    var uppurchaseuser = upprchuser.value;
    var uppurchaseplayer = upprchplayer.value;
    var uppurchaseammount = upprchammount.value;
    var uppurchasedate = upprchdate.value;

    this.props.onUpdateSubmit({
      uppurchaseid: uppurchaseid,
      uppurchaseuser: uppurchaseuser,
      uppurchaseplayer: uppurchaseplayer,
      uppurchaseammount: uppurchaseammount,
      uppurchasedate: uppurchasedate,
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
                      name="upprchid"
                      id="upprchid"
                      value={this.state.upprchid}
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
                  <th>Ammount</th>
                  <td>
                    <input
                      type="text"
                      name="upprchammount"
                      id="upprchammount"
                      value={this.state.upprchammount}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Date</th>
                  <td>
                    <input
                      type="date"
                      name="upprchdate"
                      id="upprchdate"
                      value={this.state.upprchdate}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="upprchkey"
              id="upprchkey"
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
    var purchaseNodes = this.props.data.map(function (purchase) {
      return (
        <Purchase
          key={purchase.PurchaseID}
          prchid={purchase.PurchaseID}
          prchname={purchase.UserName}
          prchprice={purchase.PlayerName}
          prchammount={purchase.PurchaseAmmount}
          prchdate={purchase.PurchaseDate}
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
      upprchkey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var theupprchkey = this.props.prchkey;

    this.loadSinglePrch(theupprchkey);
  },
  loadSinglePrch: function (theupprchkey) {
    $.ajax({
      url: "/purchases/getsingleprch",
      data: {
        upprchkey: theupprchkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populatePrch = this.state.singledata.map(function (purchase) {
          upprchkey.value = theupprchkey;
          upprchid.value = purchase.PurchaseID;
          upprchuser.value = purchase.UserID;
          upprchplayer.value = purchase.PlayerID;
          upprchammount.value = purchase.PurchaseAmmount;
          upprchdate.value = purchase.PurchaseDate;
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
        <td>{this.props.prchid}</td>
        <td>{this.props.prchuser}</td>
        <td>{this.props.prchplayer}</td>
        <td>{this.props.prchammount}</td>
        <td>{this.props.prchdate}</td>
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
    var optionNodes = this.props.data.map(function (prchPlayers) {
      return (
        <option key={prchPlayers.PlayerID} value={prchPlayers.PlayerID}>
          {prchPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="prchplayer" id="prchplayer">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (prchUsers) {
      return (
        <option key={prchUsers.UserID} value={prchUsers.UserID}>
          {prchUsers.UserName}
        </option>
      );
    });
    return (
      <select name="prchuser" id="prchuser">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (prchPlayers) {
      return (
        <option key={prchPlayers.PlayerID} value={prchPlayers.PlayerID}>
          {prchPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="upprchplayer" id="upprchplayer">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (prchUsers) {
      return (
        <option key={prchUsers.UserID} value={prchUsers.UserID}>
          {prchUsers.UserName}
        </option>
      );
    });
    return (
      <select name="upprchuser" id="upprchuser">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

ReactDOM.render(<PurchaseBox />, document.getElementById("content"));

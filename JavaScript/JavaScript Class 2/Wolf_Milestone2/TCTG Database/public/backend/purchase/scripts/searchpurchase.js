var PurchaseBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadPurchasesFromServer: function () {
    console.log(emailervalue);
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
  componentDidMount: function () {
    this.loadPurchasesFromServer();
    // setInterval(this.loadPurchasesFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Search Purchases</h1>
        <Purchaseform2 onPurchaseSubmit={this.loadPurchasesFromServer} />
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Player</th>
              <th>Ammount</th>
              <th>Date</th>
            </tr>
          </thead>
          <PurchaseList data={this.state.data} />
        </table>
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
    var purchaseammount = this.state.purchaseammount.trim();
    var purchasedate = this.state.purchasedate.trim();

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
                  name="purchaseammount"
                  id="purchaseammount"
                  value={this.state.purchaseammount}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Date</th>
              <td>
                <input
                  type="text"
                  name="purchasedate"
                  id="purchasedate"
                  value={this.state.purchasedate}
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
    var purchaseNodes = this.props.data.map(function (purchase) {
      //map the data to individual donations
      return (
        <Purchase
          key={purchase.PurchaseID}
          prchid={purchase.PurchaseID}
          prchuser={purchase.UserName}
          prchplayer={purchase.PlayerName}
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
  render: function () {
    return (
      <tr>
        <td>{this.props.prchid}</td>
        <td>{this.props.prchuser}</td>
        <td>{this.props.prchplayer}</td>
        <td>{this.props.prchammount}</td>
        <td>{this.props.prchdate}</td>
      </tr>
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
      <select name="prchuser" id="prchuser">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

ReactDOM.render(<PurchaseBox />, document.getElementById("content"));

var CartBox = React.createClass({
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
                this.loadCartsFromServer(); // Now only loads if the role is appropriate
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
  loadCartsFromServer: function () {
    var cpickupvalue = 2;
    if (twcrtpickupyes.checked) {
      cpickupvalue = 1;
    }
    if (twcrtpickupno.checked) {
      cpickupvalue = 0;
    }

    var cmadevalue = 2;
    if (twcrtmadeyes.checked) {
      cmadevalue = 1;
    }
    if (twcrtmadeno.checked) {
      cmadevalue = 0;
    }
    $.ajax({
      url: "/carts/getcrt",
      data: {
        twcartid: twcartid.value,
        twcartdailyid: twcartdailyid.value,
        twcartuser: twcrtuser.value,
        twcartplayer: twcrtplayer.value,
        twcartpickup: cpickupvalue,
        twcartmade: cmadevalue,
        twcartdate: twcartdate.value,
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
          <Cartform2 onCartSubmit={this.loadCartsFromServer} />
          <br />
          <CartList data={this.state.data} />
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

var Cartform2 = React.createClass({
  getInitialState: function () {
    return {
      twcartid: "",
      twcartdailyid: "",
      twdatauser: [],
      twdataplayer: [],
      twcartpickup: "",
      twcartmade: "",
      twcartdate: "",
    };
  },
  handleOptionChangePickup: function (e) {
    this.setState({
      selectedOptionPickup: e.target.value,
    });
  },
  handleOptionChangeMade: function (e) {
    this.setState({
      selectedOptionMade: e.target.value,
    });
  },
  loadCartUsers: function () {
    $.ajax({
      url: "/carts/getcrtusers",
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

  loadCartPlayers: function () {
    $.ajax({
      url: "/carts/getcrtplayers",
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
    this.loadCartUsers();
    this.loadCartPlayers();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var twcartid = this.state.twcartid.trim();
    var twcartdailyid = this.state.twcartdailyid.trim();
    var twcartuser = twcrtuser.value;
    var twcartplayer = twcrtplayer.value;
    var twcartpickup = this.state.selectedOptionPickup;
    var twcartmade = this.state.selectedOptionMade;
    var twcartdate = this.state.twcartdate.trim();

    this.props.onCartSubmit({
      twcartid: twcartid,
      twcartdailyid: twcartdailyid,
      twcartuser: twcartuser,
      twcartplayer: twcartplayer,
      twcartpickup: twcartpickup,
      twcartmade: twcartmade,
      twcartdate: twcartdate,
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
        <h2>Search Carts</h2>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>
                <input
                  type="text"
                  name="twcartid"
                  id="twcartid"
                  value={this.state.twcartid}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Daily ID</th>
              <td>
                <input
                  type="number"
                  name="twcartdailyid"
                  id="twcartdailyid"
                  value={this.state.twcartdailyid}
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
              <th>Pickup</th>
              <td>
                <label>
                  <input
                    type="radio"
                    name="twcrtpickup"
                    id="twcrtpickupyes"
                    value="1"
                    checked={this.state.selectedOptionPickup === "1"}
                    onChange={this.handleOptionChangePickup}
                    className="form-check-input"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="twcrtpickup"
                    id="twcrtpickupno"
                    value="0"
                    checked={this.state.selectedOptionPickup === "0"}
                    onChange={this.handleOptionChangePickup}
                    className="form-check-input"
                  />
                  No
                </label>
              </td>
            </tr>
            <tr>
              <th>Made</th>
              <td>
                <label>
                  <input
                    type="radio"
                    name="twcrtmade"
                    id="twcrtmadeyes"
                    value="1"
                    checked={this.state.selectedOptionMade === "1"}
                    onChange={this.handleOptionChangeMade}
                    className="form-check-input"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="twcrtmade"
                    id="twcrtmadeno"
                    value="0"
                    checked={this.state.selectedOptionMade === "0"}
                    onChange={this.handleOptionChangeMade}
                    className="form-check-input"
                  />
                  No
                </label>
              </td>
            </tr>
            <tr>
              <th>Date</th>
              <td>
                <input
                  type="date"
                  name="twcartdate"
                  id="twcartdate"
                  value={this.state.twcartdate}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Search Cart" />
      </form>
    );
  },
});

var CartList = React.createClass({
  render: function () {
    var cartNodes = this.props.data.map(function (twcart) {
      //map the data to individual donations
      return (
        <Cart
          key={twcart.CartID}
          twcrtid={twcart.CartID}
          twcrtdailyid={twcart.CartDailyID}
          twcrtuser={twcart.UserID}
          twcrtplayer={twcart.PlayerID}
          twcrtdate={twcart.CartDate}
          twcrtpickup={twcart.CartPickup}
          twcrtmade={twcart.CartMade}
        ></Cart>
      );
    });

    //print all the nodes in the list
    return (
      <table className="listing-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Daily ID</th>
            <th>User</th>
            <th>Player</th>
            <th>Pickup</th>
            <th>Made</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{cartNodes}</tbody>
      </table>
    );
  },
});

var Cart = React.createClass({
  render: function () {
    if (this.props.twcrtpickup == 1) {
      var thepickup = "Yes";
    } else {
      var thepickup = "No";
    }
    if (this.props.twcrtmade == 1) {
      var themade = "Yes";
    } else {
      var themade = "No";
    }

    console.log(this.props.twcrtuser);

    var dateOnly = this.props.twcrtdate
      ? this.props.twcrtdate.substring(0, 10)
      : "";

    var timeOnly = this.props.twcrtdate
      ? this.props.twcrtdate.substring(11, 19)
      : "";
    return (
      <tr>
        <td>{this.props.twcrtid}</td>
        <td>{this.props.twcrtdailyid}</td>
        <td>{this.props.twcrtuser}</td>
        <td>{this.props.twcrtplayer}</td>
        <td>{thepickup}</td>
        <td>{themade}</td>
        <td>{dateOnly}</td>
        <td>{timeOnly}</td>
      </tr>
    );
  },
});

var SelectListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twcrtUsers) {
      return (
        <option key={twcrtUsers.UserID} value={twcrtUsers.UserID}>
          {twcrtUsers.UserName}
        </option>
      );
    });
    return (
      <select name="twcrtuser" id="twcrtuser">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twcrtPlayers) {
      return (
        <option key={twcrtPlayers.PlayerID} value={twcrtPlayers.PlayerID}>
          {twcrtPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="twcrtplayer" id="twcrtplayer">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

const App = () => (
  <div id="content">
    <CartBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

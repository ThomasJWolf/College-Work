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
              if ([1, 2, 3].includes(this.state.viewthepage)) {
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
    var twcpickupvalue = 2;
    if (twcrtpickupyes.checked) {
      twcpickupvalue = 1;
    }
    if (twcrtpickupno.checked) {
      twcpickupvalue = 0;
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
        twcartpickup: twcpickupvalue,
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
  updateSingleCrtFromServer: function (cart) {
    $.ajax({
      url: "/carts/updatesinglecrt",
      dataType: "json",
      data: cart,
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
          <Cartform2 onCartSubmit={this.loadCartsFromServer} />
          <br />
          <div id="theresults">
            <div id="theleft">
              <table className="listing-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Daily ID</th>
                    <th>Pickup</th>
                    <th>Made</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th></th>
                  </tr>
                </thead>
                <CartList data={this.state.data} />
              </table>
            </div>
            <div id="theright">
              <CartUpdateform onUpdateSubmit={this.updateSingleCrtFromServer} />
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

var Cartform2 = React.createClass({
  getInitialState: function () {
    return {
      twcartid: "",
      twcartdailyid: "",
      twdatauser: [],
      twdataplayer: [],
      twcrtpickup: "",
      twcrtmade: "",
      twcartdate: "",
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  loadCrtUsers: function () {
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
  loadCrtPlayers: function () {
    $.ajax({
      url: "/carts/getcrtusers",
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
    this.loadCrtUsers();
    this.loadCrtPlayers();
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
      <div>
        <div id="theform">
          <form onSubmit={this.handleSubmit}>
            <h2>Update Carts</h2>
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
        </div>
        <div>
          <form onSubmit={this.getInitialState}>
            <input type="submit" value="Clear Form" />
          </form>
        </div>
      </div>
    );
  },
});

var CartUpdateform = React.createClass({
  getInitialState: function () {
    return {
      twupcrtid: "",
      twupdailyid: "",
      twupuser: "",
      twupplayer: "",
      twuppickup: "",
      twupmade: "",
      twupdate: "",
      twupdatauser: [],
      twupdataplayer: [],
    };
  },
  handleUpOptionChangePickup: function (e) {
    this.setState({
      upselectedOptionPickup: e.target.value,
    });
  },
  handleUpOptionChangeMade: function (e) {
    this.setState({
      upselectedOptionMade: e.target.value,
    });
  },
  loadCrtUsers: function () {
    $.ajax({
      url: "/carts/getcrtusers",
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
  loadCrtPlayers: function () {
    $.ajax({
      url: "/carts/getcrtusers",
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
    this.loadCrtUsers();
    this.loadCrtPlayers();
  },
  handleUpSubmit: function (e) {
    e.preventDefault();

    var twupcartid = twupcrtid.value;
    var twupcartdailyid = twupcrtdailyid.value;
    var twupcartuser = twupcrtuser.value;
    var twupcartplayer = twupcrtplayer.value;
    var twupcartpickup = twupcrtpickup.value;
    var twupcartmade = twupcrtmade.value;
    var twupcartdate = twupcrtdate.value;

    this.props.onUpdateSubmit({
      twupcartid: twupcartid,
      twupcartdailyid: twupcartdailyid,
      twupcartuser: twupcartuser,
      twupcartplayer: twupcartplayer,
      twupcartpickup: twupcartpickup,
      twupcartmade: twupcartmade,
      twupcartdate: twupcartdate,
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
                    name="twupcrtid"
                    id="twupcrtid"
                    onChange={this.handleUpChange}
                  />
                </tr>
                <tr>
                  <th>Daily ID</th>
                  <td>
                    <input
                      type="number"
                      name="twupcrtdailyid"
                      id="twupcrtdailyid"
                      value={this.state.twupcrtdailyid}
                      onChange={this.handleUpChange}
                    />
                  </td>
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
                  <th>Pickup</th>
                  <td>
                    <label>
                      <input
                        type="radio"
                        name="twupcrtpickup"
                        id="twupcrtpickup"
                        value="1"
                        checked={this.state.upselectedOptionPickup === "1"}
                        onChange={this.handleUpOptionChangePickup}
                        className="form-check-input"
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="twupcrtpickup"
                        id="twupcrtpickup"
                        value="0"
                        checked={this.state.upselectedOptionPickup === "0"}
                        onChange={this.handleUpOptionChangePickup}
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
                        name="twupcrtmade"
                        id="twupcrtmade"
                        value="1"
                        checked={this.state.upselectedOptionMade === "1"}
                        onChange={this.handleUpOptionChangeMade}
                        className="form-check-input"
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="twupcrtmade"
                        id="twupcrtmade"
                        value="0"
                        checked={this.state.upselectedOptionMade === "0"}
                        onChange={this.handleUpOptionChangeMade}
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
                      name="twupcartdate"
                      id="twupcartdate"
                      value={this.state.twupcartdate}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <input
              type="hidden"
              name="twupcrtkey"
              id="twupcrtkey"
              onChange={this.handleUpChange}
            />
            <input type="submit" value="Update Cart" />
          </form>
          <form onSubmit={this.handleUpDelete}>
            <input type="submit" value="Delete Cart" />
          </form>
        </div>
      </div>
    );
  },
});

var CartList = React.createClass({
  render: function () {
    var cartNodes = this.props.data.map(function (twcart) {
      return (
        <Cart
          key={twcart.CartID}
          twcrtid={twcart.CartID}
          twcrtuser={twcart.UserName}
          twcrtprice={twcart.PlayerName}
          twcrtpickup={twcart.CartPickup}
          twcrtmade={twcart.CartMade}
          twcrtdate={twcart.CartDate}
        ></Cart>
      );
    });

    //print all the nodes in the list
    return <tbody>{cartNodes}</tbody>;
  },
});

var Cart = React.createClass({
  getInitialState: function () {
    return {
      twupcrtkey: "",
      twupcrtid: "",
      twupcrtdailyid: "",
      twupcrtuser: "",
      twupcrtplayer: "",
      twupcrtpickup: "",
      twupcrtmade: "",
      twupcrtdate: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var thetwupcrtkey = this.props.twcrtid;

    this.loadSingleCrt(thetwupcrtkey);
  },
  loadSingleCrt: function (thetwupcrtkey) {
    $.ajax({
      url: "/carts/getsinglecrt",
      data: {
        twupcrtkey: thetwupcrtkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populateCrt = this.state.singledata.map(function (twcart) {
          twupcrtkey.value = thetwupcrtkey;
          twupcrtid.value = twcart.CartID;
          twupcrtdailyid.value = twcart.CartDailyID;
          twupcrtuser.value = twcart.UserID;
          twupcrtplayer.value = twcart.PlayerID;
          if (twcart.CartPickup == 1) {
            twcrtpickupyes.checked = true;
          } else {
            twcrtpickupno.checked = true;
          }
          if (twcart.CartMade == 1) {
            twcrtmadeyes.checked = true;
          } else {
            twcrtmadeno.checked = true;
          }
          twupcrtmade.value = twcart.CartMade;
          twupcrtdate.value = twcart.CartDate.split(0, 10);
        });

        console.log(twupcrtid.value);
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

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
        <td>{thepickup}</td>
        <td>{themade}</td>
        <td>{dateOnly}</td>
        <td>{timeOnly}</td>
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
    var optionNodes = this.props.data.map(function (twcartPlayers) {
      return (
        <option key={twcartPlayers.PlayerID} value={twcartPlayers.PlayerID}>
          {twcartPlayers.PlayerName}
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

var SelectListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twcartUsers) {
      return (
        <option key={twcartUsers.UserID} value={twcartUsers.UserID}>
          {twcartUsers.UserName}
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

var SelectUpdateListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twcartPlayers) {
      return (
        <option key={twcartPlayers.PlayerID} value={twcartPlayers.PlayerID}>
          {twcartPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="twupcrtplayer" id="twupcrtplayer">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twcartUsers) {
      return (
        <option key={twcartUsers.UserID} value={twcartUsers.UserID}>
          {twcartUsers.UserName}
        </option>
      );
    });
    return (
      <select name="twupcrtuser" id="twupcrtuser">
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

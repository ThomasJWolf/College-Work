var UserBox = React.createClass({
  getInitialState: function () {
    return { data: [], viewthepage: 0};
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
              if ([1, 2].includes(this.state.viewthepage)) {
                this.loadUsersFromServer(); // Now only loads if the role is appropriate
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
  loadUsersFromServer: function () {
    $.ajax({
      url: "/users/getusr",
      data: {
        twuserid: twuserid.value,
        twusername: twusrname.value,
        twuseremail: twusremail.value,
        twuserfirstname: twusrfirstname.value,
        twuserlastname: twusrlastname.value,
        twuserphone: twusrphone.value,
        twuseraddress: twusraddress.value,
        twuserrole: twusrrole.value,
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
  updateSingleUsrFromServer: function (twuser) {
    $.ajax({
      url: "/users/updatesingleusr",
      dataType: "json",
      data: twuser,
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
    console.log("View the page 1:", this.state.viewthepage);
    if (
      [1, 2].includes(this.state.viewthepage) &&
      this.state.viewthepage != 0
    ) {
      return (
        <div>
          <Userform2 onUserSubmit={this.loadUsersFromServer} />
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
                <UserList data={this.state.data} />
              </table>
            </div>
            <div id="theright">
              <UserUpdateform onUpdateSubmit={this.updateSingleUsrFromServer} />
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

var Userform2 = React.createClass({
  getInitialState: function () {
    return {
      twuserid: "",
      twusername: "",
      twuseremail: "",
      twuserfirstname: "",
      twuserlastname: "",
      twuserphone: "",
      twuseraddress: "",
      twdata: [],
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  loadUsrRoles: function () {
    $.ajax({
      url: "/users/getusrroles",
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
    this.loadUsrRoles();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var twuserid = this.state.twuserid.trim();
    var twusername = twusrname.value;
    var twuseremail = twusremail.value;
    var twuserfirstname = twusrfirstname.value;
    var twuserlastname = twusrlastname.value;
    var twuserphone = twusrphone.value;
    var twuseraddress = twusraddress.value;
    var twuserrole = twusrrole.value;

    this.props.onUserSubmit({
      twuserid: twuserid,
      twusername: twusername,
      twuseremail: twuseremail,
      twuserfirstname: twuserfirstname,
      twuserlastname: twuserlastname,
      twuserphone: twuserphone,
      twuseraddress: twuseraddress,
      twuserrole: twuserrole,
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
            <h2>Update Users</h2>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="twuserid"
                      id="twuserid"
                      value={this.state.twuserid}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Username</th>
                  <td>
                    <input
                      name="twusrname"
                      id="twusrname"
                      value={this.state.twusrname}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>
                    <input
                      name="twusremail"
                      id="twusremail"
                      value={this.state.twusremail}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <td>
                    <input
                      name="twusrfirstname"
                      id="twusrfirstname"
                      value={this.state.twusrfirstname}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>
                    <input
                      name="twusrlastname"
                      id="twusrlastname"
                      value={this.state.twusrlastname}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>
                    <input
                      name="twusrphone"
                      id="twusrphone"
                      value={this.state.twusrphone}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    <input
                      name="twusraddress"
                      id="twusraddress"
                      value={this.state.twusraddress}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Role</th>
                  <td>
                    <SelectList data={this.state.twdata} />
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" value="Search User" />
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

var UserUpdateform = React.createClass({
  getInitialState: function () {
    return {
      twupuserkey: "",
      twupuserid: "",
      twupusername: "",
      twupuseremail: "",
      twupuserfirstname: "",
      twupuserlastname: "",
      twupuserphone: "",
      twupuseraddress: "",
      twupdata: [],
    };
  },
  handleUpOptionChange: function (e) {
    this.setState({
      upselectedOption: e.target.value,
    });
  },
  loadUsrRoles: function () {
    $.ajax({
      url: "/users/getusrroles",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ twupdata: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadUsrRoles();
  },
  handleUpSubmit: function (e) {
    e.preventDefault();

    var twupuserid = twupusrid.value;
    var twupuseremail = twupusremail.value;
    var twupusername = twupusrname.value;
    var twupuserfirstname = twupusrfirstname.value;
    var twupuserlastname = twupusrlastname.value;
    var twupuserphone = twupusrphone.value;
    var twupuseraddress = twupusraddress.value;
    var twupuserrole = twupusrrole.value;

    this.props.onUpdateSubmit({
      twupuserid: twupuserid,
      twupusername: twupusername,
      twupuseremail: twupuseremail,
      twupuserfirstname: twupuserfirstname,
      twupuserlastname: twupuserlastname,
      twupuserphone: twupuserphone,
      twupuseraddress: twupuseraddress,
      twupuserrole: twupuserrole,
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
                  <th>ID</th>
                  <td>
                    <input
                      type="hidden"
                      name="twupusrid"
                      id="twupusrid"
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Username</th>
                  <td>
                    <input
                      name="twupusrname"
                      id="twupusrname"
                      value={this.state.twupusrname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>
                    <input
                      name="twupusremail"
                      id="twupusremail"
                      value={this.state.twupusremail}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <td>
                    <input
                      name="twupusrfirstname"
                      id="twupusrfirstname"
                      value={this.state.twupusrfirstname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>
                    <input
                      name="twupusrlastname"
                      id="twupusrlastname"
                      value={this.state.twupusrlastname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>
                    <input
                      name="twupusrphone"
                      id="twupusrphone"
                      value={this.state.twupusrphone}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    <input
                      name="twupusraddress"
                      id="twupusraddress"
                      value={this.state.twupusraddress}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Role</th>
                  <td>
                    <SelectUpdateList data={this.state.twupdata} />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="twupusrkey"
              id="twupusrkey"
              onChange={this.handleUpChange}
            />
            <input type="submit" value="Update User" />
          </form>
          <form onSubmit={this.handleUpDelete}>
            <input type="submit" value="Delete User" />
          </form>
        </div>
      </div>
    );
  },
});

var UserList = React.createClass({
  render: function () {
    var userNodes = this.props.data.map(function (twuser) {
      return (
        <User
          key={twuser.UserID}
          twusrid={twuser.UserID}
          twusrname={twuser.UserName}
          twusremail={twuser.UserEmail}
          twusrphone={twuser.UserPhone}
          twusraddress={twuser.UserAddress}
          twusrrole={twuser.RoleID}
          twusrplayer={twuser.PlayerID}
          twusrammount={twuser.UserAmmount}
          twusrdate={twuser.UserDate}
        ></User>
      );
    });

    //print all the nodes in the list
    return <tbody>{userNodes}</tbody>;
  },
});

var User = React.createClass({
  getInitialState: function () {
    return {
      twupusrkey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var thetwupusrkey = this.props.twusrid;

    this.loadSingleUsr(thetwupusrkey);
  },
  loadSingleUsr: function (thetwupusrkey) {
    $.ajax({
      url: "/users/getsingleusr",
      data: {
        twupusrkey: thetwupusrkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populateUsr = this.state.singledata.map(function (twuser) {
          twupusrkey.value = thetwupusrkey;
          twupusrid.value = twuser.UserID;
          twupusrname.value = twuser.UserName;
          twupusremail.value = twuser.UserEmail;
          twupusrfirstname.value = twuser.UserFirstName;
          twupusrlastname.value = twuser.UserLastName;
          twupusrphone.value = twuser.UserPhone;
          twupusraddress.value = twuser.UserAddress;
          twupusrrole.value = twuser.RoleID;
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        console.log("TEST");
      }.bind(this),
    });
  },

  render: function () {
    return (
      <tr>
        <td>{this.props.twusrid}</td>
        <td>{this.props.twusrname}</td>
        <td>{this.props.twusremail}</td>
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
    var optionNodes = this.props.data.map(function (twusrRoles) {
      return (
        <option key={twusrRoles.RoleID} value={twusrRoles.RoleID}>
          {twusrRoles.RoleName}
        </option>
      );
    });
    return (
      <select name="twusrrole" id="twusrrole">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twusrRoles) {
      return (
        <option key={twusrRoles.RoleID} value={twusrRoles.RoleID}>
          {twusrRoles.RoleName}
        </option>
      );
    });
    return (
      <select name="twupusrrole" id="twupusrrole">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

const App = () => (
  <div id="content">
    <UserBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

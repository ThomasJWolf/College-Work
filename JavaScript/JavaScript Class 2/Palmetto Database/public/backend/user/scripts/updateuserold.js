var UserBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadUsersFromServer: function () {
    $.ajax({
      url: "/users/getuser",
      data: {
        userid: userid.value,
        username: username.value,
        useremail: useremail.value,
        userfirstname: userfirstname.value,
        userlastname: userlastname.value,
        userphone: userphone.value,
        useraddress: useraddress.value,
        userrole: userrole.value,
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
  updateSingleUserFromServer: function (user) {
    $.ajax({
      url: "/users/updatesingleuser",
      dataType: "json",
      data: user,
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
    this.loadUsersFromServer();
    // setInterval(this.loadUsersFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Update Users</h1>
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
                </tr>
              </thead>
              <UserList data={this.state.data} />
            </table>
          </div>
          <div id="theright">
            <UserUpdateform onUpdateSubmit={this.updateSingleUserFromServer} />
          </div>
        </div>
      </div>
    );
  },
});

var Userform2 = React.createClass({
  getInitialState: function () {
    return {
      userid: "",
      username: "",
      useremail: "",
      userfirstname: "",
      userlastname: "",
      userphone: "",
      useraddress: "",
      data: [],
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  loadUserRoles: function () {
    $.ajax({
      url: "/users/getuserroles",
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
    this.loadUserRoles();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var userid = this.state.userid.trim();
    var useremail = this.state.useremail.trim();
    var username = this.state.username.trim();
    var userfirstname = this.state.userfirstname.trim();
    var userlastname = this.state.userlastname.trim();
    var userphone = this.state.userphone.trim();
    var useraddress = this.state.useraddress.trim();
    var userrole = userrole.value;

    this.props.onUserSubmit({
      userid: userid,
      username: username,
      useremail: useremail,
      userfirstname: userfirstname,
      userlastname: userlastname,
      userphone: userphone,
      useraddress: useraddress,
      userrole: userrole,
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
            <h2>Users</h2>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="userid"
                      id="userid"
                      value={this.state.userid}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Username</th>
                  <td>
                    <input
                      name="username"
                      id="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>
                    <input
                      name="useremail"
                      id="useremail"
                      value={this.state.useremail}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <td>
                    <input
                      name="userfirstname"
                      id="userfirstname"
                      value={this.state.userfirstname}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>
                    <input
                      name="userlastname"
                      id="userlastname"
                      value={this.state.userlastname}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>
                    <input
                      name="userphone"
                      id="userphone"
                      value={this.state.userphone}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    <input
                      name="useraddress"
                      id="useraddress"
                      value={this.state.useraddress}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Role</th>
                  <td>
                    <SelectList data={this.state.data} />
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
      upuserkey: "",
      upuserid: "",
      upusername: "",
      upuseremail: "",
      upuserfirstname: "",
      upuserlastname: "",
      upuserphone: "",
      upuseraddress: "",
      updata: [],
    };
  },
  handleUpOptionChange: function (e) {
    this.setState({
      upselectedOption: e.target.value,
    });
  },
  loadUserRoles: function () {
    $.ajax({
      url: "/users/getuserroles",
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
    this.loadUserRoles();
  },
  handleUpSubmit: function (e) {
    e.preventDefault();

    var upuserid = upuserid.value;
    var upuseremail = upuseremail.value;
    var upusername = upusername.value;
    var upuserfirstname = upuserfirstname.value;
    var upuserlastname = upuserlastname.value;
    var upuserphone = upuserphone.value;
    var upuseraddress = upuseraddress.value;
    var upuserrole = upuserrole.value;

    this.props.onUpdateSubmit({
      upuserid: upuserid,
      upusername: upusername,
      upuseremail: upuseremail,
      upuserfirstname: upuserfirstname,
      upuserlastname: upuserlastname,
      upuserphone: upuserphone,
      upuseraddress: upuseraddress,
      upuserrole: upuserrole,
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
                      name="upuserid"
                      id="upuserid"
                      value={this.state.upuserid}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Username</th>
                  <td>
                    <input
                      name="upusername"
                      id="upusername"
                      value={this.state.upusername}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>
                    <input
                      name="upuseremail"
                      id="upuseremail"
                      value={this.state.upuseremail}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <td>
                    <input
                      name="upuserfirstname"
                      id="upuserfirstname"
                      value={this.state.upuserfirstname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>
                    <input
                      name="upuserlastname"
                      id="upuserlastname"
                      value={this.state.upuserlastname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>
                    <input
                      name="upuserphone"
                      id="upuserphone"
                      value={this.state.upuserphone}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    <input
                      name="upuseraddress"
                      id="upuseraddress"
                      value={this.state.upuseraddress}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>User Role</th>
                  <td>
                    <SelectUpdateList data={this.state.updata} />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="upuserkey"
              id="upuserkey"
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
    var userNodes = this.props.data.map(function (user) {
      return (
        <User
          key={user.UserID}
          userid={user.UserID}
          username={user.UserName}
          useremail={user.UserEmail}
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
      upuserkey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var theupuserkey = this.props.userkey;

    this.loadSingleUser(theupuserkey);
  },
  loadSingleUser: function (theupuserkey) {
    $.ajax({
      url: "/users/getsingleusr",
      data: {
        upuserkey: theupuserkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populateUser = this.state.singledata.map(function (user) {
          upuserkey.value = theupuserkey;
          upuserid.value = user.UserID;
          upuseremail.value = user.UserEmail;
          upuserfirstname.value = user.UserFirstName;
          upuserlastname.value = user.UserLastName;
          upuserphone.value = user.UserPhone;
          upuseraddress.value = user.UserAddress;
          upuserrole.value = user.RoleID;
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
        <td>{this.props.userid}</td>
        <td>{this.props.username}</td>
        <td>{this.props.useremail}</td>
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
    var optionNodes = this.props.data.map(function (userRoles) {
      return (
        <option key={userRoles.RoleID} value={userRoles.RoleID}>
          {userRoles.RoleName}
        </option>
      );
    });
    return (
      <select name="userrole" id="userrole">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (userRoles) {
      return (
        <option key={userRoles.RoleID} value={userRoles.RoleID}>
          {userRoles.RoleName}
        </option>
      );
    });
    return (
      <select name="upuserrole" id="upuserrole">
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

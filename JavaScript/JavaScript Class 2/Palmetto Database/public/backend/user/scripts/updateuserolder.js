var UserBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadUsersFromServer: function () {
    $.ajax({
      url: "/users/getusr",
      data: {
        twuserid: twuserid.value,
        twusername: twusername.value,
        twuseremail: twuseremail.value,
        twuserfirstname: twuserfirstname.value,
        twuserlastname: twuserlastname.value,
        twuserphone: twuserphone.value,
        twuseraddress: twuseraddress.value,
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
  updateSingleUsrFromServer: function (user) {
    $.ajax({
      url: "/users/updatesingleusr",
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
    var twusername = this.state.twusername.trim();
    var twuseremail = this.state.twuseremail.trim();
    var twuserfirstname = this.state.twuserfirstname.trim();
    var twuserlastname = this.state.twuserlastname.trim();
    var twuserphone = this.state.twuserphone.trim();
    var twuseraddress = this.state.twuseraddress.trim();
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
                      name="twusername"
                      id="twusername"
                      value={this.state.twusername}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>
                    <input
                      name="twuseremail"
                      id="twuseremail"
                      value={this.state.twuseremail}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>First Name</th>
                  <td>
                    <input
                      name="twuserfirstname"
                      id="twuserfirstname"
                      value={this.state.twuserfirstname}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>
                    <input
                      name="twuserlastname"
                      id="twuserlastname"
                      value={this.state.twuserlastname}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>
                    <input
                      name="twuserphone"
                      id="twuserphone"
                      value={this.state.twuserphone}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    <input
                      name="twuseraddress"
                      id="twuseraddress"
                      value={this.state.twuseraddress}
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
      twupusrkey: "",
      twupusrid: "",
      twupusrname: "",
      twupusremail: "",
      twupusrfirstname: "",
      twupusrlastname: "",
      twupusrphone: "",
      twupusraddress: "",
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
          twuseremail={twuser.UserEmail}
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
    console.log("Update Record");
    e.preventDefault();
    var thetwupusrkey = this.props.twusrid;

    this.loadSingleUser(thetwupusrkey);
  },
  loadSingleUser: function (thetwupusrkey) {
    console.log("User ID: " + thetwupusrkey);
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
        var populateUser = this.state.singledata.map(function (user) {
          twupusrkey.value = thetwupusrkey;
          twupusrid.value = user.UserID;
          twupusrname.value = user.UserName;
          twupusremail.value = user.UserEmail;
          twupusrfirstname.value = user.UserFirstName;
          twupusrlastname.value = user.UserLastName;
          twupusrphone.value = user.UserPhone;
          twupusraddress.value = user.UserAddress;
          twupusrrole.value = user.RoleID;
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  render: function () {
    console.log(this.props.twusrid);
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

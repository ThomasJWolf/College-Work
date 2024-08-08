var UserBox = React.createClass({
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
        console.error("/users/getusr", status, err.toString());
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
          <Userform2 onUserSubmit={this.loadUsersFromServer} />
          <br />
          <table className="listing-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Role</th>
              </tr>
            </thead>
            <UserList data={this.state.data} />
          </table>
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
  loadUserRoles: function () {
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
    this.loadUserRoles();
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
      <form onSubmit={this.handleSubmit}>
        <h2>Users</h2>
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
              <th>Name</th>
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
    );
  },
});

var UserList = React.createClass({
  render: function () {
    var userNodes = this.props.data.map(function (twuser) {
      //map the data to individual donations
      return (
        <User
          key={twuser.UserID}
          twusrid={twuser.UserID}
          twusrname={twuser.UserName}
          twusremail={twuser.UserEmail}
          twusrfirstname={twuser.UserFirstName}
          twusrlastname={twuser.UserLastName}
          twusrphone={twuser.UserPhone}
          twusraddress={twuser.UserAddress}
          twusrrole={twuser.RoleName}
        ></User>
      );
    });

    //print all the nodes in the list
    return <tbody>{userNodes}</tbody>;
  },
});

var User = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.twusrid}</td>
        <td>{this.props.twusrname}</td>
        <td>{this.props.twusremail}</td>
        <td>{this.props.twusrfirstname}</td>
        <td>{this.props.twusrlastname}</td>
        <td>{this.props.twusrphone}</td>
        <td>{this.props.twusraddress}</td>
        <td>{this.props.twusrrole}</td>
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

const App = () => (
  <div id="content">
    <UserBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

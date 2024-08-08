var UserBox = React.createClass({
  getInitialState: function () {
    return { data: [], viewthepage: 0, viewtheusr: 0 };
  },

  loadAllowLogin: function () {
    $.ajax({
      url: "/users/getloggedin",
      dataType: "json",
      cache: false,
      success: function (datalog) {
        this.setState({ data: datalog });
        this.setState({ viewthepage: this.state.data[0].RoleID });
        this.setState({ viewtheusr: this.state.data[0].UserID });

        console.log("Logged in:" + this.state.viewthepage);
        console.log("Logged in:" + this.state.viewtheusr);
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  loadUsersFromServer: function () {
    $.ajax({
      url: "/users/getuser",
      data: {
        twuserid: twuserid.value,
        twusername: twusername.value,
        twuseremail: twuseremail.value,
        twuserfirstname: twuserfirstname.value,
        twuserlastname: twuserlastname.value,
        twuserphone: twuserphone.value,
        twuseraddress: twuseraddress.value,
        twuserrole: twuserrole.value,
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
    this.loadUsersFromServer();
    // setInterval(this.loadUsersFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1> Search Users</h1>
        <Userform2 onUserSubmit={this.loadUsersFromServer} />
        <br />
        <table>
          <UserList data={this.state.data} />
        </table>
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
  loadUserRoles: function () {
    $.ajax({
      url: "/users/getuserroles",
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
    var twuserrole = twuserrole.value;

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
    if (this.state.viewthepage == 0 || this.state.viewthepage != 1) {
      return <div>NOOOOOOO!</div>;
    } else {
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
    }
  },
});

var UserList = React.createClass({
  render: function () {
    var userNodes = this.props.data.map(function (twuser) {
      //map the data to individual donations
      return (
        <User
          key={twuser.UserID}
          twuserid={twuser.UserID}
          twusername={twuser.UserName}
          twuseremail={twuser.UserEmail}
          twuserfirstname={twuser.UserFirstName}
          twuserlastname={twuser.UserLastName}
          twuserphone={twuser.UserPhone}
          twuseraddress={twuser.UserAddress}
          twuserrole={twuser.RoleName}
        ></User>
      );
    });

    //print all the nodes in the list
    return (
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
        <tbody>{userNodes}</tbody>
      </table>
    );
  },
});

var User = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.twuserid}</td>
        <td>{this.props.twusername}</td>
        <td>{this.props.twuseremail}</td>
        <td>{this.props.twuserfirstname}</td>
        <td>{this.props.twuserlastname}</td>
        <td>{this.props.twuserphone}</td>
        <td>{this.props.twuseraddress}</td>
        <td>{this.props.twuserrole}</td>
      </tr>
    );
  },
});

var SelectList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twuserRoles) {
      return (
        <option key={twuserRoles.RoleID} value={twuserRoles.RoleID}>
          {twuserRoles.RoleName}
        </option>
      );
    });
    return (
      <select name="twuserrole" id="twuserrole">
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

var UserBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadUsersFromServer: function () {
    console.log(emailervalue);
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
          <thead>
            <tr>
              <th>Key</th>
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
    var username = this.state.username.trim();
    var useremail = this.state.useremail.trim();
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
              <th>Name</th>
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
    );
  },
});

var UserList = React.createClass({
  render: function () {
    var userNodes = this.props.data.map(function (user) {
      //map the data to individual donations
      return (
        <User
          key={user.UserID}
          userid={user.UserID}
          username={user.UserName}
          useremail={user.UserEmail}
          userfirstname={user.UserFirstName}
          userlastname={user.UserLastName}
          userphone={user.UserPhone}
          useraddress={user.UserAddress}
          userrole={user.RoleName}
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
        <td>{this.props.userid}</td>
        <td>{this.props.username}</td>
        <td>{this.props.useremail}</td>
        <td>{this.props.userfirstname}</td>
        <td>{this.props.userlastname}</td>
        <td>{this.props.userphone}</td>
        <td>{this.props.useraddress}</td>
        <td>{this.props.userrole}</td>
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

ReactDOM.render(<UserBox />, document.getElementById("content"));

var UserBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadUsersFromServer: function () {
    console.log(userid.value);

    $.ajax({
      url: "/getuser/",
      data: {
        userid: userid.value,
        username: username.value,
        useremail: useremail.value,
      },
      dataType: 'json',
      cache: false,
      success: function (data) {
          this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
          console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function () {
    this.loadUsersFromServer();
    //setInterval(this.loadUsersFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Users</h1>
        <Userform2 onUserSubmit={this.loadUsersFromServer} />
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
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
    };
  },
  loadUserTypes: function () {
    $.ajax({
      url: "/getusertypes",
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
    this.loadUserTypes();
  },
  handleSubmit: function (e) {
    e.preventDefault();

    var userid = this.state.userid.trim();
    var useremail = this.state.useremail.trim();
    var username = this.state.username.trim();

    this.props.onUserSubmit({
      userid: userid,
      username: username,
      useremail: useremail,
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
              <th>User ID</th>
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
              <th>User Name</th>
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
              <th>User E-mail</th>
              <td>
                <input
                  name="useremail"
                  id="useremail"
                  value={this.state.useremail}
                  onChange={this.handleChange}
                />
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
          userid={user.dbuserid}
          username={user.dbusername}
          useremail={user.dbuseremail}
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
      </tr>
    );
  },
});


ReactDOM.render(<UserBox />, document.getElementById("content"));

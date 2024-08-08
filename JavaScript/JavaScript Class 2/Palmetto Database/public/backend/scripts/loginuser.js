var LoginBox = React.createClass({
  getInitialState: function () {
    return {
      data: [],
    };
  },
  handleLogin: function (logininfo) {
    $.ajax({
      url: "/users/loginuser/",
      dataType: "json",
      type: "POST",
      data: logininfo,
      success: function (data) {
        this.setState({ data: data });
        if (typeof data.redirect == "string") {
          window.location = data.redirect;
        }
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  render: function () {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm onLoginSubmit={this.handleLogin} />
        <br />
      </div>
    );
  },
});

var LoginForm = React.createClass({
  getInitialState: function () {
    return {
      twuseremail: "",
      twuserpw: "",
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var twuserpw = this.state.twuserpw.trim();
    var twuseremail = this.state.twuseremail.trim();

    this.props.onLoginSubmit({
      twuserpw: twuserpw,
      twuseremail: twuseremail,
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
            <table>
              <tbody>
                <tr>
                  <th>User Email</th>
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
                  <th>User Password</th>
                  <td>
                    <input
                      type="password"
                      name="twuserpw"
                      id="twuserpw"
                      value={this.state.twuserpw}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input type="submit" value="Enter Login" />
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

ReactDOM.render(<LoginBox />, document.getElementById("content"));

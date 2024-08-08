var FacultyBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadFacultysFromServer: function () {
    $.ajax({
      url: "/getfac/",
      data: {
        facultyid: facultyid.value,
        facultyname: facultyname.value,
        facultyemail: facultyemail.value,
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
    this.loadFacultysFromServer();
    //setInterval(this.loadFacultysFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Facultys</h1>
        <Facultyform2 onFacultySubmit={this.loadFacultysFromServer} />
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <FacultyList data={this.state.data} />
        </table>
      </div>
    );
  },
});
var Facultyform2 = React.createClass({
  getInitialState: function () {
    return {
      facultyid: "",
      facultyname: "",
      facultyemail: "",
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  handleSubmit: function (e) {
    e.preventDefault();

    var facultyid = this.state.facultyid.trim();
    var facultyname = this.state.facultyname.trim();
    var facultyemail = this.state.facultyemail.trim();

    this.props.onFacultySubmit({
      facultyid: facultyid,
      facultyname: facultyname,
      facultyemail: facultyemail,
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
        <h2>Facultys</h2>
        <table>
          <tbody>
            <tr>
              <th>Faculty ID</th>
              <td>
                <input
                  type="text"
                  name="facultyid"
                  id="facultyid"
                  value={this.state.facultyid}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Faculty Name</th>
              <td>
                <input
                  name="facultyname"
                  id="facultyname"
                  value={this.state.facultyname}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Faculty Email</th>
              <td>
                <input
                  name="facultyemail"
                  id="facultyemail"
                  value={this.state.facultyemail}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Search Faculty" />
      </form>
    );
  },
});

var FacultyList = React.createClass({
  render: function () {
    var facultyNodes = this.props.data.map(function (User) {
      //map the data to individual donations
      return (
        <Faculty
          key={User.UserId}
          facid={User.UserId}
          facname={User.UserName}
          facemail={User.UserEmail}
        ></Faculty>
      );
    });

    //print all the nodes in the list
    return <tbody>{facultyNodes}</tbody>;
  },
});

var Faculty = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.facid}</td>
        <td>{this.props.facname}</td>
        <td>{this.props.facemail}</td>
      </tr>
    );
  },
});


ReactDOM.render(<FacultyBox />, document.getElementById("content"));

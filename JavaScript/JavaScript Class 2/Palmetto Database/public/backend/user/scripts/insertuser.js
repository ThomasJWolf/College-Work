var UserBox = React.createClass({
  getInitialState: function () {
    return { viewthepage: 0 };
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

  handleUserSubmit: function (twuser) {
    $.ajax({
      url: "/users/user",
      dataType: "json",
      type: "POST",
      data: twuser,
      success: function (data) {
        //We set the state again after submission, to update with the submitted data
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
    alert("User Added!");
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
        <div className="UserBox">
          <Userform2 onUserSubmit={this.handleUserSubmit} />
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
      twusername: "",
      twuseremail: "",
      twuserfirstname: "",
      twuserlastname: "",
      twuserphone: "",
      twuseraddress: "",
      twdata: [],
      twuserpw: "",
      twuserpw2: "",
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
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    var twusername = this.state.twusername.trim();
    var twuseremail = this.state.twuseremail.trim();
    var twuserfirstname = this.state.twuserfirstname.trim();
    var twuserlastname = this.state.twuserlastname.trim();
    var twuserphone = this.state.twuserphone.trim();
    var twuseraddress = this.state.twuseraddress.trim();
    var twuserpw = this.state.twuserpw.trim();
    var twuserpw2 = this.state.twuserpw2.trim();
    var twuserrole = twusrrole.value;

    if (twuserpw != twuserpw2) {
      console.log("Passwords do not match!!");
      alert("Passwords do not match!!");
      return;
    }
    this.props.onUserSubmit({
      twusername: twusername,
      twuseremail: twuseremail,
      twuserfirstname: twuserfirstname,
      twuserlastname: twuserlastname,
      twuserphone: twuserphone,
      twuseraddress: twuseraddress,
      twuserrole: twuserrole,
      twuserpw: twuserpw,
    });
  },

  validateEmail: function (value) {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  },
  validateDollars: function (value) {
    var regex = /^\$?[0-9]+(\.[0-9][0-9])?$/;
    return regex.test(value);
  },
  commonValidate: function () {
    return true;
  },
  setValue: function (field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Insert Users</h2>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                <TextInput
                  value={this.state.twusername}
                  uniqueName="twusername"
                  id="twusername"
                  textArea={false}
                  required={true}
                  minCharacters={4}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twusername")}
                  errorMessage="User Name is invalid"
                />
              </td>
            </tr>
            <tr>
              <th>E-Mail</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.twuseremail}
                  uniqueName="twuseremail"
                  textArea={false}
                  required={true}
                  validate={this.validateEmail}
                  onChange={this.setValue.bind(this, "twuseremail")}
                  errorMessage="Invalid E-Mail Address"
                  emptyMessage="E-Mail Address is Required"
                />
              </td>
            </tr>
            <tr>
              <th>First Name</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.twuserfirstname}
                  uniqueName="twuserfirstname"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twuserfirstname")}
                  errorMessage="Invalid First Name"
                  emptyMessage="First Name is Required"
                />
              </td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.twuserlastname}
                  uniqueName="twuserlastname"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twuserlastname")}
                  errorMessage="Invalid Last Name"
                  emptyMessage="Last Name is Required"
                />
              </td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.twuserphone}
                  uniqueName="twuserphone"
                  textArea={false}
                  required={false}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twuserphone")}
                  errorMessage="Invalid Phone Number"
                />
              </td>
            </tr>
            <tr>
              <th>Address</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.twuseraddress}
                  uniqueName="twuseraddress"
                  textArea={false}
                  required={false}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twuseraddress")}
                  errorMessage="Invalid Address"
                  emptyMessage="Address is Required"
                />
              </td>
            </tr>
            <tr>
              <th>Role</th>
              <td>
                <SelectList data={this.state.twdata} />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <TextInput
                  inputType="password"
                  value={this.state.twuserpw}
                  uniqueName="twuserpw"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twuserpw")}
                  errorMessage="Invalid Password"
                  emptyMessage="Password is Required"
                />
              </td>
            </tr>
            <tr>
              <th>Password Confirm</th>
              <td>
                <TextInput
                  inputType="password"
                  value={this.state.twuserpw2}
                  uniqueName="twuserpw2"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "twuserpw2")}
                  errorMessage="Invalid Password"
                  emptyMessage="Password is Required"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Insert User" />
      </form>
    );
  },
});

var SelectList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (twusrRoles) {
      return (
        <option key={twusrRoles.RoleId} value={twusrRoles.RoleId}>
          {twusrRoles.RoleName}
        </option>
      );
    });
    return (
      <select name="twusrrole" id="twusrrole">
        {optionNodes}
      </select>
    );
  },
});

var InputError = React.createClass({
  getInitialState: function () {
    return {
      message: "Input is invalid",
    };
  },
  render: function () {
    var errorClass = classNames(this.props.className, {
      error_container: true,
      invisible: !this.props.visible,
    });

    return <td> {this.props.errorMessage} </td>;
  },
});

var TextInput = React.createClass({
  getInitialState: function () {
    return {
      isEmpty: true,
      value: null,
      valid: false,
      errorMessage: "",
      errorVisible: false,
    };
  },

  handleChange: function (event) {
    this.validation(event.target.value);

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  },

  validation: function (value, valid) {
    if (typeof valid === "undefined") {
      valid = true;
    }

    var message = "";
    var errorVisible = false;

    if (!valid) {
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    } else if (this.props.required && jQuery.isEmptyObject(value)) {
      message = this.props.emptyMessage;
      valid = false;
      errorVisible = true;
    } else if (value.length < this.props.minCharacters) {
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }

    this.setState({
      value: value,
      isEmpty: jQuery.isEmptyObject(value),
      valid: valid,
      errorMessage: message,
      errorVisible: errorVisible,
    });
  },

  handleBlur: function (event) {
    var valid = this.props.validate(event.target.value);
    this.validation(event.target.value, valid);
  },
  render: function () {
    if (this.props.textArea) {
      return (
        <div className={this.props.uniqueName}>
          <textarea
            placeholder={this.props.text}
            className={"input input-" + this.props.uniqueName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
          />

          <InputError
            visible={this.state.errorVisible}
            errorMessage={this.state.errorMessage}
          />
        </div>
      );
    } else {
      return (
        <div className={this.props.uniqueName}>
          <input
            type={this.props.inputType}
            name={this.props.uniqueName}
            id={this.props.uniqueName}
            placeholder={this.props.text}
            className={"input input-" + this.props.uniqueName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
          />

          <InputError
            visible={this.state.errorVisible}
            errorMessage={this.state.errorMessage}
          />
        </div>
      );
    }
  },
});

const App = () => (
  <div id="content">
    <UserBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

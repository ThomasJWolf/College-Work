var UserBox = React.createClass({
  handleUserSubmit: function (user) {
    $.ajax({
      url: "/users/user",
      dataType: "json",
      type: "POST",
      data: user,
      success: function (data) {
        //We set the state again after submission, to update with the submitted data
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  render: function () {
    return (
      <div className="UserBox">
        <h1>Insert Users</h1>
        <Userform2 onUserSubmit={this.handleUserSubmit} />
      </div>
    );
  },
});

var Userform2 = React.createClass({
  getInitialState: function () {
    return {
      username: "",
      useremail: "",
      userfirstname: "",
      userlastname: "",
      userphone: "",
      useraddress: "",
      data: [],
      userpw: "",
      userpw2: "",
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
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    var username = this.state.username.trim();
    var useremail = this.state.useremail.trim();
    var userfirstname = this.state.userfirstname.trim();
    var userlastname = this.state.userlastname.trim();
    var userphone = this.state.userphone.trim();
    var useraddress = this.state.useraddress.trim();
    var userpw = this.state.userpw.trim();
    var userpw2 = this.state.userpw2.trim();
    var userrole = userrole.value;
    console.log("PW: " + userpw);

    if (userpw != userpw2) {
      console.log("Passwords do not match!!");
      alert("Passwords do not match!!");
      return;
    }

    if (
      !userpw ||
      !useremail ||
      !userfirstname ||
      !userlastname ||
      !userrole ||
      !username
    ) {
      console.log("Missed somthin");
      return;
    }

    this.props.onUserSubmit({
      username: username,
      useremail: useremail,
      userfirstname: userfirstname,
      userlastname: userlastname,
      userphone: userphone,
      useraddress: useraddress,
      userrole: userrole,
      userpw: userpw,
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
        <h2>Users</h2>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                <TextInput
                  value={this.state.username}
                  uniqueName="username"
                  textArea={false}
                  required={false}
                  minCharacters={6}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "username")}
                  errorMessage="User Name is invalid"
                />
              </td>
            </tr>
            <tr>
              <th>E-Mail</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.useremail}
                  uniqueName="useremail"
                  textArea={false}
                  required={true}
                  validate={this.validateEmail}
                  onChange={this.setValue.bind(this, "useremail")}
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
                  value={this.state.userfirstname}
                  uniqueName="userfirstname"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "userfirstname")}
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
                  value={this.state.userlastname}
                  uniqueName="userlastname"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "userlastname")}
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
                  value={this.state.userphone}
                  uniqueName="userphone"
                  textArea={false}
                  required={false}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "userphone")}
                  errorMessage="Invalid Phone Number"
                />
              </td>
            </tr>
            <tr>
              <th>Address</th>
              <td>
                <TextInput
                  inputType="text"
                  value={this.state.useraddress}
                  uniqueName="useraddress"
                  textArea={false}
                  required={false}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "useraddress")}
                  errorMessage="Invalid Address"
                  emptyMessage="Address is Required"
                />
              </td>
            </tr>
            <tr>
              <th>Role</th>
              <td>
                <SelectList data={this.state.data} />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <TextInput
                  inputType="password"
                  value={this.state.userpw}
                  uniqueName="userpw"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "userpw")}
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
                  value={this.state.userpw2}
                  uniqueName="userpw2"
                  textArea={false}
                  required={true}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, "userpw2")}
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
    var optionNodes = this.props.data.map(function (userRoles) {
      return (
        <option key={userRoles.RoleId} value={userRoles.RoleId}>
          {userRoles.RoleName}
        </option>
      );
    });
    return (
      <select name="userrole" id="userrole">
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

ReactDOM.render(<UserBox />, document.getElementById("content"));

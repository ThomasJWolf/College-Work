var CourseBox = React.createClass({
  handleCourseSubmit: function (course) {
    $.ajax({
      url: "/course",
      dataType: "json",
      type: "POST",
      data: course,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  render: function () {
    return (
      <div className="CourseBox">
        <h1>Courses</h1>
        <Courseform2 onCourseSubmit={this.handleCourseSubmit} />
      </div>
    );
  },
});

var Courseform2 = React.createClass({
  getInitialState: function () {
    return {
      coursesemester: "",
      courseyear: "",
      courseprefix: "",
      coursesnumber: "",
      coursesection: "",
      data: [],
    };
  },

  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },

  loadCorFaculty: function () {
    $.ajax({
      url: "/getcorfaculty",
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
    this.loadCorFaculty();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var coursefaculty = corfaculty.value
    var coursesemester = this.state.coursesemester.trim();
    var courseyear = this.state.courseyear.trim();
    var courseprefix = this.state.courseprefix.trim();
    var coursenumber = this.state.coursenumber.trim();
    var coursesection = this.state.coursesection.trim();



    if (isNaN(coursenumber)) {
      console.log("Not A Number " + coursenumber);
      return;
    }


    this.props.onCourseSubmit({
      coursefaculty: coursefaculty,
      coursesemester: coursesemester,
      courseyear: courseyear,
      courseprefix: courseprefix,
      coursenumber: coursenumber,
      coursesection: coursesection,
    });
  },

  validateEmail: function (value) {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  },
  validateLetters3: function (value) {
    // A Regular expression pattern for letters, spaces, dashes, and slashes
    // with a maximum length of 3 characters
    var re = /^[A-Za-z\s\-\/]{1,3}$/;
    return re.test(value);
  },
  validateNumbers3: function (value) {
    // A Regular expression pattern for numbers with a maximum length of 3 digits
    var re = /^[0-9]{1,3}$/;
    return re.test(value);
  },
  validateAlphanumerics3: function (value) {
    // A Regular expression pattern for alphanumeric characters with a maximum length of 3 characters
    var re = /^[A-Za-z0-9]{1,3}$/;
    return re.test(value);
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
      <form className="courseForm" onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <table>
          <tbody>
          <tr>
              <th>Faculty</th>
              <td>
                <SelectList data={this.state.data} />
              </td>
            </tr>
            <tr>
              <th>Semester</th>
              <td>
                <select
                  value={this.state.coursesemester}
                  uniqueName="coursesemester"
                  onChange={this.setValue.bind(this, "coursesemester")}
                  className="dropdown"
                >
                  <option value="">Select a Semester</option>
                  <option value="Fall">Fall</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Year</th>
              <td>
                <select
                  value={this.state.courseyear}
                  uniqueName="courseyear"
                  onChange={this.setValue.bind(this, "courseyear")}
                  className="dropdown"
                >
                  <option value="">Select a Year</option>
                  <option value="2019">2010</option>
                  <option value="2019">2011</option>
                  <option value="2019">2012</option>
                  <option value="2019">2013</option>
                  <option value="2019">2014</option>
                  <option value="2019">2015</option>
                  <option value="2019">2016</option>
                  <option value="2019">2017</option>
                  <option value="2019">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Course Prefix</th>
              <td>
                <TextInput
                  value={this.state.courseprefix}
                  uniqueName="courseprefix"
                  textArea={false}
                  required={true}
                  minCharacters={3}
                  validate={this.validateLetters3}
                  onChange={this.setValue.bind(this, "courseprefix")}
                  errorMessage="Course Prefix Name is invalid"
                  emptyMessage="Course Prefix Name is required"
                />
              </td>
            </tr>

            <tr>
              <th>Course Number</th>
              <td>
                <TextInput
                  value={this.state.coursenumber}
                  uniqueName="coursenumber"
                  textArea={false}
                  required={true}
                  minCharacters={3}
                  validate={this.validateNumbers3}
                  onChange={this.setValue.bind(this, "coursenumber")}
                  errorMessage="Invalid Number"
                  emptyMessage="Number is required"
                />
              </td>
            </tr>
            <tr>
              <th>Course Section</th>
              <td>
                <TextInput
                  value={this.state.coursesection}
                  uniqueName="coursesection"
                  textArea={false}
                  required={true}
                  minCharacters={3}
                  validate={this.validateAlphanumerics3}
                  onChange={this.setValue.bind(this, "coursesection")}
                  errorMessage="Section is invalid"
                  emptyMessage="Section is required"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Submit" />
      </form>
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
      visible: this.props.visible,
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

var SelectList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (corFaculty) {
      return (
        <option
          key={corFaculty.dbcorfacultyid}
          value={corFaculty.dbcorfacultyid}
        >
          {corFaculty.dbcorfacultyname}
        </option>
      );
    });
    return (
      <select name="corfaculty" id="corfaculty">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

ReactDOM.render(<CourseBox />, document.getElementById("content"));

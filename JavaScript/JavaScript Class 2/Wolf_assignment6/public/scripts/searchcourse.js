var CourseBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadCoursesFromServer: function () {
    console.log(courseid.value);

    $.ajax({
      url: "/getcor/",
      data: {
        courseid: courseid.value,
        coursefaculty: corfaculty.value,
        coursesemester: coursesemester.value,
        courseyear: courseyear.value,
        courseprefix: courseprefix.value,
        coursenumber: coursenumber.value,
        coursesection: coursesection.value,
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
    this.loadCoursesFromServer();
    //setInterval(this.loadCoursesFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Search Courses</h1>
        <Courseform2 onCourseSubmit={this.loadCoursesFromServer} />
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Faculty</th>
              <th>Semester</th>
              <th>Year</th>
              <th>Prefix</th>
              <th>Number</th>
              <th>Section</th>
            </tr>
          </thead>
          <CourseList data={this.state.data} />
        </table>
      </div>
    );
  },
});
var Courseform2 = React.createClass({
  getInitialState: function () {
    return {
      courseid: "",
      data: [],
      coursesemester: "",
      courseyear: "",
      courseprefix: "",
      coursenumber: "",
      coursesection: "",
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

    var courseid = this.state.courseid.trim();
    var coursefaculty = corfaculty.value;
    var coursesemester = this.state.coursesemester.trim();
    var courseyear = this.state.courseyear.trim();
    var courseprefix = this.state.courseprefix.trim();
    var coursenumber = this.state.coursenumber.trim();
    var coursesection = this.state.coursesection.trim();
    this.props.onCourseSubmit({
      courseid: courseid,
      coursefaculty: coursefaculty,
      coursesemester: coursesemester,
      courseyear: courseyear,
      courseprefix: courseprefix,
      coursenumber: coursenumber,
      coursesection: coursesection,
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
        <h2>Courses</h2>
        <table>
          <tbody>
            <tr>
              <th>Course ID</th>
              <td>
                <input
                  type="text"
                  name="courseid"
                  id="courseid"
                  value={this.state.courseid}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
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
                  name="coursesemester"
                  id="coursesemester"
                  onChange={this.handleChange}
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
                  name="courseyear"
                  id="courseyear"
                  onChange={this.handleChange}
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
                <input
                  name="courseprefix"
                  id="courseprefix"
                  value={this.state.courseprefix}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Course Number</th>
              <td>
                <input
                  name="coursenumber"
                  id="coursenumber"
                  value={this.state.coursenumber}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Course Section</th>
              <td>
                <input
                  name="coursesection"
                  id="coursesection"
                  value={this.state.coursesection}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Search Course" />
      </form>
    );
  },
});

var CourseList = React.createClass({
  render: function () {
    var courseNodes = this.props.data.map(function (course) {
      //map the data to individual donations
      return (
        <Course
          key={course.CourseId}
          corid={course.CourseId}
          corFaculty={course.UserId}
          corsemester={course.CourseSemester}
          coryear={course.CourseYear}
          corprefix={course.CoursePrefix}
          cornumber={course.CourseNumber}
          corsection={course.CourseSection}
        ></Course>
      );
    });

    //print all the nodes in the list
    return <tbody>{courseNodes}</tbody>;
  },
});

var Course = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.corid}</td>
        <td>{this.props.corfaculty}</td>
        <td>{this.props.corsemester}</td>
        <td>{this.props.coryear}</td>
        <td>{this.props.corprefix}</td>
        <td>{this.props.cornumber}</td>
        <td>{this.props.corsection}</td>
      </tr>
    );
  },
});

var SelectList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (corFacultys) {
      return (
        <option key={corFacultys.UserId} value={corFacultys.UserId}>
          {corFacultys.UserName}
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

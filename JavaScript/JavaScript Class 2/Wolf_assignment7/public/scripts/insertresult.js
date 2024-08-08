var CourseBox = React.createClass({
  getInitialState: function () {
    return {
      data: [],
      showResultBox: false,
      selectedCourseId: null,
    };
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
  },

  handleCourseSelect: function (courseId) {
    this.setState({
      showResultBox: true,
      selectedCourseId: courseId,
    });
  },

  render: function () {
    if (this.state.showResultBox) {
      return <ResultBox courseId={this.state.selectedCourseId} />;
    }

    return (
      <div>
        <h1>Insert Results</h1>
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
              <th>Action</th>{" "}
              {/* Make sure you have a column for the select button */}
            </tr>
          </thead>
          <CourseList
            data={this.state.data}
            onCourseSelect={this.handleCourseSelect}
          />
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
      return (
        <Course
          key={course.CourseId}
          corid={course.CourseId}
          corFaculty={course.UserName}
          corsemester={course.CourseSemester}
          coryear={course.CourseYear}
          corprefix={course.CoursePrefix}
          cornumber={course.CourseNumber}
          corsection={course.CourseSection}
          onCourseSelect={this.props.onCourseSelect}
        />
      );
    }, this);
    return <tbody>{courseNodes}</tbody>;
  },
});

var Course = React.createClass({
  handleSelectClick: function () {
    this.props.onCourseSelect(this.props.corid);
  },

  render: function () {
    return (
      <tr>
        <td>{this.props.corid}</td>
        <td>{this.props.corFaculty}</td>
        <td>{this.props.corsemester}</td>
        <td>{this.props.coryear}</td>
        <td>{this.props.corprefix}</td>
        <td>{this.props.cornumber}</td>
        <td>{this.props.corsection}</td>
        <td>
          <button type="button" onClick={this.handleSelectClick}>
            Select
          </button>
        </td>
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

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
var ResultBox = React.createClass({
  getInitialState: function () {
    return {
      courseInfo: {
        resultNumber: "",
        instructor: "",
        assignmentDescription: "",
      },
      sloResults: [
        {
          slo: "SLO 1 - Students will utilize appropriate communication formats when conveying professional and interpersonal thoughts and idea",
          indicators: [
            {
              indicator:
                "    1. Selecting appropriate ways (email, memo, face to face interaction, phone, etc.) to convey messages with clarity	",
              scores: { three: "", two: "", one: "" },
            },
            {
              indicator:
                "    2. Developing appropriate greetings, details and colsings in professional interactions	",
              scores: { three: "", two: "", one: "" },
            },
            {
              indicator:
                "3. Using appropriate nonverbal cues during communication",
              scores: { three: "", two: "", one: "" },
            },
          ],
        },
        {
          slo: "SLO 2 - Students will apply appropriate language when speaking and writing for their chosen field of study or insdustry",
          indicators: [
            {
              indicator:
                "    1. Composing well-organized and logical text with proper sentence structure and grammar	",
              scores: { three: "", two: "", one: "" },
            },
            {
              indicator:
                "    2. Demonstrating and understanding of industry terminology and language	",
              scores: { three: "", two: "", one: "" },
            },
            {
              indicator:
                "    3. Using appropriate tone of voice, speed and inflection to express thoughts and ideas	",
              scores: { three: "", two: "", one: "" },
            },
            {
              indicator:
                "    4. Identifying the components of problems or issues, examining them from multiple perspectives and investigating the ways to resolve them using reasoned and supportable conclusions	",
              scores: { three: "", two: "", one: "" },
            },
          ],
        },
        {
          slo: "SLO 3 - Students will demonstrate appropriate communication techniques when engaging audiences	",
          indicators: [
            {
              indicator:
                "    1. Responding to inquiries or conversations with appropriate expressions and dialogue	",
              scores: { three: "", two: "", one: "" },
            },
            {
              indicator:
                "    2. Explaining concepts, thoughts and directions in a manner that is concise and accurate	",
              scores: { three: "", two: "", one: "" },
            },
            {
              indicator:
                "    3. Demonstrating an ability to generate and express novel ideas	",
              scores: { three: "", two: "", one: "" },
            },
            {
              indicator:
                "    4. Identifying an awareness of the environment of the chosen industry or profession	",
              scores: { three: "", two: "", one: "" },
            },
          ],
        },
      ],
    };
  },
  handleResultSubmit: function (resultData) {
    $.ajax({
      url: "/result",
      dataType: "json",
      type: "POST",
      data: resultData,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  handleSloScoreChange(sloIndex, indicatorIndex, scoreType, value) {},
  render: function () {
    return (
      <div className="ResultBox">
        {this.state.sloResults.map((slo, sloIndex) => (
          <SLOTable
            key={sloIndex}
            sloName={slo.slo}
            indicators={slo.indicators}
            onScoreChange={(indicatorIndex, scoreType, value) =>
              this.handleScoreChange(sloIndex, indicatorIndex, scoreType, value)
            }
            isFirstSLO={sloIndex === 0}
          />
        ))}
      </div>
    );
  },
});

var IndicatorInput = React.createClass({
  render() {
    const tdStyle = {
      border: "1px solid black",
      padding: "5px",
      textAlign: "left",
    };

    return (
      <tr>
        <td style={tdStyle} colSpan="4">
          {this.props.indicator}
        </td>
        <td style={tdStyle}>
          <input
            type="text"
            placeholder="3"
            value={this.props.scores.three}
            onChange={(event) =>
              this.props.onScoreChange("three", event.target.value)
            }
          />
        </td>
        <td style={tdStyle}>
          <input
            type="text"
            placeholder="2"
            value={this.props.scores.two}
            onChange={(event) =>
              this.props.onScoreChange("two", event.target.value)
            }
          />
        </td>
        <td style={tdStyle}>
          <input
            type="text"
            placeholder="1"
            value={this.props.scores.one}
            onChange={(event) =>
              this.props.onScoreChange("one", event.target.value)
            }
          />
        </td>
      </tr>
    );
  },
});

var SLOTable = React.createClass({
  render() {
    const tableStyle = {
      width: "100%",
      borderCollapse: "collapse",
    };
    const thTdStyleHeader = {
      border: "1px solid black",
      padding: "5px",
      textAlign: "center",
    };

    const thTdStyle = {
      border: "1px solid black",
      padding: "5px",
      textAlign: "left",
    };

    const tableHeader = this.props.isFirstSLO ? (
      <thead>
        <tr>
          <th style={thTdStyle} colSpan="4">
            Indicator
          </th>
          <th style={thTdStyleHeader}>3</th>
          <th style={thTdStyleHeader}>2</th>
          <th style={thTdStyleHeader}>1</th>
        </tr>
      </thead>
    ) : null;

    return (
      <div className="slo-table">
        <h3 className="slo-header">{this.props.sloName}</h3>
        <form>
          <table style={tableStyle}>
            {tableHeader}
            <tbody>
              {this.props.indicators.map((indicator, index) => (
                <IndicatorInput
                  key={index}
                  indicator={indicator.indicator}
                  scores={indicator.scores}
                  onScoreChange={(scoreType, value) =>
                    this.props.onScoreChange(index, scoreType, value)
                  }
                />
              ))}
            </tbody>
          </table>
        </form>
      </div>
    );
  },
});

var ResultForm = React.createClass({
  getInitialState: function () {
    return this.props;
  },

  setValue: function (field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
    this.props.onChange(field, event.target.value);
  },

  setSloValue: function (sloIndex, indicatorIndex, scoreType, event) {
    var sloResultsCopy = JSON.parse(JSON.stringify(this.state.sloResults));
    sloResultsCopy[sloIndex].indicators[indicatorIndex][scoreType] =
      event.target.value;
    this.setState({ sloResults: sloResultsCopy });
    this.props.onSloChange(
      sloIndex,
      indicatorIndex,
      scoreType,
      event.target.value
    );
  },

  handleSubmit: function (e) {
    e.preventDefault();

    const resultData = {
      courseId: this.state.courseInfo.resultNumber,
      sloResults: this.state.sloResults,
    };

    this.handleResultSubmit(resultData);
  },

  render: function () {
    var sloNodes = this.state.sloResults.map((slo, sloIndex) => {
      var indicatorNodes = slo.indicators.map((indicator, indicatorIndex) => {
        return (
          <div key={"indicator-" + indicatorIndex} className="flex-row">
            {/* ... your other inputs for 'two' and 'one' */}
            <TextInput
              value={indicator.three}
              uniqueName={
                "slo-" + sloIndex + "-indicator-" + indicatorIndex + "-three"
              }
              textArea={false}
              required={true}
              minCharacters={1}
              validate={this.commonValidate}
              onChange={this.setSloValue.bind(
                this,
                sloIndex,
                indicatorIndex,
                "three"
              )}
              errorMessage="Invalid Value"
              emptyMessage="Value is required"
            />
          </div>
        );
      });

      return (
        <div key={"slo-" + sloIndex} className="flex-column">
          <h3>{slo.slo}</h3>
          {indicatorNodes}
        </div>
      );
    });

    return (
      <form className="ResultForm" onSubmit={this.handleSubmit}>
        <div className="flex-table">
          {/* Result number and instructor fields */}
          <div className="flex-row">
            <TextInput
              value={this.state.courseInfo.resultNumber}
              uniqueName="resultNumber"
              textArea={false}
              required={true}
              validate={this.commonValidate}
              onChange={this.setValue.bind(this, "resultNumber")}
              errorMessage="Result Number is required"
              emptyMessage="Result Number is required"
            />
            <TextInput
              value={this.state.courseInfo.instructor}
              uniqueName="instructor"
              textArea={false}
              required={true}
              validate={this.commonValidate}
              onChange={this.setValue.bind(this, "instructor")}
              errorMessage="Instructor is required"
              emptyMessage="Instructor is required"
            />
          </div>
          {/* SLOs and indicators */}
          {sloNodes}
        </div>
        <input type="submit" value="Submit Result Info" />
      </form>
    );
  },

  commonValidate: function (value) {
    return value && value.trim().length > 0;
  },
});

ReactDOM.render(<CourseBox />, document.getElementById("content"));

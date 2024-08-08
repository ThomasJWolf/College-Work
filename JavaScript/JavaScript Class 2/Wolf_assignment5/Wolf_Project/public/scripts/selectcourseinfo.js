var CourseList = React.createClass({
  getInitialState: function () {
    return {
      courses: [],
      searchQuery: '',
      filteredCourses: [],
      userHasTyped: false 
    };
  },

  componentDidMount: function () {
    this.loadCoursesFromServer();
  },

  loadCoursesFromServer: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ courses: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  updateSearchQuery: function (e) {
    const searchQuery = e.target.value;
    this.setState({ 
      searchQuery: searchQuery,
      userHasTyped: true 
    });

    if (searchQuery) {
      const filteredList = this.state.courses.filter((course) => {
        return course.courseName.toLowerCase().includes(searchQuery.toLowerCase());
      });

      this.setState({ filteredCourses: filteredList });
    } else {
      this.setState({ filteredCourses: [] });
    }
  },

  render: function () {
    const courseNodes = this.state.userHasTyped
      ? this.state.filteredCourses.map(function (course, index) {
          return (
            <div key={index} className="course">
              <p>Faculty: {course.courseEmail}</p>
              <p>Semester: {course.coursePhone}</p>
              <p>Year: {course.courseDateofBirth}</p>
              <p>Course Prefix: {course.courseAddress}</p>
              <p>Course Number: {course.courseCity}</p>
              <p>Course Section: {course.courseState}</p>
            </div>
          );
        })
      : null; 

    return (
      <div className="courseList">
        <input
          type="text"
          placeholder="Search courses..."
          value={this.state.searchQuery}
          onChange={this.updateSearchQuery}
        />
        {courseNodes}
      </div>
    );
  }
});

ReactDOM.render(
  <CourseList url="/api/course" />,
  document.getElementById('content')
);
var CategoryBox = React.createClass({
  getInitialState: function () {
    return { data: [], viewthepage: 0 };
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
                this.loadCategoriesFromServer(); // Now only loads if the role is appropriate
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
  loadCategoriesFromServer: function () {
    console.log("loadCategoriesFromServer");
    $.ajax({
      url: "/categories/getcat",
      data: {
        twcategoryid: twcategoryid.value,
        twcategoryname: twcategoryname.value,
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
  updateSingleCatFromServer: function (twcategory) {
    $.ajax({
      url: "/categories/updatesinglecat",
      dataType: "json",
      data: twcategory,
      type: "POST",
      cache: false,
      success: function (uptwupsingledata) {
        this.setState({ uptwupsingledata: uptwupsingledata });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
    window.location.reload(true);
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
        <div>
          <Categoryform2 onCategorySubmit={this.loadCategoriesFromServer} />
          <br />
          <div id="theresults">
            <div id="theleft">
              <table className="listing-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th></th>
                  </tr>
                </thead>
                <CategoryList data={this.state.data} />
              </table>
            </div>
            <div id="theright">
              <CategoryUpdateform
                onUpdateSubmit={this.updateSingleCatFromServer}
              />
            </div>
          </div>
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

var Categoryform2 = React.createClass({
  getInitialState: function () {
    return {
      twcategoryid: "",
      twcategoryname: "",
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var twcategoryid = this.state.twcategoryid.trim();
    var twcategoryname = this.state.twcategoryname.trim();

    this.props.onCategorySubmit({
      twcategoryid: twcategoryid,
      twcategoryname: twcategoryname,
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
            <h2>Update Categories</h2>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="twcategoryid"
                      id="twcategoryid"
                      value={this.state.twcategoryid}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>
                    <input
                      name="twcategoryname"
                      id="twcategoryname"
                      value={this.state.twcategoryname}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" value="Search Category" />
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

var CategoryUpdateform = React.createClass({
  getInitialState: function () {
    return {
      twupcategorykey: "",
      twupcategoryid: "",
      twupcategoryname: "",
    };
  },
  handleUpOptionChange: function (e) {
    this.setState({
      upselectedOption: e.target.value,
    });
  },

  handleUpSubmit: function (e) {
    e.preventDefault();

    var twupcategoryid = twupcatid.value;
    var twupcategoryname = twupcatname.value;

    this.props.onUpdateSubmit({
      twupcategoryid: twupcategoryid,
      twupcategoryname: twupcategoryname,
    });
  },
  handleUpChange: function (event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  },
  render: function () {
    return (
      <div>
        <div id="theform">
          <form onSubmit={this.handleUpSubmit}>
            <table>
              <tbody>
                <tr>
                    <input
                      type="hidden"
                      name="twupcatid"
                      id="twupcatid"
                      onChange={this.handleUpChange}
                    />
                </tr>
                <tr>
                  <th>Name</th>
                  <td>
                    <input
                      name="twupcatname"
                      id="twupcatname"
                      value={this.state.twupcatname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="twupcatkey"
              id="twupcatkey"
              onChange={this.handleUpChange}
            />
            <input type="submit" value="Update Category" />
          </form>
          <form onSubmit={this.handleUpDelete}>
            <input type="submit" value="Delete Category" />
          </form>
        </div>
      </div>
    );
  },
});

var CategoryList = React.createClass({
  render: function () {
    var categoryNodes = this.props.data.map(function (twcategory) {
      return (
        <Category
          key={twcategory.CategoryID}
          twcatid={twcategory.CategoryID}
          twcatname={twcategory.CategoryName}
        ></Category>
      );
    });

    //print all the nodes in the list
    return <tbody>{categoryNodes}</tbody>;
  },
});

var Category = React.createClass({
  getInitialState: function () {
    return {
      twupcatkey: "",
      twsingledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var thetwupcatkey = this.props.twcatid;

    this.loadSingleCat(thetwupcatkey);
  },
  loadSingleCat: function (thetwupcatkey) {
    $.ajax({
      url: "/categories/getsinglecat",
      data: {
        twupcatid: thetwupcatkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ twsingledata: data });
        console.log(this.state.twsingledata);
        var populateCat = this.state.twsingledata.map(function (category) {
          twupcatkey.value = thetwupcatkey;
          twupcatid.value = category.CategoryID;
          twupcatname.value = category.CategoryName;
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  render: function () {
    return (
      <tr>
        <td>{this.props.twcatid}</td>
        <td>{this.props.twcatname}</td>
        <td>
          <form onSubmit={this.updateRecord}>
            <input type="submit" value="Update Record" />
          </form>
        </td>
      </tr>
    );
  },
});

const App = () => (
  <div id="content">
    <CategoryBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));

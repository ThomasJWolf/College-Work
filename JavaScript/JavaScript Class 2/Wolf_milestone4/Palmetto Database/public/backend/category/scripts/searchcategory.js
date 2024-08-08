var CategoryBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadCategoriesFromServer: function () {
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
  componentDidMount: function () {
    this.loadCategoriesFromServer();
    // setInterval(this.loadCategoriesFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <Categoryform2 onCategorySubmit={this.loadCategoriesFromServer} />
        <br />
        <table>
          <CategoryList data={this.state.data} />
        </table>
      </div>
    );
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
      <form onSubmit={this.handleSubmit}>
        <h2>Search Categories</h2>
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
    );
  },
});

var CategoryList = React.createClass({
  render: function () {
    var categoryNodes = this.props.data.map(function (twcategory) {
      //map the data to individual donations
      return (
        <Category
          key={twcategory.CategoryID}
          twcatid={twcategory.CategoryID}
          twcatname={twcategory.CategoryName}
        ></Category>
      );
    });

    //print all the nodes in the list
    return (
      <table className="listing-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{categoryNodes}</tbody>;
      </table>
    );
  },
});

var Category = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.twcatid}</td>
        <td>{this.props.twcatname}</td>
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

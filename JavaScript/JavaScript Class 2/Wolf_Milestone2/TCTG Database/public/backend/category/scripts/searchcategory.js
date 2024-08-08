var CategoryBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadCategorysFromServer: function () {
    console.log(emailervalue);
    $.ajax({
      url: "/categorys/getcat",
      data: {
        categoryid: categoryid.value,
        categoryname: categoryname.value,
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
    this.loadCategorysFromServer();
    // setInterval(this.loadCategorysFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Search Categorys</h1>
        <Categoryform2 onCategorySubmit={this.loadCategorysFromServer} />
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <CategoryList data={this.state.data} />
        </table>
      </div>
    );
  },
});

var Categoryform2 = React.createClass({
  getInitialState: function () {
    return {
      categoryid: "",
      categoryname: "",
    };
  },
  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },
  handleSubmit: function (e) {
    e.preventDefault();

    var categoryid = this.state.categoryid.trim();
    var categoryname = this.state.categoryname.trim();

    this.props.onCategorySubmit({
      categoryid: categoryid,
      categoryname: categoryname,
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
        <h2>Categorys</h2>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>
                <input
                  type="text"
                  name="categoryid"
                  id="categoryid"
                  value={this.state.categoryid}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Name</th>
              <td>
                <input
                  name="categoryname"
                  id="categoryname"
                  value={this.state.categoryname}
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
    var categoryNodes = this.props.data.map(function (category) {
      //map the data to individual donations
      return (
        <Category
          key={category.CategoryID}
          catid={category.CategoryID}
          catname={category.CategoryName}
        ></Category>
      );
    });

    //print all the nodes in the list
    return <tbody>{categoryNodes}</tbody>;
  },
});

var Category = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.catid}</td>
        <td>{this.props.catname}</td>
      </tr>
    );
  },
});

ReactDOM.render(<CategoryBox />, document.getElementById("content"));

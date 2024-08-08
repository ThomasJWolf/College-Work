var CategoryBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadCategorysFromServer: function () {
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
  updateSingleCatFromServer: function (category) {
    $.ajax({
      url: "/categorys/updatesinglecat",
      dataType: "json",
      data: category,
      type: "POST",
      cache: false,
      success: function (upsingledata) {
        this.setState({ upsingledata: upsingledata });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
    window.location.reload(true);
  },
  componentDidMount: function () {
    this.loadCategorysFromServer();
    // setInterval(this.loadCategorysFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Update Categorys</h1>
        <Categoryform2 onCategorySubmit={this.loadCategorysFromServer} />
        <br />
        <div id="theresults">
          <div id="theleft">
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
          <div id="theright">
            <CategoryUpdateform
              onUpdateSubmit={this.updateSingleCatFromServer}
            />
          </div>
        </div>
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
      <div>
        <div id="theform">
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
      upcategorykey: "",
      upcategoryid: "",
      upcategoryname: "",
    };
  },
  handleUpOptionChange: function (e) {
    this.setState({
      upselectedOption: e.target.value,
    });
  },

  handleUpSubmit: function (e) {
    e.preventDefault();

    var upcategoryid = upcatid.value;
    var upcategoryname = upcatname.value;

    this.props.onUpdateSubmit({
      upcategoryid: upcategoryid,
      upcategoryname: upcategoryname,
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
                  <th>ID</th>
                  <td>
                    <input
                      type="text"
                      name="upcatid"
                      id="upcatid"
                      value={this.state.upcatid}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>
                    <input
                      name="upcatname"
                      id="upcatname"
                      value={this.state.upcatname}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="upcatkey"
              id="upcatkey"
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
    var categoryNodes = this.props.data.map(function (category) {
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
  getInitialState: function () {
    return {
      upcatkey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var theupcatkey = this.props.catkey;

    this.loadSingleCat(theupcatkey);
  },
  loadSingleCat: function (theupcatkey) {
    $.ajax({
      url: "/categorys/getsinglecat",
      data: {
        upcatkey: theupcatkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populateCat = this.state.singledata.map(function (category) {
          upcatkey.value = theupcatkey;
          upcatid.value = category.CategoryID;
          upcatname.value = category.CategoryName;
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
        <td>{this.props.catid}</td>
        <td>{this.props.catname}</td>
        <td>
          <form onSubmit={this.updateRecord}>
            <input type="submit" value="Update Record" />
          </form>
        </td>
      </tr>
    );
  },
});

ReactDOM.render(<CategoryBox />, document.getElementById("content"));

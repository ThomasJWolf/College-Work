var CartBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadCartsFromServer: function () {
    var cpickupvalue = 2;
    if (cartpickupyes.checked) {
      cpickupvalue = 1;
    }
    if (cartpickupno.checked) {
      cpickupvalue = 0;
    }

    var cmadevalue = 2;
    if (cartmadeyes.checked) {
      cmadevalue = 1;
    }
    if (cartmadeno.checked) {
      cmadevalue = 0;
    }
    console.log(epickupvalue);
    $.ajax({
      url: "/carts/getcart",
      data: {
        cartid: cartid.value,
        cartdailyid: cartdailyid.value,
        cartuser: cartuser.value,
        cartplayer: cartplayer.value,
        cartpickup: cartpickup.value,
        cartmade: cartmade.value,
        cartdate: cartdate.value,
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
    this.loadCartsFromServer();
    // setInterval(this.loadCartsFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <Cartform2 onCartSubmit={this.loadCartsFromServer} />
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Daily ID</th>
              <th>User</th>
              <th>Player</th>
              <th>Pickup</th>
              <th>Made</th>
              <th>Date</th>
            </tr>
          </thead>
          <CartList data={this.state.data} />
        </table>
      </div>
    );
  },
});

var Cartform2 = React.createClass({
  getInitialState: function () {
    return {
      cartid: "",
      cartdailyid: "",
      datauser: [],
      dataplayer: [],
      cartpickup: "",
      cartmade: "",
      cartdate: "",
    };
  },
  handleOptionChangePickup: function (e) {
    this.setState({
      selectedOptionPickup: e.target.value,
    });
  },
  handleOptionChangeMade: function (e) {
    this.setState({
      selectedOptionMade: e.target.value,
    });
  },
  loadCartUsers: function () {
    $.ajax({
      url: "/carts/getcartusers",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ datauser: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  loadCartPlayers: function () {
    $.ajax({
      url: "/carts/getcartplayers",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ dataplayer: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  componentDidMount: function () {
    this.loadCartUsers();
    this.loadCartPlayers();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var cartid = this.state.cartid.trim();
    var cartdailyid = this.state.cartdailyid.trim();
    var cartuser = cartuser.value;
    var cartplayer = cartplayer.value;
    var cartpickup = this.state.selectedOptionPickup;
    var cartmade = this.state.selectedOptionMade;
    var cartdate = this.state.cartdate.trim();

    this.props.onCartSubmit({
      cartid: cartid,
      cartdailyid: cartdailyid,
      cartuser: cartuser,
      cartplayer: cartplayer,
      cartpickup: cartpickup,
      cartmade: cartmade,
      cartdate: cartdate,
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
        <h2>Search Carts</h2>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>
                <input
                  type="text"
                  name="cartid"
                  id="cartid"
                  value={this.state.cartid}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Daily ID</th>
              <td>
                <input
                  type="number"
                  name="cartdailyid"
                  id="cartdailyid"
                  value={this.state.cartdailyid}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>User</th>
              <td>
                <SelectListUser data={this.state.datauser} />
              </td>
            </tr>
            <tr>
              <th>Player</th>
              <td>
                <SelectListPlayer data={this.state.dataplayer} />
              </td>
            </tr>
            <tr>
              <th>Pickup</th>
              <td>
                <label>
                  <input
                    type="radio"
                    name="cartpickup"
                    id="cartpickup"
                    value="1"
                    checked={this.state.selectedOptionPickup === "1"}
                    onChange={this.handleOptionChangePickup}
                    className="form-check-input"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="cartpickup"
                    id="cartpickup"
                    value="0"
                    checked={this.state.selectedOptionPickup === "0"}
                    onChange={this.handleOptionChangePickup}
                    className="form-check-input"
                  />
                  No
                </label>
              </td>
            </tr>
            <tr>
              <th>Made</th>
              <td>
                <label>
                  <input
                    type="radio"
                    name="cartmade"
                    id="cartmade"
                    value="1"
                    checked={this.state.selectedOptionMade === "1"}
                    onChange={this.handleOptionChangeMade}
                    className="form-check-input"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="cartmade"
                    id="cartmade"
                    value="0"
                    checked={this.state.selectedOptionMade === "0"}
                    onChange={this.handleOptionChangeMade}
                    className="form-check-input"
                  />
                  No
                </label>
              </td>
            </tr>
            <tr>
              <th>Date</th>
              <td>
                <input
                  type="date"
                  name="cartdate"
                  id="cartdate"
                  value={this.state.cartdate}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Search Cart" />
      </form>
    );
  },
});

var CartList = React.createClass({
  render: function () {
    var cartNodes = this.props.data.map(function (cart) {
      //map the data to individual donations
      return (
        <Cart
          key={cart.CartID}
          cartid={cart.CartID}
          cartuser={cart.UserName}
          cartplayer={cart.PlayerName}
          cartammount={cart.CartAmmount}
          cartdate={cart.CartDate}
        ></Cart>
      );
    });

    //print all the nodes in the list
    return <tbody>{cartNodes}</tbody>;
  },
});

var Cart = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.crtid}</td>
        <td>{this.props.crtuser}</td>
        <td>{this.props.crtplayer}</td>
        <td>{this.props.crtammount}</td>
        <td>{this.props.crtdate}</td>
      </tr>
    );
  },
});

var SelectListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (crtUsers) {
      return (
        <option key={crtUsers.UserID} value={crtUsers.UserID}>
          {crtUsers.UserName}
        </option>
      );
    });
    return (
      <select name="crtuser" id="crtuser">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (crtPlayers) {
      return (
        <option key={crtPlayers.PlayerID} value={crtPlayers.PlayerID}>
          {crtPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="crtuser" id="crtuser">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});


const App = () => (
  <div id="content">
    <CartBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("content"));
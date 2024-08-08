var CartBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadCartsFromServer: function () {
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
  updateSingleCartFromServer: function (cart) {
    $.ajax({
      url: "/carts/updatesinglecart",
      dataType: "json",
      data: cart,
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
    this.loadCartsFromServer();
    // setInterval(this.loadCartsFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Update Carts</h1>
        <Cartform2 onCartSubmit={this.loadCartsFromServer} />
        <br />
        <div id="theresults">
          <div id="theleft">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Pickup</th>
                  <th>Made</th>
                  <th>Date</th>
                </tr>
              </thead>
              <CartList data={this.state.data} />
            </table>
          </div>
          <div id="theright">
            <CartUpdateform onUpdateSubmit={this.updateSingleCartFromServer} />
          </div>
        </div>
      </div>
    );
  },
});

var Cartform2 = React.createClass({
  getInitialState: function () {
    return {
      cartid: "",
      datauser: [],
      dataplayer: [],
      cartammount: "",
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
    var cartdate = cartdate.value;

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
      <div>
        <div id="theform">
          <form onSubmit={this.handleSubmit}>
            <h2>Carts</h2>
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

var CartUpdateform = React.createClass({
  getInitialState: function () {
    return {
      upcartid: "",
      upcartdailyid: "",
      updatauser: [],
      updataplayer: [],
      upcartpickup: "",
      upcartmade: "",
      upcartdate: "",
    };
  },
  handleUpOptionChangePickup: function (e) {
    this.setState({
      upselectedOptionPickup: e.target.value,
    });
  },
  handleUpOptionChangeMade: function (e) {
    this.setState({
      upselectedOptionMade: e.target.value,
    });
  },
  loadCartUsers: function () {
    $.ajax({
      url: "/carts/getcartusers",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ updatauser: data });
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
        this.setState({ updataplayer: data });
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
  handleUpSubmit: function (e) {
    e.preventDefault();

    var upcartid = upcartid.value;
    var upcartdailyid = upcartdailyid.value;
    var upcartuser = upcartuser.value;
    var upcartplayer = upcartplayer.value;
    var upcartpickup = this.state.upselectedOptionPickup;
    var upcartmade = this.state.upselectedOptionMade;
    var upcartdate = upcartdate.value;

    this.props.onUpdateSubmit({
      upcartid: upcartid,
      upcartdailyid: upcartdailyid,
      upcartuser: upcartuser,
      upcartplayer: upcartplayer,
      upcartpickup: upcartpickup,
      upcartmade: upcartmade,
      upcartdate: upcartdate,
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
                      name="upcartid"
                      id="upcartid"
                      value={this.state.upcartid}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Daily ID</th>
                  <td>
                    <input
                      type="number"
                      name="upcartdailyid"
                      id="upcartdailyid"
                      value={this.state.upcartdailyid}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>User</th>
                  <td>
                    <SelectUpdateListUser data={this.state.updatauser} />
                  </td>
                </tr>
                <tr>
                  <th>Player</th>
                  <td>
                    <SelectUpdateListPlayer data={this.state.updataplayer} />
                  </td>
                </tr>
                <tr>
                  <th>Pickup</th>
                  <td>
                    <label>
                      <input
                        type="radio"
                        name="upcartpickup"
                        id="upcartpickup"
                        value="1"
                        checked={this.state.upselectedOptionPickup === "1"}
                        onChange={this.handleUpOptionChangePickup}
                        className="form-check-input"
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="upcartpickup"
                        id="upcartpickup"
                        value="0"
                        checked={this.state.upselectedOptionPickup === "0"}
                        onChange={this.handleUpOptionChangePickup}
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
                        name="upcartmade"
                        id="upcartmade"
                        value="1"
                        checked={this.state.upselectedOptionMade === "1"}
                        onChange={this.handleUpOptionChangeMade}
                        className="form-check-input"
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="upcartmade"
                        id="upcartmade"
                        value="0"
                        checked={this.state.upselectedOptionMade === "0"}
                        onChange={this.handleUpOptionChangeMade}
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
                      name="upcartdate"
                      id="upcartdate"
                      value={this.state.upcartdate}
                      onChange={this.handleUpChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <input
              type="hidden"
              name="upcartkey"
              id="upcartkey"
              onChange={this.handleUpChange}
            />
            <input type="submit" value="Update Cart" />
          </form>
          <form onSubmit={this.handleUpDelete}>
            <input type="submit" value="Delete Cart" />
          </form>
        </div>
      </div>
    );
  },
});

var CartList = React.createClass({
  render: function () {
    var cartNodes = this.props.data.map(function (cart) {
      return (
        <Cart
          key={cart.CartID}
          cartid={cart.CartID}
          cartuser={cart.UserName}
          cartprice={cart.PlayerName}
          cartpickup={cart.CartPickup}
          cartmade={cart.CartMade}
          cartdate={cart.CartDate}
        ></Cart>
      );
    });

    //print all the nodes in the list
    return <tbody>{cartNodes}</tbody>;
  },
});

var Cart = React.createClass({
  getInitialState: function () {
    return {
      upcartkey: "",
      singledata: [],
    };
  },
  updateRecord: function (e) {
    e.preventDefault();
    var theupcartkey = this.props.cartkey;

    this.loadSingleCart(theupcartkey);
  },
  loadSingleCart: function (theupcartkey) {
    $.ajax({
      url: "/carts/getsinglecart",
      data: {
        upcartkey: theupcartkey,
      },
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ singledata: data });
        console.log(this.state.singledata);
        var populateCart = this.state.singledata.map(function (cart) {
          upcartkey.value = theupcartkey;
          upcartid.value = cart.CartID;
          upcartdailyid.value = cart.CartDailyID;
          upcartuser.value = cart.UserID;
          upcartplayer.value = cart.PlayerID;
          upcartpickup.value = cart.CartPickup;
          upcartmade.value = cart.CartMade;
          upcartdate.value = cart.CartDate;
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
        <td>{this.props.cartid}</td>
        <td>{this.props.cartdailyid}</td>
        <td>{this.props.cartuser}</td>
        <td>{this.props.cartplayer}</td>
        <td>{this.props.cartpickup}</td>
        <td>{this.props.cartmade}</td>
        <td>{this.props.cartdate}</td>
        <td>
          <form onSubmit={this.updateRecord}>
            <input type="submit" value="Update Record" />
          </form>
        </td>
      </tr>
    );
  },
});

var SelectListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (cartPlayers) {
      return (
        <option key={cartPlayers.PlayerID} value={cartPlayers.PlayerID}>
          {cartPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="cartplayer" id="cartplayer">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (cartUsers) {
      return (
        <option key={cartUsers.UserID} value={cartUsers.UserID}>
          {cartUsers.UserName}
        </option>
      );
    });
    return (
      <select name="cartuser" id="cartuser">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListPlayer = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (cartPlayers) {
      return (
        <option key={cartPlayers.PlayerID} value={cartPlayers.PlayerID}>
          {cartPlayers.PlayerName}
        </option>
      );
    });
    return (
      <select name="upcartplayer" id="upcartplayer">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

var SelectUpdateListUser = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (cartUsers) {
      return (
        <option key={cartUsers.UserID} value={cartUsers.UserID}>
          {cartUsers.UserName}
        </option>
      );
    });
    return (
      <select name="upcartuser" id="upcartuser">
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

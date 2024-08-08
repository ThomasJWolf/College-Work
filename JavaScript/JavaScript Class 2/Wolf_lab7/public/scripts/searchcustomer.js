var CustomerBox = React.createClass({
  getInitialState: function () {
    return { data: [] };
  },
  loadCustomerFromServer: function () {
    console.log(customerid.value);
    var discountvalue = 2;
    if (custdiscountyes.checked) {
      discountvalue = 1;
    }
    if (custdiscountno.checked) {
      discountvalue = 0;
    }

    $.ajax({
      url: "/getcust/",
      data: {
        customerid: customerid.value,
        customername: customername.value,
        customeraddress: customeraddress.value,
        customerzip: customerzip.value,
        customercredit: customercredit.value,
        customeremail: customeremail.value,
        customerdiscount: discountvalue,
        customerreward: custreward.value,
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
    this.loadCustomerFromServer();
    //setInterval(this.loadEmployeesFromServer, this.props.pollInterval);
  },

  render: function () {
    return (
      <div>
        <h1>Customers</h1>
        <Customerform2 onCustomerSubmit={this.loadCustomerFromServer} />
        <br />
        <table>
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Zip</th>
              <th>Credit</th>
              <th>Email</th>
              <th>Discount</th>
              <th>Rewards</th>
            </tr>
          </thead>
          <CustomerList data={this.state.data} />
        </table>
      </div>
    );
  },
});
var Customerform2 = React.createClass({
  getInitialState: function () {
    return {
      customerid: "",
      customername: "",
      customeraddress: "",
      customerzip: "",
      customercredit: "",
      customeremail: "",
      customerdiscount: "",
      data: [],
    };
  },

  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value,
    });
  },

  loadCustRewards: function () {
    $.ajax({
      url: "/getcustrewards",
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
    this.loadCustRewards();
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var customerid = this.state.customerid.trim();
    var customername = this.state.customername.trim();
    var customeraddress = this.state.customeraddress.trim();
    var customerzip = this.state.customerzip.trim();
    var customercredit = this.state.customercredit.trim();
    var customeremail = this.state.customeremail.trim();
    var customerdiscount = this.state.selectedOption;
    var customerreward = custreward.value;

    this.props.onCustomerSubmit({
      customerid: customerid,
      customername: customername,
      customeraddress: customeraddress,
      customerzip: customerzip,
      customercredit: customercredit,
      customeremail: customeremail,
      customerdiscount: customerdiscount,
      customerreward: customerreward,
    });
  },
  handleChange: function (event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  },
  render: function () {
    return (
      <div id="theform">
        <form onSubmit={this.handleSubmit}>
          <h2>Customers</h2>
          <table>
            <tbody>
              <tr>
                <th>Customer ID</th>
                <td>
                  <input
                    type="text"
                    name="customerid"
                    id="customerid"
                    value={this.state.customerid}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Customer Name</th>
                <td>
                  <input
                    name="customername"
                    id="customername"
                    value={this.state.customername}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Customer Address</th>
                <td>
                  <input
                    name="customeraddress"
                    id="customeraddress"
                    value={this.state.customeraddress}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Customer Zip</th>
                <td>
                  <input
                    name="customerzip"
                    id="customerzip"
                    value={this.state.customerzip}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Customer Credit</th>
                <td>
                  <input
                    name="customercredit"
                    id="customercredit"
                    value={this.state.customercredit}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Customer E-Mail</th>
                <td>
                  <input
                    name="customeremail"
                    id="customeremail"
                    value={this.state.customeremail}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Discount</th>
                <td>
                  <input
                    type="radio"
                    name="custdiscount"
                    id="custdiscountyes"
                    value="1"
                    checked={this.state.selectedOption === "1"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Discount Member
                  <input
                    type="radio"
                    name="custdiscount"
                    id="custdiscountno"
                    value="0"
                    checked={this.state.selectedOption === "0"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Standard Member
                </td>
              </tr>
              <tr>
                <th>Rewards</th>
                <td>
                  <SelectList data={this.state.data} />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="Search Customer" />
        </form>
      </div>
    );
  },
});

var CustomerList = React.createClass({
  render: function () {
    var customerNodes = this.props.data.map(function (customer) {
      //map the data to individual donations
      return (
        <Customer
          key={customer.dbcustomerid}
          custid={customer.dbcustomerid}
          custname={customer.dbcustomername}
          custaddress={customer.dbcustomeraddress}
          custzip={customer.dbcustomerzip}
          custcredit={customer.dbcustomercredit}
          custemail={customer.dbcustomeremail}
          custdiscount={customer.dbcustomerdiscount}
          custreward={customer.dbcustrewardname}
        ></Customer>
      );
    });

    //print all the nodes in the list
    return <tbody>{customerNodes}</tbody>;
  },
});

var Customer = React.createClass({
  render: function () {
    if (this.props.custdiscount == 1) {
      var thediscount = "Discount Member";
    } else {
      var thediscount = "Standard Member";
    }

    return (
      <tr>
        <td>{this.props.key}</td>
        <td>{this.props.custid}</td>
        <td>{this.props.custname}</td>
        <td>{this.props.custaddress}</td>
        <td>{this.props.custzip}</td>
        <td>{this.props.custcredit}</td>
        <td>{this.props.custemail}</td>
        <td>{thediscount}</td>
        <td>{this.props.custreward}</td>
      </tr>
    );
  },
});

var SelectList = React.createClass({
  render: function () {
    var optionNodes = this.props.data.map(function (custRewards) {
      return (
        <option
          key={custRewards.dbcustrewardid}
          value={custRewards.dbcustrewardid}
        >
          {custRewards.dbcustrewardname}
        </option>
      );
    });
    return (
      <select name="custreward" id="custreward">
        <option value="0"></option>
        {optionNodes}
      </select>
    );
  },
});

ReactDOM.render(<CustomerBox />, document.getElementById("content"));

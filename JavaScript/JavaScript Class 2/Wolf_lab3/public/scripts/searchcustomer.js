var CustomerBox = React.createClass({
    getInitialState: function () {
        return { data: [] };
    },
    loadCustomersFromServer: function () {
        console.log(customeraddress.value),
        $.ajax({
            url: '/getcus',
            data: {
                'customeraddress': customeraddress.value,
                'customername': customername.value,
                'customeremail': customeremail.value,
                'customerzip': customerzip.value,
                'customercredit': customercredit.value,
            },
            
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ data: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });

    },
    componentDidMount: function () {
        this.loadCustomersFromServer();
       // setInterval(this.loadCustomersFromServer, this.props.pollInterval);
    },

    render: function () {
        return (
            <div>
                <h1>Customers</h1>
                <Customerform2 onCustomerSubmit={this.loadCustomersFromServer} />
                <br />
                <table>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Salary</th>
                            </tr>
                         </thead>
                        <CustomerList data={this.state.data} />
                    </table>
                
            </div>
        );
    }
});

var Customerform2 = React.createClass({
    getInitialState: function () {
        return {
            customeraddress: "",
            customername: "",
            customeremail: "",
            customerzip: "",
            customercredit: ""
        };
    },

    handleSubmit: function (e) {
        e.preventDefault();

        var customeraddress = this.state.customeraddress.trim();
        var customeremail = this.state.customeremail.trim();
        var customername = this.state.customername.trim();
        var customerzip = this.state.customerzip.trim();
        var customercredit = this.state.customercredit;

        this.props.onCustomerSubmit({ customeraddress: customeraddress, customername: customername, customeremail: customeremail, customerzip, customerzip, customercredit, customercredit });

    },
    handleChange: function (event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    },
    render: function () {

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Customers</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Customer ID</th>
                            <td>
                                <input type="text" name="customeraddress" id="customeraddress" value={this.state.customeraddress} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Customer Name</th>
                            <td>
                                <input name="customername" id="customername" value={this.state.customername} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>Customer Email</th>
                            <td>
                                <input name="customeremail" id="customeremail" value={this.state.customeremail} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>Customer Phone</th>
                            <td>
                                <input name="customerzip" id="customerzip" value={this.state.customerzip} onChange={this.handleChange}  />
                            </td>
                        </tr>
                        <tr>
                            <th>Customer Salary</th>
                            <td>
                                <input name="customercredit" id="customercredit" value={this.state.customercredit} onChange={this.handleChange} />
                            </td>
                        </tr>    
                    </tbody>
                </table>
                <input type="submit" value="Search Customer" />

            </form>
        );
    }
});

var CustomerList = React.createClass({
    render: function () {
        var customerNodes = this.props.data.map(function (customer) {
            //map the data to individual donations
            return (
                <Customer
                    key={customer.dbcustomerkey}
                    cuskey={customer.dbcustomerkey}
                    cusid={customer.dbcustomeraddress}
                    cusname={customer.dbcustomername}
                    cusemail={customer.dbcustomeremail}
                    cusphone={customer.dbcustomerzip}
                    cussalary={customer.dbcustomercredit}
                >
                </Customer>
            );
                       
        });
        
        //print all the nodes in the list
        return (
             <tbody>
                {customerNodes}
            </tbody>
        );
    }
});



var Customer = React.createClass({

    render: function () {
        //display an individual donation
        return (

            <tr>
                            <td>
                                {this.props.cuskey} 
                            </td>
                            <td>
                                {this.props.cusid}
                            </td>
                            <td>
                                {this.props.cusname}
                            </td>
                            <td>
                                {this.props.cusemail}
                            </td>
                            <td>
                                {this.props.cusphone}
                            </td>
                            <td>
                                {this.props.cussalary}
                            </td>
                </tr>
        );
    }
});


ReactDOM.render(
    <CustomerBox />,
    document.getElementById('content')
);


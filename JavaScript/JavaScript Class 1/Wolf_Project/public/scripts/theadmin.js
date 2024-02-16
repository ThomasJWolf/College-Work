var AdminPage = React.createClass({
    getInitialState: function () {
        return {
            formData: null
        };
    },

    componentDidMount: function () {
        this.loadFormData();
    },

    loadFormData: function () {
        var data = localStorage.getItem('formData');
        console.log("Loaded data:", data);
        if (data) {
            this.setState({
                formData: JSON.parse(data)
            });
        }
    },


    renderFormData: function () {
        var data = this.state.formData;
        if (!data) {
            return <p>No data available</p>;
        }

        return (
            <div>
                <p>Customer Name: {data.customerName}</p>
                <p>Customer Email: {data.customerEmail}</p>
                <p>Customer Phone: {data.customerPhone}</p>
                <p>Date of Birth: {data.customerDateofBirth}</p>
                <p>Address: {data.customerAddress}</p>
                <p>City: {data.customerCity}</p>
                <p>State: {data.customerState}</p>
                <p>Zip: {data.customerZip}</p>
                <p>Preferred Contact Method: {data.customerPreferedContact}</p>
                <p>Reason for Contact: {data.customerContactReason}</p>
                <p>Comments: {data.customerComments}</p>
                <p>Newsletter Subscription: {data.customerNewsletterSub}</p>
            </div>
        );
    },


    render: function () {
        return (
            <div className="adminPage">
                <h1>Admin - Customer Data</h1>
                {this.renderFormData()}
            </div>
        );
    }
});

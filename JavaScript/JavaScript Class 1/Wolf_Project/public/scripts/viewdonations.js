var DonationBox = React.createClass({
  getInitialState: function() {
    //this will hold all the data being read and posted to the file
    return {data: []};
  },
  loadDonationsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        //set the state with the newly loaded data so the display will update
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    //Once the component is fully loaded, we grab the donations
    this.loadDonationsFromServer();
    //... and set an interval to continuously load new data:
    setInterval(this.loadDonationsFromServer, this.props.pollInterval);
  },
  handlePatientSubmit: function (patient) {
    //this is just an example of how you would submit a form
    //you would have to implement something separately on the server
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: patient,
      success: function (data) {
        //We set the state again after submission, to update with the submitted data
        this.setState({ data: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    //we list donations, then show the form for new donations
    return (
      <div className="patientBox">
        <h1>Patients</h1>
        <PatientList data={this.state.data} />

      </div>
    );
  },
});

var DonationList = React.createClass({
  render: function() {
    var donationNodes = this.props.data.map(function(donation) {
      //map the data to individual donations
      return (
        <Donation
          contributor={donation.contributor}
          key={donation.id}
          amount={donation.amount}
          >
          {donation.department}
          {donation.comment}
        </Donation>
      );
    });
    //print all the nodes in the list
    return (
      <div className="donationList">
        {donationNodes}
      </div>
    );
  }
});

var Donation = React.createClass({
  render: function() {
    //display an individual donation
    return (
      <div className="donation">
            <h2 className="donationContributor">
                {this.props.key } <br/> 
                {this.props.contributor}: ${this.props.amount}
              
              
        </h2>
          {this.props.children.toString()}
      </div>
    );
  }
});

ReactDOM.render(
  <DonationBox url="/api/donations" pollInterval={2000} />,
  document.getElementById('content')
);

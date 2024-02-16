/*
Everything in the react and js program we create will have objects created that will
perform the tasks we are looking for.  Each one of these objects is create and placed
into a variable that can be accessed.  You cannot just create html in these projects,
you must create objects that will then be accessed.  Same with variables, these cannot just
be changed, an object must be modified.  All objects in these are constantly able to be changed
*/

//This creates an object class named DonationBox
var DonationBox = React.createClass({
  getInitialState: function() {
    //this will hold all the data being read and posted to the file
    return {data: []};
  },
  //This loads the donatation from the json file notated in the server.js file
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
  handleDonationSubmit: function(donation) {
    //this is just an example of how you would submit a form
    //you would have to implement something separately on the server
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: donation,
      success: function(data) {
        //We set the state again after submission, to update with the submitted data
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  //Render functions allow items to show up on the screen, usually it is html code.
  render: function() {
    //we list donations, then show the form for new donations
    //DonationForm calls the object created below on line 66.
    return (
      <div className="donationBox">
        <h1>Donations</h1>
      
        <DonationForm  />
      </div>
    );
  }
});


//Object that builds the form we will show to the user.
var DonationForm = React.createClass({
  //Sets the initial state of the variables we will use
  getInitialState: function() {
    return {
      contributor: "",
      amount: undefined,
      comment: "",
      email: "",
      department: undefined
    };
  },
  //Function that will run when the submit button is pressed.
  handleSubmit: function(e) {
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();
    
    //we clean up the data as we save it
    var contributor = this.state.contributor.trim();
    var amount = this.state.amount;
    var comment = this.state.comment.trim();
    var thelocation = this.state.department.trim();
    
    //these two items are required, if they are not there the return statement
    //stops the program from running any farther.
    if (!contributor || !amount) {
      return;
    }
    
    //Here we do the final submit to the parent component, giving it the field name and
    //then the name of the variable we are using.
    this.props.onDonationSubmit({contributor: contributor, amount: amount, comment: comment, department: thelocation});
    
    //Now that the form is submitted, we empty all the fields
    this.setState({
      contributor: '',
      amount: undefined,
      comment: '',
      email: '',
      department: undefined
    });
  },
  //Function to validate the email
  validateEmail: function (value) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  },
  //Function to validate the currency entered
  validateDollars: function (value) {
    //will accept dollar amounts with two digits after the decimal or no decimal
    //will also accept a number with or without a dollar sign
    var regex  = /^\$?[0-9]+(\.[0-9][0-9])?$/;
    return regex.test(value);
  },
  //Generic Function to validate anything we set.
  commonValidate: function () {
    //you could do something here that does general validation for any form field
    return true;
  },
  //Saves the valuie from the field into the variables
  setValue: function (field, event) {
    //If the contributor input field were directly within this
    //this component, we could use this.refs.contributor.value
    //Instead, we want to save the data for when the form is submitted
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  },
  //Render functions are what make things actually show up on the screen.
  render: function() {
    //Each form field is actually another component.
    //Two of the form fields use the same component, but with different variables
    return (
      //Declares the html for the form, when they hit the submit button it then goes to
      //the object we created on line 79
      //The textInput objects are declare below and these then instantiate those
      //objects using the settings given
      <form className="donationForm" onSubmit={this.handleSubmit}>
        <h2>University Donation</h2>
        
        <TextInput
          value={this.state.email}
          uniqueName="email"
          text="Email Address"
          textArea={false}
          required={true}
          minCharacters={6}
          validate={this.validateEmail}
          onChange={this.setValue.bind(this, 'email')} 
          errorMessage="Email is invalid"
          emptyMessage="Email is required" />
        <br /><br />

        <TextInput
          value={this.state.contributor}
          uniqueName="contributor"
          text="Your Name"
          textArea={false}
          required={true}
          minCharacters={3}
          validate={this.commonValidate}
          onChange={this.setValue.bind(this, 'contributor')} 
          errorMessage="Name is invalid"
          emptyMessage="Name is required" />
        <br /><br />
          
        <TextInput
          value={this.state.comment}
          uniqueName="comment"
          text="Is there anything you'd like to say?"
          textArea={true}
          required={false}
          validate={this.commonValidate}
          onChange={this.setValue.bind(this, 'comment')} 
          errorMessage=""
          emptyMessage="" />
        <br /><br />
      
        {/* This Department component is specialized to include two fields in one */}
        <h4>Where would you like your donation to go?</h4>
        <Department
          value={this.state.department} 
          onChange={this.setValue.bind(this, 'department')} />
        <br /><br />
      
        {/* This Radios component is specialized to include two fields in one */}
        <h4>How much would you like to give?</h4>
        <Radios
          value={this.state.amount}
          values={[10, 25, 50]}
          name="amount"
          addAny={true}
          anyLabel=" Donate a custom amount"
          anyPlaceholder="Amount (0.00)"
          anyValidation={this.validateDollars}
          onChange={this.setValue.bind(this, 'amount')} 
          anyErrorMessage="Amount is not a valid dollar amount"
          itemLabel={' Donate $[VALUE]'} />
        <br /><br />
      
        <h4>Payment Information</h4>
        <Payment />
        <br />
      
        <input type="submit" value="Submit" />
      </form>
    );
  }
});
//Object that will set the message variable when incorrect input is given.
var InputError = React.createClass({
  getInitialState: function() {
    return {
      message: 'Input is invalid'
    };
  },
  //Renders the error message when input is incorrect.
  render: function(){ 
    var errorClass = classNames(this.props.className, {
      'error_container':   true,
      'visible':           this.props.visible,
      'invisible':         !this.props.visible
    });
//When the error occurs, the html code below is output to the screen
    return (
      <div className={errorClass}>
        <span>{this.props.errorMessage}</span>
      </div>
    )
  }

});
//Creates the TextInput object, which will create an input box, similar to creating the html
//code <input type = "text" name = "name">.  In the case below we give several other values
//that the text input will utilize, such as the value, if it is valid, empty, and if the 
//error message is visible.
var TextInput = React.createClass({
  getInitialState: function(){
    //most of these variables have to do with handling errors
    return {
      isEmpty: true,
      value: null,
      valid: false,
      errorMessage: "Input is invalid",
      errorVisible: false
    };
  },
//When the value of the text input changes, we have to adapt the page so that any change
//will change the value in the text field.  Without this below, nothing would show up when we
//type into this field.
  handleChange: function(event){
    //validate the field locally
    this.validation(event.target.value);

    //Call onChange method on the parent component for updating it's state
    //If saving this field for final form submission, it gets passed
    // up to the top component for sending to the server
    if(this.props.onChange) {
      this.props.onChange(event);
    }
  },
//Runs validation for the text inputs.
  validation: function (value, valid) {
    //The valid variable is optional, and true if not passed in:
    if (typeof valid === 'undefined') {
      valid = true;
    }
    
    var message = "";
    var errorVisible = false;
    
    //we know how to validate text fields based on information passed through props
    if (!valid) {
      //This happens when the user leaves the field, but it is not valid
      //(we do final validation in the parent component, then pass the result
      //here for display)
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }
    else if (this.props.required && jQuery.isEmptyObject(value)) {
      //this happens when we have a required field with no text entered
      //in this case, we want the "emptyMessage" error message
      message = this.props.emptyMessage;
      valid = false;
      errorVisible = true;
    }
    else if (value.length < this.props.minCharacters) {
      //This happens when the text entered is not the required length,
      //in which case we show the regular error message
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }
    
    //setting the state will update the display,
    //causing the error message to display if there is one.
    this.setState({
      value: value,
      isEmpty: jQuery.isEmptyObject(value),
      valid: valid,
      errorMessage: message,
      errorVisible: errorVisible
    });

  },
//This will trigger when someone clicks off the text input
  handleBlur: function (event) {
    //Complete final validation from parent element when complete
    var valid = this.props.validate(event.target.value);
    //pass the result to the local validation element for displaying the error
    this.validation(event.target.value, valid);
  },
  //If the option for textArea is given instead of an input box
  //This renders the text area with the given settings, along with creating an object for 
  //if there is an input error.
  render: function() {
    if (this.props.textArea) {
      return (
        <div className={this.props.uniqueName}>
          <textarea
            placeholder={this.props.text}
            className={'input input-' + this.props.uniqueName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value} />
      
          <InputError 
            visible={this.state.errorVisible} 
            errorMessage={this.state.errorMessage} />
        </div>
      );
  //If the textArea is not select as an option, 
  //This renders the object as an input box with the given settings,
  //along with creating an object for if there is an input error.
    } else {
      return (
        <div className={this.props.uniqueName}>
          <input
            placeholder={this.props.text}
            className={'input input-' + this.props.uniqueName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value} />
      
          <InputError 
            visible={this.state.errorVisible} 
            errorMessage={this.state.errorMessage} />
        </div>
      );
    }
  }
});
//Creates an object if we want to create a radio button
var Radios = React.createClass({
  getInitialState: function() {
    //displayClass is the class we use for displaying or hiding
    //the optional "any value" text field
    return {
      displayClass: 'invisible',
      valid: false,
      errorMessage: "Input is invalid",
      errorVisible: false
    };
  },
  handleClick: function(displayClass, e) {
    //if we click any option other than the "any value" option,
    //we hide the "any value" text field. Otherwise, show it
    if (displayClass == 'invisible') {
      this.setState(
        {
          displayClass: displayClass,
          errorVisible: false
        }
      );
      this.props.onChange(e);
    }
    else {
      this.setState({displayClass: displayClass});
    }
  },
  handleAnyChange: function(e) {
    //this validation is specifically for the optional "any value" text field
    //Since we have no idea what the requirements are locally, we call the parent
    //validation function, then set the error states accordingly
    if (this.props.anyValidation(e.target.value)) {
      this.setState(
        {
          valid: true,
          errorMessage: "Input is invalid",
          errorVisible: false
        }
      );
    }
    else {
      this.setState(
        {
          valid: false,
          errorMessage: this.props.anyErrorMessage,
          errorVisible: true
        }
      );
    }
    this.props.onChange(e);
  },
  render: function() {
    var rows = [];
    var label = "";
    
    //we have passed in all the options for the radios, so we traverse the array
    for (var i = 0; i < this.props.values.length; i++) {
      //We do this little replace for when we want to display the value as part of
      //additional text. Otherwise, we would just put '[VALUE]' when passing
      //the itemLabel prop from the parent component, or leave out '[VALUE]' entirely
      label = this.props.itemLabel.replace('[VALUE]', this.props.values[i]);
      
      //You'll see that even the <br /> field has a key. React will give you errors
      //if you don't do this. This is just an axample of what's possible, but
      //you would normally add extra spacing with css
      rows.push(<input
        key={this.props.name + '-' + i}
        type="radio"
        ref={this.props.name + '-' + this.props.values[i]}
        name={this.props.name}
        value={this.props.values[i]}
        selected={this.props.value==this.props.values[i]?true:false}
        onClick={this.handleClick.bind(this, 'invisible')} />,
        
        <label key={this.props.name + '-label-' + i} htmlFor={this.props.values[i]}>{label}</label>,
      
        <br key={this.props.name + '-br-' + i} />);
    }
    
    //The "any value" field complicates things a bit
    if (this.props.addAny) {
      //we passed in a separate label just for the option that
      //activates the "any value" text field
      var selected = false;
      label = this.props.anyLabel;
      //if it's undefined, that means we don't select anything
      if (this.props.value != undefined && this.props.values.indexOf(this.props.value) == -1) {
        selected = true;
      }
      rows.push(<input
        key={this.props.name + '-' + i}
        type="radio"
        ref={this.props.name + '-any'}
        name={this.props.name} value="any"
        selected={selected}
        onClick={this.handleClick.bind(this, 'visible')} />,
          
        <label key={this.props.name + '-label-' + i} htmlFor={this.props.values[i]}>{label}</label>);
      
      //and now we add the "any value text field, with all its special variables"
      var value = "";
      if (selected) {
        value = this.props.value;
      }
      
      rows.push(<div key={this.props.name + '-div-' + (i+2)} className={this.state.displayClass}>
        <input
          className="anyValue"
          key={this.props.name + '-' + (i+1)}
          type="text"
          value={value}
          placeholder={this.props.anyPlaceholder}
          onChange={this.handleAnyChange}
          ref={this.props.name} />
      </div>);
    }
    
    //Now we just return all those rows, along with the error component
    return (
      <div className="radios">
        {rows}
        
        <InputError 
          visible={this.state.errorVisible} 
          errorMessage={this.state.errorMessage} />
      </div>
    );
  }
});
//Creates an object for a checkbox.
var Payment = React.createClass({
  //we have no error checking for this one, so there are no error states
  getInitialState: function() {
    return {
      displayClass: 'invisible'
    };
  },
  handleClick: function(displayClass, e) {
    //we simply set the state in order to update the display when
    //we want to show the extra options
    this.setState({displayClass: displayClass});
  },
  render: function() {
    //we take full control over the checkbox that allows us to show additional options
    //this will ensure that we truly toggle the options, and don't wind up with a case
    //where the checkbox is not checked but the extra options show and vice versa
    var optionsClass = "invisible";
    var isChecked = false;
    if (this.state.displayClass == 'invisible') {
      optionsClass = "visible";
    }
    else {
      isChecked = true;
    }
    
    //We could have extra checkboxes, but this is just to show how to properly show other options
    //when a checkbox is checked. We won't do error checking on the payment info here.
    return (
      <div className="payment">
        <a href="#">PayPal button goes here</a>
        <br />
        <input type="checkbox" checked={isChecked} onChange={this.handleClick.bind(this, optionsClass)} name="card" />Pay with card<br />
  	    <div id="Choices" className={this.state.displayClass}>Credit Card Information<br />
  		    <input type="text" placeholder="Card number" ref="card" />Card number<br />
  		    <input type="text" placeholder="CVV" ref="cvv" />CVV<br />
  		    <input type="text" placeholder="etc" ref="whatever" />Etc<br />
  	    </div>
        <InputError 
          visible={this.state.errorVisible} 
          errorMessage={this.state.errorMessage} />
      </div>
    );
  }
});
//Creates an object for a drop down list
var Department = React.createClass({
  getInitialState: function() {
    return {
      displayClass: 'invisible'
    };
  },
  handleClick: function(e) {
    //We're doing another one of these "any value" fields, only shown when
    //a specific "other" option is chosen
    this.props.onChange(e);
    var displayClass = 'invisible';
    if (e.target.value == 'other') {
      displayClass = 'visible';
    }
    this.setState({displayClass: displayClass});
  },
  render: function() {
    //This is a select field with options and sub-options, plus an "any value" field
    var value = this.props.value;
    if (this.props.value != undefined && ['none', 'muir', 'revelle', 'sixth', 'jacobs', 'global', 'medicine', 'scholarships'].indexOf(this.props.value) == -1) {
      value = 'other';
    }
    else if (this.props.value == undefined) {
      value = 'none';
    }
    //Outputs the information for the dropdown list.
    return (
      <div className="department">
        <select value={value} onChange={this.handleClick} multiple={false} ref="department">
          <option value="none"></option>
          <optgroup label="College">
            <option value="muir">Muir</option>
            <option value="revelle">Revelle</option>
            <option value="sixth">Sixth</option>
          </optgroup>
          <optgroup label="School">
            <option value="jacobs">Jacobs School of Engineering</option>
            <option value="global">School of Global Policy and Strategy</option>
            <option value="medicine">School of Medicine</option>
          </optgroup>
          <option value="scholarships">Scholarships</option>
          <option value="other">Other</option>
        </select>
        <div className={this.state.displayClass}>
          <input className="anyValue" value={this.props.value=='other'?'':this.props.value} type="text" onChange={this.props.onChange} placeholder="Department" ref="any-department" />
        </div>
      
        <InputError 
          visible={this.state.errorVisible} 
          errorMessage={this.state.errorMessage} />
      </div>
    );
  }
});

//This code renders the DonationBox object we created up at the top of the page onto the screen.
//In addition, it tells the page the url of the api to access.  The api is created on the 
//server.js page.  It tells it to create this object in the content div on the html page.
ReactDOM.render(
  <DonationBox url="/api/donations" pollInterval={2000} />,
  document.getElementById('content')
);

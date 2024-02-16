/*
Everything in the react and js program we create will have objects created that will
perform the tasks we are looking for.  Each one of these objects is create and placed
into a variable that can be accessed.  You cannot just create html in these projects,
you must create objects that will then be accessed.  Same with variables, these cannot just
be changed, an object must be modified.  All objects in these are constantly able to be changed
*/

//This creates an object class named CustomerBox
var CustomerBox = React.createClass({
  render: function () {
    //we list customers, then show the form for new customers
    //CustomerForm calls the object created below on line 66.
    return (
      <div className="customerBox">
        <h1>Customers</h1>
        <Customerform2 />
      </div>
    );
  }
});


//Object that builds the form we will show to the user.
var Customerform2 = React.createClass({
  //Sets the initial state of the variables we will use
  getInitialState: function () {
    return {
      customername: "",
      customeraddress: "",
      customerzip: "",
      customercredit: "",
      customeremail: ""
    };
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
    var regex = /^\$?[0-9]+(\.[0-9][0-9])?$/;
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
  render: function () {
    //Each form field is actually another component.
    //Two of the form fields use the same component, but with different variables
    return (
      //Declares the html for the form, when they hit the submit button it then goes to
      //the object we created on line 79
      //The textInput objects are declare below and these then instantiate those
      //objects using the settings given
      <form className="customerForm" onSubmit={this.handleSubmit}>
        <h2>Customers</h2>
        <table>
          <tbody>
            <tr>
              <th>Customer Name</th>
              <td>
                <TextInput
                  value={this.state.customername}
                  uniqueName="customername"
                  textArea={false}
                  required={true}
                  minCharacters={6}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, 'customername')}
                  errorMessage="Customer Name is invalid"
                  emptyMessage="Customer Name is required" />
              </td>
            </tr>
            <tr>
              <th>Customer Address</th>
              <td>
                <TextInput
                  value={this.state.customeraddress}
                  uniqueName="customeraddress"

                  textArea={false}
                  required={false}
                  minCharacters={6}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, 'customeraddress')}
                  errorMessage="Customer Address is invalid" />
              </td>
            </tr>
            <tr>
              <th>Customer Zip</th>
              <td>
                <TextInput
                  value={this.state.customerzip}
                  uniqueName="customerzip"
                  textArea={false}
                  required={false}
                  validate={this.commonValidate}
                  onChange={this.setValue.bind(this, 'customerzip')}
                  errorMessage=""
                  emptyMessage="" />
              </td>
            </tr>
            <tr>
              <th>Customer Credit Limit</th>
              <td>
                <TextInput
                  value={this.state.customercredit}
                  uniqueName="customercredit"
                  textArea={false}
                  required={false}
                  minCharacters={6}
                  validate={this.validateDollars}
                  onChange={this.setValue.bind(this, 'customercredit')}
                  errorMessage="Did not enter a dollar value"
                  emptyMessage="" />
              </td>
            </tr>
            <tr>
              <th>Customer Email</th>
              <td>
                <TextInput
                  value={this.state.customeremail}
                  uniqueName="customeremail"
                  textArea={false}
                  required={true}
                  minCharacters={6}
                  validate={this.validateEmail}
                  onChange={this.setValue.bind(this, 'customeremail')}
                  errorMessage="Invalid E-Mail Address"
                  emptyMessage="E-Mail Address is required" />
              </td>
            </tr>
          </tbody>
        </table>

        <input type="submit" value="Submit" />
      </form>
    );
  }
});
//Object that will set the message variable when incorrect input is given.
var InputError = React.createClass({
  getInitialState: function () {
    return {
      message: 'Input is invalid'
    };
  },
  //Renders the error message when input is incorrect.
  render: function () {
    var errorClass = classNames(this.props.className, {
      'error_container': true,
      'visible': this.props.visible,
      'invisible': !this.props.visible
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
  getInitialState: function () {
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
  handleChange: function (event) {
    //validate the field locally
    this.validation(event.target.value);

    //Call onChange method on the parent component for updating it's state
    //If saving this field for final form submission, it gets passed
    // up to the top component for sending to the server
    if (this.props.onChange) {
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
  render: function () {
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
  getInitialState: function () {
    //displayClass is the class we use for displaying or hiding
    //the optional "any value" text field
    return {
      displayClass: 'invisible',
      valid: false,
      errorMessage: "Input is invalid",
      errorVisible: false
    };
  },
  handleClick: function (displayClass, e) {
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
      this.setState({ displayClass: displayClass });
    }
  },
  handleAnyChange: function (e) {
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
  render: function () {
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
        selected={this.props.value == this.props.values[i] ? true : false}
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

      rows.push(<div key={this.props.name + '-div-' + (i + 2)} className={this.state.displayClass}>
        <input
          className="anyValue"
          key={this.props.name + '-' + (i + 1)}
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

//This code renders the CustomerBox object we created up at the top of the page onto the screen.
//In addition, it tells the page the url of the api to access.  The api is created on the 
//server.js page.  It tells it to create this object in the content div on the html page.
ReactDOM.render(
  <CustomerBox />,
  document.getElementById('content')
);

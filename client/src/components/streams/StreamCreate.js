import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);

// NOTES

/* Reason we are going to make a class based component, is because we are eventually going to have a bunch of helper methods to better organize our code */

/* Anytime the field tag calls the component or function inside the property with a key of component, it’s going to pass in some number of arguments. Including any errors from our validate function */

import React from "react";

import Form from "react-bootstrap/Form";

export default class FormElement extends React.Component {
  render() {
    return (
      <Form.Group>
        <Form.Label>{this.props.labelName}:</Form.Label>
        <Form.Control
          id={this.props.id}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          isInvalid={this.props.isInvalid}
        />
        <Form.Control.Feedback type="invalid">
          {this.props.fdString}
        </Form.Control.Feedback>
      </Form.Group>
    );
  }
}

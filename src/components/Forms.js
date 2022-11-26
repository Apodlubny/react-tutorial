import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    license: false,
  };
  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <label htmlFor={this.nameInputId}>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label htmlFor={this.tagInputId}>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          ></input>
        </label>
      </form>
    );
  }
}

export default Form;

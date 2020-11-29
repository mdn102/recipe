import React from 'react';

class SearchForm extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Ingredients:
          <input type="text" value={this.props.value} onChange={this.props.handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;

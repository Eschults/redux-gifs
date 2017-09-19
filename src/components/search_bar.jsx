import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' };
  }

  handleChange = (term) => {
    this.setState({ term });
    this.props.onQueryChange(term);
  }

  render() {
    return (
      <input
        className="form-control"
        value={this.state.term}
        placeholder="Look for GIFs"
        onChange={event => this.handleChange(event.target.value)}
        onFocus={() => this.props.colorFrame('blue')}
        onBlur={() => this.props.colorFrame('white')}
      />
    );
  }
}

export default SearchBar;

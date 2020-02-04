import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class ArtistTest extends Component {
  componentDidMount() {
    this.props.getArtistTest()
  }
  render() {
    console.log("getArtistTest  ", this.props.artistTest);
    return (
      <div className="row">
        hello
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    artistTest: state.artists.artistTest
  }
};

export default connect(mapStateToProps, actions)(ArtistTest);

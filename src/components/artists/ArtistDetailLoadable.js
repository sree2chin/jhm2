import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from '../Loading';
 
const LoadableComponent = Loadable({
  loader: () => import('./ArtistDetail'),
  loading: Loading,
});
 
export default class ArtistDetailLoadable extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
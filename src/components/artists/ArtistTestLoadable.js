import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from '../Loading';
 
const LoadableComponent = Loadable({
  loader: () => import('./ArtistTest'),
  loading: Loading,
});
 
export default class ArtistTestLoadable extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
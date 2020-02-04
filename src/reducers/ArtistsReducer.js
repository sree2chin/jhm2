import _ from 'lodash';
import {
  SEARCH_ARTISTS,
  FIND_ARTIST,
  RESET_ARTIST,
  ARTIST_TEST
} from '../actions/types';

const INITIAL_STATE = {
  all: [],
  offset: 0,
  limit: 20,
  count: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_ARTISTS:
      return _.extend({}, state, {
        count: action.payload.length,
        all: action.payload
      })
    case FIND_ARTIST:
      return _.extend({}, state, { artist: action.payload });
    case RESET_ARTIST:
      return _.extend({}, state, { artist: null });
    case ARTIST_TEST:
      return _.extend({}, state, { artistTest: action.payload })
    default:
      return state;
  }
};

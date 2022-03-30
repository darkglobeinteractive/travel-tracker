import { LOAD_COMPLETE } from './types';

// The loadComplete action creator is only called once all travel dates have been loaded, so we don't need to do any logic here
const loadComplete = () => {

  return {
    type: LOAD_COMPLETE
  }

}

export default loadComplete;

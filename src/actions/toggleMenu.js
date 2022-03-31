import { TOGGLE_MENU } from './types';

// This action creator sets the state variable with determines whether the menu is open or closed
const toggleMenu = () => {
  return {
    type: TOGGLE_MENU
  }
}

export default toggleMenu;

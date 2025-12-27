// project import
import farmOwner from './farmOwner';
import admin from './admin';
import pages from './page';

// ==============================|| MENU ITEMS ||============================== //

export function getMenuItems(role) {
  const baseMenu = role === 'admin' ? admin : farmOwner;

  return {
    items: [baseMenu, pages]
  };
}

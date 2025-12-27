// project import
import farmOwner from './farmOwner';
import admin from './admin';
import pages from './page';

// ==============================|| MENU ITEMS ||============================== //

// 🔹 DEFAULT export (used by Breadcrumbs, route helpers, etc.)
const menuItems = {
  items: [farmOwner, admin, pages] // full tree, role-agnostic
};

export default menuItems;

// 🔹 ROLE-BASED export (used by Navigation sidebar)
export function getMenuItems(role) {
  const baseMenu = role === 'admin' ? admin : farmOwner;

  return {
    items: [baseMenu, pages]
  };
}

// project import
import farmOwner from './farmOwner';
import admin from './admin';
import pages from './page';

// ==============================|| MENU ITEMS ||============================== //
var role = "admin"; // This should come from user auth context
const menu = role === "admin" ? admin : farmOwner;

const menuItems = {
  items: [menu, pages]
};

export default menuItems;

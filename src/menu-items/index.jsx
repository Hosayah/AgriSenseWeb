// project import
import farmOwner from './farmOwner';
import admin from './admin';
import pages from './page';
import { useAuth } from 'contexts/AuthContext';
import { Link as RouterLink, useNavigate  } from 'react-router-dom';

// ==============================|| MENU ITEMS ||============================== //

function RoleBasedMenu() {
  const { user } = useAuth();
  console.log("RoleBasedMenu user role:", user?.role); // <- check role

  if(!user) return pages; 
  if (user?.role === "admin") return admin;
  return farmOwner;
}

const menu = RoleBasedMenu();

const menuItems = {
  items: [menu, pages]
};

export default menuItems;

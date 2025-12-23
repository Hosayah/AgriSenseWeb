// assets
import { DashboardOutlined } from '@ant-design/icons';
import { RobotOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  RobotOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const admin = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'admin-dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/admin/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'sample-page',
      title: 'SamplePage',
      type: 'item',
      url: '/admin/sample-page',
      icon: icons.RobotOutlined,
      breadcrumbs: false
    },
  ]
};

export default admin;

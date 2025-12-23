// assets
import { DashboardOutlined } from '@ant-design/icons';
import { RobotOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  RobotOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const farmOwner = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'farmOwner-dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/farmOwner/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'sample-page',
      title: 'SamplePage',
      type: 'item',
      url: '/farmOwner/sample-page',
      icon: icons.RobotOutlined,
      breadcrumbs: false
    },
  ]
};

export default farmOwner;

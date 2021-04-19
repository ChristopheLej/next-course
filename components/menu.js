import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Info from '@material-ui/icons/Info';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useLogin } from '../hooks/user';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

export default function Menu({ menuSelected }) {
  let menu = [
    { text: 'Courses', icon: <LibraryBooks />, path: '/courses' },
    { text: 'Login', icon: <AccountCircle />, path: '/login' },
    { text: 'A propos', icon: <Info />, path: '/about' }
  ];

  const { isLogin } = useLogin();
  console.log('isLogin', isLogin);
  if (isLogin) {
    menu = [
      { text: 'Courses', icon: <LibraryBooks />, path: '/courses' },
      { text: 'Logout', icon: <AccountCircle />, path: '/login' },
      { text: 'A propos', icon: <Info />, path: '/about' }
    ];
  }

  return (
    <div className="" role="presentation">
      <MenuList>
        {menu.map(({ text, icon, path }) => (
          <Link href={path} key={text}>
            <MenuItem button key={text} onClick={() => menuSelected(path)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </div>
  );
}

Menu.propTypes = {
  menuSelected: PropTypes.func.isRequired
};

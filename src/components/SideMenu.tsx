import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import TwitterIcon from '@material-ui/icons/Twitter';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';

import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';
import { useStylesHome } from '../pages/Home/theme';

interface SideMenuProps {
  classes: ReturnType<typeof useStylesHome>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false);

  const handleClickOpenAddTweet = () => {
    setVisibleAddTweet(true);
  };

  const onCloseAddTweet = () => {
    setVisibleAddTweet(false);
  };

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <Link to="/home">
          <IconButton className={classes.logo} aria-label="" color="primary">
            <TwitterIcon className={classes.logoIcon} />
          </IconButton>
        </Link>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Поиск
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Уведомления
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Сообщения
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Закладки
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Список
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Профиль
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          onClick={handleClickOpenAddTweet}
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth>
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
        <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
          <div style={{ width: 550 }}>
            <AddTweetForm maxRows={10} classes={classes} />
          </div>
        </ModalBlock>
      </li>
    </ul>
  );
};

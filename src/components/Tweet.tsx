import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import ShareIcon from '@material-ui/icons/ReplyOutlined';

import { useStylesHome } from '../pages/Home/theme';

interface TweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useStylesHome>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  _id,
  text,
  user,
  classes,
}: TweetProps): React.ReactElement => {
  return (
    <Link to={`/home/tweet/${_id}`} className={classes.tweetWrapper}>
      <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватар пользователя ${user.fullname}`}
          src={user.avatarUrl}
        />
        <div>
          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
            <span className={classes.tweetUserName}>·</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <CommentIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepostIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <LikeIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ShareIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
    </Link>
  );
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchTweetData, setTweetData } from '../../../store/ducks/tweet/actionCreators';
import { selectIsTweetLoading, selectTweetData } from '../../../store/ducks/tweet/selectors';
import { useStylesHome } from '../theme';

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useStylesHome();
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetData);
  const isLoading = useSelector(selectIsTweetLoading);
  const params: { id?: string } = useParams();
  const id = params.id;

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }

    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={classes.tweetsCenterLoading}>
        <CircularProgress />
      </div>
    );
  }

  if (tweetData) {
    return (
      <Paper className={classes.fullTweet}>
        <div className={classNames(classes.tweetsHeaderUser)}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватар пользователя ${tweetData.user.fullname}`}
            src={tweetData.user.avatarUrl}
          />
          <Typography>
            <b>{tweetData.user.fullname}</b>&nbsp;
            <div>
              <span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
              <span className={classes.tweetUserName}>·</span>&nbsp;
              <span className={classes.tweetUserName}>1 ч</span>
            </div>
          </Typography>
        </div>
        <Typography className={classes.fullTweetText} gutterBottom>
          {tweetData.text}
        </Typography>
      </Paper>
    );
  }

  return null;
};

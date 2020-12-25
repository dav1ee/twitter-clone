import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

import { SideMenu } from '../../components/SideMenu';
import { AddTweetForm } from '../../components/AddTweetForm';
import { Tweet } from '../../components/Tweet';
import { SearchTextField } from '../../components/SearchTextField';
import { Tags } from '../../components/Tags';
import { BackButton } from '../../components/BackButton';
import { FullTweet } from './components/FullTweet';
import { useStylesHome } from './theme';

import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { fetchTags } from '../../store/ducks/tags/actionCreators';

export const Home = (): React.ReactElement => {
  const classes = useStylesHome();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <SideMenu classes={classes} />
        </Grid>
        <Grid sm={8} md={6} item>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Route path="/home/:any">
                <BackButton />
              </Route>

              <Route path={['/home', '/home/search']} exact>
                <Typography variant="h6">Твиты</Typography>
              </Route>

              <Route path="/home/tweet">
                <Typography variant="h6">Твитнуть</Typography>
              </Route>
            </Paper>

            <Route path={['/home', '/home/search']} exact>
              <Paper>
                <div className={classes.addForm}>
                  <AddTweetForm classes={classes} />
                </div>
                <div className={classes.addFormBottomLine} />
              </Paper>
            </Route>

            <Route path="/home" exact>
              {isLoading ? (
                <div className={classes.tweetsCenterLoading}>
                  <CircularProgress />
                </div>
              ) : (
                tweets.map((tweet) => <Tweet key={tweet._id} {...tweet} classes={classes} />)
              )}
            </Route>

            <Route path="/home/tweet/:id" component={FullTweet} exact />
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Tags classes={classes} />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2F83afb31c-38fc-11e9-9988-28303f70fcff?fit=scale-down&source=next&width=700"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock Of Shame"
                    secondary={
                      <Typography component="span" variant="body2">
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

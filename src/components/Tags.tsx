import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Divider from '@material-ui/core/Divider/Divider';

import { useStylesHome } from '../pages/Home/theme';
import { selectIsTagsLoaded, selectTagsItems } from '../store/ducks/tags/selectors';

interface TagsProps {
  classes: ReturnType<typeof useStylesHome>;
}

export const Tags: React.FC<TagsProps> = ({ classes }: TagsProps): React.ReactElement | null => {
  const items = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectIsTagsLoaded);

  if (!isLoaded) {
    return null;
  }

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {items.map((obj) => (
          <React.Fragment key={obj._id}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${obj.name}`}>
                <ListItemText
                  primary={obj.name}
                  secondary={
                    <Typography component="span" variant="body2" color="textSecondary">
                      Твитов: {obj.count}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

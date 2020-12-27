import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import Avatar from '@material-ui/core/Avatar';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import { useStylesHome } from '../pages/Home/theme';
import { fetchAddTweet } from '../store/ducks/tweets/actionCreators';
import { selectAddFormState } from '../store/ducks/tweets/selectors';
import { AddFormState } from '../store/ducks/tweets/contracts/state';

interface AddTweetFormProps {
  classes: ReturnType<typeof useStylesHome>;
  maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows,
}: AddTweetFormProps): React.ReactElement => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>('');
  const addFormState = useSelector(selectAddFormState);
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length;

  const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(text));
    setText('');
  };

  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={'Аватар пользователя UserAvatar'}
          src="https://lh3.googleusercontent.com/ogw/ADGmqu_raPFqB_H7xgSh5Iw9YcvafWf8xmuHUQJGratA6g=s83-c-mo"
        />
        <TextareaAutosize
          onChange={handleChangeTextarea}
          value={text}
          rowsMax={maxRows}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="static"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={text.length >= MAX_LENGTH ? { color: '#ff7979' } : undefined}
                />
                <CircularProgress
                  style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                  variant="static"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={addFormState === AddFormState.LOADING || !text || text.length > MAX_LENGTH}
            color="primary"
            variant="contained">
            {addFormState === AddFormState.LOADING ? (
              <CircularProgress color="inherit" size={16} />
            ) : (
              'Твитнуть'
            )}
          </Button>
        </div>
      </div>
      {addFormState === AddFormState.ERROR && (
        <Alert severity="error">При добавлении твита возникла ошибка</Alert>
      )}
    </div>
  );
};

import { call, put, takeLatest } from 'redux-saga/effects';

import { addTweet, setAddFormState, setTweets, setTweetsLoadingState } from './actionCreators';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingState, Tweet, AddFormState } from './contracts/state';
import { FetchAddTweetActionInterface, TweetsActionType } from './contracts/actionTypes';

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: 'David Larin',
        username: 'dav1ee',
        avatarUrl:
          'https://lh3.googleusercontent.com/ogw/ADGmqu_raPFqB_H7xgSh5Iw9YcvafWf8xmuHUQJGratA6g=s83-c-mo',
      },
    };
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}

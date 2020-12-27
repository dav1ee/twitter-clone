import { call, put, takeLatest } from 'redux-saga/effects';

import {
  addTweet,
  FetchAddTweetActionInterface,
  setTweets,
  setTweetsLoadingState,
  TweetsActionType,
} from './actionCreators';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingState, Tweet } from './contracts/state';

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
        fullname: 'Test User',
        username: 'test',
        avatarUrl: 'https://source.unsplash.com/random/100x100?5',
      },
    };
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}

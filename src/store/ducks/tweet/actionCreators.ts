import {
  FetchTweetDataActionInterface,
  SetTweetDataActionInterface,
  SetTweetLoadingStateActionInterface,
  TweetActionType,
} from './contracts/actionTypes';
import { LoadingState, TweetState } from './contracts/state';

export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface => ({
  type: TweetActionType.SET_TWEET_DATA,
  payload,
});

export const setTweetLoadingState = (
  payload: LoadingState,
): SetTweetLoadingStateActionInterface => ({
  type: TweetActionType.SET_LOADING_STATE,
  payload,
});

export const fetchTweetData = (payload: string): FetchTweetDataActionInterface => ({
  type: TweetActionType.FETCH_TWEET_DATA,
  payload,
});

export type TweetActions =
  | SetTweetDataActionInterface
  | FetchTweetDataActionInterface
  | SetTweetLoadingStateActionInterface;

import {
  AddTweetActionInterface,
  FetchAddTweetActionInterface,
  FetchTweetsActionInterface,
  SetAddFormStateActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStateActionInterface,
  TweetsActionType,
} from './contracts/actionTypes';
import { TweetsState, LoadingState, Tweet, AddFormState } from './contracts/state';

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionType.SET_TWEETS,
  payload,
});

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
  type: TweetsActionType.FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetsActionType.ADD_TWEET,
  payload,
});

export const setTweetsLoadingState = (
  payload: LoadingState,
): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionType.SET_LOADING_STATE,
  payload,
});

export const setAddFormState = (payload: AddFormState): SetAddFormStateActionInterface => ({
  type: TweetsActionType.SET_ADD_FORM_STATE,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionType.FETCH_TWEETS,
});

export type TweetsActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetTweetsLoadingStateActionInterface
  | FetchAddTweetActionInterface
  | AddTweetActionInterface
  | SetAddFormStateActionInterface;

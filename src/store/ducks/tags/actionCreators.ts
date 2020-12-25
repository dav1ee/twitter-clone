import { Action } from 'redux';

import { TagsState, LoadingState } from './contracts/state';

export enum TagsActionType {
  SET_TAGS = 'tags/SET_TAGS',
  FETCH_TAGS = 'tags/FETCH_TAGS',
  SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface SetTagsActionInterface extends Action<TagsActionType> {
  type: TagsActionType.SET_TAGS;
  payload: TagsState['items'];
}

export interface FetchTagsActionInterface extends Action<TagsActionType> {
  type: TagsActionType.FETCH_TAGS;
}

export interface SetTagsLoadingStateActionInterface extends Action<TagsActionType> {
  type: TagsActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
  type: TagsActionType.SET_TAGS,
  payload,
});

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateActionInterface => ({
  type: TagsActionType.SET_LOADING_STATE,
  payload,
});

export const fetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionType.FETCH_TAGS,
});

export type TagsActions =
  | SetTagsActionInterface
  | FetchTagsActionInterface
  | SetTagsLoadingStateActionInterface;

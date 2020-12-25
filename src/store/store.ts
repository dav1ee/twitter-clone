import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import { rootReducer } from './rootReducer';
import { TweetsState } from './ducks/tweets/contracts/state';
import { TweetState } from './ducks/tweet/contracts/state';
import { TagsState } from './ducks/tags/contracts/state';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState;
  tweet: TweetState;
  tags: TagsState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

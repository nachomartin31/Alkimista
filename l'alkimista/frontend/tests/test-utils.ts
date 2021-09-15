/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Commit, Dispatch } from "vuex";
import { State } from "../src/types/newInterface";

const configActionContextAndState = (commit: Commit, state: State): any => ({
  commit,
  state,
  dispatch: jest.fn(),
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

const configActionContext = (commit: Commit): any => ({
  commit,
  dispatch: jest.fn(),
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

const configActionContextAndDispatch = (dispatch: Dispatch): any => ({
  commit: jest.fn(),
  dispatch,
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

export {
  configActionContext,
  configActionContextAndState,
  configActionContextAndDispatch,
};

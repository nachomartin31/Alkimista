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

const configActionContext = (state: State): any => ({
  state,
  commit: jest.fn(),
  dispatch: jest.fn(),
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

const configActionContextAndDispatch = (state: State, dispatch: Dispatch): any => ({
  state,
  dispatch,
  commit: jest.fn(),
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

export default {
  configActionContextAndState,
  configActionContext,
  configActionContextAndDispatch,

};

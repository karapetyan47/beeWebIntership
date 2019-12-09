import { call, put, takeEvery } from "redux-saga/effects";
import { ATTEMPT_LOGIN } from "redux/actions";
import UsersService from "services/users-service";
import { loginFailed, loginSuccess, FETCH_ME } from "../actions/actions-login";
import setAutheriztionToken from "../../utils/setAutorizationToken";

const usersService = new UsersService();

function* watchLogin() {
  yield takeEvery(ATTEMPT_LOGIN, login);
}
function* watchFetchMe() {
  yield takeEvery(FETCH_ME, fetchMe);
}

function* login({ payload }) {
  try {
    const data = yield call(usersService.login, payload);
    localStorage.setItem("jwtToken", data.data.tokens.accessToken);
    document.cookie = `refreshToken=${data.data.tokens.refreshToken}`;
    yield put(loginSuccess(data.data.user));

    setAutheriztionToken(data.data.tokens.accessToken);
  } catch (e) {
    yield put(loginFailed(e));
  }
}

function* fetchMe() {
  try {
    const data = yield call(usersService.getMe);

    yield put(loginSuccess(data.data));
  } catch (e) {
    yield put(loginFailed(e));
  }
}

export { watchLogin, watchFetchMe };

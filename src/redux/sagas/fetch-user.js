import { call, put, takeEvery } from "redux-saga/effects";
import { ATTEMPT_LOGIN } from "redux/actions";
import UsersService from "services/users-service";
import { loginFailed, loginSuccess } from "../actions/actions-login";
import setAutheriztionToken from "../../utils/setAutorizationToken";

const usersService = new UsersService();

function* watchLogin() {
  yield takeEvery(ATTEMPT_LOGIN, login);
}

function* login({ payload }) {
  try {
    const data = yield call(usersService.login, payload);
    localStorage.setItem("jwtToken", data.data.token);
    yield put(loginSuccess(data.data.user[0]));

    setAutheriztionToken(data.data.token);
  } catch (e) {
    yield put(loginFailed(e));
  }
}

export { watchLogin };

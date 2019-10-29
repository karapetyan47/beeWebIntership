import { call, put,takeEvery} from 'redux-saga/effects';
import { usersLoaded } from '../../actions/actions-login';


function* watchFetchUsers() {
    yield takeEvery('FETCHED_USERS', fetchUsersAsync);
  }

  function* fetchUsersAsync() {
    try {
      const data = yield call(() => {
        return fetch('some url')
            .then(res => res.json())                                                    
        }
      );
      yield put(usersLoaded(data));
    } catch {
        console.log("error")
    }
  }

  export {
      watchFetchUsers
  }
// 各アクションが呼び出されたとき、stateをどう変更するかを定義
import { UPDATE_NAME, UPDATE_AGE } from './action';

const initialState = {
    name: 'hoge',
    age: 33
}

const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        case UPDATE_NAME:
            let nameState = {...state};
            nameState.name = action.payload;
            return nameState;
        case UPDATE_AGE:
            let ageState = {...state};
            ageState.age = action.payload;
            return ageState;
        default:
            return state;
    }
}

export default reducer

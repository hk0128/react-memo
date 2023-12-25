// nameとageをアップデートするためのaction(関数）を実装
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_AGE = 'UPDATE_AGE';

export const updateName = (name: string) => {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export const updateAge = (age: string) => {
    return {
        type: UPDATE_AGE,
        payload: age
    }
}

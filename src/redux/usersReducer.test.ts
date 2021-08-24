import { actions } from './usersReducer';
import usersReducer, { InitialState } from './usersReducer';

let state: InitialState;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0, name: 'Serg 0', followed: false, photos: {small: null, large: null}, status: 'status 0'
            },
            {
                id: 1, name: 'Serg 1', followed: false, photos: {small: null, large: null}, status: 'status 1'
            },
            {
                id: 2, name: 'Serg 2', followed: true, photos: {small: null, large: null}, status: 'status 2'
            },
            {
                id: 3, name: 'Serg 3', followed: true, photos: {small: null, large: null}, status: 'status 3'
            },],
        pageSize: 10,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [] 
    }
})

test("follow success", () => {
 
    const newState = usersReducer(state, actions.followSuccess(1))
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
}) 

test("unfollow success", () => {
 
    const newState = usersReducer(state, actions.unfollowSuccess(2))
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeFalsy()
}) 
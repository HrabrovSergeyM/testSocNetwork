import { APIResponseType, ResultCodesEnum } from './../api/api';
import { usersAPI } from './../api/usersApi';
import { actions, follow, unfollow } from "./usersReducer"

jest.mock('./../api/usersApi')

const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    usersAPIMock.follow.mockClear()
    usersAPIMock.unfollow.mockClear()
})

usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))


test('success follow thunk', async () => {
    const thunk = follow(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setFollowingProgress(false, 1))
})

test('success unfollow thunk', async () => {
    const thunk = unfollow(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setFollowingProgress(false, 1))
})
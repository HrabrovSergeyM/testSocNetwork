import { APIResponseType, ResultCodesEnum } from './../api/api';
import { usersAPI } from './../api/usersApi';
import { follow } from "./usersReducer"

jest.mock('./../api/usersApi')
const usersAPIMock = usersAPI
const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}

//@ts-ignore
usersAPIMock.follow.mockReturnValue(Promise.resolve(result))

test('', async () => {
    const thunk = follow(1)
    const dispatchMock = jest.fn()

    //@ts-ignore
    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(3)
})
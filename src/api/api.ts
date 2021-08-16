import axios from "axios";
import { follow } from "../redux/usersReducer";
import { UserType } from "../types/types";

export const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "001c36a3-ba71-40a3-a26a-dec8b0b0d69d",
  },
});

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  Captcha = 10,
}

export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null

} 









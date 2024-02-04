import { BaseRes } from './Common';
import { OrderValue } from './Form';

export interface OrderReq extends OrderValue {}

export interface OrderRes extends BaseRes<Result> {}

export type Result = {
  userInfo: UserInfo;
  _id: string;
  roomId: RoomID;
  checkInDate: Date;
  checkOutDate: Date;
  peopleNum: number;
  orderUserId: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
};

export type RoomID = {
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  price: number;
  status: number;
  layoutInfo: Info[];
  facilityInfo: Info[];
  amenityInfo: Info[];
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface Info {
  title: string;
  isProvide: boolean;
}

export interface UserInfo {
  address: Address;
  name: string;
  phone: string;
  email: string;
}

export interface Address {
  zipcode: number;
  detail: string;
}

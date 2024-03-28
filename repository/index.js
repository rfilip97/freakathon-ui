import login from './auth/login';
import register from './auth/register';
import getEvents from './events/getEvents';
import createEvent from './events/createEvent';
import joinEvent from './events/joinEvent';
import searchFriend from './users/searchFriend';
import getFriends from './users/getFriends';

export const Repository = {
  login,
  register,
  getEvents,
  createEvent,
  joinEvent,
  searchFriend,
  getFriends
};

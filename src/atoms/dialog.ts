import { atom } from 'recoil';

export const dialogAtom = atom({
  key: new Date().toString(), // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const loggedInUserData = atom({
  key: `${new Date().toString()}1`,
  default: {
    sub: null,
    email_verified: null,
    phone_number_verified: null,
    email: null,
    username: null,
    token: null,
  },
});

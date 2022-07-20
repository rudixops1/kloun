import { atom } from 'recoil';

export const dialogAtom = atom({
  key: new Date().toString(), // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

import { proxy } from "valtio";

export const menuState = proxy({
  isOpen: false,
  toggle: () => {
    menuState.isOpen = !menuState.isOpen;
  },
});

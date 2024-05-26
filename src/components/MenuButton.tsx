import { menuState } from "@/state/menuState";

export const MenuButton = () => {
  return (
    <button onClick={menuState.toggle} className="button-menu">
      menu
    </button>
  );
};

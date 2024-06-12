import { useAppDispatch, useAppSelector } from '../store';
import {
  toggleSidebar,
  showMenu,
  hiddenMenu,
  toggleMenu,
} from '../store/sidebar/sidebarSlice';

export const useSidebarStore = () => {
  const dispatch = useAppDispatch();
  const { menu, sidebar } = useAppSelector((state) => state.sidebar);

  const onToggleSidebar = async () => {
    dispatch(toggleSidebar());
  };

  const onShowMenu = async () => {
    dispatch(showMenu());
  };

  const onHiddenMenu = async () => {
    dispatch(hiddenMenu());
  };

  const onToggleMenu = async () => {
    dispatch(toggleMenu());
  };

  return {
    menu,
    sidebar,
    onToggleSidebar,
    onShowMenu,
    onHiddenMenu,
    onToggleMenu,
  };
};

import { Link } from 'react-router-dom';
import { useAuthStore } from '../../app/auth/hooks/useAuthStore';
import { useDarkModeStore } from '../../hooks/useDarkModeStore';
import { useSidebarStore } from '../../hooks/useSidebarStore';
import { theme } from '../../theme/darkTheme';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { LogoutOutlined } from '@mui/icons-material';

const MenuConfig = () => {
  const { startLogout } = useAuthStore();

  const { menu, sidebar } = useSidebarStore();

  const { darkMode, onToggleDarkMode } = useDarkModeStore();
  const { menu: menuTheme } = theme;
  return (
    <div
      className={`menu p-5 w-[200px] flex flex-col items-start absolute  ${sidebar ? 'left-[240px]' : 'left-[90px]'} bottom-5   border rounded-md shadow-md   transition-all z-10 ${menu ? 'block' : 'hidden'} shadow-black/30 shadow-sm backdrop-blur-sm bg-white/80 dark:bg-[#242424]/50`}
    >
      <div className="relative w-full pt-4">
        <Link to="/app/profile">
          <button
            className={`w-full rounded-md text-left   p-2 m-0   ${menuTheme.activeHoverColor} ${menuTheme.textColor}`}
          >
            Configuración
          </button>
        </Link>
        <div
          className={`flex w-full justify-between items-center rounded-md   p-2 ${menuTheme.activeHoverColor} ${menuTheme.textColor} cursor-pointer`}
          onClick={onToggleDarkMode}
        >
          <button className="w-full rounded-md text-left  mt-0 p-0">
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
          {darkMode ? (
            <FaRegSun className="text-2xl" />
          ) : (
            <FaRegMoon className="text-2xl " />
          )}
        </div>
        <div className="flex w-full justify-end">
          <button
            onClick={startLogout}
            className="border-red-500 border-r-2 border-b-2 text-red-500 px-1 py-1 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 shadow-black shadow-sm"
          >
            <LogoutOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuConfig;

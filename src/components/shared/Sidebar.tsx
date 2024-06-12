import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react';
import { useAuthStore } from '../../app/auth/hooks/useAuthStore';
import { Avatar } from '@mui/material';
import { useSidebarStore } from '../../hooks/useSidebarStore';
import { useCallback, useEffect } from 'react';
import { theme } from '../../theme/darkTheme';
import MenuConfig from './MenuConfig';

export default function Sidebar({ children }: any) {
  const { auth } = useAuthStore();

  const { sidebar, onToggleSidebar, onHiddenMenu, onToggleMenu } =
    useSidebarStore();

  const { sidebarTheme } = theme;

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const sidebarElement = document.querySelector('.sidebar');
      if (sidebarElement && !sidebarElement.contains(e.target as Node)) {
        onHiddenMenu();
      }
    },
    [onHiddenMenu],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <aside className="sidebar">
      <nav
        className={`h-full flex flex-col ${
          sidebarTheme.backgroundColor +
          ' ' +
          sidebarTheme.borderColor +
          ' ' +
          sidebarTheme.textColor
        }   border-r  `}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              sidebar ? 'w-32' : 'w-0'
            }`}
            alt=""
          />
          <button
            onClick={onToggleSidebar}
            className={`p-1.5 rounded-lg ${
              sidebarTheme.iconColor + ' ' + sidebarTheme.hoverColor
            } `}
          >
            {sidebar ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>

        <div className="border-t flex p-3">
          <Avatar
            src={auth.photoURL ?? ''}
            sx={{ width: 50, height: 50, borderRadius: '10%' }}
            className=" shadow-md shadow-black/50 cursor-pointer"
            onClick={onToggleMenu}
          />
          <div
            className={` flex justify-between items-center overflow-hidden transition-all ${
              sidebar ? 'w-52 ml-3' : 'w-0'
            } `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{auth.displayName}</h4>
              <span className={`text-xs ${sidebarTheme.textColor}`}>
                {auth.email}
              </span>
            </div>
            <button
              className={`p-1.5 rounded-lg  ${sidebarTheme.hoverColor}`}
              onClick={onToggleMenu}
            >
              <MoreVertical size={20} />
            </button>

            <MenuConfig />
          </div>
        </div>
      </nav>
    </aside>
  );
}

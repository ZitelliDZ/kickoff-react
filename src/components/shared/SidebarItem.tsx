import { useState } from 'react';
import { useSidebarStore } from '../../hooks/useSidebarStore';
import { theme } from '../../theme/darkTheme';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { ArrowDropDownOutlined } from '@mui/icons-material';

export function SidebarItem({ icon, text, active, alert, children }: any) {
  const { sidebar } = useSidebarStore();
  const { sidebarTheme } = theme;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          sidebarTheme.textColor
        }  ${
          active
            ? ` ${sidebarTheme.activeColor}`
            : `${sidebarTheme.activeHoverColor}`
        } `}
        onClick={handleToggle}
      >
        <div
          className={
            active ? ` ${sidebarTheme.iconColor}` : `${sidebarTheme.textColor}`
          }
        >
          {icon}
        </div>
        <span
          className={`overflow-hidden transition-all ${sidebarTheme.textColor} ${
            sidebar ? 'w-52 ml-3' : 'w-0'
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded ${sidebarTheme.iconColorBg}  ${
              sidebar ? '' : 'top-2'
            }`}
          />
        )}
        {!sidebar && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 z-30  text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 ${
              sidebarTheme.backgroundColor + ' ' + sidebarTheme.textColor
            }`}
          >
            {text}
          </div>
        )}
        {children && (
          <span
            className={`ml-auto transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'} ${sidebarTheme.textColor}`}
          >
            <ArrowDropDownOutlined />
          </span>
        )}
      </li>
      {isOpen && children && (
        <ul className="ml-4">
          {children.map((child: any, index: number) => (
            <Link to="/app/example2" key={index}>
              {child}
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}

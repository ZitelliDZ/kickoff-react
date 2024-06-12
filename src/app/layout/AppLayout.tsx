import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../components/shared/Sidebar';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaUserEdit, FaUsers } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import NavBar from '../../components/shared/NavBar';
import './index.css';
import { useSidebarStore } from '../../hooks/useSidebarStore';
import { theme } from '../../theme/darkTheme';
import { SidebarItem } from '../../components/shared/SidebarItem';
import { FaListCheck } from 'react-icons/fa6';
import { FaUserPlus } from 'react-icons/fa';

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AppLayout = ({ children, title }: AppLayoutProps) => {
  const location = useLocation();

  const { sidebar } = useSidebarStore();
  const { mainTheme } = theme;

  return (
    <div
      className={`flex w-full flex-row h-screen ${mainTheme.backgroundColor}  parent transition-all `}
      style={{ gridTemplateColumns: sidebar ? '250px 1fr' : '75px 1fr' }}
    >
      {/** Sidebar */}
      <Sidebar>
        <SidebarItem
          icon={<FaUsers />}
          text="Main Item"
          active={false}
          alert={false}
        >
          <Link to="/app/users/create">
            <SidebarItem
              icon={<FaUserPlus />}
              text="Crear"
              active={false}
              alert={false}
            />
          </Link>
          <Link to="/app/users/edit">
            <SidebarItem
              icon={<FaUserEdit />}
              text="Editar"
              active={false}
              alert={false}
            />
          </Link>
          <Link to="/app/users">
            <SidebarItem
              icon={<FaListCheck />}
              text="Listado"
              active={false}
              alert={false}
            />
          </Link>
        </SidebarItem>
        <Link to="/app/dashboard">
          <SidebarItem
            icon={<MdOutlineDashboard size={20} />}
            text={'Dashboard'}
            {...(location.pathname === '/app/dashboard' && { active: true })}
          />
        </Link>
        <Link to="/app/settings">
          <SidebarItem
            icon={<AiFillSetting size={20} />}
            text={'Settings'}
            {...(location.pathname === '/app/settings' && { active: true })}
          />
        </Link>
        <Link to="/home">
          <SidebarItem
            icon={<MdOutlineDashboard size={20} />}
            text={'Home'}
            {...(location.pathname === '/home' && { active: true })}
          />
        </Link>
      </Sidebar>

      {/** Top Menu */}
      <NavBar titulo={title} />

      <main
        className={`main ${mainTheme.backgroundColor + ' ' + mainTheme.textColor} overflow-y-auto`}
      >
        {children}
      </main>
    </div>
  );
};

export default AppLayout;

import { LogoutOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useAuthStore } from '../../app/auth/hooks/useAuthStore';
import { useSidebarStore } from '../../hooks/useSidebarStore';
import { theme } from '../../theme/darkTheme';

interface NavBarProps {
  titulo: string;
  className?: string;
}
const NavBar = ({ titulo, className }: NavBarProps) => {
  const { startLogout } = useAuthStore();

  const { sidebar } = useSidebarStore();

  const { navbar } = theme;

  const onLogout = async () => {
    await startLogout();
  };

  return (
    <nav
      className={`navbar fixed ${navbar.backgroundColor + ' ' + navbar.textColor} ${
        sidebar ? 'left-[250px]' : 'left-[75px]'
      }   backdrop-blur   transition-all   z-10 shadow-md shadow-black/10 ${
        sidebar ? 'w-[calc(100vw-14rem)]' : 'w-[calc(100vw-3rem)]'
      } ${className}`}
    >
      <div className="flex flex-row w-full px-14 py-7 justify-between">
        <Typography variant="h4" noWrap component="div">
          {titulo}
        </Typography>
        <IconButton color="error" onClick={onLogout}>
          <LogoutOutlined />
        </IconButton>
      </div>
    </nav>
  );
};

export default NavBar;

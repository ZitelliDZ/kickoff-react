import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#242424',
    },
    secondary: {
      main: '#543884',
    },
    error: {
      main: red.A400,
    },
  },
});

export const theme = {
  sidebarTheme: {
    backgroundColor: 'bg-white dark:bg-[#242424]',
    textColor: 'text-gray-800 dark:text-white',
    borderColor: 'border-gray-300 dark:border-gray-700',
    hoverColor: 'hover:bg-gray-200 dark:hover:bg-gray-700',
    activeColor:
      'bg-gradient-to-tr from-gray-300 to-gray-200 bg-gradient-to-tr dark:from-[#3a3e47] dark:to-[#3a3e47]',
    activeHoverColor:
      'hover:bg-gray-300 text-gray-600 hover:dark:bg-[#3a3a3a]  ',
    activeTextColor: 'text-gray-200 dark:text-rose-700',
    iconColor: 'text-[#ff4b4c] dark:text-[#ff4b4c]',
    iconColorBg: 'bg-rose-500  ',
  },
  menu: {
    backgroundColor: 'bg-white dark:bg-[#242424]',
    textColor: 'text-black dark:text-white',
    borderColor: 'border-gray-300 dark:border-gray-700',
    hoverColor: 'hover:bg-gray-200 dark:hover:bg-gray-700',
    activeColor:
      'bg-gradient-to-tr from-gray-300 to-gray-200 bg-gradient-to-tr dark:from-[#3a3e47] dark:to-[#3a3e47]',
    activeHoverColor:
      'hover:bg-gray-300 text-gray-600 hover:dark:bg-[#3a3e47]  ',
    activeTextColor: 'text-gray-200 dark:text-rose-700',
    iconColor: 'text-gray-500 dark:text-[#ff4b4c]',
  },
  navbar: {
    backgroundColor: 'bg-white dark:bg-[#242424]',
    textColor: 'text-black dark:text-white',
    borderColor: 'border-gray-300 dark:border-gray-700',
    hoverColor: 'hover:bg-gray-200 dark:hover:bg-gray-700',
    activeColor:
      'bg-gradient-to-tr from-indigo-200 to-indigo-100 bg-gradient-to-tr dark:from-[#3a3e47] dark:to-[#3a3e47]',
    activeHoverColor:
      'hover:bg-indigo-50 text-gray-600 hover:dark:bg-[#3a3e47]  ',
    activeTextColor: 'text-gray-200 dark:text-rose-700',
    iconColor: 'text-gray-500 dark:text-[#ff4b4c]',
  },
  mainTheme: {
    backgroundColor:
      'bg-gradient-to-tr from-indigo-50 to-indigo-100 dark:bg-gradient-to-tr  dark:from-[#3a3a3a] dark:to-[#3a3a3a] ',
    textColor: 'text-gray-700 dark:text-gray-300',
    borderColor: 'border-gray-300 dark:border-gray-700',
    hoverColor: 'hover:bg-gray-200 dark:hover:bg-gray-700',
    activeColor: 'bg-indigo-200 dark:bg-[#3a3e47]',
    activeHoverColor: 'hover:bg-indigo-50 text-gray-600 dark:text-gray-200',
    activeTextColor: 'text-gray-200 dark:text-rose-700',
    iconColor: 'text-gray-500 dark:text-[#ff4b4c]',
  },

  card:{
    backgroundColor: 'bg-white dark:bg-[#242424]',
    textColor: 'text-black dark:text-white',
    borderColor: 'border-gray-300 dark:border-gray-700',
    hoverColor: 'hover:bg-gray-200 dark:hover:bg-gray-700',
    activeColor:
      'bg-gradient-to-tr from-gray-300 to-gray-200 bg-gradient-to-tr dark:from-[#3a3e47] dark:to-[#3a3e47]',
    activeHoverColor:
      'hover:bg-gray-300 text-gray-600 hover:dark:bg-[#3a3e47]  ',
    activeTextColor: 'text-gray-200 dark:text-rose-700',
    iconColor: 'text-gray-500 dark:text-[#ff4b4c]',
  }
};

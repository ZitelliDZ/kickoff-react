import AppRouter from './routes/AppRouter';
import { AppTheme } from './theme/AppTheme';

function App() {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
}

export default App;

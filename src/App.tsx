import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { Home } from './pages/home/Home';
import { DigimonProvider } from './context/DigimonContext';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <DigimonProvider>
        <Home />
      </DigimonProvider>
    </QueryClientProvider>
  )
}

export default App

import { Router } from './config'
import Provider from './providers/Provider'

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
import React from 'react';
import FullPage from './pages/FullPage';
import Home from './pages/Home';
import Pages from "./pages/Pages";
import StarsBg from './components/StarsBg';
import Navbar from './pages/Navbar';
import { useSnapshot } from 'valtio';
import state from './store';

function App() {
  const snap = useSnapshot(state)
  return (
    <main className={snap.isDarkMode ? "dark" : ""}>
      <div className="app transition-all ease-in relative">
        <div className="dark:bg-black bg-slate-300">
          <StarsBg />
          <Home />
          {/* <Pages /> */}
          <FullPage />
          <Navbar />
        </div>
      </div>
    </main>
  );
}

export default App

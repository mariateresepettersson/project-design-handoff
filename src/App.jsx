// The main App component sets up routing for the application.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/HomePage';
import { About } from './pages/AboutPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
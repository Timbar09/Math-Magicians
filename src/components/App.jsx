import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';

import Home from '../routes/Home';
import CalcPage from '../routes/CalcPage';
import Quote from '../routes/Quote';
import NotMatch from '../routes/NotMatch';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="calculator" element={<CalcPage />} />
    <Route path="quote" element={<Quote />} />
    <Route path="*" element={<NotMatch />} />
  </Routes>
);

export default App;

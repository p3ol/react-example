import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Premium from './Premium';
import Free from './Free';
import Subscription from './Subscription';
import Auth from './Auth';
import Access from './Access';

const App = () => {
  return (
    <BrowserRouter>
      <Auth>
        <Access>
          <Routes>
            <Route path="/premium" element={<Premium />} />
            <Route path="/free" element={<Free />} />
            <Route path="/subscribe" element={<Subscription />} />
            <Route index element={<Home />} />
          </Routes>
        </Access>
      </Auth>
    </BrowserRouter>
  );
};

export default App;

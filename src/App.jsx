
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import NoMatch from './components/NoMatch';
import { HashRouter } from 'react-router-dom';


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:slug' element={<BlogPost />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

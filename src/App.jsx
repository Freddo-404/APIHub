import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home'; // Ensure correct file path and naming
import Vision from './pages/Vision';
import Endpoints from './pages/Endpoints';
import Error404Page from './pages/Error404Page';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} /> {/* Updated Home route */}
      <Route path="vision" element={<Vision />} />
      <Route path="endpoints" element={<Endpoints />} />
      <Route path="*" element={<Error404Page
       />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider

} from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './app/store.js'
// components
import HomeScreen from './Screens/HomeScreen.jsx'
import DeatilsScreen from './Screens/DetailsScreen.jsx'
import MoviesScreen from './Screens/MoviesScreen.jsx';
import SeriesScreen from './Screens/SeriresScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={ <HomeScreen/> } />
      <Route path='/movies/:id' element={<DeatilsScreen />} />
      <Route path='/series/:id' element={<DeatilsScreen />} />
      <Route path='/movies' element={<MoviesScreen />} />
      <Route path='/series' element={<SeriesScreen />}/>
      
      
     
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)

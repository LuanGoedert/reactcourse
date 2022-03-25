
import {  Routes, Route } from 'react-router-dom'
import MainNavigation from './components/layout/MainNavigation';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/FavoritesPage';
import NewMeetupsPage from './pages/NewMeetup';



function App() {
  return (<div>
    <MainNavigation/>
    <Routes>
      <Route path='/' element ={<AllMeetupsPage/>}/>
      <Route path='/favorites' element ={<FavoritesPage/>}/>
      <Route path='/new-meetup' element ={<NewMeetupsPage/>}/>
      </Routes>
    </div>);
}

export default App;
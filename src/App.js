
import {  Routes, Route } from 'react-router-dom'


import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/FavoritesPage';
import NewMeetupsPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';



function App() {
  return (<Layout>
    <Routes>
      <Route path='/' element ={<AllMeetupsPage/>}/>
      <Route path='/favorites' element ={<FavoritesPage/>}/>
      <Route path='/new-meetup' element ={<NewMeetupsPage/>}/>
      </Routes>
    </Layout>);
}

export default App;
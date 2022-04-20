import {useContext} from 'react';
import FavoritesContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupLIst';


function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);
    let content;

    if(favoritesCtx.totalFavorites === 0){
        content = <p> you got no favorites</p>
    }else{
     content= <MeetupList meetups={favoritesCtx.favorites} />
    }


    return <section>
        <h1>My favorites</h1>
       {content}
    </section>;
}
export default FavoritesPage;

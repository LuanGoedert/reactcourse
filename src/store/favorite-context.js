import { createContext, useState } from "react";

const  FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite:(favoriteMeetup) => {},
    removeFavorite:(meetupId) => {},
    itemIsfavorite:(meetupId) => {}

});

export function FavoritesContextProvider(props){
   const [userfavorites, setUserFavorites] =  useState([]);

   function addFavoriteHandler(favoriteMeetup){
    setUserFavorites((previousUserFavorites) => {
        return previousUserFavorites.concat(favoriteMeetup)
    });
   }

   function removeFavoriteHandler(meetupId){
    setUserFavorites(previousUserFavorites => {
       return previousUserFavorites.filter(meetup => meetup.meetupId !== meetupId)
    })
   }

   function itemIsFavoriteHandler(meetupId){
    return userfavorites.some(meetup => meetup.meetupId === meetupId);
   }

    const context = {
        favorites: userfavorites,
        totalFavorites: userfavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };    

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}


export default FavoritesContext;

import React, { useState } from "react";
import { Alert } from "react-native";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import FavouritesScreen from "../../screens/FavouritesScreen";
import MovieDetail from "../MovieDetail";
import CategoriesScreen from "../../screens/CategoriesScreen";
import Category from "../Category";


import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
    const [favourites, setFavourites] = useState([]);

    const addToFavourites = (movie) => {
        const isAlreadyInFavourites = favourites.some(favorite => favorite.movieId === movie.movieId);

        if (!isAlreadyInFavourites) {
            setFavourites([...favourites, movie]);
            Alert.alert("Favourites", "Фильм успешно добавлен в избранное");
        } else {
            Alert.alert("Favourites", "Фильм уже был добавлен в избранное");
        }
    }

    const removeFromFavourites = (movieId) => {
        const updatedFavourites = favourites.filter(favorite => favorite.movieId !== movieId);
        setFavourites(updatedFavourites);
        Alert.alert("Favourites", "Фильм успешно удалён из избранного");
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home">
                    {props => (
                        <Stack.Navigator>
                            <Stack.Screen name="Movies">
                                {innerProps => <HomeScreen {...innerProps} onAddToFavorites={addToFavourites} />}
                            </Stack.Screen>
                            <Stack.Screen name="Movie" component={MovieDetail} options={({ route }) => ({ title: route.params.movie.title })} />
                        </Stack.Navigator>
                    )}
                </Drawer.Screen>
                <Drawer.Screen name="Categories" >
                    {props => (
                        <Stack.Navigator>
                            <Stack.Screen name="Category List">
                                {innerProps => <CategoriesScreen {...innerProps} />}
                            </Stack.Screen>
                            <Stack.Screen name="Category">
                                {props => <Category {...props} onAddToFavorites={addToFavourites} />}
                            </Stack.Screen>
                            <Stack.Screen name="Movie" component={MovieDetail} options={({ route }) => ({ title: route.params.movie.title })} />
                        </Stack.Navigator>
                    )}

                </Drawer.Screen>
                <Drawer.Screen name="Favourites">
                    {props => (
                        <Stack.Navigator>
                            <Stack.Screen name="Movies">
                                {innerProps => <FavouritesScreen {...innerProps} favourites={favourites} removeFromFavourites={removeFromFavourites} />}
                            </Stack.Screen>
                            <Stack.Screen name="Movie" component={MovieDetail} options={({ route }) => ({ title: route.params.movie.title })} />
                        </Stack.Navigator>
                    )}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
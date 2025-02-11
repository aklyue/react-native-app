import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FavouritesScreen = ({ favourites, removeFromFavourites }) => {
    const handleRemoveFromFavourites = (favorite) => {
        removeFromFavourites(favorite.movieId);
    };

    const navigation = useNavigation();

    const handleMoviePress = (movie) => {
        navigation.navigate('Movie', { movie });
    };

    return (
        <ScrollView>
            {favourites && favourites.length > 0 ? (
                favourites.map((favorite) => (
                    <TouchableOpacity
                        key={favorite.id || Math.random()}
                        onLongPress={() => handleRemoveFromFavourites(favorite)}
                        onPress={() => handleMoviePress(favorite)}
                    >
                        <View style={styles.movieBox}>
                            <Image source={{ uri: favorite.image }} style={styles.movieImage} />
                            <Text style={styles.movieTitle}>{favorite.title}</Text>
                            <Text style={styles.movieDescription}>{favorite.description}</Text>
                            <Text style={styles.movieRating}>{favorite.rating}★</Text>
                        </View>
                    </TouchableOpacity>
                ))
            ) : (
                <Text style={styles.empty}>Здесь пусто</Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    movieBox: {
        padding: 20
    },
    movieImage: {
        width: '100%',
        resizeMode: 'cover',
        height: 400,
        borderRadius: 10
    },
    movieTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10
    },
    movieDescription: {
        marginVertical: 10,
        color: "#a1a1a1"
    },
    movieRating: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#e0b284'
    },
    empty: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 20,
        color: '#bababa'
    }
});

export default FavouritesScreen;





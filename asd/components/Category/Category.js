import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from "@react-navigation/native"
import { useNavigation } from '@react-navigation/native';

const Category = ({ onAddToFavorites }) => {

    const route = useRoute();
    const category = route.params?.category;

    const navigation = useNavigation();

    const handleMoviePress = (movie) => {
        navigation.navigate('Movie', { movie });
    };

    useEffect(() => {
        navigation.setOptions({ title: route.params.category.name });
    }, []);

    const addToFavorites = (movie) => {
        onAddToFavorites(movie);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.view}>
                {category.movies.map((movie, index) => (
                    <TouchableOpacity
                        key={index}
                        onLongPress={() => addToFavorites(movie)}
                        onPress={() => handleMoviePress(movie)}
                    >
                        <View style={styles.movieBox}>
                            <Image source={{ uri: movie.image }} style={styles.movieImage} />
                            <Text style={styles.movieTitle}>{movie.title}</Text>
                            <Text style={styles.movieDescription}>{movie.description}</Text>
                            <Text style={styles.movieRating}>{movie.rating}★</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

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
    }
})

export default Category;
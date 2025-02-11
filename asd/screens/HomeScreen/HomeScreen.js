import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { categoriesData } from '../../data';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ onAddToFavorites }) => {
    const [categories, setCategories] = useState([]);

    const navigation = useNavigation();

    const handleMoviePress = (movie) => {
        navigation.navigate('Movie', { movie });
    };

    useEffect(() => {
        setCategories(categoriesData);
    }, []);

    const addToFavorites = (movie) => {
        onAddToFavorites(movie);
    };

    return (
        <ScrollView>
            {categories.map((category, index) => (
                <View key={index} style={styles.categoryContainer}>
                    {category.movies.map((movie, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.movieContainer}
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
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    movieBox: {
        padding: 20
    },
    movieImage: {
        width: '100%',
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
});

export default HomeScreen;
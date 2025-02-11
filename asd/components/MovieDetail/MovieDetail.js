import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from "@react-navigation/native"

const MovieDetail = () => {
    const route = useRoute();
    const movie = route.params?.movie;

    if (!movie) {
        return (
            <View style={styles.container}>
                <Text style={styles.noMovie}>Выберите фильм из избранных</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.view}>
                <Image
                    source={{ uri: movie.image }}
                    style={styles.image}
                />
                <View style={styles.box}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.description}>{movie.description}</Text>
                    <Text style={styles.rating}>{movie.rating}★</Text>
                </View>
                <View style={styles.commentBox}>
                    <Text style={styles.comments}>Отзывы:</Text>
                    {movie.comments.map((comment, index) => (
                        <View key={index} style={styles.comment}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{comment.user}</Text>
                            <Text>{comment.text}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 600,
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        marginBottom: 10,
        color: "#a1a1a1"
    },
    rating: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#e0b284'
    },
    view: {
        width: '100%'
    },
    box: {
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    comments: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 20
    },
    comment: {
        marginBottom: 20
    },
    commentBox: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 40,
        borderTopColor: "#dbdbdb",
        borderTopWidth: 1
    }
});

export default MovieDetail;
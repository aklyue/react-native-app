import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { categoriesData } from '../../data';
import { useNavigation } from '@react-navigation/native';

const CategoriesScreen = () => {

    const navigation = useNavigation();

    const handleCategoryPress = (category) => {
        navigation.navigate('Category', { category })
    }
    return (
        <ScrollView>
            {categoriesData.map((category, index) => (
                <TouchableOpacity onPress={() => handleCategoryPress(category)} key={index}>
                    <View style={styles.categoryBox}>
                        <Image
                            source={{ uri: category.image }}
                            style={styles.image}
                        />
                        <Text style={styles.text}>{category.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryBox: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: 200,
        resizeMode: 'cover',
        marginTop: 20,
        borderRadius: 10
    },
    text: {
        position: 'absolute',
        fontSize: 20,
        bottom: 20,
        fontWeight: 'bold',
        color: 'white'
    },
});


export default CategoriesScreen;
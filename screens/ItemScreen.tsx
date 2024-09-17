import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { fetchItems } from '../api/itemsApi'; // Ensure the path is correct

interface Item {
    uuid: string;
    name: string;
    rarity: string;
}

const ItemScreen = () => {
    const [items, setItems] = useState<Item[]>([]); // Initialize with an empty array of Item
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchItems().then(data => {
            setItems(data.items); // Assuming the data returned includes an 'items' array
            setLoading(false);
        }).catch(error => {
            console.error("Failed to fetch items:", error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <FlatList
            data={items}
            keyExtractor={item => item.uuid}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDetails}>{item.rarity}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#f9f9f9'
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemDetails: {
        fontSize: 16
    }
});

export default ItemScreen;
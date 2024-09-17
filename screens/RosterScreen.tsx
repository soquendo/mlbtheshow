import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { fetchRosters } from '../api/rosterApi';

interface RosterUpdate {
    id: number;
    team: string;
    updateDetails: string;
}

const RosterScreen = () => {
    const [rosters, setRosters] = useState<RosterUpdate[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchRosters().then(data => {
            setRosters(data.rosters); // Adjust according to actual data key
            setLoading(false);
        }).catch(err => {
            console.error("Failed to fetch roster updates:", err);
            setError('Failed to load roster updates. Please try again.');
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={rosters}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>{item.team}</Text>
                    <Text style={styles.details}>{item.updateDetails}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemContainer: {
        padding: 10,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#f9f9f9'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    details: {
        fontSize: 16
    },
    errorText: {
        color: 'red',
        fontSize: 16
    }
});

export default RosterScreen;
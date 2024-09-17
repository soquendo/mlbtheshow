import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { fetchPerformance } from '../api/performanceApi'; // Adjust the import path as needed

// TypeScript interface for performance data
interface PerformanceData {
    id: number;
    playerName: string;
    gamesPlayed: number;
    points: number;
}

const PerformanceScreen = () => {
    const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchPerformance().then(data => {
            setPerformanceData(data.performance); // Adjust according to the actual data key received from API
            setLoading(false);
        }).catch(err => {
            console.error("Failed to fetch performance data:", err);
            setError('Failed to load performance data. Please try again.');
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
            data={performanceData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Text style={styles.title}>{item.playerName}</Text>
                    <Text style={styles.details}>Games Played: {item.gamesPlayed}</Text>
                    <Text style={styles.details}>Points: {item.points}</Text>
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

export default PerformanceScreen;
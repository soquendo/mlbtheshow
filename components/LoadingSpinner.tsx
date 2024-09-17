import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface LoadingSpinnerProps {
    size?: 'small' | 'large'; // Optional size prop to control the size of the spinner
    color?: string; // Optional color prop to customize the color of the spinner
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'large', color = '#0000ff' }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoadingSpinner;
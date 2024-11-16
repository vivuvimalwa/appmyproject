import { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const detail = (type) => {
    if (!type) {
        return { borderColor: '#fff', emoji: "" };
    }
    switch (type.toLowerCase()) {
        case 'fire':
            return { borderColor: '#FF5733', emoji: "🔥" };
        case 'water':
            return { borderColor: '#6493EA', emoji: "💧" };
        case 'grass':
                return { borderColor: '#66CC66', emoji: "🌿🌱෴🌿🌱🍃" };
        case 'electric':
                    return { borderColor: '#FFD700', emoji: "⚡⚡" };        
        default:
            return { borderColor: '#fff', emoji: "" };
    }
}

export default function PokemonCard({ data }) {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => {
                const { borderColor, emoji } = detail(item.type);

                return (
                    <View style={styles.card}>
                        <View style={{ width: '100%', flexDirection: 'row', paddingBottom: 16 }}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.hp}>
                                <Image source={require("../assets/fonts/rating-1.png")} />
                                {item.hp}
                            </Text>
                        </View>
                        <Image resizeMode='contain' style={styles.image} source={item.image} />
                        <View style={styles.bcontainer}>
                            <View style={[styles.barge, { borderColor: borderColor }]}>
                                <Text style={styles.emoji}>{emoji}</Text>
                                <Text style={styles.emoji}>{item.type}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 10 }}>
                                Moves: {item.moves.join(", ")}
                            </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Weakness: {item.weaknesses.join(", ")}
                            </Text>
                        </View>
                    </View>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
    },
    name: {
        fontSize: 28,
        fontWeight: '900',
    },
    hp: {
        right: 0,
        position: 'absolute',
        fontSize: 25,
        fontWeight: '400',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    bcontainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    barge: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 4,
        borderRadius: 16,
        paddingHorizontal: 20,
    },
    emoji: {
        fontSize: 25,
        padding: 4,
        fontWeight: '600',
    },
});

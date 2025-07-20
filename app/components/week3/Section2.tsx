import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View } from 'react-native';

export default function Section2() {
    return (
        <View style={{ flex: 1, marginTop: -25, alignItems: "center" }}>
            {/* Card Container */}
            <View style={{
                backgroundColor: "#ffffff",
                borderRadius: 10,
                padding: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
                width: "100%",
                maxWidth: 350
            }}>
                
                <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 10 }}>
                    Hilton San Francisco
                </Text>

                <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                </View>

                <Text style={{ color: '#444444', textAlign: "center" }}>
                    Facilities provided may range from a modest quality mattress in a small room to large suites
                </Text>
            </View>
        </View>
    );
}

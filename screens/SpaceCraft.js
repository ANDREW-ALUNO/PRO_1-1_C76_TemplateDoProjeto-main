import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SpaceCraftScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text style = {{color: "#696969", fontSize: 16}}>(item.agency.name)</Text>
            </View>
        )
    }
}
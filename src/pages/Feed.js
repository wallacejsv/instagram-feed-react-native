import React, { Component } from 'react';
import CardFeed from '../components/Cards/CardFeed';
import { Image, TouchableOpacity } from 'react-native';
import camera from '../assets/camera.png';

export default class Feed extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('New')} style={{ marginRight: 20 }}>
                <Image source={camera} />
            </TouchableOpacity>
        ),
    });


    render() {
        return (
            <CardFeed />
        );
    }
}
import React from 'react';
import { ScrollView } from 'react-native';
import Card from './components/week3/Card';
import Hotel from './components/week3/Hotel';
import Menu from './components/week3/Menu';
import Signup from './components/week3/Signup';


export default function Travel() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <>
                <Menu />
                <Card />
                <Hotel />
                <Signup />
            </>
        </ScrollView>
    );
}

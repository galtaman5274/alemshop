import React from 'react'
import {  StyleSheet,  View,  ScrollView,FlatList, Button, Text } from 'react-native';

export const Main= ({setScreen,screen})=>{
    return (
        <View>
        <Button title='Test' onPress={()=>setScreen(screen.test)}/>
            <Text>It is MainScreen</Text>
            <Button title='Dinder' onPress={()=>setScreen(screen.dinder)}/>
          </View>
    )
}
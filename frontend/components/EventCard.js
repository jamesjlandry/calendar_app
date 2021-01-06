import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';


export default function EventCard(props) {
    console.log(props)
    return (
      <Pressable onPress={() => console.log(props.description)}>
        <Text>{props.name}</Text>
      </Pressable>)
  }
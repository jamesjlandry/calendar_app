import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';
import EventCard from './EventCard.js'

const Calendar = ({ props }) => {

    const sampleEvents = [
        { 'start': '2021-01-07 09:00:00', 'duration': '00:20:00', 'name': 'Walk my dog', 'description': 'take the dog for a long walk around the neighborhood', "complete": false, "type": "errand" },
        { 'start': '2021-01-07 14:00:00', 'duration': '01:00:00', 'name': 'Doctor\'s appointment' },
        { 'start': '2021-01-08 08:00:00', 'duration': '00:30:00', 'name': 'Morning exercise' },
        { 'start': '2021-01-09 14:00:00', 'duration': '02:00:00', 'name': 'Meeting with client' },
        { 'start': '2021-01-10 19:00:00', 'duration': '01:00:00', 'name': 'Dinner with family' },
        { 'start': '2021-01-11 09:30:00', 'duration': '01:00:00', 'name': 'Schedule 1' },
        { 'start': '2021-01-10 11:00:00', 'duration': '02:00:00', 'name': 'Schedule 2' },
        { 'start': '2021-01-09 15:00:00', 'duration': '01:30:00', 'name': 'Schedule 3' },
        { 'start': '2021-01-12 18:00:00', 'duration': '02:00:00', 'name': 'Schedule 4' },
        { 'start': '2021-01-12 22:00:00', 'duration': '01:00:00', 'name': 'Schedule 5' }
      ]
  return (
    <View style={styles.container}>

      <WeeklyCalendar renderEvent={EventCard} events={sampleEvents} style={{ height: 510 }} onDayPress={console.log} />
    </View>
  );
}



export default Calendar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


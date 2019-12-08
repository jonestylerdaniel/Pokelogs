import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Platform } from 'react-native'

export default function App() {
 const [counter, setCounter] = useState<number>(0)

 const me = 'hello'
 return (
  <View style={styles.container}>
   <Button
    onPress={() => {
     setCounter(counter + 1)
    }}
    title="btn!!!!!"
   >
    I am a {Platform.OS} app!
   </Button>
   <Text>
    I am a {Platform.OS} app!{counter}
   </Text>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
})

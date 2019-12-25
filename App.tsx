import React, { useState } from 'react'
import {
 AppRegistry,
 StyleSheet,
 Text,
 TouchableOpacity,
 View,
} from 'react-native'
import { RNCamera } from 'react-native-camera'

const PendingView = () => {
 return (
  <View
   style={{
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
   }}
  >
   <Text>Waiting</Text>
  </View>
 )
}

export const App = () => {
 const [counter, setCounter] = useState<number>(0)

 const me = 'hello'
 const takePicture = async () => {
  if (this.camera) {
   const options = { quality: 0.5, base64: true }
   const data = await this.camera.takePictureAsync(options)
   console.log(data.uri)
  }
 }
 return (
  <View style={styles.container}>
   <RNCamera
    style={styles.preview}
    type={RNCamera.Constants.Type.back}
    flashMode={RNCamera.Constants.FlashMode.on}
    androidCameraPermissionOptions={{
     title: 'Permission to use camera',
     message: 'We need your permission to use your camera',
     buttonPositive: 'Ok',
     buttonNegative: 'Cancel',
    }}
    androidRecordAudioPermissionOptions={{
     title: 'Permission to use audio recording',
     message: 'We need your permission to use your audio',
     buttonPositive: 'Ok',
     buttonNegative: 'Cancel',
    }}
   >
    {({ camera, status, recordAudioPermissionStatus }) => {
     if (status !== 'READY') return <PendingView />
     return (
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
       <TouchableOpacity
        onPress={() => this.takePicture(camera)}
        style={styles.capture}
       >
        <Text style={{ fontSize: 14 }}> SNAP </Text>
       </TouchableOpacity>
      </View>
     )
    }}
   </RNCamera>
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

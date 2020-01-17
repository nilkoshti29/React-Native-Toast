import React, {Component} from 'react';
import { ToastAndroid, Button, View, StyleSheet } from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  _toastWithDurationHandler=()=>{
    //function to make Toast With Duration
    ToastAndroid.show('Hi I am Simple Toast', ToastAndroid.SHORT);
  }
  _toastWithDurationGravityHandler=()=>{
    //function to make Toast With Duration And Gravity
   ToastAndroid.showWithGravity(
      'Hi I am Toast with center gravity',
      ToastAndroid.SHORT, //can be SHORT, LONG
      ToastAndroid.CENTER //can be TOP, BOTTON, CENTER
    );
  }
  _toastWithDurationGravityOffsetHandler=()=>{
    //function to make Toast With Duration, Gravity And Offset
     ToastAndroid.showWithGravityAndOffset(
      'Hi I am Toast with garavity and offset',
      ToastAndroid.LONG, //can be SHORT, LONG
      ToastAndroid.BOTTOM, //can be TOP, BOTTON, CENTER
      25, //xOffset
      50 //yOffset
    );
  }
  render() {
    return (
      <View style={styles.container}>
 
        {/*To generate Toast With Duration*/}
        <Button 
           title='Generate Toast With Duration' 
           onPress={this._toastWithDurationHandler}
        />
      
        {/*To generate Toast With Duration And Gravity*/}
        <Button 
           title='Generate Toast With Duration AND Gravity' 
           onPress={this._toastWithDurationGravityHandler}
        />
      
        {/*To generate Toast With Duration, Gravity And Offset*/}
        <Button 
           title='Generate Toast With Duration, Gravity And Offset' 
           onPress={this._toastWithDurationGravityOffsetHandler}
         />
      
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  
});

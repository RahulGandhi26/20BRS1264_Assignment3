import React from 'react';
import {StyleSheet, Text, View, Button,Image} from 'react-native';

export default class App extends React.Component {
  state = {
    count: 0
  }
  incrementValue = () => {
    this.setState({count: this.state.count + 1})
  }
  decrementValue = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
     
      <View style={styles.container}>
       <Image style={styles.virat} source={require('./Virat.jpeg')} />
        <Text style={styles.welcome}>International Centuries</Text>
        <Text style={styles.count}>{this.state.count}</Text>
        <Button 
        style={styles.increasebutton}
        title="Increase"
        onPress={this.incrementValue}
        />
        <View style={{padding: 30}} />
        <Button 
        style={styles.decreasebutton}
        title="Decrease"
        onPress={this.decrementValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor:'#4FBDBA',
    alignItems:'center',
    justifyContent:'center',
  },
  welcome:{
    fontSize:40,
    padding:30,
    fontWeight: 'bold',
  },

  count : {
    fontSize: 40,
    marginBottom:30
  },

  virat:{
    height:400,
    width:350
  }
});

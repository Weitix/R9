import React, { Component } from 'react';
import { View,Text } from 'react-native';


const url = "https://loginrs.herokuapp.com/counter/read"


export default class Home extends Component {
  state = {
    title: "star gate"
  }

  componentDidMount = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return(
      <View>
         <Text></Text>
      </View>
    )
  }
}
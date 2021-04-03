import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      Result: 0
    }

    this.sum = this.sum.bind(this);
    this.diff = this.diff.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }
  sum() {
    const number1 = parseInt(this.state.input1)
    const number2 = parseInt(this.state.input2)
    const result = number1 + number2;

    this.setState({
      Result: result
    })
  }
  diff() {
    const number1 = parseInt(this.state.input1)
    const number2 = parseInt(this.state.input2)
    const result = number1 - number2;

    this.setState({
      Result: result
    })
  }
  multiply() {
    const number1 = parseInt(this.state.input1)
    const number2 = parseInt(this.state.input2)
    const result = number1 * number2;

    this.setState({
      Result: result
    })
  }
  divide() {
    const number1 = parseInt(this.state.input1)
    const number2 = parseInt(this.state.input2)
    const result = number1 / number2;

    this.setState({
      Result: result
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CACULATOR</Text>
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.imgWrapper}>
            <Image
              style={styles.img}
              source={require('./images/caculator.png')}
            />
          </View>
          <TextInput style={styles.input}
            placeholder='First number: '
            onChangeText={(text) => {
              this.setState({
                input1: text
              });
            }}
            value={this.state.input1}
          />
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={this.sum}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={this.diff}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={this.multiply}
            >
              <Text style={styles.buttonText}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={this.divide}
            >
              <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
          </View>

          <TextInput style={styles.input}
            placeholder='Second number: '
            onChangeText={(text) => {
              this.setState({
                input2: text
              });
            }}
            value={this.state.input2}
          />
          <Text style={styles.sampleText}>Result:</Text>
          <Text style={styles.sampleResult}>{this.state.Result}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sampleResult:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
    },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentWrapper: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  imgWrapper: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 100,
    height: 100,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:25,
    margin: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: 40,
    height: 40,
    margin: 15,
    backgroundColor: 'red',
    borderWidth: 2,
    borderRadius: 50
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white'
  },
  sampleText: {
    height: 30,
    fontSize: 14
  },
  
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  },
  sampleText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  }
})
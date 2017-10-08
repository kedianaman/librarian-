import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image, 
  Linking
} from 'react-native';

export default class BookScreen extends Component {
  /*
    Set the StackNavigator options so our screen's title says Book
  */
  static navigationOptions = {
    title: 'Book',
  };

  render() {
  const { params } = this.props.navigation.state;

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{params.book.title}</Text>
        <Text style={styles.information}>{params.book.publishedDate.substring(0,4)}</Text>

        <Image 
          style={styles.thumbnail}
          resizeMode='contain'
          source={{uri: params.book.imageLinks.thumbnail}}
        />
        <Text style={styles.information}>Author: {params.book.authors[0]}</Text>
        <Text style={styles.information}>Publisher: {params.book.publisher}</Text>
        <Text style={styles.linkText}
            onPress={() => Linking.openURL(params.book.previewLink)}>
            Link
        </Text>    
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.description}>{params.book.description}</Text>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center'
  },
  scrollContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20, 
  },
  thumbnail: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginBottom: 10, 
    shadowColor: 'rgba(0, 0, 0, 1.0)', 
    shadowOffset: {width: 0, height: 1}, 
    shadowRadius: 4,
    shadowOpacity: 0.5
  },
  description: {
    fontSize: 16,
    lineHeight: 20,
    padding: 15, 
    fontWeight: '300'
  }, 
  information: {
    fontSize: 18, 
    marginTop: 10
  }, 
  linkText: {
    fontSize: 18, 
    marginTop: 10, 
    color: 'blue'
  }

});
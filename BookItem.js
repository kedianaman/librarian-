import React, { Component } from 'react';
import { 
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class BookItem extends Component {
  render() {
    const book = this.props.book;
    let description;
    if (book.description !== undefined) {
      if (book.description.length >= 120) {
        description = book.description.slice(0,120) + '...';
      } else {
        description = book.description;
      }
    }
      return (
      <TouchableWithoutFeedback 
        onPress={() => {
          this.props.navigation.navigate('Book', { book: book })
        }}
      >
        <View style={styles.listItem}>
          <Image 
          style={styles.bookImage}
          resizeMode='contain'
          source={{uri: book.imageLinks.thumbnail}}
        />
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text style={styles.bookAuthor}>{book.authors[0]}</Text> 

          {(description) ? (<Text style={styles.bookDescription}>{description}</Text>) : null}
        </View>
      </TouchableWithoutFeedback>
    ); 
     
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 30,
    borderBottomColor: '#7f8c8d',
    borderBottomWidth: 1
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3
  },
  bookDescription: {
    fontSize: 16, 
    fontWeight: '300'
  },
  bookAuthor: {
    fontSize: 18, 
    marginBottom: 10
  },
  bookImage: {
    width: 100, 
    height: 100, 
    marginTop: 10, 
    marginBottom: 10, 
    shadowColor: 'rgba(0, 0, 0, 1.0)', 
    shadowOffset: {width: 0, height: 1}, 
    shadowRadius: 4,
    shadowOpacity: 0.5, 
    alignSelf: 'flex-start'

  }
});
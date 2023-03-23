import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import axios from 'axios';
import moment from 'moment';

const HomeScreen: NavigationFunctionComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url =
        'https://newsapi.org/v2/everything?q=tesla&from=2023-02-20&sortBy=publishedAt&apiKey=5d38b3bcbced4749ab5a8514c67965b9';
      const response = await axios.get(url);
      setData(response.data.articles);
    } catch (err) {}
  };

  // const renderItem = ({item}: any) => {
  //   return (
  //     <View style={styles.card}>
  //       <Image
  //         source={{
  //           uri: item.urlToImage,
  //         }}
  //         style={styles.image}
  //       />
  //       <View style={{height: 10}} />
  //       <Text>{item.title}</Text>
  //       <View style={styles.row}>
  //         <Text>{item.source.name}</Text>
  //         <Text>{moment(item.publishedAt).fromNow()}</Text>
  //       </View>
  //       <Text>{item.content}</Text>
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Image
                source={{
                  uri: item.urlToImage,
                }}
                style={styles.image}
              />
              <View style={{height: 10}} />
              <Text>{item.title}</Text>
              <View style={styles.row}>
                <Text>{item.source.name}</Text>
                <Text>{moment(item.publishedAt).fromNow()}</Text>
              </View>
              <Text>{item.content}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.title + Math.random() * 10000000}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 10,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: 200,
    width: '100%',
  },
  row: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

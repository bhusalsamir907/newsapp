import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import axios from 'axios';
import moment, {utc} from 'moment';
import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';

const NewsScreen: NavigationFunctionComponent = ({componentId}) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url =
        'https://newsapi.org/v2/everything?q=tesla&from=2023-02-22&sortBy=publishedAt&apiKey=5d38b3bcbced4749ab5a8514c67965b9';
      const reponse = await axios.get(url);
      setNews(reponse.data.articles);
      setLoading(false);
    } catch (error) {}
  };

  const navigateToDetail = item => {
    Navigation.push(componentId, {
      component: {
        name: 'newsDetailsPage',
        passProps: {
          item,
        },
      },
    });
  };

  const renderItem = ({item}: any) => {
    return (
      <Pressable onPress={() => navigateToDetail(item)}>
        <View style={styles.card}>
          <FastImage
            source={{
              uri: item.urlToImage,
            }}
            style={styles.image}
          />
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.row}>
            <Text>{item.source.name}</Text>
            <Text>{moment(item.publishedAt).fromNow()}</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size={'large'} animating color={'black'} />
        </View>
      ) : (
        <FlashList
          estimatedItemSize={600}
          data={news}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};
export default NewsScreen;

NewsScreen.options = {
  topBar: {
    title: {
      text: 'News Screen',
    },
    largeTitle: {
      visible: true,
    },
  },
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 10,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'lightgrey',
  },
  row: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    paddingTop: 5,
  },
  title: {
    paddingTop: 10,
    fontSize: 20,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

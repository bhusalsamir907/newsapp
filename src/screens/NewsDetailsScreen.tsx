import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {NavigationFunctionComponent} from 'react-native-navigation';

const NewsDetailsScreen: NavigationFunctionComponent = ({item}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{
          uri: item.url,
        }}
        style={styles.webView}
        startInLoadingState={true}
        renderLoading={() => {
          return (
            <View style={styles.center}>
              <ActivityIndicator size={'large'} animating color={'red'} />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default NewsDetailsScreen;

NewsDetailsScreen.options = {
  topBar: {
    title: {
      text: 'News Details',
    },
  },
};

const styles = StyleSheet.create({
  webView: {},
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

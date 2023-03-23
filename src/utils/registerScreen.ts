import {Navigation} from 'react-native-navigation';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import BottomTabBar from '../components/BottomTabBar';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';

export function registerScreen() {
  Navigation.registerComponent('home', () => HomeScreen);
  Navigation.registerComponent('news', () => NewsScreen);
  Navigation.registerComponent('tabBar', () => BottomTabBar);
  Navigation.registerComponent('newsDetailsPage', () => NewsDetailsScreen);
}

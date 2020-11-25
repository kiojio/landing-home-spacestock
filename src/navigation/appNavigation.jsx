import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from 'screens/splashScreen';
import HomeScreen from 'screens/homeScreen';
import MenuScreen from 'screens/menuScreen';
import ContactsScreen from 'screens/contactsScreen';
import ProfileScreen from 'screens/profileScreen';
import SignInScreen from 'screens/signInScreen';
import SignUpScreen from 'screens/signUpScreen';

import TabIcon from 'components/tabIcon';

import { USER_AUTHENTICATED } from 'resources/user/user.constants';
import * as userSelectors from 'resources/user/user.selectors';

import { getItem } from 'helpers/storage';
import config from 'resources/config';

import colors from 'themes/colors';
import images from 'themes/images';

const prefix = `${config.applicationId}://`;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const tabBarOptions = {
  keyboardHidesTabBar: true,
  labelStyle: {
    fontSize: 13,
  },
  activeTintColor: colors.darkPurple,
  style: {
    paddingVertical: 5,
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
};

const tabs = [
  {
    title: 'Home',
    component: HomeScreen,
    tabIcon: images.home,
    activeTabIcon: images.homeActive,
  },
  {
    title: 'Contacts',
    component: ContactsScreen,
    tabIcon: images.contacts,
    activeTabIcon: images.contactsActive,
  },
  {
    title: 'Profile',
    component: ProfileScreen,
    tabIcon: images.profile,
    activeTabIcon: images.profileActive,
  },
];

const AppNavigation = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const userAuthenticated = useSelector(userSelectors.getUserAuthenticated);

  const getToken = useCallback(async () => {
    const token = await getItem('token');
    config.token = token;
    if (token) {
      dispatch({ type: USER_AUTHENTICATED });
    }
  }, [dispatch]);

  const loading = useCallback(async () => {
    setTimeout(()=>{
      setIsLoading(false);
    }, 1500)
  })

  // useEffect(() => {
  //   getToken();
  // }, [getToken]);

  useEffect(() => {
    loading();
  });

  if (isLoading) {
    return (
      <SplashScreen />
    );
  }

  const OldStack =  () =>{
    return <NavigationContainer linking={{ prefixes: [prefix] }}>
    {userAuthenticated
      ? (
        <Tab.Navigator initialRouteName="Home" tabBarOptions={tabBarOptions}>
          {tabs.map(tab => (
            <Tab.Screen
              name={tab.title}
              component={tab.component}
              options={{
                tabBarIcon: icon => (
                  <TabIcon source={icon.focused ? tab.activeTabIcon : tab.tabIcon} />
                ),
              }}
            />
          ))}
        </Tab.Navigator>
      )
      : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      )
    }
    </NavigationContainer>
  }

  const HomeStack = ({navigation}) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer linking={{ prefixes: [prefix] }}>
      <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
        <Drawer.Screen name="Beranda" component={HomeStack} />
        <Drawer.Screen name="Apartmen" component={HomeScreen} />
        <Drawer.Screen name="Rumah" component={HomeScreen} />
        <Drawer.Screen name="Kantor" component={HomeScreen} />
        <Drawer.Screen name="Titip Jual/Sewa" component={HomeScreen} />
        <Drawer.Screen name="Join as Agent" component={HomeScreen} />
      </Drawer.Navigator>
      {/* <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default AppNavigation;

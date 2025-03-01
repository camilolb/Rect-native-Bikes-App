import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomePagePresenter} from '../pages/HomePage/HomePagePresenter';
import {ButtonNavBar} from '../mobile-ui';
import {CartPagePresenter, ProfilePagePagePresenter} from '../pages';

export type TabStackList = {
  Home: undefined;
  Profile: undefined;
  Rents: undefined;
};

const TabStack = createBottomTabNavigator<TabStackList>();

function NavbarWrapper(prop: BottomTabBarProps) {
  return <ButtonNavBar {...prop} />;
}
export function NavBarStack() {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
      }}
      initialRouteName={'Home'}
      tabBar={props => <NavbarWrapper {...props} />}>
      <TabStack.Screen component={HomePagePresenter} name={'Home'} />
      <TabStack.Screen component={CartPagePresenter} name={'Rents'} />
      <TabStack.Screen component={ProfilePagePagePresenter} name={'Profile'} />
    </TabStack.Navigator>
  );
}

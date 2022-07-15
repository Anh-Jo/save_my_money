import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screen/Home';
import Profile from './screen/Profile';
import Manage from './screen/Manage';
import CreateSubscriptions from './screen/Create/Create_Subscriptions';

const BottomBar = createBottomTabNavigator();
const ManageNavigator = createStackNavigator();

const ManageRoot = () => (
    <ManageNavigator.Navigator screenOptions={{ presentation: 'modal' }}>
        <ManageNavigator.Screen name={"Manage"} component={Manage} options={{ headerShown: false }} />
        <ManageNavigator.Screen name={"CreateSubscriptions"} component={CreateSubscriptions} options={{ headerShown: false }} />
    </ManageNavigator.Navigator>
)

const Main = () => (
    <BottomBar.Navigator initialRouteName='Manage'>
        <BottomBar.Screen
            name={"Home"}
            component={Home}
            options={{ headerShown: false }}
        />
        <BottomBar.Screen
            name={"ManageRoot"}
            component={ManageRoot}
            options={{ headerShown: false }}
        />
        <BottomBar.Screen
            name={"Profile"}
            component={Profile}
            options={{ headerShown: false }}
        />
    </BottomBar.Navigator>
)

export default Router = () => {
    return (
        <Main />
    )
}
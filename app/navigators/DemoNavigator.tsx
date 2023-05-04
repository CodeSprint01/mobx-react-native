import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
// import { translate } from "../i18n"
import { UnauthEngageLandingScreen } from "../screens"
// import {  DemoShowroomScreen, DemoCommunityScreen  } from "../screens"
import { UnauthEngageMenuScreen, UnauthEngageDashboardScreen} from "./../screens"
// import { DemoPodcastListScreen } from "../screens/DemoPodcastListScreen"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

export type DemoTabParamList = {
  DemoCommunity: undefined
  DemoShowroom: { queryIndex?: string; itemIndex?: string }
  DemoDebug: undefined
  DemoPodcastList: undefined
  UnauthEngageLanding: undefined
  UnauthEngageMenu: undefined
  UnauthEngageDashboard: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type DemoTabScreenProps<T extends keyof DemoTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<DemoTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<DemoTabParamList>()

export function DemoNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70, }],
        tabBarActiveTintColor: colors.palette.blue100,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      {/* <Tab.Screen
        name="DemoPodcastList"
        component={DemoPodcastListScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Icon icon="house" color={focused && colors.palette.blue100} size={30} />
          ),
        }}
      /> */}

      {<Tab.Screen
        name="UnauthEngageLanding"
        component={UnauthEngageLandingScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Icon icon="house" color={focused && colors.palette.blue100} size={30} />
          ),
        }}
      />}

      <Tab.Screen
        name="UnauthEngageDashboard"
        component={UnauthEngageDashboardScreen}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <Icon icon="chartLineUp" color={focused && colors.palette.blue100} size={30} />
          ),
        }}
      />
      
      <Tab.Screen
        name="UnauthEngageMenu"
        component={UnauthEngageMenuScreen}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ focused }) => (
            <Icon icon="bars" color={focused && colors.palette.blue100} size={30} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="DemoShowroom"
        component={DemoShowroomScreen}
        options={{
          tabBarLabel: "Showroom",
          tabBarIcon: ({ focused }) => (
            <Icon icon="components" color={focused && colors.palette.blue100} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="DemoCommunity"
        component={DemoCommunityScreen}
        options={{
          tabBarLabel: "Community",
          tabBarIcon: ({ focused }) => (
            <Icon icon="components" color={focused && colors.palette.blue100} size={30} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.medium,
}

const $tabBarLabel: TextStyle = {
  fontSize: 14,
  fontFamily: typography.primary.medium,
  lineHeight: 20,
  flex: 1,
}

// @demo remove-file

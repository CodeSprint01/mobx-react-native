/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams, // @demo remove-current-line
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { useStores } from "../models" // @demo remove-current-line
import {
  /* UnauthEngageLandingScreen,
  UnauthEngageMenuScreen,
  UnauthEngageDashboardScreen, */
  LandingScreen,
  LoginScreen,
  WelcomeScreen,
  UnauthAddAccountLandingScreen,
  UnauthAddAccountBrandBasicsScreen,
  UnauthAddAccountBrandSocialsScreen,
  UnauthAddAccountBrandFinancialsScreen,
  UnauthAddAccountBrandGoalsScreen,
  UnauthAddAccountBrandReviewScreen,
} from "../screens"
import { DemoNavigator, DemoTabParamList } from "./DemoNavigator" // @demo remove-current-line
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  UnauthEngageLanding: undefined
  UnauthEngageDashboard: undefined
  UnauthEngageMenu: undefined
  UnauthAddAccountLanding: undefined
  UnauthAddAccountBrandBasics: undefined
  UnauthAddAccountBrandSocials: undefined
  UnauthAddAccountBrandFinancials: undefined
  UnauthAddAccountBrandGoals: undefined
  UnauthAddAccountBrandReview: undefined
  Landing: undefined
  Login: undefined // @demo remove-current-line
  Welcome: undefined
  Demo: NavigatorScreenParams<DemoTabParamList> // @demo remove-current-line
  // 🔥 Your screens go here
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  // @demo remove-block-start
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  // @demo remove-block-end
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isAuthenticated ? "Welcome" : "UnauthEngageLanding"} // @demo remove-current-line
    >
      {/* @demo remove-block-start */}
      {isAuthenticated ? (
        <>
          {/* @demo remove-block-end */}
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          {/* @demo remove-block-start */}
          {/* <Stack.Screen name="Demo" component={DemoNavigator} /> */}
        </>
      ) : (
        <>
          {/* <Stack.Screen name="Landing" component={LandingScreen} /> */}
          {/* <Stack.Screen name="UnauthEngageLanding" component={UnauthEngageLandingScreen} /> */}
          <Stack.Screen name="Demo" component={DemoNavigator} />
          
        </>
      )}
      {/* @demo remove-block-end */}
      {/** 🔥 Your unauth screens go here */}
      {/* <Stack.Screen name="UnauthEngageMenu" component={UnauthEngageMenuScreen} /> */}
      {/* <Stack.Screen name="Demo" component={DemoNavigator} /> */}
      {/* <Stack.Screen name="UnauthEngageLanding" component={UnauthEngageLandingScreen} /> */}
      {/* <Stack.Screen name="UnauthEngageMenu" component={UnauthEngageMenuScreen} /> */}
      {/* <Stack.Screen name="UnauthEngageDashboard" component={UnauthEngageDashboardScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="Demo" component={DemoNavigator} /> */}
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="UnauthAddAccountLanding" component={UnauthAddAccountLandingScreen} />
      <Stack.Screen name="UnauthAddAccountBrandBasics" component={UnauthAddAccountBrandBasicsScreen} />
      <Stack.Screen name="UnauthAddAccountBrandSocials" component={UnauthAddAccountBrandSocialsScreen} />
      <Stack.Screen name="UnauthAddAccountBrandFinancials" component={UnauthAddAccountBrandFinancialsScreen} />
      <Stack.Screen name="UnauthAddAccountBrandGoals" component={UnauthAddAccountBrandGoalsScreen} />
      <Stack.Screen name="UnauthAddAccountBrandReview" component={UnauthAddAccountBrandReviewScreen} />
    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})

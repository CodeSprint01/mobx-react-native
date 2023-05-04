import { observer } from "mobx-react-lite"
import React, { FC } from "react"
/* import * as Application from "expo-application" */
import { ImageStyle, Linking, TextStyle, View, ViewStyle } from "react-native"
import { ListItem, Icon, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
// import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
// import { isRTL } from "../i18n"
// import { useStores } from "../models"
/* import { DemoDivider } from "./DemoShowroomScreen/DemoDivider" */

function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url))
}


export const UnauthEngageMenuScreen: FC<DemoTabScreenProps<"UnauthEngageMenu">> = observer(
  function UnauthEngageMenuScreen(
  _props,
) {
  const { navigation } = _props

  return (
    <Screen
      preset="scroll"
      /* safeAreaEdges={["top"]} */
      contentContainerStyle={$container}>
      {/* <Text
        style={$reportBugsLink}
        tx="demoDebugScreen.reportBugs"
        onPress={() => openLinkInBrowser("https://github.com/infinitered/ignite/issues")}
      /> */}
      <View
          style={$menuHeader}
        >
        <Text style={$title} preset="heading">
          Menu
        </Text>
      </View>
      <View
        style={$menuContainer}
      >
        
        <View style={$itemsContainer}>
          <View
          >
            <ListItem
              LeftComponent={
                <View style={$item}>
                  <Icon icon="circlePlus" color={colors.palette.blue100} size={30} style={$iconStyle} 
                  />
                  <Text preset="bold" style={$itemText} onPress={() =>  navigation.navigate("UnauthAddAccountLanding")}>Add Account</Text>
                </View>
              }
            />
          </View>
          
        </View>
      </View>
     
      {/* <View style={$buttonContainer}>
        <Button style={$button} tx="demoDebugScreen.reactotron" onPress={demoReactotron} />
        <Text style={$hint} tx={`demoDebugScreen.${Platform.OS}ReactotronHint` as const} />
      </View>
      <View style={$buttonContainer}>
        <Button style={$button} tx="common.logOut" onPress={logout} />
      </View> */}
    </Screen>
  )
})

const $container: ViewStyle = {
  /* paddingTop: 20, */
  paddingBottom: spacing.huge,
  /* paddingHorizontal: spacing.large, */
}

const $menuContainer: ViewStyle = {
  /* paddingHorizontal: spacing.large, */
  /* height: 250, */
  /* paddingTop: 50, */
}

const $menuHeader: ViewStyle = {
  alignItems: "center",
  height: 100,
  backgroundColor: colors.palette.blue100,
  justifyContent: "center",
  paddingTop: 50,
}

const $title: TextStyle = {
  fontSize: 20,
  marginBottom: 10,
  /* marginTop: 17, */
  color: colors.palette.neutral100
}

const $separatorTop: ViewStyle = {
  borderTopWidth: 1,
  borderTopColor: colors.separator,
}

const $separatorTopWide: ViewStyle = {
  borderTopWidth: 10,
  borderTopColor: colors.separator,
}

const $item: ViewStyle = {
  marginBottom: 8,
  marginTop: 10,
  flexDirection: "row",
  paddingHorizontal: spacing.large,
}

const $iconStyle: ImageStyle = {
  marginRight: 10,
}

const $itemText: TextStyle = {
  fontSize: 18,
  marginTop: 4,
}



/* const $reportBugsLink: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.large,
  alignSelf: isRTL ? "flex-start" : "flex-end",
} */



const $itemsContainer: ViewStyle = {
  marginBottom: spacing.extraLarge,
}

/* const $button: ViewStyle = {
  marginBottom: spacing.extraSmall,
}

const $buttonContainer: ViewStyle = {
  marginBottom: spacing.medium,
}

const $hint: TextStyle = {
  color: colors.palette.neutral600,
  fontSize: 12,
  lineHeight: 15,
  paddingBottom: spacing.large,
} */

// @demo remove-file

import { observer } from "mobx-react-lite"
import { useStores } from "../models"
import React, { FC } from "react"
/* import * as Application from "expo-application" */
import { TextStyle, View, ViewStyle, StyleSheet } from "react-native"
import { Button, Screen, Text } from "../components"
// import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
// import { isRTL } from "../i18n"
// import { useStores } from "../models"
/* import { DemoDivider } from "./DemoShowroomScreen/DemoDivider" */

/* function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url))
} */

interface UnauthAddAccountLandingScreenProps extends AppStackScreenProps <"UnauthAddAccountLanding"> {}
// interface UnauthEngageMenuScreenProps extends DemoTabScreenProps <"UnauthEngageMenu"> {}

export const UnauthAddAccountLandingScreen: FC<UnauthAddAccountLandingScreenProps> = observer(
  function UnauthAddAccountLandingScreen(
  _props,
) {
  const { navigation } = _props
  const { brandAccount, brandAccountList } = useStores();


  return (
    <Screen
      preset="scroll"
      /* safeAreaEdges={["top"]} */
      contentContainerStyle={$container}>
      <View
          style={$menuHeader}
        >
        <Text style={$title} onPress={() =>  navigation.goBack()}>  X  </Text>
        <Text style={$title} preset="heading">
          Add Account
        </Text>
        <Text style={$title} preset="heading" onPress={() =>  navigation.goBack()}>
          Close
        </Text>
      </View>
      <View testID="Beautiful" style={$secondarySlide}>
            <View
              style={$brandStyle}
            >
              {/* <Image
                source={require('../../assets/images/value_180x180.png')}
              /> */}
              <Text testID="login-heading" preset="heading">
              Select An Account
              </Text>
              <Text style={styles.text}>Choose the personal brand or business account types to value and monitor.</Text>
            </View>
          </View>
          <View
              style={$buttonsStyle}
            >
              <Button
                testID="landing-button"
                style={$tapButton}
                preset="reversed"
                onPress={() =>  navigation.navigate("UnauthAddAccountBrandBasics")}
              >
                {/* <Icon icon="circlePlus" color={colors.palette.neutral100} size={18} /> */}
                Add A Brand
              </Button>
            </View>
      
     
      
    </Screen>
  )
})

const $container: ViewStyle = {
  /* paddingTop: 20, */
  paddingBottom: spacing.huge,
  /* paddingHorizontal: spacing.large, */
}



const $menuHeader: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  height: 100,
  paddingHorizontal: 10,
  backgroundColor: colors.palette.blue100,
  justifyContent: "space-between",
  paddingTop: 50,
}

const $title: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 20,
}

/* const $separatorTop: ViewStyle = {
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
 */


/* const $reportBugsLink: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.large,
  alignSelf: isRTL ? "flex-start" : "flex-end",
} */



/* const $itemsContainer: ViewStyle = {
  marginBottom: spacing.extraLarge,
} */

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

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    maxWidth: 300,
    textAlign: 'center',
  },
  wrapper: {
    
  }
});


const $secondarySlide: ViewStyle = {
  alignItems: 'center',
  flex: 0.8,
  justifyContent: 'space-between',
  /* marginTop: 120, */
}

const $tapButton: ViewStyle = {
  alignItems: 'center',
  marginTop: spacing.extraSmall,
  flexDirection: 'column',
  width: 240,
}

const $brandStyle: ViewStyle = {
  alignItems: 'center',
  height: 200,
  marginTop: 50,
}
const $buttonsStyle: ViewStyle = {
  height: 180,
  justifyContent: 'space-between',
  alignItems: 'center'
}


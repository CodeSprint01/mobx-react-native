import { observer } from "mobx-react-lite"
import { useStores } from "../models"
import React, { FC } from "react"

import { TextStyle, View, ViewStyle, StyleSheet, TextInput } from "react-native"
import { Button, Screen, Text } from "../components"

import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"

interface UnauthAddBusinessAccountWaitlist_IncompleteScreenProps
  extends AppStackScreenProps<"UnauthAddBusinessAccountWaitlist_IncompleteScreen"> {}

export const UnauthAddBusinessAccountWaitlist_IncompleteScreen: FC<UnauthAddBusinessAccountWaitlist_IncompleteScreenProps> =
  observer(function UnauthAddBusinessAccountWaitlist_IncompleteScreen(_props) {
    const { navigation } = _props
    const { brandAccount, brandAccountList } = useStores()

    return (
      <Screen preset="scroll" contentContainerStyle={$container}>
        <View style={$menuHeader}>
          <Text style={$title} onPress={() => navigation.goBack()}>
            {" "}
            X{" "}
          </Text>
          <Text style={$title} preset="heading">
            Add Account
          </Text>
          <Text style={$title} preset="heading" onPress={() => navigation.goBack()}>
            Close
          </Text>
        </View>
        <View testID="Beautiful" style={$secondarySlide}>
          <View style={$brandStyle}>
            <Text testID="login-heading" preset="heading" style={styles.heading}>
              Support For Business Accounts Is Coming Soon
            </Text>
            <Text style={styles.text}>
              Join the waitlist for valuing and monitoring business accounts
            </Text>
          </View>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} placeholder="Enter your best email" />
        </View>
        <View style={$buttonSubmitStyle}>
          <Button
            testID="landing-button"
            style={$tapButton}
            preset="reversed"
            onPress={() => navigation.navigate("UnauthAddBusinessAccountWaitlist_CompleteScreen")}
          >
            Submit
          </Button>
        </View>
        <View style={$buttonCancelStyle}>
        <Button testID="landing-button" style={$tapCancelButton} preset="default"
         onPress={() => navigation.navigate("UnauthAddAccountLanding")}
        >
            Cancel
          </Button>
        </View>
      </Screen>
    )
  })

const $container: ViewStyle = {
  paddingBottom: spacing.huge,
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

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    maxWidth: 300,
    textAlign: "center",
    marginBottom: 10,
  },
  wrapper: {},
  textInputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,

  },
  textInput: {
    height: 50,
    borderColor: "#2962FF",
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 10,
    width: "80%",
  },
})

const $secondarySlide: ViewStyle = {
  alignItems: "center",
  flex: 0.8,
  justifyContent: "space-between",
}

const $tapButton: ViewStyle = {
  alignItems: "center",
  marginTop: spacing.extraSmall,
  flexDirection: "column",
  width: 240,
}


const $tapCancelButton: ViewStyle = {
  alignItems: "center",
  marginTop: spacing.extraSmall,
  flexDirection: "column",
  width: 240,

};
const $brandStyle: ViewStyle = {
  alignItems: "center",
  height: 200,
  width: "80%",
  marginTop: 50,
}
const $buttonSubmitStyle: ViewStyle = {
  height: 180,
  marginTop: 15,
  justifyContent: "space-between",
  alignItems: "center",
}
const $buttonCancelStyle: ViewStyle = {
  height: 180,
  marginTop: 90,
  justifyContent: "space-between",
  alignItems: "center",
}

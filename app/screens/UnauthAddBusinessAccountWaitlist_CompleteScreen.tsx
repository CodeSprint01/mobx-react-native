import { observer } from "mobx-react-lite"
import { useStores } from "../models"
import React, { FC } from "react"

import { TextStyle, View, ViewStyle, StyleSheet } from "react-native"
import { Button, Screen, Text } from "../components"

import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"

interface UnauthAddBusinessAccountWaitlist_CompleteScreenProps
  extends AppStackScreenProps<"UnauthAddBusinessAccountWaitlist_CompleteScreen"> {}

export const UnauthAddBusinessAccountWaitlist_CompleteScreen: FC<UnauthAddBusinessAccountWaitlist_CompleteScreenProps> =
  observer(function UnauthAddBusinessAccountWaitlist_CompleteScreen(_props) {
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
              Congratulations! You’ve Been Added To The Waitlist
            </Text>
          </View>
        </View>
        <View style={$buttonsStyle}>
          <Button
            testID="landing-button"
            style={$tapButton}
            preset="reversed"
            onPress={() => navigation.navigate("UnauthEngageDashboard")}
          >
            Go To Dashboard
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
    fontSize: 22,
    fontWeight: "bold",
    maxWidth: 300,
    textAlign: "center",
  },
  wrapper: {},
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

const $brandStyle: ViewStyle = {
    alignItems: "center",
    height: 200,
    width: "80%",
    marginTop: 50,
  }
const $buttonsStyle: ViewStyle = {
  height: 180,
  justifyContent: "space-between",
  alignItems: "center",
}

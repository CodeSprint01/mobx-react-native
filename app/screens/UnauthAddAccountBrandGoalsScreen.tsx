import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { TextStyle, View, ViewStyle, StyleSheet } from "react-native"
import { Button, Screen, Text, TextField } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import ProgressBar from 'react-native-progress/Bar';
import Checkbox from 'expo-checkbox';
// import { isRTL } from "../i18n"
// import { useStores } from "../models"
/* import { DemoDivider } from "./DemoShowroomScreen/DemoDivider" */

/* function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url))
} */

interface UnauthAddAccountBrandGoalsScreenProps extends AppStackScreenProps <"UnauthAddAccountBrandGoals"> {}
// interface UnauthEngageMenuScreenProps extends DemoTabScreenProps <"UnauthEngageMenu"> {}

export const UnauthAddAccountBrandGoalsScreen: FC<UnauthAddAccountBrandGoalsScreenProps> = observer(
  function UnauthAddAccountBrandGoalsScreen(
  _props,
) {
  const { navigation } = _props
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Screen
      preset="scroll"
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
            <View>
              <ProgressBar progress={1} width={250} height={10} style={$progressBarDefault}/>
              <Text style={styles.textHeader}>Personal Brand: Goals</Text>
              <Text style={styles.textMainHeader} testID="login-heading" preset="heading">
                Achieve Goals
              </Text>
            </View>
            <View
              style={$checkboxWrapperStyle}
            >
              <View
                style={$textFieldDefault}
              >
                <Text style={styles.text}>What are your brand goals?</Text>
                <View style={styles.checkboxContainer}>
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      style={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>Develop Partnerships</Text>
                  </View>
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      style={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>Attract Sponsors</Text>
                  </View>
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      style={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>Get Investor Funding</Text>
                  </View>
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      style={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>Receive Grants</Text>
                  </View>
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      style={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>Sell your brand</Text>
                  </View>
                </View>
              </View>
              <View
                style={$textFieldDefault}
              >
                <Text style={styles.text}>Do you have goals as a sponsor or investor?</Text>
                <View style={styles.checkboxContainer}>
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      style={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>Not a sponsor or investor</Text>
                  </View>
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      style={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>Sponsor brands and businesses</Text>
                  </View>
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      style={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>Invest in brands and businesses</Text>
                  </View>
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      style={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>Buy brands and businesses</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
              style={$buttonsStyle}
            >
              <Button
                testID="landing-button"
                style={$tapButton}
                preset="reversed"
                onPress={() =>  navigation.navigate("UnauthAddAccountBrandReview")}
              >
                {/* <Icon icon="circlePlus" color={colors.palette.neutral100} size={18} /> */}
                Save and Review
              </Button>
              <Button
                testID="landing-button"
                style={$tapButton}
                preset="default"
                onPress={() =>  navigation.goBack()}
              >
                Back
              </Button>
            </View>
      
     
      
    </Screen>
  )
})

const styles = StyleSheet.create({
  checkbox: {
    height: 25,
    margin: 10,
    width: 25,
  },
  checkboxContainer: {
    alignItems: 'flex-start',
    /* flex: 1, */
    flexDirection: 'column',
    justifyContent: 'flex-start',
    /* width: 250, */
    /* marginHorizontal: 16,
    marginVertical: 32, */
  },
  checkboxRow: {
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: 280,
  },
  checkboxText: {
    minWidth: 230,
  },
  text: {
    fontFamily: "robotoMedium",
    fontSize: 16,
    marginBottom: 8,
    maxWidth: 300,
    textAlign: 'left',
  },
  textHeader: {
    fontSize: 18,
    maxWidth: 300,
    textAlign: 'center',
  },
  textMainHeader: {
    textAlign: 'center',
  },
});

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
  fontSize: 20,
  marginBottom: 10,
  color: colors.palette.neutral100
}

const $secondarySlide: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'flex-start',
  /* minHeight: 520, */
}

const $progressBarDefault: ViewStyle = {
  minWidth: 240,
  margin: 10,
}
const $textFieldDefault: ViewStyle = {
  minWidth: 290,
  marginBottom: 5,
}

const $checkboxWrapperStyle: ViewStyle = {
  alignItems: 'center',
  marginTop: 10,
  minWidth: 300,
}
const $tapButton: ViewStyle = {
  alignItems: 'center',
  marginTop: spacing.extraSmall,
  flexDirection: 'column',
  width: 240,
}


const $buttonsStyle: ViewStyle = {
  justifyContent: 'space-between',
  alignItems: 'center'
}


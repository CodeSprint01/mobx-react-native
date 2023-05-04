/* eslint-disable react-native/no-unused-styles */
import { observer } from "mobx-react-lite"
import { useStores } from "../models"
import React, { FC, useState } from "react"
/* import * as Application from "expo-application" */
import { TextStyle, View, ViewStyle, StyleSheet } from "react-native"
import { Button, Screen, Text, TextField } from "../components"
// import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import ProgressBar from 'react-native-progress/Bar';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

interface UnauthAddAccountBrandFinancialsScreenProps extends AppStackScreenProps <"UnauthAddAccountBrandFinancials"> {}
// interface UnauthEngageMenuScreenProps extends DemoTabScreenProps <"UnauthEngageMenu"> {}

export const UnauthAddAccountBrandFinancialsScreen: FC<UnauthAddAccountBrandFinancialsScreenProps> = observer(
  function UnauthAddAccountBrandFinancialsScreen(
  _props,
) {
  const { navigation } = _props
  /* const { brandAccountStore } = useStores(); */
  const placeholderProductStage = {
    label: 'Select revenue stage...',
    value: "",
    color: '#000000',
  };
  const placeholderRevenueStage = {
    label: 'Select revenue stage...',
    value: "",
    color: '#000000',
  };
  const placeholderRevenueGrossPreviousMonth = {
    label: 'Select monthly revenue...',
    value: "",
    color: '#000000',
  };
  const placeholderRevenueGrossPreviousYear = {
    label: 'Select annual revenue...',
    value: "",
    color: '#000000',
  };
  /* const [brandAccountName, setBrandAccountName] = useState(brandAccountStore.brandAccountName === "" ? "" : brandAccountStore.brandAccountName);
  const [brandAccountWebsiteUrl, setBrandAccountWebsiteUrl] = useState(brandAccountStore.brandAccountWebsiteUrl === "" ? "" : brandAccountStore.brandAccountWebsiteUrl);
  const [brandAccountCategory, setBrandAccountCategory] = useState(brandAccountStore.brandAccountCategory === "" ? "" : brandAccountStore.brandAccountCategory); */

  const handleSaveContinue = () => {
    /* brandAccountStore.setProp("brandAccountName", brandAccountName);
    brandAccountStore.setProp("brandAccountWebsiteUrl", brandAccountWebsiteUrl);
    brandAccountStore.setProp("brandAccountCategory", brandAccountCategory); */
    /* console.log("ID: " + brandAccountStore); */
    navigation.navigate("UnauthAddAccountBrandGoals")
  }

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
            <View
            >
              <ProgressBar progress={0.75} width={250} height={10} style={$progressBarDefault}/>
              <Text style={styles.textHeader}>Personal Brand: Financials</Text>
              <Text style={styles.textMainHeader} testID="login-heading" preset="heading">
                Build Wealth
              </Text>
            </View>
            <View
              style={$brandStyle}
            >
              <View
                style={$textFieldDefault}
              >
                <Text style={styles.text}>Product/Service Stage</Text>
                <RNPickerSelect
                    /* value={brandAccountCategory} */
                    /* onValueChange={setBrandAccountCategory} */
                    onValueChange={(e) => {console.log(e.target.value)}}
                    placeholder={placeholderProductStage}
                    style={customPickerStyles}
                    items={[
                      { label: 'No Product/Service', value: 'no-product' },
                      { label: 'Prototype/Demo', value: 'prototype-demo' },
                      { label: 'Post Launch (No Traction)', value: 'post-launch' },
                      { label: 'Customers/Users', value: 'customers-users' },
                      { label: 'Growing w/Revenue', value: 'growing-earning' },
                    ]}
                    Icon={() => { return <Ionicons name="md-chevron-down" size={24} color={colors.palette.grey200} />;}}
                  />
              </View>
              <View
                style={$textFieldDefault}
              >
                <Text style={styles.text}>Revenue Stage</Text>
                <RNPickerSelect
                    /* value={brandAccountCategory} */
                    /* onValueChange={setBrandAccountCategory} */
                    onValueChange={(e) => {console.log(e.target.value)}}
                    placeholder={placeholderRevenueStage}
                    style={customPickerStyles}
                    items={[
                      { label: 'Pre Revenue', value: 'pre-revenue' },
                      { label: 'Post Revenue', value: 'post-revenue' },
                      
                    ]}
                    Icon={() => { return <Ionicons name="md-chevron-down" size={24} color={colors.palette.grey200} />;}}
                  />
              </View>
              <View
                style={$textFieldDefault}
              >
                <Text style={styles.text}>Gross Revenue Last Month</Text>
                <RNPickerSelect
                    /* value={brandAccountCategory} */
                    /* onValueChange={setBrandAccountCategory} */
                    onValueChange={(e) => {console.log(e.target.value)}}
                    placeholder={placeholderRevenueGrossPreviousMonth}
                    style={customPickerStyles}
                    items={[
                      { label: 'No revenue', value: 'No revenue' },
                      { label: '$0 - $1,000', value: '$0 - $1,000' },
                      { label: '$1,000 - $5,000', value: '$1,000 - $5,000' },
                      { label: '$5,000 - $10,000', value: '$5,000 - $10,000' },
                      { label: '$10,000 - $50,000', value: '$10,000 - $50,000' },
                      { label: '$50,000 - $100,000', value: '$50,000 - $100,000' },
                      { label: '$100,000 - $500,000', value: '$100,000 - $500,000' },
                      { label: '$500,000 - $1M', value: '$500,000 - $1M' },
                      { label: '$1M - $5M', value: '$1M - $5M' },
                      { label: '$5M - $10M', value: '$5M - $10M' },
                      { label: '$10M - $50M', value: '$10M - $50M' },
                      { label: '$50M+', value: '$50M+' },
                    ]}
                    Icon={() => { return <Ionicons name="md-chevron-down" size={24} color={colors.palette.grey200} />;}}
                  />
              </View>
              <View
                style={$textFieldDefault}
              >
                <Text style={styles.text}>Gross Revenue Last Year</Text>
                <RNPickerSelect
                    /* value={brandAccountCategory} */
                    /* onValueChange={setBrandAccountCategory} */
                    onValueChange={(e) => {console.log(e.target.value)}}
                    placeholder={placeholderRevenueGrossPreviousYear}
                    style={customPickerStyles}
                    items={[
                      { label: 'No revenue', value: 'No revenue' },
                      { label: '$0 - $1,000', value: '$0 - $1,000' },
                      { label: '$1,000 - $5,000', value: '$1,000 - $5,000' },
                      { label: '$5,000 - $10,000', value: '$5,000 - $10,000' },
                      { label: '$10,000 - $50,000', value: '$10,000 - $50,000' },
                      { label: '$50,000 - $100,000', value: '$50,000 - $100,000' },
                      { label: '$100,000 - $500,000', value: '$100,000 - $500,000' },
                      { label: '$500,000 - $1M', value: '$500,000 - $1M' },
                      { label: '$1M - $5M', value: '$1M - $5M' },
                      { label: '$5M - $10M', value: '$5M - $10M' },
                      { label: '$10M - $50M', value: '$10M - $50M' },
                      { label: '$50M+', value: '$50M+' },
                    ]}
                    Icon={() => { return <Ionicons name="md-chevron-down" size={24} color={colors.palette.grey200} />;}}
                  />
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
                onPress={handleSaveContinue}
              >
                Save and Continue
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

const customPickerStyles = StyleSheet.create({
  iconContainer: {
    right: 15,
    top: 10,
  },
  inputAndroid: {
    borderColor: colors.palette.blue100,
    borderRadius: 5,
    borderWidth: 1,
    color: colors.palette.neutral900,
    fontSize: 16,
    height: 44,
    paddingHorizontal: 10,
    paddingRight: 30,
    paddingVertical: 8, // to ensure the text is never behind the icon
  },
  inputIOS: {
    borderColor: colors.palette.blue100,
    borderRadius: 5,
    borderWidth: 1,
    color: colors.palette.neutral900,
    fontSize: 16,
    height: 44,
    paddingHorizontal: 12,
    paddingRight: 30,
    paddingVertical: 10, // to ensure the text is never behind the icon
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
  minHeight: 520,
}

const $progressBarDefault: ViewStyle = {
  minWidth: 240,
  margin: 10,
}
const $textFieldDefault: ViewStyle = {
  minWidth: 240,
  marginBottom: 5,
}

const $brandStyle: ViewStyle = {
  alignItems: 'center',
  marginTop: 10,
  minWidth: 240,
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
/* eslint-disable react-native/no-unused-styles */
import { observer } from "mobx-react-lite"
import { useStores } from "../models"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle, StyleSheet, useWindowDimensions } from "react-native"
import { Button, Screen, Text } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { TabView, SceneMap } from "react-native-tab-view"
import { BrandAccountListModel } from "../models/BrandAccountList"
// import { BrandAccountListModel } from "../models/NewBrandAccountList";
import { BrandAccountModel } from "../models/BrandAccount"
interface UnauthAddAccountBrandReviewScreenProps
  extends AppStackScreenProps<"UnauthAddAccountBrandReview"> {}

const FirstRoute = () => <View style={{ /* flex: 1, */ height: 400, backgroundColor: "#ff4081" }} />

const SecondRoute = () => (
  <View style={{ /* flex: 1, */ height: 100, backgroundColor: "#673ab7" }} />
)
const ThirdRoute = () => <View style={{ /* flex: 1, */ height: 100, backgroundColor: "#673ab7" }} />
const FourthRoute = () => (
  <View style={{ /* flex: 1, */ height: 100, backgroundColor: "#673ab7" }} />
)

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
})

export const UnauthAddAccountBrandReviewScreen: FC<UnauthAddAccountBrandReviewScreenProps> =
  observer(function UnauthAddAccountBrandReviewScreen(_props) {
    const { navigation } = _props
    const brandAccountStore = BrandAccountListModel.create()
    const { brandAccount, brandAccountList} = useStores()

    const layout = useWindowDimensions()
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
      { key: "first", title: "Basics" },
      { key: "second", title: "Community" },
      { key: "third", title: "Finacials" },
      { key: "fourth", title: "Goals" },
    ])
    const addBrandToList = () => {
      brandAccountList.addInput({
        new_id: brandAccount.id,
        new_name: brandAccount.name,
        new_websiteUrl: brandAccount.websiteUrl,
        new_category: brandAccount.category,
        new_keywordPrimary: brandAccount.keywordPrimary,
        new_keywordSecondary: brandAccount.keywordSecondary,
        new_socialTwitter: brandAccount.socialTwitter,
        new_socialLinkedInProfile: brandAccount.socialLinkedInProfile,
        new_socialInstagram: brandAccount.socialInstagram,
        new_socialTikTok: brandAccount.socialTikTok,
        new_socialFacebookPage: brandAccount.socialFacebookPage,
        new_socialTwitterFollowers: brandAccount.socialTwitterFollowers,
      })
      brandAccount.resetBrandAccount()
    }
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
          <View>
            <Text style={styles.textHeader}>Personal Brand: Review</Text>
            <Text style={styles.textMainHeader} testID="login-heading" preset="heading">
              Review Your Brand
            </Text>
          </View>
          <View style={$reviewStyle}>
            <View style={$reviewCategoryStyle}>
              <Text style={styles.textCategoryHeader}>Basics</Text>
              <View style={$reviewCategoryRow}>
                <Text style={styles.textLabel}>Brand Name</Text>
                <Text style={styles.textValue}>{brandAccount.name}</Text>
              </View>
              <View style={$reviewCategoryRow}>
                <Text style={styles.textLabel}>Website</Text>
                <Text style={styles.textValue}>{brandAccount.websiteUrl}</Text>
              </View>
              <View style={$reviewCategoryRow}>
                <Text style={styles.textLabel}>Category</Text>
                <Text style={styles.textValue}>{brandAccount.category}</Text>
              </View>
              <View style={$reviewCategoryRow}>
                <Text style={styles.textLabel}>Keyword 1</Text>
                <Text style={styles.textValue}>{brandAccount.keywordPrimary}</Text>
              </View>
              <View style={$reviewCategoryRow}>
                <Text style={styles.textLabel}>Keyword 2</Text>
                <Text style={styles.textValue}>{brandAccount.keywordSecondary}</Text>
              </View>
            </View>

            <Text style={styles.textCategoryHeader}>Community</Text>
            <View style={$reviewCategoryRow}>
              <Text style={styles.textLabel}>Twitter</Text>
              <Text style={styles.textValue}>@{brandAccount.socialTwitter}</Text>
            </View>
            <View style={$reviewCategoryRow}>
              <Text style={styles.textLabel}>LinkedIn</Text>
              <Text style={styles.textValue}>in/{brandAccount.socialLinkedInProfile}</Text>
            </View>
            <View style={$reviewCategoryRow}>
              <Text style={styles.textLabel}>TikTok</Text>
              <Text style={styles.textValue}>@{brandAccount.socialTikTok}</Text>
            </View>
            <View style={$reviewCategoryRow}>
              <Text style={styles.textLabel}>Instagram</Text>
              <Text style={styles.textValue}>@{brandAccount.socialInstagram}</Text>
            </View>
            <View style={$reviewCategoryRow}>
              <Text style={styles.textLabel}>Facebook</Text>
              <Text style={styles.textValue}>{brandAccount.socialFacebookPage}</Text>
            </View>

            <Text style={styles.textCategoryHeader}>Financials</Text>
            <View style={$reviewCategoryRow}>
              <Text style={styles.textLabel}>Product Stage</Text>
              <Text style={styles.textValue}>Traction</Text>
            </View>
            <View style={$reviewCategoryRow}>
              <Text style={styles.textLabel}>Revenue Stage</Text>
              <Text style={styles.textValue}>Revenue Stage</Text>
            </View>
            <View style={$reviewCategoryRow}>
              <Text style={styles.textLabel}>Monthly Revenue</Text>
              <Text style={styles.textValue}>$0 - $1,000</Text>
            </View>
            <View style={$reviewCategoryRow}>
              <Text style={styles.textLabel}>Annual Revenue</Text>
              <Text style={styles.textValue}>$0 - $1,000</Text>
            </View>

            <Text style={styles.textCategoryHeader}>Goals</Text>

            <View style={$reviewCategoryRow}>
              <Text style={styles.textLabel}>Brand Goals</Text>
              <Text style={styles.textValue}>Brand Goals</Text>
            </View>

            <Text style={styles.text}>Sponsor or Investor Goals</Text>
            <View style={$reviewCategoryRow}>
              <Text style={styles.textLabel}>Sponsor/Investor Goals</Text>
              <Text style={styles.textValue}>Brand Goals</Text>
            </View>
          </View>
        </View>
        {/* <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        /> */}
        <View style={$buttonsStyle}>
          <Button
            testID="landing-button"
            style={$tapButton}
            preset="reversed"
            onPress={() => {
              addBrandToList()
              navigation.navigate("UnauthEngageDashboard")
            }}
          >
            Submit
          </Button>
          <Button
            testID="landing-button"
            style={$tapButton}
            preset="default"
            onPress={() => navigation.goBack()}
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
    textAlign: "left",
  },
  textCategoryHeader: {
    fontFamily: "robotoMedium",
    fontSize: 16,
    /* marginBottom: 8, */
    maxWidth: 300,
    textAlign: "left",
  },
  textHeader: {
    fontSize: 18,
    maxWidth: 300,
    textAlign: "center",
  },
  textLabel: {
    color: colors.palette.grey100,
    /* fontFamily: "robotoMedium", */
    fontSize: 16,
    /* marginBottom: 8, */
    minWidth: 100,
    textAlign: "left",
  },
  textMainHeader: {
    textAlign: "center",
  },
  textValue: {
    /* fontFamily: "robotoMedium", */
    fontSize: 16,
    /* marginBottom: 8, */
    maxWidth: 300,
    textAlign: "left",
  },
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
  fontSize: 20,
  marginBottom: 10,
  color: colors.palette.neutral100,
}

const $secondarySlide: ViewStyle = {
  alignItems: "center",
  justifyContent: "flex-start",
  /* minHeight: 520, */
}

const $reviewStyle: ViewStyle = {
  alignItems: "flex-start",
  marginTop: 10,
  minWidth: 290,
}
const $reviewCategoryStyle: ViewStyle = {
  alignItems: "flex-start",
  /* marginTop: 10, */
  minWidth: 300,
}
const $reviewCategoryRow: ViewStyle = {
  alignItems: "flex-start",
  flexDirection: "row",
  marginTop: 10,
  /* minWidth: 290, */
}

const $tapButton: ViewStyle = {
  alignItems: "center",
  marginTop: spacing.extraSmall,
  flexDirection: "column",
  width: 240,
}

const $buttonsStyle: ViewStyle = {
  justifyContent: "space-between",
  alignItems: "center",
}

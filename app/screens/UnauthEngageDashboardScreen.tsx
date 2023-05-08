import { observer } from "mobx-react-lite"
import { useStores } from "../models"
import React, { FC, useState, useEffect } from "react"
import { View, StyleSheet, ViewStyle, TouchableOpacity, Alert, Image } from "react-native"
import { Button, Card, Screen, Text } from "../components"
// import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
// import { useNavigation } from "@react-navigation/native"
import { BrandAccountListModel } from "../models/BrandAccountList"
// import { useStores } from "app/models"
import { Ionicons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { colors, spacing } from "../theme"
import { ScrollView } from "react-native-gesture-handler"
import { LinearGradient } from "expo-linear-gradient"
/* import { DrawerIconButton } from "../screens/DemoShowroomScreen/DrawerIconButton" */

interface UnauthEngageDashboardScreenProps extends AppStackScreenProps<"UnauthEngageDashboard"> {}

export const UnauthEngageDashboardScreen: FC<UnauthEngageDashboardScreenProps> = observer(
  function UnauthEngageDashboardScreen(_props) {
    /* const swiperRef = useRef(null); */
    const { navigation } = _props
    const brandAccountStore = BrandAccountListModel.create()
    const { brandAccount, brandAccountList } = useStores()
    // const[totalF,setTotalF]=useState(0);
    // useEffect(() => {
    //   // const total = brandAccountList.inputList.reduce(
    //   //   (previousScore, currentScore)=>{previousScore+parseInt(currentScore.new_socialTwitterFollowers)}
    //   //   );
    //   console.log("inside useEffect")
    //   const total = brandAccountList.inputList.reduce((accumulator, currentValue) => {
    //     console.log("inside reduce")
    //     console.log(parseInt(currentValue.new_socialTwitterFollowers))
    //     return accumulator + parseInt(currentValue.new_socialTwitterFollowers);
    //   }, 0);
    //   console.log("total")
    //     console.log(total)
    //     setTotalF(total)
    // }, [brandAccountList.inputList])

    // const handleDeleteAccount = (id: string) => {
    //   inputStore.removeInput(id)
    // }
    const handleDeleteAccount = (name: string, id: string) => {
      Alert.alert("Confirm Delete", `Are you sure you want to delete ${name} Account?`, [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => brandAccountList.removeInput(id),
        },
      ])
    }
    const handleEditAccount = (data: any) => {
      console.log(data)
      brandAccount.setProp("id", data.new_id)
      brandAccount.setProp("name", data.new_name)
      brandAccount.setProp("websiteUrl", data.new_websiteUrl)
      brandAccount.setProp("category", data.new_Category)
      brandAccount.setProp("keywordPrimary", data.new_keywordPrimary)
      brandAccount.setProp("keywordSecondary", data.new_keywordSecondary)
      brandAccount.setProp("socialTwitter", data.new_socialTwitter)
      brandAccount.setProp("socialLinkedInProfile", data.new_socialLinkedInProfile)
      brandAccount.setProp("socialInstagram", data.new_socialInstagram)
      brandAccount.setProp("socialTikTok", data.new_new_socialTikTok)
      brandAccount.setProp("socialFacebookPage", data.new_socialFacebookPage)
      brandAccount.setProp("socialTwitterFollowers", data.new_socialTwitterFollowers)

      navigation.navigate("UnauthAddAccountBrandBasics")
    }

    // console.log(JSON.stringify(inputStore))
    return (
      <Screen
        /* safeAreaEdges={["top"]} */
        contentContainerStyle={$container}
      >
        <View style={$dashboardHeader}>
          <LinearGradient
            // Background Linear Gradient
            colors={["#04E7F7", "#2962FF"]}
            style={styles.background}
          />
          <View style={$dashboardContentHeader}>
            <Text style={styles.textHeroHeader} weight="bold" preset="heading">
              My Community
            </Text>
          </View>
          <View style={$dashboardContentBody}>
            {brandAccountList.totalFollowers === 0 ? (
              <Text style={styles.textHeroValuation}>- - - -</Text>
            ) : (
              <Text style={styles.textHeroValuation}>{brandAccountList.totalFollowers}</Text>
            )}

            <Text style={styles.textHeroBody}>Members</Text>
          </View>
        </View>
        <ScrollView
          style={$scrollContainer}
          /* style={styles.wrapper} */
        >
          {/* <Text>{socialTwitter}</Text> */}
          <Card
            style={$cardStyle}
            HeadingComponent={
              <View style={$summaryBodyHeader}>
                <Text weight="bold">All Accounts</Text>

                {/* <Icon icon="gear" color={colors.palette.blue100} size={30}/> */}
              </View>
            }
            ContentComponent={
              <View>
                <View style={$summaryBodyContent}>
                  <Text>Followers</Text>
                  {brandAccountList.totalFollowers === 0 ? (
                    <Text>- - - -</Text>
                  ) : (
                    <Text>{brandAccountList.totalFollowers}</Text>
                  )}
                </View>
              </View>
            }
          />
          {brandAccountList.inputList.length > 0 ? (
            brandAccountList.inputList.map((brandAccount) => (
              <Card
                key={brandAccount.new_id} 
                style={$cardStyle}
                HeadingComponent={
                  <View style={$summaryBodyCardHeader}>
                    <View>
                      <Text style={{ color: "#2962FF", fontSize: 20 }}>
                        {brandAccount.new_name}
                      </Text>
                      <Text style={{ color: "#777777", fontSize: 15 }}>Personal Brand</Text>
                    </View>

                    <View style={$CardButtons}>
                      <TouchableOpacity
                        onPress={() => handleEditAccount(brandAccount)}
                        style={{ ...$CardButton, borderColor: "#2962FF" }}
                      >
                        <Image
                          source={require("../../assets/icons/edit.png")}
                          style={{ width: 26 }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() =>
                          handleDeleteAccount(brandAccount.new_name, brandAccount.new_id)
                        }
                        style={{ ...$CardButton, borderColor: "#F22E2E" }}
                      >
                        <Image
                          source={require("../../assets/icons/delete.png")}
                          style={{ width: 26 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                }
                ContentComponent={
                  <View style={$summaryBodyContent}>
                    <Text weight="bold">Followers: </Text>
                    <Text weight="bold">{brandAccount.new_socialTwitterFollowers}</Text>
                  </View>
                }
              />
            ))
          ) : (
            <Card
              style={$cardStyleEmpty}
              ContentComponent={
                <View style={$cardStyleEmpty}>
                  <Text style={styles.textCardEmptyHeader} weight="bold">
                    No Accounts
                  </Text>
                  <Text style={styles.textCardEmptyBody}>
                    You have no personal brand or business accounts added to value and monitor.
                  </Text>
                  <Button
                    preset="default"
                    style={$tapButton}
                    onPress={() => navigation.navigate("UnauthAddAccountLanding")}
                  >
                    Add Account
                  </Button>
                </View>
              }
            />
          )}
        </ScrollView>
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  background: {
    height: 250,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  textCardEmptyBody: {
    textAlign: "center",
  },
  textCardEmptyHeader: {
    textAlign: "center",
  },
  textHeroBody: {
    color: colors.palette.neutral100,
  },
  textHeroHeader: {
    color: colors.palette.neutral100,
    fontSize: 20,
  },
  textHeroValuation: {
    color: colors.palette.neutral100,
    fontSize: 28,
    lineHeight: 40,
  },
  wrapper: {},
})

const $container: ViewStyle = {
  /* paddingTop: 20, */
  flex: 1,
  /* paddingBottom: spacing.huge, */
  /* paddingHorizontal: spacing.large, */
}

const $dashboardHeader: ViewStyle = {
  height: 240,
  paddingTop: 40,
  paddingHorizontal: 10,
}
const $dashboardContentHeader: ViewStyle = {
  alignItems: "center",
  height: 40,
  marginTop: 10,
}
const $dashboardContentBody: ViewStyle = {
  alignItems: "center",
  height: 100,
  justifyContent: "center",
  /* marginTop: 50, */
}
const $dashboardContentFooter: ViewStyle = {
  height: 40,
  marginBottom: 10,
  flexDirection: "row",
  justifyContent: "space-between",
}

const $dashboardContentFooterView: ViewStyle = {
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
}

const $cardStyle: ViewStyle = {
  /* marginBottom: 20, */
  marginTop: 20,
  marginHorizontal: 10,
}

const $cardStyleEmpty: ViewStyle = {
  alignItems: "center",
  minHeight: 180,
  justifyContent: "space-between",
  marginBottom: 10,
  marginTop: 20,
  marginHorizontal: 10,
}

const $summaryBodyHeader: ViewStyle = {
  /* marginBottom: 20, */

  height: 30,
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.grey300,
}
const $summaryBodyCardHeader: ViewStyle = {
  //  marginBottom: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  paddingTop: 5,
  height: 60,
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.grey300,
}
const $CardButtons: ViewStyle = {
  flexDirection: "row",
  // paddingRight:20,
}
const $CardButton: ViewStyle = {
  borderWidth: 2,
  borderRadius: 5,
  paddingVertical: 5,
  paddingHorizontal: 20,
  marginRight: 10,
  height: 43,
}
const $summaryBodyContent: ViewStyle = {
  /* marginBottom: 20, */
  flexDirection: "row",
  height: 30,
  justifyContent: "space-between",
}

const $tapButton: ViewStyle = {
  alignItems: "center",
  marginBottom: spacing.extraSmall,
  marginTop: spacing.extraSmall,
  flexDirection: "column",
  width: 240,
}

const $scrollContainer: ViewStyle = {
  backgroundColor: colors.palette.grey300,
  flex: 1,
  /* minHeight: 00, */
  /* marginBottom: 200, */
}

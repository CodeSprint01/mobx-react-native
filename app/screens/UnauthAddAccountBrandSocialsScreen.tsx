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

interface UnauthAddAccountBrandSocialsScreenProps extends AppStackScreenProps <"UnauthAddAccountBrandSocials"> {}

export const UnauthAddAccountBrandSocialsScreen: FC<UnauthAddAccountBrandSocialsScreenProps> = observer(
  function UnauthAddAccountBrandSocialsScreen(
  _props,
) {
  const { navigation } = _props;
  const { brandAccount } = useStores();
  /* const { brandAccountStore } = useStores();
  const [brandAccountSocialTwitter, setBrandAccountSocialTwitter] = useState(brandAccountStore.brandAccountSocialTwitter === "" ? "" : brandAccountStore.brandAccountSocialTwitter);
  const [brandAccountSocialLinkedInProfile, setBrandAccountSocialLinkedInProfile] = useState(brandAccountStore.brandAccountSocialLinkedInProfile === "" ? "" : brandAccountStore.brandAccountSocialLinkedInProfile);
  const [brandAccountSocialInstagram, setBrandAccountSocialInstagram] = useState(brandAccountStore.brandAccountSocialInstagram === "" ? "" : brandAccountStore.brandAccountSocialInstagram);
  const [brandAccountSocialTikTok, setBrandAccountSocialTikTok] = useState(brandAccountStore.brandAccountSocialTikTok === "" ? "" : brandAccountStore.brandAccountSocialTikTok);
  const [brandAccountSocialFacebookPage, setBrandAccountSocialFacebookPage] = useState(brandAccountStore.brandAccountSocialFacebookPage === "" ? "" : brandAccountStore.brandAccountSocialFacebookPage); */
  const [brandAccountSocialTwitter, setBrandAccountSocialTwitter] = useState(brandAccount.socialTwitter === "" ? "" : brandAccount.socialTwitter);
  const [brandAccountSocialLinkedInProfile, setBrandAccountSocialLinkedInProfile] = useState(brandAccount.socialLinkedInProfile === "" ? "" : brandAccount.socialLinkedInProfile);
  const [brandAccountSocialInstagram, setBrandAccountSocialInstagram] = useState(brandAccount.socialInstagram === "" ? "" : brandAccount.socialInstagram);
  const [brandAccountSocialTikTok, setBrandAccountSocialTikTok] = useState(brandAccount.socialTikTok === "" ? "" : brandAccount.socialTikTok);
  const [brandAccountSocialFacebookPage, setBrandAccountSocialFacebookPage] = useState(brandAccount.socialFacebookPage === "" ? "" : brandAccount.socialFacebookPage);
  


  const handleSaveContinue = () => {

    brandAccount.setProp("socialTwitter", brandAccountSocialTwitter);
    brandAccount.setProp("socialLinkedInProfile", brandAccountSocialLinkedInProfile);
    brandAccount.setProp("socialInstagram", brandAccountSocialInstagram);
    brandAccount.setProp("socialTikTok", brandAccountSocialTikTok);
    brandAccount.setProp("socialFacebookPage", brandAccountSocialFacebookPage);
   

    if(brandAccountSocialTwitter){
      brandAccount.getFollowers(brandAccountSocialTwitter);/* 
      console.log("Username:" + brandAccountSocialTwitter);
      console.log("Get Followers:" + brandAccountSocialTwitterFollowers);
      console.log("Followers on Screen:" + brandAccount.socialTwitterFollowers); */
    }
    

    navigation.navigate("UnauthAddAccountBrandFinancials")
  }

  return (
    <Screen
      preset="scroll"
      contentContainerStyle={$container}>
      <View
          style={$menuHeader}
        >
        <Text style={$title} onPress={() =>  navigation.navigate("UnauthAddAccountLanding")}>  X  </Text>
        <Text style={$title} preset="heading">
          Add Account
        </Text>
        <Text style={$title} preset="heading" onPress={() =>  navigation.navigate("UnauthAddAccountLanding")}>
          Close
        </Text>
      </View>
      <View testID="Beautiful" style={$secondarySlide}>
            <View
            >
              <ProgressBar progress={0.50} width={250} height={10} style={$progressBarDefault} />
              <Text style={styles.textHeader}>Personal Brand: Community</Text>
              <Text style={styles.textMainHeader} testID="login-heading" preset="heading">
                Grow Community
              </Text>
            </View>
            <View
              style={$brandStyle}
            >
              <View
                style={$textFieldDefault}
              >
                <TextField
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="url"
                  label="Twitter"
                  placeholder="Enter profile link"
                  value={brandAccountSocialTwitter}
                  onChangeText={setBrandAccountSocialTwitter}
                />
              </View>
              {/* <Text>Username: {brandAccountSocialTwitter}</Text>
              <Text>Followers: {brandAccount.socialTwitterFollowers}</Text>
              <Text>Followers: {brandAccountSocialTwitterFollowers}</Text> */}
              {/* { brandAccount.socialTwitterFollowers === "" ? <Text>Followers: {brandAccount.socialTwitterFollowers}</Text> : <Text></Text>} */}
              <View
                style={$textFieldDefault}
              >
                <TextField
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="url"
                  label="LinkedIn Profile"
                  placeholder="Enter profile link"
                  value={brandAccountSocialLinkedInProfile}
                  onChangeText={setBrandAccountSocialLinkedInProfile}
                />
              </View>
              <View
                style={$textFieldDefault}
              >
                <TextField
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="url"
                  label="TikTok"
                  placeholder="Enter profile link"
                  value={brandAccountSocialInstagram}
                  onChangeText={setBrandAccountSocialInstagram}
                />
              </View>
              <View
                style={$textFieldDefault}
              >
                <TextField
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="url"
                  label="Instagram"
                  placeholder="Enter profile link"
                  value={brandAccountSocialTikTok}
                  onChangeText={setBrandAccountSocialTikTok}
                />
              </View>
              <View
                style={$textFieldDefault}
              >
                <TextField
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="url"
                  label="Facebook Page"
                  placeholder="Enter profile link"
                  value={brandAccountSocialFacebookPage}
                  onChangeText={setBrandAccountSocialFacebookPage}
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
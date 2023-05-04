/* eslint-disable react-native/no-unused-styles */
import { observer } from "mobx-react-lite"
import { useStores } from "../models"
import React, { FC, useState } from "react"
import { TextStyle, View, ViewStyle, StyleSheet } from "react-native"
import { Button, Screen, Text, TextField } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import ProgressBar from 'react-native-progress/Bar';
import RNPickerSelect from 'react-native-picker-select';
import { BrandAccountListModel } from "../models/BrandAccountList";
import { Ionicons } from '@expo/vector-icons';
/* import { BrandAccountList } from "app/models/BrandAccount" */

interface UnauthAddAccountBrandBasicsScreenProps extends AppStackScreenProps <"UnauthAddAccountBrandBasics"> {}

export const UnauthAddAccountBrandBasicsScreen: FC<UnauthAddAccountBrandBasicsScreenProps> = observer(
  function UnauthAddAccountBrandBasicsScreen(
  _props,
) {
  const { navigation } = _props;
  const brandAccountStore = BrandAccountListModel.create();
  const { brandAccount, brandAccountList,inputStore  } = useStores();
 
  const placeholder = {
    label: 'Select a brand category...',
    value: "",
    color: '#000000',
  };
  const placeholderKeyword = {
    label: 'Select a brand keyword...',
    value: "",
    color: '#000000',
  };

  const [brandAccountName, setBrandAccountName] = useState(brandAccount.name === "" ? "" : brandAccount.name);
  const [brandAccountWebsiteUrl, setBrandAccountWebsiteUrl] = useState(brandAccount.websiteUrl === "" ? "" : brandAccount.websiteUrl);
  const [brandAccountCategory, setBrandAccountCategory] = useState(brandAccount.category === "" ? "" : brandAccount.category);
  const [brandAccountKeywordPrimary, setBrandAccountKeywordPrimary] = useState(brandAccount.keywordPrimary === "" ? "" : brandAccount.keywordPrimary);
  const [brandAccountKeywordSecondary, setBrandAccountKeywordSecondary] = useState(brandAccount.keywordSecondary === "" ? "" : brandAccount.keywordSecondary);

  

  const handleSaveContinue = () => {
    
    if(brandAccount.id===""){
      brandAccount.setProp("id", Date.now().toString());
    }

    brandAccount.setProp("name", brandAccountName);
    brandAccount.setProp("websiteUrl", brandAccountWebsiteUrl);
    brandAccount.setProp("category", brandAccountCategory);
    brandAccount.setProp("keywordPrimary", brandAccountKeywordPrimary);
    brandAccount.setProp("keywordSecondary", brandAccountKeywordSecondary);
    
    
    navigation.navigate("UnauthAddAccountBrandSocials")
  }

  const handleCloseCancel = () => {
    brandAccount.resetBrandAccount();
    inputStore.reset();
   
    navigation.goBack();
  }


  return (
    <Screen
      preset="scroll"
      contentContainerStyle={$container}>
      <View
          style={$menuHeader}
        >
        <Text style={$title} onPress={handleCloseCancel}>  X  </Text>
        <Text style={$title} preset="heading">
          Add Account
        </Text>
        <Text style={$title} preset="heading" onPress={handleCloseCancel}>
          Close
        </Text>
      </View>
      <View testID="Beautiful" style={$secondarySlide}>
            <View>
              <ProgressBar progress={0.25} width={250} height={10} style={$progressBarDefault}/>
              <Text style={styles.textHeader}>Personal Brand: Basics</Text>
              <Text style={styles.textMainHeader} testID="login-heading" preset="heading">
                Enter Basic Info
              </Text>
            </View>
            <View
              style={$brandStyle}
            >
              <View
                style={$textFieldDefault}
              >
                <TextField
                  label="Brand Name"
                  placeholder="Enter name"
                  value={brandAccountName}
                  onChangeText={setBrandAccountName}
                />
              </View>
              <View
                style={$textFieldDefault}
              >
                <TextField
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="url"
                  label="Website or Main Social Media"
                  placeholder="Enter url"
                  value={brandAccountWebsiteUrl}
                  onChangeText={setBrandAccountWebsiteUrl}
                />
              </View>
              <View
                style={$textFieldDefault}
              >
                <Text style={styles.text}>Category</Text>
                <RNPickerSelect
                  value={brandAccountCategory}
                  onValueChange={setBrandAccountCategory}
                  placeholder={placeholder}
                  style={customPickerStyles}
                  items={[
                    { label: 'Celebrity', value: 'Celebrity' },
                    { label: 'Content Creator', value: 'Content Creator' },
                    { label: 'Influencer', value: 'Influencer' },
                    { label: 'Founder', value: 'Founder' },
                    { label: 'Entrepreneur', value: 'Entrepreneur' },
                    { label: 'Investor', value: 'Investor' },
                    { label: 'Author', value: 'Author' },
                    { label: 'Educator', value: 'Educator' },
                    { label: 'Model', value: 'Model' },
                    { label: 'Builder', value: 'Builder' },
                    { label: 'Software Developer', value: 'Software Developer' },
                  ]}
                  Icon={() => { return <Ionicons name="md-chevron-down" size={24} color={colors.palette.grey200} />;}}
                />
              </View>
              <View
                style={$textFieldDefault}
              >
                <Text style={styles.text}>Primary Keyword</Text>
                <RNPickerSelect
                  value={brandAccountKeywordPrimary}
                  onValueChange={setBrandAccountKeywordPrimary}
                  placeholder={placeholderKeyword}
                  style={customPickerStyles}
                  items={[
                    { label: 'Celebrity', value: 'Celebrity' },
                    { label: 'Content Creator', value: 'Content Creator' },
                    { label: 'Influencer', value: 'Influencer' },
                    { label: 'Founder', value: 'Founder' },
                    { label: 'Entrepreneur', value: 'Entrepreneur' },
                    { label: 'Investor', value: 'Investor' },
                    { label: 'Author', value: 'Author' },
                    { label: 'Educator', value: 'Educator' },
                    { label: 'Model', value: 'Model' },
                    { label: 'Builder', value: 'Builder' },
                    { label: 'Software Developer', value: 'Software Developer' },
                    { label: 'Technology', value: 'Technology' },
                    { label: 'Business', value: 'Business' },
                    { label: 'Technology', value: 'Technology' },
                    { label: 'Finance', value: 'Finance' },
                    { label: 'Fintech', value: 'Fintech' },
                    { label: 'Trading', value: 'Trading' },
                    { label: 'Venture Capital', value: 'Venture Capital' },
                    { label: 'Angel Investing', value: 'Angel Investing' },
                    { label: 'Private Equity', value: 'Private Equity' },
                    { label: 'Real Estate', value: 'Real Estate' },
                    { label: 'Real Estate Development', value: 'Real Estate Development' },
                    { label: 'Web 3', value: 'Web 3' },
                    { label: 'Crypto', value: 'Crypto' },
                    { label: 'Blockchain', value: 'Blockchain' },
                    { label: 'AI', value: 'AI' },
                    { label: 'Software', value: 'Software' },
                    { label: 'Agriculture', value: 'Agriculture' },
                    { label: 'Farming', value: 'Farming' },
                    { label: 'Home Steading', value: 'Home Steading' },
                    { label: 'Permaculture', value: 'Permaculture' },
                    { label: 'Construction', value: 'Construction' },
                    { label: 'Career Growth', value: 'Career Growth' },
                    { label: 'Consulting', value: 'Consulting' },
                    { label: 'Contracting', value: 'Contracting' },
                    { label: 'Politics', value: 'Politics' },
                    { label: 'Patents', value: 'Patents' },
                    { label: 'Law', value: 'Law' },
                    { label: 'Government', value: 'Government' },
                    { label: 'Government Contracting', value: 'Government Contracting' },
                    { label: 'Grants', value: 'Grants' },
                    { label: 'Non Profit', value: 'Non Profit' },
                    { label: 'Foundation', value: 'Foundation' },
                    { label: 'NGO', value: 'NGO' },
                    { label: 'Mining', value: 'Mining' },
                    { label: 'Gaming', value: 'Gaming' },
                    { label: 'Gardening', value: 'Gardening' },
                    { label: 'Cooking', value: 'Cooking' },
                    { label: 'Beauty', value: 'Beauty' },
                    { label: 'Fashion', value: 'Fashion' },
                    { label: 'Health', value: 'Health' },
                    { label: 'Fitness', value: 'Fitness' },
                    { label: 'Medicine', value: 'Medicine' },
                    { label: 'Blogger', value: 'Blogger' },
                    { label: 'Journalism', value: 'Journalism' },
                    { label: 'Citizen Journalism', value: 'Citizen Journalism' },
                    { label: 'News', value: 'News' },
                    { label: 'Alternative News', value: 'Alternative News' },
                    { label: 'Current Events', value: 'Current Events' },
                    { label: 'Vlogger', value: 'Vlogger' },
                    { label: 'Podcast', value: 'Podcast' },
                    { label: 'Law', value: 'Law' },
                    { label: 'Science', value: 'Science' },
                    { label: 'Astronomy', value: 'Astronomy' },
                    { label: 'Cars', value: 'Cars' },
                    { label: 'Planes', value: 'Planes' },
                    { label: 'Luxury', value: 'Luxury' },
                    { label: 'Memes', value: 'Memes' },
                    { label: 'Frens of Pepe', value: 'Frens of Pepe' },
                    { label: 'Anons', value: 'Anons' },
                  ]}
                  Icon={() => { return <Ionicons name="md-chevron-down" size={24} color={colors.palette.grey200} />;}}
                />
              </View>
              <View
                style={$textFieldDefault}
              >
                <Text style={styles.text}>Secondary Keyword</Text>
                <RNPickerSelect
                  value={brandAccountKeywordSecondary}
                  onValueChange={setBrandAccountKeywordSecondary}
                  placeholder={placeholderKeyword}
                  style={customPickerStyles}
                  items={[
                    { label: 'Celebrity', value: 'Celebrity' },
                    { label: 'Content Creator', value: 'Content Creator' },
                    { label: 'Influencer', value: 'Influencer' },
                    { label: 'Founder', value: 'Founder' },
                    { label: 'Entrepreneur', value: 'Entrepreneur' },
                    { label: 'Investor', value: 'Investor' },
                    { label: 'Author', value: 'Author' },
                    { label: 'Educator', value: 'Educator' },
                    { label: 'Model', value: 'Model' },
                    { label: 'Builder', value: 'Builder' },
                    { label: 'Software Developer', value: 'Software Developer' },
                    { label: 'Technology', value: 'Technology' },
                    { label: 'Business', value: 'Business' },
                    { label: 'Technology', value: 'Technology' },
                    { label: 'Finance', value: 'Finance' },
                    { label: 'Fintech', value: 'Fintech' },
                    { label: 'Trading', value: 'Trading' },
                    { label: 'Venture Capital', value: 'Venture Capital' },
                    { label: 'Angel Investing', value: 'Angel Investing' },
                    { label: 'Private Equity', value: 'Private Equity' },
                    { label: 'Real Estate', value: 'Real Estate' },
                    { label: 'Real Estate Development', value: 'Real Estate Development' },
                    { label: 'Web 3', value: 'Web 3' },
                    { label: 'Crypto', value: 'Crypto' },
                    { label: 'Blockchain', value: 'Blockchain' },
                    { label: 'AI', value: 'AI' },
                    { label: 'Software', value: 'Software' },
                    { label: 'Agriculture', value: 'Agriculture' },
                    { label: 'Farming', value: 'Farming' },
                    { label: 'Home Steading', value: 'Home Steading' },
                    { label: 'Permaculture', value: 'Permaculture' },
                    { label: 'Construction', value: 'Construction' },
                    { label: 'Career Growth', value: 'Career Growth' },
                    { label: 'Consulting', value: 'Consulting' },
                    { label: 'Contracting', value: 'Contracting' },
                    { label: 'Politics', value: 'Politics' },
                    { label: 'Patents', value: 'Patents' },
                    { label: 'Law', value: 'Law' },
                    { label: 'Government', value: 'Government' },
                    { label: 'Government Contracting', value: 'Government Contracting' },
                    { label: 'Grants', value: 'Grants' },
                    { label: 'Non Profit', value: 'Non Profit' },
                    { label: 'Foundation', value: 'Foundation' },
                    { label: 'NGO', value: 'NGO' },
                    { label: 'Mining', value: 'Mining' },
                    { label: 'Gaming', value: 'Gaming' },
                    { label: 'Gardening', value: 'Gardening' },
                    { label: 'Cooking', value: 'Cooking' },
                    { label: 'Beauty', value: 'Beauty' },
                    { label: 'Fashion', value: 'Fashion' },
                    { label: 'Health', value: 'Health' },
                    { label: 'Fitness', value: 'Fitness' },
                    { label: 'Medicine', value: 'Medicine' },
                    { label: 'Blogger', value: 'Blogger' },
                    { label: 'Journalism', value: 'Journalism' },
                    { label: 'Citizen Journalism', value: 'Citizen Journalism' },
                    { label: 'News', value: 'News' },
                    { label: 'Alternative News', value: 'Alternative News' },
                    { label: 'Current Events', value: 'Current Events' },
                    { label: 'Vlogger', value: 'Vlogger' },
                    { label: 'Podcast', value: 'Podcast' },
                    { label: 'Law', value: 'Law' },
                    { label: 'Science', value: 'Science' },
                    { label: 'Astronomy', value: 'Astronomy' },
                    { label: 'Cars', value: 'Cars' },
                    { label: 'Planes', value: 'Planes' },
                    { label: 'Luxury', value: 'Luxury' },
                    { label: 'Memes', value: 'Memes' },
                    { label: 'Frens of Pepe', value: 'Frens of Pepe' },
                    { label: 'Anons', value: 'Anons' },
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
              onPress={handleCloseCancel}
            >
              Cancel
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


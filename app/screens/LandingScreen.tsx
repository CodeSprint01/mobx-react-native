import { observer } from "mobx-react-lite"
import React, { FC,  } from "react"
import { Image, StyleSheet,  TextStyle, View, ViewStyle } from "react-native"
import { Button,  Screen, Text,  } from "../components"
// import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { spacing } from "../theme"

interface LandingScreenProps extends AppStackScreenProps<"Landing"> {}

export const LandingScreen: FC<LandingScreenProps> = observer(function LandingScreen(_props) {
  const { navigation } = _props
  /* const authPasswordInput = useRef<TextInput>()

  const [authPassword, setAuthPassword] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: { authEmail, setAuthEmail, setAuthToken, validationError },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    setAuthEmail("ignite@infinite.red")
    setAuthPassword("ign1teIsAwes0m3")
  }, [])

  const error = isSubmitted ? validationError : ""

  function login() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    if (validationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    setAuthPassword("")
    setAuthEmail("")

    // We'll mock this with a fake token.
    setAuthToken(String(Date.now()))
  }

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  useEffect(() => {
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])
 */
  /* function goLogin() {
    navigation.navigate("Login", { screen: "LoginScreen" })
  } */
  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <View
        style={$brandStyle}
        >
          <Image
            style={styles.brandLogo}
            source={require('../../assets/images/logo_pf.png')}
          />
        
        <Text testID="login-heading" tx="landingScreen.slogan" preset="heading" style={$signIn} />
      </View>
      <View
      style={$buttonsStyle}>
        <Button
          testID="landing-button"
          tx="landingScreen.tapToLogin"
          style={$viewStyle}
          preset="reversed"
          onPress={() =>  navigation.navigate("Login")}
        />
        <Button
          testID="landing-button"
          tx="landingScreen.tapToRegister"
          style={$viewStyle}
          preset="reversed"
          onPress={() =>  navigation.navigate("Demo")}
        />
      </View>
      <View
        style={$footerStyle}
      >
        <Text testID="login-heading" tx="landingScreen.investorRegisterText" preset="default" style={$signIn} />
        <Button
          testID="landing-button"
          tx="landingScreen.tapToRegisterInvestors"
          style={$tapButton}
          preset="default"
          // onPress={login}
        />
      </View>
      
      
      
      
    </Screen>
  )
})

const styles = StyleSheet.create({
  brandLogo:{
    height: 78,
    width: 126,
  },
});
const $brandStyle: ViewStyle = {
  height: 150,
  marginTop: 5,
  marginBottom: 5,
  justifyContent: 'space-between',
  alignItems: 'center'
}

const $buttonsStyle: ViewStyle = {
  height: 200,
  marginTop: 20,
  marginBottom: 30,
  justifyContent: 'space-between',
}

const $footerStyle: ViewStyle = {
  height: 200,
  marginTop: 20,
  /* justifyContent: 'space-between', */
}
const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $signIn: TextStyle = {
  marginBottom: spacing.small,
}

const $viewStyle: ViewStyle = {
  /* justifyContent: 'space-around', */
  flexDirection: 'column', 
}

const $tapButton: ViewStyle = {
  marginTop: spacing.extraSmall,
}

// @demo remove-file

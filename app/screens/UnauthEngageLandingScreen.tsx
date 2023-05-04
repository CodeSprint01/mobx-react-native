import { observer } from "mobx-react-lite"
import React, { FC, useRef } from "react"
import { Image, View, StyleSheet, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../components"
// import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
import Swiper from "react-native-swiper"
import { spacing } from "../theme"
import { ScrollView } from "react-native-gesture-handler"
/* import { DrawerIconButton } from "../screens/DemoShowroomScreen/DrawerIconButton" */

interface UnauthEngageLandingScreenProps extends AppStackScreenProps<"UnauthEngageLanding"> {}

export const UnauthEngageLandingScreen: FC<UnauthEngageLandingScreenProps> = observer(
  function UnauthEngageLandingScreen(_props) {
    const swiperRef = useRef(null)
    const { navigation } = _props

    const nextSlide = () => {
      if (swiperRef) {
        swiperRef.current.scrollBy(1)
      }
    }
    /* const previousSlide = () => {
    if (swiperRef) {
      swiperRef.current.scrollBy(-1);
    }
  };
  const firstSlide = () => {
    if (swiperRef) {
      swiperRef.current.scrollTo(0);
    }
  }; */
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen safeAreaEdges={["top"]}>
        <ScrollView>
          <Swiper
            style={styles.wrapper}
            loop={true}
            showsPagination={false}
            paginationStyle={$swiperPagination}
            ref={swiperRef}
          >
            <View style={$primarySlide}>
              <View style={$menuTopStyle}>
                {/* <Icon icon="menu" color={colors.palette.blue100} size={30} onPress={() =>  navigation.navigate("Demo", {screen: "UnauthEngageMenu"})}/> */}
              </View>
              <View style={$brandStyle}>
                <Image source={require("../../assets/images/BrandLogo_214x133.png")} />
                <Text style={styles.text}>
                  We offer the easiest way to value, track and monetize personal brands and
                  businesses so they can grow.
                </Text>
              </View>
              <View style={$buttonsStyle}>
                <Button
                  testID="landing-button"
                  style={$tapButton}
                  preset="reversed"
                  onPress={() => navigation.navigate("UnauthAddAccountLanding")}
                >
                  Add An Account
                </Button>
              </View>
            </View>
          </Swiper>
        </ScrollView>
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "bold",
    maxWidth: 300,
    textAlign: "center",
  },
  wrapper: {},
})

const $primarySlide: ViewStyle = {
  /* alignItems: 'center', */
  flex: 0.8,
  justifyContent: "space-between",
  /* marginTop: 120, */
}

const $menuTopStyle: ViewStyle = {
  alignItems: "flex-start",
  /* flex: 0.8, */
  /* justifyContent: 'flex-start', */
  marginLeft: 20,
  /* marginTop: 50, */
}

const $swiperPagination: ViewStyle = {
  bottom: 160,
}
const $secondarySlide: ViewStyle = {
  alignItems: "center",
  flex: 0.8,
  justifyContent: "space-between",
  /* marginTop: 120, */
}

const $tapButton: ViewStyle = {
  alignItems: "center",
  marginTop: spacing.extraSmall,
  flexDirection: "column",
  width: 240,
}

const $brandStyle: ViewStyle = {
  height: 250,
  alignItems: "center",
}
const $buttonsStyle: ViewStyle = {
  height: 150,
  justifyContent: "space-between",
  alignItems: "center",
}

const $footerStyle: ViewStyle = {
  height: 230,
  justifyContent: "center",
  alignItems: "center",
}

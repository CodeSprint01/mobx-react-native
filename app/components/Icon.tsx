import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes

  /**
   * An optional tint color for the icon
   */
  color?: string

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}
/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        style={[
          $imageStyle,
          color && { tintColor: color },
          size && { width: size, height: size },
          $imageStyleOverride,
        ]}
        source={iconRegistry[icon]}
      />
    </Wrapper>
  )
}

export const iconRegistry = {
  house: require("../../assets/icons/house.png"),
  chartLineUp: require("../../assets/icons/chart-line-up.png"),
  bars: require("../../assets/icons/bars.png"),
  circlePlus: require("../../assets/icons/circle-plus.png"),
  gear: require("../../assets/icons/gear.png"),
  graduationCap: require("../../assets/icons/graduation-cap.png"),
  megaphone: require("../../assets/icons/megaphone.png"),
  envelope: require("../../assets/icons/envelope.png"),
  circleInfo: require("../../assets/icons/circle-info.png"),
  browser: require("../../assets/icons/browser.png"),
  arrowUpFromSquare: require("../../assets/icons/arrow-up-from-square.png"),
  moneyBillTrendUp: require("../../assets/icons/money-bill-trend-up.png"),
  scaleBalanced: require("../../assets/icons/scale-balanced.png"),
  xmark: require("../../assets/icons/xmark.png"),
  back: require("../../assets/icons/back.png"),
  bell: require("../../assets/icons/bell.png"),
  caretLeft: require("../../assets/icons/caretLeft.png"),
  caretRight: require("../../assets/icons/caretRight.png"),
  check: require("../../assets/icons/check.png"),
  clap: require("../../assets/icons/clap.png"),
  community: require("../../assets/icons/community.png"),
  components: require("../../assets/icons/components.png"),
  debug: require("../../assets/icons/debug.png"),
  github: require("../../assets/icons/github.png"),
  heart: require("../../assets/icons/heart.png"),
  hidden: require("../../assets/icons/hidden.png"),
  ladybug: require("../../assets/icons/ladybug.png"),
  lock: require("../../assets/icons/lock.png"),
  menu: require("../../assets/icons/menu.png"),
  more: require("../../assets/icons/more.png"),
  pin: require("../../assets/icons/pin.png"),
  podcast: require("../../assets/icons/podcast.png"),
  settings: require("../../assets/icons/settings.png"),
  slack: require("../../assets/icons/slack.png"),
  view: require("../../assets/icons/view.png"),
  x: require("../../assets/icons/x.png"),
}

const $imageStyle: ImageStyle = {
  resizeMode: "contain",
}

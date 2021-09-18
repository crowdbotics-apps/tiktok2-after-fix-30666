import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ed/bcb0/e4e2dc07975257ae2ea1be78e752d5ae"
        }}
        style={styles.ImageBackground_2_1655}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84d6/85a0/ab26b979fc70a43fadc235181560371f"
        }}
        style={styles.ImageBackground_2_1658}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_2_1655: {
    width: wp("35.76642335766424%"),
    minWidth: wp("35.76642335766424%"),
    height: hp("40.49586776859504%"),
    minHeight: hp("40.49586776859504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.06569343065693%"),
    top: hp("33.057851239669425%")
  },
  ImageBackground_2_1658: {
    width: wp("38.81701448538008%"),
    minWidth: wp("38.81701448538008%"),
    height: hp("63.72561494180978%"),
    minHeight: hp("63.72561494180978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.099399093293796%"),
    top: hp("15.892646726497933%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

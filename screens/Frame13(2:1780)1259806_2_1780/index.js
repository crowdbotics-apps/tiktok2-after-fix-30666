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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/565a/bab4/6c14b172acc5defb32035db6b66d5a5b"
        }}
        style={styles.ImageBackground_2_1781}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f435/1108/35574e2922e35f38b3f061313b827cbc"
        }}
        style={styles.ImageBackground_2_1784}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  ImageBackground_2_1781: {
    width: wp("56.34920634920635%"),
    height: hp("51.36369372171069%"),
    top: hp("24.318150111607142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.825396825396826%")
  },
  ImageBackground_2_1784: {
    width: wp("75.79365079365078%"),
    minWidth: wp("75.79365079365078%"),
    height: hp("75.79365079365078%"),
    minHeight: hp("75.79365079365078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.515873015873016%"),
    top: hp("13.095238095238097%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

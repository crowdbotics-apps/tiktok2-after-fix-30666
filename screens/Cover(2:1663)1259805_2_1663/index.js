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
      <View style={styles.View_2_1664}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/550f/e7c8/1e690f7fa9b98fa2bb9b7ed9eae1afc8"
          }}
          style={styles.ImageBackground_2_1665}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2c6/4ac1/699e45345ca5f2b8acb2217bc0153a9e"
          }}
          style={styles.ImageBackground_2_1666}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5078/04ca/93fade7ccc42ec821423b2db5ab1af03"
          }}
          style={styles.ImageBackground_2_1667}
        />
      </View>
      <View style={styles.View_2_1675}>
        <Text style={styles.Text_2_1675}>TikTok</Text>
      </View>
      <View style={styles.View_2_1676}>
        <Text style={styles.Text_2_1676}>14 screens</Text>
      </View>
      <View style={styles.View_2_1677} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57a1/d38d/ba039daff448d2844bb0da7121fb68be"
        }}
        style={styles.ImageBackground_2_1678}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_2_1664: {
    width: wp("10.333333333333334%"),
    minWidth: wp("10.333333333333334%"),
    height: hp("18.787846420750473%"),
    minHeight: hp("18.787846420750473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("30.909090909090907%")
  },
  ImageBackground_2_1665: {
    width: wp("10.333333333333334%"),
    height: hp("18.787846420750473%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_1666: {
    width: wp("10.333333333333334%"),
    height: hp("18.787846420750473%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_1667: {
    width: wp("10.333333333333334%"),
    height: hp("18.787846420750473%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_1675: {
    width: wp("12.916666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.750000000000002%"),
    top: hp("54.24242424242425%"),
    justifyContent: "flex-start"
  },
  Text_2_1675: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.33000001311302185,
    textTransform: "none"
  },
  View_2_1676: {
    width: wp("10.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.916666666666668%"),
    top: hp("64.54545454545455%"),
    justifyContent: "flex-start"
  },
  Text_2_1676: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1677: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("123.03030303030302%"),
    minHeight: hp("123.03030303030302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.416666666666664%"),
    top: hp("27.27272727272727%"),
    backgroundColor: "rgba(22, 23, 34, 1)"
  },
  ImageBackground_2_1678: {
    width: wp("31.25%"),
    minWidth: wp("31.25%"),
    height: hp("123.03030303030302%"),
    minHeight: hp("123.03030303030302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.416666666666664%"),
    top: hp("15.151515151515152%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

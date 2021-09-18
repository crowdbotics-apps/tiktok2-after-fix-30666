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
      <View style={styles.View_2_701} />
      <View style={styles.View_2_702}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6471/9a1e/76882876f47e9ddc7c654aad23a078ba"
          }}
          style={styles.ImageBackground_2_703}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e033/4c49/760970370f5fd0c466c3e2132fa834e5"
          }}
          style={styles.ImageBackground_2_704}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ee/fac8/00cb74771b52de8bc6171e1e4f5802d0"
          }}
          style={styles.ImageBackground_2_705}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dac5/3fc7/b7e95ce7881eb4a9e986a7806addb477"
          }}
          style={styles.ImageBackground_2_706}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99ca/ec49/a65986457edc2a7bf5282cdd989a8d16"
          }}
          style={styles.ImageBackground_2_707}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9431/aaac/4c269ddc698c9545a721e4be57cd6367"
          }}
          style={styles.ImageBackground_2_708}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31a9/786f/d064f9938dc7d4e4a3268581b747269f"
          }}
          style={styles.ImageBackground_2_709}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c7d/05af/f6b26745d81b31a64550e500d33047bd"
          }}
          style={styles.ImageBackground_2_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/400a/7235/287731efed78625450567e3c5983edd7"
          }}
          style={styles.ImageBackground_2_711}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ed2/af4e/d26185f73c3461e8b952a4953eab6d81"
          }}
          style={styles.ImageBackground_2_712}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad60/27e3/c5e62f462e34fd9da2c6217c3e3b062f"
          }}
          style={styles.ImageBackground_2_713}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0ff/7fbc/c59117454fecfc0cd839ec40423acdec"
          }}
          style={styles.ImageBackground_2_714}
        />
      </View>
      <View style={styles.View_2_715}>
        <View style={styles.View_2_716} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3d0/c770/8d7bf91f28aa970f60c410dae09f1e6c"
          }}
          style={styles.ImageBackground_2_717}
        />
        <View style={styles.View_2_718}>
          <Text style={styles.Text_2_718}>Use this sound</Text>
        </View>
      </View>
      <View style={styles.View_2_719}>
        <View style={styles.View_2_720} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7815/94d7/e74c0d149aa456faf96503e4bb2c345c"
          }}
          style={styles.ImageBackground_12_55}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7c4/3b6e/8d91615f791c85310e1497975d7b8c1e"
          }}
          style={styles.ImageBackground_2_722}
        />
        <View style={styles.View_2_723}>
          <Text style={styles.Text_2_723}>The Round</Text>
        </View>
        <View style={styles.View_2_724}>
          <Text style={styles.Text_2_724}>Roddy Roundicch</Text>
        </View>
        <View style={styles.View_2_725}>
          <Text style={styles.Text_2_725}>1.7M videos</Text>
        </View>
        <View style={styles.View_2_726}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a68/9f07/a283d6dc8c594cf6f00d7b680f030434"
            }}
            style={styles.ImageBackground_2_727}
          />
          <View style={styles.View_2_728}>
            <Text style={styles.Text_2_728}>Add to Favorites</Text>
          </View>
          <View style={styles.View_2_729} />
        </View>
        <View style={styles.View_2_730}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/707a/2fd0/0c937408bec25ea76850dd0240f07260"
            }}
            style={styles.ImageBackground_2_731}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4b5/c75f/f7f3182084ceb2d2a1ffbdeade9e8822"
            }}
            style={styles.ImageBackground_2_732}
          />
        </View>
      </View>
      <View style={styles.View_2_733}>
        <View style={styles.View_2_734} />
        <View style={styles.View_2_735} />
      </View>
      <View style={styles.View_2_736}>
        <View style={styles.View_2_737} />
        <View style={styles.View_2_738}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_2_739}
          />
          <View style={styles.View_2_742}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_2_743}
            />
            <View style={styles.View_2_744} />
          </View>
          <View style={styles.View_2_745} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620f/5b08/34255442dff81dcf9f83619a702b5cd5"
          }}
          style={styles.ImageBackground_2_746}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d34/dcd9/0d23fcae3e811c4c6d6df9621fb6e1de"
          }}
          style={styles.ImageBackground_2_750}
        />
        <View style={styles.View_2_755}>
          <View style={styles.View_2_756}>
            <Text style={styles.Text_2_756}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  View_2_701: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_702: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.1570931523224%")
  },
  ImageBackground_2_703: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_704: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.045092640027327%")
  },
  ImageBackground_2_705: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50.09018528005464%")
  },
  ImageBackground_2_706: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75.13661202185793%")
  },
  ImageBackground_2_707: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.49273239356884%"),
    top: hp("0%")
  },
  ImageBackground_2_708: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.49273239356884%"),
    top: hp("25.045092640027327%")
  },
  ImageBackground_2_709: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.49273239356884%"),
    top: hp("50.09018528005464%")
  },
  ImageBackground_2_710: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.49273239356884%"),
    top: hp("75.13661202185793%")
  },
  ImageBackground_2_711: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%"),
    top: hp("0%")
  },
  ImageBackground_2_712: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%"),
    top: hp("25.045092640027327%")
  },
  ImageBackground_2_713: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%"),
    top: hp("50.09018528005464%")
  },
  ImageBackground_2_714: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%"),
    top: hp("75.13661202185793%")
  },
  View_2_715: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.502415458937197%"),
    top: hp("109.28961748633881%")
  },
  View_2_716: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 67, 89, 1)"
  },
  ImageBackground_2_717: {
    width: wp("5.432339451739178%"),
    minWidth: wp("5.432339451739178%"),
    height: hp("1.9590164142879631%"),
    minHeight: hp("1.9590164142879631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.637702389039855%"),
    top: hp("2.5956284153005384%")
  },
  View_2_718: {
    width: wp("25.120772946859905%"),
    minWidth: wp("25.120772946859905%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.801932367149757%"),
    top: hp("2.322404371584682%"),
    justifyContent: "flex-start"
  },
  Text_2_718: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.25,
    textTransform: "none"
  },
  View_2_719: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("36.20218579234973%"),
    minHeight: hp("36.20218579234973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_720: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("36.110653903314976%"),
    minHeight: hp("36.110653903314976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_12_55: {
    width: wp("9.903381642512077%"),
    minWidth: wp("9.903381642512077%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4492753623188406%"),
    top: hp("6.0109289617486334%")
  },
  ImageBackground_2_722: {
    width: wp("5.070908403626963%"),
    minWidth: wp("5.070908403626963%"),
    height: hp("2.540150105627508%"),
    minHeight: hp("2.540150105627508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.72666628925121%"),
    top: hp("7.717712068818305%")
  },
  View_2_723: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.71497584541063%"),
    top: hp("15.027322404371585%"),
    justifyContent: "flex-start"
  },
  Text_2_723: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_724: {
    width: wp("24.396135265700483%"),
    minWidth: wp("24.396135265700483%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.71497584541063%"),
    top: hp("19.398907103825135%"),
    justifyContent: "flex-start"
  },
  Text_2_724: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_725: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.71497584541063%"),
    top: hp("22.131147540983605%"),
    justifyContent: "flex-start"
  },
  Text_2_725: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_726: {
    width: wp("36.71497584541063%"),
    minWidth: wp("36.71497584541063%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.71497584541063%"),
    top: hp("27.732240437158467%")
  },
  ImageBackground_2_727: {
    width: wp("2.536231884057971%"),
    minWidth: wp("2.536231884057971%"),
    height: hp("1.761900271222891%"),
    minHeight: hp("1.761900271222891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347826086956523%"),
    top: hp("0.9904371584699483%")
  },
  View_2_728: {
    width: wp("25.120772946859905%"),
    minWidth: wp("25.120772946859905%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753625%"),
    top: hp("0.6830601092896202%"),
    justifyContent: "flex-start"
  },
  Text_2_728: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_729: {
    width: wp("36.71497584541063%"),
    minWidth: wp("36.71497584541063%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(227, 227, 228, 1)",
    borderWidth: 1
  },
  View_2_730: {
    width: wp("28.985507246376812%"),
    minWidth: wp("28.985507246376812%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("15.027322404371585%")
  },
  ImageBackground_2_731: {
    width: wp("28.985507246376812%"),
    minWidth: wp("28.985507246376812%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_732: {
    width: wp("4.854860167572464%"),
    minWidth: wp("4.854860167572464%"),
    height: hp("3.332654504828114%"),
    minHeight: hp("3.332654504828114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.997565670289857%"),
    top: hp("6.530394840761609%")
  },
  View_2_733: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("117.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_734: {
    width: wp("100%"),
    height: hp("4.781420765027322%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_735: {
    width: wp("32.367149758454104%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(6, 6, 6, 1)"
  },
  View_2_736: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_737: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_738: {
    width: wp("5.917874396135265%"),
    minWidth: wp("5.917874396135265%"),
    height: hp("1.4344262295081966%"),
    minHeight: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%"),
    top: hp("2.3224043715846996%")
  },
  ImageBackground_2_739: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_742: {
    width: wp("0.36231884057971014%"),
    minWidth: wp("0.36231884057971014%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555571%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_2_743: {
    width: wp("0.966183574879227%"),
    minWidth: wp("0.966183574879227%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008604956454917989%")
  },
  View_2_744: {
    width: wp("0.6038647342995169%"),
    minWidth: wp("0.6038647342995169%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008604956454917989%"),
    backgroundColor: "rgba(62, 81, 85, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_2_745: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("0.8879781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(6, 6, 6, 1)"
  },
  ImageBackground_2_746: {
    width: wp("4.072637143342392%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.2309516948428962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499490489131%")
  },
  ImageBackground_2_750: {
    width: wp("4.533327259303291%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111129981884%")
  },
  View_2_755: {
    width: wp("14.400001194166101%"),
    height: hp("2.459016393442623%"),
    top: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600019814311595%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_756: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_756: {
    color: "rgba(23, 23, 23, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

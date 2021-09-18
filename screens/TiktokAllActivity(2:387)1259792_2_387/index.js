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
      <View style={styles.View_2_388} />
      <View style={styles.View_2_389}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98f6/6686/7dbe5044f3e216a7c6b2b2b6634418bd"
          }}
          style={styles.ImageBackground_2_390}
        />
        <View style={styles.View_2_391}>
          <Text style={styles.Text_2_391}>Notifications aren’t available</Text>
        </View>
        <View style={styles.View_2_392}>
          <Text style={styles.Text_2_392}>
            Notifications about your account will appear here
          </Text>
        </View>
      </View>
      <View style={styles.View_2_393}>
        <View style={styles.View_2_394} />
        <View style={styles.View_2_395}>
          <View style={styles.View_2_396} />
          <View style={styles.View_2_397} />
          <View style={styles.View_2_398} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/402e/8e9e/c2de5aec77df53583a37a561f6eb1fad"
            }}
            style={styles.ImageBackground_2_399}
          />
        </View>
        <View style={styles.View_2_400}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80d2/002f/661cc6cbc49f5722764b49a547c67b1d"
            }}
            style={styles.ImageBackground_2_401}
          />
          <View style={styles.View_2_402}>
            <Text style={styles.Text_2_402}>Home</Text>
          </View>
        </View>
        <View style={styles.View_2_403}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fd8/9eb8/51f4224e00874a4df1420ba2a1ab6997"
            }}
            style={styles.ImageBackground_2_404}
          />
          <View style={styles.View_2_405}>
            <Text style={styles.Text_2_405}>Discover</Text>
          </View>
        </View>
        <View style={styles.View_2_406}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b20/462c/2f0bf0d72affa5768bf016cf61fa739e"
            }}
            style={styles.ImageBackground_2_407}
          />
          <View style={styles.View_2_408}>
            <Text style={styles.Text_2_408}>Inbox</Text>
          </View>
        </View>
        <View style={styles.View_2_409}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11d/8e79/0796b846ae6d291fc21155ce0e9b2362"
            }}
            style={styles.ImageBackground_2_410}
          />
          <View style={styles.View_2_411}>
            <Text style={styles.Text_2_411}>Me</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_412}>
        <View style={styles.View_2_413} />
        <View style={styles.View_2_414}>
          <Text style={styles.Text_2_414}>All activity</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/453c/3588/d16a12ee282b1e5900eb6cddd8cc3ed2"
          }}
          style={styles.ImageBackground_2_415}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6f9/e77e/f2eb86319e63b4712b90a613b29567dd"
          }}
          style={styles.ImageBackground_2_416}
        />
      </View>
      <View style={styles.View_2_417}>
        <View style={styles.View_2_418} />
        <View style={styles.View_2_419} />
      </View>
      <View style={styles.View_2_420}>
        <View style={styles.View_2_421} />
        <View style={styles.View_2_422}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_2_423}
          />
          <View style={styles.View_2_426}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_2_427}
            />
            <View style={styles.View_2_428} />
          </View>
          <View style={styles.View_2_429} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620f/5b08/34255442dff81dcf9f83619a702b5cd5"
          }}
          style={styles.ImageBackground_2_430}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d34/dcd9/0d23fcae3e811c4c6d6df9621fb6e1de"
          }}
          style={styles.ImageBackground_2_434}
        />
        <View style={styles.View_2_439}>
          <View style={styles.View_2_440}>
            <Text style={styles.Text_2_440}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  View_2_388: {
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
  View_2_389: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    height: hp("19.4672131147541%"),
    minHeight: hp("19.4672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869565%"),
    top: hp("38.59289617486339%")
  },
  ImageBackground_2_390: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    height: hp("9.337067734348318%"),
    minHeight: hp("9.337067734348318%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.985507246376812%"),
    top: hp("0%")
  },
  View_2_391: {
    width: wp("53.14009661835749%"),
    minWidth: wp("53.14009661835749%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.386473429951694%"),
    top: hp("12.773224043715842%"),
    justifyContent: "flex-start"
  },
  Text_2_391: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_392: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.28142076502732%"),
    justifyContent: "flex-start"
  },
  Text_2_392: {
    color: "rgba(124, 125, 131, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_393: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111.0655737704918%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_394: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.293715596850452%"),
    minHeight: hp("11.293715596850452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04507596375513856%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_395: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.806763285024154%"),
    top: hp("1.1612021857923622%")
  },
  View_2_396: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%"),
    top: hp("0%"),
    backgroundColor: "rgba(230, 67, 109, 1)"
  },
  View_2_397: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(101, 210, 233, 1)"
  },
  View_2_398: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.845410628019323%"),
    top: hp("0%"),
    backgroundColor: "rgba(22, 23, 34, 1)"
  },
  ImageBackground_2_399: {
    width: wp("3.140096618357488%"),
    minWidth: wp("3.140096618357488%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%"),
    top: hp("1.0587431693988947%")
  },
  View_2_400: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("5.122950819672131%"),
    minHeight: hp("5.122950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.642512077294686%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_2_401: {
    width: wp("5.613994598388672%"),
    minWidth: wp("5.613994598388672%"),
    height: hp("2.858548346764403%"),
    minHeight: hp("2.858548346764403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439613%"),
    top: hp("0%")
  },
  View_2_402: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.483606557377044%"),
    justifyContent: "flex-start"
  },
  Text_2_402: {
    color: "rgba(138, 139, 143, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_2_403: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.122950819672131%"),
    minHeight: hp("5.122950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.24154589371981%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_2_404: {
    width: wp("4.936712145229468%"),
    minWidth: wp("4.936712145229468%"),
    height: hp("2.8486741696550544%"),
    minHeight: hp("2.8486741696550544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.294685990338163%"),
    top: hp("0%")
  },
  View_2_405: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.483606557377044%"),
    justifyContent: "flex-start"
  },
  Text_2_405: {
    color: "rgba(138, 139, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_2_406: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    height: hp("4.9863387978142075%"),
    minHeight: hp("4.9863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.78743961352657%"),
    top: hp("1.092896174863398%")
  },
  ImageBackground_2_407: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.8044463506813258%"),
    minHeight: hp("2.8044463506813258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.845410628019323%"),
    top: hp("0%")
  },
  View_2_408: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.3469945355191157%"),
    justifyContent: "flex-start"
  },
  Text_2_408: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_2_409: {
    width: wp("4.40007592168983%"),
    minWidth: wp("4.40007592168983%"),
    height: hp("5.122950819672131%"),
    minHeight: hp("5.122950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.80193236714976%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_2_410: {
    width: wp("4.40007592168983%"),
    minWidth: wp("4.40007592168983%"),
    height: hp("2.8255173417388417%"),
    minHeight: hp("2.8255173417388417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_411: {
    width: wp("3.6231884057971016%"),
    minWidth: wp("3.6231884057971016%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("3.483606557377044%"),
    justifyContent: "flex-start"
  },
  Text_2_411: {
    color: "rgba(138, 139, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_2_412: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_413: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_414: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.64734299516908%"),
    top: hp("7.5136612021857925%"),
    justifyContent: "flex-start"
  },
  Text_2_414: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_415: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    height: hp("0.9562844135722176%"),
    minHeight: hp("0.9562844135722176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.17874396135265%"),
    top: hp("8.469945355191257%")
  },
  ImageBackground_2_416: {
    width: wp("5.435623869227902%"),
    minWidth: wp("5.435623869227902%"),
    height: hp("2.663962828005598%"),
    minHeight: hp("2.663962828005598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.4584506859526%"),
    top: hp("7.650273224043716%")
  },
  View_2_417: {
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
  View_2_418: {
    width: wp("100%"),
    height: hp("4.781420765027322%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_419: {
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
  View_2_420: {
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
  View_2_421: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_422: {
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
  ImageBackground_2_423: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_426: {
    width: wp("0.36231884057971014%"),
    minWidth: wp("0.36231884057971014%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555571%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_2_427: {
    width: wp("0.966183574879227%"),
    minWidth: wp("0.966183574879227%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008609125522967886%")
  },
  View_2_428: {
    width: wp("0.6038647342995169%"),
    minWidth: wp("0.6038647342995169%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008609125522967886%"),
    backgroundColor: "rgba(62, 81, 85, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_2_429: {
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
  ImageBackground_2_430: {
    width: wp("4.072637143342392%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.2309516948428962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499490489131%")
  },
  ImageBackground_2_434: {
    width: wp("4.533327259303291%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111129981884%")
  },
  View_2_439: {
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
  View_2_440: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_440: {
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

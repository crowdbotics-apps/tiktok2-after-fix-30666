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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/547e/1086/8bea3151389c981fef388b1e8e7ffae2"
        }}
        style={styles.ImageBackground_2_1197}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1198}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1704"))
        }
      >
        <View style={styles.View_I2_1198_2_1700}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c02/1684/f076eee6481a24a269a1a63af80d7931"
            }}
            style={styles.ImageBackground_I2_1198_2_1701}
          />
          <View style={styles.View_I2_1198_2_1702}>
            <View style={styles.View_I2_1198_2_1703}>
              <Text style={styles.Text_I2_1198_2_1703}>
                Just Good Music 24/7 Stay See Live Radio 🎧
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1199}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1756"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84d6/85a0/ab26b979fc70a43fadc235181560371f"
          }}
          style={styles.ImageBackground_I2_1199_2_1749}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1200}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1732"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/017d/7200/035733cb2a454276b82f6c27aad3d2bd"
          }}
          style={styles.ImageBackground_I2_1200_2_1728}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1201}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1807"))
        }
      >
        <View style={styles.View_I2_1201_2_1795}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0bc/1078/761f926fd7154f97b5dceeaa578eb2bd"
            }}
            style={styles.ImageBackground_I2_1201_2_1796}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4183/589c/c2e744abacf5d2fe72053edd9a873115"
            }}
            style={styles.ImageBackground_I2_1201_2_1797}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60eb/5d48/40df21fc5b4049a438ac86055c9f4e58"
            }}
            style={styles.ImageBackground_I2_1201_2_1798}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2023/b0ff/f989a7b475fdeca8782aa4ca1c82ef84"
            }}
            style={styles.ImageBackground_I2_1201_2_1799}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0bc/1078/761f926fd7154f97b5dceeaa578eb2bd"
            }}
            style={styles.ImageBackground_I2_1201_2_1800}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4183/589c/c2e744abacf5d2fe72053edd9a873115"
            }}
            style={styles.ImageBackground_I2_1201_2_1801}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60eb/5d48/40df21fc5b4049a438ac86055c9f4e58"
            }}
            style={styles.ImageBackground_I2_1201_2_1802}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2023/b0ff/f989a7b475fdeca8782aa4ca1c82ef84"
            }}
            style={styles.ImageBackground_I2_1201_2_1803}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e01c/0d2f/65f1f713bb6d41122820e2680b3403d4"
            }}
            style={styles.ImageBackground_I2_1201_2_1804}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_2_1202}>
        <View style={styles.View_2_1203}>
          <Text style={styles.Text_2_1203}>@craig_love</Text>
        </View>
        <View style={styles.View_2_1204}>
          <Text style={styles.Text_2_1204}>
            The most satisfying Job #fyp #satisfying #roadmarking
          </Text>
        </View>
      </View>
      <View style={styles.View_2_1205}>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1206}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_870"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49b8/f4f6/28f6da18b674106f3140132b63233799"
            }}
            style={styles.ImageBackground_2_1207}
          />
          <View style={styles.View_2_1210}>
            <Text style={styles.Text_2_1210}>Share</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1211}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_1051"))
          }
        >
          <View style={styles.View_2_1212}>
            <Text style={styles.Text_2_1212}>578</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e163/e429/09bca0867e37866c9688b709382bb7b2"
            }}
            style={styles.ImageBackground_2_1213}
          />
        </TouchableOpacity>
        <View style={styles.View_2_1216}>
          <View style={styles.View_2_1217}>
            <Text style={styles.Text_2_1217}>328.7K</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_1221}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3721/c54a/13fd8066d7d308c6e7abececa8b7baa4"
          }}
          style={styles.ImageBackground_2_1222}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7cf/b31d/3ac3518ed71f05bf19586eb005c215ef"
          }}
          style={styles.ImageBackground_2_1223}
        />
      </View>
      <View style={styles.View_2_1226}>
        <View style={styles.View_2_1227} />
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1228}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_485"))
          }
        >
          <View style={styles.View_2_1229} />
          <View style={styles.View_2_1230} />
          <View style={styles.View_2_1231} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fb3/fa39/bf9633768341bdb4925bd64627e1d7ea"
            }}
            style={styles.ImageBackground_2_1232}
          />
        </TouchableOpacity>
        <View style={styles.View_2_1233}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7b3/4527/bf722dbdae5a40f0bf23bcafaa555014"
            }}
            style={styles.ImageBackground_2_1234}
          />
          <View style={styles.View_2_1235}>
            <Text style={styles.Text_2_1235}>Home</Text>
          </View>
        </View>
        <View style={styles.View_2_1236}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b8/35fe/0d415c35f2d3baaaa917ca8ce916abc5"
            }}
            style={styles.ImageBackground_2_1237}
          />
          <View style={styles.View_2_1238}>
            <Text style={styles.Text_2_1238}>Discover</Text>
          </View>
        </View>
        <View style={styles.View_2_1239}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc70/675a/ca5cba70a01abcafbfe3c8cf40062001"
            }}
            style={styles.ImageBackground_2_1240}
          />
          <View style={styles.View_2_1241}>
            <Text style={styles.Text_2_1241}>Inbox</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1242}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_248"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f38/69df/4caf71b5936fab36773cf11626ce4e86"
            }}
            style={styles.ImageBackground_2_1243}
          />
          <View style={styles.View_2_1244}>
            <Text style={styles.Text_2_1244}>Me</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_2_1245}>
        <View style={styles.View_2_1246}>
          <Text style={styles.Text_2_1246}>Following</Text>
        </View>
        <View style={styles.View_2_1247}>
          <Text style={styles.Text_2_1247}>For You</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c8f/4480/6b71d28b6a81dc33faedbd7665be158d"
          }}
          style={styles.ImageBackground_2_1248}
        />
      </View>
      <View style={styles.View_2_1249}>
        <View style={styles.View_2_1250} />
        <View style={styles.View_2_1251} />
      </View>
      <View style={styles.View_2_1252}>
        <View style={styles.View_2_1253} />
        <View style={styles.View_2_1254}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_2_1255}
          />
          <View style={styles.View_2_1258}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_2_1259}
            />
            <View style={styles.View_2_1260} />
          </View>
          <View style={styles.View_2_1261} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_2_1262}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_2_1266}
        />
        <View style={styles.View_2_1271}>
          <View style={styles.View_2_1272}>
            <Text style={styles.Text_2_1272}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_2_1197: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_2_1198: {
    width: wp("48.792270531400966%"),
    minWidth: wp("48.792270531400966%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637681%"),
    top: hp("106.69398907103825%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1198_2_1700: {
    flexGrow: 1,
    width: wp("48.792270531400966%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1198_2_1701: {
    width: wp("2.898550724637681%"),
    minWidth: wp("2.898550724637681%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%")
  },
  View_I2_1198_2_1702: {
    width: wp("43.71980676328502%"),
    minWidth: wp("43.71980676328502%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0724637681159415%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1198_2_1703: {
    width: wp("119.56521739130434%"),
    minWidth: wp("119.56521739130434%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_1198_2_1703: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1199: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.65217391304348%"),
    top: hp("92.41803278688525%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1199_2_1749: {
    flexGrow: 1,
    width: wp("14.022651156365583%"),
    height: hp("11.306660553145278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.676328502415444%"),
    top: hp("4.151908165770152%")
  },
  TouchableOpacity_2_1200: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.99033816425121%"),
    top: hp("102.33697943348703%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1200_2_1728: {
    flexGrow: 1,
    width: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_2_1201: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.78260869565217%"),
    top: hp("67.28142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1201_2_1795: {
    flexGrow: 1,
    width: wp("8.57487922705314%"),
    height: hp("4.420645771130838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3212560386473484%"),
    top: hp("2.092955542392417%")
  },
  ImageBackground_I2_1201_2_1796: {
    width: wp("7.510754573299869e-8%"),
    minWidth: wp("7.510754573299869e-8%"),
    height: hp("0.6489071038251366%"),
    minHeight: hp("0.6489071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.287425792159667%"),
    top: hp("0.9543663817025276%")
  },
  ImageBackground_I2_1201_2_1797: {
    width: wp("1.1473429951690821%"),
    minWidth: wp("1.1473429951690821%"),
    height: hp("1.411422090313863e-8%"),
    minHeight: hp("1.411422090313863e-8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.86487498260351%"),
    top: hp("2.2103231461321826%")
  },
  ImageBackground_I2_1201_2_1798: {
    width: wp("0.8112940235414368%"),
    minWidth: wp("0.8112940235414368%"),
    height: hp("0.45884661987179615%"),
    minHeight: hp("0.45884661987179615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.831202447126444%"),
    top: hp("1.0493877806950138%")
  },
  ImageBackground_I2_1201_2_1799: {
    width: wp("0.8112939659524079%"),
    minWidth: wp("0.8112939659524079%"),
    height: hp("0.4588466524426403%"),
    minHeight: hp("0.4588466524426403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.019908481174042%"),
    top: hp("2.8173894830088813%")
  },
  ImageBackground_I2_1201_2_1800: {
    width: wp("7.510754573299869e-8%"),
    minWidth: wp("7.510754573299869e-8%"),
    height: hp("0.6489071038251366%"),
    minHeight: hp("0.6489071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.287425792159667%"),
    top: hp("3.2762204363046408%")
  },
  ImageBackground_I2_1201_2_1801: {
    width: wp("1.1473429951690821%"),
    minWidth: wp("1.1473429951690821%"),
    height: hp("1.411422090313863e-8%"),
    minHeight: hp("1.411422090313863e-8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5568977392813963%"),
    top: hp("2.2103398224043787%")
  },
  ImageBackground_I2_1201_2_1802: {
    width: wp("0.8112940235414368%"),
    minWidth: wp("0.8112940235414368%"),
    height: hp("0.45884661987179615%"),
    minHeight: hp("0.45884661987179615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2985955943231886%"),
    top: hp("2.8173894830088813%")
  },
  ImageBackground_I2_1201_2_1803: {
    width: wp("0.8112939659524079%"),
    minWidth: wp("0.8112939659524079%"),
    height: hp("0.4588466524426403%"),
    minHeight: hp("0.4588466524426403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2985955799259443%"),
    top: hp("1.1444091796875%")
  },
  ImageBackground_I2_1201_2_1804: {
    width: wp("8.57487922705314%"),
    height: hp("4.420645771130838%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_1202: {
    width: wp("80.19323671497585%"),
    minWidth: wp("80.19323671497585%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637681%"),
    top: hp("96.03825136612022%")
  },
  View_2_1203: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1203: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1204: {
    width: wp("80.19323671497585%"),
    minWidth: wp("80.19323671497585%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_2_1204: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1205: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    height: hp("28.278688524590162%"),
    minHeight: hp("28.278688524590162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.56038647342996%"),
    top: hp("70.21857923497268%")
  },
  TouchableOpacity_2_1206: {
    width: wp("8.51449275362319%"),
    minWidth: wp("8.51449275362319%"),
    height: hp("6.898907103825136%"),
    minHeight: hp("6.898907103825136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9057971014492807%"),
    top: hp("21.379781420765028%")
  },
  ImageBackground_2_1207: {
    width: wp("8.231547258902287%"),
    minWidth: wp("8.231547258902287%"),
    height: hp("3.6668305839997175%"),
    minHeight: hp("3.6668305839997175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1210: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06038647342994352%"),
    top: hp("4.8497267759562845%"),
    justifyContent: "flex-start"
  },
  Text_2_1210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1211: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("7.308743169398907%"),
    minHeight: hp("7.308743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.845410628019323%"),
    top: hp("10.450819672131146%")
  },
  View_2_1212: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5700483091787447%"),
    top: hp("5.259562841530055%"),
    justifyContent: "flex-start"
  },
  Text_2_1212: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1213: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("4.539093163495507%"),
    minHeight: hp("4.539093163495507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1216: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1217: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601091%"),
    justifyContent: "flex-start"
  },
  Text_2_1217: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1221: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("7.991803278688526%"),
    minHeight: hp("7.991803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.95652173913044%"),
    top: hp("59.15300546448088%")
  },
  ImageBackground_2_1222: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_1223: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574894%"),
    top: hp("5.12295081967212%")
  },
  View_2_1226: {
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
  View_2_1227: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.293715596850452%"),
    minHeight: hp("11.293715596850452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04508430189123658%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  TouchableOpacity_2_1228: {
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
  View_2_1229: {
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
  View_2_1230: {
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
  View_2_1231: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.845410628019323%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_1232: {
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
  View_2_1233: {
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
  ImageBackground_2_1234: {
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
  View_2_1235: {
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
  Text_2_1235: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_2_1236: {
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
  ImageBackground_2_1237: {
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
  View_2_1238: {
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
  Text_2_1238: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_2_1239: {
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
  ImageBackground_2_1240: {
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
  View_2_1241: {
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
  Text_2_1241: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  TouchableOpacity_2_1242: {
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
  ImageBackground_2_1243: {
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
  View_2_1244: {
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
  Text_2_1244: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_2_1245: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_1246: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.88405797101449%"),
    top: hp("1.7759562841530059%"),
    justifyContent: "flex-start"
  },
  Text_2_1246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1247: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.864734299516904%"),
    top: hp("1.502732240437159%"),
    justifyContent: "flex-start"
  },
  Text_2_1247: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_2_1248: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.81159420289855%"),
    top: hp("2.254098360655738%")
  },
  View_2_1249: {
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
  View_2_1250: {
    width: wp("100%"),
    height: hp("4.781420765027322%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_1251: {
    width: wp("32.367149758454104%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(233, 233, 233, 1)"
  },
  View_2_1252: {
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
  View_2_1253: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_1254: {
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
  ImageBackground_2_1255: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1258: {
    width: wp("0.36231884057971014%"),
    minWidth: wp("0.36231884057971014%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555571%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_2_1259: {
    width: wp("0.966183574879227%"),
    minWidth: wp("0.966183574879227%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008604956454917989%")
  },
  View_2_1260: {
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
  View_2_1261: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("0.8879781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_1262: {
    width: wp("4.072637143342392%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.2309516948428962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499490489131%")
  },
  ImageBackground_2_1266: {
    width: wp("4.533327259303291%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111129981884%")
  },
  View_2_1271: {
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
  View_2_1272: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1272: {
    color: "rgba(255, 255, 255, 1)",
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

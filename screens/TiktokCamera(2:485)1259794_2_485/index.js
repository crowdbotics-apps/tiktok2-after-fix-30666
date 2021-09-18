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
      <View style={styles.View_2_486}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09a2/dc44/f6b54a2bc60ca8dd71a712efec438e37"
          }}
          style={styles.ImageBackground_2_487}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e524/0bca/ca467e85c264b12cd942bc5bf5374340"
          }}
          style={styles.ImageBackground_2_488}
        />
      </View>
      <View style={styles.View_2_489} />
      <View style={styles.View_2_490}>
        <View style={styles.View_2_491}>
          <Text style={styles.Text_2_491}>60s</Text>
        </View>
        <View style={styles.View_2_492}>
          <Text style={styles.Text_2_492}>15s</Text>
        </View>
        <View style={styles.View_2_493}>
          <Text style={styles.Text_2_493}>Templates</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb1/6e88/d57b9cd1a21c37e83e12f25e94337c11"
          }}
          style={styles.ImageBackground_2_494}
        />
      </View>
      <View style={styles.View_2_495}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7263/d511/6fbd14522f72d183a3bf3a5359306854"
          }}
          style={styles.ImageBackground_2_496}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/248c/2b2b/e0741a06567fa9ac5456e54d2bd58b7b"
          }}
          style={styles.ImageBackground_2_497}
        />
        <View style={styles.View_2_499}>
          <View style={styles.View_2_500}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e18/b89e/134f30c9896a0c4fce5c07d25c64850e"
              }}
              style={styles.ImageBackground_2_501}
            />
            <View style={styles.View_2_502}>
              <Text style={styles.Text_2_502}>Flip</Text>
            </View>
          </View>
          <View style={styles.View_2_503}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5025/164b/33c294a55b356d6fbf03af4bc97bc0ad"
              }}
              style={styles.ImageBackground_2_504}
            />
            <View style={styles.View_2_505}>
              <Text style={styles.Text_2_505}>Speed</Text>
            </View>
          </View>
          <View style={styles.View_2_506}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b19/22dc/7727d9ba4c5fbd4f1eb7f2fb9a1c5c98"
              }}
              style={styles.ImageBackground_2_507}
            />
            <View style={styles.View_2_508}>
              <Text style={styles.Text_2_508}>Beauty</Text>
            </View>
          </View>
          <View style={styles.View_2_509}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a4f/1a0d/9a70c8690f0ea0ae8e96b5fd6318f339"
              }}
              style={styles.ImageBackground_2_510}
            />
            <View style={styles.View_2_511}>
              <Text style={styles.Text_2_511}>Filters</Text>
            </View>
          </View>
          <View style={styles.View_2_512}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e16/9ef7/2d5213e277d794dc951f7241ed011720"
              }}
              style={styles.ImageBackground_2_513}
            />
            <View style={styles.View_2_514}>
              <Text style={styles.Text_2_514}>Timer</Text>
            </View>
          </View>
          <View style={styles.View_2_515}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bee0/eb74/a754833846f3d9dba7257ca57faa5267"
              }}
              style={styles.ImageBackground_2_516}
            />
            <View style={styles.View_2_517}>
              <Text style={styles.Text_2_517}>Flash</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_518}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abd5/f059/7ba7031d2a63bbafed3cd74711877708"
            }}
            style={styles.ImageBackground_2_519}
          />
          <View style={styles.View_2_520}>
            <Text style={styles.Text_2_520}>Sounds</Text>
          </View>
        </View>
        <View style={styles.View_2_521}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edcc/6fa8/39130ffa3d0ded7d46d5ff79ead68c07"
            }}
            style={styles.ImageBackground_2_522}
          />
          <View style={styles.View_2_525}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a0a/1640/f8aa6287de3948b4aadf059a660919af"
              }}
              style={styles.ImageBackground_2_526}
            />
            <View style={styles.View_2_533}>
              <Text style={styles.Text_2_533}>Effects</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_2_534}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_700"))
            }
          >
            <View style={styles.View_2_535}>
              <View style={styles.View_2_536}>
                <View style={styles.View_2_537} />
                <View style={styles.View_2_538} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cde9/858c/6fef51d20b4ba045bec6d2514a6cc495"
                  }}
                  style={styles.ImageBackground_2_539}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78f6/86b7/cca3deceecf5c1c89e83e4f331c13ac4"
                  }}
                  style={styles.ImageBackground_2_540}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45ba/e08c/b45dab2e32dfb56b3bd073cab331016d"
                  }}
                  style={styles.ImageBackground_2_541}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bbc/4ae4/72646217c8a1ffcb1c3ced30c5c5aa30"
                  }}
                  style={styles.ImageBackground_2_542}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/571c/912d/f3459369ec822035242ac8cb81d57275"
                  }}
                  style={styles.ImageBackground_2_543}
                />
              </View>
              <View style={styles.View_2_544} />
            </View>
            <View style={styles.View_2_545}>
              <Text style={styles.Text_2_545}>Upload</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_2_546} />
      </View>
      <View style={styles.View_2_547}>
        <View style={styles.View_2_548} />
        <View style={styles.View_2_549} />
      </View>
      <View style={styles.View_2_550}>
        <View style={styles.View_2_551} />
        <View style={styles.View_2_552}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_2_553}
          />
          <View style={styles.View_2_556}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_2_557}
            />
            <View style={styles.View_2_558} />
          </View>
          <View style={styles.View_2_559} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_2_560}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_2_564}
        />
        <View style={styles.View_2_569}>
          <View style={styles.View_2_570}>
            <Text style={styles.Text_2_570}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  View_2_486: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.02898550724638%"),
    top: hp("94.53551912568307%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_487: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.685990338164245%"),
    top: hp("9.22131147540982%")
  },
  ImageBackground_2_488: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_489: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_490: {
    width: wp("43.23671497584541%"),
    minWidth: wp("43.23671497584541%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("112.97814207650273%")
  },
  View_2_491: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_491: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_492: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.04347826086957%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_492: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_493: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.086956521739125%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_493: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_494: {
    width: wp("1.2077294685990339%"),
    minWidth: wp("1.2077294685990339%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.579710144927532%"),
    top: hp("3.2786885245901516%")
  },
  View_2_495: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("103.27868852459017%"),
    minHeight: hp("103.27868852459017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601093%")
  },
  ImageBackground_2_496: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("103.27868852459017%"),
    minHeight: hp("103.27868852459017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_497: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743163%")
  },
  View_2_499: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    height: hp("48.224043715846996%"),
    minHeight: hp("48.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.4927536231884%"),
    top: hp("5.05464480874317%")
  },
  View_2_500: {
    width: wp("6.521779673111036%"),
    minWidth: wp("6.521779673111036%"),
    height: hp("5.669398907103825%"),
    minHeight: hp("5.669398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("0%")
  },
  ImageBackground_2_501: {
    width: wp("6.521779673111036%"),
    minWidth: wp("6.521779673111036%"),
    height: hp("3.0054530159371797%"),
    minHeight: hp("3.0054530159371797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_502: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2077294685990267%"),
    top: hp("4.030054644808741%"),
    justifyContent: "flex-start"
  },
  Text_2_502: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_503: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("5.806010928961749%"),
    minHeight: hp("5.806010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2415458937198025%"),
    top: hp("8.401639344262295%")
  },
  ImageBackground_2_504: {
    width: wp("5.848369966958456%"),
    minWidth: wp("5.848369966958456%"),
    height: hp("3.278703637461845%"),
    minHeight: hp("3.278703637461845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("0%")
  },
  View_2_505: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.166666666666668%"),
    justifyContent: "flex-start"
  },
  Text_2_505: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_506: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    height: hp("5.792936731557377%"),
    minHeight: hp("5.792936731557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.88465889685792%")
  },
  ImageBackground_2_507: {
    width: wp("6.03129990434877%"),
    minWidth: wp("6.03129990434877%"),
    height: hp("3.3004724262842067%"),
    minHeight: hp("3.3004724262842067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%"),
    top: hp("0%")
  },
  View_2_508: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.153592469262296%"),
    justifyContent: "flex-start"
  },
  Text_2_508: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_509: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("5.669398907103825%"),
    minHeight: hp("5.669398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2415458937198025%"),
    top: hp("25.478142076502735%")
  },
  ImageBackground_2_510: {
    width: wp("5.797102370699823%"),
    minWidth: wp("5.797102370699823%"),
    height: hp("3.142076763298993%"),
    minHeight: hp("3.142076763298993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("0%")
  },
  View_2_511: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.030054644808743%"),
    justifyContent: "flex-start"
  },
  Text_2_511: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_512: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    height: hp("5.806010928961749%"),
    minHeight: hp("5.806010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("33.94808743169399%")
  },
  ImageBackground_2_513: {
    width: wp("5.453514246549007%"),
    minWidth: wp("5.453514246549007%"),
    height: hp("3.2786890457236697%"),
    minHeight: hp("3.2786890457236697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439605%"),
    top: hp("0%")
  },
  View_2_514: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.166666666666664%"),
    justifyContent: "flex-start"
  },
  Text_2_514: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_515: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("5.806010928961749%"),
    minHeight: hp("5.806010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%"),
    top: hp("42.41803278688525%")
  },
  ImageBackground_2_516: {
    width: wp("4.501086156725307%"),
    minWidth: wp("4.501086156725307%"),
    height: hp("3.287210099684085%"),
    minHeight: hp("3.287210099684085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("0%")
  },
  View_2_517: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.166666666666664%"),
    justifyContent: "flex-start"
  },
  Text_2_517: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_518: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.51207729468599%"),
    top: hp("5.464480874316939%")
  },
  ImageBackground_2_519: {
    width: wp("3.260869565217391%"),
    minWidth: wp("3.260869565217391%"),
    height: hp("1.8197514320331847%"),
    minHeight: hp("1.8197514320331847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1952791474556026%")
  },
  View_2_520: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.589371980676333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_520: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_521: {
    width: wp("68.29710144927536%"),
    minWidth: wp("68.29710144927536%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.881642512077295%"),
    top: hp("87.8415300546448%")
  },
  ImageBackground_2_522: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.456521739130434%"),
    top: hp("0%")
  },
  View_2_525: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("7.063735378244536%"),
    minHeight: hp("7.063735378244536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.4836065573770583%")
  },
  ImageBackground_2_526: {
    width: wp("8.091787439613526%"),
    minWidth: wp("8.091787439613526%"),
    height: hp("4.576502732240438%"),
    minHeight: hp("4.576502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18115942028985188%"),
    top: hp("0%")
  },
  View_2_533: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.287779094091519%"),
    justifyContent: "flex-start"
  },
  Text_2_533: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_534: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    height: hp("7.001699645662568%"),
    minHeight: hp("7.001699645662568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.84299516908213%"),
    top: hp("3.278688524590166%")
  },
  View_2_535: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371981672%"),
    top: hp("0%")
  },
  View_2_536: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874395908%"),
    top: hp("0.2732240437158566%")
  },
  View_2_537: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(157, 200, 235, 1)"
  },
  View_2_538: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(157, 200, 235, 1)"
  },
  ImageBackground_2_539: {
    width: wp("1.8290167269499404%"),
    minWidth: wp("1.8290167269499404%"),
    height: hp("1.034443886553655%"),
    minHeight: hp("1.034443886553655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.273843221618378%"),
    top: hp("0.3633426186816848%")
  },
  ImageBackground_2_540: {
    width: wp("6.8509567187028235%"),
    minWidth: wp("6.8509567187028235%"),
    height: hp("2.344009785052857%"),
    minHeight: hp("2.344009785052857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3377679649758534%"),
    top: hp("2.299090943049862%")
  },
  ImageBackground_2_541: {
    width: wp("5.8924757915994395%"),
    minWidth: wp("5.8924757915994395%"),
    height: hp("2.345004889483009%"),
    minHeight: hp("2.345004889483009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3377679649758534%"),
    top: hp("2.2980903667178865%")
  },
  ImageBackground_2_542: {
    width: wp("7.063178739685943%"),
    minWidth: wp("7.063178739685943%"),
    height: hp("2.344009785052857%"),
    minHeight: hp("2.344009785052857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2945020003019323%"),
    top: hp("1.9690675162226654%")
  },
  ImageBackground_2_543: {
    width: wp("6.075006752198445%"),
    minWidth: wp("6.075006752198445%"),
    height: hp("2.345004889483009%"),
    minHeight: hp("2.345004889483009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2945020003019323%"),
    top: hp("1.9680669398907042%")
  },
  View_2_544: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2
  },
  View_2_545: {
    width: wp("8.454106280193237%"),
    minWidth: wp("8.454106280193237%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.225743361509558%"),
    justifyContent: "flex-start"
  },
  Text_2_545: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_546: {
    width: wp("96.1352657004831%"),
    minWidth: wp("96.1352657004831%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.932367149758454%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_547: {
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
  View_2_548: {
    width: wp("100%"),
    height: hp("4.781420765027322%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_549: {
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
  View_2_550: {
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
  View_2_551: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_552: {
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
  ImageBackground_2_553: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_556: {
    width: wp("0.36231884057971014%"),
    minWidth: wp("0.36231884057971014%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555571%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_2_557: {
    width: wp("0.966183574879227%"),
    minWidth: wp("0.966183574879227%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008609125522967886%")
  },
  View_2_558: {
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
  View_2_559: {
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
  ImageBackground_2_560: {
    width: wp("4.072637143342392%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.2309516948428962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499490489131%")
  },
  ImageBackground_2_564: {
    width: wp("4.533327259303291%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111129981884%")
  },
  View_2_569: {
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
  View_2_570: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_570: {
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

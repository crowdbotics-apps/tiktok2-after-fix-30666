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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b57b/be38/0959768fbe836fce7603564bb90de679"
        }}
        style={styles.ImageBackground_2_758}
      />
      <View style={styles.View_2_759}>
        <View style={styles.View_2_760}>
          <Text style={styles.Text_2_760}>328.7K</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b87/4d02/bcd2ce4135f3606e0f4f9c79ec4a27ee"
          }}
          style={styles.ImageBackground_2_761}
        />
      </View>
      <View style={styles.View_2_764}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3721/c54a/13fd8066d7d308c6e7abececa8b7baa4"
          }}
          style={styles.ImageBackground_2_765}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7cf/b31d/3ac3518ed71f05bf19586eb005c215ef"
          }}
          style={styles.ImageBackground_2_766}
        />
      </View>
      <View style={styles.View_2_769}>
        <View style={styles.View_2_770} />
        <View style={styles.View_2_771}>
          <Text style={styles.Text_2_771}>Cancel</Text>
        </View>
      </View>
      <View style={styles.View_2_772}>
        <View style={styles.View_2_773} />
        <View style={styles.View_2_774}>
          <Text style={styles.Text_2_774}>Share to</Text>
        </View>
        <View style={styles.View_2_775}>
          <View style={styles.View_2_776}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fc/7aa9/104a913a75f68b8a483d98dfc1e95d5a"
              }}
              style={styles.ImageBackground_2_777}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3797/e844/05a4008027a339e774583e9efa0e8614"
              }}
              style={styles.ImageBackground_2_778}
            />
            <View style={styles.View_2_779}>
              <Text style={styles.Text_2_779}>Report</Text>
            </View>
          </View>
          <View style={styles.View_2_780}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fc/7aa9/104a913a75f68b8a483d98dfc1e95d5a"
              }}
              style={styles.ImageBackground_2_781}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d95/7e01/f1b4d46ef6b3df1a284575605d617543"
              }}
              style={styles.ImageBackground_2_782}
            />
            <View style={styles.View_2_783}>
              <Text style={styles.Text_2_783}>Save video</Text>
            </View>
          </View>
          <View style={styles.View_2_784}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fc/7aa9/104a913a75f68b8a483d98dfc1e95d5a"
              }}
              style={styles.ImageBackground_2_785}
            />
            <View style={styles.View_2_786}>
              <Text style={styles.Text_2_786}>Not interested</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efaf/3c55/6c8a2ed561dfd914cd1e05724107f802"
              }}
              style={styles.ImageBackground_2_787}
            />
          </View>
          <View style={styles.View_2_788}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fc/7aa9/104a913a75f68b8a483d98dfc1e95d5a"
              }}
              style={styles.ImageBackground_2_789}
            />
            <View style={styles.View_2_790}>
              <Text style={styles.Text_2_790}>Duet</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c3/2c7a/f0a64a9e07d3652c85500dbd9b9415af"
              }}
              style={styles.ImageBackground_2_791}
            />
          </View>
          <View style={styles.View_2_792}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fc/7aa9/104a913a75f68b8a483d98dfc1e95d5a"
              }}
              style={styles.ImageBackground_2_793}
            />
            <View style={styles.View_2_794}>
              <Text style={styles.Text_2_794}>React</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73e0/6d14/d0bc44fe7a1d83f3f962a51adfb329c6"
              }}
              style={styles.ImageBackground_2_795}
            />
          </View>
          <View style={styles.View_2_796}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fc/7aa9/104a913a75f68b8a483d98dfc1e95d5a"
              }}
              style={styles.ImageBackground_2_797}
            />
            <View style={styles.View_2_798}>
              <Text style={styles.Text_2_798}>Add to Favorites</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8860/3b26/9a59f9d645b9fb5519904ebfd2f187ee"
              }}
              style={styles.ImageBackground_2_799}
            />
          </View>
        </View>
        <View style={styles.View_2_800}>
          <View style={styles.View_2_801}>
            <View style={styles.View_2_802}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3335/b29b/54fa799e51adba392159032fcaa63223"
                }}
                style={styles.ImageBackground_2_803}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca45/4e7b/49a80b7e80c91f60faef24dd4e0206c7"
                }}
                style={styles.ImageBackground_2_804}
              />
            </View>
            <View style={styles.View_2_808}>
              <Text style={styles.Text_2_808}>WhatsApp</Text>
            </View>
          </View>
          <View style={styles.View_2_809}>
            <View style={styles.View_2_810}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3335/b29b/54fa799e51adba392159032fcaa63223"
                }}
                style={styles.ImageBackground_2_811}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca45/4e7b/49a80b7e80c91f60faef24dd4e0206c7"
                }}
                style={styles.ImageBackground_2_812}
              />
            </View>
            <View style={styles.View_2_816}>
              <Text style={styles.Text_2_816}>WhatsApp status</Text>
            </View>
          </View>
          <View style={styles.View_2_817}>
            <View style={styles.View_2_818}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20ee/4ad7/dcf4142a9bd5cc2ae7eafc1f680ae7ec"
                }}
                style={styles.ImageBackground_2_819}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a41/f4e0/d216867c3a53978e0c14d7cf038535b3"
                }}
                style={styles.ImageBackground_2_820}
              />
            </View>
            <View style={styles.View_2_823}>
              <Text style={styles.Text_2_823}>Messenger</Text>
            </View>
          </View>
          <View style={styles.View_2_824}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bad/7c4d/3312f09d6a395065bf51458b27da65cd"
              }}
              style={styles.ImageBackground_2_825}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561f/066e/1a4ea5af5c55c94e44f1d9b8721ef16b"
              }}
              style={styles.ImageBackground_2_827}
            />
            <View style={styles.View_2_828}>
              <Text style={styles.Text_2_828}>Message</Text>
            </View>
          </View>
          <View style={styles.View_2_829}>
            <View style={styles.View_2_830}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b1/16d3/2c8d2c1ba7455d72008490ddf9c1126a"
                }}
                style={styles.ImageBackground_2_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75e8/837e/47fec598f68c823d45c1eca17cd043ff"
                }}
                style={styles.ImageBackground_2_832}
              />
            </View>
            <View style={styles.View_2_835}>
              <Text style={styles.Text_2_835}>SMS</Text>
            </View>
          </View>
          <View style={styles.View_2_836}>
            <View style={styles.View_2_837}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4ae/6470/682a81ab092378b47ce4430a4b5d5689"
                }}
                style={styles.ImageBackground_2_838}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f69/7e08/0e4a200207a916709e771b707f8270f9"
                }}
                style={styles.ImageBackground_2_839}
              />
            </View>
            <View style={styles.View_2_840}>
              <Text style={styles.Text_2_840}>Instagram</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fd9/8fe4/063654c760adfd17763aeb9261f5f0b5"
          }}
          style={styles.ImageBackground_2_841}
        />
      </View>
      <View style={styles.View_2_842}>
        <View style={styles.View_2_843}>
          <Text style={styles.Text_2_843}>Following</Text>
        </View>
        <View style={styles.View_2_844}>
          <Text style={styles.Text_2_844}>For You</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c8f/4480/6b71d28b6a81dc33faedbd7665be158d"
          }}
          style={styles.ImageBackground_2_845}
        />
      </View>
      <View style={styles.View_2_846}>
        <View style={styles.View_2_847} />
        <View style={styles.View_2_848} />
      </View>
      <View style={styles.View_2_849}>
        <View style={styles.View_2_850} />
        <View style={styles.View_2_851}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_2_852}
          />
          <View style={styles.View_2_855}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_2_856}
            />
            <View style={styles.View_2_857} />
          </View>
          <View style={styles.View_2_858} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_2_859}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_2_863}
        />
        <View style={styles.View_2_868}>
          <View style={styles.View_2_869}>
            <Text style={styles.Text_2_869}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_2_758: {
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
  View_2_759: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.56038647342996%"),
    top: hp("70.21857923497268%")
  },
  View_2_760: {
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
  Text_2_760: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_761: {
    width: wp("8.57487922705314%"),
    minWidth: wp("8.57487922705314%"),
    height: hp("4.420645771130838%"),
    minHeight: hp("4.420645771130838%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.845410628019323%"),
    top: hp("0%")
  },
  View_2_764: {
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
  ImageBackground_2_765: {
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
  ImageBackground_2_766: {
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
  View_2_769: {
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
  View_2_770: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.293715596850452%"),
    minHeight: hp("11.293715596850452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04508221735720497%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_771: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_2_771: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_772: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80.19125683060109%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_773: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_2_774: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.71980676328502%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "flex-start"
  },
  Text_2_774: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_775: {
    width: wp("94.68599033816425%"),
    minWidth: wp("94.68599033816425%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("19.125683060109296%")
  },
  View_2_776: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_777: {
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
  ImageBackground_2_778: {
    width: wp("5.79058559620438%"),
    minWidth: wp("5.79058559620438%"),
    height: hp("2.808243589974492%"),
    minHeight: hp("2.808243589974492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.781021191878019%"),
    top: hp("1.6657928300034257%")
  },
  View_2_779: {
    width: wp("7.971014492753622%"),
    minWidth: wp("7.971014492753622%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386469%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_779: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_780: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.729468599033815%"),
    top: hp("0%")
  },
  ImageBackground_2_781: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995134%"),
    top: hp("0%")
  },
  ImageBackground_2_782: {
    width: wp("4.546646449876868%"),
    minWidth: wp("4.546646449876868%"),
    height: hp("2.9030054644808745%"),
    minHeight: hp("2.9030054644808745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1276867262983075%"),
    top: hp("1.707650273224047%")
  },
  View_2_783: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_783: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_784: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.425120772946862%"),
    top: hp("0%")
  },
  ImageBackground_2_785: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%")
  },
  View_2_786: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_786: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_787: {
    width: wp("5.797118956340109%"),
    minWidth: wp("5.797118956340109%"),
    height: hp("3.044603952293188%"),
    minHeight: hp("3.044603952293188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9589371980676304%"),
    top: hp("1.8359908640710358%")
  },
  View_2_788: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  ImageBackground_2_789: {
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
  View_2_790: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574894%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_790: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_791: {
    width: wp("7.367150219166336%"),
    minWidth: wp("7.367150219166336%"),
    height: hp("2.800547750921197%"),
    minHeight: hp("2.800547750921197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584485%"),
    top: hp("1.775956284152997%")
  },
  View_2_792: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666667%"),
    top: hp("0%")
  },
  ImageBackground_2_793: {
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
  View_2_794: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_794: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_795: {
    width: wp("5.193236714975845%"),
    minWidth: wp("5.193236714975845%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: hp("1.3661202185792405%")
  },
  View_2_796: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.33333333333334%"),
    top: hp("0%")
  },
  ImageBackground_2_797: {
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
  View_2_798: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2415458937198025%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_798: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_799: {
    width: wp("3.985507246376811%"),
    minWidth: wp("3.985507246376811%"),
    height: hp("2.7879021858257023%"),
    minHeight: hp("2.7879021858257023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.683574879227052%"),
    top: hp("1.8101092896174862%")
  },
  View_2_800: {
    width: wp("95.28985507246377%"),
    minWidth: wp("95.28985507246377%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("5.601092896174862%")
  },
  View_2_801: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  View_2_802: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980695%"),
    top: hp("0%")
  },
  ImageBackground_2_803: {
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
  ImageBackground_2_804: {
    width: wp("6.4139886754722415%"),
    height: hp("3.6438762164506757%"),
    top: hp("1.25948171146581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6570048309178738%")
  },
  View_2_808: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_808: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_809: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.666666666666668%"),
    top: hp("0.1366120218579283%")
  },
  View_2_810: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%")
  },
  ImageBackground_2_811: {
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
  ImageBackground_2_812: {
    width: wp("6.4139886754722415%"),
    height: hp("3.6438762164506757%"),
    top: hp("1.25948171146581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6570048309178738%")
  },
  View_2_816: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_816: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_817: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.18357487922705%"),
    top: hp("0.1366120218579283%")
  },
  View_2_818: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%"),
    top: hp("0%")
  },
  ImageBackground_2_819: {
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
  ImageBackground_2_820: {
    width: wp("7.487922705314009%"),
    height: hp("4.098360655737705%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584627%")
  },
  View_2_823: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_823: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_824: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("0%")
  },
  ImageBackground_2_825: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_827: {
    width: wp("6.52257486242027%"),
    minWidth: wp("6.52257486242027%"),
    height: hp("3.2104041407017108%"),
    minHeight: hp("3.2104041407017108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.65653306159421%"),
    top: hp("1.9125683060109253%")
  },
  View_2_828: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("7.786885245901644%"),
    justifyContent: "flex-start"
  },
  Text_2_828: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_829: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_2_830: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_831: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_832: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("3.680122354642941%"),
    minHeight: hp("3.680122354642941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2946859903381593%"),
    top: hp("1.5027322404371688%")
  },
  View_2_835: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2608695652173907%"),
    top: hp("7.786885245901644%"),
    justifyContent: "flex-start"
  },
  Text_2_835: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_836: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.21256038647343%"),
    top: hp("0%")
  },
  View_2_837: {
    width: wp("11.835750635119451%"),
    minWidth: wp("11.835750635119451%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12077294685991546%"),
    top: hp("0%")
  },
  ImageBackground_2_838: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_839: {
    width: wp("7.48792316602624%"),
    height: hp("4.2349726775956285%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478251%")
  },
  View_2_840: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.786885245901644%"),
    justifyContent: "flex-start"
  },
  Text_2_840: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_841: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("17.21311475409837%")
  },
  View_2_842: {
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
  View_2_843: {
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
  Text_2_843: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_844: {
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
  Text_2_844: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_2_845: {
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
  View_2_846: {
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
  View_2_847: {
    width: wp("100%"),
    height: hp("4.781420765027322%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_848: {
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
  View_2_849: {
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
  View_2_850: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_851: {
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
  ImageBackground_2_852: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_855: {
    width: wp("0.36231884057971014%"),
    minWidth: wp("0.36231884057971014%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555571%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_2_856: {
    width: wp("0.966183574879227%"),
    minWidth: wp("0.966183574879227%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008604956454917989%")
  },
  View_2_857: {
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
  View_2_858: {
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
  ImageBackground_2_859: {
    width: wp("4.072637143342392%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.2309516948428962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499490489131%")
  },
  ImageBackground_2_863: {
    width: wp("4.533327259303291%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111129981884%")
  },
  View_2_868: {
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
  View_2_869: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_869: {
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

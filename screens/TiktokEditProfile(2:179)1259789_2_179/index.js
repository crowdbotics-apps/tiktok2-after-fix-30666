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
      <View style={styles.View_2_180} />
      <View style={styles.View_2_181}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f86/09ed/8197b0dbc2675cfef6e4a842e4dadca2"
          }}
          style={styles.ImageBackground_2_182}
        />
        <View style={styles.View_2_183}>
          <View style={styles.View_2_184} />
          <View style={styles.View_2_185}>
            <Text style={styles.Text_2_185}>Name</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_186}
          />
          <View style={styles.View_2_187}>
            <Text style={styles.Text_2_187}>Jacob West</Text>
          </View>
        </View>
        <View style={styles.View_2_188}>
          <View style={styles.View_2_189} />
          <View style={styles.View_2_190}>
            <Text style={styles.Text_2_190}>Username</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_191}
          />
          <View style={styles.View_2_192}>
            <Text style={styles.Text_2_192}>jacob_w</Text>
          </View>
        </View>
        <View style={styles.View_2_193}>
          <View style={styles.View_2_194} />
          <View style={styles.View_2_195}>
            <Text style={styles.Text_2_195}>tiktok.com@jacob_w</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fad/ecb7/390ec220748f863ddfc20d13beb01fcc"
            }}
            style={styles.ImageBackground_2_196}
          />
        </View>
        <View style={styles.View_2_197}>
          <View style={styles.View_2_198} />
          <View style={styles.View_2_199}>
            <Text style={styles.Text_2_199}>Bio</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_200}
          />
          <View style={styles.View_2_201}>
            <Text style={styles.Text_2_201}>Add a bio to your profile</Text>
          </View>
        </View>
        <View style={styles.View_2_202}>
          <View style={styles.View_2_203} />
          <View style={styles.View_2_204}>
            <Text style={styles.Text_2_204}>Instagram</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_205}
          />
          <View style={styles.View_2_206}>
            <Text style={styles.Text_2_206}>Add Instagram to your profile</Text>
          </View>
        </View>
        <View style={styles.View_2_207}>
          <View style={styles.View_2_208} />
          <View style={styles.View_2_209}>
            <Text style={styles.Text_2_209}>YouTube</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_210}
          />
          <View style={styles.View_2_211}>
            <Text style={styles.Text_2_211}>Add YouTube to your profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_212}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3457/87ae/199af4c6ebf3fadb80bc966bc629036c"
          }}
          style={styles.ImageBackground_2_213}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04be/d2c5/ecde1219e75a7db0fa1d010fbc103ee9"
          }}
          style={styles.ImageBackground_2_214}
        />
        <View style={styles.View_2_215}>
          <Text style={styles.Text_2_215}>Change video</Text>
        </View>
      </View>
      <View style={styles.View_2_216}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/030d/6048/d876a60eec1ee48abd2e6e51b5e4c291"
          }}
          style={styles.ImageBackground_2_217}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c482/e609/a0fcc1afb8297be89a3e2fba0e22a0fd"
          }}
          style={styles.ImageBackground_2_218}
        />
        <View style={styles.View_2_219}>
          <Text style={styles.Text_2_219}>Change photo</Text>
        </View>
      </View>
      <View style={styles.View_2_220}>
        <View style={styles.View_2_221} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d190/4ad7/e3d5535b5499a29fbf18b4b56e629823"
          }}
          style={styles.ImageBackground_2_222}
        />
        <View style={styles.View_2_223}>
          <Text style={styles.Text_2_223}>Edit profile</Text>
        </View>
      </View>
      <View style={styles.View_2_224}>
        <View style={styles.View_2_225} />
        <View style={styles.View_2_226} />
      </View>
      <View style={styles.View_2_227}>
        <View style={styles.View_2_228} />
        <View style={styles.View_2_229}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_2_230}
          />
          <View style={styles.View_2_233}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_2_234}
            />
            <View style={styles.View_2_235} />
          </View>
          <View style={styles.View_2_236} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620f/5b08/34255442dff81dcf9f83619a702b5cd5"
          }}
          style={styles.ImageBackground_2_237}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d34/dcd9/0d23fcae3e811c4c6d6df9621fb6e1de"
          }}
          style={styles.ImageBackground_2_241}
        />
        <View style={styles.View_2_246}>
          <View style={styles.View_2_247}>
            <Text style={styles.Text_2_247}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  View_2_180: {
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
  View_2_181: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("44.80874316939891%"),
    minHeight: hp("44.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.15846994535519%")
  },
  ImageBackground_2_182: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("29.508196721311464%")
  },
  View_2_183: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_184: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_185: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_185: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_186: {
    width: wp("1.399249615876571%"),
    minWidth: wp("1.399249615876571%"),
    height: hp("1.4344262295081966%"),
    minHeight: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.90096618357488%"),
    top: hp("2.834699453551906%")
  },
  View_2_187: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222221%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_187: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_188: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.103825136612016%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_189: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_190: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("2.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_2_190: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_191: {
    width: wp("1.399249615876571%"),
    minWidth: wp("1.399249615876571%"),
    height: hp("1.4344262295081966%"),
    minHeight: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.90096618357488%"),
    top: hp("2.83469945355192%")
  },
  View_2_192: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.01932367149759%"),
    top: hp("2.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_2_192: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_193: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.20765027322404%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_194: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_195: {
    width: wp("33.57487922705314%"),
    minWidth: wp("33.57487922705314%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.729468599033815%"),
    top: hp("2.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_2_195: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_196: {
    width: wp("3.0193236714975846%"),
    minWidth: wp("3.0193236714975846%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.17632850241546%"),
    top: hp("2.6980874316939847%")
  },
  View_2_197: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.311475409836063%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_198: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_199: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_199: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_200: {
    width: wp("1.399249615876571%"),
    minWidth: wp("1.399249615876571%"),
    height: hp("1.4344262295081966%"),
    minHeight: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.90096618357488%"),
    top: hp("2.834699453551913%")
  },
  View_2_201: {
    width: wp("38.405797101449274%"),
    minWidth: wp("38.405797101449274%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.89855072463768%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_201: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_202: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.601092896174862%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_203: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_204: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_204: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_205: {
    width: wp("1.399249615876571%"),
    minWidth: wp("1.399249615876571%"),
    height: hp("1.4344262295081966%"),
    minHeight: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.90096618357488%"),
    top: hp("2.834699453551906%")
  },
  View_2_206: {
    width: wp("46.85990338164252%"),
    minWidth: wp("46.85990338164252%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_206: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_207: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.70491803278689%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_208: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_209: {
    width: wp("14.251207729468598%"),
    minWidth: wp("14.251207729468598%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_209: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_210: {
    width: wp("1.399249615876571%"),
    minWidth: wp("1.399249615876571%"),
    height: hp("1.4344262295081966%"),
    minHeight: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.90096618357488%"),
    top: hp("2.834699453551906%")
  },
  View_2_211: {
    width: wp("44.44444444444444%"),
    minWidth: wp("44.44444444444444%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.85990338164252%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_211: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_212: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.17874396135265%"),
    top: hp("16.39344262295082%")
  },
  ImageBackground_2_213: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_214: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874401%"),
    top: hp("4.644808743169403%")
  },
  View_2_215: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396192%"),
    top: hp("14.071038251366122%"),
    justifyContent: "flex-start"
  },
  Text_2_215: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_216: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.32367149758454%"),
    top: hp("16.39344262295082%")
  },
  ImageBackground_2_217: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_218: {
    width: wp("6.521739130434782%"),
    minWidth: wp("6.521739130434782%"),
    height: hp("2.9371584699453552%"),
    minHeight: hp("2.9371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.60869565217391%"),
    top: hp("4.644808743169403%")
  },
  View_2_219: {
    width: wp("21.014492753623188%"),
    minWidth: wp("21.014492753623188%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4830917874396121%"),
    top: hp("14.071038251366122%"),
    justifyContent: "flex-start"
  },
  Text_2_219: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_220: {
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
  View_2_221: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.97677570614007%"),
    minHeight: hp("11.97677570614007%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_222: {
    width: wp("2.4654846836403372%"),
    minWidth: wp("2.4654846836403372%"),
    height: hp("2.459016654009376%"),
    minHeight: hp("2.459016654009376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("7.786885245901639%")
  },
  View_2_223: {
    width: wp("19.565217391304348%"),
    minWidth: wp("19.565217391304348%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.33816425120773%"),
    top: hp("7.5136612021857925%"),
    justifyContent: "flex-start"
  },
  Text_2_223: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_224: {
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
  View_2_225: {
    width: wp("100%"),
    height: hp("4.781420765027322%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_226: {
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
  View_2_227: {
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
  View_2_228: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_229: {
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
  ImageBackground_2_230: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_233: {
    width: wp("0.36231884057971014%"),
    minWidth: wp("0.36231884057971014%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555571%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_2_234: {
    width: wp("0.966183574879227%"),
    minWidth: wp("0.966183574879227%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008604956454917989%")
  },
  View_2_235: {
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
  View_2_236: {
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
  ImageBackground_2_237: {
    width: wp("4.072637143342392%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.2309516948428962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499490489131%")
  },
  ImageBackground_2_241: {
    width: wp("4.533327259303291%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111129981884%")
  },
  View_2_246: {
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
  View_2_247: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_247: {
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

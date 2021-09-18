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
      <View style={styles.View_2_74} />
      <View style={styles.View_2_75}>
        <View style={styles.View_2_76}>
          <Text style={styles.Text_2_76}>SUPPORT</Text>
        </View>
        <View style={styles.View_2_77}>
          <View style={styles.View_2_78} />
          <View style={styles.View_2_79}>
            <Text style={styles.Text_2_79}>Report a problem</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_80}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7f9/4fb5/cef0fe5a26b638126d1ed17b551df6b9"
            }}
            style={styles.ImageBackground_2_81}
          />
        </View>
        <View style={styles.View_2_82}>
          <View style={styles.View_2_83} />
          <View style={styles.View_2_84}>
            <Text style={styles.Text_2_84}>Help Center</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_85}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e66/abe8/79f41c3db9daba4984c28444fa44686e"
            }}
            style={styles.ImageBackground_2_86}
          />
        </View>
      </View>
      <View style={styles.View_2_90}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f86/09ed/8197b0dbc2675cfef6e4a842e4dadca2"
          }}
          style={styles.ImageBackground_2_91}
        />
        <View style={styles.View_2_92}>
          <Text style={styles.Text_2_92}>GENERAL</Text>
        </View>
        <View style={styles.View_2_93}>
          <View style={styles.View_2_94} />
          <View style={styles.View_2_95}>
            <Text style={styles.Text_2_95}>Push notifications</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_96}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0869/40ce/5af6a86d268b6a3a0b4ee59452723c05"
            }}
            style={styles.ImageBackground_2_97}
          />
        </View>
        <View style={styles.View_2_98}>
          <View style={styles.View_2_99} />
          <View style={styles.View_2_100}>
            <Text style={styles.Text_2_100}>Language</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a915/4ab6/edfcf7c7baf5e2d80d9b6a8f59ef5871"
            }}
            style={styles.ImageBackground_2_102}
          />
        </View>
        <View style={styles.View_2_103}>
          <View style={styles.View_2_104} />
          <View style={styles.View_2_105}>
            <Text style={styles.Text_2_105}>Digital Wellbeing</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_106}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e430/3bb4/86babea26e708e6a48b008e63cd4054a"
            }}
            style={styles.ImageBackground_2_107}
          />
        </View>
        <View style={styles.View_2_108}>
          <View style={styles.View_2_109} />
          <View style={styles.View_2_110}>
            <Text style={styles.Text_2_110}>Accessibility</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_111}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9374/7da7/7a62ceefa5e5e45bc3969c69196257e8"
            }}
            style={styles.ImageBackground_2_112}
          />
        </View>
        <View style={styles.View_2_113}>
          <View style={styles.View_2_114} />
          <View style={styles.View_2_115}>
            <Text style={styles.Text_2_115}>Data Saver</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_116}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c5f/6f20/6f64d2cfeb82beefc2c19c0e3967f103"
            }}
            style={styles.ImageBackground_2_117}
          />
        </View>
      </View>
      <View style={styles.View_2_118}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f86/09ed/8197b0dbc2675cfef6e4a842e4dadca2"
          }}
          style={styles.ImageBackground_2_119}
        />
        <View style={styles.View_2_120}>
          <Text style={styles.Text_2_120}>ACCOUNT</Text>
        </View>
        <View style={styles.View_2_121}>
          <View style={styles.View_2_122} />
          <View style={styles.View_2_123}>
            <Text style={styles.Text_2_123}>Manage my account</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_124}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/929d/772e/536e43b8aebd62e4b0441b553e8428fc"
            }}
            style={styles.ImageBackground_2_125}
          />
        </View>
        <View style={styles.View_2_126}>
          <View style={styles.View_2_127} />
          <View style={styles.View_2_128}>
            <Text style={styles.Text_2_128}>Privacy and safety</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_129}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/789c/be53/410bd64b974752d1526c569ebcb77e30"
            }}
            style={styles.ImageBackground_2_130}
          />
        </View>
        <View style={styles.View_2_131}>
          <View style={styles.View_2_132} />
          <View style={styles.View_2_133}>
            <Text style={styles.Text_2_133}>Content preferences</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_134}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9b2/8725/ef6e9fb25bccaa65c0125840f5fd2de4"
            }}
            style={styles.ImageBackground_2_135}
          />
        </View>
        <View style={styles.View_2_136}>
          <View style={styles.View_2_137} />
          <View style={styles.View_2_138}>
            <Text style={styles.Text_2_138}>Balance</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_139}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d942/d5ab/0cfe549067b3d07f4d70b42bc0a206c5"
            }}
            style={styles.ImageBackground_2_140}
          />
        </View>
        <View style={styles.View_2_141}>
          <View style={styles.View_2_142} />
          <View style={styles.View_2_143}>
            <Text style={styles.Text_2_143}>Share profile</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_144}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9968/1974/33a9492cf14ce99b19b921bbe4534cfe"
            }}
            style={styles.ImageBackground_2_145}
          />
        </View>
        <View style={styles.View_2_146}>
          <View style={styles.View_2_147} />
          <View style={styles.View_2_148}>
            <Text style={styles.Text_2_148}>TikCode</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30e/bac8/89cfc2666d998dd5f6d08c2014c27ae8"
            }}
            style={styles.ImageBackground_2_149}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3de5/c262/005bc396fcbb2a8e4e459522f7d6afaa"
            }}
            style={styles.ImageBackground_2_150}
          />
        </View>
      </View>
      <View style={styles.View_2_151}>
        <View style={styles.View_2_152} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d190/4ad7/e3d5535b5499a29fbf18b4b56e629823"
          }}
          style={styles.ImageBackground_2_153}
        />
        <View style={styles.View_2_154}>
          <Text style={styles.Text_2_154}>Privacy and settings</Text>
        </View>
      </View>
      <View style={styles.View_2_155}>
        <View style={styles.View_2_156} />
        <View style={styles.View_2_157} />
      </View>
      <View style={styles.View_2_158}>
        <View style={styles.View_2_159} />
        <View style={styles.View_2_160}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_2_161}
          />
          <View style={styles.View_2_164}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_2_165}
            />
            <View style={styles.View_2_166} />
          </View>
          <View style={styles.View_2_167} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620f/5b08/34255442dff81dcf9f83619a702b5cd5"
          }}
          style={styles.ImageBackground_2_168}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d34/dcd9/0d23fcae3e811c4c6d6df9621fb6e1de"
          }}
          style={styles.ImageBackground_2_172}
        />
        <View style={styles.View_2_177}>
          <View style={styles.View_2_178}>
            <Text style={styles.Text_2_178}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  View_2_74: {
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
  View_2_75: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106.01092896174865%")
  },
  View_2_76: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_76: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_77: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_78: {
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
  View_2_79: {
    width: wp("28.019323671497588%"),
    minWidth: wp("28.019323671497588%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.322404371584682%"),
    justifyContent: "flex-start"
  },
  Text_2_79: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_80: {
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
  ImageBackground_2_81: {
    width: wp("3.6231884057971016%"),
    minWidth: wp("3.6231884057971016%"),
    height: hp("2.296416485895876%"),
    minHeight: hp("2.296416485895876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.528985507246377%"),
    top: hp("2.4508450200648753%")
  },
  View_2_82: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836065573770469%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_83: {
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
  View_2_84: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.3224043715847102%"),
    justifyContent: "flex-start"
  },
  Text_2_84: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_85: {
    width: wp("1.399249615876571%"),
    minWidth: wp("1.399249615876571%"),
    height: hp("1.4344262295081966%"),
    minHeight: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.90096618357488%"),
    top: hp("2.8346994535519343%")
  },
  ImageBackground_2_86: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("2.4590163934426386%")
  },
  View_2_90: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.34426229508197%"),
    minHeight: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63.934426229508205%")
  },
  ImageBackground_2_91: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("39.34426229508196%")
  },
  View_2_92: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_92: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_93: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_94: {
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
  View_2_95: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.3224043715847102%"),
    justifyContent: "flex-start"
  },
  Text_2_95: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_96: {
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
  ImageBackground_2_97: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.2540983606557377%"),
    minHeight: hp("2.2540983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4685990338164245%"),
    top: hp("2.4248633879781494%")
  },
  View_2_98: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836065573770483%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_99: {
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
  View_2_100: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_100: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_101: {
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
  ImageBackground_2_102: {
    width: wp("3.985507246376811%"),
    minWidth: wp("3.985507246376811%"),
    height: hp("2.527322404371585%"),
    minHeight: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.28743961352657%"),
    top: hp("2.288251366120221%")
  },
  View_2_103: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_104: {
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
  View_2_105: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_105: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_106: {
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
  ImageBackground_2_107: {
    width: wp("3.9752471850114173%"),
    minWidth: wp("3.9752471850114173%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.292570104921498%"),
    top: hp("2.356557377049171%")
  },
  View_2_108: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.04371584699453%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_109: {
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
  View_2_110: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_110: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_111: {
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
  ImageBackground_2_112: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("2.322404371584696%")
  },
  View_2_113: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606547%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_114: {
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
  View_2_115: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.3224043715847102%"),
    justifyContent: "flex-start"
  },
  Text_2_115: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_116: {
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
  ImageBackground_2_117: {
    width: wp("3.7439613526570046%"),
    minWidth: wp("3.7439613526570046%"),
    height: hp("2.5090600623459114%"),
    minHeight: hp("2.5090600623459114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.408212560386474%"),
    top: hp("2.306528560450829%")
  },
  View_2_118: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("46.44808743169399%"),
    minHeight: hp("46.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.754098360655737%")
  },
  ImageBackground_2_119: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("46.44808743169399%")
  },
  View_2_120: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_120: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_121: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158472%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_122: {
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
  View_2_123: {
    width: wp("32.850241545893724%"),
    minWidth: wp("32.850241545893724%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_123: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_124: {
    width: wp("1.399249615876571%"),
    minWidth: wp("1.399249615876571%"),
    height: hp("1.4344262295081966%"),
    minHeight: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.90096618357488%"),
    top: hp("2.8346994535519094%")
  },
  ImageBackground_2_125: {
    width: wp("3.3816425120772946%"),
    minWidth: wp("3.3816425120772946%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("2.459016393442621%")
  },
  View_2_126: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836065573770492%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_127: {
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
  View_2_128: {
    width: wp("29.468599033816425%"),
    minWidth: wp("29.468599033816425%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_2_128: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_129: {
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
  ImageBackground_2_130: {
    width: wp("3.5024154589371985%"),
    minWidth: wp("3.5024154589371985%"),
    height: hp("2.390710382513661%"),
    minHeight: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.528985507246377%"),
    top: hp("2.356557377049178%")
  },
  View_2_131: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_132: {
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
  View_2_133: {
    width: wp("32.850241545893724%"),
    minWidth: wp("32.850241545893724%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_133: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_134: {
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
  ImageBackground_2_135: {
    width: wp("4.64975845410628%"),
    minWidth: wp("4.64975845410628%"),
    height: hp("1.9808743169398908%"),
    minHeight: hp("1.9808743169398908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.045893719806763%"),
    top: hp("2.5614754098360635%")
  },
  View_2_136: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.04371584699453%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_137: {
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
  View_2_138: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_2_138: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_139: {
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
  ImageBackground_2_140: {
    width: wp("3.92512077294686%"),
    minWidth: wp("3.92512077294686%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.28743961352657%"),
    top: hp("2.4931693989071064%")
  },
  View_2_141: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606554%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_142: {
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
  View_2_143: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_2_143: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_144: {
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
  ImageBackground_2_145: {
    width: wp("4.248609865345241%"),
    minWidth: wp("4.248609865345241%"),
    height: hp("2.1282392772820478%"),
    minHeight: hp("2.1282392772820478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.087203021210748%"),
    top: hp("2.4877996392588813%")
  },
  View_2_146: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.251366120218584%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_147: {
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
  View_2_148: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_2_148: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_149: {
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
  ImageBackground_2_150: {
    width: wp("3.7439613526570046%"),
    minWidth: wp("3.7439613526570046%"),
    height: hp("2.1174863387978142%"),
    minHeight: hp("2.1174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4685990338164245%"),
    top: hp("2.5273224043715743%")
  },
  View_2_151: {
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
  View_2_152: {
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
  ImageBackground_2_153: {
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
  View_2_154: {
    width: wp("36.95652173913043%"),
    minWidth: wp("36.95652173913043%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.642512077294686%"),
    top: hp("7.5136612021857925%"),
    justifyContent: "flex-start"
  },
  Text_2_154: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_155: {
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
  View_2_156: {
    width: wp("100%"),
    height: hp("4.781420765027322%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_157: {
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
  View_2_158: {
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
  View_2_159: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_160: {
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
  ImageBackground_2_161: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_164: {
    width: wp("0.36231884057971014%"),
    minWidth: wp("0.36231884057971014%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555571%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_2_165: {
    width: wp("0.966183574879227%"),
    minWidth: wp("0.966183574879227%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008604956454917989%")
  },
  View_2_166: {
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
  View_2_167: {
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
  ImageBackground_2_168: {
    width: wp("4.072637143342392%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.2309516948428962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499490489131%")
  },
  ImageBackground_2_172: {
    width: wp("4.533327259303291%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111129981884%")
  },
  View_2_177: {
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
  View_2_178: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_178: {
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

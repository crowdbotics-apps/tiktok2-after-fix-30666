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
      <View style={styles.View_2_1052}>
        <View style={styles.View_2_1053} />
        <View style={styles.View_2_1054}>
          <Text style={styles.Text_2_1054}>Add comment... </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/222b/e495/c9e7047527ddb1bc5a83711323c66e92"
          }}
          style={styles.ImageBackground_2_1055}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc47/3ce0/2e9bbcfd3447958164b45857eae59bc1"
          }}
          style={styles.ImageBackground_2_1056}
        />
      </View>
      <View style={styles.View_2_1057}>
        <View style={styles.View_2_1058} />
        <View style={styles.View_2_1059}>
          <View style={styles.View_2_1060}>
            <Text style={styles.Text_2_1060}>579 comments</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3925/5238/3e49bf167b15808e8d9acea7398d4928"
          }}
          style={styles.ImageBackground_2_1061}
        />
        <View style={styles.View_2_1063}>
          <View style={styles.View_2_1064}>
            <View style={styles.View_2_1065}>
              <View style={styles.View_2_1066} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d40/c3a7/f4f2e75f8a02d9fb09a3b89774d1f8f7"
                }}
                style={styles.ImageBackground_2_1067}
              />
              <View style={styles.View_2_1068}>
                <Text style={styles.Text_2_1068}>martini_rond</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1069}
              />
              <View style={styles.View_2_1070}>
                <Text style={styles.Text_2_1070}>View replies (4)</Text>
              </View>
              <View style={styles.View_2_1071}>
                <Text style={styles.Text_2_1071}>
                  How neatly I write the date in my book 22h
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
                }}
                style={styles.ImageBackground_2_1072}
              />
              <View style={styles.View_2_1073}>
                <Text style={styles.Text_2_1073}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1074}>
              <View style={styles.View_2_1075} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f33/4ef4/57f94113f2effc2e081ea9c5d6894754"
                }}
                style={styles.ImageBackground_2_1076}
              />
              <View style={styles.View_2_1077}>
                <Text style={styles.Text_2_1077}>maxjacobson</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1078}
              />
              <View style={styles.View_2_1079}>
                <Text style={styles.Text_2_1079}>View replies (1)</Text>
              </View>
              <View style={styles.View_2_1080}>
                <Text style={styles.Text_2_1080}>
                  Now that’s a skill very talented 22h
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
                }}
                style={styles.ImageBackground_2_1081}
              />
              <View style={styles.View_2_1082}>
                <Text style={styles.Text_2_1082}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1083}>
              <View style={styles.View_2_1084} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4d4/c7e7/3fc4de8bb47ee895f31b3953f8de1a7e"
                }}
                style={styles.ImageBackground_2_1085}
              />
              <View style={styles.View_2_1086}>
                <Text style={styles.Text_2_1086}>kiero_d</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1087}
              />
              <View style={styles.View_2_1088}>
                <Text style={styles.Text_2_1088}>View replies (9)</Text>
              </View>
              <View style={styles.View_2_1089}>
                <Text style={styles.Text_2_1089}>
                  Use that on r air forces to whiten them 21h
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
                }}
                style={styles.ImageBackground_2_1090}
              />
              <View style={styles.View_2_1091}>
                <Text style={styles.Text_2_1091}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1092}>
              <View style={styles.View_2_1093} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e053/6a9d/8fd0f3baa169a17cbe7ca50e32e22be9"
                }}
                style={styles.ImageBackground_2_1094}
              />
              <View style={styles.View_2_1095}>
                <Text style={styles.Text_2_1095}>mis_potter</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1096}
              />
              <View style={styles.View_2_1097}>
                <Text style={styles.Text_2_1097}>View replies (4)</Text>
              </View>
              <View style={styles.View_2_1098}>
                <Text style={styles.Text_2_1098}>
                  Sjpuld’ve used that on his forces 😷😷 13h
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
                }}
                style={styles.ImageBackground_2_1099}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd85/f25b/8f1a99c52ffef0b372334ba68ac5a2a2"
                }}
                style={styles.ImageBackground_2_1100}
              />
              <View style={styles.View_2_1103}>
                <Text style={styles.Text_2_1103}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1104}>
              <View style={styles.View_2_1105} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd07/9400/e4bd119eff408d916a2fefb2c7910286"
                }}
                style={styles.ImageBackground_2_1106}
              />
              <View style={styles.View_2_1107}>
                <Text style={styles.Text_2_1107}>karennne</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1108}
              />
              <View style={styles.View_2_1109}>
                <Text style={styles.Text_2_1109}>View replies (2)</Text>
              </View>
              <View style={styles.View_2_1110}>
                <Text style={styles.Text_2_1110}>No prressure 22h</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
                }}
                style={styles.ImageBackground_2_1111}
              />
              <View style={styles.View_2_1112}>
                <Text style={styles.Text_2_1112}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1113}>
              <View style={styles.View_2_1114} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e828/fa1e/acd6ff323146bc8614bee4d904a9fac4"
                }}
                style={styles.ImageBackground_2_1115}
              />
              <View style={styles.View_2_1116}>
                <Text style={styles.Text_2_1116}>zackjohn</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1117}
              />
              <View style={styles.View_2_1118}>
                <Text style={styles.Text_2_1118}>
                  Doing this would make me so anxious 22h
                </Text>
              </View>
              <View style={styles.View_2_1119}>
                <Text style={styles.Text_2_1119}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1120}>
              <View style={styles.View_2_1121} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8119/d785/dae96242ad778b0de8ff3cc04f604ce5"
                }}
                style={styles.ImageBackground_2_1122}
              />
              <View style={styles.View_2_1123}>
                <Text style={styles.Text_2_1123}>joshua_l</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1124}
              />
              <View style={styles.View_2_1125}>
                <Text style={styles.Text_2_1125}>
                  My OCD couldn’t do it 15h
                </Text>
              </View>
              <View style={styles.View_2_1126}>
                <Text style={styles.Text_2_1126}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1127}>
              <View style={styles.View_2_1128} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad44/c5c8/98d8a4fc73ad8468c2ecc248ba8cb0d8"
                }}
                style={styles.ImageBackground_2_1129}
              />
            </View>
          </View>
          <View style={styles.View_2_1130}>
            <View style={styles.View_2_1131}>
              <View style={styles.View_2_1132} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d40/c3a7/f4f2e75f8a02d9fb09a3b89774d1f8f7"
                }}
                style={styles.ImageBackground_2_1133}
              />
              <View style={styles.View_2_1134}>
                <Text style={styles.Text_2_1134}>martini_rond</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1135}
              />
              <View style={styles.View_2_1136}>
                <Text style={styles.Text_2_1136}>View replies (4)</Text>
              </View>
              <View style={styles.View_2_1137}>
                <Text style={styles.Text_2_1137}>
                  How neatly I write the date in my book 22h
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
                }}
                style={styles.ImageBackground_2_1138}
              />
              <View style={styles.View_2_1139}>
                <Text style={styles.Text_2_1139}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1140}>
              <View style={styles.View_2_1141} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f33/4ef4/57f94113f2effc2e081ea9c5d6894754"
                }}
                style={styles.ImageBackground_2_1142}
              />
              <View style={styles.View_2_1143}>
                <Text style={styles.Text_2_1143}>maxjacobson</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1144}
              />
              <View style={styles.View_2_1145}>
                <Text style={styles.Text_2_1145}>View replies (1)</Text>
              </View>
              <View style={styles.View_2_1146}>
                <Text style={styles.Text_2_1146}>
                  Now that’s a skill very talented 22h
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
                }}
                style={styles.ImageBackground_2_1147}
              />
              <View style={styles.View_2_1148}>
                <Text style={styles.Text_2_1148}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1149}>
              <View style={styles.View_2_1150} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4d4/c7e7/3fc4de8bb47ee895f31b3953f8de1a7e"
                }}
                style={styles.ImageBackground_2_1151}
              />
              <View style={styles.View_2_1152}>
                <Text style={styles.Text_2_1152}>kiero_d</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1153}
              />
              <View style={styles.View_2_1154}>
                <Text style={styles.Text_2_1154}>View replies (9)</Text>
              </View>
              <View style={styles.View_2_1155}>
                <Text style={styles.Text_2_1155}>
                  Use that on r air forces to whiten them 21h
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
                }}
                style={styles.ImageBackground_2_1156}
              />
              <View style={styles.View_2_1157}>
                <Text style={styles.Text_2_1157}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1158}>
              <View style={styles.View_2_1159} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e053/6a9d/8fd0f3baa169a17cbe7ca50e32e22be9"
                }}
                style={styles.ImageBackground_2_1160}
              />
              <View style={styles.View_2_1161}>
                <Text style={styles.Text_2_1161}>mis_potter</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1162}
              />
              <View style={styles.View_2_1163}>
                <Text style={styles.Text_2_1163}>View replies (4)</Text>
              </View>
              <View style={styles.View_2_1164}>
                <Text style={styles.Text_2_1164}>
                  Sjpuld’ve used that on his forces 😷😷 13h
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
                }}
                style={styles.ImageBackground_2_1165}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd85/f25b/8f1a99c52ffef0b372334ba68ac5a2a2"
                }}
                style={styles.ImageBackground_2_1166}
              />
              <View style={styles.View_2_1169}>
                <Text style={styles.Text_2_1169}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1170}>
              <View style={styles.View_2_1171} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd07/9400/e4bd119eff408d916a2fefb2c7910286"
                }}
                style={styles.ImageBackground_2_1172}
              />
              <View style={styles.View_2_1173}>
                <Text style={styles.Text_2_1173}>karennne</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1174}
              />
              <View style={styles.View_2_1175}>
                <Text style={styles.Text_2_1175}>View replies (2)</Text>
              </View>
              <View style={styles.View_2_1176}>
                <Text style={styles.Text_2_1176}>No prressure 22h</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
                }}
                style={styles.ImageBackground_2_1177}
              />
              <View style={styles.View_2_1178}>
                <Text style={styles.Text_2_1178}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1179}>
              <View style={styles.View_2_1180} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e828/fa1e/acd6ff323146bc8614bee4d904a9fac4"
                }}
                style={styles.ImageBackground_2_1181}
              />
              <View style={styles.View_2_1182}>
                <Text style={styles.Text_2_1182}>zackjohn</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1183}
              />
              <View style={styles.View_2_1184}>
                <Text style={styles.Text_2_1184}>
                  Doing this would make me so anxious 22h
                </Text>
              </View>
              <View style={styles.View_2_1185}>
                <Text style={styles.Text_2_1185}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1186}>
              <View style={styles.View_2_1187} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8119/d785/dae96242ad778b0de8ff3cc04f604ce5"
                }}
                style={styles.ImageBackground_2_1188}
              />
              <View style={styles.View_2_1189}>
                <Text style={styles.Text_2_1189}>joshua_l</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
                }}
                style={styles.ImageBackground_2_1190}
              />
              <View style={styles.View_2_1191}>
                <Text style={styles.Text_2_1191}>
                  My OCD couldn’t do it 15h
                </Text>
              </View>
              <View style={styles.View_2_1192}>
                <Text style={styles.Text_2_1192}>8098</Text>
              </View>
            </View>
            <View style={styles.View_2_1193}>
              <View style={styles.View_2_1194} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad44/c5c8/98d8a4fc73ad8468c2ecc248ba8cb0d8"
                }}
                style={styles.ImageBackground_2_1195}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_2_1052: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.691131498470948%"),
    minHeight: hp("12.691131498470948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87.30886850152905%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_1053: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.640672502896837%"),
    minHeight: hp("12.640672502896837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.050461328722292365%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_1054: {
    width: wp("25.845410628019323%"),
    minWidth: wp("25.845410628019323%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("2.2935779816513815%"),
    justifyContent: "flex-start"
  },
  Text_2_1054: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1055: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("3.3639143730886847%"),
    minHeight: hp("3.3639143730886847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.5946888209541%"),
    top: hp("2.3700305810397566%")
  },
  ImageBackground_2_1056: {
    width: wp("5.31401288682136%"),
    minWidth: wp("5.31401288682136%"),
    height: hp("3.363915831306294%"),
    minHeight: hp("3.363915831306294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.95169082125604%"),
    top: hp("2.3700305810397566%")
  },
  View_2_1057: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("87.30886850152905%"),
    minHeight: hp("87.30886850152905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_1058: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("87.30886850152905%"),
    minHeight: hp("87.30886850152905%"),
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
  View_2_1059: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.727828746177369%"),
    minHeight: hp("6.727828746177369%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_1060: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("1.834862385321101%"),
    justifyContent: "flex-start"
  },
  Text_2_1060: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1061: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    height: hp("5.963302752293578%"),
    minHeight: hp("5.963302752293578%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.85507246376811%"),
    top: hp("0%")
  },
  View_2_1063: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("80.58103975535168%"),
    minHeight: hp("80.58103975535168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.727828746177369%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_1064: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("88.68501529051987%"),
    minHeight: hp("88.68501529051987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1065: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1066: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1067: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605503%")
  },
  View_2_1068: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605503%"),
    justifyContent: "flex-start"
  },
  Text_2_1068: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1069: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.307427549216362%")
  },
  View_2_1070: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("8.56269113149847%"),
    justifyContent: "flex-start"
  },
  Text_2_1070: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1071: {
    width: wp("67.3913043478261%"),
    minWidth: wp("67.3913043478261%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.128440366972477%"),
    justifyContent: "flex-start"
  },
  Text_2_1071: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1072: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6880733944954129%"),
    minHeight: hp("0.6880733944954129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.594202898550726%"),
    top: hp("9.556574923547402%")
  },
  View_2_1073: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.892966360856271%"),
    justifyContent: "flex-start"
  },
  Text_2_1073: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1074: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.232415902140673%")
  },
  View_2_1075: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1076: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605512%")
  },
  View_2_1077: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605512%"),
    justifyContent: "flex-start"
  },
  Text_2_1077: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1078: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.30742754921636%")
  },
  View_2_1079: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("8.562691131498472%"),
    justifyContent: "flex-start"
  },
  Text_2_1079: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1080: {
    width: wp("54.830917874396135%"),
    minWidth: wp("54.830917874396135%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.128440366972477%"),
    justifyContent: "flex-start"
  },
  Text_2_1080: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1081: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6880733944954129%"),
    minHeight: hp("0.6880733944954129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.869565217391305%"),
    top: hp("9.556574923547402%")
  },
  View_2_1082: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.892966360856271%"),
    justifyContent: "flex-start"
  },
  Text_2_1082: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1083: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.63914373088686%")
  },
  View_2_1084: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1085: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605512%")
  },
  View_2_1086: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605512%"),
    justifyContent: "flex-start"
  },
  Text_2_1086: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1087: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.3074275492163565%")
  },
  View_2_1088: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("8.562691131498468%"),
    justifyContent: "flex-start"
  },
  Text_2_1088: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1089: {
    width: wp("67.6328502415459%"),
    minWidth: wp("67.6328502415459%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.128440366972477%"),
    justifyContent: "flex-start"
  },
  Text_2_1089: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1090: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6880733944954129%"),
    minHeight: hp("0.6880733944954129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.835748792270536%"),
    top: hp("9.556574923547402%")
  },
  View_2_1091: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.8929663608562635%"),
    justifyContent: "flex-start"
  },
  Text_2_1091: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1092: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.871559633027516%")
  },
  View_2_1093: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1094: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605583%")
  },
  View_2_1095: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605583%"),
    justifyContent: "flex-start"
  },
  Text_2_1095: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1096: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.3074275492163565%")
  },
  View_2_1097: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("8.562691131498468%"),
    justifyContent: "flex-start"
  },
  Text_2_1097: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1098: {
    width: wp("66.42512077294685%"),
    minWidth: wp("66.42512077294685%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.128440366972477%"),
    justifyContent: "flex-start"
  },
  Text_2_1098: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1099: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6880733944954129%"),
    minHeight: hp("0.6880733944954129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.594202898550726%"),
    top: hp("9.556574923547402%")
  },
  ImageBackground_2_1100: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    height: hp("1.529051987767584%"),
    minHeight: hp("1.529051987767584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.438070251169986%"),
    top: hp("1.3761467889908303%")
  },
  View_2_1103: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.892966360856271%"),
    justifyContent: "flex-start"
  },
  Text_2_1103: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1104: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.1039755351682%")
  },
  View_2_1105: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1106: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605441%")
  },
  View_2_1107: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605441%"),
    justifyContent: "flex-start"
  },
  Text_2_1107: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1108: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.3074275492163565%")
  },
  View_2_1109: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("8.562691131498468%"),
    justifyContent: "flex-start"
  },
  Text_2_1109: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1110: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.128440366972484%"),
    justifyContent: "flex-start"
  },
  Text_2_1110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1111: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6880733944954129%"),
    minHeight: hp("0.6880733944954129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.594202898550726%"),
    top: hp("9.556574923547387%")
  },
  View_2_1112: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.8929663608562635%"),
    justifyContent: "flex-start"
  },
  Text_2_1112: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1113: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.174311926605505%"),
    minHeight: hp("9.174311926605505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.46483180428135%")
  },
  View_2_1114: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.174311926605505%"),
    minHeight: hp("9.174311926605505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1115: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605512%")
  },
  View_2_1116: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605512%"),
    justifyContent: "flex-start"
  },
  Text_2_1116: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1117: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.3074275492163565%")
  },
  View_2_1118: {
    width: wp("67.14975845410628%"),
    minWidth: wp("67.14975845410628%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.128440366972477%"),
    justifyContent: "flex-start"
  },
  Text_2_1118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1119: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.8929663608562635%"),
    justifyContent: "flex-start"
  },
  Text_2_1119: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1120: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.174311926605505%"),
    minHeight: hp("9.174311926605505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70.33639143730888%")
  },
  View_2_1121: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.174311926605505%"),
    minHeight: hp("9.174311926605505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1122: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605441%")
  },
  View_2_1123: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605441%"),
    justifyContent: "flex-start"
  },
  Text_2_1123: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1124: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.3074275492163565%")
  },
  View_2_1125: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.12844036697247%"),
    justifyContent: "flex-start"
  },
  Text_2_1125: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1126: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.8929663608562635%"),
    justifyContent: "flex-start"
  },
  Text_2_1126: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1127: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.174311926605505%"),
    minHeight: hp("9.174311926605505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79.51070336391439%")
  },
  View_2_1128: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.174311926605505%"),
    minHeight: hp("9.174311926605505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1129: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605441%")
  },
  View_2_1130: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("88.68501529051987%"),
    minHeight: hp("88.68501529051987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88.68501529051989%")
  },
  View_2_1131: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1132: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1133: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605441%")
  },
  View_2_1134: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605441%"),
    justifyContent: "flex-start"
  },
  Text_2_1134: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1135: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.3074275492163565%")
  },
  View_2_1136: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("8.562691131498454%"),
    justifyContent: "flex-start"
  },
  Text_2_1136: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1137: {
    width: wp("67.3913043478261%"),
    minWidth: wp("67.3913043478261%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.12844036697247%"),
    justifyContent: "flex-start"
  },
  Text_2_1137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1138: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6880733944954129%"),
    minHeight: hp("0.6880733944954129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.594202898550726%"),
    top: hp("9.556574923547402%")
  },
  View_2_1139: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.892966360856249%"),
    justifyContent: "flex-start"
  },
  Text_2_1139: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1140: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.232415902140659%")
  },
  View_2_1141: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1142: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605725%")
  },
  View_2_1143: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605725%"),
    justifyContent: "flex-start"
  },
  Text_2_1143: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1144: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.307427549216385%")
  },
  View_2_1145: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("8.562691131498482%"),
    justifyContent: "flex-start"
  },
  Text_2_1145: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1146: {
    width: wp("54.830917874396135%"),
    minWidth: wp("54.830917874396135%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.128440366972484%"),
    justifyContent: "flex-start"
  },
  Text_2_1146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1147: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6880733944954129%"),
    minHeight: hp("0.6880733944954129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.869565217391305%"),
    top: hp("9.556574923547402%")
  },
  View_2_1148: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.892966360856278%"),
    justifyContent: "flex-start"
  },
  Text_2_1148: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1149: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.63914373088686%")
  },
  View_2_1150: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1151: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605583%")
  },
  View_2_1152: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605583%"),
    justifyContent: "flex-start"
  },
  Text_2_1152: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1153: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.3074275492163565%")
  },
  View_2_1154: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("8.562691131498468%"),
    justifyContent: "flex-start"
  },
  Text_2_1154: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1155: {
    width: wp("67.6328502415459%"),
    minWidth: wp("67.6328502415459%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.128440366972455%"),
    justifyContent: "flex-start"
  },
  Text_2_1155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1156: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6880733944954129%"),
    minHeight: hp("0.6880733944954129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.835748792270536%"),
    top: hp("9.556574923547402%")
  },
  View_2_1157: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.8929663608562635%"),
    justifyContent: "flex-start"
  },
  Text_2_1157: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1158: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.87155963302753%")
  },
  View_2_1159: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1160: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605299%")
  },
  View_2_1161: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605299%"),
    justifyContent: "flex-start"
  },
  Text_2_1161: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1162: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.3074275492163565%")
  },
  View_2_1163: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("8.562691131498468%"),
    justifyContent: "flex-start"
  },
  Text_2_1163: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1164: {
    width: wp("66.42512077294685%"),
    minWidth: wp("66.42512077294685%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.128440366972484%"),
    justifyContent: "flex-start"
  },
  Text_2_1164: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1165: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6880733944954129%"),
    minHeight: hp("0.6880733944954129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.594202898550726%"),
    top: hp("9.556574923547373%")
  },
  ImageBackground_2_1166: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    height: hp("1.529051987767584%"),
    minHeight: hp("1.529051987767584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.438070251169986%"),
    top: hp("1.376146788990809%")
  },
  View_2_1169: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.8929663608562635%"),
    justifyContent: "flex-start"
  },
  Text_2_1169: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1170: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.1039755351682%")
  },
  View_2_1171: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.232415902140673%"),
    minHeight: hp("12.232415902140673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1172: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605299%")
  },
  View_2_1173: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605299%"),
    justifyContent: "flex-start"
  },
  Text_2_1173: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1174: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.3074275492163565%")
  },
  View_2_1175: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("8.56269113149844%"),
    justifyContent: "flex-start"
  },
  Text_2_1175: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1176: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.128440366972455%"),
    justifyContent: "flex-start"
  },
  Text_2_1176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1177: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6880733944954129%"),
    minHeight: hp("0.6880733944954129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.594202898550726%"),
    top: hp("9.556574923547402%")
  },
  View_2_1178: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.892966360856235%"),
    justifyContent: "flex-start"
  },
  Text_2_1178: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1179: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.174311926605505%"),
    minHeight: hp("9.174311926605505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.464831804281346%")
  },
  View_2_1180: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.174311926605505%"),
    minHeight: hp("9.174311926605505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1181: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605441%")
  },
  View_2_1182: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605441%"),
    justifyContent: "flex-start"
  },
  Text_2_1182: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1183: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.3074275492163565%")
  },
  View_2_1184: {
    width: wp("67.14975845410628%"),
    minWidth: wp("67.14975845410628%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.128440366972484%"),
    justifyContent: "flex-start"
  },
  Text_2_1184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1185: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.892966360856278%"),
    justifyContent: "flex-start"
  },
  Text_2_1185: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1186: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.174311926605505%"),
    minHeight: hp("9.174311926605505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70.33639143730885%")
  },
  View_2_1187: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.174311926605505%"),
    minHeight: hp("9.174311926605505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1188: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605867%")
  },
  View_2_1189: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.9174311926605867%"),
    justifyContent: "flex-start"
  },
  Text_2_1189: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1190: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("2.063547507703122%"),
    minHeight: hp("2.063547507703122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.307427549216385%")
  },
  View_2_1191: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("2.7522935779816518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("4.128440366972484%"),
    justifyContent: "flex-start"
  },
  Text_2_1191: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1192: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.293577981651376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.892966360856292%"),
    justifyContent: "flex-start"
  },
  Text_2_1192: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1193: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.174311926605505%"),
    minHeight: hp("9.174311926605505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79.51070336391437%")
  },
  View_2_1194: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.174311926605505%"),
    minHeight: hp("9.174311926605505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1195: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.892966360856269%"),
    minHeight: hp("4.892966360856269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.9174311926605299%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

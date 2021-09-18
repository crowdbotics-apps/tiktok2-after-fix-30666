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
        style={styles.ImageBackground_2_948}
      />
      <View style={styles.View_2_949}>
        <View style={styles.View_2_950} />
        <View style={styles.View_2_951}>
          <Text style={styles.Text_2_951}>Add comment... </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/222b/e495/c9e7047527ddb1bc5a83711323c66e92"
          }}
          style={styles.ImageBackground_2_952}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc47/3ce0/2e9bbcfd3447958164b45857eae59bc1"
          }}
          style={styles.ImageBackground_2_953}
        />
      </View>
      <View style={styles.View_2_954}>
        <View style={styles.View_2_955} />
        <View style={styles.View_2_956}>
          <Text style={styles.Text_2_956}>579 comments</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c94/fb89/189e5fce05db3356e3efd866df695503"
          }}
          style={styles.ImageBackground_2_957}
        />
        <View style={styles.View_2_958}>
          <View style={styles.View_2_959} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d40/c3a7/f4f2e75f8a02d9fb09a3b89774d1f8f7"
            }}
            style={styles.ImageBackground_2_960}
          />
          <View style={styles.View_2_961}>
            <Text style={styles.Text_2_961}>martini_rond</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
            }}
            style={styles.ImageBackground_2_962}
          />
          <View style={styles.View_2_963}>
            <Text style={styles.Text_2_963}>View replies (4)</Text>
          </View>
          <View style={styles.View_2_964}>
            <Text style={styles.Text_2_964}>
              How neatly I write the date in my book 22h
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
            }}
            style={styles.ImageBackground_2_965}
          />
          <View style={styles.View_2_966}>
            <Text style={styles.Text_2_966}>8098</Text>
          </View>
        </View>
        <View style={styles.View_2_967}>
          <View style={styles.View_2_968} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f33/4ef4/57f94113f2effc2e081ea9c5d6894754"
            }}
            style={styles.ImageBackground_2_969}
          />
          <View style={styles.View_2_970}>
            <Text style={styles.Text_2_970}>maxjacobson</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
            }}
            style={styles.ImageBackground_2_971}
          />
          <View style={styles.View_2_972}>
            <Text style={styles.Text_2_972}>View replies (1)</Text>
          </View>
          <View style={styles.View_2_973}>
            <Text style={styles.Text_2_973}>
              Now that’s a skill very talented 22h
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
            }}
            style={styles.ImageBackground_2_974}
          />
          <View style={styles.View_2_975}>
            <Text style={styles.Text_2_975}>8098</Text>
          </View>
        </View>
        <View style={styles.View_2_976}>
          <View style={styles.View_2_977} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4d4/c7e7/3fc4de8bb47ee895f31b3953f8de1a7e"
            }}
            style={styles.ImageBackground_2_978}
          />
          <View style={styles.View_2_979}>
            <Text style={styles.Text_2_979}>kiero_d</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
            }}
            style={styles.ImageBackground_2_980}
          />
          <View style={styles.View_2_981}>
            <Text style={styles.Text_2_981}>View replies (9)</Text>
          </View>
          <View style={styles.View_2_982}>
            <Text style={styles.Text_2_982}>
              Use that on r air forces to whiten them 21h
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
            }}
            style={styles.ImageBackground_2_983}
          />
          <View style={styles.View_2_984}>
            <Text style={styles.Text_2_984}>8098</Text>
          </View>
        </View>
        <View style={styles.View_2_985}>
          <View style={styles.View_2_986} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e053/6a9d/8fd0f3baa169a17cbe7ca50e32e22be9"
            }}
            style={styles.ImageBackground_2_987}
          />
          <View style={styles.View_2_988}>
            <Text style={styles.Text_2_988}>mis_potter</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
            }}
            style={styles.ImageBackground_2_989}
          />
          <View style={styles.View_2_990}>
            <Text style={styles.Text_2_990}>View replies (4)</Text>
          </View>
          <View style={styles.View_2_991}>
            <Text style={styles.Text_2_991}>
              Sjpuld’ve used that on his forces 😷😷 13h
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
            }}
            style={styles.ImageBackground_2_992}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd85/f25b/8f1a99c52ffef0b372334ba68ac5a2a2"
            }}
            style={styles.ImageBackground_2_993}
          />
          <View style={styles.View_2_996}>
            <Text style={styles.Text_2_996}>8098</Text>
          </View>
        </View>
        <View style={styles.View_2_997}>
          <View style={styles.View_2_998} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd07/9400/e4bd119eff408d916a2fefb2c7910286"
            }}
            style={styles.ImageBackground_2_999}
          />
          <View style={styles.View_2_1000}>
            <Text style={styles.Text_2_1000}>karennne</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
            }}
            style={styles.ImageBackground_2_1001}
          />
          <View style={styles.View_2_1002}>
            <Text style={styles.Text_2_1002}>View replies (2)</Text>
          </View>
          <View style={styles.View_2_1003}>
            <Text style={styles.Text_2_1003}>No prressure 22h</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c3b/506f/2c6de446b383e3a636b4af3e902de759"
            }}
            style={styles.ImageBackground_2_1004}
          />
          <View style={styles.View_2_1005}>
            <Text style={styles.Text_2_1005}>8098</Text>
          </View>
        </View>
        <View style={styles.View_2_1006}>
          <View style={styles.View_2_1007} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e828/fa1e/acd6ff323146bc8614bee4d904a9fac4"
            }}
            style={styles.ImageBackground_2_1008}
          />
          <View style={styles.View_2_1009}>
            <Text style={styles.Text_2_1009}>zackjohn</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
            }}
            style={styles.ImageBackground_2_1010}
          />
          <View style={styles.View_2_1011}>
            <Text style={styles.Text_2_1011}>
              Doing this would make me so anxious 22h
            </Text>
          </View>
          <View style={styles.View_2_1012}>
            <Text style={styles.Text_2_1012}>8098</Text>
          </View>
        </View>
        <View style={styles.View_2_1013}>
          <View style={styles.View_2_1014} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8119/d785/dae96242ad778b0de8ff3cc04f604ce5"
            }}
            style={styles.ImageBackground_2_1015}
          />
          <View style={styles.View_2_1016}>
            <Text style={styles.Text_2_1016}>joshua_l</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a316/9e3a/9a44e13be9a46def9bd45b1513c11c30"
            }}
            style={styles.ImageBackground_2_1017}
          />
          <View style={styles.View_2_1018}>
            <Text style={styles.Text_2_1018}>My OCD couldn’t do it 15h</Text>
          </View>
          <View style={styles.View_2_1019}>
            <Text style={styles.Text_2_1019}>8098</Text>
          </View>
        </View>
        <View style={styles.View_2_1020}>
          <View style={styles.View_2_1021} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad44/c5c8/98d8a4fc73ad8468c2ecc248ba8cb0d8"
            }}
            style={styles.ImageBackground_2_1022}
          />
        </View>
      </View>
      <View style={styles.View_2_1023}>
        <View style={styles.View_2_1024}>
          <Text style={styles.Text_2_1024}>Following</Text>
        </View>
        <View style={styles.View_2_1025}>
          <Text style={styles.Text_2_1025}>For You</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c8f/4480/6b71d28b6a81dc33faedbd7665be158d"
          }}
          style={styles.ImageBackground_2_1026}
        />
      </View>
      <View style={styles.View_2_1027}>
        <View style={styles.View_2_1028} />
        <View style={styles.View_2_1029} />
      </View>
      <View style={styles.View_2_1030}>
        <View style={styles.View_2_1031} />
        <View style={styles.View_2_1032}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_2_1033}
          />
          <View style={styles.View_2_1036}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_2_1037}
            />
            <View style={styles.View_2_1038} />
          </View>
          <View style={styles.View_2_1039} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a90/f82a/1d7cd5ed16711f81a9b027f926b47efe"
          }}
          style={styles.ImageBackground_2_1040}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/4485/335473019c89f168a47a3e38da77e67f"
          }}
          style={styles.ImageBackground_2_1044}
        />
        <View style={styles.View_2_1049}>
          <View style={styles.View_2_1050}>
            <Text style={styles.Text_2_1050}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_2_948: {
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
  View_2_949: {
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
  View_2_950: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.293715596850452%"),
    minHeight: hp("11.293715596850452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.04508430189123658%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_951: {
    width: wp("25.845410628019323%"),
    minWidth: wp("25.845410628019323%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_2_951: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_952: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.5946888209541%"),
    top: hp("2.117486338797832%")
  },
  ImageBackground_2_953: {
    width: wp("5.31401288682136%"),
    minWidth: wp("5.31401288682136%"),
    height: hp("3.0054657837080825%"),
    minHeight: hp("3.0054657837080825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.95169082125604%"),
    top: hp("2.117486338797832%")
  },
  View_2_954: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("78.00546448087432%"),
    minHeight: hp("78.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.060109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_955: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("78.00546448087432%"),
    minHeight: hp("78.00546448087432%"),
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
  View_2_956: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_2_956: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_957: {
    width: wp("2.2946859903381642%"),
    minWidth: wp("2.2946859903381642%"),
    height: hp("1.2978142076502732%"),
    minHeight: hp("1.2978142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.05555555555556%"),
    top: hp("2.0833333333333357%")
  },
  View_2_958: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748633%")
  },
  View_2_959: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_960: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.8196721311475414%")
  },
  View_2_961: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_2_961: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_962: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("1.8436612978659042%"),
    minHeight: hp("1.8436612978659042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.0615541218408495%")
  },
  View_2_963: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("7.650273224043723%"),
    justifyContent: "flex-start"
  },
  Text_2_963: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_964: {
    width: wp("67.3913043478261%"),
    minWidth: wp("67.3913043478261%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_2_964: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_965: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6147540983606558%"),
    minHeight: hp("0.6147540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.594202898550726%"),
    top: hp("8.538251366120221%")
  },
  View_2_966: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_2_966: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_967: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.939890710382514%")
  },
  View_2_968: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_969: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.8196721311475414%")
  },
  View_2_970: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_2_970: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_971: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("1.8436612978659042%"),
    minHeight: hp("1.8436612978659042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.0615541218408495%")
  },
  View_2_972: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_972: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_973: {
    width: wp("54.830917874396135%"),
    minWidth: wp("54.830917874396135%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_2_973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_974: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6147540983606558%"),
    minHeight: hp("0.6147540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.869565217391305%"),
    top: hp("8.538251366120221%")
  },
  View_2_975: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.371584699453557%"),
    justifyContent: "flex-start"
  },
  Text_2_975: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_976: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.065573770491795%")
  },
  View_2_977: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_978: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.8196721311475557%")
  },
  View_2_979: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.8196721311475557%"),
    justifyContent: "flex-start"
  },
  Text_2_979: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_980: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("1.8436612978659042%"),
    minHeight: hp("1.8436612978659042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.0615541218408566%")
  },
  View_2_981: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_981: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_982: {
    width: wp("67.6328502415459%"),
    minWidth: wp("67.6328502415459%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_2_982: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_983: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6147540983606558%"),
    minHeight: hp("0.6147540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.835748792270536%"),
    top: hp("8.538251366120221%")
  },
  View_2_984: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.371584699453564%"),
    justifyContent: "flex-start"
  },
  Text_2_984: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_985: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.99453551912568%")
  },
  View_2_986: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_987: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.8196721311475557%")
  },
  View_2_988: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.8196721311475557%"),
    justifyContent: "flex-start"
  },
  Text_2_988: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_989: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("1.8436612978659042%"),
    minHeight: hp("1.8436612978659042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.0615541218408566%")
  },
  View_2_990: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_990: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_991: {
    width: wp("66.42512077294685%"),
    minWidth: wp("66.42512077294685%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_2_991: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_992: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6147540983606558%"),
    minHeight: hp("0.6147540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.594202898550726%"),
    top: hp("8.538251366120221%")
  },
  ImageBackground_2_993: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.438070251169986%"),
    top: hp("1.2295081967213122%")
  },
  View_2_996: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.371584699453564%"),
    justifyContent: "flex-start"
  },
  Text_2_996: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_997: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57.92349726775956%")
  },
  View_2_998: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_999: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.8196721311475414%")
  },
  View_2_1000: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_2_1000: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1001: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("1.8436612978659042%"),
    minHeight: hp("1.8436612978659042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.0615541218408566%")
  },
  View_2_1002: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("7.6502732240437155%"),
    justifyContent: "flex-start"
  },
  Text_2_1002: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1003: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_2_1003: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1004: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    height: hp("0.6147540983606558%"),
    minHeight: hp("0.6147540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.594202898550726%"),
    top: hp("8.538251366120221%")
  },
  View_2_1005: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_2_1005: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1006: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.868852459016395%")
  },
  View_2_1007: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1008: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.8196721311475414%")
  },
  View_2_1009: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_2_1009: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1010: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("1.8436612978659042%"),
    minHeight: hp("1.8436612978659042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.0615541218408495%")
  },
  View_2_1011: {
    width: wp("67.14975845410628%"),
    minWidth: wp("67.14975845410628%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_2_1011: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1012: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_2_1012: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1013: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.85245901639344%")
  },
  View_2_1014: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1015: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.8196721311475414%")
  },
  View_2_1016: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_2_1016: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1017: {
    width: wp("3.7439694151210325%"),
    minWidth: wp("3.7439694151210325%"),
    height: hp("1.8436612978659042%"),
    minHeight: hp("1.8436612978659042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.33091787439614%"),
    top: hp("2.0615541218408566%")
  },
  View_2_1018: {
    width: wp("40.82125603864734%"),
    minWidth: wp("40.82125603864734%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("3.6885245901639223%"),
    justifyContent: "flex-start"
  },
  Text_2_1018: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1019: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%"),
    top: hp("4.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_2_1019: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1020: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77.04918032786885%")
  },
  View_2_1021: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 244, 1)"
  },
  ImageBackground_2_1022: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("0.8196721311475272%")
  },
  View_2_1023: {
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
  View_2_1024: {
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
  Text_2_1024: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1025: {
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
  Text_2_1025: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  ImageBackground_2_1026: {
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
  View_2_1027: {
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
  View_2_1028: {
    width: wp("100%"),
    height: hp("4.781420765027322%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_1029: {
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
  View_2_1030: {
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
  View_2_1031: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_1032: {
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
  ImageBackground_2_1033: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1036: {
    width: wp("0.36231884057971014%"),
    minWidth: wp("0.36231884057971014%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555571%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_2_1037: {
    width: wp("0.966183574879227%"),
    minWidth: wp("0.966183574879227%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008604956454917989%")
  },
  View_2_1038: {
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
  View_2_1039: {
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
  ImageBackground_2_1040: {
    width: wp("4.072637143342392%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.2309516948428962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499490489131%")
  },
  ImageBackground_2_1044: {
    width: wp("4.533327259303291%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111129981884%")
  },
  View_2_1049: {
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
  View_2_1050: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1050: {
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

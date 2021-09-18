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
      <View style={styles.View_2_871}>
        <View style={styles.View_2_872} />
        <View style={styles.View_2_873}>
          <Text style={styles.Text_2_873}>Cancel</Text>
        </View>
      </View>
      <View style={styles.View_2_874}>
        <View style={styles.View_2_875} />
        <View style={styles.View_2_876}>
          <Text style={styles.Text_2_876}>Share to</Text>
        </View>
        <View style={styles.View_2_877}>
          <View style={styles.View_2_878}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fc/7aa9/104a913a75f68b8a483d98dfc1e95d5a"
              }}
              style={styles.ImageBackground_2_879}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3797/e844/05a4008027a339e774583e9efa0e8614"
              }}
              style={styles.ImageBackground_2_880}
            />
            <View style={styles.View_2_881}>
              <Text style={styles.Text_2_881}>Report</Text>
            </View>
          </View>
          <View style={styles.View_2_882}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fc/7aa9/104a913a75f68b8a483d98dfc1e95d5a"
              }}
              style={styles.ImageBackground_2_883}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d95/7e01/f1b4d46ef6b3df1a284575605d617543"
              }}
              style={styles.ImageBackground_2_884}
            />
            <View style={styles.View_2_885}>
              <Text style={styles.Text_2_885}>Save video</Text>
            </View>
          </View>
          <View style={styles.View_2_886}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fc/7aa9/104a913a75f68b8a483d98dfc1e95d5a"
              }}
              style={styles.ImageBackground_2_887}
            />
            <View style={styles.View_2_888}>
              <Text style={styles.Text_2_888}>Not interested</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efaf/3c55/6c8a2ed561dfd914cd1e05724107f802"
              }}
              style={styles.ImageBackground_2_889}
            />
          </View>
          <View style={styles.View_2_890}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fc/7aa9/104a913a75f68b8a483d98dfc1e95d5a"
              }}
              style={styles.ImageBackground_2_891}
            />
            <View style={styles.View_2_892}>
              <Text style={styles.Text_2_892}>Duet</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c3/2c7a/f0a64a9e07d3652c85500dbd9b9415af"
              }}
              style={styles.ImageBackground_2_893}
            />
          </View>
          <View style={styles.View_2_894}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fc/7aa9/104a913a75f68b8a483d98dfc1e95d5a"
              }}
              style={styles.ImageBackground_2_895}
            />
            <View style={styles.View_2_896}>
              <Text style={styles.Text_2_896}>React</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73e0/6d14/d0bc44fe7a1d83f3f962a51adfb329c6"
              }}
              style={styles.ImageBackground_2_897}
            />
          </View>
          <View style={styles.View_2_898}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12fc/7aa9/104a913a75f68b8a483d98dfc1e95d5a"
              }}
              style={styles.ImageBackground_2_899}
            />
            <View style={styles.View_2_900}>
              <Text style={styles.Text_2_900}>Add to Favorites</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8860/3b26/9a59f9d645b9fb5519904ebfd2f187ee"
              }}
              style={styles.ImageBackground_2_901}
            />
          </View>
        </View>
        <View style={styles.View_2_902}>
          <View style={styles.View_2_903}>
            <View style={styles.View_2_904}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3335/b29b/54fa799e51adba392159032fcaa63223"
                }}
                style={styles.ImageBackground_2_905}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca45/4e7b/49a80b7e80c91f60faef24dd4e0206c7"
                }}
                style={styles.ImageBackground_2_906}
              />
            </View>
            <View style={styles.View_2_910}>
              <Text style={styles.Text_2_910}>WhatsApp</Text>
            </View>
          </View>
          <View style={styles.View_2_911}>
            <View style={styles.View_2_912}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3335/b29b/54fa799e51adba392159032fcaa63223"
                }}
                style={styles.ImageBackground_2_913}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca45/4e7b/49a80b7e80c91f60faef24dd4e0206c7"
                }}
                style={styles.ImageBackground_2_914}
              />
            </View>
            <View style={styles.View_2_918}>
              <Text style={styles.Text_2_918}>WhatsApp status</Text>
            </View>
          </View>
          <View style={styles.View_2_919}>
            <View style={styles.View_2_920}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20ee/4ad7/dcf4142a9bd5cc2ae7eafc1f680ae7ec"
                }}
                style={styles.ImageBackground_2_921}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a41/f4e0/d216867c3a53978e0c14d7cf038535b3"
                }}
                style={styles.ImageBackground_2_922}
              />
            </View>
            <View style={styles.View_2_925}>
              <Text style={styles.Text_2_925}>Messenger</Text>
            </View>
          </View>
          <View style={styles.View_2_926}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bad/7c4d/3312f09d6a395065bf51458b27da65cd"
              }}
              style={styles.ImageBackground_2_927}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561f/066e/1a4ea5af5c55c94e44f1d9b8721ef16b"
              }}
              style={styles.ImageBackground_2_929}
            />
            <View style={styles.View_2_930}>
              <Text style={styles.Text_2_930}>Message</Text>
            </View>
          </View>
          <View style={styles.View_2_931}>
            <View style={styles.View_2_932}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b1/16d3/2c8d2c1ba7455d72008490ddf9c1126a"
                }}
                style={styles.ImageBackground_2_933}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75e8/837e/47fec598f68c823d45c1eca17cd043ff"
                }}
                style={styles.ImageBackground_2_934}
              />
            </View>
            <View style={styles.View_2_937}>
              <Text style={styles.Text_2_937}>SMS</Text>
            </View>
          </View>
          <View style={styles.View_2_938}>
            <View style={styles.View_2_939}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4ae/6470/682a81ab092378b47ce4430a4b5d5689"
                }}
                style={styles.ImageBackground_2_940}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f69/7e08/0e4a200207a916709e771b707f8270f9"
                }}
                style={styles.ImageBackground_2_941}
              />
            </View>
            <View style={styles.View_2_942}>
              <Text style={styles.Text_2_942}>Instagram</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fd9/8fe4/063654c760adfd17763aeb9261f5f0b5"
          }}
          style={styles.ImageBackground_2_943}
        />
      </View>
      <View style={styles.View_2_944}>
        <View style={styles.View_2_945} />
        <View style={styles.View_2_946} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_2_871: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("26.860841423948216%"),
    minHeight: hp("26.860841423948216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.13915857605178%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_872: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("26.754044714869035%"),
    minHeight: hp("26.754044714869035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.10679670907919103%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_873: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("5.825242718446602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%"),
    top: hp("4.854368932038824%"),
    justifyContent: "flex-start"
  },
  Text_2_873: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_874: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("73.13915857605178%"),
    minHeight: hp("73.13915857605178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_875: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("73.13915857605178%"),
    minHeight: hp("73.13915857605178%"),
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
  View_2_876: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("4.854368932038835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.71980676328502%"),
    top: hp("3.2362459546925564%"),
    justifyContent: "flex-start"
  },
  Text_2_876: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_877: {
    width: wp("94.68599033816425%"),
    minWidth: wp("94.68599033816425%"),
    height: hp("26.860841423948216%"),
    minHeight: hp("26.860841423948216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("45.307443365695796%")
  },
  View_2_878: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("22.330097087378643%"),
    minHeight: hp("22.330097087378643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_879: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("15.210355987055015%"),
    minHeight: hp("15.210355987055015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_880: {
    width: wp("5.79058559620438%"),
    minWidth: wp("5.79058559620438%"),
    height: hp("6.6525382131434565%"),
    minHeight: hp("6.6525382131434565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.781021191878019%"),
    top: hp("3.94615000505663%")
  },
  View_2_881: {
    width: wp("7.971014492753622%"),
    minWidth: wp("7.971014492753622%"),
    minHeight: hp("4.207119741100324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386469%"),
    top: hp("18.12297734627831%"),
    justifyContent: "flex-start"
  },
  Text_2_881: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_882: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    height: hp("22.330097087378643%"),
    minHeight: hp("22.330097087378643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.729468599033815%"),
    top: hp("0%")
  },
  ImageBackground_2_883: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("15.210355987055015%"),
    minHeight: hp("15.210355987055015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995134%"),
    top: hp("0%")
  },
  ImageBackground_2_884: {
    width: wp("4.546646449876868%"),
    minWidth: wp("4.546646449876868%"),
    height: hp("6.877022653721683%"),
    minHeight: hp("6.877022653721683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1276867262983075%"),
    top: hp("4.045307443365694%")
  },
  View_2_885: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("4.207119741100324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.12297734627831%"),
    justifyContent: "flex-start"
  },
  Text_2_885: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_886: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("26.860841423948216%"),
    minHeight: hp("26.860841423948216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.425120772946862%"),
    top: hp("0%")
  },
  ImageBackground_2_887: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("15.210355987055015%"),
    minHeight: hp("15.210355987055015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%")
  },
  View_2_888: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    minHeight: hp("8.737864077669903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.12297734627831%"),
    justifyContent: "flex-start"
  },
  Text_2_888: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_889: {
    width: wp("5.797118956340109%"),
    minWidth: wp("5.797118956340109%"),
    height: hp("7.212459848150853%"),
    minHeight: hp("7.212459848150853%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9589371980676304%"),
    top: hp("4.349337580906145%")
  },
  View_2_890: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("22.330097087378643%"),
    minHeight: hp("22.330097087378643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  ImageBackground_2_891: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("15.210355987055015%"),
    minHeight: hp("15.210355987055015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_892: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("4.207119741100324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574894%"),
    top: hp("18.12297734627831%"),
    justifyContent: "flex-start"
  },
  Text_2_892: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_893: {
    width: wp("7.367150219166336%"),
    minWidth: wp("7.367150219166336%"),
    height: hp("6.63430729344439%"),
    minHeight: hp("6.63430729344439%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584485%"),
    top: hp("4.207119741100321%")
  },
  View_2_894: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("22.330097087378643%"),
    minHeight: hp("22.330097087378643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666667%"),
    top: hp("0%")
  },
  ImageBackground_2_895: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("15.210355987055015%"),
    minHeight: hp("15.210355987055015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_896: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("4.207119741100324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("18.12297734627831%"),
    justifyContent: "flex-start"
  },
  Text_2_896: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_897: {
    width: wp("5.193236714975845%"),
    minWidth: wp("5.193236714975845%"),
    height: hp("8.414239482200648%"),
    minHeight: hp("8.414239482200648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: hp("3.2362459546925564%")
  },
  View_2_898: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("26.860841423948216%"),
    minHeight: hp("26.860841423948216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.33333333333334%"),
    top: hp("0%")
  },
  ImageBackground_2_899: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("15.210355987055015%"),
    minHeight: hp("15.210355987055015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_900: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("8.737864077669903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2415458937198025%"),
    top: hp("18.12297734627831%"),
    justifyContent: "flex-start"
  },
  Text_2_900: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_901: {
    width: wp("3.985507246376811%"),
    minWidth: wp("3.985507246376811%"),
    height: hp("6.604350809140498%"),
    minHeight: hp("6.604350809140498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.683574879227052%"),
    top: hp("4.288025889967635%")
  },
  View_2_902: {
    width: wp("95.28985507246377%"),
    minWidth: wp("95.28985507246377%"),
    height: hp("26.860841423948216%"),
    minHeight: hp("26.860841423948216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("13.268608414239482%")
  },
  View_2_903: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    height: hp("22.330097087378643%"),
    minHeight: hp("22.330097087378643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.3236245954692549%")
  },
  View_2_904: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("15.210355987055015%"),
    minHeight: hp("15.210355987055015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980695%"),
    top: hp("0%")
  },
  ImageBackground_2_905: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("15.210355987055015%"),
    minHeight: hp("15.210355987055015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_906: {
    width: wp("6.4139886754722415%"),
    height: hp("8.632095114698688%"),
    top: hp("2.983626578618024%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6570048309178738%")
  },
  View_2_910: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    minHeight: hp("4.207119741100324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.12297734627832%"),
    justifyContent: "flex-start"
  },
  Text_2_910: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_911: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    height: hp("26.537216828478964%"),
    minHeight: hp("26.537216828478964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.666666666666668%"),
    top: hp("0.3236245954692549%")
  },
  View_2_912: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("15.210355987055015%"),
    minHeight: hp("15.210355987055015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980606%"),
    top: hp("0%")
  },
  ImageBackground_2_913: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("15.210355987055015%"),
    minHeight: hp("15.210355987055015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_914: {
    width: wp("6.4139886754722415%"),
    height: hp("8.632095114698688%"),
    top: hp("2.983626578618024%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6570048309178738%")
  },
  View_2_918: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    minHeight: hp("8.414239482200648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.12297734627832%"),
    justifyContent: "flex-start"
  },
  Text_2_918: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_919: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    height: hp("22.330097087378643%"),
    minHeight: hp("22.330097087378643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.18357487922705%"),
    top: hp("0.3236245954692549%")
  },
  View_2_920: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("15.210355987055015%"),
    minHeight: hp("15.210355987055015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%"),
    top: hp("0%")
  },
  ImageBackground_2_921: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("15.210355987055015%"),
    minHeight: hp("15.210355987055015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_922: {
    width: wp("7.487922705314009%"),
    height: hp("9.70873786407767%"),
    top: hp("2.5889967637540447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9323671497584627%")
  },
  View_2_925: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("4.207119741100324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.12297734627832%"),
    justifyContent: "flex-start"
  },
  Text_2_925: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_926: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("22.653721682847898%"),
    minHeight: hp("22.653721682847898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("0%")
  },
  ImageBackground_2_927: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("15.857605177993527%"),
    minHeight: hp("15.857605177993527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_929: {
    width: wp("6.52257486242027%"),
    minWidth: wp("6.52257486242027%"),
    height: hp("7.605229226516674%"),
    minHeight: hp("7.605229226516674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.65653306159421%"),
    top: hp("4.530744336569578%")
  },
  View_2_930: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("4.207119741100324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6038647342995205%"),
    top: hp("18.446601941747574%"),
    justifyContent: "flex-start"
  },
  Text_2_930: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_931: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("22.653721682847898%"),
    minHeight: hp("22.653721682847898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_2_932: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("15.857605177993527%"),
    minHeight: hp("15.857605177993527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_933: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("15.857605177993527%"),
    minHeight: hp("15.857605177993527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_934: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("8.717959752746385%"),
    minHeight: hp("8.717959752746385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2946859903381593%"),
    top: hp("3.559870550161813%")
  },
  View_2_937: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("4.207119741100324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2608695652173907%"),
    top: hp("18.446601941747574%"),
    justifyContent: "flex-start"
  },
  Text_2_937: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_938: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("22.653721682847898%"),
    minHeight: hp("22.653721682847898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.21256038647343%"),
    top: hp("0%")
  },
  View_2_939: {
    width: wp("11.835750635119451%"),
    minWidth: wp("11.835750635119451%"),
    height: hp("15.857605177993527%"),
    minHeight: hp("15.857605177993527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12077294685991546%"),
    top: hp("0%")
  },
  ImageBackground_2_940: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("15.857605177993527%"),
    minHeight: hp("15.857605177993527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_941: {
    width: wp("7.48792316602624%"),
    height: hp("10.032362459546926%"),
    top: hp("2.9126213592232997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478251%")
  },
  View_2_942: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("4.207119741100324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.446601941747574%"),
    justifyContent: "flex-start"
  },
  Text_2_942: {
    color: "rgba(78, 79, 87, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_943: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("40.77669902912621%")
  },
  View_2_944: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.326860841423949%"),
    minHeight: hp("11.326860841423949%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88.67313915857605%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_945: {
    width: wp("100%"),
    height: hp("11.326860841423949%"),
    top: hp("-0.3236245954692549%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_946: {
    width: wp("32.367149758454104%"),
    height: hp("1.6181229773462782%"),
    minHeight: hp("1.6181229773462782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("6.472491909385113%"),
    backgroundColor: "rgba(6, 6, 6, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

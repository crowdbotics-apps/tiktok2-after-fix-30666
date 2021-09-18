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
      <View style={styles.View_2_249} />
      <View style={styles.View_2_250}>
        <View style={styles.View_2_251} />
        <View style={styles.View_2_252}>
          <View style={styles.View_2_253} />
          <View style={styles.View_2_254} />
          <View style={styles.View_2_255} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/402e/8e9e/c2de5aec77df53583a37a561f6eb1fad"
            }}
            style={styles.ImageBackground_2_256}
          />
        </View>
        <View style={styles.View_2_257}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80d2/002f/661cc6cbc49f5722764b49a547c67b1d"
            }}
            style={styles.ImageBackground_2_258}
          />
          <View style={styles.View_2_259}>
            <Text style={styles.Text_2_259}>Home</Text>
          </View>
        </View>
        <View style={styles.View_2_260}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fd8/9eb8/51f4224e00874a4df1420ba2a1ab6997"
            }}
            style={styles.ImageBackground_2_261}
          />
          <View style={styles.View_2_262}>
            <Text style={styles.Text_2_262}>Discover</Text>
          </View>
        </View>
        <View style={styles.View_2_263}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/917a/9a5b/822b8f0e6decbda9d325743b6be10401"
            }}
            style={styles.ImageBackground_2_264}
          />
          <View style={styles.View_2_265}>
            <Text style={styles.Text_2_265}>Me</Text>
          </View>
        </View>
        <View style={styles.View_2_266}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e85/57fb/d7d638f3d610fa236d6b1d87f86596fa"
            }}
            style={styles.ImageBackground_2_267}
          />
          <View style={styles.View_2_268}>
            <Text style={styles.Text_2_268}>Inbox</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_269}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d78/de25/b24f9331ae2c4102a9cea7855dba002e"
          }}
          style={styles.ImageBackground_2_270}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d2e/9edd/a21d03be50ff553b4af51f7f021c7e9f"
          }}
          style={styles.ImageBackground_2_271}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/032c/8d72/e7d99b2bed2dda6db4d95c78adcc1b0c"
          }}
          style={styles.ImageBackground_2_272}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee3f/1bfa/3590feb16c3f644c24a28bf82da30de8"
          }}
          style={styles.ImageBackground_2_273}
        />
      </View>
      <View style={styles.View_2_274}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/490d/0d97/59bc5bea053d2de7186fc9d2c3b650b1"
          }}
          style={styles.ImageBackground_2_275}
        />
        <View style={styles.View_2_276}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdc/3cbb/326e4472d5d1090baee84c602fd71127"
            }}
            style={styles.ImageBackground_2_277}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b6a/eae8/4b67d700db22ba2f11f9ec506724ca61"
            }}
            style={styles.ImageBackground_2_278}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8ae/419d/75a5e59876a258744b51e23e4ce04ec0"
            }}
            style={styles.ImageBackground_2_279}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/473c/91cb/d3a0a8fc4effea3a391830be9146056c"
            }}
            style={styles.ImageBackground_2_280}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/013c/6c15/6194ac63e9c6d743cc54ca98b65bcf54"
            }}
            style={styles.ImageBackground_2_281}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c03/2cd5/c730d381495fab7118db4b95d9c61462"
            }}
            style={styles.ImageBackground_2_284}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f641/0785/6a631367916a26389e1320ca73c441f8"
            }}
            style={styles.ImageBackground_2_285}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f860/bc53/1799cceb37c27744c7f0eaec6321d8c8"
            }}
            style={styles.ImageBackground_2_286}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c487/9a89/b9ca57d2fdafb5e1d2e8b4ff9917187c"
            }}
            style={styles.ImageBackground_2_289}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcbd/7aa6/ef5f42b552efc1c8e36ffe9f13f9d223"
            }}
            style={styles.ImageBackground_2_290}
          />
        </View>
        <View style={styles.View_2_291}>
          <Text style={styles.Text_2_291}>Tap to create</Text>
        </View>
        <View style={styles.View_2_292}>
          <Text style={styles.Text_2_292}>a new video</Text>
        </View>
      </View>
      <View style={styles.View_2_293}>
        <View style={styles.View_2_294} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ca0/3cd4/53a6c355d93e4554e64816ab7e954cb2"
          }}
          style={styles.ImageBackground_2_295}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c17/fca2/f6ab616e68c9dec0eadab0b6c3ef9744"
          }}
          style={styles.ImageBackground_2_296}
        />
      </View>
      <View style={styles.View_2_299}>
        <View style={styles.View_2_300} />
        <View style={styles.View_2_301}>
          <View style={styles.View_2_302}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/807c/60e7/b8187758f0fd21ec2aaeb80b57028722"
              }}
              style={styles.ImageBackground_2_303}
            />
            <View style={styles.View_2_304}>
              <Text style={styles.Text_2_304}>@jacob_w</Text>
            </View>
          </View>
          <View style={styles.View_2_305}>
            <View style={styles.View_2_306}>
              <Text style={styles.Text_2_306}>14</Text>
            </View>
            <View style={styles.View_2_307}>
              <Text style={styles.Text_2_307}>Following</Text>
            </View>
          </View>
          <View style={styles.View_2_308}>
            <View style={styles.View_2_309}>
              <Text style={styles.Text_2_309}>38</Text>
            </View>
            <View style={styles.View_2_310}>
              <Text style={styles.Text_2_310}>Followers</Text>
            </View>
          </View>
          <View style={styles.View_2_311}>
            <View style={styles.View_2_312}>
              <Text style={styles.Text_2_312}>91</Text>
            </View>
            <View style={styles.View_2_313}>
              <Text style={styles.Text_2_313}>Likes</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_314}>
          <Text style={styles.Text_2_314}>Tap to add bio</Text>
        </View>
        <View style={styles.View_2_315}>
          <View style={styles.View_2_316}>
            <Text style={styles.Text_2_316}>Edit profile</Text>
          </View>
          <View style={styles.View_2_317} />
        </View>
        <View style={styles.View_2_318}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a31c/80cc/bfef8a389db443578fe3f14b47bcf355"
            }}
            style={styles.ImageBackground_2_319}
          />
          <View style={styles.View_2_320} />
        </View>
      </View>
      <View style={styles.View_2_321}>
        <View style={styles.View_2_322} />
        <View style={styles.View_2_323}>
          <View style={styles.View_2_324}>
            <Text style={styles.Text_2_324}>Jacob West</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/453c/3588/d16a12ee282b1e5900eb6cddd8cc3ed2"
            }}
            style={styles.ImageBackground_2_325}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b698/86f6/1aba135aef9fd31d55914dee3b53cc44"
          }}
          style={styles.ImageBackground_2_326}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d08/92b5/1f60ebe76a7f1a4a0370ee57d9b16507"
          }}
          style={styles.ImageBackground_2_327}
        />
      </View>
      <View style={styles.View_2_328}>
        <View style={styles.View_2_329} />
        <View style={styles.View_2_330} />
      </View>
      <View style={styles.View_2_331}>
        <View style={styles.View_2_332} />
        <View style={styles.View_2_333}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c4d/d8a4/5898ea6223f3866c96a0a2b0f8dbf697"
            }}
            style={styles.ImageBackground_2_334}
          />
          <View style={styles.View_2_337}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5e/65c1/5989f51caa4acec8db82e3c4db888257"
              }}
              style={styles.ImageBackground_2_338}
            />
            <View style={styles.View_2_339} />
          </View>
          <View style={styles.View_2_340} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620f/5b08/34255442dff81dcf9f83619a702b5cd5"
          }}
          style={styles.ImageBackground_2_341}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d34/dcd9/0d23fcae3e811c4c6d6df9621fb6e1de"
          }}
          style={styles.ImageBackground_2_345}
        />
        <View style={styles.View_2_350}>
          <View style={styles.View_2_351}>
            <Text style={styles.Text_2_351}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  View_2_249: {
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
  View_2_250: {
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
  View_2_251: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.293715596850452%"),
    minHeight: hp("11.293715596850452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.045092640027320385%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_252: {
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
  View_2_253: {
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
  View_2_254: {
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
  View_2_255: {
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
  ImageBackground_2_256: {
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
  View_2_257: {
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
  ImageBackground_2_258: {
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
  View_2_259: {
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
  Text_2_259: {
    color: "rgba(138, 139, 143, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_2_260: {
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
  ImageBackground_2_261: {
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
  View_2_262: {
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
  Text_2_262: {
    color: "rgba(138, 139, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_2_263: {
    width: wp("4.500164732265011%"),
    minWidth: wp("4.500164732265011%"),
    height: hp("5.122950819672131%"),
    minHeight: hp("5.122950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.78826579955465%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_2_264: {
    width: wp("4.5001822393297575%"),
    minWidth: wp("4.5001822393297575%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000003224985604788344%"),
    top: hp("0%")
  },
  View_2_265: {
    width: wp("3.6231884057971016%"),
    minWidth: wp("3.6231884057971016%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6175423589881461%"),
    top: hp("3.483606557377044%"),
    justifyContent: "flex-start"
  },
  Text_2_265: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_2_266: {
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
  ImageBackground_2_267: {
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
  View_2_268: {
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
  Text_2_268: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.15000000596046448,
    textTransform: "none"
  },
  View_2_269: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("49.9084806181694%"),
    minHeight: hp("49.9084806181694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.92896174863388%")
  },
  ImageBackground_2_270: {
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
  ImageBackground_2_271: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.04509264002732%")
  },
  ImageBackground_2_272: {
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
  ImageBackground_2_273: {
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
  View_2_274: {
    width: wp("31.40096618357488%"),
    minWidth: wp("31.40096618357488%"),
    height: hp("13.515206634021196%"),
    minHeight: hp("13.515206634021196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.37924592391305%"),
    top: hp("96.17486338797814%")
  },
  ImageBackground_2_275: {
    width: wp("31.40096618357488%"),
    minWidth: wp("31.40096618357488%"),
    height: hp("13.515206634021196%"),
    minHeight: hp("13.515206634021196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_276: {
    width: wp("31.40096618357488%"),
    minWidth: wp("31.40096618357488%"),
    height: hp("13.515206634021196%"),
    minHeight: hp("13.515206634021196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_277: {
    width: wp("31.40096618357488%"),
    minWidth: wp("31.40096618357488%"),
    height: hp("13.515206634021196%"),
    minHeight: hp("13.515206634021196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_278: {
    width: wp("31.40096618357488%"),
    minWidth: wp("31.40096618357488%"),
    height: hp("13.515206634021196%"),
    minHeight: hp("13.515206634021196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_279: {
    width: wp("9.405015401794138%"),
    minWidth: wp("9.405015401794138%"),
    height: hp("3.7800327676241516%"),
    minHeight: hp("3.7800327676241516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.502434329710141%"),
    top: hp("-0.5020558508367401%")
  },
  ImageBackground_2_280: {
    width: wp("5.13644978620004%"),
    minWidth: wp("5.13644978620004%"),
    height: hp("3.6275303428941736%"),
    minHeight: hp("3.6275303428941736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6984544836956559%"),
    top: hp("-0.8547923603995713%")
  },
  ImageBackground_2_281: {
    width: wp("3.5916625589564224%"),
    minWidth: wp("3.5916625589564224%"),
    height: hp("2.8653983861370818%"),
    minHeight: hp("2.8653983861370818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8463320524796174%"),
    top: hp("-0.5020558508367401%")
  },
  ImageBackground_2_284: {
    width: wp("16.595097785986564%"),
    minWidth: wp("16.595097785986564%"),
    height: hp("5.7802950749631785%"),
    minHeight: hp("5.7802950749631785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.813528457125599%"),
    top: hp("-1.1921533469945302%")
  },
  ImageBackground_2_285: {
    width: wp("14.235540749370188%"),
    minWidth: wp("14.235540749370188%"),
    height: hp("7.020347887049608%"),
    minHeight: hp("7.020347887049608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.255467806461347%"),
    top: hp("-0.2669871179132457%")
  },
  ImageBackground_2_286: {
    width: wp("5.153158897363045%"),
    minWidth: wp("5.153158897363045%"),
    height: hp("2.9868641837698515%"),
    minHeight: hp("2.9868641837698515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.255467806461347%"),
    top: hp("-0.2669871179132457%")
  },
  ImageBackground_2_289: {
    width: wp("2.5320905418211708%"),
    minWidth: wp("2.5320905418211708%"),
    height: hp("1.8789006061241276%"),
    minHeight: hp("1.8789006061241276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.52748999849034%"),
    top: hp("2.970110783811478%")
  },
  ImageBackground_2_290: {
    width: wp("1.538012569077349%"),
    minWidth: wp("1.538012569077349%"),
    height: hp("1.182898276490592%"),
    minHeight: hp("1.182898276490592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.385647833635261%"),
    top: hp("2.989388554474047%")
  },
  View_2_291: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3019134963768124%"),
    top: hp("5.464480874316948%"),
    justifyContent: "flex-start"
  },
  Text_2_291: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_2_292: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.234280646135261%"),
    top: hp("8.333333333333357%"),
    justifyContent: "flex-start"
  },
  Text_2_292: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_2_293: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.32786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_294: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.419398656959743%"),
    minHeight: hp("5.419398656959743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_295: {
    width: wp("4.671578706750547%"),
    minWidth: wp("4.671578706750547%"),
    height: hp("2.2556185070934194%"),
    minHeight: hp("2.2556185070934194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.83333333333334%"),
    top: hp("1.6036570397882528%")
  },
  ImageBackground_2_296: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.09422176932367%"),
    top: hp("1.639344262295083%")
  },
  View_2_299: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("43.44262295081967%"),
    minHeight: hp("43.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497267%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_300: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("43.30601092896175%"),
    minHeight: hp("43.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_301: {
    width: wp("55.31400966183575%"),
    minWidth: wp("55.31400966183575%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.77294685990338%"),
    top: hp("2.1857923497267766%")
  },
  View_2_302: {
    width: wp("23.18840579710145%"),
    minWidth: wp("23.18840579710145%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.632850241545892%"),
    top: hp("0%")
  },
  ImageBackground_2_303: {
    width: wp("23.18840579710145%"),
    minWidth: wp("23.18840579710145%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_304: {
    width: wp("18.59903381642512%"),
    minWidth: wp("18.59903381642512%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("14.617486338797814%"),
    justifyContent: "flex-start"
  },
  Text_2_304: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_305: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.535519125683056%")
  },
  View_2_306: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347826086956523%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_306: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_307: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448094%"),
    justifyContent: "flex-start"
  },
  Text_2_307: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_308: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.463768115942027%"),
    top: hp("19.535519125683056%")
  },
  View_2_309: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_309: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_310: {
    width: wp("13.526570048309178%"),
    minWidth: wp("13.526570048309178%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448094%"),
    justifyContent: "flex-start"
  },
  Text_2_310: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_311: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.826086956521735%"),
    top: hp("19.535519125683056%")
  },
  View_2_312: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792242%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_312: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_313: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448094%"),
    justifyContent: "flex-start"
  },
  Text_2_313: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_314: {
    width: wp("21.497584541062803%"),
    minWidth: wp("21.497584541062803%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.371980676328505%"),
    top: hp("38.114754098360656%"),
    justifyContent: "flex-start"
  },
  Text_2_314: {
    color: "rgba(134, 135, 139, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_315: {
    width: wp("39.61352657004831%"),
    minWidth: wp("39.61352657004831%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.396135265700483%"),
    top: hp("29.508196721311478%")
  },
  View_2_316: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_2_316: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_317: {
    width: wp("39.61352657004831%"),
    minWidth: wp("39.61352657004831%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(227, 227, 228, 1)",
    borderWidth: 1
  },
  View_2_318: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.97584541062803%"),
    top: hp("29.508196721311478%")
  },
  ImageBackground_2_319: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574894%"),
    top: hp("1.5027322404371546%")
  },
  View_2_320: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(227, 227, 228, 1)",
    borderWidth: 1
  },
  View_2_321: {
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
  View_2_322: {
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
  View_2_323: {
    width: wp("25.60386473429952%"),
    minWidth: wp("25.60386473429952%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.07729468599034%"),
    top: hp("7.5136612021857925%")
  },
  View_2_324: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_324: {
    color: "rgba(22, 23, 34, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_325: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    height: hp("0.9562844135722176%"),
    minHeight: hp("0.9562844135722176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.188405797101453%"),
    top: hp("0.9562841530054644%")
  },
  ImageBackground_2_326: {
    width: wp("5.424403683574879%"),
    minWidth: wp("5.424403683574879%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9958861714975846%"),
    top: hp("7.5136612021857925%")
  },
  ImageBackground_2_327: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.06280193236715%"),
    top: hp("8.743169398907105%")
  },
  View_2_328: {
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
  View_2_329: {
    width: wp("100%"),
    height: hp("4.781420765027322%"),
    top: hp("-0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_330: {
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
  View_2_331: {
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
  View_2_332: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("-0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_333: {
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
  ImageBackground_2_334: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_337: {
    width: wp("0.36231884057971014%"),
    minWidth: wp("0.36231884057971014%"),
    height: hp("0.529232572336666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555571%"),
    top: hp("0.4781420765027322%")
  },
  ImageBackground_2_338: {
    width: wp("0.966183574879227%"),
    minWidth: wp("0.966183574879227%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6038647342995205%"),
    top: hp("-0.008604956454917989%")
  },
  View_2_339: {
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
  View_2_340: {
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
  ImageBackground_2_341: {
    width: wp("4.072637143342392%"),
    height: hp("1.4980290105434062%"),
    top: hp("2.2309516948428962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499490489131%")
  },
  ImageBackground_2_345: {
    width: wp("4.533327259303291%"),
    height: hp("1.4571948129622663%"),
    top: hp("2.276878148480191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111129981884%")
  },
  View_2_350: {
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
  View_2_351: {
    flexGrow: 1,
    width: wp("14.492753623188406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_351: {
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

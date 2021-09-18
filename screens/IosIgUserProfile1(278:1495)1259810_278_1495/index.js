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
      <View style={styles.View_278_1496}>
        <View style={styles.View_278_1497}>
          <View style={styles.View_278_1498}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58f9/fb04/d1daf6b0a1620b2db60f5622b1720aa7"
              }}
              style={styles.ImageBackground_278_1499}
            />
            <View style={styles.View_278_1500}>
              <View style={styles.View_278_1501} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_1502}
              />
            </View>
          </View>
          <View style={styles.View_278_1503}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/392a/536f/10b102cc70c747b12ed54a76bd0fb5b3"
              }}
              style={styles.ImageBackground_278_1504}
            />
          </View>
          <View style={styles.View_278_1505}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c3b/6527/b0f5b093aacbdd8993b309c086540bbe"
              }}
              style={styles.ImageBackground_278_1506}
            />
          </View>
        </View>
        <View style={styles.View_278_1507}>
          <View style={styles.View_278_1508}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a0/a780/eb9cc07d5a70ff90b743522e4b015216"
              }}
              style={styles.ImageBackground_278_1509}
            />
          </View>
          <View style={styles.View_278_1510}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe6/3262/ea715981a9a8b44dcc53495257afcc5c"
              }}
              style={styles.ImageBackground_278_1511}
            />
          </View>
          <View style={styles.View_278_1512}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edde/36ac/5dd9349d502ee2ca349afb0cc282c380"
              }}
              style={styles.ImageBackground_278_1513}
            />
          </View>
        </View>
        <View style={styles.View_278_1514}>
          <View style={styles.View_278_1515}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94fb/5bf5/02bef3093d69233f62d093c98583f97e"
              }}
              style={styles.ImageBackground_278_1516}
            />
          </View>
          <View style={styles.View_278_1517}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f859/05f2/6d375b063975e2da4ce2dd6d89fea784"
              }}
              style={styles.ImageBackground_278_1518}
            />
            <View style={styles.View_278_1519}>
              <View style={styles.View_278_1520} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_1521}
              />
            </View>
          </View>
          <View style={styles.View_278_1522}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fe3/bde0/77fe7e11fb4352a511259af12b6ec37f"
              }}
              style={styles.ImageBackground_278_1523}
            />
          </View>
        </View>
        <View style={styles.View_278_1524}>
          <View style={styles.View_278_1525}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8468/7066/24fab43d1206360d5da10368e07a6574"
              }}
              style={styles.ImageBackground_278_1526}
            />
            <View style={styles.View_278_1527}>
              <View style={styles.View_278_1528} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_1529}
              />
            </View>
          </View>
          <View style={styles.View_278_1530}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f75/4789/c7f894efe921f3140246312c9e8c4e05"
              }}
              style={styles.ImageBackground_278_1531}
            />
          </View>
          <View style={styles.View_278_1532}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e6/027c/f71daefac8525a6c022cb6cd27f7af89"
              }}
              style={styles.ImageBackground_278_1533}
            />
          </View>
        </View>
        <View style={styles.View_278_1534}>
          <View style={styles.View_278_1535}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a2/c190/93140c329095d000b60dd11e3e9ea392"
              }}
              style={styles.ImageBackground_278_1536}
            />
          </View>
          <View style={styles.View_278_1537}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b31/d332/3fd349dc3bf09f19815f4996ccce5ab4"
              }}
              style={styles.ImageBackground_278_1538}
            />
          </View>
          <View style={styles.View_278_1539}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386c/fb78/9ff840f8389bfe3c5498a82a3ad5a3ef"
              }}
              style={styles.ImageBackground_278_1540}
            />
            <View style={styles.View_278_1541}>
              <View style={styles.View_278_1542} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                }}
                style={styles.ImageBackground_278_1543}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_278_1544}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e45/220b/881c97ce927b849d0ce6d3fbc32680cb"
          }}
          style={styles.ImageBackground_278_1545}
        />
        <View style={styles.View_278_1548}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/582f/cffd/e90cf50461a78b9ca0aeede46973e2b3"
            }}
            style={styles.ImageBackground_278_1549}
          />
        </View>
      </View>
      <View style={styles.View_278_1553}>
        <View style={styles.View_278_1554}>
          <View style={styles.View_278_1555}>
            <Text style={styles.Text_278_1555}>Story 1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_1556}
          />
          <View style={styles.View_278_1557}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_1558}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/3e36/f6870eb42a9bf0be3240c7d13e6a56a7"
              }}
              style={styles.ImageBackground_278_1559}
            />
          </View>
        </View>
        <View style={styles.View_278_1560}>
          <View style={styles.View_278_1561}>
            <Text style={styles.Text_278_1561}>Story 2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_1562}
          />
          <View style={styles.View_278_1563}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_1564}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f4a/d9f3/d0eeec9a22ee7f2836cc5e429b927800"
              }}
              style={styles.ImageBackground_278_1565}
            />
          </View>
        </View>
        <View style={styles.View_278_1566}>
          <View style={styles.View_278_1567}>
            <Text style={styles.Text_278_1567}>Story 3</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_1568}
          />
          <View style={styles.View_278_1569}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_1570}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d4/a961/f70db3c03fac5bd1a241b372ea0c047d"
              }}
              style={styles.ImageBackground_278_1571}
            />
          </View>
        </View>
        <View style={styles.View_278_1572}>
          <View style={styles.View_278_1573}>
            <Text style={styles.Text_278_1573}>Story 4</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_1574}
          />
          <View style={styles.View_278_1575}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_1576}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c691/31ab/cdd131dd977eb065464885dc3aab53e9"
              }}
              style={styles.ImageBackground_278_1577}
            />
          </View>
        </View>
        <View style={styles.View_278_1578}>
          <View style={styles.View_278_1579}>
            <Text style={styles.Text_278_1579}>New</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
            }}
            style={styles.ImageBackground_278_1580}
          />
          <View style={styles.View_278_1581}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
              }}
              style={styles.ImageBackground_278_1582}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/428b/7507/5ccd11b36b1059608e9bf455a4a268d6"
              }}
              style={styles.ImageBackground_278_1666}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_278_1584}>
        <View style={styles.View_278_1585}>
          <View style={styles.View_278_1586}>
            <Text style={styles.Text_278_1586}>Username</Text>
          </View>
          <View style={styles.View_278_1587}>
            <Text style={styles.Text_278_1587}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt #hashtag
            </Text>
          </View>
          <View style={styles.View_278_1588}>
            <Text style={styles.Text_278_1588}>Link goes here</Text>
          </View>
        </View>
        <View style={styles.View_278_1591}>
          <View style={styles.View_278_1592}>
            <Text style={styles.Text_278_1592}>Edit Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_279_685}>
        <View style={styles.View_279_686}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f4/d3e8/6035d4c5950756e22d9c654f6a9f6a40"
            }}
            style={styles.ImageBackground_279_687}
          />
          <View style={styles.View_279_688}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f8e/deb0/a79f2111ee839d37bba8ed9e088afc3f"
              }}
              style={styles.ImageBackground_279_689}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fc/3b7b/98a2874679a82ef5f943b09c031dd682"
              }}
              style={styles.ImageBackground_279_690}
            />
          </View>
        </View>
        <View style={styles.View_279_691}>
          <Text style={styles.Text_279_691}>0,000</Text>
        </View>
        <View style={styles.View_279_692}>
          <Text style={styles.Text_279_692}>0,000</Text>
        </View>
        <View style={styles.View_279_693}>
          <Text style={styles.Text_279_693}>0,000</Text>
        </View>
        <View style={styles.View_279_694}>
          <Text style={styles.Text_279_694}>Posts</Text>
        </View>
        <View style={styles.View_279_695}>
          <Text style={styles.Text_279_695}>Followers</Text>
        </View>
        <View style={styles.View_279_696}>
          <Text style={styles.Text_279_696}>Following</Text>
        </View>
      </View>
      <View style={styles.View_279_563}>
        <View style={styles.View_279_564}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79e3/c1aa/dde52f3ed4d35a98ef2e760067ac20e6"
            }}
            style={styles.ImageBackground_279_565}
          />
        </View>
        <View style={styles.View_279_569}>
          <View style={styles.View_279_570} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/339c/d14a/8f1a16b2e81c133c7bd2997aeaaf693d"
            }}
            style={styles.ImageBackground_279_571}
          />
        </View>
        <View style={styles.View_279_574}>
          <View style={styles.View_279_575}>
            <Text style={styles.Text_279_575}>username</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607e/9471/a1fb9afcb528c5e35a52d30bac18af2b"
            }}
            style={styles.ImageBackground_279_576}
          />
        </View>
      </View>
      <View style={styles.View_278_1614}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b9/413e/3aa06023371a2724121fd2ffcf3d6cd3"
          }}
          style={styles.ImageBackground_278_1615}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4094/b947/465fc9dffd3578b469db874e48603d73"
          }}
          style={styles.ImageBackground_278_1616}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
          }}
          style={styles.ImageBackground_278_1618}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
          }}
          style={styles.ImageBackground_278_1624}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
          }}
          style={styles.ImageBackground_278_1628}
        />
        <View style={styles.View_278_1630}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/408f/0f54/95b65a7db60497214c2bdf1e7289e8ca"
            }}
            style={styles.ImageBackground_278_1631}
          />
          <View style={styles.View_278_1632}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
              }}
              style={styles.ImageBackground_278_1633}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
              }}
              style={styles.ImageBackground_278_1634}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_278_1635}>
        <View style={styles.View_278_1636}>
          <View style={styles.View_278_1637} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
            }}
            style={styles.ImageBackground_278_1638}
          />
          <View style={styles.View_278_1639} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
          }}
          style={styles.ImageBackground_278_1640}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_278_1644}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b350/590a/12424c812875b64bdc194585840c74dc"
          }}
          style={styles.ImageBackground_278_1649}
        />
      </View>
      <View style={styles.View_278_1664} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_278_1496: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("84.97267759562843%"),
    minHeight: hp("84.97267759562843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.2896174863388%")
  },
  View_278_1497: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.07045858414448%")
  },
  View_278_1498: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1499: {
    width: wp("35.99740804036458%"),
    height: hp("27.481760744188655%"),
    top: hp("-5.289771908619372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0144449869791667%"),
    resizeMode: "cover"
  },
  View_278_1500: {
    width: wp("2.833656819661458%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.465926106770834%")
  },
  View_278_1501: {
    width: wp("2.149674479166667%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_1502: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.298463581689731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839803059895857%")
  },
  View_278_1503: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1504: {
    width: wp("33.93777872721354%"),
    height: hp("24.0387129653347%"),
    top: hp("-7.13649395385076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.860741170247401%"),
    resizeMode: "cover"
  },
  View_278_1505: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1506: {
    width: wp("36.765926106770834%"),
    height: hp("28.045166515913166%"),
    top: hp("-5.571475836748647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.1681477864583343%"),
    resizeMode: "cover"
  },
  View_278_1507: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.046069202527335%")
  },
  View_278_1508: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1509: {
    width: wp("54.318888346354164%"),
    height: hp("20.78347127945697%"),
    top: hp("-1.9406261339865125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.544074503580731%"),
    resizeMode: "cover"
  },
  View_278_1510: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1511: {
    width: wp("51.89037272135417%"),
    height: hp("17.60647883180712%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.345186360677085%"),
    resizeMode: "cover"
  },
  View_278_1512: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1513: {
    width: wp("49.73851725260416%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.240370686848962%"),
    resizeMode: "cover"
  },
  View_278_1514: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.048787101370394%")
  },
  View_278_1515: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1516: {
    width: wp("33.2%"),
    height: hp("25.35333268629397%"),
    top: hp("-7.574696358435801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1517: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1518: {
    width: wp("53.98074137369792%"),
    height: hp("18.310738652130294%"),
    top: hp("-1.4085196406463467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.5948145548502595%"),
    resizeMode: "cover"
  },
  View_278_1519: {
    width: wp("2.833656819661458%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.46592610677083%")
  },
  View_278_1520: {
    width: wp("2.149674479166667%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_1521: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.29846358168971676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839803059895857%")
  },
  View_278_1522: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1523: {
    width: wp("33.2%"),
    height: hp("25.35333268629397%"),
    top: hp("-4.069052107347176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1524: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.02438938161714%")
  },
  View_278_1525: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1526: {
    width: wp("36.673701985677084%"),
    height: hp("28.029515834453978%"),
    top: hp("-11.127292653901975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.7522216796875%"),
    resizeMode: "cover"
  },
  View_278_1527: {
    width: wp("2.833656819661458%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.465926106770834%")
  },
  View_278_1528: {
    width: wp("2.149674479166667%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_1529: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.298463581689731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839803059895857%")
  },
  View_278_1530: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1531: {
    width: wp("32.86185302734375%"),
    height: hp("25.400280561603484%"),
    top: hp("-2.6292311037824447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15370381673177036%"),
    resizeMode: "cover"
  },
  View_278_1532: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1533: {
    width: wp("48.41666666666667%"),
    height: hp("32.74022920535562%"),
    top: hp("-0.7512076956326865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.31814778645834%"),
    resizeMode: "cover"
  },
  View_278_1534: {
    width: wp("100.13333333333334%"),
    minWidth: wp("100.13333333333334%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1535: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1536: {
    width: wp("35.567036946614586%"),
    height: hp("27.168757537675038%"),
    top: hp("-3.7560509853675796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.19888916015625%"),
    resizeMode: "cover"
  },
  View_278_1537: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.46666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1538: {
    width: wp("33.78407389322916%"),
    height: hp("25.791537175413037%"),
    top: hp("-1.5650222861701693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.30740737915039773%"),
    resizeMode: "cover"
  },
  View_278_1539: {
    width: wp("33.2%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1540: {
    width: wp("49.03148193359375%"),
    height: hp("37.43528772573002%"),
    top: hp("-9.139718644605956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.5659261067708385%"),
    resizeMode: "cover"
  },
  View_278_1541: {
    width: wp("2.833660888671875%"),
    minWidth: wp("2.833660888671875%"),
    height: hp("1.3928673957866398%"),
    minHeight: hp("1.3928673957866398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.46591796874999%"),
    top: hp("0.9233651916837431%")
  },
  View_278_1542: {
    width: wp("2.149674479166667%"),
    height: hp("1.0944022506964013%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_1543: {
    width: wp("2.1496765136718747%"),
    height: hp("1.0944005570125057%"),
    top: hp("0.29846358168972387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6839843750000085%")
  },
  View_278_1544: {
    width: wp("100.26666666666667%"),
    height: hp("5.737704918032787%"),
    top: hp("53.551912568306015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_1545: {
    width: wp("50.13333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_1548: {
    width: wp("50.13333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1549: {
    width: wp("5.059600321451823%"),
    height: hp("2.7179259420092636%"),
    top: hp("1.5027489167093506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666699218750004%")
  },
  View_278_1553: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.53005464480874%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1554: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.666666666666667%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1555: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("8.196721311475407%"),
    justifyContent: "flex-start"
  },
  Text_278_1555: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1556: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1557: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.5464480874316919%")
  },
  ImageBackground_278_1558: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1559: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1560: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.333333333333332%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1561: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("8.196721311475407%"),
    justifyContent: "flex-start"
  },
  Text_278_1561: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1562: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1563: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.5464480874316919%")
  },
  ImageBackground_278_1564: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1565: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1566: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1567: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("8.196721311475407%"),
    justifyContent: "flex-start"
  },
  Text_278_1567: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1568: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1569: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.5464480874316919%")
  },
  ImageBackground_278_1570: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1571: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1572: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.66666666666667%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1573: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%"),
    top: hp("8.196721311475407%"),
    justifyContent: "flex-start"
  },
  Text_278_1573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1574: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1575: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666558%"),
    top: hp("0.5464480874316919%")
  },
  ImageBackground_278_1576: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1577: {
    width: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1578: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.33333333333333%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1579: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("8.196721311475407%"),
    justifyContent: "flex-start"
  },
  Text_278_1579: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1580: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1581: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.5464480874316919%")
  },
  ImageBackground_278_1582: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1666: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1584: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25.273224043715846%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1585: {
    width: wp("91.7341064453125%"),
    minWidth: wp("91.7341064453125%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1586: {
    width: wp("91.7341064453125%"),
    minWidth: wp("91.7341064453125%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_278_1586: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1587: {
    width: wp("91.7341064453125%"),
    minWidth: wp("91.7341064453125%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005456%"),
    justifyContent: "flex-start"
  },
  Text_278_1587: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1588: {
    width: wp("91.7341064453125%"),
    minWidth: wp("91.7341064453125%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.3770491803278695%"),
    justifyContent: "flex-start"
  },
  Text_278_1588: {
    color: "rgba(0, 76, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1591: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.202185792349727%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1592: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_278_1592: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_685: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497267%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_279_686: {
    width: wp("23.444620768229164%"),
    minWidth: wp("23.444620768229164%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0.13661202185792476%")
  },
  ImageBackground_279_687: {
    width: wp("23.444620768229164%"),
    minWidth: wp("23.444620768229164%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_279_688: {
    width: wp("20.739666748046876%"),
    minWidth: wp("20.739666748046876%"),
    height: hp("10.624829276663359%"),
    minHeight: hp("10.624829276663359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.382619222005208%"),
    top: hp("0.7083392534099637%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_279_689: {
    width: wp("20.739666748046876%"),
    height: hp("10.624829276663359%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_279_690: {
    width: wp("20.739666748046876%"),
    height: hp("10.624829276663359%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_279_691: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("3.415300546448089%"),
    justifyContent: "flex-start"
  },
  Text_279_691: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_692: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.13333333333333%"),
    top: hp("3.415300546448089%"),
    justifyContent: "flex-start"
  },
  Text_279_692: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_693: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("3.415300546448089%"),
    justifyContent: "flex-start"
  },
  Text_279_693: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_694: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666667%"),
    top: hp("6.147540983606559%"),
    justifyContent: "flex-start"
  },
  Text_279_694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_695: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.06666666666666%"),
    top: hp("6.147540983606559%"),
    justifyContent: "flex-start"
  },
  Text_279_695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_696: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("6.147540983606559%"),
    justifyContent: "flex-start"
  },
  Text_279_696: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_563: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_279_564: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.46666666666667%"),
    top: hp("1.7759562841530059%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_279_565: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557376984%")
  },
  View_279_569: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.3661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_279_570: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000114%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.7999999523162842
  },
  ImageBackground_279_571: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("0.8196721311475406%")
  },
  View_279_574: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("1.0928961748633883%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_279_575: {
    width: wp("27.46666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_279_575: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_279_576: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0.6830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.8%")
  },
  View_278_1614: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.22950819672131%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_1615: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_1616: {
    width: wp("5.854545593261719%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  ImageBackground_278_1618: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333333%")
  },
  ImageBackground_278_1624: {
    width: wp("4.821315002441406%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%")
  },
  ImageBackground_278_1628: {
    width: wp("5.6052495320638025%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.53333333333333%")
  },
  View_278_1630: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.73333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_278_1631: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_1632: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_278_1633: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_1634: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1635: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1636: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    top: hp("2.3679305946892075%")
  },
  View_278_1637: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_278_1638: {
    width: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009103993900488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%")
  },
  View_278_1639: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44446614583333144%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_278_1640: {
    width: wp("4.088879903157553%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  ImageBackground_278_1644: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.41347974766799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  ImageBackground_278_1649: {
    width: wp("7.628312174479166%"),
    height: hp("1.5148725665983607%"),
    top: hp("2.34528421704235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.856937662760417%")
  },
  View_278_1664: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    top: hp("109.42622950819671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

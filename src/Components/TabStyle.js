import { StyleSheet ,Dimensions} from 'react-native';

const { width, height } = Dimensions.get("screen");
export default StyleSheet.create({
    header:{

        height:80,
      },
      container: {
        flex: 1,
        backgroundColor: "#fff",
      },

      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        //marginTop:130
      },
      name:{
        fontSize:22,
        color:"#ccc",
        fontWeight:'600',
      },
      body:{
        marginTop:20,
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },

      containers:{
        flex:1,
      },
      listTab:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:10,
      },
      btnTab:{
        width:Dimensions.get('window').width/3.5,
        flexDirection:'row',
        borderWidth:1.5,
        borderColor:'#EBEBEB',
        padding:10,
        justifyContent:'center',
        borderRadius:10
        //backgroundColor:'#009387'

      },
      textTab:{
        fontSize:16,
        color:'#333'
      },
      btnTabActivate:{
       backgroundColor:'#009387'

      },
      txtTabActivate:{
        color:'#fff'
      },
      itemContainer:{
        flexDirection:'row',
        paddingVertical:15
      },
      itemLogo:{
        padding:10
      },
      itemImage:{
        width:50,
        height:50
      },
      itemBody:{
        flex:1,
        paddingHorizontal:10,
        justifyContent:'center'
      },
      itemName:{
        fontWeight:'bold',
        fontSize:16
      },
      itemStatus:{
        backgroundColor:'green',
        paddingHorizontal:6,
        justifyContent:'center',
        right:12
      },profile: {
        marginTop: Platform.OS === "android" ? 0 : 0,
        // marginBottom: -HeaderHeight * 2,
        flex: 1
      },
      profileContainer: {
        width: width,
        height: height,
        padding: 0,
        zIndex: 1
      },
      profileBackground: {
        width: width,
        height: height / 2
      },
     drawer:{
        paddingHorizontal:10,
        paddingVertical:12,
        borderRadius:10,
        marginLeft: 20,

      },
    drawerImg:{
      height:15,
      width:20
    },
    titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24,
      marginHorizontal: 16,
    },
    profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden",
      backgroundColor: "black",
    },

    image: {
      flex: 1,
      width: undefined,
      height: undefined,
    },
    dm: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: 20,
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
    },
    infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16,
    },
    text: {
      color: "#52575D",
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent:'center',
      //alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },

});
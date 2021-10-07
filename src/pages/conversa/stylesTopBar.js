import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get( 'window' );
const primaryColor = '#5E4AE3';
const _heightHeadTitle = 56;
export const _heightBodyApp = height - _heightHeadTitle;

export default StyleSheet.create( {
    marginHorizontalT: {
        marginHorizontal: 5,
    },
    Container: {
        flex: 1,
        backgroundColor: primaryColor,
    },
    ContainerBodyPage: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: _heightBodyApp,
    },
    ContainerHeaderPage: {
        flex: 1
    },
    ContainerHeadTitle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: _heightHeadTitle,

    },

    text: {
        color: '#fff',
        justifyContent: 'center',
        fontSize: 18,
        letterSpacing: 0.15,
        marginLeft: 10,
        fontWeight: '600'
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginLeft: 10,
    },
    closeTopBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    ContainerHeadBody: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
        flex: 1,
        // backgroundColor: 'red'
    },
    HeadBody: {
        flex: 1,
        height: '100%',
    },
    containerAvatarXL: {
        height: 80,
        width: 80,
        marginBottom: 10,
    },
    avatarXL: {
        height: '100%',
        width: '100%',
        borderRadius: 40
    },
    myName: {
        fontSize: 26,
        color: '#fff',
        fontWeight: '600'
    },
    itemMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 10,
        // backgroundColor: 'red',
    },
    containerIconeItemMenu: {
        marginRight: 10,
        height: 36,
        width: 36,
        backgroundColor: '#333',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconeItemMenu: {
        color: '#fff'
    },
    textoItemMenu: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600'
    },
    optionButtom: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    InfosContact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 1,
    },
    containerOptions: {
        flexDirection: 'row',
    },
    containerCallOptions: {
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'center'

    },
    itemContainerCallOptions: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
} );

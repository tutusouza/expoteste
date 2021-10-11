import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { FlatList, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Contato, Texto, ContainerAvatar, ContainerDados, ContainerHoraNotificacao, Avatar } from './stylesHome';
import TopBar from './TopBar';
// import UserAvatar from 'react-native-user-avatar';

const Home = ({ navigation }) => {
    const [conversas, setConversas] = useState([]);
    const [me, setMe] = useState({
        id: 's21d23da12d31dsda213',
        first_name: 'Artur',
        last_name: 'Garcia',
        email: 'crowden1@hatena.ne.jp',
        gender: 'M',
        photo: 'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/s150x150/171707548_790060468333610_3774949842706882718_n.jpg?_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_ohc=zMjRPnhasNQAX_5hBZQ&edm=ABfd0MgBAAAA&ccb=7-4&oh=a987242a7ee33985574282668d620046&oe=612309C0&_nc_sid=7bff83',
    });

    useEffect(() => {
        init();
    }, []);

    const getConversas = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(DATA), 250);
        });

    async function init(params) {
        let conversas = await getConversas();
        setConversas(conversas);
    }

    return (
        <TopBar data={{ title: 'Artur Garcia', ...me }}>
            <Container>
                <ScrollView>
                    {conversas.map((item) => (
                        <Contato key={item.id} onPress={() => navigation.push('Conversa', { dadosContato: item, me })}>
                            <ContainerAvatar>
                                <Avatar src={item.photo} name={`${item.first_name} ${item.last_name}`} />
                            </ContainerAvatar>
                            <ContainerDados>
                                <Texto>{item.first_name}</Texto>
                                <Texto numberOfLines={1} style={styles.textSecundary}>
                                    {item.lastMessage}
                                </Texto>
                            </ContainerDados>
                            <ContainerHoraNotificacao>
                                <Texto style={styles.textSecundary}>{item.timeLastMessage}</Texto>
                                <Texto style={styles.textSecundary}>
                                    {item.gender === 'M' ? (
                                        <FontAwesome5 name="check" size={12} />
                                    ) : (
                                        <MaterialCommunityIcons name="sleep" size={18} />
                                    )}
                                </Texto>
                            </ContainerHoraNotificacao>
                        </Contato>
                    ))}
                </ScrollView>
            </Container>
        </TopBar>
    );
};

export default Home;

const styles = StyleSheet.create({
    textSecundary: {
        fontSize: 12,
        color: '#757575',
    },
});

const DATA = [
    {
        id: 1,
        first_name: 'Annabella',
        last_name: 'Petronis',
        email: 'apetronis0@about.com',
        gender: 'F',
        photo: 'https://robohash.org/mollitiafugamagni.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-08-01 11:37:45',
        ip_address: '28.236.129.207',
        lastMessage: "Crohn's disease of large intestine",
    },
    {
        id: 2,
        first_name: 'Christine',
        last_name: 'Rowden',
        email: 'crowden1@hatena.ne.jp',
        gender: 'F',
        photo: 'https://robohash.org/sapienteestcorporis.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-08-16 03:15:42',
        ip_address: '104.118.75.238',
        lastMessage: 'Unspecified injury of heart without hemopericardium, sequela',
    },
    {
        id: 3,
        first_name: 'Saloma',
        last_name: 'Krelle',
        email: 'skrelle2@discovery.com',
        gender: 'F',
        photo: 'https://robohash.org/reprehenderiteumautem.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-01-22 02:32:18',
        ip_address: '195.128.215.141',
        lastMessage: 'Corrosion of third degree of left palm, sequela',
    },
    {
        id: 4,
        first_name: 'Faulkner',
        last_name: 'Titcombe',
        email: 'ftitcombe3@dailymotion.com',
        gender: 'M',
        photo: 'https://robohash.org/quaeremcorrupti.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-01-18 12:10:36',
        ip_address: '189.73.217.138',
        lastMessage: 'Puncture wound with foreign body of right ear',
    },
    {
        id: 5,
        first_name: 'Rosemonde',
        last_name: 'Corrado',
        email: 'rcorrado4@exblog.jp',
        gender: 'F',
        photo: 'https://robohash.org/quosquiodit.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-04-16 11:19:23',
        ip_address: '64.56.53.227',
        lastMessage: 'Toxic effect of contact with other jellyfish, assault, initial encounter',
    },
    {
        id: 6,
        first_name: 'Abraham',
        last_name: 'Halwell',
        email: 'ahalwell5@csmonitor.com',
        gender: 'M',
        photo: 'https://robohash.org/dignissimosvelitsapiente.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-08-16 05:02:19',
        ip_address: '34.128.192.100',
        lastMessage: 'Exposure to smoke in uncontrolled fire, not in building or structure, sequela',
    },
    {
        id: 7,
        first_name: 'Rhianna',
        last_name: 'Kirtlan',
        email: 'rkirtlan6@list-manage.com',
        gender: 'F',
        photo: 'https://robohash.org/autemodiodoloremque.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-07-23 19:44:10',
        ip_address: '146.161.154.240',
        lastMessage:
            'Displaced spiral fracture of shaft of unspecified fibula, initial encounter for open fracture type IIIA, IIIB, or IIIC',
    },
    {
        id: 8,
        first_name: 'Quill',
        last_name: 'Ortet',
        email: 'qortet7@webnode.com',
        gender: 'M',
        photo: 'https://robohash.org/molestiaelaborevel.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-04-23 14:53:07',
        ip_address: '70.87.50.161',
        lastMessage: 'Injury of cutaneous sensory nerve at hip and thigh level, unspecified leg, subsequent encounter',
    },
    {
        id: 9,
        first_name: 'Leanora',
        last_name: 'Gallienne',
        email: 'lgallienne8@amazon.de',
        gender: 'F',
        photo: 'https://robohash.org/earumdelectusiste.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-01-19 05:37:31',
        ip_address: '39.236.252.108',
        lastMessage: 'Nondisplaced fracture of left tibial spine, initial encounter for closed fracture',
    },
    {
        id: 10,
        first_name: 'Marylin',
        last_name: 'Oller',
        email: 'moller9@dmoz.org',
        gender: 'F',
        photo: 'https://robohash.org/sitconsecteturmaxime.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-02-12 18:37:43',
        ip_address: '194.108.171.2',
        lastMessage: 'Chloasma of right eye, unspecified eyelid and periocular area',
    },
    {
        id: 11,
        first_name: 'Odetta',
        last_name: 'Norley',
        email: 'onorleya@comsenz.com',
        gender: 'F',
        photo: 'https://robohash.org/modiducimusquibusdam.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-08-14 04:03:52',
        ip_address: '95.96.117.45',
        lastMessage: 'Other hypertrophic osteoarthropathy, unspecified lower leg',
    },
    {
        id: 12,
        first_name: 'Ray',
        last_name: 'Hawton',
        email: 'rhawtonb@craigslist.org',
        gender: 'F',
        photo: 'https://robohash.org/asperioresnatusnam.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-04-29 16:01:34',
        ip_address: '60.203.111.8',
        lastMessage: 'Displaced fracture of hook process of hamate [unciform] bone, left wrist, sequela',
    },
    {
        id: 13,
        first_name: 'Blinni',
        last_name: 'Chamberlain',
        email: 'bchamberlainc@seesaa.net',
        gender: 'F',
        photo: 'https://robohash.org/architectoquoofficiis.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-03-02 10:49:27',
        ip_address: '209.48.33.17',
        lastMessage: 'Assault by unspecified sharp object, sequela',
    },
    {
        id: 14,
        first_name: 'Barret',
        last_name: 'Simonson',
        email: 'bsimonsond@hp.com',
        gender: 'M',
        photo: 'https://robohash.org/veletquod.jpg?size=50x50&set=set1',
        timeLastMessage: '2021-01-30 04:52:57',
        ip_address: '6.194.231.203',
        lastMessage: 'Poisoning by antirheumatics, not elsewhere classified, undetermined, initial encounter',
    },
];

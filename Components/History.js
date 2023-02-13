import { FlatList, View, StyleSheet, Text, Button } from "react-native";

export default function History({ route, navigation }) {
    const { history } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>History:</Text>
            </View>
            <FlatList
                data={history}
                renderItem={({ item }) => <Text style={{ fontSize: 18 }}>{item}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: '20px'
    },
    headerContainer: {
        flexDirection: 'row',
        gap: 80,
        alignItems: 'center'
    }
});
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Calculator({ navigation }) {
    const [result, setResult] = useState('');
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [history, setHistory] = useState([]);

    const makeMinus = () => {
        let check = checkValues();
        if (check) {
            setResult(`Result: ${x - y}`);
            setHistory([`${x} - ${y} = ${x - y}`, ...history]);
        }
    }

    const makePlus = () => {
        if (checkValues()) {
            setResult(`Result: ${x + y}`);
            setHistory([`${x} + ${y} = ${x + y}`, ...history]);
        }
    }

    const checkValues = () => {
        let check = true;
        if (isNaN(x) && !isNaN(y)) {
            check = false;
            setResult('Type the first value please')
        } else if (!isNaN(x) && isNaN(y)) {
            check = false;
            setResult('Type the second value please')
        } else if (isNaN(x) && isNaN(y)) {
            check = false;
            setResult('Type the values please')
        }
        return (check);
    }

    const clearAll = () => {
        setResult('');
        setX('');
        setY('');
        setHistory([]);
    }

    return (
        <View style={styles.container}>
            <Text>{result}</Text>
            <TextInput
                style={styles.textfield}
                onChangeText={currValue => setX(parseInt(currValue))}
                value={x}
                keyboardType='numeric'
            />
            <TextInput
                keyboardType='numeric'
                style={styles.textfield}
                onChangeText={currValue => setY(parseInt(currValue))}
                value={y}
            />
            <View style={{ flexDirection: 'row' }}>
                <Button onPress={makePlus} title='+' />
                <Button onPress={makeMinus} title='-' />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title="History"
                    onPress={() => navigation.navigate('History', { history: history })}
                />
                <Button onPress={clearAll} title='Clear' />
            </View>
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
    textfield:
    {
        height: 30,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1
    }
});
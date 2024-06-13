import { Stack } from 'expo-rounter';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScreenContent } from '~/components/ScreenContent';


export default function Home(){

    const [count, SetCount] = useState(0);
    let texto = "teste";

    let var1 = 10;
    let var2 = 3;

    return(

        <>
            <Stack.Screen options={{ title: 'Exercício 2'}}/>
            <View style={styles.container}>
            <Text>{texto}<Text/>
            <Text>{var1 + var2}<Text/>
            <Text>Você clicou {count} vezes <Text/>

            <Button
                onPress={()=> SetCount(count + 1)}
                title="Clique aqui"
            />
            <View/>
        </>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
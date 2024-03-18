import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import { Loading } from '@/components/loading';
import { 
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
} from '@expo-google-fonts/inter';


export default function Layout(){
    const [FontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold
    })

    if(!FontsLoaded){
        return <Loading />
    }

    return (
        <SafeAreaView className="bg-slate-900 flex-1">
            <Slot />
        </SafeAreaView>
    )
}
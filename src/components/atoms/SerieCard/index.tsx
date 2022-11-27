import {TouchableOpacity} from "react-native-gesture-handler";
import {Div, Image, Text} from "react-native-magnus"

interface SerieCardProps {
  image?: string;
  name: string;
  onPress?: () => void;
  disbled?: boolean;
}

export const SerieCard = ({image, name, onPress, disbled}: SerieCardProps) => {
  return (
    <TouchableOpacity disabled={disbled || !onPress} onPress={onPress} >
      <Div my={20} flexDir="row" maxW={'50%'}>
        <Image h={120} w={160} borderRadius={10} mr={16} source={{uri: image || 'https://blog.fortestecnologia.com.br/wp-content/uploads/2019/08/fortes-tecnologia-la-casa-de-papel-1280x720.png'}} />
        <Text fontFamily="Roboto-Bold" numberOfLines={3} fontSize={20}>{name}</Text>
      </Div>
    </TouchableOpacity>
  )
}
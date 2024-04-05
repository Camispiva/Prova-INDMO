import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';

const SwitchScreen = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const toggleImage = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <View>
      <Button title="Toggle Image" onPress={toggleImage} />
      {isImageVisible && <Image source={require('./path/to/your/image.png')} />}
    </View>
  );
};

export default SwitchScreen;

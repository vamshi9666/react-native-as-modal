import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import RnAsModal from 'react-native-rn-as-modal';

export default function App() {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  return (
    <>
      <BodyAsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <View style={styles.container}>
        <Button
          title={'open modal'}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
    </>
  );
}

const Body = ({ onClose }: { onClose: any }) => {
  return (
    <View style={{ backgroundColor: 'white', padding: 24 }}>
      <Text>this s modal body</Text>
      <Button title={'close'} onPress={onClose} />
    </View>
  );
};
const BodyAsModal = RnAsModal(Body, {
  gesturesEnabled: true,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

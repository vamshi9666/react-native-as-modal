# react-native-rn-as-modal

HOC to convert a component into modal

## Installation

```sh
npm install react-native-rn-as-modal

```

## Usage

```js
import AsModal from "react-native-rn-as-modal";
const Body = (props) => {
  const { onClose } = props
  return (
    <View style={{ backgroundColor: 'white', padding: 24 }}>
      <Text>this s modal body</Text>
      <Button title={'close'} onPress={onClose} />
    </View>
  );
};

// ... wrap a component with AsModal HOC 
const BodyAsModal = AsModal(Body)

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
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

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

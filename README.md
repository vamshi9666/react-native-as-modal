# react-native-as-modal

HOC to convert a react native component into modal

## Installation

```sh
npm install react-native-as-modal

```

## Usage

```js
import AsModal from "react-native-as-modal";


const Body = (props) => {
  const { onClose } = props
  return (
    <View style={{ backgroundColor: 'white', padding: 24 }}>
      <Text>this s modal body</Text>
      <Button title={'close'} onPress={onClose} />
    </View>
  );
};

// wrap a component with AsModal HOC 
const BodyAsModal = AsModal(Body)

// with options 
const BodyAsModal = AsModal(Body, {
  gesturesEnabled: true
})

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
## Road map
This is going to be prequel for a bigger library (coming soon).Although this is going to be well documented and improved over the time with every release.
- [ ] animation config
- [ ] hook api 
- [ ] animated value tracking
- [ ] events (mount and unmount )


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

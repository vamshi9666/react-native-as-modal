import React, { useEffect, useRef, ComponentType } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Interactable from './../Interactable';
import A from 'react-native-reanimated';
const TENSION = 800;
const DAMP = 1 / 2;
const { height } = Dimensions.get('window');
const snapPoints = [
  { y: height, tension: TENSION, damping: DAMP },
  { y: 0, tension: TENSION, damping: DAMP },
];

const asModal = (InnerComponent: ComponentType) => {
  return (props: any) => {
    const delta = useRef(new A.Value(0)).current;
    const { visible, onClose } = props;
    const ref = useRef(null);
    useEffect(() => {
      if (ref.current) {
        ref.current.snapTo({ index: visible ? 1 : 0 });
      }
    }, [visible]);

    return (
      <>
        <Interactable.View
          ref={ref}
          dragEnabled={true}
          verticalOnly={true}
          onSnap={(event: any) => {
            if (event.nativeEvent.index === 0) {
              onClose();
            }
          }}
          animatedValueY={delta}
          snapPoints={snapPoints}
        >
          <InnerComponent {...props} />
        </Interactable.View>
        <A.View
          pointerEvents={'none'}
          style={{
            zIndex: -1,
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#000',
            opacity: delta.interpolate({
              inputRange: [0, height],
              outputRange: [0.6, 0],
            }),
          }}
        />
      </>
    );
  };
};

export default asModal;

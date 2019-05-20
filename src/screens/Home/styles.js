import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  position: relative;
  flex: 1;
`;

export const FlatList = styled.FlatList``;

export const Text = styled.Text``;

export const FloatBtn = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 60px;
  right: 35px;
  justify-content: center;
  align-items: center;
  background-color: #333;
  border-radius: 50px;
  z-index: 20;
`;

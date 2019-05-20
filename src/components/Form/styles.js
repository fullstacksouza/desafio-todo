import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 0 20px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: "#fff"
})`
  background-color: transparent;
  color: #fff !important;
  width: 100%;
  padding: 15px;
  padding-right: 0;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  margin-bottom: ${props => (props.mBottom ? "20px" : "0")};
`;

export const BtnForget = styled.TouchableOpacity`
  align-self: flex-end;
  padding-right: 5px;
  margin: 12px 0 35px 0;
`;

export const BtnForgetText = styled.Text`
  color: #fff;
  font-size: 14px;
  text-decoration: underline;
`;

export const Loading = styled.ActivityIndicator`
  flex: 1;
  width: 100%;
  height: 27%;
  color: white;
`;

export const BtnLogin = styled.TouchableOpacity`
  margin-top: 50px;
  background-color: ${props => (props.register ? "transparent" : "#fff")};
  border-width: 1px;
  border-color: ${props => (props.register ? "#fff" : "transparent")};
  width: 85%;
  padding: 15px 0 15px 0;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  flex-direction: row;
`;

export const BtnLoginText = styled.Text`
  color: #${props => (props.register ? "fff" : "000")};
  font-weight: bold;
  font-size: 16px;
  align-self: center;
`;

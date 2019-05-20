import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 15px 10px;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  background-color: #ffffff;
`;

export const TextWrapper = styled.View`
  margin-left: 5%;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
  opacity: ${props => (props.done ? ".5" : "1")};
`;

export const Description = styled.Text`
  font-size: 20px;
  color: #333;
  text-decoration: ${props => (props.done ? "line-through" : "none")};
  opacity: ${props => (props.done ? ".5" : "1")};
`;
export const Button = styled.TouchableOpacity``;

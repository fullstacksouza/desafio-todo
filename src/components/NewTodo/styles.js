import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
`;
export const NewTodoContainer = styled.View`
  flex-direction: row;
  padding-left: 10px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const TitleInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #333333;
  padding: 15px 10px;
`;
export const DescriptionInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #333333;
  padding: 15px 10px;
`;

export const TextWrapper = styled.View`
  width: 88%;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
  color: #333;
`;

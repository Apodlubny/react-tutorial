import styled from 'styled-components';
export const Card = styled.article`
  display: inline-flex;
  flex-direction: column;
  padding: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const RecipeName = styled.h2`
  margin-top: 0;
`;
export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Label = styled.p`
  margin: 0;
`;

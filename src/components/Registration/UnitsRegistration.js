import styled from "@emotion/styled";

export const Input = styled.input`
  padding-right: 50px;
  border-radius: 20px;
  padding-left: 15px;
  font-size: 15px;
  width: 150px;
  height: 30px;
  border: none;
  background-color: lightgray;
  outline: none;
  margin-bottom: 10px;

  &::placeholder {
    padding-left: 10px;
    font-size: 15px;
  }
`;
export const IconEye = styled.img`
  width: 15px;
  height: 15px;
  margin-left: -25px;
`;
export const Error = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
  color: red;
`;

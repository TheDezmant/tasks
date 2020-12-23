import styled from "@emotion/styled";

const StyledAuthorization = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 400px;
    box-shadow: 2px 2px 10px lightgray;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    background-color: ${({ bgC }) => (bgC !== undefined ? bgC : "white")};
`;
const Location = styled.div`
     margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Login = styled.div`
`;
const Email = styled.div`
`;
const Password = styled.div`
`;
export { StyledAuthorization, Location, Login, Email, Password};

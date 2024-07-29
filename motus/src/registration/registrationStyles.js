import styled from "styled-components";

export const RegistrationBlock =styled.div `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 5px;
`;

export const PhotoBlock = styled.div `
    grid-column: 1/2;
    grid-row: 1/1;
    border-radius: 15px;
    background: linear-gradient(to right, #4ee413, #ee2d83, #ff00ff);
`;

export const Photo = styled.img `
`;
export const LabelBlock =styled.div `
    grid-row: 1/1;
    grid-column: 2/4;
    padding: 20px;
    flex-direction: column;
    background: #f5f5f5;
    border-radius: 15px;


`;
export const Label =styled.p `
    text-align: left;
    font-size: 24px;
    font-family: Arial;
    font-weight: bold;
`;
export const RedLabel =styled.p `
    color: #ee2d83;
`;
export const FormBlock = styled.div`
    grid-column: 4 / 6;
    grid-row: 1/1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    gap: 10px;
    align-items: center;
`;

export const UsernameField = styled.input`
    text-align: left;
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    grid-row: 1 / 2;
    width: 100%;
    margin-bottom: 1%;
`;

export const PasswordField = styled.input`
    text-align: left;
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    grid-row: 2 / 3;
    width: 100%;
`;

export const PersonalDataConsent = styled.div`
    display: flex;
    align-items: center;
    grid-row: 3 / 4;
    font-size: 16px;
    margin-top: 2%;
    margin-bottom: 2%;

    & input {
        margin-right: 10px;
    }
`;

export const RegistrationButton = styled.button`
    border-radius: 10px;
    text-align: center;
    background: linear-gradient(to right, #ea3cfd, #fc0d79);
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding: 15px;
    grid-row: 4 / 5;
    cursor: pointer;
    border: none;
    margin-bottom: 0;
    transition: background 0.5s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        background: linear-gradient(to right, #d2e8b3, #90e413);
        transform: scale(1.05);
        color: black;
    }
`;

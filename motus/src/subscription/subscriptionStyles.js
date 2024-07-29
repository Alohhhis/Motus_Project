import styled from "styled-components";

export const SubscriptionBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 5px;
`;

export const Subscribe = styled.div`
    font-size: 32px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    border-radius: 15px;
    background: #f5f5f5;
    height: 14vh;
    text-align: center;
    padding-top: 15%;
    font-weight: bold;
`;
export const Newbie = styled.div`
    text-align: left;
    background: linear-gradient(to right, #f8b8ea, #ef75be, #ff00ff);
    grid-column: 2/ 4;
    grid-row: 2 / 3;
    border-radius: 15px;
    height: 14vh;
    padding: 20px;
`;
export const CategoryLabel = styled.p `
    text-align: left;
    font-weight: bold;
    font-size: 24px;
    color: black;
`;
export const CategoryTranslate = styled.p `
    text-align: left;
    font-size: 16px;
    color: #565656;
`;
export const CategoryPrice = styled.p`
    text-align: right;
    font-size: 16px;
    font-style: italic;
`;

export const Flashed = styled.div`
    text-align: left;
    background: linear-gradient(to right, #d2e8b3, #90e413, #4ee413);
    grid-column: 4 / 6;
    grid-row: 2 / 3;
    height: 14vh;
    padding: 20px;
    border-radius: 15px;
`;

export const NewbieInfo = styled.div`
    text-align: left;
    border-radius: 15px;
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    height: 80%;
    padding: 20px;
    font-size: 16px;
    background: #f5f5f5;
    line-height: 1.5;
`;

export const FlashedInfo = styled.div`
    text-align: left;
    border-radius: 15px;
    grid-column: 4 / 6;
    grid-row: 3 / 4;
    height: 80%;
    padding: 20px;
    background: #f5f5f5;
    font-size: 16px;
    line-height: 1.5;
`;

export const SubscribeButton = styled.button`
    border-radius: 15px;
    grid-column: 4 / 6;
    grid-row: 4 / 5;
    text-align: center;
    background: linear-gradient(to right, #ea3cfd, #fc0d79);
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding: 15px;
    border: none;
    height: 30%;
    margin-top: 5%;
    cursor: pointer;
    transition: background 0.5s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        background: linear-gradient(to right, #d2e8b3, #90e413);
        transform: scale(1.05);
        color: black;
    }
`;

import {styled} from '@mui/system';
import BackgroundSVG1 from '../pictures/background1.svg';
import BackgroundSVG2 from '../pictures/background2.svg';
import BackgroundSVG3 from '../pictures/background3.svg';

export const Container = styled('div')`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 0.5fr 0.5fr 0.8fr 0.4fr 0.5fr 0.5fr 0.5fr 0.15fr 0.3fr 0.5fr 0.3fr 0.3fr ;
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: 'hidden';
`;

export const Background = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    display: 'flex',
    flexDirection: 'column',

});

export const BackgroundImage1 = styled('div')({
    width: '100%',
    height: '200vh',
    background: `url(${BackgroundSVG1}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '10% center',

});


export const BackgroundImage2 = styled('div')({
    width: '100%',
    height: '500vh',
    background: `url(${BackgroundSVG2}) no-repeat`,
    backgroundSize: 'cover',
    marginLeft: '-20%',
});


export const BackgroundImage3 = styled('div')({
    width: '100%',
    height: '180vh',
    background: `url(${BackgroundSVG3}) no-repeat `,
    backgroundSize: 'cover',
    backgroundPosition: '-40% center',
});


export const HeaderContainer = styled('div')`
    grid-column: 4 / 6;
    grid-row: 1 / 2;
    right: 0;
    left: auto;
    position: fixed;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.8); // Полупрозрачный белый фон
    border-radius: 20px; // Закругленные углы
    backdrop-filter: blur(10px); 
`;

export const Logo = styled('div')`
    grid-column: 1 / 4;
    grid-row: 1 / 2;



`;
export const Pic1 = styled('div')`
    grid-column: 4 / 6;
    grid-row: 2/ 3;
    display: flex;
    justify-content: center;


`;
export const Pic2 = styled('div')`
    grid-column: 1 / 4;
    grid-row: 4 / 5;
    display: flex;
    align-self: self-end;
`;
export const Pic3 = styled('div')`
    grid-column: 1 / 4;
    grid-row: 6 / 8;
    display: flex;
    align-self: self-end;
`;
export const TextBlock1 = styled('div')`
    justify-content: center;
    font-size: 30px;
    padding: 39px 40px 41px 43px;
    border-radius: 40px;
    background-color: #ffffff;
`;

export const Pink = styled('div')`
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    align-self: flex-start;
    background-color: #f02d84;
    position: relative;
    text-align: left;
    margin: 0;
`;

export const Par = styled('div')`
    margin: 0;
    padding: 0;
    line-height: 1.2;
`;
export const TextBlock2 = styled('div')`
    justify-content: center;
    font-size: 55px;
    padding: 44px 793px 43px 40px;
    border-radius: 40px;
    white-space: nowrap;
    background-color: #ffffff; 
`;
export const Pink2 = styled('div')`
    background-color: #f02d84;
    grid-column: 1 / 4;
    margin-right: 10px;
    text-align: left;
    grid-row: 4 / 5;
    align-self: flex-start;
`;
export const TextBlock3 = styled('div')`
    justify-content: center;
    font-size: 30px;
    white-space: nowrap;
    padding: 39px 45px 81px 43px;
    border-radius: 40px;
    background-color: #ffffff; /* Цвет фона для наглядности */
`;
export const Pink3 = styled('div')`
    background-color: #f02d84;
    position: relative;
    align-self: flex-start;
    grid-column: 4 / 6;
    text-align: left;
    grid-row: 4 / 5;
`;
export const TextBlock4 = styled('div')`
    justify-content: center;
    white-space: nowrap;
    border-radius: 40px;
    background-color: #ffffff; 
`;
export const Pink4 = styled('div')`
    background-color: #f02d84;
    position: relative;
    grid-column: 4 / 6;
    text-align: left;
    grid-row: 5 / 6;
`;
export const TextBlock5 = styled('div')`
    white-space: nowrap;
    background-color: #ffffff;
    justify-content: center;
    font-size: 55px;
    padding: 44px 793px 43px 40px;
    border-radius: 40px;
`;
export const Pink5 = styled('div')`
    background-color: #f02d84;
    position: relative;
    grid-column: 3 / 6;
    text-align: left;
    grid-row: 8 / 9;
`;
export const TextBlock6 = styled('div')`
    justify-content: center;
    font-size: 30px;
    white-space: nowrap;
    padding: 39px 45px 81px 43px;
    border-radius: 40px;
    background-color: #ffffff;
`;
export const Pink6 = styled('div')`
    background-color: #f02d84;
    position: relative;
    grid-column: 4 / 6;
    text-align: left;
    grid-row: 9 / 10;
    align-self: flex-start;
`;
export const TextBlock7 = styled('div')`
    justify-content: center;
    font-size: 30px;
    white-space: nowrap;
    padding: 39px 45px 81px 43px;
    border-radius: 40px;
    background-color: #ffffff; 
`;
export const Pink7 = styled('div')`
    background-color: #f02d84;
    position: relative;
    grid-column: 4 / 6;
    text-align: left;
    grid-row: 9 / 10;
    align-self: flex-end;

`;
export const RegistrationContainer = styled('div')`
    grid-column: 1 / 6;
    grid-row: 10 / 11;
    padding: 20px;
`;
export const SubscriptionContainer = styled('div')`
    grid-column: 1 / 6;
    grid-row: 11/ 12;
    padding: 20px;
`;
export const FooterContainer = styled('div')`
    grid-column: 1 / 6;
    grid-row: 12/ 13;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
`;
export const PicStyle1 = styled('img')`
    width: 100%;
    height: 100%;
`;
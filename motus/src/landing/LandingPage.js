import React from 'react';
import Header from "../header/Header";
import {
    Container,
    HeaderContainer,
    FooterContainer,
    SubscriptionContainer,
    RegistrationContainer,
    Logo,
    Pink3,
    Pic1,
    Pink,
    TextBlock1,
    Par,
    Pink2,
    TextBlock2,
    TextBlock3,
    TextBlock4,
    Pink4,
    BackgroundImage3,
    Background,
    BackgroundImage1,
    BackgroundImage2,
    PicStyle1,
    Pic2,
    Pic3,
    Pink5,
    TextBlock5,
    Pink6,
    TextBlock6,
    Pink7,
    TextBlock7
} from "./landingPageStyles";
import Footer from "../footer/Footer";
import Subscription from "../subscription/Subscription";
import Registration from "../registration/Registration";
import P1 from "../pictures/P1.png";
import g4 from "../pictures/Group 14.png";
import girls from "../pictures/girls.png";
import Motus from "../pictures/Мотус.png";


const LandingPage = () => {
    return (
        <Container>
            <Background>
                <BackgroundImage1/>
                <BackgroundImage2/>
                <BackgroundImage3/>
            </Background>
            <Logo>
                <PicStyle1 src={Motus} alt="ЛоготипФ"/>
            </Logo>
            <Pic1>
                <PicStyle1 src={P1} alt="Картиночка"/>

            </Pic1>
            <Pink>
                <TextBlock1>
                    <Par>Аудио-видео хостинг для <span style={{color: '#f02d84'}}>подкастов</span>,</Par>
                    <Par>где каждый пользователь сможет</Par>
                    <Par>записывать кроткие голосовые</Par>
                    <Par>и делиться ими с аудиторией</Par>
                </TextBlock1>
            </Pink>
            <Pink2>
                <TextBlock2>
                    О чем мы?
                </TextBlock2>
            </Pink2>
            <Pic2>
                <PicStyle1 src={g4} alt="Картиночка"/>

            </Pic2>
            <Pic3>
                <PicStyle1 src={girls} alt="Картиночка"/>

            </Pic3>
            <Pink3>
                <TextBlock3>
                    <Par>Площадка для саморазвития, образования</Par>
                    <Par>и поиска единомышленников.</Par>
                    <Par>Каждый пользователь может начать вести</Par>
                    <Par>собственный подкаст, как только наберет</Par>
                    <Par>аудиторию.</Par>
                </TextBlock3>
            </Pink3>
            <Pink4>
                <TextBlock4>
                    <svg width='100%' height="100%" viewBox="0 0 684 637" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.6">
                            <path
                                d="M482.553 399.073C445.016 464.089 395.254 513.757 345.215 541.535C295.146 569.331 245.061 575.093 206.569 552.87C168.078 530.647 148.025 484.39 147.062 427.132C146.1 369.908 164.232 301.979 201.77 236.963C239.307 171.946 289.069 122.278 339.107 94.5C389.176 66.7049 439.262 60.9426 477.753 83.1655C516.245 105.388 536.297 151.645 537.26 208.904C538.223 266.128 520.09 334.057 482.553 399.073Z"
                                stroke="#B3D420" strokeWidth="3"/>
                            <path
                                d="M482.553 236.963C520.091 301.979 538.223 369.908 537.261 427.132C536.297 484.39 516.245 530.647 477.754 552.87C439.262 575.093 389.177 569.331 339.108 541.536C289.069 513.757 239.307 464.09 201.77 399.073C164.233 334.057 146.1 266.128 147.063 208.904C148.026 151.645 168.078 105.389 206.57 83.1657C245.061 60.9428 295.147 66.7051 345.216 94.5002C395.254 122.278 445.016 171.946 482.553 236.963Z"
                                stroke="#B3D420" strokeWidth="3"/>
                            <path
                                d="M440.356 125.133C574.096 193.277 637.813 334.935 583.627 441.282C529.44 547.628 377.385 579.345 243.644 511.201C109.904 443.056 46.1868 301.399 100.373 195.052C154.56 88.7047 306.615 56.9884 440.356 125.133Z"
                                stroke="#B3D420" strokeWidth="3"/>
                            <path
                                d="M440.355 511.201C306.615 579.345 154.559 547.628 100.373 441.281C46.1862 334.935 109.903 193.277 243.644 125.132C377.384 56.9883 529.44 88.7047 583.626 195.052C637.812 301.398 574.096 443.056 440.355 511.201Z"
                                stroke="#B3D420" strokeWidth="3"/>
                            <path
                                d="M420.641 301.525C436.275 375.078 441.471 443.512 437.265 494.675C435.162 520.267 430.713 541.45 424.099 556.772C417.466 572.138 408.81 581.283 398.473 583.48C388.136 585.677 376.509 580.843 364.199 569.504C351.925 558.196 339.245 540.655 326.914 518.131C302.262 473.102 279.174 408.471 263.54 334.918C247.906 261.366 242.71 192.932 246.916 141.768C249.019 116.176 253.469 94.9941 260.083 79.6721C266.715 64.3061 275.372 55.161 285.708 52.9638C296.045 50.7667 307.673 55.6003 319.982 66.94C332.256 78.2474 344.936 95.7888 357.267 118.312C381.919 163.342 405.007 227.973 420.641 301.525Z"
                                stroke="#B3D420" strokeWidth="3"/>
                            <path
                                d="M420.686 334.849C405.052 408.402 381.964 473.033 357.312 518.062C344.981 540.586 332.301 558.127 320.027 569.435C307.718 580.774 296.09 585.608 285.754 583.411C275.417 581.214 266.76 572.069 260.128 556.703C253.514 541.381 249.065 520.198 246.961 494.607C242.755 443.443 247.951 375.009 263.586 301.456C279.22 227.904 302.307 163.273 326.959 118.243C339.29 95.7198 351.971 78.1785 364.245 66.8711C376.554 55.5314 388.181 50.6978 398.518 52.8949C408.855 55.0921 417.511 64.2372 424.144 79.6031C430.758 94.9252 435.207 116.108 437.311 141.699C441.516 192.863 436.32 261.297 420.686 334.849Z"
                                stroke="#B3D420" strokeWidth="3"/>
                        </g>
                    </svg>

                </TextBlock4>
            </Pink4>
            <Pink5>
                <TextBlock5>
                    <Par>Какие подкасты ты у нас найдешь?</Par>
                </TextBlock5>
            </Pink5>
            <Pink6>
                <TextBlock6>
                    <Par>Образовательные курсы от университетов</Par>
                </TextBlock6>
            </Pink6>
            <Pink7>
                <TextBlock7>
                    <Par>Курсы от топовых экспертов разных ниш</Par>
                </TextBlock7>
            </Pink7>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
            <SubscriptionContainer>
                <Subscription/>
            </SubscriptionContainer>
            <RegistrationContainer>
                <Registration/>
            </RegistrationContainer>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </Container>
    );
};

export default LandingPage;



import React from 'react';
import {
    SubscriptionBlock,
    Subscribe,
    Flashed,
    Newbie,
    NewbieInfo,
    FlashedInfo,
    SubscribeButton,
    CategoryLabel,
    CategoryPrice,
    CategoryTranslate
} from "./subscriptionStyles";
import {positions} from "@mui/system";

const Subscription = () => {
    return (
        <SubscriptionBlock>
            <Subscribe>
                Подписка
            </Subscribe>
            <Newbie>
                <CategoryLabel>
                    Newbie
                </CategoryLabel>
                <CategoryTranslate>
                    -новичок
                </CategoryTranslate>
                <CategoryPrice>
                    Бесплатно
                </CategoryPrice>
            </Newbie>
            <Flashed>
                <CategoryLabel>
                    Flashed
                </CategoryLabel>
                <CategoryTranslate>
                    -прошаренный
                </CategoryTranslate>
                <CategoryPrice>
                    200 ₽/мес.
                </CategoryPrice>
            </Flashed>
            <NewbieInfo>
                Аудио-видео хостинг для подкастов,
                где каждый пользователь сможет записывать кроткие голосовые
                и делиться ими с аудиторией
            </NewbieInfo>
            <FlashedInfo>
                Аудио-видео хостинг для подкастов,
                где каждый пользователь сможет записывать кроткие голосовые
                и делиться ими с аудиторией
            </FlashedInfo>
            <SubscribeButton href={"#"}>
                Оформить
            </SubscribeButton>
        </SubscriptionBlock>
    );
};
export default Subscription;
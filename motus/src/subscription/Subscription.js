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
                //TODO фон

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
                //TODO фон

                <CategoryLabel>
                    Flashed
                </CategoryLabel>
                <CategoryTranslate>
                    -прошаренный
                </CategoryTranslate>
                <CategoryPrice>
                    <p>
                    499 ₽/мес.
                    </p>
                   <p> 2499 ₽ на полгода</p>
                    <p>4999 ₽ на год</p>
                </CategoryPrice>
            </Flashed>
            <NewbieInfo>
                //TODO список
                Аудио-видео хостинг для подкастов,
                где каждый пользователь сможет записывать кроткие голосовые
                и делиться ими с аудиторией
            </NewbieInfo>
            <FlashedInfo>
                //TODO список

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
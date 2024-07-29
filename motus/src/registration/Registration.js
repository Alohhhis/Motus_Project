import React from 'react';
import {
    Form,
    FormBlock, Label,
    LabelBlock,
    PasswordField, PersonalDataConsent,
    Photo,
    PhotoBlock, RedLabel,
    RegistrationBlock, RegistrationButton,
    UsernameField
} from "./registrationStyles"
import {fontFamily} from "@mui/system";

const Registration = () => {
    return (
        <RegistrationBlock>
            <PhotoBlock>
                <Photo>

                </Photo>
            </PhotoBlock>
            <LabelBlock>
                <Label>
                    Хочешь с нами?
                    <RedLabel>
                        Регистрируйся!
                    </RedLabel>
                </Label>

            </LabelBlock>
            <FormBlock>
                <Form>
                    <UsernameField placeholder="Имя пользователя" />
                    <PasswordField type="password" placeholder="Пароль"  />
                    <PersonalDataConsent>
                        <input type="checkbox" />
                        Согласен на обработку персональных данных
                    </PersonalDataConsent>
                    <RegistrationButton>
                        Зарегистрироваться
                    </RegistrationButton>
                </Form>
            </FormBlock>
        </RegistrationBlock>

    );
};
export default Registration;
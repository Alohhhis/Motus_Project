import React, {useState} from 'react';
import {
    Form,
    FormBlock, Label,
    LabelBlock,
    PasswordField, PersonalDataConsent,
    Photo,
    PhotoBlock, Pink, RedLabel,
    RegistrationBlock, RegistrationButton,
    UsernameField
} from "./registrationStyles"
import {fontFamily} from "@mui/system";
import RegPic from "../pictures/RegPic.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';

const Registration = () => {
    const [focusedField, setFocusedField] = useState(null);
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const handleFocus = (field) => {
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    const handleCheckboxChange = () => {
        setCheckboxChecked(!checkboxChecked);
    };
    return (
        <RegistrationBlock>
            <PhotoBlock>
                <Photo src={RegPic} alt="Картиночка"/>
            </PhotoBlock>
            <Pink>
                <LabelBlock>
                    <Label>
                        Хочешь с нами?
                        <RedLabel>
                            Регистрируйся!
                        </RedLabel>
                    </Label>

                </LabelBlock>
            </Pink>
            <FormBlock>
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <TextField
                            label="Логин"
                            variant="outlined"
                            fullWidth
                            onFocus={() => handleFocus('login')}
                            onBlur={handleBlur}
                            sx={{
                                borderRadius: '10px',
                                marginTop: '5px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                    '& fieldset': {
                                        borderRadius: '10px',
                                        borderColor: focusedField === 'login' ? '#68fd12' : 'transparent',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: focusedField === 'login' ? '#68fd12' : 'transparent',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: focusedField === 'login' ? '#68fd12' : 'transparent',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    fontSize: '20px', // Increase the font size here
                                },
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Пароль"
                            type="password"
                            variant="outlined"
                            fullWidth
                            onFocus={() => handleFocus('password')}
                            onBlur={handleBlur}
                            sx={{
                                borderRadius: '10px',
                                marginTop: '5px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '10px',
                                    '& fieldset': {
                                        borderRadius: '10px',
                                        borderColor: focusedField === 'password' ? '#68fd12' : 'transparent',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: focusedField === 'password' ? '#68fd12' : 'transparent',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: focusedField === 'password' ? '#68fd12' : 'transparent',
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    fontSize: '20px', // Increase the font size here
                                },
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkboxChecked}
                                    onChange={handleCheckboxChange}
                                    sx={{
                                        marginTop: '10px',
                                        color: checkboxChecked ? '#68fd12' : '#fd0073',
                                        '& .MuiSvgIcon-root': {
                                            border: '2px',
                                            borderColor: checkboxChecked ? '#68fd12' : '#fd0073',
                                            borderRadius: '5px',
                                        },
                                        '&.Mui-checked': {
                                            color: '#68fd12',
                                            '& .MuiSvgIcon-root': {
                                                borderColor: '#68fd12',
                                            },
                                        },
                                    }}
                                />
                            }
                            label="Согласен на обработку персональных данных"
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                backgroundColor: '#fd0073',
                                borderRadius: '10px',
                                boxShadow: 'none',
                                fontStyle: 'italic',
                                '&:hover': {
                                    backgroundColor: '#fd4e9e',
                                },
                                marginTop: '5px',
                                height: '140%'
                            }}
                        >
                            Зарегистрироваться
                        </Button>
                    </Grid>
                </Grid>
            </FormBlock>
        </RegistrationBlock>

    );
};
export default Registration;
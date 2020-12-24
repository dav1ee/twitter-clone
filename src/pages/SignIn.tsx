import React from 'react';

import { makeStyles, Typography, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { ModalBlock } from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },

  blueSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71c9f8',
    flex: '0 0 50%',
    overflow: 'hidden',
    position: 'relative',
  },

  blueSideBigIcon: {
    position: 'absolute',
    left: '70%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200%',
    height: '200%',
  },

  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
  },

  blueSideListInfoItem: {
    marginBottom: 40,
  },

  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },

  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
  },

  loginSideTwitterIcon: {
    fontSize: 45,
  },

  loginSideWrapper: {
    width: 380,
  },

  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },

  loginSideField: {
    marginBottom: 20,
  },

  loginFormControl: {
    marginBottom: theme.spacing(2),
  },

  registerField: {
    marginBottom: theme.spacing(5),
  },
}));

export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn');
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp');
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcon} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListInfoIcon} />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
          <Typography variant="h4" className={classes.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography style={{ marginBottom: 15 }}>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <Button
            onClick={handleClickOpenSignUp}
            style={{ marginBottom: 15 }}
            variant="contained"
            color="primary"
            fullWidth>
            Зарегистрироваться
          </Button>
          <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>
            Войти
          </Button>
          <ModalBlock
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            title="Войти в аккаунт"
            classes={classes}>
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  label="E-mail"
                  id="email"
                  type="email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  autoFocus
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  label="Пароль"
                  id="password"
                  type="password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  autoFocus
                  fullWidth
                />
                <Button onClick={handleCloseModal} color="primary" variant="contained" fullWidth>
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            visible={visibleModal === 'signUp'}
            onClose={handleCloseModal}
            title="Создайте учетную запись"
            classes={classes}>
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  label="Имя"
                  id="name"
                  type="name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  autoFocus
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  label="Email"
                  id="email"
                  type="email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  autoFocus
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  label="Пароль"
                  id="password"
                  type="password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  autoFocus
                  fullWidth
                />
                <Button onClick={handleCloseModal} color="primary" variant="contained" fullWidth>
                  Далее
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};

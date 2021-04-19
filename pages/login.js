import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import style from '../styles/login.module.scss';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { apiFetch } from '../api/apiFetch';
import MuiAlert from '@material-ui/lab/Alert';
import { useRouter } from 'next/router';
import { useLogin } from '../hooks/user';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiCardActions-root': {
      padding: '8px 16px 16px'
    }
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="outlined" {...props} />;
}

export default function Login() {
  const classes = useStyles();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState, errors } = useForm({ mode: 'onChange' });
  const { isSubmitting, isValid } = formState;

  const { user, isLogin, Login } = useLogin();

  console.log('Login-user', user, isLogin);

  if (isLogin) {
    router.push('/courses');
  }

  const onSubmit = data => {
    Login(data);
    console.log('onSubmit', isLogin);
    // if (isLogin) {
    //   router.push('/courses');
    // }
  };

  console.log('Login-isSubmitting', isSubmitting, isValid);

  return (
    <>
      <Alert severity="error">Test</Alert>
      <Card className={style.login_page}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h3">
              Login
            </Typography>
            <TextField
              error={errors.email}
              type="email"
              label="Email"
              fullWidth={true}
              required
              inputRef={register({
                required: 'Vous devez rentrer un email'
              })}
              helperText={errors.email && errors.email.message}
              name="email"
              defaultValue="test@angular-university.io"
            />
            <TextField
              error={errors.password}
              type="password"
              label="Password"
              fullWidth={true}
              required
              inputRef={register({
                required: 'Vous devez rentrer un mot de passe'
              })}
              helperText={errors.password && errors.password.message}
              name="password"
              defaultValue="test"
            />
          </CardContent>
          <CardActions className={style.login_action}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disableElevation
              fullWidth={true}
              disabled={!(isSubmitting || isValid)}>
              Login
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
}

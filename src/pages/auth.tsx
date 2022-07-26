/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
import { Amplify, withSSRContext } from 'aws-amplify';
import bodyParser from 'body-parser';
import type { NextApiRequest, NextApiResponse } from 'next';
import Link from 'next/link';
import { promisify } from 'util';

import Err from '@/components/forms/Err';
import Input from '@/components/forms/Input';
import { Main } from '@/components/Layouts/Main';
import { Meta } from '@/components/Layouts/Meta';

const getBody = promisify(bodyParser.urlencoded());

Amplify.configure({
  aws_project_region: 'eu-west-1',
  aws_cognito_identity_pool_id:
    'eu-west-1:a503bd33-27fd-47d5-98b2-77f216c5ca39',
  aws_cognito_region: 'eu-west-1',
  aws_user_pools_id: 'eu-west-1_VfvZZ2x2u',
  aws_user_pools_web_client_id: '6pptbh57e2vbrrkqao9i87ps0g',
  oauth: {},
});

const SubForm = ({
  left,
  button,
}: {
  left?: { text: string; href: string };
  button: string;
}): JSX.Element => (
  <div className='mt-6 flex w-full'>
    <div className='flex grow items-center justify-end pr-1 text-sm'>
      {left && (
        <Link href={left.href}>
          <a className='font-bold underline'>{left.text}</a>
        </Link>
      )}
    </div>
    <div>
      <button type='submit' className='btn btn-primary btn-md  self-end'>
        {button}
      </button>
    </div>
  </div>
);

const SignIn = ({
  err,
  section,
}: {
  err?: { message: string };
  section: string;
}): JSX.Element => {
  const titles = {
    signin: 'Вход',
    signup: 'Регистрация',
    forgot: 'Забравена парола',
    submitCode: 'Потвърждение',
    changePassword: 'Смяна на парола',
  } as { [key: string]: string };
  const title = titles[section];
  return (
    <Main hideFooter meta={<Meta title={`Login`} description={`Login`} />}>
      <form
        action={`/auth/?section=${section}`}
        method='POST'
        className='flex flex-col items-center justify-center'
      >
        <h1 className='text-3xl font-bold'>{title}</h1>
        <div className='form-control w-full max-w-md  rounded-lg bg-slate-900 p-4'>
          {JSON.stringify(err)}
          {err && <Err err={err} />}
          {section === 'signin' && (
            <>
              <Input name='username' placeholder='Потребителско име' />
              <Input name='email' placeholder='E-mail' />
              <Input name='password' placeholder='Парола' type='password' />

              <div>
                <button
                  type='submit'
                  className='btn btn-primary btn-md  self-end'
                >
                  Whod 2
                </button>
              </div>
            </>
          )}
          {section === 'signup' && (
            <>
              <Input name='username' placeholder='Потребителско име' />
              <Input name='email' placeholder='E-mail' />
              <Input name='password' placeholder='Парола' type='password' />
              <Input
                name='passwordagain'
                placeholder='Парола пак'
                type='password'
              />
              <SubForm
                left={{
                  text: 'Вече си регистриран? Вход',
                  href: '/auth/?section=signin',
                }}
                button='Регистрация'
              />
            </>
          )}
        </div>
      </form>
    </Main>
  );
};

export const getServerSideProps = async ({
  query,
  req,
  res,
}: {
  query: { section: string };
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const { section } = query;
  const { Auth } = withSSRContext({ req });

  const login = async (username: string, password: string) => {
    try {
      await Auth.signIn(username, password);
      const user = await Auth.currentAuthenticatedUser();
      const session = await Auth.currentSession();

      const userInfo = {
        ...user.attributes,
        username: user.username,
        token: session.getAccessToken().getJwtToken(),
        refreshtoken: session.getRefreshToken().getToken(),
      };

      return userInfo;
    } catch (err: any) {
      return { err: { message: err.message, code: err.code } };
    }
  };
  const signUp = async (username: string, password: string, email: string) => {
    try {
      const data = await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      return data;
    } catch (err: any) {
      return { err: { message: err.message, code: err.code } };
    }
  };

  const confirmSignUp = async (username: string, authCode: string) => {
    try {
      const data = await Auth.confirmSignUp(username, authCode);
      return { stage: 2, username, ...data };
    } catch (err: any) {
      return { err: { message: err.message, code: err.code } };
    }
  };

  const forgot = async (username: string) => {
    try {
      const data = await Auth.forgotPassword(username);
      return { stage: 1, username, ...data };
    } catch (err: any) {
      return { err: { message: err.message, code: err.code } };
    }
  };
  const submitCode = () => {
    return { stage: 2 };
  };
  const changePassword = async (
    username: string,
    validation: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      if (password === confirmPassword) {
        await Auth.forgotPasswordSubmit(username, validation, password);
        return { props: { stage: 3, error: { name: 'Empty' } } };
      }
      return {
        props: {
          error: { name: 'PasswordNotMatch', message: "Passwords don't Match" },
        },
      };
    } catch (err: any) {
      return { err: { message: err.message, code: err.code } };
    }
  };
  if (req.method === 'POST') {
    await getBody(req, res);
    const {
      action,
      username,
      password,
      email,
      authCode,
      validation,
      confirmPassword,
    } = req.body;
    if (action === 'login') {
      const data = await login(username, password);
      return {
        props: data,
      };
    }
    if (action === 'signup') {
      console.log('signup called');

      const data = await signUp(username, password, email);
      console.log(data);

      return {
        props: { ...data, section: 'signup' },
      };
    }
    if (action === 'confirm') {
      const data = await confirmSignUp(username, authCode);
      return {
        props: { ...data, section: 'confirm' },
      };
    }
    if (action === 'forgot') {
      const data = await forgot(username);
      return {
        props: { ...data, section: 'forgot' },
      };
    }
    if (action === 'submitCode') {
      const data = await submitCode();
      return {
        props: { ...data, section: 'submitCode' },
      };
    }
    if (action === 'changePassword') {
      const data = await changePassword(
        username,
        validation,
        password,
        confirmPassword
      );
      return {
        props: { ...data, section: 'changePassword' },
      };
    }

    return {
      props: {
        username: req.body.username,
      },
    };
  }

  return {
    props: {
      section: section || 'signin',
    },
  };
  // const user = await Auth.currentAuthenticatedUser();
  // console.log('user: ', user);
};

export default SignIn;

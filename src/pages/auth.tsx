/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
import { Amplify, withSSRContext } from 'aws-amplify';
import bodyParser from 'body-parser';
import type { NextApiRequest, NextApiResponse } from 'next';
import { useState } from 'react';
import { promisify } from 'util';

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

const Input = ({
  name,
  placeholder,
  type,
  value,
}: {
  name: string;
  placeholder?: string;
  type?: string;
  value?: string;
}): JSX.Element => {
  const [val, setVal] = useState(value);

  return (
    <div className={type === 'hidden' ? 'hidden' : 'block'}>
      <label className='label'>
        <span className='label-text'>{placeholder}</span>
        <span className='label-text-alt'> </span>
      </label>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        className='inputx w-full max-w-xs'
        name={name}
        value={val}
        onChange={(e): void => setVal(e.target.value)}
      />
      <label className='label'>
        <span className='label-text-alt'></span>
        <span className='label-text-alt'></span>
      </label>
    </div>
  );
};

const SignIn = ({ err }: { err?: { message: string } }): JSX.Element => {
  return (
    <Main hideFooter meta={<Meta title={`Login`} description={`Login`} />}>
      {err && (
        <div className='alert alert-error shadow-lg'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 shrink-0 stroke-current'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>{err.message}</span>
          </div>
        </div>
      )}
      <form action='/auth/' method='POST'>
        <div className='flex flex-col items-center justify-center'>
          <div className='form-control w-full max-w-xs border-spacing-x-0.5 rounded-md bg-slate-900 p-4'>
            <Input name='username' placeholder='Потребителско име' />

            <Input name='password' placeholder='Парола' type='password' />
            <Input name='action' value='login' type='hidden' />
            <button
              type='submit'
              className='btn btn-primary btn-md mt-4 self-end'
            >
              Вход
            </button>
          </div>
        </div>
      </form>
    </Main>
  );
};

export default SignIn;

export const getServerSideProps = async ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const { Auth } = withSSRContext({ req });

  const login = async (username: string, password: string) => {
    try {
      await Auth.signIn(username, password);
      const user = await Auth.currentAuthenticatedUser();
      const session = await Auth.currentSession();
      console.log(session.getAccessToken().getJwtToken());

      const userInfo = {
        ...user.attributes,
        username: user.username,
        token: session.getAccessToken().getJwtToken(),
        refreshtoken: session.getRefreshToken().getToken(),
      };
      // setUser(userInfo);
      return userInfo;
      // localStorage.setItem('user', JSON.stringify(userInfo));
    } catch (err: any) {
      return { err: { message: err.message, code: err.code } };
    }
  };
  const signUp = async (username: string, password: string, email: string) => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      return { props: { stage: 1, error: { name: 'Empty' } } };
    } catch (err: any) {
      return { err: { message: err.message, code: err.code } };
    }
  };

  const confirmSignUp = async (username: string, authCode: string) => {
    try {
      await Auth.confirmSignUp(username, authCode);

      // return({props:{  stage: 2, error: { name: 'Empty' } });
    } catch (err: any) {
      return { err: { message: err.message, code: err.code } };
    }
  };

  const forgot = async (username: string) => {
    try {
      await Auth.forgotPassword(username);

      return { props: { stage: 1 } };
    } catch (err: any) {
      return { err: { message: err.message, code: err.code } };
    }
  };
  const submitCode = () => {
    return { props: { stage: 2 } };
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
      signUp(username, password, email);
    } else if (action === 'confirm') {
      confirmSignUp(username, authCode);
    } else if (action === 'forgot') {
      forgot(username);
    } else if (action === 'submitCode') {
      submitCode();
    } else if (action === 'changePassword') {
      changePassword(username, validation, password, confirmPassword);
    }

    return {
      props: {
        username: req.body.username,
      },
    };
  }
  return {
    props: {
      username: 'GET',
    },
  };
  // const user = await Auth.currentAuthenticatedUser();
  // console.log('user: ', user);
};

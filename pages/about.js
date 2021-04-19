import Layout from '../components/layout';
import Link from 'next/link';
import style from '../styles/about.module.scss';
import React from 'react';

import { useLogin } from '../hooks/user';

export default function About() {
  const { user, isLogin } = useLogin();

  return (
    <div className={style.container}>
      <h1>Courses application: {user}</h1>
      <h1>User: {user}</h1>
      <h1>isLogin: {isLogin}</h1>
      <p>This application use store (NGRX) and entities for all datas.</p>
      <p>It saves this store in local cache and rehydrate store when refresh application by F5.</p>
      <p></p>
      <p>
        The data server is slowing by a sleep function for showing application when a connection is
        slow.
      </p>
      <p>
        If you want save the course, the course "Angular Ngrx Course" throw an error that will be
        catch in the IHM.
      </p>
      <br />
      <Link href="/">
        <a className={style.link}>← Back to home</a>
      </Link>
    </div>
  );
}

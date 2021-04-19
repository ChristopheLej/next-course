import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Menu from './menu';
import { useState } from 'react';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Course</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Course website using Next.js" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
          rel="stylesheet"></link>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <Menu
              menuSelected={text => {
                console.log(text);
                setOpen(false);
              }}></Menu>
          </Drawer>
        </Toolbar>
      </AppBar>

      <main>{children}</main>
    </>
  );
}

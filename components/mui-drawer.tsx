"use client"

import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { Menu } from '@mui/icons-material';

type Anchor = 'top';

export default function MuiDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <div className='fixed top-0 bg-transparent w-full h-[2em] p-2 lg:hidden'>
      <React.Fragment>
        <Button onClick={toggleDrawer('top', true)} className='text-[#77586b] absolute right-0' ><Menu/></Button>
        <SwipeableDrawer
          anchor="top"
          open={state.top}
          onClose={toggleDrawer('top', false)}
          onOpen={toggleDrawer('top', true)}
        >
            <div className='relative min-h-[12em] bg-stone-200 text-[#77586b] p-4 flex flex-col' >
                <a href="/" className='border-b-2 border-[#77586b] py-2 mb-2'>Home</a>
                <a href="/about" className='border-b-2 border-[#77586b] py-2 mb-2' >About Us</a>
                <a href="/register" className='border-b-2 border-[#77586b] py-2 mb-2' >Buy a Ticket</a>
                <a href="/contact" className='border-b-2 border-[#77586b] py-2'>Contact Us</a>
            </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}


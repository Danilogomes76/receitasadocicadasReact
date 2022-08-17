import { styled } from '@stitches/react';

export const HeaderComponent = styled('header', {
    display: 'flex',
    background: 'linear-gradient(180deg, rgba(215,93,114,1) 0%, rgba(0,212,255,0) 100%)',
    padding: '15px',
    alignItems: 'center',
    textShadow: '2px 2px 5px black',
    width: '-webkit-fill-available',
    zIndex: '2',
    position: 'fixed'
})

export const Separator = styled('div', {
    display: 'flex',
    justifycontent: 'space-between',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& div': {
        display: 'flex',
        alignItems: 'center',

        ['$ h1'[1]]:{
            fontSize: '20px',
            color: 'white'
        }
    },

    '& img': {
        width: '60px',
        height: '60px',
        marginRight: '10px'
    },

    '& ul': {
        display: 'flex',
        listStyle: 'none',

        '& li': {
            marginLeft: '15px',
            fontSize: '25px',
        }

    },
    
})

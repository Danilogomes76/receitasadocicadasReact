import { styled } from '@stitches/react';

export const Img = styled('img', {
    width: '100%'
})

export const Container = styled('div',{
    display: 'flex',
    flexDirection: 'column',


    '& h1': {
        position: 'absolute',
        zIndex: '2'
    },
})


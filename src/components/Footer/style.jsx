import { styled } from "@stitches/react";

export const Container = styled('div',{
    background: 'rgb(233 194 134)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textShadow: 'black 2px 2px 2px',
})
export const Sobre = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: '2px white solid',
})
export const Adicionais = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: '2px white solid',
    marginBottom: '20px'
})
export const H1 = styled('h1',{
    fontSize: '35px',
    margin: '20px',
})
export const P = styled('p',{
    lineHeight: '2.5',
    fontSize: '15px',
    fontWeight: 'bold',
})
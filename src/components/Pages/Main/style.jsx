import { styled } from '@stitches/react'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'monospace',
})

export const FoodContainer = styled('div', {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#d65c73',
    borderTop: '5px solid white',
    borderBottom: '5px solid white',
    paddingBottom: '20px'
})

export const FoodApresentation = styled('div', {
    display: 'grid',
    gridColumn: '1fr 1fr 1fr',
    gridRow: '1fr 1fr',
    gap: '10px 10px',
    gridTemplateAreas: '". . ."". . ."',
})

export const H1 = styled('h1', {
    fontSize: '50px',
    padding: '25px',
    textShadow: '2px 2px 2px black',
})



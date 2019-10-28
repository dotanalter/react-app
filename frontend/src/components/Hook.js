import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styledBy = (property, mapping) => props => mapping[props[property]];

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
    background: styledBy('color', {
        default: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        red: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        blue: 'linear-gradient(45deg, #d7d0f3 30%, #21CBF3 90%)',
        yellow:'linear-gradient(45deg, #E2FF4E 30%, #ffff00 90%)',
    }),
    border: 0,
    borderRadius: 3,
    boxShadow: styledBy('color', {
        default: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        red: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        blue: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        yellow: '0 3px 5px 2px rgba(255, 255, 0, .3)',
    }),
    color: 'white',
    height: 40,
    //   position: 'fixed',
    //   bottom:400,
    //   left:500,
    padding: '0 30px',
    margin: 8,
    
});

export default function AdaptingStyledComponents(props) {
  return (
    <React.Fragment>
      <MyButton marginLeft={props.marginLeft} marginTop={props.marginTop} marginRight={props.marginRight} href={props.href} color={props.color ? props.color : "red"}>{props.data}</MyButton>
    </React.Fragment>
  );
}
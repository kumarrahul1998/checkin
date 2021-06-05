import React from 'react'
import { TextField } from "@material-ui/core"
import {
  withStyles,
} from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const styles = {
  input: {
    '&::placeholder' : {
      color:'white',
      opacity: 1
    },
    '&:focus' : {
      '&::placeholder' : {
        opacity: 0
      }
    },
  },
  notchedOutline: {
    borderColor: 'white !important'
  }

}

function Basic({ label, classes, onChange, ...rest }) {
  const CustomTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'white',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
      }
    },

  })(TextField);
  return (
    <div>
      
      <TextField
      style={{ borderColor: 'white'}}
        variant="outlined"
        label={label}
        onChange={onChange}
        InputProps = {{
          classes: {input: classes['input'],
                    notchedOutline: classes.notchedOutline},
          style: {color: 'white'},
        }}
        inputProps = {{inputMode: rest.inputMode}}
        required={rest.required}
        autoFocus={rest.autoFocus}
        autoComplete="none"
        {...rest}
      />
      
    </div>
  )
}

Basic.propTypes = {
  isRequired: PropTypes.bool,
  isAutoFocus: PropTypes.bool
}

export default withStyles(styles)(Basic)

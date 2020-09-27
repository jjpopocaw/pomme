import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'

const MultipleOptionQuestion = ({ label, options }) => {
    return (
        <>
            <h1>{label}</h1>
            <FormGroup>
                {options && options.map(({ label }) => (
                    <FormControlLabel key={label} control={<Checkbox />} label={label} />
                ))}
            </FormGroup>
        </>
    )
}

export default MultipleOptionQuestion

import { TextField, Button } from '@mui/material';

export const NameInput = (props) => {
    const { onClick, onChange} = props;
    return(
        <div>
           <div className='name-area'>
            <h1>Welcome to Kids Word Count</h1>
            <h5>What is your child's name?</h5>
            
            <TextField 
                id="standard-basic" 
                label="Enter here" 
                variant="standard"
                onChange={onChange}
            />
            <Button onClick={onClick}>Remember</Button>
            </div>
        </div>
    );
};
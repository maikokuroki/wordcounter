import { Button, TextField } from '@mui/material';

export const EnterWords = (props) => {
    const { word, onChange, onClick} = props;

    return(
        <div className='enter-word-area'>
        <TextField 
            id="standard-basic" 
            label="Enter Word" 
            variant="standard"
            value={word}
            onChange={onChange}
        />
        <Button onClick={onClick}>Add</Button>
        </div>
    );
};
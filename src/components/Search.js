import {TextField, Button }from '@mui/material';

export const Search = (props) => {
    const { onChange, onClick, searchWord } = props;
    return(
        <div className='search-area'>
            <TextField 
                id="outlined-basic" 
                label="Search word" 
                variant="outlined"
                value={searchWord}
                onChange={onChange} 
            />
            <Button onClick={onClick}>Search</Button>
        </div>
    );
}
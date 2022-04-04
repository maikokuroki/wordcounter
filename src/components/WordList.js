import { Button, List, ListItem, ListItemText } from '@mui/material';

export const WordList = (props) => {
    const { wordList, onClick} = props;
    return(
        <div className='list-area'>
            {wordList.map((item) => {
                return(
                    <List>
                        <ListItem key={item.index}>
                            <ListItemText>
                                {wordList.indexOf(item)+1}
                                {item}
                            </ListItemText>
                            <Button onClick={onClick}>Remove</Button>
                        </ListItem>
                    </List>
                )
            })}
        </div>
    );
}
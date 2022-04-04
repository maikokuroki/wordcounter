import { memo } from 'react'
;
export const Title = memo((props) => {
    const { name } = props;
    return(
        <h1>{name}'s Words Counter</h1>
    );
});
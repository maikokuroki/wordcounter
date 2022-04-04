import { memo } from 'react';

export const Counter = memo((props) => {
    const { count, name } = props;
    return(
        <div>
            <h3>Total Words {name} knows: {count} Words</h3>
        </div>
    );
});
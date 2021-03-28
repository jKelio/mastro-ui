import { useMemo } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
const data = useMemo(
    () => [
        {
            col1: 'Hello',
            col2: 'World',
        },
        {
            col1: 'react-table',
            col2: 'rocks',
        },
        {
            col1: 'whatever',
            col2: 'you want',
        },
    ],
    []
);

function Table() {
    return <table></table>
}
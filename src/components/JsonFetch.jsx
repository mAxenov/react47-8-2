import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

function JsonFetch({ url }) {
    const [{ data, loading, error }] = useJsonFetch(url);
    console.log(data, loading, error)

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (loading) {
        return <div>Загрузка...</div>;
    } else if (data !== undefined) {
        return (
            <div>
                {data.status}
            </div>
        );
    }
}

export default JsonFetch;
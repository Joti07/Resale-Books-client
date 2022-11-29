import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BooksCard from '../BooksCard/BooksCard';

const Category = () => {
    const books = useLoaderData();
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    books.map(book => <BooksCard
                        key={book._id}
                        book={book}

                    ></BooksCard>)
                }
            </div>

        </div>
    );
};

export default Category;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBooks = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`https://book-store-server-zjw7.onrender.com/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-4 bg-black text-white min-h-screen'>
            <BackButton />
            <h1 className='text-3xl my-4 text-center p-5'>Book Details</h1>
            {loading ? (
                <div className='flex justify-center items-center'>
                    <Spinner />
                </div>
            ) : (
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-auto max-w-screen-sm h-auto bg-black text-white rounded-xl p-4 m-4 border'>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Id</span>
                            <span>{book._id}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Title</span>
                            <span>{book.title}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Author</span>
                            <span>{book.author}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                            <span>{book.publishYear}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                            <span>{new Date(book.createdAt).toString()}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                            <span>{new Date(book.updatedAt).toString()}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowBooks;

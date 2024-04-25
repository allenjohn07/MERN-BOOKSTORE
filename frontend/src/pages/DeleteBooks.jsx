import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted Successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4 bg-black text-white min-h-screen'>
      <BackButton />
      <h1 className='text-3xl my-4 text-center p-5'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='border border-sky-400 rounded-xl p-8 max-w-md mx-auto'>
        <h3 className='text-2xl text-center mb-4'>Are you sure you want to delete this book?</h3>
        <button className='py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md w-full' onClick={handleDeleteBook}>Yes, Delete Book</button>
      </div>
    </div>
  );
};

export default DeleteBooks;

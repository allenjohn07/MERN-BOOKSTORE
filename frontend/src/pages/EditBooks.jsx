import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://book-store-server-zjw7.onrender.com/books/${id}`)
      .then((response) => {
        const { title, author, publishYear } = response.data;
        setTitle(title);
        setAuthor(author);
        setPublishYear(publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occurred! Please check console.');
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios.put(`https://book-store-server-zjw7.onrender.com/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited Successfully', { variant: 'success' });
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
      <h1 className='text-3xl my-4 text-center p-5'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='border border-gray-700 rounded-xl p-4 max-w-md mx-auto'>
        <div className='my-4'>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='border border-gray-500 rounded-md px-4 py-2 w-full text-gray-900 bg-gray-200 focus:outline-none focus:bg-gray-300' />
        </div>
        <div className='my-4'>
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Author' className='border border-gray-500 rounded-md px-4 py-2 w-full text-gray-900 bg-gray-200 focus:outline-none focus:bg-gray-300' />
        </div>
        <div className='my-4'>
          <input type="text" id="publishYear" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} placeholder='Publish Year' className='border border-gray-500 rounded-md px-4 py-2 w-full text-gray-900 bg-gray-200 focus:outline-none focus:bg-gray-300' />
        </div>
        <button className='py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4' onClick={handleEditBook}>Save</button>
      </div>
    </div>
  );
};

export default EditBooks;

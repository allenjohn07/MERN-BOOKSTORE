import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { PiBookOpenTextLight } from 'react-icons/pi';

const BookModal = ({ book, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-90 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()} className='w-auto max-w-screen-sm h-auto bg-black text-white rounded-xl p-4 m-4 flex flex-col relative border'>
                <AiOutlineClose className='absolute right-6 top-6 text-3xl text-white cursor-pointer' onClick={onClose} />
                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2'>
                    {book._id}
                </h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>
                        {book.title}
                    </h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>
                        {book.author}
                    </h2>
                </div>
                <p className='mt-4'>Anything you want to show</p>
                <p className='my-2'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quasi ipsam natus odio suscipit minima! Aliquid maxime expedita hic,
                    facilis ad iste doloremque distinctio nam modi aliquam, tempore asperiores velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos
                    id alias voluptatem minima maxime reprehenderit, itaque voluptas ex, ducimus reiciendis ipsum laboriosam doloremque consequuntur nam aspernatur, mollitia hic vitae.
                </p>
            </div>
        </div>
    );
};

export default BookModal;

import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import axios from "axios";
import {Link} from 'react-router-dom';

function Courses() {
    const [book, setBook] = useState([]);
    useEffect(()=>{
        const getBook = async ()=>{
            try{
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
            } catch(error){
                console.log(error);
            }
        };
        getBook();
    }, []);
  return (
    <>
        
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
            <div className='pt-28 justify-center items-center text-center'>
                <h1 className='text-2xl md:text-4xl'>We,re delighted to have you <span className='text-pink-500'>Here!: )</span></h1>
                <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quod culpa odio eius repellat cum iure beatae? Optio officiis, atque enim temporibus fugit ipsum nulla velit officia ipsa distinctio explicabo pariatur fugiat voluptatibus iste voluptate ex quasi tempora earum repudiandae! Eveniet perferendis aperiam labore id accusamus iste facere quis laborum!</p>
                <Link to='/'>
                <button className=" mt-6 mb-6 bg-pink-500 py-2 px-4 rounded-md text-white hover:bg-pink-600 duration-300">Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    book.map((item) => (
                        <Cards key={item.id} item={item}/>    
                    ))
                }    
            </div>
        </div>
    </>
  )
}

export default Courses
import React from "react";
import './books.scss';

import BeautyStars from 'beauty-stars';


const books = [
    {
        rating:1,
        id: 1,
        name: "The Guide",
        author: "R.K. NARAYAN",
        price: "12.99",
        image: "https://www.bookgeeks.in/wp-content/uploads/2018/01/The-Guide-RK-Narayan.jpg",
      },
      {
        rating:4,
        id: 2,
        name: "Malgudi-Days",
        author: "R.K. NARAYAN",
        price: "9.99",
        image: "https://www.bookgeeks.in/wp-content/uploads/2018/01/Malgudi-Days-RK-Narayan.jpg",
      },
      {
        rating:2,
        id: 3,
        name: "The Private Life of an Indian Prince",
        author: "Mulk Raj Anand",
        price: "7.99",
        image:"https://www.bookgeeks.in/wp-content/uploads/2018/01/The-Private-Life-of-an-Indian-Prince-Mulk-Raj-Anand.jpg",
      },
      {
        rating:5,
        id: 4,
        name: "Untouchable",
        author: "RAJ ANAND",
        price: "16.99",
        image:"https://www.bookgeeks.in/wp-content/uploads/2018/01/Untouchable-Mulk-Raj-Anand.jpg",
      },
      {
        rating:3,
        id: 5,
        name: "Train to Pakistan",
        author: "KHUSHWANT SINGH",
        price: "20.99",
        image:"https://www.bookgeeks.in/wp-content/uploads/2018/01/Train-to-Pakistan-Khushwant-Singh.jpeg",
      },
      {
        rating:4,
        id: 6,
        name: "Godan",
        author: "MUNSHI PREMCHAND",
        price: "2.99",
        image:"https://www.bookgeeks.in/wp-content/uploads/2018/01/Godan-Munshi-Premchand.jpg",
      },
      {
        rating:2,
        id: 7,
        name: "The Room on the Roof",
        author: "RUSKIN BOND",
        price: "5.99",
        image:"https://www.bookgeeks.in/wp-content/uploads/2018/01/The-Room-on-the-Roof-Ruskin-Bond.jpg",
      },
      {
        rating:1,
        id: 8,
        name: "The Complete Adventures of Feluda",
        author: "SATYAJIT RAY",
        price: "22.99",
        image:"https://www.bookgeeks.in/wp-content/uploads/2018/01/The-Complete-Adventures-of-Feluda.jpg",
      },
      {
        rating:5,
        id: 9,
        name: "Combat of Shadows",
        author: "MANOHAR",
        price: "5.99",
        image:"https://www.bookgeeks.in/wp-content/uploads/2017/03/Combat-of-Shadows-by-Manohar-Malgonkar-e1490610959883.jpg",
      },
      {
        rating:4,
        id: 10,
        name: "The God of Small Things",
        author: "ARUNDHATI ROY",
        price: "11.99",
        image:"https://www.bookgeeks.in/wp-content/uploads/2018/01/The-God-of-Small-Things-by-Arundhati-Roy.jpg",
      }
];




function Books(){
    return(
        <div className="container">
            {
                books.map((book)=>{
                    return <Book key= {book.id} {...book}/>
                })
            }
        </div>
    )
}

const Book = ({name,author,price,image,rating})=> {
    return(
        <div className="item  ">
            <img src={image} />
            <div className="card-text shadow">
                <p className="">{name}</p>
                <p className="author">{author}</p>
                <BeautyStars
                        value={rating}
                        size={'16px'}
                        activeColor={"#ffa500"}
                        
                        // onChange={value => this.setState({ value })}
                    />
            </div>
            
        </div>
    )
};

export default Books
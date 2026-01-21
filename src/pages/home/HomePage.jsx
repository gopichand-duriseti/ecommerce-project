import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { ProductsGrid } from './ProductsGrid'
import './HomePage.css'

export function HomePage({ cart,loadCart }){
    const [products,setProducts]=useState([]);

    // Below code to load the backend data once
    useEffect(()=>{ 
        // useEffect should not return a promise so we use async and a variable store async function inside useEffect anonymous function
        const getHomeData = async()=>{
            const response=await axios.get('/api/products')
            setProducts(response.data);
        }
        getHomeData();
    },[]) 
    // Empty array means this code runs only once and bcs of strict mode in app.jsx it runs twice to help us catch bugs and only does it during development
    
    /*     OR
    fetch('http://localhost:3000/api/products')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
    */
    return(
    <>
    <title>E-commerce Project</title>

    <Header cart={cart}/>
    <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart}/>
    </div>
    </>
    )
}
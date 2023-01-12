import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import { PRODUCT_BY_CATEGORY } from "../utils/queries";


//import { Container, Col, Button, Card, CardColumns } from "react-bootstrap";



const SearchProduct = () => {

    const PRODUCT_BY_CATEGORY = gql`
  query productByCategory {
    productByCategory {
      _id
      title
      description
      main_image
      price
      rating
      ratings_total
      brand
      link
      category
    }
  }
`;


    //const { loading, data } = useQuery(PRODUCT_BY_CATEGORY);

    const [ getProducts, { loading, data } ] = useQuery(PRODUCT_BY_CATEGORY);

    if(loading) return <p>Loading...</p>;

    if(data && data.productByCategory) {
        console.log(data.productByCategory);
    }

//   const [category, setCategory] = useState("acne");
//   
//   useEffect(() => {
//     if (data) {
//       console.log(data);
//       //   data.products.forEach((product) => {
//       //     idbPromise("products", "put", product);
//       //   });
//     }
//   }, [data, loading]);


//   const [products, setProducts] = useState([])

//   useEffect( () => {
//     const getProducts = async () => {
//         const productsFromDb = await fetchProducts()
//         setProducts(productsFromDb)

//     }

//     getProducts()
//   })

//   const fetchProducts = async () => {
//     const res = await fetch('http://localhost:3001/graphql')
//     const data = await res.json();

//     console.log(data)
//     return data
//   }

//   const handleFormSubmit = async(event)=>{
//       event.preventDefault();
//       console.log('button clicked')
//       console.log(products)
      
//       PRODUCT_BY_CATEGORY()
//       console.log(PRODUCT_BY_CATEGORY)
    //   try {
    //       const {data} = 
    //   } catch  {
    //     (error)
    //   }
  //}


  return (
    <div>
        
        {data &&
            data.productByCategory &&
            data.productByCategory.map( (product, i) => <div key={i}>{product.title}</div>)}
        <button onClick={ () => getProducts()}>
            click me 
        </button>
    </div>
    
    // <div>
    //   <Container>
    //     <h1>Search for Skincare!</h1>
      
    //     <Col xs={12} md={4}>
    //         <Button type="button" onClick={handleFormSubmit} variant="success" size="lg">
    //           acne
    //         </Button>
    //       </Col>
        
          

    //       <Col xs={12} md={4}>
    //         <Button type="button" variant="success" size="lg">
    //           pigmentation
    //         </Button>
    //       </Col>

    //       <Col xs={12} md={4}>
    //         <Button type="button" variant="success" size="lg">
    //           anti-aging
    //         </Button>
    //       </Col>

    //       <Col xs={12} md={4}>
    //         <Button type="button" variant="success" size="lg">
    //           dark spots
    //         </Button>
    //       </Col>

    //       <Col xs={12} md={4}>
    //         <Button type="submit" variant="success" size="lg">
    //           redness
    //         </Button>
    //       </Col>
          
    //   </Container>

    //   <Container>
    //     <h2>results:</h2>
    //     <Card>
    //       <Card.Img alt="product bottle" />
    //       <Card.Body>
    //         <Card.Title>product title</Card.Title>
    //         <Card.Text>description</Card.Text>
    //         <Card.Text>price</Card.Text>
    //         <Button>add to faves</Button>
    //       </Card.Body>
    //     </Card>
    //   </Container>
    // </div>
    
  );
};

export default SearchProduct;

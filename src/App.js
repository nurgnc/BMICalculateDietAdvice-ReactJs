// import { useEffect } from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import BmiCalculator from "./components/BmiCalculator";
import MainContextProvider from "./context/MainContextProvider";



function App() {

  // useEffect(() => {
  //   fetch(
  //     "https://yummly2.p.rapidapi.com/feeds/list?limit=18&start=0&tag=list.recipe.popular&allowedDiet[]=390^Pescetarian",
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-host": `yummly2.p.rapidapi.com`,
  //         "x-rapidapi-key": `8f8a3ded07msh42c3e893f8d6438p1bc0a1jsn51c5db7ac8a4`,
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         console.log('result::::', result)
  //       },
  //       (error) => {
  //         console.log('error::::', error)

  //       }
  //     );
  // }, [])
  return (
    <MainContextProvider>
      <ChakraProvider>
        <BmiCalculator />
      </ChakraProvider>
    </MainContextProvider>
  );
}

export default App;

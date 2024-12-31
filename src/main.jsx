// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//  <ErrorBoundary>
//       <ChakraProvider>
//         <App />
//       </ChakraProvider>
//     </ErrorBoundary>  </React.StrictMode>,
// )
// import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
// import App from './App';
// import ErrorBoundary from './ErrorBoundary';

// function Main() {
//   return (
//     <ErrorBoundary>
//       <ChakraProvider>
//         <App />
//       </ChakraProvider>
//     </ErrorBoundary>
//   );
// }

// export default Main;
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ChakraProvider } from '@chakra-ui/react';
import App from './App.jsx';
import './index.css';
// import ErrorBoundary from './ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       
        <App />
     
 
  </React.StrictMode> 
);

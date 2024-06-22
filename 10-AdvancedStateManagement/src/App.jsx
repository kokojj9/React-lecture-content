import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CardContextProvider from './store/shopping-cart-context.jsx';


function App() {
  

  return (
    <CardContextProvider> {/* value 속성으로 값을 전달해줘야함*/}
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CardContextProvider>
  );
}

export default App;

# 🛒 React E-Commerce Cart

A responsive e-commerce web application built with **React.js**, created to practice modern React development concepts including **Redux Toolkit, API integration, React Router, Tailwind CSS, reusable components, and state management**.

---

## 🚀 Live Demo

🔗 **Live Demo:** [DEPLOYED_URL](https://redux-toolkit-shoping-cart.vercel.app/)

🔗 **GitHub Repository:** [GITHUB_REPOSITORY](https://github.com/adityak71/Shoping-Cart-With-Redux-Toolkit-React)

---

## 📸 Overview

This project is a simple e-commerce application where users can:

- Browse products fetched from an external API
- View product information
- Add products to the shopping cart
- Remove products from the cart
- View the total number of items
- View the total cart amount
- Receive toast notifications for cart actions
- Navigate between pages using React Router

The project was built primarily as a practical learning project to understand how different React concepts work together in a real application.

---

## ✨ Features

### 🛍️ Product Listing

- Fetches products from the Fake Store API
- Displays products dynamically
- Reusable product components
- Product images and descriptions
- Product pricing
- Add-to-cart functionality

### 🛒 Shopping Cart

- Add products to cart
- Remove products from cart
- Display cart items
- Display total number of items
- Calculate total cart amount
- Empty cart state
- Checkout button UI

### 🔔 Notifications

Uses **React Hot Toast** to provide feedback to the user.

Examples:

- Product added successfully
- Product removed from cart
- Error notifications

### ⏳ Loading State

A reusable spinner component is displayed while product data is being fetched from the API.

### 📭 Empty State

When there are no products or the cart is empty, an appropriate empty-state UI is displayed.

### 📱 Responsive UI

The application uses **Tailwind CSS** to create a responsive and modern interface.

### 🧩 Reusable Components

The UI is divided into reusable components such as:

- Products
- CartItem
- Spinner
- NotFound

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend UI |
| Redux Toolkit | Global state management |
| React Router DOM | Client-side routing |
| Tailwind CSS | Styling and responsive design |
| React Hot Toast | Toast notifications |
| React Icons | UI icons |
| Fake Store API | Product data |
| Vite | Development and build tool |
| JavaScript (ES6+) | Programming language |

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── CartItem.jsx
│   ├── Products.jsx
│   ├── Spinner.jsx
│   └── NotFound.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Cart.jsx
│
├── redux/
│   ├── Slices/
│   │   └── cartSlice.js
│   │
│   └── Store.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## 🏗️ Application Architecture

```text
                    ┌─────────────────────┐
                    │   Fake Store API    │
                    └──────────┬──────────┘
                               │
                               ↓
                    ┌─────────────────────┐
                    │      Home.jsx       │
                    └──────────┬──────────┘
                               │
                         Fetch Products
                               │
                               ↓
                    ┌─────────────────────┐
                    │   Products.jsx      │
                    └──────────┬──────────┘
                               │
                          Add to Cart
                               │
                               ↓
                    ┌─────────────────────┐
                    │   Redux Toolkit     │
                    │    Cart Slice       │
                    └──────────┬──────────┘
                               │
                               ↓
                    ┌─────────────────────┐
                    │    Redux Store      │
                    └──────────┬──────────┘
                               │
                               ↓
                    ┌─────────────────────┐
                    │      Cart.jsx       │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┼─────────────┐
                 ↓             ↓             ↓
             Cart Items   Total Items   Total Amount
```

## 📡 API Integration

The application uses the Fake Store API to retrieve product information.

API endpoint:

https://fakestoreapi.com/products

Example API request:

```javascript
const response = await fetch(API_URL);
const data = await response.json();
```

The fetched product data is stored in React state:

```javascript
const [posts, setPosts] = useState([]);
```

After successfully fetching the data:

```javascript
setPosts(data);
```
## ⚛️ React State Management

React state is used for data that belongs specifically to the component.

For example, the Home component manages the loading state:

```javascript
const [loading, setLoading] = useState(false);
```

The application uses conditional rendering to display different UI states.

```text
Loading
   ↓
Spinner

API Success
   ↓
Products

No Products
   ↓
NotFound
```
## 🔄 useEffect

useEffect is used to fetch product data when the Home component initially mounts.

```javascript
useEffect(() => {
  fetchProductData();
}, []);
```

The empty dependency array means the effect runs after the initial render.

## 🧠 Redux Toolkit

Redux Toolkit is used to manage the shopping cart globally.

The cart slice contains the cart array:

```javascript
const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },

    remove: (state, action) => {
      return state.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
```
## ➕ Adding Products

Products are added to the Redux cart using:

```javascript
dispatch(add(product));
```

The Redux reducer then adds the product to the cart:

```javascript
add: (state, action) => {
  state.push(action.payload);
}
```
## 🗑️ Removing Products

Products are removed using their unique product ID:

```javascript
dispatch(remove(item.id));
```

The reducer filters out the matching product:

```javascript
remove: (state, action) => {
  return state.filter(
    (item) => item.id !== action.payload
  );
}
```

Using the product ID is preferable to using the array index because indexes can change when items are added or removed.

## 🎯 useSelector

The cart component reads only the required Redux state:

```javascript
const cart = useSelector(
  (state) => state.cart
);
```

This allows the component to automatically re-render when the selected cart state changes.

## 📊 Derived Data

The total cart amount is calculated directly from the cart:

```javascript
const totalAmount = cart.reduce(
  (acc, curr) => acc + curr.price,
  0
);
```

The project intentionally does not store totalAmount as separate state.

Instead:

```text
Redux Cart State
       ↓
     reduce()
       ↓
  totalAmount
```

This avoids unnecessary state synchronization and unnecessary useEffect calls.

## ❌ Why useEffect Is Not Used for Total Amount

An unnecessary approach would be:

```javascript
const [totalAmount, setTotalAmount] = useState(0);

useEffect(() => {
  setTotalAmount(
    cart.reduce(
      (acc, curr) => acc + curr.price,
      0
    )
  );
}, [cart]);
```

This creates an additional render cycle:

```text
Cart changes
    ↓
Component renders
    ↓
useEffect executes
    ↓
setTotalAmount()
    ↓
Component renders again
```

Instead, the project calculates the value directly:

```javascript
const totalAmount = cart.reduce(
  (acc, curr) => acc + curr.price,
  0
);
```

This is an example of using derived data instead of redundant state.

## 🔔 React Hot Toast

React Hot Toast is used to provide instant feedback to users.

The toast container is added at the application root:

```jsx
<Toaster />
```

Example:

```javascript
toast.success("Item Added to Cart");
```

For removing a product:

```javascript
toast.error("Item Removed from Cart");
```
## 🧭 Routing

React Router DOM is used for client-side navigation.

Main routes:

```text
/       → Home
/cart   → Cart
```

The application is wrapped with:

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```
## 🖼️ Image Handling

Product images are loaded directly from the API.

To maintain consistent image dimensions, the application uses a fixed container with Tailwind CSS:

```jsx
<div className="w-48 h-48 flex items-center justify-center">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-contain"
  />
</div>
```

object-contain ensures that the complete product image remains visible without distortion or unwanted cropping.

## ⏳ Loading State

A reusable Spinner component is displayed while the API request is in progress.

Example:

```javascript
if (loading) {
  return <Spinner />;
}
```
## 📭 Empty State

If there are no products:

```javascript
if (posts.length === 0) {
  return <NotFound />;
}
```

Similarly, the cart displays an empty-cart UI when there are no items:

```javascript
if (cart.length === 0) {
  // Empty cart UI
}
```
## 🧱 Component-Based Architecture

The application follows a component-based architecture.

### Products

Responsible for displaying individual product information and cart actions.

### CartItem

Responsible for displaying individual cart items and removing them from the cart.

### Spinner

Reusable loading indicator.

### NotFound

Reusable empty-state component.

### Home

Responsible for fetching and displaying products.

### Cart

Responsible for displaying cart contents and calculating the order summary.

## 💻 Installation
1. **Clone the repository**
  ```bash
git clone YOUR_GITHUB_REPOSITORY_URL
  ```
2. **Navigate to the project directory**
  ```bash
cd YOUR_PROJECT_NAME
  ```
3. **Install dependencies**
  ```bash
npm install
  ```
4. **Start the development server**
  ```bash
npm run dev
  ```

The application will be available at the local development URL provided by Vite.

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```
## 📜 Available Scripts
### `npm run dev`

Starts the development server.

### `npm run build`

Creates an optimized production build.

### `npm run preview`

Previews the production build.

## 🐛 Problems Encountered & Lessons Learned

During development, several practical issues helped reinforce important concepts.

### Redux Invalid Reducer

The store initially passed the slice object instead of the reducer.

Incorrect:

```javascript
reducer: {
  cart: CartSlice
}
```

Correct:

```javascript
reducer: {
  cart: cartReducer
}
```

where:

```javascript
import cartReducer from "./Slices/cartSlice";
```
### Incorrect Selector

Selecting the entire Redux state:

```javascript
useSelector((state) => state)
```

can cause unnecessary re-renders.

Instead, select only the required state:

```javascript
useSelector((state) => state.cart)
```
### State Derived from Existing State

The project initially used useEffect and useState to calculate the total amount.

This was replaced with direct calculation using reduce().

This helped reinforce the principle:

Store the minimum necessary state and calculate derived values when needed.

### Product Image Sizing

Different product images had different natural dimensions.

A fixed image container and:

```css
object-fit: contain;
```

were used to maintain a consistent UI.

### Deployment Asset Issues

The project also highlighted how asset paths can behave differently between local development and production environments.

Particular attention was given to:

- Correct asset paths
- File name capitalization
- Vite asset handling
- Public vs imported assets

## 🔮 Future Improvements

The project can be extended with:

- Product details page
- Product search
- Category filtering
- Sorting
- Product quantity controls
- Increase/decrease cart quantity
- Persistent cart using LocalStorage
- User authentication
- User registration and login
- Checkout page
- Payment gateway integration
- Order history
- Backend integration
- Database integration
- Better error handling
- Skeleton loaders
- Improved mobile responsiveness
- Dark mode
- Product reviews and ratings

## 🎓 Learning Objectives

The primary purpose of this project was to gain practical experience with:

- React component architecture
- React state management
- useState
- useEffect
- Props
- Conditional rendering
- List rendering
- Redux Toolkit
- Redux actions and reducers
- useSelector
- useDispatch
- Derived data
- API integration
- React Router
- Tailwind CSS
- Reusable components
- Loading and empty states
- Toast notifications
- Debugging
- Production deployment

## 🚀 Future Vision

Although this project currently focuses on frontend development and learning, it can be evolved into a complete full-stack e-commerce platform by adding:

```text
React
   ↓
Node.js + Express
   ↓
REST API
   ↓
PostgreSQL / MongoDB
   ↓
Authentication
   ↓
Payment Gateway
   ↓
Order Management
```

This would transform the current learning project into a more production-oriented application.

## 👨‍💻 Author

Aditya Kumar

Computer Science Engineering Student

Interested in:

- Software Development
- Web Development
- React.js
- Backend Development
- Data Structures & Algorithms
- System Design

## ⭐ Acknowledgements
- Fake Store API for providing product data
- React documentation for learning React concepts
- Redux Toolkit documentation for state management concepts
- Tailwind CSS documentation for styling
- React Router documentation for routing
- React Hot Toast for notifications

## 📄 License

This project is created for educational and learning purposes.

Feel free to explore, modify, and improve the project.

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

🚀 Built while learning React — one bug, one concept, and one improvement at a time.
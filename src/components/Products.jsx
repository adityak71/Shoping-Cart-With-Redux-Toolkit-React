
const Products = ({post}) => {
  return (
    <div>

      <div>
        <p>{post.titlt}</p>
      </div>

      <div>
        <p>{post.description}</p>
      </div>

      <div>
        <img src={post.image} alt={post.title}/>
      </div>

      <div>
        <p>{post.price}</p>
      </div>

      <button>
        {
          selected ? <p>Remove from Cart</p> : <p>Add to Car</p>
        }
      </button>

    </div>
  )
}

export default Products

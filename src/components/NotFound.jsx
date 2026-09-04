
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-gray-800">
        No Products Found
      </h1>

      <p className="mt-3 text-gray-500">
        Sorry, we couldn't find any products to display.
      </p>
    </div>
  );
};

export default NotFound;


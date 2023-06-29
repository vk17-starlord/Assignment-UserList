import { debounce } from 'lodash';

function Search({ onSearch, value }) {
  // Create a debounced version of the onSearch function
  const debouncedSearch = debounce(onSearch, 300); // Adjust the delay time (in milliseconds) according to your needs

  const handleSearch = (event) => {
    const searchText = event.target.value;
    debouncedSearch(searchText);
  };

  return (
    <div className="bg-red-500  flex justify-center items-center bg-banner bg-cover w-full h-[40vh]">
      <div className="search rounded-full flex cursor-pointer  justify-center items-center px-2.5 w-10/12 md:w-8/12 bg-white overflow-hidden   ">
      <i className='bx ml-5  text-xl bx-search'></i>
        <input
          onKeyUp={handleSearch} // Call the handleSearch function instead of onSearch directly
          type="text"
          placeholder='Type Employee names here'
          className="w-full focus:outline-none rounded-md py-5 px-10"
        />
      </div>
    </div>
  );
}

export default Search;

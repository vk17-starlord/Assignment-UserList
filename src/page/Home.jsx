import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import getUserList from "../api/userAPI";

function Home() {

 
// variable declaration


  const [users, setusers] = useState([]);
  const [baseUsers, setbaseUsers] = useState([]);
  const [page, setpage] = useState(1);
  const [maxPage, setMaxpage] = useState(2);


  // functions 



  const getData = async (page=1) => {
    const res = await getUserList(page);
    setMaxpage(res.total_pages)
    setpage(res.page)
    setbaseUsers(res.data)
    setusers(res.data);
    setbaseUsers(res.data)
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      const previousPage = page - 1;
      getData(previousPage);
    }
  };

  const goToNextPage = () => {
    const nextPage = page + 1;
    if(nextPage<=maxPage){
      getData(nextPage);
    }
  };

  //effect
  useEffect(() => {
    getData(page);
  }, [page]);

  const onSearch = (query)=>{
    console.log(query.length)
    if(query.length<1){
      console.log(query.length)
      setusers(baseUsers)
      return;
    }
    const newUsers = baseUsers.filter((user)=>user.first_name.toLowerCase().includes(query.toLowerCase()))
    setusers(newUsers)
  }
  
  return (
    <div className="w-full  min-h-screen">
      <Search  onSearch={onSearch}></Search>

      <div className="w-10/12 gap-5 mx-auto my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        { users.length > 0 &&  users.map((user)=>{
          return <Card data={user} key={user.id}></Card>
        }) }
      </div>

      <div className="fixed bottom w-full flex justify-center items-center py-10">
      <div>
          
          <button disabled={page==1} onClick={goToPreviousPage} className={ page!=1 ? "w-12 h-12 cursor-pointer  rounded-full hover:bg-blue-800 bg-blue-500 text-white mx-5" :"w-12 h-12  rounded-full cursor-not-allowed  bg-gray-500 text-white mx-5" } ><i className='bx bx-left-arrow-alt'></i></button>
            <button disabled={maxPage===page} onClick={goToNextPage} className={ maxPage!=page ? "w-12 h-12 cursor-pointer  rounded-full hover:bg-blue-800 bg-blue-500 text-white mx-5" :"w-12 h-12  rounded-full cursor-not-allowed  bg-gray-500 text-white mx-5" } ><i className='bx bx-right-arrow-alt'></i></button>
            </div>
      </div>
    </div>
  );
}

export default Home;

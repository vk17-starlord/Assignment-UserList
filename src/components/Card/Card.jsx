function Card({data}) {
    console.log(data)
    return (
      <div className="bg-full cursor-pointer hover:scale-105 bg-white-50 shadow-md md:px-2.5 grid grid-cols-[3fr_9fr] md:grid-cols-[4fr_8fr] py-5 rounded-md">
          <div className="col flex  sm:justify-center justify-start sm:items-center px-2.5">
              <img className="max-w-12 sm:mx-auto w-12 h-12 rounded-full object-cover" src={data.avatar} alt="" />
          </div>
          <div className="col">
              <h1 className="text-lg font-semibold font-mono ">{data.first_name} {data.last_name}  </h1>
              <p className="text-gray-500 text-sm font-light"> {data.email} </p>
          </div>
      </div>
    )
  }

  export default Card;
  
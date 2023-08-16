// import "../pages/home.css"


const Search = () => {
    return (
        <>
            <div className="bg-[#2E333D] inline-flex lg:flex w-auto ml-3 mr-1 lg:mx-3 rounded-l-2xl lg:rounded-2xl p-2 "> 
                <img src="../../public/img/search.png" className="w-8" alt="search-icon" />
                <input type="search" className="bg-transparent text-[#989BA0] w-full outline-none ml-2" placeholder="جستجو ..." />
            </div>
        </>
    )
}

export default Search;
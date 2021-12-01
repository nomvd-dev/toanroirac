import { React, useState } from 'react'
// import { FaSearch } from 'react-icons/fa'
import { SearchContainer } from './SearchElements'
import JSONDATA from '../../Data/suggestion.json'

const SearchPage = () => {
    const [search, setSearch] = useState('')
    return (
        <>
            <SearchContainer>
                <input type="text" placeholder="Type something..." onChange={(event) => { setSearch(event.target.value) }}></input>
                {JSONDATA.filter((value) => {
                    if (search === "") {
                        return value
                    } else if (value.keyword.toLowerCase().includes(search.toLowerCase())) {
                        return value
                    }
                }).map((item, key) => {
                    return <div className="keyword" key={key}>
                        <p>{item.keyword}</p>
                    </div>
                })}
            </SearchContainer>
        </>
    )
}

export default SearchPage

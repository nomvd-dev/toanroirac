import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 80px;
    width: 100%;
    height: 80px;
    background: var(--quinary-color);
`

export const SearchContent = styled.div`
    width: 100%;
    max-width: 1100px;
    padding: 20px 0;
`

export const SearchSuggestion = styled.div`
    margin-top: 5px;
    width: 300px;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    z-index: 10;
    &::-webkit-scrollbar {
        display: none;
      }
`

export const SearchResult = styled.a`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    &:hover{
        text-decoration: none;
        background-color: lightgrey;
        color: black;
    }
`

export const SearchIcon = styled.div`
    display: flex;
    align-items: center;
    color: var(--quinary-color);
    border: 2px solid var(--quinary-color);
    border-left: 0;
    padding: 5px 15px;
    cursor: pointer;
    svg{
        font-size: 20px;
    }
`

export const SearchInput = styled.div`
    margin-top: 50px;
    // margin-bottom: 50px;
    display: flex;
`

export const Input = styled.input`
    background-color: white;
    border: 2px solid var(--quinary-color);
    border-right: 0;
    font-size: 20px;
    padding: 5px 15px;
    // height: 30px;
    width: 500px;
    &:focus {
        outline: none;
      }
`

export const SearchP = styled.p`
    font-size: 20px;
    padding-left: 20px;
    cursor: pointer;
    margin-bottom: 0;
`

// export const SearchContent = styled.div`
//     margin-top: 300px;
//     display: flex;
// `
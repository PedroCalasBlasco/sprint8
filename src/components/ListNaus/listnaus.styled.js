
import styled from "styled-components";

const StyledListDiv = styled.div`
    background-color: black;

    a{
        text-decoration: none;
    }
`
export {StyledListDiv};


const StyledElement = styled.li`
    margin-top: 40px;
    list-style: none;
    background-color: rgba(40,40,40);
    color: white;
    text-decoration: none;
    padding: 10px;
    border-rounded: 10px;

    &:hover {
      background-color: rgba(30,30,30);
    }
    
    p{
        font-size: 1.5em;
        text-decoration: none !important;
    }

    span{
        font-size: 1em;
    }
`

export {StyledElement};
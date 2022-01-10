import axios from "axios";
import {useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {StyledListDiv, StyledElement} from "./listnaus.styled";



const ListaNaus = () => {

    const [listNaus, setListNaus] = useState([]);
    const [page, setPage] = useState(1);
    

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/?page=${page}`).then(res =>{
            setListNaus((prevNaus) => prevNaus.concat(res.data.results));
        });
        
    },[page])
    

    return (
              
        <StyledListDiv className="container-fluid">
            <header className="row">
                <div className="col col-12 text-center pt-4">
                    <img src="/assets/img/logo.png" alt="" width="18%"/>
                </div>
            </header>

            <nav className="row mt-2 mb-2 justify-content-center">
                <div className="col col-4 text-center">
                    <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item itemHome">
                        <a class="nav-link" data-bs-toggle="tab" href="#home">HOME</a>
                    </li>
                    <li class="nav-item itemNaus">
                        <a class="nav-link active" data-bs-toggle="tab" href="#menu1">NAVES</a>
                    </li>
                    </ul>
                </div>
            </nav>

            <div className="row mt-2 justify-content-center">
                <div className="col col-6">
                <InfiniteScroll dataLength={listNaus.length} hasMore={true} next={() => setPage(page + 1)}>
                <ul>
                {listNaus.map((item) =>
                        
                            <a href={`/nau/${item.url.split(["/"])[5]}`}>
                                <StyledElement key={item.name}>
                                    <p>{item.name}</p>
                                    <span>{item.model}</span>
                                </StyledElement>                      
                            </a>      
                    )
                }
                </ul>
                </InfiniteScroll> 
                </div> 
            </div>
        </StyledListDiv>
    );
}

export default ListaNaus;



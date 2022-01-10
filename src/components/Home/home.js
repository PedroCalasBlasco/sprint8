import StyledHomeDiv from "./home.styled";



const Home = () => {
    return (
        <StyledHomeDiv className="container-fluid">
            <div className="row justify-content-center">
                <div className="col col-12 mt-5 text-center">
                    <img src="/assets/img/logo.png" alt="" />
                </div>
                <div className="d-grid gap-4 col col-4 mt-5 text-center">
                    <a href="/login"><button className="btn btn-lg btn-warning">ENTRAR</button></a>
                </div>
            </div>
            
            
            
        </StyledHomeDiv>
        
    );
}

export default Home;
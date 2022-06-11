import A from "../components/A";
import Head from "next/head";
import MainContainer from "../components/MainContainer";


const Index = () => {
    return (
        <>
            <MainContainer
                keywords={'main page'}
                children={<h1>Главная страница</h1>}>
            </MainContainer>
        </>
    )
}
export default Index
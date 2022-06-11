import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <title>Главная страница</title>
                <meta keywords={`nextjs ${keywords}`}></meta>
            </Head>
            <div className="navbar">
                <A href={"/"} text={'Главная'}></A>
                <A href={"/users"} text={'Пользователи'}></A>
            </div>
            <div>{children}</div>
            <style jsx>
                {`
                  .navbar {
                    background: orange;
                    padding: 15px;
                    display: flex;
                  }
                `}
            </style>
        </>
    );
};

export default MainContainer;
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
            <div className="children">{children}</div>
            <style jsx>
                {`
                  .navbar {
                    background: orange;
                    padding: 15px;
                    display: flex;
                  }

                  .children {
                  margin-top: 20px;
                  display: flex;
                  justify-content: center;
                  }
                `}
            </style>
        </>
    );
};

export default MainContainer;
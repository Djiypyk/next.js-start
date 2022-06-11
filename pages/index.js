import A from "../components/A";

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <A href={"/"} text={'Главная'}></A>
                <A href={"/users"} text={'Пользователи'}></A>
            </div>
            <h1>Главная страница</h1>
            <style jsx>
                {`
                  .navbar {
                    background: orange;
                    padding: 15px;
                    display: flex;
                  }
                `}
            </style>
        </div>
    )
}
export default Index
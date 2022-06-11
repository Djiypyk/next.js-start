import Link from "next/link";
import MainContainer from "../components/MainContainer";
import styles from '../styles/Users.module.scss'

const Users = ({users}) => {
    return (
        <MainContainer keywords={'users page'}>
            <div className={styles.main}>
                <h1>Страница пользователей</h1>
                <div>
                    <ul>
                        {users.map(user => {
                            return <li key={user.id}><Link href={`/users/${user.id}`}>
                                <a>{user.name}</a>
                            </Link></li>
                        })}
                    </ul>
                </div>
            </div>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
    return {
        props: {users}, // will be passed to the page component as props
    }
}
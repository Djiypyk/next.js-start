import {useRouter} from "next/router";
import styles from '../../styles/User.module.scss'
import MainContainer from "../../components/MainContainer";

export default function ({user}) {
    const {query} = useRouter()
    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>{user.name}</h1>
                <p><span>Username:</span> {user.username}</p>
                <p><span>Email:</span> {user.email}</p>
                <p><span>User ID:</span> {query.id}</p>
                <p><span>User Website:</span> {user.website}</p>
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user}, // will be passed to the page component as props
    }
}
import Button from "../common/Button";
import { signIn, signOut } from "next-auth/react"
import { useFetchSession } from "@/hooks/useSession";
import styles from "./Home.module.scss"

export default function HomeComponent(){

    let {session} = useFetchSession();

    return (
        <div className={styles.authBtn}> {session ? (<Button onClick={() => signOut()} btnClass="btn-primary" title="Sign Out!"/>) : (<Button onClick={() => signIn()} btnClass="btn-primary" title="Sign Up!"/>)}</div>
    )
}
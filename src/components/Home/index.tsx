import Button from "../common/Button";
import { signIn, signOut } from "next-auth/react"
import { useFetchSession } from "@/hooks/useSession";
import styles from "./Home.module.scss"

export default function HomeComponent(){

    let {session} = useFetchSession();

    console.log(session?.user.image);

    return (
        <div className={styles.authBtn}> {session ? (<div>
            <img className={styles.profileImg} src={session?.user.image as string} />
            <Button onClick={() => signOut()} btnClass="btn-primary" title="Sign Out!"/></div>) : (<Button onClick={() => signIn()} btnClass="btn-primary" title="Sign Up!"/>)}</div>
    )
}
import Button from "../common/Button";
import { signIn, signOut } from "next-auth/react";
import { useFetchSession } from "@/hooks/useSession";
import styles from "./Topbar.module.scss";

export default function Topbar() {
  let { session } = useFetchSession();

  return (
    <div className={styles.authBtn}>
      {" "}
      {session ? (
        <div>
          <img
            onClick={() => signOut()}
            className={styles.profileImg}
            src={session?.user.image as string}
          />
        </div>
      ) : (
        <Button
          onClick={() => signIn()}
          btnClass="btn-primary"
          title="Sign Up!"
        />
      )}
    </div>
  );
}

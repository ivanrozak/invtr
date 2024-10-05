import ButtonSignIn from "@/components/test/ButtonSignIn";
import ButtonSignOut from "@/components/test/ButtonSignOut";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      {session ? (
        <>
          <p>Signed in as {session?.user?.email}</p>
          <ButtonSignOut />
        </>
      ) : (
        <>
          <p>Not signed in</p>
          <ButtonSignIn />
          <div>{JSON.stringify(session, null, 2)}</div>
        </>
      )}
    </div>
  );
}

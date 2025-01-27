import { signOut } from "@/auth";

const Logout = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="bg-white text-black px-4 py-2 rounded-md cursor-pointer">
        ログアウト
      </button>
    </form>
  );
};

export default Logout;

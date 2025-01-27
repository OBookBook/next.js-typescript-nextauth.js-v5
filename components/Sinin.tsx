import { signIn } from "@/auth";

const Sinin = ({ provider }: { provider?: string }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action={async () => {
          "use server";
          await signIn(provider);
        }}
      >
        <button className="bg-white text-black px-4 py-2 rounded-md cursor-pointer m-10">
          サインイン
        </button>
      </form>
    </div>
  );
};

export default Sinin;

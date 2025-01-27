"use client";

import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

const ClientSessionContent = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h2 className="text-2xl font-bold">Current Session</h2>
      <pre className="py-6 px-4 whitespace-pre-wrap break-all">
        {status === "loading" ? "Loading..." : JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
};

const ClientSession = () => {
  return (
    <SessionProvider>
      <ClientSessionContent />
    </SessionProvider>
  );
};

export default ClientSession;

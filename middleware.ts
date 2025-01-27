export { auth as middleware } from "@/auth";

export const config = {
  // 除外するパス
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

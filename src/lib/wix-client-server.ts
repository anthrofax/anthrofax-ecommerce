import { OAuthStrategy, createClient } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

export function wixClientServer() {
  const cookieStore = cookies();
  const refreshToken = JSON.parse(
    cookieStore.get("refreshToken")?.value || "{}"
  );

  const wixClient = createClient({
    modules: {
      products,
      collections,
      // Current Cart
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENTID!,
      tokens: {
        refreshToken,
        accessToken: {
          value: "",
          expiresAt: 0,
        },
      },
    }),
  });

  return wixClient;
}

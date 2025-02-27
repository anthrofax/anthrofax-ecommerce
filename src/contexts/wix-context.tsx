"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { createContext, useContext } from "react";
import Cookies from "js-cookie";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

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

export type WixClient = typeof wixClient;

const WixClientContext = createContext<WixClient>(wixClient);

export const WixClientConectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};

export const useWixClientContext = () => {
  const context = useContext(WixClientContext);

  return context;
};
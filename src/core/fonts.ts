import { Nunito_Sans } from "@next/font/google";

export const nunitoFont = Nunito_Sans({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "fallback",
});

import { Nunito } from "@next/font/google";

export const nunitoFont = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "fallback",
});

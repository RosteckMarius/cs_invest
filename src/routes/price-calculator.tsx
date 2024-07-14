import { createFileRoute } from "@tanstack/react-router";
import { PriceCalculator } from "@/features/PriceCalculator/PriceCalculator.tsx";

export const Route = createFileRoute("/price-calculator")({
    component: () => PriceCalculator(),
});

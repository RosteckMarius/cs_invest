import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/features/Footer/components/Faq.tsx";

export const Route = createFileRoute("/faq")({
    component: () => FAQ(),
});

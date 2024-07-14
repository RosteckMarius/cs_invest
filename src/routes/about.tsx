import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/features/Footer/components/About.tsx";

export const Route = createFileRoute("/about")({
    component: () => About(),
});

import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/features/Landing/Landing.tsx";

export const Route = createFileRoute("/")({
    component: () => Landing(),
});

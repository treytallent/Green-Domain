import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { LivingGuide } from "./pages/LivingGuide"
import { FindABuilder } from "./pages/FindABuilder"
import { Community } from "./pages/Community"
import { Fundamentals } from "./pages/Fundamentals"

export const router = createBrowserRouter([
   { path: "/", element: <Home /> },
   { path: "/livingguide", element: <LivingGuide /> },
   { path: "/findabuilder", element: <FindABuilder /> },
   // { path: "/community", element: <Community /> },
   { path: "/livingguide/fundamentals", element: <Fundamentals /> },
])

import { createRoot } from "react-dom/client";
import React from 'react';

const root = createRoot(document.getElementById("app") as HTMLElement);
const App = () => {
    return <div>
        Hello
    </div>
}
root.render(<App />);
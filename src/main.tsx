import ReactDOM from "react-dom/client";
import { Providers } from "./app/providers";
import { router } from "./app/router";

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Providers router={router} />);
}

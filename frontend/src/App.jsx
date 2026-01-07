import { Test } from "./components/Test.jsx";
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Website</title>
        </head>
        <body>
          <Test />
          <Button>Click Me</Button>
        </body>
      </html>
    </>
  );
}

export default App;


export const codeExamples = {
    "App.jsx": `
    import { useState } from "react";
    import { useState } from "react";
    import { CodeFlow } from "@codeflow/ai";

    function App() {
      const [code, setCode] = useState("");

    const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor
        onChange={setCode}
        onAI={handleAICompletion}
      />
    </div>
  );
}
`,

"Hero.jsx": `
    import { useState } from "react";
    import { useState } from "react";

    function App() {
      const [code, setCode] = useState("");

    const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor
        onChange={setCode}
        onAI={handleAICompletion}
      />
    </div>
  );
}
`,

"Navbar.jsx": `
    import { useState } from "react";

    function App() {
      const [code, setCode] = useState("");

    const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor
        onChange={setCode}
        onAI={handleAICompletion}
      />
    </div>
  );
}
`,
};



export const floatingCards = {
  "App.jsx": {
  bgColor: "bg-blue-500/20",
  iconColor: "text-blue-400",
  textColor: "text-blue-200",
  contentColor: "text-blue-300",
  icon: "AI",
  title: "Smart Completion",
  content: "AI-powered code suggestions in real-time",
},

"Hero.jsx": {
  bgColor: "bg-blue-500/20",
  iconColor: "text-blue-400",
  textColor: "text-blue-200",
  contentColor: "text-blue-300",
  icon: "AI",
  title: "Smart Completion",
  content: "AI-powered code suggestions in real-time",
},

"Navbar.jsx": {
  bgColor: "bg-blue-500/20",
  iconColor: "text-blue-400",
  textColor: "text-blue-200",
  contentColor: "text-blue-300",
  icon: "AI",
  title: "Smart Completion",
  content: "AI-powered code suggestions in real-time",
},
};
import { useState, ChangeEvent } from "react";

type LanguageOption = "Vietnamese" | "English";

export const LanguageSelect = () => {
  const [language, setLanguage] = useState("Vietnamese");

  return (
    <>
      {/* Mobile */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="sm:hidden bg-accent-600-hover text-on-primary p-1 rounded text-sm"
      >
        <option value="Vietnamese">VN</option>
        <option value="English">EN</option>
      </select>

      {/* Desktop */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="hidden sm:block bg-accent-600-hover text-on-primary p-2 rounded"
      >
        <option value="Vietnamese">Tiếng Việt</option>
        <option value="English">English</option>
      </select>
    </>
  );
};

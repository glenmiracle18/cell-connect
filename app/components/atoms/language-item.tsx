import type { ButtonHTMLAttributes } from "react";

interface LanguageItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  languageProp: string;
}

export const LanguageItem = ({ languageProp, ...props }: LanguageItemProps) => {
  return (
    <button type="button" {...props}>
      <h1>{languageProp}</h1>
    </button>
  );
};

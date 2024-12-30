import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

const useLanguage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [language, setLanguage] = useState<"eng" | "ru">("eng");

  useEffect(() => {
    const lng = searchParams.get("lng");
    if (lng === "eng" || lng === "ru") {
      setLanguage(lng);
    } else {
      // Если ключ отсутствует или некорректен, устанавливаем значение по умолчанию
      setLanguage("eng");
      searchParams.set("lng", "eng");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  // Функция для изменения языка
  const changeLanguage = useCallback(
    (newLang: "eng" | "ru") => {
      setLanguage(newLang); // Обновляем состояние
      searchParams.set("lng", newLang); // Обновляем параметры
      setSearchParams(searchParams); // Применяем изменения
    },
    [searchParams, setSearchParams]
  );

  return { language, changeLanguage };
};

export default useLanguage;

import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cx } from "@/utils/all";

export default function DateTime({ className }) {
  const today = new Date();
  return (
    <time className={cx(className && className)} dateTime={today.toISOString()}>
      {format(today, "d 'de' MMMM 'de' yyyy", { locale: es })}
    </time>
  );
}
import './MyLabel.css';

export interface Props {
    /**
     * Text to displpay
     */
    label: string;
    /**
     * Label size
     */
    size?: "normal" | "h1" | "h2" | "h3";

    /**
     * Capitalize all letters
     */
    allCaps?: boolean;

    /**
     * Label Color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-teartiary';

    /**
     * Font Color
     */
    fontColor?: string;
}

export const MyLabel = ({
    label,
    size = 'normal',
    allCaps = false,
    color,
    fontColor,
}: Props) => {
  return (
    <span className={`${size} ${color} label`} style={{ color: fontColor }}>
        { allCaps ? label.toUpperCase(): label }
    </span>
  )
}

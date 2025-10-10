import { cn } from "@/lib/utils";

type SvgFileIconProps = {
    color?: React.CSSProperties["color"];
} & React.SVGAttributes<SVGElement>;

function FileIcon({
    color = "#5c7cfa",
    className,
    ...props
}: SvgFileIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0,0,256,256"
            className={cn("size-6", className)}
            {...props}
        >
            <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                style={{ mixBlendMode: "normal" }}
            >
                <g transform="scale(5.33333,5.33333)">
                    <path
                        d="M40,45h-32v-42h22l10,10z"
                        style={{
                            fill: color,
                        }}
                    >
                    </path>
                    <path
                        d="M38.5,14h-9.5v-9.5z"
                        style={{ fill: `oklch(from ${color} calc(l + 0.3) c h)` }}
                    >
                    </path>
                </g>
            </g>
        </svg>
    );
}

export { FileIcon };

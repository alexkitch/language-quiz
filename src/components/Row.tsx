export const Row = (props: {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    disabled?: boolean
}) => {
    return (
        <li
            className={`w-full py-3 border-t border-t-sky-100 last-of-type:border-b last-of-type:border-b-sky-100 ${props.className}`}
        >
            <button
                disabled={props.disabled}
                role="button"
                className="uppercase w-full"
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </li>
    )
}

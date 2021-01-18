export function DiceSvg({diceValue, className}) {
    switch (diceValue) {
        case 1:
            return (
                <svg className={className}>
                    <circle cx="50%" cy="50%" r="8" fill="black"/>
                </svg>
            )
        case 2:
            return (
                <svg className={className}>
                    <circle cx="15%" cy="15%" r="8" fill="black"/>
                    <circle cx="85%" cy="85%" r="8" fill="black"/>
                </svg>
            )
        case 3:
            return (
                <svg className={className}>
                    <circle cx="50%" cy="50%" r="8" fill="black"/>
                    <circle cx="15%" cy="15%" r="8" fill="black"/>
                    <circle cx="85%" cy="85%" r="8" fill="black"/>
                </svg>
            )
        case 4:
            return (
                <svg className={className}>
                    <circle cx="15%" cy="15%" r="8" fill="black"/>
                    <circle cx="85%" cy="15%" r="8" fill="black"/>
                    <circle cx="15%" cy="85%" r="8" fill="black"/>
                    <circle cx="85%" cy="85%" r="8" fill="black"/>
                </svg>
            )
        case 5:
            return (
                <svg className={className}>
                    <circle cx="15%" cy="15%" r="8" fill="black"/>
                    <circle cx="85%" cy="15%" r="8" fill="black"/>
                    <circle cx="15%" cy="85%" r="8" fill="black"/>
                    <circle cx="85%" cy="85%" r="8" fill="black"/>
                    <circle cx="50%" cy="50%" r="8" fill="black"/>
                </svg>
            )
        case 6:
            return (
                <svg className={className}>
                    <circle cx="15%" cy="15%" r="8" fill="black"/>
                    <circle cx="15%" cy="50%" r="8" fill="black"/>
                    <circle cx="15%" cy="85%" r="8" fill="black"/>
                    <circle cx="85%" cy="15%" r="8" fill="black"/>
                    <circle cx="85%" cy="50%" r="8" fill="black"/>
                    <circle cx="85%" cy="85%" r="8" fill="black"/>
                </svg>
            )
        default:
            return (
                <svg>
                </svg>
            )
    }
    
}

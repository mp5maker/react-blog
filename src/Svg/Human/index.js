import React from 'react'

import { ThemeContext } from 'Contexts/ThemeContext'
import { Colors } from 'Constants/Colors'
import './styles.scss'

export const HumanSvg = () => {
    const { theme } = React.useContext(ThemeContext)
    console.log("HumanSvg -> theme", theme)

    return (
        <>
            {
                theme && (
                    <svg
                        width="121"
                        height="292"
                        viewBox="0 0 121 292"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            className={`path`}
                            d="M42 38.5L42.5 34H54V37L53.5 38L51.5 39.5V41.5H56V42.5L56.5 44.5L57 45.5L58 46.5L59.5 51L58 53L56.5 55L55.5 58L53.5 59.5L52.5 62.5L50 67L47 71L42.5 69L36 66L35 69L33 67V64.5V60.5L34.5 58L35 53L37 47L41 42L42 38.5Z"
                            stroke={Colors[theme].primaryColor} />
                        <path
                            className={`path`}
                            d="M30 196.5L29 209.5L28 218L27.5 238.5L23.5 259L2.5 278L1 281.5L4 285.5H11L38.5 275.5L42 270.5L43 260.5V257L46 249.5L51 211.5L54 209.5L54.5 202L67.5 174.5H68.5L70 184.5V203.5L71.5 209.5V224V234L68.5 247V254L68 259.5L69.5 262.5V265.5L71.5 266.5L72 287.5L74.5 290L82 290.5L88 286L88.5 284L87 273L85 267L86 265.5V257L90 253V237L93 217.5V206V200.5L94 191.5L96 182.5L99 174L102 165.5L102.5 168V170.5L101.5 172L102 173H103.5V175.5L102 178.5L102.5 180.5H104L106.321 177.715M106.321 177.715L106.5 177.5L107.5 174.5V172V170.5H109V173V174.5L109.5 177L108.5 177.5L106.321 177.715ZM108.5 177.715L111.5 177.5L112.5 174.5V170.5H115L116.5 169L117 163"
                            fill={Colors[theme].foregroundColor}
                            stroke={Colors[theme].secondaryColor} />
                        <path
                            className={`path`}
                            d="M54 159.5L66 163.5L79.5 162.5L92 159V153.5M42 27.5L39 26L30.5 31.5L25.5 34L25 43L23 43.5L18 65L17 88L20.5 92.5L26.5 93L33.5 91.5L42.5 85L40 109.5L39 128L37.5 141.5L35 163.5L32.5 171L30.5 179.5L28.5 189.5L28 195L30 194.5L31 197.5L34 195L36.5 196L54 188V160.5L55.5 123.5L57.5 120L57 116L56 112L57.5 106.5L56 102.5L58 81.5L58.5 78.5V74L61.5 66L62.5 66.5L66.5 66L70.5 63L75.5 62.5L77 66.5L78.5 69.5L75.5 73L75 75L78.5 76L83.5 73V61L87.5 57.5L86 66L87 67.5L86 74.5L84 87L81 146L81.5 151L84 150.5L90.5 153L96 154.5L101.5 151.5H102.5L101.5 163H117L116 158L117 150.5L118.5 144.5L117.5 139.5L117 127.5L119 124L117.5 120L120 116V108.5L118 106L117.5 100L115.5 66L109.5 56L103 53.5L100.5 53L101.5 50.5L96.5 49V46.5L80.5 40V33.5L82 31.5L81 30.5L84 28.5L88 27.5L90 26L89.5 12.5L79 3.5L71 1H62L56.5 2L48 10L46 15L47 18L46.5 22L46 23L42 27.5Z"
                            stroke={Colors[theme].primaryColor} />
                        <path
                            className={`path`}
                            d="M54 34H60L68 33L70.5 32.5L71.5 32L75 31.5L77 33H81"
                            stroke={Colors[theme].primaryColor} />
                        <path
                            className={`path`}
                            d="M25 43L30.5 45.5L37 47"
                            stroke={Colors[theme].primaryColor} />
                    </svg>

                )
            }
        </>
    )
}
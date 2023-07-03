import React from 'react';
import styles from '../../styles/Index.module.css'

export default function PinkButton(props) {
    const text = props.text;
    const width = (28 - 1);
    const height = (15 - 1);
    const fontSize = (width / text.length) * 1.6;
    const fontSizeStr = fontSize.toString() + "px";
    const yOffset = (height - (fontSize * 0.5)) / 2;
    const y = (height - yOffset);
    const x = (width - (text.length * fontSize * 0.53)) / 2;
    const xStr = x.toString();
    const yStr = y.toString();
    return (
        <div class={styles.buttonContainer}>
            <div class={styles.defaultButton}>
                <svg class={styles.buttonImg} xmlns="http://www.w3.org/2000/svg" width={(width + 1) * 4} viewBox="0 -0.5 28 15" shape-rendering="auto">
                    <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
                    <path stroke="#e35f7c" d="M3 0h21M2 1h23M1 2h25M0 3h27M0 4h27M0 5h27M0 6h27M0 7h27M0 8h27M0 9h27M0 10h27M1 11h25M2 12h23M3 13h21" />
                    <path stroke="#000000" d="M27 4h1M27 5h1M27 6h1M27 7h1M27 8h1M27 9h1M27 10h1M26 11h2M25 12h2M24 13h2M4 14h21" />
                    <text x={xStr} y={yStr} font-size={fontSizeStr}>{text}</text>
                </svg>
            </div>
            <div class={styles.hide}>
                <a class={styles.buttonLink} href={props.href}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={(width + 1) * 4} viewBox="0 -0.5 28 15" shape-rendering="crispEdges">
                        <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
                        <path stroke="#f2b6c3" d="M3 0h21M2 1h23M1 2h25M0 3h27M0 4h27M0 5h27M0 6h27M0 7h27M0 8h27M0 9h27M0 10h27M1 11h25M2 12h23M3 13h21" />
                        <path stroke="#000000" d="M27 4h1M27 5h1M27 6h1M27 7h1M27 8h1M27 9h1M27 10h1M26 11h2M25 12h2M24 13h2M4 14h21" />
                        <text x={xStr} y={yStr} font-size={fontSizeStr}>{text}</text>
                    </svg>
                </a>
            </div>
        </div>

    );
}
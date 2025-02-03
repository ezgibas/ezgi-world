import { Typography } from "@mui/material";
import styles from '../../styles/Index.module.css'

export default function Resource(props){
  const name = props.name; 
  const href = props.href;
  return (
    <a href={href} className="clickable">
        <Typography className={styles.description}>{name}</Typography>
        {/* <Image src={src} alt={name} /> */}
    </a>
  );
}
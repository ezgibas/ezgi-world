import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../../styles/Index.module.css'

export default function CustomAccordion(props) {
    const title = props.title;
    const text = props.text;
    return (
        <Accordion className={styles.textContainer}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        >
        <Typography className={styles.description}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {text}
        </AccordionDetails>
    </Accordion>
    );
}
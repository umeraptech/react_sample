import React from "react";
import {
    Card, 
    AppBar, 
    Toolbar, 
    Typography, 
    CardContent,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails, 
    AccordionActions,
    Button, 

} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function SimpleAccordian(){
    return (
        <div>
            <Card style={{backgroundColor:'grey', width:'80%', margin:'auto'}}>
                <AppBar position='static'>
                    <Toolbar>
                            <Typography variant='h4'>Simple Accordian Example</Typography>
                    </Toolbar>
                </AppBar>
                <CardContent>
                    <Container>
                        <Accordion>
                            <AccordionSummary
                               expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1-content"
                                id='panel1-header'
                            >
                                Accordian 1
                            </AccordionSummary>
                            <AccordionDetails>
                                A quick brown fox jumps over the lazy dog
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                               expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel2-content"
                                id='panel2-header'
                            >
                                Accordian 2
                            </AccordionSummary>
                            <AccordionDetails>
                                A quick brown fox jumps over the lazy dog
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                               expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel3-content"
                                id='panel3-header'
                            >
                                                                Accordian 3
                            </AccordionSummary>
                            <AccordionDetails>
                                A quick brown fox jumps over the lazy dog
                            </AccordionDetails>
                            <AccordionActions>
                                <Button>Cancel</Button>
                                <Button>Agree</Button>
                            </AccordionActions>
                        </Accordion>
                    </Container>
                </CardContent>
            </Card>
        </div>
    );
}

export default SimpleAccordian
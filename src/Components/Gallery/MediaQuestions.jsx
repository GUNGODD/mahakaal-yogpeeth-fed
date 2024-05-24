import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const MyAccordion = () => (
  <Accordion allowMultipleExpanded={false} allowZeroExpanded={true}>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          Section 1
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>Content for section 1</p>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          Section 2
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>Content for section 2</p>
      </AccordionItemPanel>
    </AccordionItem>
  </Accordion>
);

export default MyAccordion;
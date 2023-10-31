import { VStack } from '@chakra-ui/react';
import { memo } from 'react';

import { AccordionItem } from './Partials';
import { IFaq } from './Accordion.types';

interface IProps {
  faqList: IFaq[];
  onToggle: (faq: IFaq) => void;
}
const Accordion: React.FC<IProps> = ({ faqList, onToggle }): JSX.Element => {
  return (
    <VStack align="stretch" spacing="0">
      {faqList?.map((faq: IFaq, index: number) => (
        <AccordionItem
          key={`faq-items-${index}`}
          title={faq.question}
          description={faq.answer}
          isOpen={faq.isOpen}
          onToggle={() => onToggle(faq)}
        />
      ))}
    </VStack>
  );
};

export default memo(Accordion);

import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from './TabButton';
import Section from "./Section";
import Tabs from "./Tabs";


export default function Examples() {
    // Hokk은 컴포넌트 함수 최상위에서 호출해야함!! 다음 함수 내부에서는 안됨
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        //console.log(selectedButton);
        //tabContent = selectedButton;
        //console.log(tabContent);
        setSelectedTopic(selectedButton);
    };

    let tabContent = <p>Please select a topic.</p>;
    // 변수 대안방법
    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id='examples'>
            <Tabs 
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === 'components'}
                            onClick={() => handleSelect('components')}>
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'jsx'}
                            onClick={() => handleSelect('jsx')}>
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'props'}
                            onClick={() => handleSelect('props')}>
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'state'}
                            onClick={() => handleSelect('state')}>
                            State
                        </TabButton>
                    </>
                }>
                {tabContent}
            </Tabs>
        </Section>
    );
}
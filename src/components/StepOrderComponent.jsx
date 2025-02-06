import React, { useState } from "react";
import { Popover, Steps } from "antd";

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        Step {index + 1} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

function StepOrderComponent({ current = 0, items = [] }) {
  const { Step } = Steps;
  const [activeStep, setActiveStep] = useState(current);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div>
      <Steps current={activeStep} progressDot={customDot}>
        {items.map((item, index) => {
          return (
            <Step
              key={item.title}
              title={item.title}
              description={item.description}
              onClick={() => handleStepClick(index)}
            />
          );
        })}
      </Steps>
      <div style={{ marginTop: 20 }}>
        <strong>Current Step:</strong> {items[activeStep]?.title}
      </div>
    </div>
  );
}

export default StepOrderComponent;

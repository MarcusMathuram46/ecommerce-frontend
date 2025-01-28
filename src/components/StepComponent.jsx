import React from 'react'
import { Steps } from "antd";


function StepComponent({ current = 2, items = [] }) {
    const { Step } = Steps;
  return (
    <Steps current={current}>
      {items.map((item) => {
        return (
          <Step
            key={item.title}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </Steps>
  )
}

export default StepComponent
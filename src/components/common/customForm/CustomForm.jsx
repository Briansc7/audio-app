import { inputsType } from "./inputsType";

const CustomForm = ({ formInfo, inputsInfo }) => {
  return (
    <form action={formInfo.action} method={formInfo.method}>
      {inputsInfo.map((section, i) => {
        return (
          <div key={section.sectionName + i}>
            <h1>{section.sectionName}</h1>
            {section.inputs.map((inputInfo, i) => {
              const Element = inputsType[inputInfo.type]?.Element;
              if (Element)
                return (
                  <Element key={inputInfo.type + i} inputData={inputInfo} />
                );
              else return null;
            })}
          </div>
        );
      })}
    </form>
  );
};

export default CustomForm;

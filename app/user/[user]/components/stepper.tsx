export function Stepper({ steps, currentStep }: any) {
  return (
    <div className="flex justify-center mt-10 mb-14 mx-auto">
      {Array.from({ length: steps }, (_, i) => (
        <div key={i} className="flex items-center">
          <div
            className=" w-10 h-10 rounded items-center flex text-white justify-center"
            style={{
              backgroundColor: currentStep === i + 1 ? "#122E69" : "#C2C2C2",
            }}
          >
            {i + 1}
          </div>
          {i < steps - 1 && (
            <hr
              style={{
                width: "40px",
                borderWidth: "2px",
                borderColor: "#C2C2C2",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

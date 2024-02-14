export function Stepper({ steps, currentStep }) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {Array.from({ length: steps }, (_, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: currentStep === i + 1 ? 'blue' : 'grey',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {i + 1}
            </div>
            {i < steps - 1 && <hr style={{ width: '40px', borderWidth: '2px', borderColor: 'grey' }} />}
          </div>
        ))}
      </div>
    );
  }
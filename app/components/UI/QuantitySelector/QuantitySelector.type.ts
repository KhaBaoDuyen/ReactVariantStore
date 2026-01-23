export type QuantitySelectorProps = {
  value: number;                 
  onIncrease: () => void;        
  onDecrease: () => void;         
  min?: number;                   
  max?: number;                  
};

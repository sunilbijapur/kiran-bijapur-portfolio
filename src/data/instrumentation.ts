export interface Instrument {
  id: string;
  name: string;
  fullName: string;
  use: string;
}

export const instruments: Instrument[] = [
  { id: 'in-01', name: 'SEM', fullName: 'Scanning Electron Microscopy', use: 'Surface morphology and microstructure imaging of nanomaterials and catalysts.' },
  { id: 'in-02', name: 'TEM', fullName: 'Transmission Electron Microscopy', use: 'High-resolution imaging of nanoscale structure and crystallinity.' },
  { id: 'in-03', name: 'XRD', fullName: 'X-Ray Diffraction', use: 'Phase identification and crystal structure analysis of synthesised materials.' },
  { id: 'in-04', name: 'Raman', fullName: 'Raman Spectroscopy', use: 'Vibrational fingerprinting of carbon nanostructures and defect analysis.' },
  { id: 'in-05', name: 'XPS', fullName: 'X-Ray Photoelectron Spectroscopy', use: 'Surface elemental composition and oxidation-state analysis.' },
  { id: 'in-06', name: 'BET', fullName: 'Brunauer–Emmett–Teller Surface Area Analysis', use: 'Specific surface area and porosity characterisation.' },
  { id: 'in-07', name: 'FTIR', fullName: 'Fourier-Transform Infrared Spectroscopy', use: 'Functional group identification on material surfaces.' },
  { id: 'in-08', name: 'Electrochemical Workstation', fullName: 'Multi-channel Electrochemical Workstation', use: 'HER/OER activity testing, cyclic voltammetry and stability studies.' },
  { id: 'in-09', name: 'Potentiostat', fullName: 'Potentiostat / Galvanostat', use: 'Precision control and measurement for electrochemical experiments.' },
];

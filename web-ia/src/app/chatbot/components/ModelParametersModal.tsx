import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

interface ModelParametersModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  model: string;
  parameters: string[];
  onInputChange: (event: { target: { name: any; value: any } }) => void;
}

const ModelParametersModal: React.FC<ModelParametersModalProps> = ({
  open,
  onClose,
  onSubmit,
  model,
  parameters,
  onInputChange,
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Enter model parameters for {model}</DialogTitle>
    <DialogContent>
      {parameters.map((parameter) => (
        <TextField
          name={parameter}
          label={parameter}
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={onInputChange}
          key={parameter}
        />
      ))}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onSubmit}>Submit</Button>
    </DialogActions>
  </Dialog>
);

export default ModelParametersModal;
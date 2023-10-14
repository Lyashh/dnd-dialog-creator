import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { ColorResult, SketchPicker } from 'react-color';

type TProps = {
  closeModal: () => void;
  isOpen: boolean;
  colorValue: string;
  handleColorChange: (color: ColorResult) => void;
  title: string;
};

export const ColorEditModal = (props: TProps) => {
  const { closeModal, isOpen, colorValue, handleColorChange, title } = props;

  return (
    <Dialog fullWidth={true} open={isOpen} maxWidth={'xs'} onClose={closeModal}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <SketchPicker className="modal-color-picker" color={colorValue} onChange={handleColorChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';

type TProps = {
  id: number;
};

export const CopyNodeIdButton = (props: TProps) => {
  const copyNodeId = () => {
    navigator.clipboard.writeText(props.id.toString());
  };

  return (
    <IconButton onClick={copyNodeId} sx={{ mb: 1 }}>
      <ContentCopyIcon />
    </IconButton>
  );
};

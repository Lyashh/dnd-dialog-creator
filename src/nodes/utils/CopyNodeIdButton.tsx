import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type TProps = {
  id: number;
};

export const CopyNodeIdButton = (props: TProps) => {
  // copy node id to clipboard
  const copyNodeId = () => {
    navigator.clipboard.writeText(props.id.toString());
  };

  return (
    <Button aria-label="Copy ID" variant="contained" onClick={copyNodeId} sx={{ mb: 1}} startIcon={<ContentCopyIcon />}>
      <Typography variant="body2">ID: {props.id}</Typography>
    </Button>
  );
};

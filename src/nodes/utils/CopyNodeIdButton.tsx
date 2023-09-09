import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const CopyNodeIdButton = (props) => {
  // copy node id to clipboard
  const copyNodeId = () => {
    navigator.clipboard.writeText(props.id);
  };

  return (
    <Button aria-label="Copy ID" variant="contained" onClick={copyNodeId} startIcon={<ContentCopyIcon />}>
      <Typography variant="subtitle1" fontStyle="italic" fontSize="sm" className="margin-bottom-half">
        ID: {props.id}
      </Typography>
    </Button>
  );
};

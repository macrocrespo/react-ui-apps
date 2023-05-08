import { Alert } from 'react-bootstrap';

interface Props {
  text?: string;
}

export const Loading = ({ text }: Props) => {
  return <Alert variant="warning">Loading {text}...</Alert>;
};

import { Alert } from 'react-bootstrap';

interface Props {
  text: string;
}

export const Info = ({ text }: Props) => {
  return <Alert variant="info">{text}</Alert>;
};

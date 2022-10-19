//BOOTSTRAP
import { Alert } from "react-bootstrap";

const MessageId = ({ purchaseID }) => {
	return (
		<Alert variant="success">
			<Alert.Heading>¡Felicitaciones! Creaste tu orden</Alert.Heading>
			<p>
			Gracias por su compra! su id de transacción es: {purchaseID}
			</p>
		</Alert>
	);
};

export default MessageId;

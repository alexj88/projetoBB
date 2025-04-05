import { Card, Button } from "react-bootstrap";

export function CardBanco({src, titulo, acessibilidade, urlBanco}) {
    return (
      <div className="CartoesBancos">
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
              <Card.Title><strong>{titulo}</strong></Card.Title>
              <Card.Text>
                {acessibilidade}
              </Card.Text>
              <Button variant="primary" onClick={() => { window.location.href = urlBanco; }}>Invista Agora!</Button>
            </Card.Body>
          </Card>
     </div>
  );
    
  }
  
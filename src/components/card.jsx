import { Card, Button } from "react-bootstrap";

export function CardBanco({src, titulo, acessibilidade, urlBanco}) {
    return (
      <>
          
          <Card className="mb-3" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
              <Card.Title><strong>{titulo}</strong></Card.Title>
              <Card.Text>
                {acessibilidade}
              </Card.Text>
              <Button variant="primary" onClick={() => { window.location.href = urlBanco; }}>Invista Agora!</Button>
              {/* <Card.Link href={src}> Link</Card.Link> */}
            </Card.Body>
          </Card>
          
     
     </>
  );
    
  }
  
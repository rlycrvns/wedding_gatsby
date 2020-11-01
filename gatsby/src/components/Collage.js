import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const CollageStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

function SinglePhoto({ photo }) {
  return <Img fluid={photo.image.asset.fluid} alt={photo.id} />;
}

export default function Collage({ photos }) {
  return (
    <CollageStyles className="photo-collage">
      {photos.map((photo) => (
        <SinglePhoto key={photo.id} photo={photo} />
      ))}
    </CollageStyles>
  );
}

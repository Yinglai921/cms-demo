import React from 'react';
import { Grid, GridCell, Card, CardPrimaryAction, Typography } from 'rmwc';
import { PRODUCTS_QUERY } from '../../common/queries';
import { useQuery } from '@apollo/react-hooks';

export const DashboardCards: React.FC = () => {
  const { loading, data, error } = useQuery(PRODUCTS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { products } = data;

  return (
    <div>
      {error && <div>error</div>}
      <Grid>
        {products.map((product) => (
          <GridCell span={4} key={product.id}>
            <Card title={product.title}>
              <CardPrimaryAction>
                <div style={{ padding: '1rem' }}>
                  <Typography use="headline6" tag="div">
                    {product.name}
                  </Typography>
                  <Typography
                    use="body1"
                    tag="p"
                    theme="textSecondaryOnBackground"
                  >
                    {product.provider}
                  </Typography>
                </div>
              </CardPrimaryAction>
            </Card>
          </GridCell>
        ))}
      </Grid>
    </div>
  );
};

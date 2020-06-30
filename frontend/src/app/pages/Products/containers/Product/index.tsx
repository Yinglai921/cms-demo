import React from 'react';
import { RouteComponentProps } from 'react-router';

export const Product: React.FC<RouteComponentProps<{ slug: string }>> = ({
  match,
}) => <div>{match.params.slug}</div>;

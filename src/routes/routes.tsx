import React from 'react';

import { routeType } from './interface';

const route = (path: string, components: React.ReactNode): routeType => ({ path, components });

/**
 * Import all page component here
 *
 * example :
 * const Onboarding = React.lazy(() => import('pages/introduction'));
 */

const Homepage = React.lazy(() => import('pages/homepage'));
const PokemonDetailPage = React.lazy(() => import('pages/pokemon-detail'));

const routes: routeType[] = [
  route('/detail', <PokemonDetailPage />),
  route('/', <Homepage />),
];

export default routes;

import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

import { CollectionsOverview } from '../../components'
import Collection from '../Collection'

interface Props extends RouteComponentProps<any> {}

const Shop: React.FC<Props> = ({ match }) => (
  <div className="shop">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
)

export default Shop
